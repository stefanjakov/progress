"use client";

import { type FormEvent, useState } from "react";

import { TaskList } from "~/app/_components/task-list";
import {
  Badge,
  Button,
  Card,
  inputClass,
  labelClass,
  selectInlineClass,
} from "~/app/_components/ui";
import { dateToDayKey, formatDay } from "~/lib/date";
import {
  GOAL_HORIZON_LABEL,
  GOAL_HORIZONS,
  GOAL_STATUS_COLOR,
  GOAL_STATUS_LABEL,
  GOAL_STATUSES,
  type GoalHorizon,
  type GoalStatus,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api, type RouterOutputs } from "~/trpc/react";

type Goal = RouterOutputs["goal"]["list"][number];

export function GoalCard({ goal }: { goal: Goal }) {
  const utils = api.useUtils();
  const invalidate = () => utils.goal.list.invalidate();
  const setStatus = api.goal.setStatus.useMutation({ onSuccess: invalidate });
  const del = api.goal.delete.useMutation({ onSuccess: invalidate });
  const [editing, setEditing] = useState(false);

  const total = goal.tasks.length;
  const done = goal.tasks.filter((t) => t.done).length;
  const completed = goal.status === "COMPLETED";

  return (
    <Card className="p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`font-semibold ${completed ? "text-neutral-400 line-through" : "text-neutral-900"}`}
            >
              {goal.title}
            </span>
            <Badge className={GOAL_STATUS_COLOR[goal.status]}>
              {GOAL_STATUS_LABEL[goal.status]}
            </Badge>
          </div>
          {goal.description && (
            <p className="mt-1 whitespace-pre-wrap text-sm text-neutral-500">
              {goal.description}
            </p>
          )}
          {goal.targetDate && (
            <p className="mt-1 text-xs text-neutral-400">
              Target: {formatDay(goal.targetDate)}
            </p>
          )}
        </div>
        <select
          className={selectInlineClass}
          value={goal.status}
          onChange={(e) =>
            setStatus.mutate({
              id: goal.id,
              status: e.target.value as GoalStatus,
            })
          }
        >
          {GOAL_STATUSES.map((s) => (
            <option key={s} value={s}>
              {GOAL_STATUS_LABEL[s]}
            </option>
          ))}
        </select>
      </div>

      {total > 0 && (
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: `${Math.round((done / total) * 100)}%` }}
            />
          </div>
          <span className="shrink-0 text-xs text-neutral-400">
            {done}/{total}
          </span>
        </div>
      )}

      <TaskList
        tasks={goal.tasks}
        parent={{ goalId: goal.id }}
        invalidate={invalidate}
      />

      <div className="mt-2 flex items-center gap-1 border-t border-neutral-100 pt-2">
        <Button
          variant="ghost"
          className="px-2 py-1 text-xs"
          onClick={() => setEditing((v) => !v)}
        >
          Edit
        </Button>
        <button
          className="ml-auto px-2 py-1 text-xs text-neutral-400 hover:text-rose-600"
          onClick={() => {
            if (window.confirm(`Delete goal "${goal.title}" and its tasks?`)) {
              del.mutate({ id: goal.id });
            }
          }}
        >
          Delete
        </button>
      </div>

      {editing && <EditGoalForm goal={goal} onDone={() => setEditing(false)} />}
    </Card>
  );
}

function EditGoalForm({ goal, onDone }: { goal: Goal; onDone: () => void }) {
  const utils = api.useUtils();
  const update = api.goal.update.useMutation({
    onSuccess: () => {
      onDone();
      return utils.goal.list.invalidate();
    },
  });

  const [title, setTitle] = useState(goal.title);
  const [description, setDescription] = useState(goal.description ?? "");
  const [horizon, setHorizon] = useState<GoalHorizon>(goal.horizon);
  const [targetDate, setTargetDate] = useState(
    goal.targetDate ? dateToDayKey(goal.targetDate) : "",
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    update.mutate({
      id: goal.id,
      title,
      horizon,
      description: blankToNull(description),
      targetDate: blankToNull(targetDate),
    });
  };

  return (
    <form
      onSubmit={submit}
      className="mt-2 space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-2"
    >
      <input
        className={`${inputClass} py-1 text-sm`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Goal title"
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Horizon</label>
          <select
            className={`${inputClass} py-1 text-xs`}
            value={horizon}
            onChange={(e) => setHorizon(e.target.value as GoalHorizon)}
          >
            {GOAL_HORIZONS.map((h) => (
              <option key={h} value={h}>
                {GOAL_HORIZON_LABEL[h]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Target date</label>
          <input
            type="date"
            className={`${inputClass} py-1 text-xs`}
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>
      </div>
      <textarea
        className={`${inputClass} py-1 text-xs`}
        rows={2}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <div className="flex gap-2">
        <Button
          variant="primary"
          type="submit"
          className="px-2 py-1 text-xs"
          disabled={update.isPending || !title.trim()}
        >
          Save
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
