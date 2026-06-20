import type { Metadata } from "next";
import { ChallengeCard } from "@/components/cards";
import { SubmitForm } from "@/components/forms";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { challenges, submissions } from "@/lib/data";
import { Camera, Gift, ShieldCheck, Trophy } from "lucide-react";

export const metadata: Metadata = { title: "Monthly Challenges", description: "Poltos Garage community photo, reel, garage transformation, accessory setup, and ownership story challenges." };

export default function ChallengesPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Community campaign" title="Poltos Garage Shot of the Month" body="A low-friction monthly loop for creators, owners, accessory brands, and local garages." action={<ButtonLink href="#submit-entry"><Camera size={16} /> Submit entry</ButtonLink>} />
      <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
        <div className="glass-card rounded-lg p-6">
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            <TagPill><Trophy size={13} /> Featured on homepage</TagPill>
            <TagPill><Gift size={13} /> {challenges[0].prize}</TagPill>
            <TagPill><ShieldCheck size={13} /> Safe entries only</TagPill>
          </div>
          <h2 className="text-3xl font-black text-white">{challenges[0].title}</h2>
          <p className="mt-3 text-metal">{challenges[0].theme}</p>
          <div className="mt-5 flex flex-wrap gap-2"><TagPill>{challenges[0].prize}</TagPill><TagPill>#ThePoltosGarage</TagPill><TagPill>#TorqueThumpRoads</TagPill><TagPill>#PoltosGarageShot</TagPill></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Post your entry on Instagram", "Tag @poltosgarage", "Submit the link below"].map((step, index) => <div key={step} className="rounded-lg border border-white/10 bg-white/5 p-4"><b className="text-orange">0{index + 1}</b><p className="mt-2 text-sm text-metal">{step}</p></div>)}
          </div>
          <ButtonLink href="#submit-entry" className="mt-6">Submit entry</ButtonLink>
        </div>
        <div className="glass-card rounded-lg p-6">
          <h2 className="text-xl font-black text-white">Why people participate</h2>
          <ul className="mt-4 grid gap-3 text-sm text-metal">
            <li>Get your ride, garage setup, or road story seen by the community.</li>
            <li>Build a useful ownership archive, not just a vanity post.</li>
            <li>Original car/bike content only.</li>
            <li>No unsafe driving or illegal public-road stunts.</li>
            <li>Sponsor area ready for accessory shops or detailing partners.</li>
          </ul>
        </div>
      </div>
      <section className="mt-10"><SectionHeader title="Previous winners and leaderboard" /><div className="grid gap-5 md:grid-cols-3">{challenges.slice(1).map((challenge) => <ChallengeCard key={challenge.slug} challenge={challenge} />)}</div><div className="mt-5 grid gap-3 sm:grid-cols-3">{submissions.slice(0, 5).map((entry) => <div key={entry.id} className="glass-card rounded-lg p-4"><b className="text-white">{entry.title}</b><p className="mt-1 text-sm text-metal">{entry.name} • {entry.city}</p><p className="mt-2 text-orange">{entry.votes} votes</p></div>)}</div></section>
      <section id="submit-entry" className="mt-10"><SectionHeader title="Challenge submission form" /><SubmitForm challenge /></section>
    </section>
  );
}
