import { type ReactNode } from "react";

export function PageShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </header>
      {children}
    </div>
  );
}

/** Placeholder used by route stubs that are filled in later sections. */
export function ComingSoon() {
  return (
    <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-10 text-center text-sm text-neutral-400">
      Coming soon.
    </div>
  );
}
