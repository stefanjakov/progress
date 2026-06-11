import { PageShell } from "~/app/_components/page-shell";

import { WeekView } from "./_components/week-view";

export default function TodosPage() {
  return (
    <PageShell
      title="Week"
      subtitle="Daily todos plus tasks due from goals and projects."
    >
      <WeekView />
    </PageShell>
  );
}
