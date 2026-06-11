"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";

import { Card } from "~/app/_components/ui";
import { dateToDayKey, dayKeyToDate, formatDay, todayLocalKey } from "~/lib/date";
import { api, type RouterOutputs } from "~/trpc/react";

type Summary = RouterOutputs["dashboard"]["summary"];
type Invalidate = () => Promise<unknown>;

export function DashboardView() {
  const [today, setToday] = useState("");
  useEffect(() => setToday(todayLocalKey()), []);
  const enabled = today !== "";

  const utils = api.useUtils();
  const query = api.dashboard.summary.useQuery({ today }, { enabled });
  const invalidate = () => utils.dashboard.summary.invalidate({ today });
  const data = query.data;

  if (!enabled || query.isLoading || !data) {
    return <p className="text-sm text-neutral-400">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500">{formatDay(dayKeyToDate(today))}</p>

      <StatsRow counts={data.counts} />

      <div className="grid gap-4 lg:grid-cols-2">
        <TasksCard
          dueSoon={data.dueSoon}
          overdue={data.overdue}
          today={today}
          invalidate={invalidate}
        />
        <TodosCard todos={data.todayTodos} invalidate={invalidate} />
        <GoodiesCard goodies={data.goodies} />
        <InterviewsCard stages={data.upcomingStages} />
      </div>
    </div>
  );
}

