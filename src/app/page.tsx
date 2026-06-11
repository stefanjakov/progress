import { PageShell } from "~/app/_components/page-shell";

import { DashboardView } from "./_components/dashboard-view";

export default function DashboardPage() {
  return (
    <PageShell title="Dashboard" subtitle="Your day at a glance.">
      <DashboardView />
    </PageShell>
  );
}
