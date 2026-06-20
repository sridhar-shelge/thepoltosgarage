import type { Metadata } from "next";
import { VlogCard } from "@/components/cards";
import { SearchAndFilters } from "@/components/search-and-filters";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { vlogs } from "@/lib/data";
import { Clock, PlayCircle, Route, Wrench } from "lucide-react";

export const metadata: Metadata = { title: "Vlogs", description: "Video-first garage days, road trips, accessory installs, POV drives, service visits, and delivery stories." };

export default function VlogsPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Vlogs" title="Watch practical Indian ownership in motion" body="Short discovery cards, deeper episode pages, gear lists, related products, and comment-ready video stories." />
      <div className="glass-card mb-7 overflow-hidden rounded-lg">
        <div className="relative grid min-h-[360px] overflow-hidden bg-gradient-to-br from-orange/30 via-black to-cyan/20 p-6 md:grid-cols-[1fr_.8fr] md:items-center md:p-8">
          <div className="absolute inset-0 bg-road-grid bg-[length:36px_36px] opacity-30" />
          <div className="absolute inset-x-8 bottom-10 h-1 road-line opacity-80" />
          <div className="relative">
            <span className="grid size-14 place-items-center rounded-full bg-orange text-white shadow-glow"><PlayCircle size={30} /></span>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">Featured garage episode</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-white md:text-5xl">{vlogs[0].title}</h2>
            <p className="mt-3 max-w-xl text-metal">{vlogs[0].description}</p>
            <div className="mt-5 flex flex-wrap gap-2"><TagPill><Clock size={13} /> {vlogs[0].duration}</TagPill><TagPill>{vlogs[0].views} views</TagPill></div>
            <ButtonLink href={`/vlogs/${vlogs[0].slug}`} className="mt-6" variant="secondary">Watch episode</ButtonLink>
          </div>
          <div className="relative mt-6 grid gap-3 md:mt-0">
            {[
              ["Road trip routes", Route],
              ["Garage day fixes", Wrench],
              ["Accessory tests", PlayCircle]
            ].map(([label, Icon]) => <div key={label as string} className="rounded-lg border border-white/10 bg-black/30 p-4 text-sm font-bold text-white"><Icon className="mb-2 text-orange" size={18} />{label as string}</div>)}
          </div>
        </div>
      </div>
      <SearchAndFilters filters={["Road trips", "Garage days", "Accessories", "POV drives", "Service visits", "Delivery stories"]} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{vlogs.map((vlog) => <VlogCard key={vlog.slug} vlog={vlog} />)}</div>
    </section>
  );
}
