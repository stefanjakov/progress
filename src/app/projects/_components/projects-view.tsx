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
  PROJECT_STATUS_LABEL,
  PROJECT_STATUSES,
  type ProjectStatus,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api } from "~/trpc/react";

import { ProjectCard } from "./project-card";

export function ProjectsView() {
  const [projects] = api.project.list.useSuspenseQuery();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="space-y-5">
      <Button variant="primary" onClick={() => setShowAdd((v) => !v)}>
        {showAdd ? "Close" : "+ Add project"}
      </Button>
      {showAdd && <AddProjectForm onDone={() => setShowAdd(false)} />}

      {projects.length === 0 ? (
        <EmptyState>No projects yet. Add your first one above.</EmptyState>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function AddProjectForm({ onDone }: { onDone: () => void }) {
  const utils = api.useUtils();
  const create = api.project.create.useMutation({
    onSuccess: () => {
      onDone();
      return utils.project.list.invalidate();
    },
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ProjectStatus>("ACTIVE");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    create.mutate({
      title,
      status,
      description: blankToNull(description) ?? undefined,
      startDate: blankToNull(startDate),
      endDate: blankToNull(endDate),
    });
  };

  return (
    <Card className="p-4">
      <form onSubmit={submit} className="space-y-3">
        <input
          className={inputClass}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
          autoFocus
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div>
            <label className={labelClass}>Status</label>
            <select
              className={inputClass}
              value={status}
              onChange={(e) => setStatus(e.target.value as ProjectStatus)}
            >
              {PROJECT_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {PROJECT_STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Start</label>
            <input
              type="date"
              className={inputClass}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>End</label>
            <input
              type="date"
              className={inputClass}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
            {create.isPending ? "Adding…" : "Add project"}
          </Button>
          <Button type="button" variant="ghost" onClick={onDone}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
