"use client";

import { type FormEvent, useState } from "react";

import { TaskList } from "~/app/_components/task-list";
import {
  Badge,
  Button,
  Card,
  inputClass,
  labelClass,
} from "~/app/_components/ui";
import { dateToDayKey, formatDay } from "~/lib/date";
import {
  PROJECT_STATUS_COLOR,
  PROJECT_STATUS_LABEL,
  PROJECT_STATUSES,
  type ProjectStatus,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api, type RouterOutputs } from "~/trpc/react";

type Project = RouterOutputs["project"]["list"][number];

export function ProjectCard({ project }: { project: Project }) {
  const utils = api.useUtils();
  const invalidate = () => utils.project.list.invalidate();
  const setStatus = api.project.setStatus.useMutation({ onSuccess: invalidate });
  const del = api.project.delete.useMutation({ onSuccess: invalidate });
  const [editing, setEditing] = useState(false);

  const total = project.tasks.length;
  const done = project.tasks.filter((t) => t.done).length;
  const dimmed = project.status === "DONE" || project.status === "ARCHIVED";

  return (
    <Card className="p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`font-semibold ${dimmed ? "text-neutral-400" : "text-neutral-900"}`}
            >
              {project.title}
            </span>
            <Badge className={PROJECT_STATUS_COLOR[project.status]}>
              {PROJECT_STATUS_LABEL[project.status]}
            </Badge>
          </div>
          {project.description && (
            <p className="mt-1 whitespace-pre-wrap text-sm text-neutral-500">
              {project.description}
            </p>
          )}
          {(project.startDate !== null || project.endDate !== null) && (
            <p className="mt-1 text-xs text-neutral-400">
              {project.startDate ? formatDay(project.startDate) : "—"} →{" "}
              {project.endDate ? formatDay(project.endDate) : "—"}
            </p>
          )}
        </div>
        <select
          className={`${inputClass} w-auto shrink-0 py-1 text-xs`}
          value={project.status}
          onChange={(e) =>
            setStatus.mutate({
              id: project.id,
              status: e.target.value as ProjectStatus,
            })
          }
        >
          {PROJECT_STATUSES.map((s) => (
            <option key={s} value={s}>
              {PROJECT_STATUS_LABEL[s]}
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
        tasks={project.tasks}
        parent={{ projectId: project.id }}
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
            if (
              window.confirm(`Delete project "${project.title}" and its tasks?`)
            ) {
              del.mutate({ id: project.id });
            }
          }}
        >
          Delete
        </button>
      </div>

      {editing && (
        <EditProjectForm project={project} onDone={() => setEditing(false)} />
      )}
    </Card>
  );
}

function EditProjectForm({
  project,
  onDone,
}: {
  project: Project;
  onDone: () => void;
}) {
  const utils = api.useUtils();
  const update = api.project.update.useMutation({
    onSuccess: () => {
      onDone();
      return utils.project.list.invalidate();
    },
  });

  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description ?? "");
  const [startDate, setStartDate] = useState(
    project.startDate ? dateToDayKey(project.startDate) : "",
  );
  const [endDate, setEndDate] = useState(
    project.endDate ? dateToDayKey(project.endDate) : "",
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    update.mutate({
      id: project.id,
      title,
      description: blankToNull(description),
      startDate: blankToNull(startDate),
      endDate: blankToNull(endDate),
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
        placeholder="Project title"
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Start</label>
          <input
            type="date"
            className={`${inputClass} py-1 text-xs`}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>End</label>
          <input
            type="date"
            className={`${inputClass} py-1 text-xs`}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