function StatsRow({ counts }: { counts: Summary["counts"] }) {
  const items = [
    { label: "Active goals", value: counts.activeGoals, href: "/goals" },
    { label: "Active projects", value: counts.activeProjects, href: "/projects" },
    {
      label: "Open opportunities",
      value: counts.openOpportunities,
      href: "/interviews",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((it) => (
        <Link key={it.label} href={it.href}>
          <Card className="p-4 transition-colors hover:border-neutral-400">
            <div className="text-2xl font-semibold text-neutral-900">
              {it.value}
            </div>
            <div className="text-xs text-neutral-500">{it.label}</div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

function SectionCard({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string;
  href: string;
  linkLabel: string;
  children: ReactNode;
}) {
  return (
    <Card className="flex flex-col p-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-700">{title}</h2>
        <Link
          href={href}
          className="text-xs text-neutral-400 hover:text-neutral-700"
        >
          {linkLabel} →
        </Link>
      </div>
      {children}
    </Card>
  );
}

function TasksCard({
  dueSoon,
  overdue,
  today,
  invalidate,
}: {
  dueSoon: Summary["dueSoon"];
  overdue: Summary["overdue"];
  today: string;
  invalidate: Invalidate;
}) {
  const empty = dueSoon.length === 0 && overdue.length === 0;
  return (
    <SectionCard title="Tasks" href="/goals" linkLabel="Goals">
      {empty ? (
        <p className="text-sm text-neutral-400">Nothing due. Nice.</p>
      ) : (
        <div className="space-y-3">
          {overdue.length > 0 && (
            <div>
              <div className="mb-1 text-xs font-medium text-rose-600">
                Overdue ({overdue.length})
              </div>
              <div className="space-y-0.5">
                {overdue.map((t) => (
                  <DashTaskRow
                    key={t.id}
                    task={t}
                    today={today}
                    invalidate={invalidate}
                  />
                ))}
              </div>
            </div>
          )}
          {dueSoon.length > 0 && (
            <div>
              <div className="mb-1 text-xs font-medium text-neutral-500">
                Due soon ({dueSoon.length})
              </div>
              <div className="space-y-0.5">
                {dueSoon.map((t) => (
                  <DashTaskRow
                    key={t.id}
                    task={t}
                    today={today}
                    invalidate={invalidate}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </SectionCard>
  );
}

function DashTaskRow({
  task,
  today,
  invalidate,
}: {
  task: Summary["dueSoon"][number];
  today: string;
  invalidate: Invalidate;
}) {
  const toggle = api.task.toggleDone.useMutation({
    onSuccess: () => invalidate(),
  });
  const parent = task.goal?.title ?? task.project?.title ?? null;
  const dueKey = task.dueDate ? dateToDayKey(task.dueDate) : null;
  const isOverdue = dueKey !== null && dueKey < today;

  return (
    <label className="flex items-start gap-2 rounded px-1 py-0.5 hover:bg-neutral-50">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => toggle.mutate({ id: task.id, done: e.target.checked })}
        className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-neutral-800"
      />
      <span className="min-w-0 flex-1 text-sm text-neutral-700">
        {task.title}
        {parent && <span className="text-neutral-400"> · {parent}</span>}
      </span>
      {task.dueDate && (
        <span
          className={`shrink-0 text-xs ${isOverdue ? "text-rose-600" : "text-neutral-400"}`}
        >
          {formatDay(task.dueDate)}
        </span>
      )}
    </label>
  );
}

function TodosCard({
  todos,
  invalidate,
}: {
  todos: Summary["todayTodos"];
  invalidate: Invalidate;
}) {
  const done = todos.filter((t) => t.done).length;
  const title =
    todos.length > 0 ? `Today's todos (${done}/${todos.length})` : "Today's todos";
  return (
    <SectionCard title={title} href="/todos" linkLabel="Week">
      {todos.length === 0 ? (
        <p className="text-sm text-neutral-400">No todos for today.</p>
      ) : (
        <div className="space-y-0.5">
          {todos.map((todo) => (
            <DashTodoRow key={todo.id} todo={todo} invalidate={invalidate} />
          ))}
        </div>
      )}
    </SectionCard>
  );
}

function DashTodoRow({
  todo,
  invalidate,
}: {
  todo: Summary["todayTodos"][number];
  invalidate: Invalidate;
}) {
  const toggle = api.dailyTodo.toggleDone.useMutation({
    onSuccess: () => invalidate(),
  });
  return (
    <label className="flex items-center gap-2 rounded px-1 py-0.5 hover:bg-neutral-50">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => toggle.mutate({ id: todo.id, done: e.target.checked })}
        className="size-3.5 shrink-0 cursor-pointer accent-neutral-800"
      />
      <span
        className={`text-sm ${todo.done ? "text-neutral-400 line-through" : "text-neutral-700"}`}
      >
        {todo.title}
      </span>
    </label>
  );
}

function GoodiesCard({ goodies }: { goodies: Summary["goodies"] }) {
  return (
    <SectionCard title="Today's goodies" href="/goodies" linkLabel="Goodies">
      {goodies.length === 0 ? (
        <p className="text-sm text-neutral-400">No active categories.</p>
      ) : (
        <div className="space-y-1">
          {goodies.map((g) => {
            const hit = g.target !== null && g.value >= g.target;
            const display =
              g.type === "BOOLEAN"
                ? g.value > 0
                  ? "✓"
                  : "—"
                : `${g.value}${g.target !== null ? ` / ${g.target}` : ""}${g.unit ? ` ${g.unit}` : ""}`;
            return (
              <div key={g.id} className="flex items-center gap-2 text-sm">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: g.color ?? "#a3a3a3" }}
                />
                <span className="flex-1 truncate text-neutral-700">
                  {g.name}
                </span>
                <span className="text-neutral-500 tabular-nums">{display}</span>
                {hit && <span className="text-emerald-500">✓</span>}
              </div>
            );
          })}
        </div>
      )}
    </SectionCard>
  );
}

function InterviewsCard({ stages }: { stages: Summary["upcomingStages"] }) {
  return (
    <SectionCard
      title="Upcoming interviews"
      href="/interviews"
      linkLabel="Interviews"
    >
      {stages.length === 0 ? (
        <p className="text-sm text-neutral-400">No scheduled stages.</p>
      ) : (
        <div className="space-y-1.5">
          {stages.map((s) => (
            <div key={s.id} className="flex items-start justify-between gap-2">
              <div className="min-w-0 text-sm text-neutral-700">
                {s.opportunity.company}{" "}
                <span className="text-neutral-400">· {s.stageType.name}</span>
              </div>
              {s.scheduledAt && (
                <span className="shrink-0 text-xs text-neutral-400">
                  {new Date(s.scheduledAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
}
