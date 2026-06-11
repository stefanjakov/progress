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
  OPPORTUNITY_STATUS_LABEL,
  OPPORTUNITY_STATUSES,
  type OpportunityStatus,
} from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { api } from "~/trpc/react";

import { OpportunityCard } from "./opportunity-card";
import { StageTypeManager } from "./stage-type-manager";

export function InterviewsView() {
  const [opportunities] = api.opportunity.list.useSuspenseQuery();
  const [stageTypes] = api.stageType.list.useSuspenseQuery();

  const [showAdd, setShowAdd] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" onClick={() => setShowAdd((v) => !v)}>
          {showAdd ? "Close" : "+ Add opportunity"}
        </Button>
        <Button onClick={() => setShowTypes((v) => !v)}>
          Manage stage types ({stageTypes.length})
        </Button>
      </div>

      {showTypes && <StageTypeManager stageTypes={stageTypes} />}
      {showAdd && <AddOpportunityForm onDone={() => setShowAdd(false)} />}

      {opportunities.length === 0 ? (
        <EmptyState>No opportunities yet. Add your first one above.</EmptyState>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {OPPORTUNITY_STATUSES.map((status) => {
            const items = opportunities.filter((o) => o.status === status);
            return (
              <div key={status} className="flex w-72 shrink-0 flex-col gap-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-semibold text-neutral-700">
                    {OPPORTUNITY_STATUS_LABEL[status]}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {items.length}
                  </span>
                </div>
                {items.map((o) => (
                  <OpportunityCard
                    key={o.id}
                    opportunity={o}
                    stageTypes={stageTypes}
                  />
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AddOpportunityForm({ onDone }: { onDone: () => void }) {
  const utils = api.useUtils();
  const create = api.opportunity.create.useMutation({
    onSuccess: () => {
      onDone();
      return utils.opportunity.list.invalidate();
    },
  });

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [link, setLink] = useState("");
  const [priority, setPriority] = useState("0");
  const [status, setStatus] = useState<OpportunityStatus>("WISHLIST");

  const valid = company.trim() && role.trim();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    create.mutate({
      company,
      role,
      link: blankToNull(link) ?? undefined,
      priority: Number(priority),
      status,
    });
  };

  return (
    <Card className="p-4">
      <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Company</label>
          <input
            className={inputClass}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <label className={labelClass}>Role</label>
          <input
            className={inputClass}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Link</label>
          <input
            className={inputClass}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Priority</label>
            <select
              className={inputClass}
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
          <div>
            <label className={labelClass}>Status</label>
            <select
              className={inputClass}
              value={status}
              onChange={(e) => setStatus(e.target.value as OpportunityStatus)}
            >
              {OPPORTUNITY_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {OPPORTUNITY_STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <Button variant="primary" type="submit" disabled={create.isPending || !valid}>
            {create.isPending ? "Adding…" : "Add opportunity"}
          </Button>
          <Button type="button" variant="ghost" onClick={onDone}>
            Cancel
          </Button>
          {create.error && (
            <span className="text-sm text-rose-600">{create.error.message}</span>
          )}
        </div>
      </form>
    </Card>
  );
}
