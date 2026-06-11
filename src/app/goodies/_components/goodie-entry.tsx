"use client";

import { type ChangeEvent, useState } from "react";

import { Badge, Button, Card, inputClass } from "~/app/_components/ui";
import { api, type RouterOutputs } from "~/trpc/react";

type Entry = RouterOutputs["goodieLog"]["getDay"][number];
type ControlProps = {
  entry: Entry;
  date: string;
  invalidate: () => Promise<unknown>;
};

export function GoodieEntry({ entry, date, invalidate }: ControlProps) {
  const hit = entry.target !== null && entry.value >= entry.target;

  return (
    <Card className="flex items-center justify-between gap-3 p-3">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className="size-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: entry.color ?? "#a3a3a3" }}
        />
        <div className="min-w-0">
          <div className="truncate font-medium text-neutral-800">
            {entry.name}
          </div>
          {entry.target !== null && (
            <div className="text-xs text-neutral-400">
              Target {entry.target}
              {entry.unit ? ` ${entry.unit}` : ""}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GoodieControl entry={entry} date={date} invalidate={invalidate} />
        {hit && <Badge className="bg-emerald-100 text-emerald-700">Hit</Badge>}
      </div>
    </Card>
  );
}

function GoodieControl(props: ControlProps) {
  if (props.entry.type === "BOOLEAN") return <BooleanControl {...props} />;
  if (props.entry.type === "COUNT") return <CountControl {...props} />;
  return <NumberControl {...props} />;
}

function BooleanControl({ entry, date, invalidate }: ControlProps) {
  const toggle = api.goodieLog.toggle.useMutation({
    onSuccess: () => invalidate(),
  });
  const on = entry.value > 0;

  return (
    <button
      onClick={() => toggle.mutate({ categoryId: entry.id, date })}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        on
          ? "bg-emerald-500 text-white hover:bg-emerald-600"
          : "border border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50"
      }`}
    >
      {on ? "✓ Done" : "Mark done"}
    </button>
  );
}

function CountControl({ entry, date, invalidate }: ControlProps) {
  const inc = api.goodieLog.increment.useMutation({
    onSuccess: () => invalidate(),
  });

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="secondary"
        className="size-8 p-0 text-base"
        onClick={() => inc.mutate({ categoryId: entry.id, date, delta: -1 })}
        disabled={entry.value <= 0}
      >
        −
      </Button>
      <span className="min-w-14 text-center text-sm text-neutral-800 tabular-nums">
        {entry.value}
        {entry.target !== null ? ` / ${entry.target}` : ""}
        {entry.unit ? ` ${entry.unit}` : ""}
      </span>
      <Button
        variant="secondary"
        className="size-8 p-0 text-base"
        onClick={() => inc.mutate({ categoryId: entry.id, date, delta: 1 })}
      >
        +
      </Button>
    </div>
  );
}

function NumberControl({ entry, date, invalidate }: ControlProps) {
  const set = api.goodieLog.set.useMutation({ onSuccess: () => invalidate() });
  const [v, setV] = useState(String(entry.value));

  const commit = () => {
    const parsed = Number(v);
    set.mutate({
      categoryId: entry.id,
      date,
      value: Number.isFinite(parsed) && parsed >= 0 ? parsed : 0,
    });
  };

  return (
    <div className="flex items-center gap-1">
      <input
        type="number"
        step="any"
        min="0"
        value={v}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setV(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.currentTarget.blur();
        }}
        className={`${inputClass} w-20 py-1 text-right`}
      />
      {entry.unit && <span className="text-xs text-neutral-400">{entry.unit}</span>}
    </div>
  );
}
