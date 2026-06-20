import type { Metadata } from "next";
import { StoryCard } from "@/components/cards";
import { SearchAndFilters } from "@/components/search-and-filters";
import { ButtonLink, SectionHeader } from "@/components/ui";
import { posts, storyFilters } from "@/lib/data";

export const metadata: Metadata = { title: "Stories", description: "Long-form Indian automotive ownership stories, reviews, road trips, maintenance guides, and accessory notes." };

export default function StoriesPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Stories" title="Ownership reviews, road trips, DIYs, and useful buying notes" body="A modern article hub for deep, unbiased, practical automotive knowledge." action={<ButtonLink href="/submit">Submit your ownership story</ButtonLink>} />
      <SearchAndFilters filters={storyFilters} />
      <div className="glass-card mb-7 rounded-lg p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Featured long-form review</p>
        <h2 className="mt-3 text-3xl font-black text-white">{posts[0].title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-metal">{posts[0].excerpt}</p>
        <ButtonLink href={`/stories/${posts[0].slug}`} className="mt-5" variant="secondary">Read review</ButtonLink>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <StoryCard key={post.slug} post={post} />)}</div>
    </section>
  );
}
