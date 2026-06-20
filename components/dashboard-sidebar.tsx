import { BarChart3, FileText, Flag, Inbox, Package, PlaySquare, ShoppingBag, Trophy } from "lucide-react";

const items = [
  ["Posts", FileText],
  ["Vlogs", PlaySquare],
  ["Submissions", Inbox],
  ["Products", Package],
  ["Challenges", Trophy],
  ["Leads", Flag],
  ["Analytics", BarChart3],
  ["Orders", ShoppingBag]
];

export function DashboardSidebar() {
  return (
    <aside className="glass-card rounded-lg p-3">
      <div className="mb-3 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange">Admin Mock</div>
      <div className="grid gap-1">
        {items.map(([label, Icon]) => (
          <button key={label as string} className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-metal transition hover:bg-white/8 hover:text-white">
            <Icon size={18} /> {label as string}
          </button>
        ))}
      </div>
    </aside>
  );
}
