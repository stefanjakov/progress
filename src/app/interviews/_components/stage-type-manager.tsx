"use client";

import { type FormEvent, useState } from "react";

import { Button, Card, EmptyState, inputClass } from "~/app/_components/ui";
import { api, type RouterOutputs } from "~/trpc/react";

type StageType = RouterOutputs["stageType"]["list"][number];

export function StageTypeManager({ stageTypes }: { stageTypes: StageType[] }) {
  const utils = api.useUtils();
  const onSuccess = () => utils.invalidate();

  const create = api.stageType.create.useMutation({ onSuccess });
  const seed = api.stageType.seedDefaults.useMutation({ onSuccess });

  const [name, setName] = useState("");

  const add = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    create.mutate({ name }, { onSuccess: () => setName("") });
  };

  return (
    <Card className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-700">Stage types</h2>
        {stageTypes.length === 0 && (
          <Button onClick={() => seed.mutate()} disabled={seed.isPending}>
            Add default set
          </Button>
        )}
      </div>

      {stageTypes.length === 0 ? (
        <EmptyState>
          No stage types yet. Add the default set or create your own.
        </EmptyState>
      ) : (
        <ul className="mb-3 flex flex-wrap gap-2">
          {stageTypes.map((t) => (
            <StageTypeChip key={t.id} stageType={t} />
          ))}
        </ul>
      )}

      <form onSubmit={add} className="flex gap-2">
        <input
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New stage type name"
        />
        <Button variant="primary" type="submit" disabled={create.isPending || !name.trim()}>
          Add
        </Button>
      </form>
      {create.error && (
        <p className="mt-2 text-sm text-rose-600">{create.error.message}</p>
      )}
    </Card>
  );
}

function StageTypeChip({ stageType }: { stageType: StageType }) {
  const utils = api.useUtils();
  const onSuccess = () => utils.invalidate();
  const rename = api.stageType.rename.useMutation({ onSuccess });
  const del = api.stageType.delete.useMutation({ onSuccess });

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(stageType.name);

  if (editing) {
    return (
      <li>
        <form
          className="flex items-center gap-1"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            rename.mutate(
              { id: stageType.id, name },
              { onSuccess: () => setEditing(false) },
            );
          }}
        >
          <input
            className={`${inputClass} w-40 py-1`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <Button variant="primary" type="submit" className="px-2 py-1 text-xs">
            Save
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="px-2 py-1 text-xs"
            onClick={() => {
              setName(stageType.name);
              setEditing(false);
            }}
          >
            Cancel
          </Button>
        </form>
      </li>
    );
  }

  return (
    <li className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 py-1 pr-1.5 pl-3 text-sm">
      <span className="text-neutral-700">{stageType.name}</span>
      <button
        className="rounded-full px-1 text-xs text-neutral-400 hover:text-neutral-700"
        onClick={() => setEditing(true)}
        title="Rename"
      >
        ✎
      </button>
      <button
        className="rounded-full px-1 text-xs text-neutral-400 hover:text-rose-600"
        onClick={() => del.mutate({ id: stageType.id })}
        title="Delete"
      >
        ✕
      </button>
      {del.error && (
        <span className="ml-1 max-w-xs text-xs text-rose-600">
          {del.error.message}
        </span>
      )}
    </li>
  );
}
