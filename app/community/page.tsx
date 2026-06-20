import type { Metadata } from "next";
import { NewsletterForm } from "@/components/forms";
import { SectionHeader, TagPill } from "@/components/ui";
import { submissions } from "@/lib/data";

export const metadata: Metadata = { title: "Community", description: "Join The Poltos Garage community, city chapters, member rides, discussions, polls, and meetups." };

export default function CommunityPage() {
  const cities = ["Hyderabad", "Adilabad", "Pune", "Bangalore", "Mumbai", "Delhi NCR"];
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Community" title="A lightweight modern forum for Indian garage life" body="Member rides, city chapters, discussions, polls, meetups, and ownership stories with a fresh creator-first UI." />
      <div className="glass-card rounded-lg p-6"><h2 className="text-2xl font-black text-white">Join WhatsApp/Discord waitlist</h2><p className="mt-2 text-sm text-metal">Moderated groups for useful ownership discussions, meetups, marketplace alerts, and challenge drops.</p><div className="mt-5"><NewsletterForm /></div></div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_.9fr]">
        <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Featured members and rides</h2><div className="mt-4 grid gap-3">{submissions.map((item) => <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-4"><b className="text-white">{item.name}</b><p className="mt-1 text-sm text-metal">{item.vehicle} • {item.city} • {item.type}</p><p className="mt-2 text-sm text-orange">{item.title}</p></div>)}</div></div>
        <div className="grid gap-5">
          <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Recent discussions</h2><div className="mt-4 flex flex-wrap gap-2">{["Best dashcam under Rs 12k?", "Used car suspension refresh cost", "Monsoon bike ride prep", "New car delivery PDI checklist"].map((item) => <TagPill key={item}>{item}</TagPill>)}</div></div>
          <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Polls</h2><p className="mt-3 text-sm text-metal">What should the next tested accessory be?</p><div className="mt-4 grid gap-2">{["Dashcam", "Tyre inflator", "Ceramic spray", "Riding gloves"].map((item) => <div key={item} className="rounded-lg bg-white/5 p-3 text-sm text-white">{item}</div>)}</div></div>
          <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">City chapters</h2><div className="mt-4 flex flex-wrap gap-2">{cities.map((city) => <TagPill key={city}>{city}</TagPill>)}</div></div>
        </div>
      </div>
    </section>
  );
}
