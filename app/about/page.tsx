import type { Metadata } from "next";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { vehicles } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "The story behind The Poltos Garage: real machines, real owners, one love for Indian roads." };

export default function AboutPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="About" title="The Poltos Garage is built for real Indian cars, bikes, and the people who live with them" body="Daily commuters, highway tourers, weekend bikes, project builds, family cars, first vehicles, and everything in between. The brand exists to document real ownership, tested accessories, useful guides, road trips, and community stories without manufacturer affiliation." />
      <div className="grid gap-5 lg:grid-cols-3">{vehicles.map((vehicle) => <div key={vehicle.slug} className={`rounded-lg bg-gradient-to-br ${vehicle.accent} p-5`}><h2 className="text-2xl font-black text-white">{vehicle.name}</h2><p className="mt-3 text-sm leading-6 text-white/80">{vehicle.summary}</p></div>)}</div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {["What we do", "Why trust us", "Collaborations"].map((title) => <div key={title} className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-metal">Practical ownership knowledge, transparent accessory notes, community submissions, marketplace trust signals, and partner discovery.</p></div>)}
      </div>
      <div className="mt-8 glass-card rounded-lg p-6">
        <h2 className="text-2xl font-black text-white">Independent community disclaimer</h2>
        <p className="mt-3 text-sm leading-6 text-metal">The Poltos Garage is an independent automotive community and is not affiliated with any vehicle manufacturer.</p>
        <div className="mt-5 flex flex-wrap gap-2"><TagPill>Unbiased ownership</TagPill><TagPill>Affiliate disclosure</TagPill><TagPill>Community consent</TagPill></div>
        <ButtonLink href="/contact" className="mt-6">Collaborate</ButtonLink>
      </div>
    </section>
  );
}
