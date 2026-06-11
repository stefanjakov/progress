"use client";

import { type FormEvent, useEffect, useState } from "react";

import { Badge, Button, inputClass } from "~/app/_components/ui";
import {
  dateToDayKey,
  dayKeyToDate,
  formatDay,
  formatWeekday,
  shiftDayKey,
  startOfWeekKey,
  todayLocalKey,
} from "~/lib/date";
import { api, type RouterOutputs } from "~/trpc/react";

type WeekData = RouterOutputs["planner"]["week"];
type Todo = WeekData["todos"][number];
type Task = WeekData["tasks"][number];

function bucketByDay<T>(items: T[], keyOf: (item: T) => string) {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const key = keyOf(item);
    const existing = map.get(key);
    if (existing) existing.push(item);
    else map.set(key, [item]);
  }
  return map;
}

export function WeekView() {
  // Resolve the current week on the client so it matches the user's timezone
  // (and to avoid an SSR/client hydration mismatch on the date).
  const [weekStart, setWeekStart] = useState("");
  useEffect(() => setWeekStart(startOfWeekKey(todayLocalKey())), []);
  const enabled = weekStart !== "";

  const utils = api.useUtils();
  const weekQuery = api.planner.week.useQuery({ start: weekStart }, { enabled });
  const invalidate = () => utils.planner.week.invalidate({ start: weekStart });

  const todosByDay = bucketByDay(weekQuery.data?.todos ?? [], (t) =>
    dateToDayKey(t.date),
  );
  const tasksByDay = bucketByDay(weekQuery.data?.tasks ?? [], (t) =>
    t.dueDate ? dateToDayKey(t.dueDate) : "",
  );

  const today = enabled ? todayLocalKey() : "";
  const dayKeys = enabled
    ? Array.from({ length: 7 }, (_, i) => shiftDayKey(weekStart, i))
    : [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          onClick={() => setWeekStart((w) => shiftDayKey(w, -7))}
          disabled={!enabled}
        >
          ‹ Prev week
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-neutral-600">
            {enabled ? `Week of ${formatDay(dayKeyToDate(weekStart))}` : "…"}
          </span>
          {enabled && weekStart !== startOfWeekKey(today) && (
            <Button
              variant="secondary"
              onClick={() => setWeekStart(startOfWeekKey(todayLocalKey()))}
            >
              This week
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          onClick={() => setWeekStart((w) => shiftDayKey(w, 7))}
          disabled={!enabled}
        >
          Next week ›
        </Button>
      </div>

      {!enabled || weekQuery.isLoading ? (
        <p className="text-sm text-neutral-400">Loading…</p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {dayKeys.map((key) => (
            <DayColumn
              key={key}
              dayKey={key}
              isToday={key === today}
              todos={todosByDay.get(key) ?? []}
              tasks={tasksByDay.get(key) ?? []}
              invalidate={invalidate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DayColumn({
  dayKey,
  isToday,
  todos,
  tasks,
  invalidate,
}: {
  dayKey: string;
  isToday: boolean;
  todos: Todo[];
  tasks: Task[];
  invalidate: () => Promise<unknown>;
}) {
  const empty = tasks.length === 0 && todos.length === 0;

  return (
    <div
      className={`flex min-h-40 min-w-0 flex-col rounded-lg border bg-white p-2 ${
        isToday ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <div className="mb-2 flex items-baseline justify-between">
        <span
          className={`text-sm font-semibold ${isToday ? "text-neutral-900" : "text-neutral-600"}`}
        >
          {formatWeekday(dayKeyToDate(dayKey))} {dayKey.slice(8)}
        </span>
        {isToday && <Badge className="bg-neutral-900 text-white">Today</Badge>}
      </div>

      <div className="flex-1 space-y-1">
        {tasks.map((task) => (
          <WeekTaskRow key={task.id} task={task} invalidate={invalidate} />
        ))}
        {todos.map((todo) => (
          <WeekTodoRow key={todo.id} todo={todo} invalidate={invalidate} />
        ))}
        {empty && <p className="text-xs text-neutral-300">—</p>}
      </div>

      <DayAdd date={dayKey} invalidate={invalidate} />
    </div>
  );
}

function WeekTaskRow({
  task,
  invalidate,
}: {
  task: Task;
  invalidate: () => Promise<unknown>;
}) {
  const toggle = api.task.toggleDone.useMutation({
    onSuccess: () => invalidate(),
  });
  const parent = task.goal ?? task.project;
  const isGoal = task.goal !== null;

  return (
    <div className="flex items-start gap-1.5 rounded-md bg-sky-50 px-1.5 py-1">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => toggle.mutate({ id: task.id, done: e.target.checked })}
        className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-neutral-800"
      />
      <div className="min-w-0">
        <div
          className={`text-xs ${task.done ? "text-neutral-400 line-through" : "text-neutral-800"}`}
        >
          {task.title}
        </div>
        {parent && (
          <div className="flex items-center gap-1 text-[10px] text-neutral-400">
            <span
              className={`inline-block size-1.5 shrink-0 rounded-full ${isGoal ? "bg-violet-400" : "bg-sky-400"}`}
            />
            <span className="truncate">{parent.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function WeekTodoRow({
  todo,
  invalidate,
}: {
  todo: Todo;
  invalidate: () => Promise<unknown>;
}) {
  const toggle = api.dailyTodo.toggleDone.useMutation({
    onSuccess: () => invalidate(),
  });
  const del = api.dailyTodo.delete.useMutation({ onSuccess: () => invalidate() });

  return (
    <div className="group flex items-start gap-1.5 rounded-md px-1.5 py-1 hover:bg-neutral-50">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => toggle.mutate({ id: todo.id, done: e.target.checked })}
        className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-neutral-800"
      />
      <span
        className={`min-w-0 flex-1 text-xs ${todo.done ? "text-neutral-400 line-through" : "text-neutral-700"}`}
      >
        {todo.title}
      </span>
      <button
        className="text-xs text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100 hover:text-rose-600"
        onClick={() => del.mutate({ id: todo.id })}
        title="Delete"
      >
        ✕
      </button>
    </div>
  );
}

function DayAdd({
  date,
  invalidate,
}: {
  date: string;
  invalidate: () => Promise<unknown>;
}) {
  const [title, setTitle] = useState("");
  const create = api.dailyTodo.create.useMutation({
    onSuccess: () => {
      setTitle("");
      return invalidate();
    },
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    create.mutate({ title, date });
  };

  return (
    <form onSubmit={submit} className="mt-2">
      <input
        className={`${inputClass} px-2 py-1 text-xs`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="+ Add"
      />
    </form>
  );
}
