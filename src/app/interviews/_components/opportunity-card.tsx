"use client";

import { type FormEvent, useState } from "react";

import { Badge, Button, Card, inputClass, labelClass } from "~/app/_components/ui";
import { toDatetimeLocal } from "~/lib/date";
import {
  OPPORTUNITY_STATUS_LABEL,
  OPPORTUNITY_STATUSES,
  STAGE_STATUS_COLOR,
  STAGE_STATUS_LABEL,
  STAGE_STATUSES,
  type OpportunityStatus,
  type StageStatus,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api, type RouterOutputs } from "~/trpc/react";

type Opportunity = RouterOutputs["opportunity"]["list"][number];
type Stage = Opportunity["stages"][number];
type StageType = RouterOutputs["stageType"]["list"][number];

export function OpportunityCard({
  opportunity,
  stageTypes,
}: {
  opportunity: Opportunity;
  stageTypes: StageType[];
}) {
  const utils = api.useUtils();
  const invalidate = () => utils.opportunity.list.invalidate();

  const setStatus = api.opportunity.setStatus.useMutation({
    onSuccess: invalidate,
  });
  const del = api.opportunity.delete.useMutation({ onSuccess: invalidate });

  const [addingStage, setAddingStage] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <Card className="p-3 text-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            {opportunity.priority > 0 && (
              <span
                className="text-xs text-amber-500"
                title={`Priority ${opportunity.priority}`}
              >
                {"★".repeat(opportunity.priority)}
              </span>
            )}
            <span className="truncate font-semibold text-neutral-900">
              {opportunity.company}
            </span>
          </div>
          <div className="truncate text-neutral-500">{opportunity.role}</div>
        </div>
        {opportunity.link && (
          <a
            href={opportunity.link}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-neutral-400 hover:text-neutral-700"
            title="Open link"
          >
            ↗
          </a>
        )}
      </div>

      {opportunity.notes && (
        <p className="mt-2 whitespace-pre-wrap text-xs text-neutral-500">
          {opportunity.notes}
        </p>
      )}

      <div className="mt-2">
        <select
          className={`${inputClass} py-1 text-xs`}
          value={opportunity.status}
          onChange={(e) =>
            setStatus.mutate({
              id: opportunity.id,
              status: e.target.value as OpportunityStatus,
            })
          }
        >
          {OPPORTUNITY_STATUSES.map((s) => (
            <option key={s} value={s}>
              {OPPORTUNITY_STATUS_LABEL[s]}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-3 space-y-1.5 border-t border-neutral-100 pt-2">
        {opportunity.stages.length === 0 && (
          <p className="text-xs text-neutral-400">No stages yet.</p>
        )}
        {opportunity.stages.map((stage) => (
          <StageRow key={stage.id} stage={stage} stageTypes={stageTypes} />
        ))}
      </div>

      <div className="mt-2 flex items-center gap-1">
        <Button
          variant="ghost"
          className="px-2 py-1 text-xs"
          onClick={() => setAddingStage((v) => !v)}
          disabled={stageTypes.length === 0}
        >
          + Stage
        </Button>
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
              window.confirm(
                `Delete ${opportunity.company}? This removes its stages too.`,
              )
            ) {
              del.mutate({ id: opportunity.id });
            }
          }}
        >
          Delete
        </button>
      </div>

      {stageTypes.length === 0 && (
        <p className="mt-1 text-xs text-neutral-400">
          Add a stage type first to log stages.
        </p>
      )}

      {editing && (
        <EditOpportunityForm
          opportunity={opportunity}
          onDone={() => setEditing(false)}
        />
      )}
      {addingStage && (
        <StageForm
          opportunityId={opportunity.id}
          stageTypes={stageTypes}
          onDone={() => setAddingStage(false)}
        />
      )}
    </Card>
  );
}

