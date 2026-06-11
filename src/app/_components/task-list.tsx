"use client";

import { type FormEvent, useState } from "react";

import { Badge, Button, inputClass } from "~/app/_components/ui";
import { dateToDayKey, formatDay, todayLocalKey } from "~/lib/date";
import { blankToNull } from "~/lib/strings";
import { api, type RouterOutputs } from "~/trpc/react";

type Task = RouterOutputs["goal"]["list"][number]["tasks"][number];
type Parent = { goalId: string } | { projectId: string };

export function TaskList({
  tasks,
  parent,
  invalidate,
}: {
  tasks: Task[];
  parent: Parent;
  invalidate: () => Promise<unknown>;
}) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="mt-2 space-y-0.5">
      {tasks.length === 0 && (
        <p className="text-xs text-neutral-400">No tasks yet.</p>
      )}
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} invalidate={invalidate} />
      ))}
      {adding ? (
        <TaskForm
          parent={parent}
          invalidate={invalidate}
          onDone={() => setAdding(false)}
        />
      ) : (
        <button
          className="mt-1 text-xs font-medium text-neutral-500 hover:text-neutral-800"
          onClick={() => setAdding(true)}
        >
          + Add task
        </button>
      )}
    </div>
  );
}

function TaskRow({
  task,
  invalidate,
}: {
  task: Task;
  invalidate: () => Promise<unknown>;
}) {
  const [editing, setEditing] = useState(false);
  const toggle = api.task.toggleDone.useMutation({
    onSuccess: () => invalidate(),
  });
  const del = api.task.delete.useMutation({ onSuccess: () => invalidate() });

  if (editing) {
    return (
      <TaskForm
        task={task}
        invalidate={invalidate}
        onDone={() => setEditing(false)}
      />
    );
  }

  const dueKey = task.dueDate ? dateToDayKey(task.dueDate) : null;
  const dueLabel = task.dueDate ? formatDay(task.dueDate) : null;
  const overdue = dueKey !== null && !task.done && dueKey < todayLocalKey();
  const dueToday = dueKey !== null && dueKey === todayLocalKey();

  return (
    <div className="group flex items-start gap-2 rounded-md px-1 py-1 hover:bg-neutral-50">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => toggle.mutate({ id: task.id, done: e.target.checked })}
        className="mt-0.5 size-4 shrink-0 cursor-pointer accent-neutral-800"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={`text-sm ${task.done ? "text-neutral-400 line-through" : "text-neutral-800"}`}
          >
            {task.title}
          </span>
          {dueLabel && (
            <Badge
              className={
                overdue
                  ? "bg-rose-100 text-rose-700"
                  : dueToday
                    ? "bg-amber-100 text-amber-700"
                    : "bg-neutral-100 text-neutral-500"
              }
            >
              {dueLabel}
            </Badge>
          )}
        </div>
        {task.notes && (
          <p className="whitespace-pre-wrap text-xs text-neutral-400">
            {task.notes}
          </p>
        )}
      </div>
      <div className="flex shrink-0 gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          className="px-1 text-xs text-neutral-400 hover:text-neutral-700"
          onClick={() => setEditing(true)}
          title="Edit task"
        >
          ✎
        </button>
        <button
          className="px-1 text-xs text-neutral-400 hover:text-rose-600"
          onClick={() => del.mutate({ id: task.id })}
          title="Delete task"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function TaskForm({
  task,
  parent,
  invalidate,
  onDone,
}: {
  task?: Task;
  parent?: Parent;
  invalidate: () => Promise<unknown>;
  onDone: () => void;
}) {
  const onSuccess = () => {
    onDone();
    return invalidate();
  };
  const create = api.task.create.useMutation({ onSuccess });
  const update = api.task.update.useMutation({ onSuccess });
  const pending = create.isPending || update.isPending;

  const [title, setTitle] = useState(task?.title ?? "");
  const [notes, setNotes] = useState(task?.notes ?? "");
  const [dueDate, setDueDate] = useState(
    task?.dueDate ? dateToDayKey(task.dueDate) : "",
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (task) {
      update.mutate({
        id: task.id,
        title,
        notes: blankToNull(notes),
        dueDate: blankToNull(dueDate),
      });
    } else if (parent) {
      create.mutate({
        title,
        notes: blankToNull(notes) ?? undefined,
        dueDate: blankToNull(dueDate),
        ...parent,
      });
    }
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-2"
    >
      <input
        className={`${inputClass} py-1 text-sm`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        autoFocus
      />
      <div className="flex items-center gap-2">
        <span className="text-xs text-neutral-500">Due</span>
        <input
          type="date"
          className={`${inputClass} w-auto py-1 text-xs`}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <textarea
        className={`${inputClass} py-1 text-xs`}
        rows={2}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes (optional)"
      />
      <div className="flex gap-2">
        <Button
          variant="primary"
          type="submit"
          className="px-2 py-1 text-xs"
          disabled={pending || !title.trim()}
        >
          {task ? "Save" : "Add task"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="px-2 py-1 text-xs"
          onClick={onDone}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
