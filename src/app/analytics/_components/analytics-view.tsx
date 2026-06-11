"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "~/app/_components/ui";
import { shiftDayKey, startOfWeekKey, todayLocalKey } from "~/lib/date";
import { api, type RouterOutputs } from "~/trpc/react";

type Adherence = NonNullable<RouterOutputs["analytics"]["goodieAdherence"]>;

export function AnalyticsView() {
  const [today, setToday] = useState("");
  useEffect(() => setToday(todayLocalKey()), []);

  if (today === "") {
    return <p className="text-sm text-neutral-400">Loading…</p>;
  }

  return (
    <div className="space-y-4">
      <AppUsageCard today={today} />
      <div className="grid gap-4 lg:grid-cols-2">
        <GoalEfficiencyCard />
        <GoodieAdherenceCard today={today} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-neutral-900">{value}</div>
      <div className="text-xs text-neutral-500">{label}</div>
    </div>
  );
}

type HeatDay = { date: string; level: number };

function Heatmap({
  days,
  colorFor,
}: {
  days: HeatDay[];
  colorFor: (level: number) => string;
}) {
  const weeks: HeatDay[][] = [];
  days.forEach((d, i) => {
    const col = Math.floor(i / 7);
    const week = weeks[col];
    if (week) week.push(d);
    else weeks[col] = [d];
  });

  return (
    <div className="flex gap-1 overflow-x-auto pb-1">
      {weeks.map((week, ci) => (
        <div key={week[0]?.date ?? String(ci)} className="flex flex-col gap-1">
          {week.map((d) => (
            <div
              key={d.date}
              title={d.date}
              className={`size-3 rounded-sm ${colorFor(d.level)}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function AppUsageCard({ today }: { today: string }) {
  const from = useMemo(() => shiftDayKey(startOfWeekKey(today), -7 * 11), [today]);
  const { data } = api.analytics.appUsage.useQuery({ from, to: today, today });

  return (
    <Card className="p-4">
      <h2 className="mb-3 text-sm font-semibold text-neutral-700">
        Days logged into progress
      </h2>
      {!data ? (
        <p className="text-sm text-neutral-400">Loading…</p>
      ) : (
        <div className="space-y-3">
          <div className="flex gap-8">
            <Stat label="Current streak" value={`${data.currentStreak}d`} />
            <Stat label="Longest streak" value={`${data.longestStreak}d`} />
            <Stat label="Total days" value={String(data.totalDays)} />
          </div>
          <Heatmap
            days={data.days.map((d) => ({ date: d.date, level: d.active ? 1 : 0 }))}
            colorFor={(l) => (l > 0 ? "bg-emerald-500" : "bg-neutral-100")}
          />
        </div>
      )}
    </Card>
  );
}

function deltaLabel(deltaDays: number): string {
  if (deltaDays === 0) return "on time";
  if (deltaDays < 0) return `${-deltaDays}d early`;
  return `${deltaDays}d late`;
}

function GoalEfficiencyCard() {
  const { data } = api.analytics.goalEfficiency.useQuery();

  if (!data) {
    return (
      <Card className="p-4">
        <p className="text-sm text-neutral-400">Loading…</p>
      </Card>
    );
  }

  const pieData = [
    { name: "On time", value: data.onTimeCount, fill: "#10b981" },
    { name: "Late", value: data.lateCount, fill: "#f43f5e" },
  ];

  return (
    <Card className="p-4">
      <h2 className="mb-3 text-sm font-semibold text-neutral-700">
        Goal & task efficiency
      </h2>
      {data.items.length === 0 ? (
        <p className="text-sm text-neutral-400">
          Finish some goals or tasks that had a deadline to see your on-time rate.
        </p>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <div className="h-36 w-36 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={38}
                    outerRadius={64}
                    strokeWidth={0}
                  >
                    {pieData.map((d) => (
                      <Cell key={d.name} fill={d.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="text-3xl font-semibold text-neutral-900">
                {Math.round(data.onTimeRate * 100)}%
              </div>
              <div className="text-sm text-neutral-500">on time</div>
              <div className="mt-1 text-xs text-neutral-400">
                {data.onTimeCount} on time · {data.lateCount} late
              </div>
            </div>
          </div>
          <ul className="mt-3 space-y-1">
            {data.items.slice(0, 6).map((it) => (
              <li
                key={`${it.kind}-${it.id}`}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span className="truncate text-neutral-700">{it.title}</span>
                <span
                  className={`shrink-0 ${it.onTime ? "text-emerald-600" : "text-rose-600"}`}
                >
                  {deltaLabel(it.deltaDays)}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}

function GoodieAdherenceCard({ today }: { today: string }) {
  const from = useMemo(() => shiftDayKey(today, -29), [today]);
  const { data: categories } = api.goodieCategory.list.useQuery({
    activeOnly: true,
  });
  const [picked, setPicked] = useState<string | null>(null);
  const selectedId = picked ?? categories?.[0]?.id ?? null;

  const { data } = api.analytics.goodieAdherence.useQuery(
    { categoryId: selectedId ?? "", from, to: today, today },
    { enabled: selectedId !== null },
  );

  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-neutral-700">
          Goodie adherence (30 days)
        </h2>
        <select
          className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs"
          value={selectedId ?? ""}
          onChange={(e) => setPicked(e.target.value)}
        >
          {(categories ?? []).map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {!categories || categories.length === 0 ? (
        <p className="text-sm text-neutral-400">
          Add goodie categories to see adherence.
        </p>
      ) : !data ? (
        <p className="text-sm text-neutral-400">Loading…</p>
      ) : (
        <AdherenceBody data={data} />
      )}
    </Card>
  );
}

function AdherenceBody({ data }: { data: Adherence }) {
  const color = data.category.color ?? "#10b981";
  return (
    <div className="space-y-3">
      <div className="flex gap-8">
        <Stat label="Current streak" value={`${data.currentStreak}d`} />
        <Stat label="Longest streak" value={`${data.longestStreak}d`} />
        <Stat label="Days hit" value={`${data.hitDays}/${data.totalDays}`} />
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.series} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
            <XAxis
              dataKey="date"
              tickFormatter={(value: string) => value.slice(5).replace("-", "/")}
              interval={Math.ceil(data.series.length / 6)}
              fontSize={10}
              tickLine={false}
            />
            <YAxis fontSize={10} tickLine={false} allowDecimals={false} />
            <Tooltip />
            {data.category.target !== null && (
              <ReferenceLine
                y={data.category.target}
                stroke="#f59e0b"
                strokeDasharray="3 3"
              />
            )}
            <Bar dataKey="value" fill={color} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
