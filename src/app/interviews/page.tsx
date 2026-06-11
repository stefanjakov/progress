import { Suspense } from "react";

import { PageShell } from "~/app/_components/page-shell";
import { api, HydrateClient } from "~/trpc/server";

import { InterviewsView } from "./_components/interviews-view";

export default function InterviewsPage() {
  void api.opportunity.list.prefetch();
  void api.stageType.list.prefetch();

  return (
    <HydrateClient>
      <PageShell
        title="Interviews"
        subtitle="Opportunities and their interview stages."
      >
        <Suspense
          fallback={<p className="text-sm text-neutral-400">Loading…</p>}
        >
          <InterviewsView />
        </Suspense>
      </PageShell>
    </HydrateClient>
  );
}
