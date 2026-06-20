import type { Metadata } from "next";
import { VehicleCard } from "@/components/cards";
import { ButtonLink, SectionHeader, StatCard } from "@/components/ui";
import { vehicles } from "@/lib/data";
import { Gauge, PenLine, Route, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Garage",
  description: "Ownership hubs for daily drivers, SUVs, tourers, bikes, maintenance, accessories, vlogs, issues, and road trip logs."
};

export default function GaragePage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Garage hub" title="Three machines, one Indian road culture" body="Vehicle-specific hubs built for ownership depth: notes, maintenance guides, accessories, vlogs, common issues, road-trip logs, and user stories." />
      <div className="grid gap-5 md:grid-cols-3">{vehicles.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard icon={<Gauge />} label="Ownership trackers" value="3" />
        <StatCard icon={<Wrench />} label="Maintenance guides" value="24+" />
        <StatCard icon={<Route />} label="Road logs" value="18+" />
      </div>
      <div className="mt-8 rounded-lg border border-orange/20 bg-orange/10 p-5">
        <h2 className="text-2xl font-black text-white">Submit your vehicle notes</h2>
        <p className="mt-2 text-sm text-metal">Help build the most practical Indian car and bike ownership knowledge base.</p>
        <ButtonLink href="/submit" className="mt-5"><PenLine size={16} /> Submit Your Story</ButtonLink>
      </div>
    </section>
  );
}
