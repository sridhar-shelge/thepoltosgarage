import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange/60",
        variant === "primary" && "bg-orange text-white shadow-glow hover:bg-orange/90",
        variant === "secondary" && "border border-white/12 bg-white/8 text-white hover:border-cyan/50 hover:bg-cyan/10",
        variant === "ghost" && "text-metal hover:bg-white/8 hover:text-white",
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange/60",
        variant === "primary" && "bg-orange text-white shadow-glow hover:bg-orange/90",
        variant === "secondary" && "border border-white/12 bg-white/8 text-white hover:border-cyan/50 hover:bg-cyan/10",
        variant === "ghost" && "text-metal hover:bg-white/8 hover:text-white",
        className
      )}
      {...props}
    />
  );
}

export function TagPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs font-medium text-metal", className)}>
      {children}
    </span>
  );
}

export function SectionHeader({ eyebrow, title, body, action }: { eyebrow?: string; title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-orange">{eyebrow}</p> : null}
        <h2 className="text-balance text-2xl font-black text-white sm:text-4xl">{title}</h2>
        {body ? <p className="mt-3 text-sm leading-6 text-metal sm:text-base">{body}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function StatCard({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="glass-card rounded-lg p-4">
      <div className="mb-3 text-orange">{icon}</div>
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-metal">{label}</div>
    </div>
  );
}

export function Field({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white">
      <span>{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "min-h-11 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition placeholder:text-metal/60 focus:border-orange/70 focus:ring-2 focus:ring-orange/20";
