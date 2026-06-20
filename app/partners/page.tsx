import type { Metadata } from "next";
import { PartnerCard } from "@/components/cards";
import { LeadForm } from "@/components/forms";
import { ButtonLink, SectionHeader, StatCard, TagPill } from "@/components/ui";
import { partners } from "@/lib/data";
import { BadgeCheck, MapPin, PhoneCall } from "lucide-react";

export const metadata: Metadata = { title: "Partners", description: "Partner garages, detailing shops, installers, accessory stores, tyre shops, insurance contacts, and service partners." };

export default function PartnersPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Deals and partners" title="Verified local help without random search results" body="Partner garages, detailing shops, dashcam installers, accessory stores, tyre shops, insurance contacts, and service partners." action={<ButtonLink href="#lead" variant="secondary">Need a partner?</ButtonLink>} />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <StatCard icon={<BadgeCheck />} label="Partner promise" value="Verified" />
        <StatCard icon={<MapPin />} label="Cities" value="5+" />
        <StatCard icon={<PhoneCall />} label="Lead routing" value="Fast follow-up" />
      </div>
      <div className="mb-6 flex flex-wrap gap-2">{["Partner garages", "Detailing shops", "Dashcam installers", "Accessory stores", "Tyre shops", "Insurance contacts", "Service partners"].map((item) => <TagPill key={item}>{item}</TagPill>)}</div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{partners.map((partner) => <PartnerCard key={partner.id} partner={partner} />)}</div>
      <section id="lead" className="mt-10"><SectionHeader title="Tell us what you need" body="Share city, vehicle, budget, and requirement. The future backend can route qualified leads into CRM, partner assignment, WhatsApp notifications, and conversion tracking." /><LeadForm /></section>
    </section>
  );
}
