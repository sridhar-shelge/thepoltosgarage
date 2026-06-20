import type { Metadata } from "next";
import { SubmitForm } from "@/components/forms";
import { SectionHeader, TagPill } from "@/components/ui";

export const metadata: Metadata = { title: "Submit Your Story", description: "Submit blogs, vlogs, ownership reviews, accessory reviews, road-trip logs, and marketplace listing requests." };

export default function SubmitPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Submit" title="Share your blog, vlog, ownership review, road trip, accessory review, or listing request" body="Submissions are mocked locally for now. The form is structured for future API, Supabase Storage, moderation, and publishing workflows." />
      <div className="mb-6 flex flex-wrap gap-2">{["Blog", "Vlog", "Ownership review", "Accessory review", "Road-trip log", "Marketplace request"].map((item) => <TagPill key={item}>{item}</TagPill>)}</div>
      <SubmitForm />
    </section>
  );
}
