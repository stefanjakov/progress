"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/interviews", label: "Interviews" },
  { href: "/goals", label: "Goals" },
  { href: "/projects", label: "Projects" },
  { href: "/todos", label: "Week" },
  { href: "/goodies", label: "Goodies" },
  { href: "/notes", label: "Notes" },
  { href: "/analytics", label: "Analytics" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 flex h-screen w-56 shrink-0 flex-col gap-1 border-r border-neutral-800 bg-neutral-900 p-4 text-neutral-100">
      <div className="mb-4 px-2 text-lg font-semibold tracking-tight">
        progress
      </div>
      <ul className="flex flex-col gap-0.5">
        {LINKS.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-neutral-100 font-medium text-neutral-900"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
