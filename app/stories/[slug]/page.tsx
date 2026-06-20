import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { StoryCard } from "@/components/cards";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { posts } from "@/lib/data";
import { Clock, Eye, MessageCircle, PenLine, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Story", description: post?.excerpt, openGraph: { title: post?.title, description: post?.excerpt, type: "article" } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: post.title, author: post.author, description: post.excerpt };
  return (
    <article className="container-shell py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative min-h-[420px] overflow-hidden rounded-lg" style={{ position: "relative", minHeight: 420, overflow: "hidden" }}>
        <Image src={post.image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">{post.vehicleTags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-black text-white sm:text-6xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-metal">
            <span>{post.author}</span>
            <span className="flex items-center gap-1"><Clock size={15} /> {post.readTime}</span>
            <span className="flex items-center gap-1"><Eye size={15} /> {post.views}</span>
            <span className="flex items-center gap-1"><MessageCircle size={15} /> {post.comments}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_minmax(0,760px)_260px] lg:items-start lg:justify-center">
        <aside className="glass-card h-fit rounded-lg p-5 lg:sticky lg:top-24">
          <h2 className="font-black text-white">Table of contents</h2>
          <ol className="mt-4 grid gap-2 text-sm text-metal">
            <li>Overview</li><li>Ownership notes</li><li>Pros and cons</li><li>Costs</li><li>Gallery</li><li>Comments</li>
          </ol>
        </aside>
        <div className="min-w-0">
          <div className="glass-card rounded-lg p-6">
            <div className="rounded-lg border border-orange/20 bg-orange/10 p-5">
              <p className="flex items-center gap-2 font-bold text-white"><ShieldCheck size={18} className="text-orange" /> Owner-first summary</p>
              <p className="mt-2 text-sm leading-6 text-metal">{post.excerpt}</p>
            </div>
            <div className="mt-7 max-w-none">
              {post.body.map((para) => <p key={para} className="mb-6 text-lg leading-9 text-metal">{para}</p>)}
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="glass-card rounded-lg p-5"><h3 className="text-xl font-black text-white">Pros</h3><ul className="mt-3 grid gap-2 text-sm text-metal">{post.pros.map((item) => <li key={item}>+ {item}</li>)}</ul></div>
            <div className="glass-card rounded-lg p-5"><h3 className="text-xl font-black text-white">Cons</h3><ul className="mt-3 grid gap-2 text-sm text-metal">{post.cons.map((item) => <li key={item}>- {item}</li>)}</ul></div>
          </div>
          <div className="mt-6 glass-card rounded-lg p-5">
            <h3 className="text-xl font-black text-white">Cost table</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              {post.costs.map((row) => <div key={row.item} className="grid gap-2 border-b border-white/10 p-4 text-sm last:border-0 sm:grid-cols-3"><b className="text-white">{row.item}</b><span className="text-orange">{row.estimate}</span><span className="text-metal">{row.note}</span></div>)}
            </div>
          </div>
          <div className="mt-6 glass-card rounded-lg p-5">
            <h3 className="text-xl font-black text-white">Community discussion</h3>
            <p className="mt-2 text-sm text-metal">Authenticated comments, moderation, reactions, and saved posts can connect to Supabase/PostgreSQL.</p>
          </div>
        </div>
        <aside className="glass-card h-fit rounded-lg p-5 lg:sticky lg:top-24">
          <h2 className="text-lg font-black text-white">Have a better ownership story?</h2>
          <p className="mt-3 text-sm leading-6 text-metal">Share costs, service notes, accessories, mistakes, and real road experience. Useful stories get featured.</p>
          <ButtonLink href="/submit" className="mt-5 w-full"><PenLine size={16} /> Submit story</ButtonLink>
        </aside>
      </div>
      <section className="mt-10">
        <SectionHeader title="Related posts" action={<ButtonLink href="/submit" variant="secondary">Submit your ownership story</ButtonLink>} />
        <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <StoryCard key={item.slug} post={item} />)}</div>
      </section>
    </article>
  );
}
