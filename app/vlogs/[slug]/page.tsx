import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard, VlogCard } from "@/components/cards";
import { SectionHeader, TagPill } from "@/components/ui";
import { products, vlogs } from "@/lib/data";

export function generateStaticParams() {
  return vlogs.map((vlog) => ({ slug: vlog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vlog = vlogs.find((item) => item.slug === slug);
  return { title: vlog?.title ?? "Vlog", description: vlog?.description };
}

export default async function VlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vlog = vlogs.find((item) => item.slug === slug);
  if (!vlog) notFound();
  const related = vlogs.filter((item) => item.slug !== vlog.slug).slice(0, 3);
  return (
    <section className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
        <div>
          <div className="relative grid aspect-video place-items-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-black via-orange/20 to-cyan/15 text-center">
            <div className="absolute inset-0 bg-road-grid bg-[length:36px_36px] opacity-30" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">Featured video</p>
              <h1 className="mt-3 text-3xl font-black text-white">{vlog.title}</h1>
              <p className="mx-auto mt-3 max-w-lg text-sm text-metal">Full episode player connects here when the channel embed is ready.</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-8 text-metal">{vlog.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">{vlog.vehicleTags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}</div>
        </div>
        <aside className="glass-card h-fit rounded-lg p-5">
          <h2 className="text-xl font-black text-white">Gear/accessories used</h2>
          <div className="mt-4 grid gap-2">{vlog.gear.map((item) => <TagPill key={item}>{item}</TagPill>)}</div>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="font-black text-white">Community discussion</h3>
            <p className="mt-2 text-sm text-metal">Authenticated comments, pinned creator replies, and moderation can connect here.</p>
          </div>
        </aside>
      </div>
      <section className="mt-10">
        <SectionHeader title="Related products" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>
      <section className="mt-10">
        <SectionHeader title="Related vlogs" />
        <div className="grid gap-5 md:grid-cols-3">{related.map((item) => <VlogCard key={item.slug} vlog={item} />)}</div>
      </section>
    </section>
  );
}
