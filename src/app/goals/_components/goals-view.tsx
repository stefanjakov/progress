"use client";

import { type FormEvent, useState } from "react";

import {
  Button,
  Card,
  EmptyState,
  inputClass,
  labelClass,
} from "~/app/_components/ui";
import {
  GOAL_HORIZON_LABEL,
  GOAL_HORIZONS,
  type GoalHorizon,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api } from "~/trpc/react";

import { GoalCard } from "./goal-card";

export function GoalsView() {
  const [goals] = api.goal.list.useSuspenseQuery();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="space-y-6">
      <Button variant="primary" onClick={() => setShowAdd((v) => !v)}>
        {showAdd ? "Close" : "+ Add goal"}
      </Button>
      {showAdd && <AddGoalForm onDone={() => setShowAdd(false)} />}

      {goals.length === 0 ? (
        <EmptyState>No goals yet. Add your first one above.</EmptyState>
      ) : (
        GOAL_HORIZONS.map((h) => {
          const items = goals.filter((g) => g.horizon === h);
          return (
            <section key={h}>
              <h2 className="mb-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                {GOAL_HORIZON_LABEL[h]}
              </h2>
              {items.length === 0 ? (
                <p className="text-sm text-neutral-400">None yet.</p>
              ) : (
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((g) => (
                    <GoalCard key={g.id} goal={g} />
                  ))}
                </div>
              )}
            </section>
          );
        })
      )}
    </div>
  );
}

function AddGoalForm({ onDone }: { onDone: () => void }) {
  const utils = api.useUtils();
  const create = api.goal.create.useMutation({
    onSuccess: () => {
      onDone();
      return utils.goal.list.invalidate();
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [horizon, setHorizon] = useState<GoalHorizon>("SHORT_TERM");
  const [targetDate, setTargetDate] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    create.mutate({
      title,
      horizon,
      description: blankToNull(description) ?? undefined,
      targetDate: blankToNull(targetDate),
    });
  };

  return (
    <Card className="p-4">
      <form onSubmit={submit} className="space-y-3">
        <input
          className={inputClass}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Goal title"
          autoFocus
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Horizon</label>
            <select
              className={inputClass}
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
              className={inputClass}
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>
        </div>
        <textarea
          className={inputClass}
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
        />
        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            type="submit"
            disabled={create.isPending || !title.trim()}
          >
            {create.isPending ? "Adding…" : "Add goal"}
          </Button>
          <Button type="button" variant="ghost" onClick={onDone}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
