"use client";

import { useEffect, useState } from "react";

import { Button, EmptyState, inputClass } from "~/app/_components/ui";
import { dayKeyToDate, formatDay, shiftDayKey, todayLocalKey } from "~/lib/date";
import { api } from "~/trpc/react";

import { GoodieCategoryManager } from "./goodie-category-manager";
import { GoodieEntry } from "./goodie-entry";

export function GoodiesView() {
  const [date, setDate] = useState("");
  useEffect(() => setDate(todayLocalKey()), []);
  const enabled = date !== "";

  const [showManager, setShowManager] = useState(false);

  const utils = api.useUtils();
  const dayQuery = api.goodieLog.getDay.useQuery({ date }, { enabled });
  const entries = dayQuery.data ?? [];
  const invalidate = () => utils.goodieLog.getDay.invalidate({ date });

  const isToday = enabled && date === todayLocalKey();

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          onClick={() => setDate((d) => shiftDayKey(d, -1))}
          disabled={!enabled}
        >
          ‹ Prev
        </Button>
        <div className="flex items-center gap-2">
          <input
            type="date"
            className={`${inputClass} w-auto`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {!isToday && enabled && (
            <Button variant="secondary" onClick={() => setDate(todayLocalKey())}>
              Today
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          onClick={() => setDate((d) => shiftDayKey(d, 1))}
          disabled={!enabled}
        >
          Next ›
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {enabled ? formatDay(dayKeyToDate(date)) : "…"}
          {isToday && (
            <span className="ml-2 text-sm font-normal text-neutral-400">
              Today
            </span>
          )}
        </h2>
        <Button onClick={() => setShowManager((v) => !v)}>
          {showManager ? "Done" : "Manage categories"}
        </Button>
      </div>

      {showManager && <GoodieCategoryManager onChanged={invalidate} />}

      {!enabled || dayQuery.isLoading ? (
        <p className="text-sm text-neutral-400">Loading…</p>
      ) : entries.length === 0 ? (
        <EmptyState>
          No active categories. Add some with “Manage categories”.
        </EmptyState>
      ) : (
        <div className="space-y-2">
          {entries.map((entry) => (
            <GoodieEntry
              key={`${date}-${entry.id}`}
              entry={entry}
              date={date}
              invalidate={invalidate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
