"use client";

import { useState } from "react";

import { Button, EmptyState, inputClass } from "~/app/_components/ui";
import { api, type RouterOutputs } from "~/trpc/react";

import { NoteEditor } from "./note-editor";

type Note = RouterOutputs["note"]["list"][number];

export function NotesView() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const utils = api.useUtils();
  const trimmed = search.trim();
  const notesQuery = api.note.list.useQuery(
    trimmed ? { search: trimmed } : undefined,
  );
  const notes = notesQuery.data ?? [];
  const selected = notes.find((n) => n.id === selectedId) ?? null;

  const create = api.note.create.useMutation({
    onSuccess: async (note) => {
      setSearch("");
      await utils.note.list.invalidate();
      setSelectedId(note.id);
    },
  });

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <aside className="flex w-full shrink-0 flex-col gap-2 lg:w-72">
        <Button
          variant="primary"
          onClick={() => create.mutate({ title: "Untitled note" })}
          disabled={create.isPending}
        >
          + New note
        </Button>
        <input
          className={inputClass}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes…"
        />
        <NoteList
          notes={notes}
          selectedId={selectedId}
          onSelect={setSelectedId}
          loading={notesQuery.isLoading}
        />
      </aside>

      <div className="min-w-0 flex-1">
        {selected ? (
          <NoteEditor
            key={selected.id}
            note={selected}
            onDeleted={() => setSelectedId(null)}
          />
        ) : (
          <EmptyState>Select a note, or create a new one.</EmptyState>
        )}
      </div>
    </div>
  );
}

function NoteList({
  notes,
  selectedId,
  onSelect,
  loading,
}: {
  notes: Note[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  loading: boolean;
}) {
  if (loading) return <p className="text-sm text-neutral-400">Loading…</p>;
  if (notes.length === 0)
    return <p className="text-sm text-neutral-400">No notes.</p>;

  return (
    <ul className="space-y-1">
      {notes.map((n) => (
        <li key={n.id}>
          <button
            onClick={() => onSelect(n.id)}
            className={`w-full rounded-md border p-2 text-left transition-colors ${
              selectedId === n.id
                ? "border-neutral-900 bg-neutral-50"
                : "border-neutral-200 hover:bg-neutral-50"
            }`}
          >
            <div className="flex items-center gap-1">
              {n.pinned && <span className="text-amber-500">★</span>}
              <span className="truncate text-sm font-medium text-neutral-800">
                {n.title}
              </span>
            </div>
            {n.content.trim().length > 0 && (
              <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">
                {n.content}
              </p>
            )}
            {n.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {n.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
