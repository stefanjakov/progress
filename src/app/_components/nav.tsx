"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    `block rounded-md px-3 py-2 text-sm transition-colors ${
      active
        ? "bg-neutral-100 font-medium text-neutral-900"
        : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
    }`;

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 py-3 text-neutral-100 md:hidden">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-tight"
        >
          progress
        </Link>
        <div className="flex items-center gap-3">
          <UserButton />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="sticky top-[57px] z-20 border-b border-neutral-800 bg-neutral-900 px-4 pb-3 text-neutral-100 md:hidden">
          <ul className="flex flex-col gap-0.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(isActive(link.href))}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop sidebar */}
      <nav className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col gap-1 border-r border-neutral-800 bg-neutral-900 p-4 text-neutral-100 md:flex">
        <div className="mb-4 px-2 text-lg font-semibold tracking-tight">
          progress
        </div>
        <ul className="flex flex-col gap-0.5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(isActive(link.href))}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 px-2 pt-4">
          <UserButton />
          <span className="text-xs text-neutral-500">Account</span>
        </div>
      </nav>
    </>
  );
}
