import { Suspense } from "react";

import { PageShell } from "~/app/_components/page-shell";
import { api, HydrateClient } from "~/trpc/server";

import { ProjectsView } from "./_components/projects-view";

export default function ProjectsPage() {
  void api.project.list.prefetch();

  return (
    <HydrateClient>
      <PageShell title="Projects" subtitle="Projects and their tasks.">
        <Suspense
          fallback={<p className="text-sm text-neutral-400">Loading…</p>}
        >
          <ProjectsView />
        </Suspense>
      </PageShell>
    </HydrateClient>
  );
}