function StageRow({
  stage,
  stageTypes,
}: {
  stage: Stage;
  stageTypes: StageType[];
}) {
  const utils = api.useUtils();
  const [editing, setEditing] = useState(false);
  const del = api.stage.delete.useMutation({
    onSuccess: () => utils.opportunity.list.invalidate(),
  });

  if (editing) {
    return (
      <StageForm
        opportunityId={stage.opportunityId}
        stage={stage}
        stageTypes={stageTypes}
        onDone={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="flex items-start gap-2 rounded-md bg-neutral-50 px-2 py-1.5">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <Badge className={STAGE_STATUS_COLOR[stage.status]}>
            {STAGE_STATUS_LABEL[stage.status]}
          </Badge>
          <span className="truncate text-xs font-medium text-neutral-700">
            {stage.stageType.name}
          </span>
        </div>
        {stage.scheduledAt && (
          <div className="mt-0.5 text-xs text-neutral-500">
            {new Date(stage.scheduledAt).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </div>
        )}
        {stage.notes && (
          <div className="mt-0.5 whitespace-pre-wrap text-xs text-neutral-400">
            {stage.notes}
          </div>
        )}
      </div>
      <div className="flex shrink-0 gap-0.5">
        <button
          className="px-1 text-xs text-neutral-400 hover:text-neutral-700"
          onClick={() => setEditing(true)}
          title="Edit stage"
        >
          ✎
        </button>
        <button
          className="px-1 text-xs text-neutral-400 hover:text-rose-600"
          onClick={() => del.mutate({ id: stage.id })}
          title="Delete stage"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function StageForm({
  opportunityId,
  stage,
  stageTypes,
  onDone,
}: {
  opportunityId: string;
  stage?: Stage;
  stageTypes: StageType[];
  onDone: () => void;
}) {
  const utils = api.useUtils();
  const onSuccess = () => {
    onDone();
    return utils.opportunity.list.invalidate();
  };
  const create = api.stage.create.useMutation({ onSuccess });
  const update = api.stage.update.useMutation({ onSuccess });
  const pending = create.isPending || update.isPending;

  const [stageTypeId, setStageTypeId] = useState(
    stage?.stageTypeId ?? stageTypes[0]?.id ?? "",
  );
  const [status, setStatus] = useState<StageStatus>(stage?.status ?? "PENDING");
  const [scheduledAt, setScheduledAt] = useState(
    stage?.scheduledAt ? toDatetimeLocal(new Date(stage.scheduledAt)) : "",
  );
  const [notes, setNotes] = useState(stage?.notes ?? "");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!stageTypeId) return;
    const when = scheduledAt ? new Date(scheduledAt) : null;
    if (stage) {
      update.mutate({
        id: stage.id,
        stageTypeId,
        status,
        scheduledAt: when,
        notes: blankToNull(notes),
      });
    } else {
      create.mutate({
        opportunityId,
        stageTypeId,
        status,
        scheduledAt: when,
        notes: blankToNull(notes) ?? undefined,
      });
    }
  };

  return (
    <form
      onSubmit={submit}
      className="mt-2 space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-2"
    >
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Type</label>
          <select
            className={`${inputClass} py-1 text-xs`}
            value={stageTypeId}
            onChange={(e) => setStageTypeId(e.target.value)}
          >
            {stageTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Status</label>
          <select
            className={`${inputClass} py-1 text-xs`}
            value={status}
            onChange={(e) => setStatus(e.target.value as StageStatus)}
          >
            {STAGE_STATUSES.map((s) => (
              <option key={s} value={s}>
                {STAGE_STATUS_LABEL[s]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Scheduled</label>
        <input
          type="datetime-local"
          className={`${inputClass} py-1 text-xs`}
          value={scheduledAt}
          onChange={(e) => setScheduledAt(e.target.value)}
        />
      </div>
      <div>
        <label className={labelClass}>Notes</label>
        <textarea
          className={`${inputClass} py-1 text-xs`}
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          type="submit"
          className="px-2 py-1 text-xs"
          disabled={pending || !stageTypeId}
        >
          {stage ? "Save" : "Add stage"}
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

function EditOpportunityForm({
  opportunity,
  onDone,
}: {
  opportunity: Opportunity;
  onDone: () => void;
}) {
  const utils = api.useUtils();
  const update = api.opportunity.update.useMutation({
    onSuccess: () => {
      onDone();
      return utils.opportunity.list.invalidate();
    },
  });

  const [company, setCompany] = useState(opportunity.company);
  const [role, setRole] = useState(opportunity.role);
  const [link, setLink] = useState(opportunity.link ?? "");
  const [priority, setPriority] = useState(String(opportunity.priority));
  const [notes, setNotes] = useState(opportunity.notes ?? "");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;
    update.mutate({
      id: opportunity.id,
      company,
      role,
      link: blankToNull(link),
      priority: Number(priority),
      notes: notes.trim() || null,
    });
  };

  return (
    <form
      onSubmit={submit}
      className="mt-2 space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-2"
    >
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Company</label>
          <input
            className={`${inputClass} py-1 text-xs`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Role</label>
          <input
            className={`${inputClass} py-1 text-xs`}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Link</label>
          <input
            className={`${inputClass} py-1 text-xs`}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div>
          <label className={labelClass}>Priority</label>
          <select
            className={`${inputClass} py-1 text-xs`}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {[0, 1, 2, 3, 4, 5].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Notes</label>
        <textarea
          className={`${inputClass} py-1 text-xs`}
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          type="submit"
          className="px-2 py-1 text-xs"
          disabled={update.isPending}
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
