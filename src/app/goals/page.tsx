import { Suspense } from "react";

import { PageShell } from "~/app/_components/page-shell";
import { api, HydrateClient } from "~/trpc/server";

import { GoalsView } from "./_components/goals-view";

export default function GoalsPage() {
  void api.goal.list.prefetch();

  return (
    <HydrateClient>
      <PageShell
        title="Goals"
        subtitle="Short- and long-term goals, broken into tasks."
      >
        <Suspense
          fallback={<p className="text-sm text-neutral-400">Loading…</p>}
        >
          <GoalsView />
        </Suspense>
      </PageShell>
    </HydrateClient>
  );
}
