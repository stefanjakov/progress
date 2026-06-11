import { PageShell } from "~/app/_components/page-shell";
import { api, HydrateClient } from "~/trpc/server";

import { NotesView } from "./_components/notes-view";

export default function NotesPage() {
  void api.note.list.prefetch();

  return (
    <HydrateClient>
      <PageShell title="Notes" subtitle="Markdown notes with live preview.">
        <NotesView />
      </PageShell>
    </HydrateClient>
  );
}
