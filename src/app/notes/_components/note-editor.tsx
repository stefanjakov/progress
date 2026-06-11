"use client";

import { useState } from "react";

import { Button, inputClass } from "~/app/_components/ui";
import { api, type RouterOutputs } from "~/trpc/react";

import { MarkdownPreview } from "./markdown-preview";

type Note = RouterOutputs["note"]["list"][number];

function parseTags(value: string): string[] {
  const parts = value
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
  return Array.from(new Set(parts));
}

export function NoteEditor({
  note,
  onDeleted,
}: {
  note: Note;
  onDeleted: () => void;
}) {
  const utils = api.useUtils();
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [tagsStr, setTagsStr] = useState(note.tags.join(", "));

  const update = api.note.update.useMutation({
    onSuccess: () => utils.note.list.invalidate(),
  });
  const pin = api.note.togglePinned.useMutation({
    onSuccess: () => utils.note.list.invalidate(),
  });
  const del = api.note.delete.useMutation({
    onSuccess: () => {
      onDeleted();
      return utils.note.list.invalidate();
    },
  });

  const tags = parseTags(tagsStr);
  const dirty =
    title !== note.title ||
    content !== note.content ||
    tags.join(",") !== note.tags.join(",");

  const save = () => {
    if (!title.trim()) return;
    update.mutate({ id: note.id, title, content, tags });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          className={`${inputClass} text-lg font-semibold`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Button
          variant="ghost"
          onClick={() => pin.mutate({ id: note.id, pinned: !note.pinned })}
          title={note.pinned ? "Unpin" : "Pin"}
        >
          <span className={note.pinned ? "text-amber-500" : ""}>
            {note.pinned ? "★" : "☆"}
          </span>
        </Button>
      </div>

      <input
        className={`${inputClass} text-sm`}
        value={tagsStr}
        onChange={(e) => setTagsStr(e.target.value)}
        placeholder="Tags (comma-separated)"
      />

      <div className="grid gap-3 md:grid-cols-2">
        <textarea
          className={`${inputClass} min-h-80 resize-y font-mono text-sm`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write markdown…"
        />
        <div className="min-h-80 overflow-auto rounded-md border border-neutral-200 bg-white p-3">
          <MarkdownPreview content={content} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="primary"
          onClick={save}
          disabled={!dirty || update.isPending || !title.trim()}
        >
          {update.isPending ? "Saving…" : dirty ? "Save" : "Saved"}
        </Button>
        <span className="text-xs text-neutral-400">
          Updated{" "}
          {new Date(note.updatedAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </span>
        <button
          className="ml-auto text-sm text-neutral-400 hover:text-rose-600"
          onClick={() => {
            if (window.confirm(`Delete "${note.title}"?`)) {
              del.mutate({ id: note.id });
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
