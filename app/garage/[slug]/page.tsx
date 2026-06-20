import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard, StoryCard, VlogCard } from "@/components/cards";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { posts, products, submissions, vehicles, vlogs } from "@/lib/data";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  return { title: vehicle?.name ?? "Garage", description: vehicle?.summary };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) notFound();
  const relatedPosts = posts.filter((post) => post.vehicleTags.includes(vehicle.shortName));
  const relatedVlogs = vlogs.filter((vlog) => vlog.vehicleTags.includes(vehicle.shortName));
  const relatedProducts = products.filter((product) => product.compatibleVehicles.includes(vehicle.shortName));
  return (
    <section className="container-shell py-10">
      <div className={`rounded-lg bg-gradient-to-br ${vehicle.accent} p-6 sm:p-10`}>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Vehicle garage</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">{vehicle.name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{vehicle.summary}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <div className="glass-card rounded-lg p-5">
          <h2 className="text-2xl font-black text-white">Ownership cost tracker</h2>
          <div className="mt-4 grid gap-3">
            {vehicle.maintenance.map((item) => (
              <div key={item.interval} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-white">{item.interval}</span>
                  <span className="text-sm font-semibold text-orange">{item.cost}</span>
                </div>
                <p className="mt-2 text-sm text-metal">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-lg p-5">
          <h2 className="text-2xl font-black text-white">Common problems</h2>
          <div className="mt-4 flex flex-wrap gap-2">{vehicle.commonProblems.map((problem) => <TagPill key={problem}>{problem}</TagPill>)}</div>
          <h3 className="mt-6 text-lg font-black text-white">Gallery</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">{vehicle.gallery.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold text-metal">{item}</div>)}</div>
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Latest posts" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{relatedPosts.map((post) => <StoryCard key={post.slug} post={post} />)}</div>
      </div>
      <div className="mt-10">
        <SectionHeader title="Accessories used" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{relatedProducts.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </div>
      <div className="mt-10">
        <SectionHeader title="Vlogs and user submissions" action={<ButtonLink href="/submit" variant="secondary">Submit related story</ButtonLink>} />
        <div className="grid gap-5 md:grid-cols-2">{relatedVlogs.slice(0, 2).map((vlog) => <VlogCard key={vlog.slug} vlog={vlog} />)}</div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">{submissions.filter((submission) => submission.vehicle.includes(vehicle.shortName)).map((submission) => <TagPill key={submission.id}>{submission.title}</TagPill>)}</div>
      </div>
    </section>
  );
}
