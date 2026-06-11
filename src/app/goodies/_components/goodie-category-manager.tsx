"use client";

import { type FormEvent, useState } from "react";

import { Button, Card, inputClass, labelClass } from "~/app/_components/ui";
import {
  GOODIE_TYPE_LABEL,
  GOODIE_TYPES,
  type GoodieType,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api, type RouterOutputs } from "~/trpc/react";

type Category = RouterOutputs["goodieCategory"]["list"][number];

export function GoodieCategoryManager({
  onChanged,
}: {
  onChanged: () => Promise<unknown>;
}) {
  const utils = api.useUtils();
  const refresh = () =>
    Promise.all([utils.goodieCategory.list.invalidate(), onChanged()]);

  const catQuery = api.goodieCategory.list.useQuery({ activeOnly: false });
  const categories = catQuery.data ?? [];
  const seed = api.goodieCategory.seedDefaults.useMutation({
    onSuccess: () => refresh(),
  });

  return (
    <Card className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-700">Categories</h2>
        {categories.length === 0 && (
          <Button onClick={() => seed.mutate()} disabled={seed.isPending}>
            Add starter set
          </Button>
        )}
      </div>

      <AddCategoryForm onDone={refresh} />

      {categories.length > 0 && (
        <ul className="divide-y divide-neutral-100">
          {categories.map((c) => (
            <CategoryRow key={c.id} category={c} refresh={refresh} />
          ))}
        </ul>
      )}
    </Card>
  );
}

function AddCategoryForm({ onDone }: { onDone: () => Promise<unknown> }) {
  const [name, setName] = useState("");
  const [type, setType] = useState<GoodieType>("BOOLEAN");
  const [target, setTarget] = useState("");
  const [unit, setUnit] = useState("");
  const [color, setColor] = useState("#10b981");

  const create = api.goodieCategory.create.useMutation({
    onSuccess: () => {
      setName("");
      setTarget("");
      setUnit("");
      return onDone();
    },
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const parsed = target.trim() === "" ? null : Number(target);
    const validTarget =
      parsed !== null && Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
    create.mutate({
      name,
      type,
      target: validTarget,
      unit: blankToNull(unit) ?? undefined,
      color,
    });
  };

  return (
    <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
      <div className="min-w-40 flex-1">
        <label className={labelClass}>Name</label>
        <input
          className={`${inputClass} py-1`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Meditate"
        />
      </div>
      <div>
        <label className={labelClass}>Type</label>
        <select
          className={`${inputClass} py-1`}
          value={type}
          onChange={(e) => setType(e.target.value as GoodieType)}
        >
          {GOODIE_TYPES.map((t) => (
            <option key={t} value={t}>
              {GOODIE_TYPE_LABEL[t]}
            </option>
          ))}
        </select>
      </div>
      <div className="w-20">
        <label className={labelClass}>Target</label>
        <input
          type="number"
          min="0"
          step="any"
          className={`${inputClass} py-1`}
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="—"
        />
      </div>
      <div className="w-20">
        <label className={labelClass}>Unit</label>
        <input
          className={`${inputClass} py-1`}
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="hrs"
        />
      </div>
      <div>
        <label className={labelClass}>Color</label>
        <input
          type="color"
          className="h-8 w-10 cursor-pointer rounded border border-neutral-300"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <Button
        variant="primary"
        type="submit"
        disabled={create.isPending || !name.trim()}
      >
        Add
      </Button>
    </form>
  );
}

function CategoryRow({
  category,
  refresh,
}: {
  category: Category;
  refresh: () => Promise<unknown>;
}) {
  const setActive = api.goodieCategory.setActive.useMutation({
    onSuccess: () => refresh(),
  });
  const del = api.goodieCategory.delete.useMutation({
    onSuccess: () => refresh(),
  });
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <EditCategoryForm
        category={category}
        refresh={refresh}
        onDone={() => setEditing(false)}
      />
    );
  }

  return (
    <li
      className={`flex items-center justify-between gap-2 py-2 ${category.active ? "" : "opacity-50"}`}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span
          className="size-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: category.color ?? "#a3a3a3" }}
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-neutral-800">
            {category.name}
          </div>
          <div className="text-xs text-neutral-400">
            {GOODIE_TYPE_LABEL[category.type]}
            {category.target !== null ? ` · target ${category.target}` : ""}
            {category.unit ? ` ${category.unit}` : ""}
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="ghost"
          className="px-2 py-1 text-xs"
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
        <Button
          variant="ghost"
          className="px-2 py-1 text-xs"
          onClick={() =>
            setActive.mutate({ id: category.id, active: !category.active })
          }
        >
          {category.active ? "Hide" : "Show"}
        </Button>
        <button
          className="px-2 py-1 text-xs text-neutral-400 hover:text-rose-600"
          onClick={() => {
            if (
              window.confirm(
                `Delete "${category.name}"? This removes all its logged history.`,
              )
            ) {
              del.mutate({ id: category.id });
            }
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

function EditCategoryForm({
  category,
  refresh,
  onDone,
}: {
  category: Category;
  refresh: () => Promise<unknown>;
  onDone: () => void;
}) {
  const update = api.goodieCategory.update.useMutation({
    onSuccess: () => {
      onDone();
      return refresh();
    },
  });

  const [name, setName] = useState(category.name);
  const [type, setType] = useState<GoodieType>(category.type);
  const [target, setTarget] = useState(
    category.target !== null ? String(category.target) : "",
  );
  const [unit, setUnit] = useState(category.unit ?? "");
  const [color, setColor] = useState(category.color ?? "#10b981");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const parsed = target.trim() === "" ? null : Number(target);
    const validTarget =
      parsed !== null && Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
    update.mutate({
      id: category.id,
      name,
      type,
      target: validTarget,
      unit: blankToNull(unit),
      color,
    });
  };

  return (
    <li className="py-2">
      <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
        <div className="min-w-32 flex-1">
          <label className={labelClass}>Name</label>
          <input
            className={`${inputClass} py-1`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Type</label>
          <select
            className={`${inputClass} py-1`}
            value={type}
            onChange={(e) => setType(e.target.value as GoodieType)}
          >
            {GOODIE_TYPES.map((t) => (
              <option key={t} value={t}>
                {GOODIE_TYPE_LABEL[t]}
              </option>
            ))}
          </select>
        </div>
        <div className="w-20">
          <label className={labelClass}>Target</label>
          <input
            type="number"
            min="0"
            step="any"
            className={`${inputClass} py-1`}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="w-20">
          <label className={labelClass}>Unit</label>
          <input
            className={`${inputClass} py-1`}
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Color</label>
          <input
            type="color"
            className="h-8 w-10 cursor-pointer rounded border border-neutral-300"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <Button
          variant="primary"
          type="submit"
          className="px-2 py-1 text-xs"
          disabled={update.isPending || !name.trim()}
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
      </form>
    </li>
  );
}
