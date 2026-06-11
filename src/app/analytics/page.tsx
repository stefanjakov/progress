import { PageShell } from "~/app/_components/page-shell";

import { AnalyticsView } from "./_components/analytics-view";

export default function AnalyticsPage() {
  return (
    <PageShell
      title="Analytics"
      subtitle="Trends across goodies, goals, and app usage."
    >
      <AnalyticsView />
    </PageShell>
  );
}
