"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { TagPill, inputClass } from "@/components/ui";

export function SearchAndFilters({ filters }: { filters: string[] }) {
  const [active, setActive] = useState(filters[0] ?? "");
  return (
    <div className="glass-card mb-7 rounded-lg p-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-metal" size={18} />
        <input className={`${inputClass} w-full pl-10`} placeholder="Search ownership stories, routes, accessories, maintenance..." />
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActive(filter)} className="shrink-0">
            <TagPill className={active === filter ? "border-orange/50 bg-orange/20 text-white" : ""}>{filter}</TagPill>
          </button>
        ))}
      </div>
    </div>
  );
}
