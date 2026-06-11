/**
 * Client-safe mirrors of the Prisma enums plus their display labels/colors.
 * Importing the generated Prisma client into client components would pull the
 * query engine into the browser bundle, so UI code and zod inputs use these
 * plain string arrays instead. The values must stay in sync with the schema.
 */

// ----- Opportunity status -----

export const OPPORTUNITY_STATUSES = [
  "WISHLIST",
  "APPLIED",
  "INTERVIEWING",
  "OFFER",
  "ACCEPTED",
  "REJECTED",
  "WITHDRAWN",
] as const;
export type OpportunityStatus = (typeof OPPORTUNITY_STATUSES)[number];

export const OPPORTUNITY_STATUS_LABEL: Record<OpportunityStatus, string> = {
  WISHLIST: "Wishlist",
  APPLIED: "Applied",
  INTERVIEWING: "Interviewing",
  OFFER: "Offer",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
};

export const OPPORTUNITY_STATUS_COLOR: Record<OpportunityStatus, string> = {
  WISHLIST: "bg-neutral-100 text-neutral-600",
  APPLIED: "bg-sky-100 text-sky-700",
  INTERVIEWING: "bg-amber-100 text-amber-700",
  OFFER: "bg-violet-100 text-violet-700",
  ACCEPTED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-rose-100 text-rose-700",
  WITHDRAWN: "bg-neutral-100 text-neutral-400",
};

// ----- Stage status -----

export const STAGE_STATUSES = [
  "PENDING",
  "SCHEDULED",
  "PASSED",
  "FAILED",
  "CANCELLED",
] as const;
export type StageStatus = (typeof STAGE_STATUSES)[number];

export const STAGE_STATUS_LABEL: Record<StageStatus, string> = {
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
  PASSED: "Passed",
  FAILED: "Failed",
  CANCELLED: "Cancelled",
};

export const STAGE_STATUS_COLOR: Record<StageStatus, string> = {
  PENDING: "bg-neutral-100 text-neutral-600",
  SCHEDULED: "bg-sky-100 text-sky-700",
  PASSED: "bg-emerald-100 text-emerald-700",
  FAILED: "bg-rose-100 text-rose-700",
  CANCELLED: "bg-neutral-100 text-neutral-400",
};

// ----- Goal horizon & status -----

export const GOAL_HORIZONS = ["SHORT_TERM", "LONG_TERM"] as const;
export type GoalHorizon = (typeof GOAL_HORIZONS)[number];

export const GOAL_HORIZON_LABEL: Record<GoalHorizon, string> = {
  SHORT_TERM: "Short-term",
  LONG_TERM: "Long-term",
};

export const GOAL_STATUSES = ["ACTIVE", "COMPLETED", "ABANDONED"] as const;
export type GoalStatus = (typeof GOAL_STATUSES)[number];

export const GOAL_STATUS_LABEL: Record<GoalStatus, string> = {
  ACTIVE: "Active",
  COMPLETED: "Completed",
  ABANDONED: "Abandoned",
};

export const GOAL_STATUS_COLOR: Record<GoalStatus, string> = {
  ACTIVE: "bg-sky-100 text-sky-700",
  COMPLETED: "bg-emerald-100 text-emerald-700",
  ABANDONED: "bg-neutral-100 text-neutral-400",
};

// ----- Project status -----

export const PROJECT_STATUSES = [
  "ACTIVE",
  "ON_HOLD",
  "DONE",
  "ARCHIVED",
] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  ACTIVE: "Active",
  ON_HOLD: "On hold",
  DONE: "Done",
  ARCHIVED: "Archived",
};

export const PROJECT_STATUS_COLOR: Record<ProjectStatus, string> = {
  ACTIVE: "bg-sky-100 text-sky-700",
  ON_HOLD: "bg-amber-100 text-amber-700",
  DONE: "bg-emerald-100 text-emerald-700",
  ARCHIVED: "bg-neutral-100 text-neutral-400",
};

// ----- Goodie (daily habit) type -----

export const GOODIE_TYPES = ["BOOLEAN", "COUNT", "NUMBER"] as const;
export type GoodieType = (typeof GOODIE_TYPES)[number];

export const GOODIE_TYPE_LABEL: Record<GoodieType, string> = {
  BOOLEAN: "Yes / No",
  COUNT: "Count",
  NUMBER: "Number",
};
