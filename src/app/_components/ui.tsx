import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

/** Shared input/select/textarea styling. */
export const inputClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400";

export const labelClass =
  "mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500";

const BUTTON_VARIANTS = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-700",
  secondary:
    "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50",
  ghost: "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800",
  danger: "border border-rose-200 bg-white text-rose-600 hover:bg-rose-50",
};

export function Button({
  variant = "secondary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof BUTTON_VARIANTS;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${BUTTON_VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}

export function Badge({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-400">
      {children}
    </div>
  );
}
