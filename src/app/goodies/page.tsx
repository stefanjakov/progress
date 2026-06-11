import { PageShell } from "~/app/_components/page-shell";

import { GoodiesView } from "./_components/goodies-view";

export default function GoodiesPage() {
  return (
    <PageShell
      title="Goodies"
      subtitle="Daily habits — log them day by day and hit your targets."
    >
      <GoodiesView />
    </PageShell>
  );
}
