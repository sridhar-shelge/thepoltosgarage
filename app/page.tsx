import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Gauge, IndianRupee, PenLine, ShieldCheck, ShoppingBag, Star, Users, Eye, Trophy, Wrench, PlayCircle, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { ButtonLink, SectionHeader, StatCard, TagPill } from "@/components/ui";
import { NewsletterForm } from "@/components/forms";
import { ProductCard, StoryCard, VehicleCard, ChallengeCard } from "@/components/cards";
import { challenges, posts, products, submissions, vehicles, vlogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Poltos Garage | Indian Automotive Stories, Vlogs & Tested Accessories",
  description: "Join The Poltos Garage for real Indian car and bike ownership stories, road trips, tested accessories, vlogs, community challenges, and trusted partner garages.",
  keywords: ["Indian automotive community", "car ownership India", "bike ownership India", "tested car accessories", "road trip stories", "garage community"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Poltos Garage | Torque. Thump. Roads.",
    description: "Real Indian ownership stories, tested accessories, road trips, vlogs, community challenges, and partner garages.",
    url: "https://poltosgarage.in"
  }
};

export default function HomePage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const trustMetrics = [
    ["Owner-first guides", "No brochure talk", ShieldCheck],
    ["Tested accessories", "Reasons before links", BadgeCheck],
    ["Community proof", "Votes, comments, stories", Users]
  ];
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-8 sm:pt-16">
        <div className="absolute inset-0 bg-road-grid bg-[length:42px_42px] opacity-50" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-speed-arc blur-2xl" />
        <div className="container-shell relative">
          <div className="grid gap-6 lg:grid-cols-[1.03fr_.97fr] lg:items-center">
            <FadeIn>
              <TagPill className="border-orange/40 bg-orange/15 text-orange">Independent Indian automotive community</TagPill>
              <h1 className="mt-5 text-balance text-4xl font-black leading-[0.98] text-white sm:text-7xl lg:text-8xl">
                <span className="block sm:inline">Torque.</span>{" "}
                <span className="block sm:inline">Thump.</span>{" "}
                <span className="block sm:inline">Roads.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-metal sm:text-lg sm:leading-8">
                Practical ownership stories, road-tested accessories, service notes, vlogs, challenges, and trusted local partners for every Indian car and bike owner.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <ButtonLink href="/marketplace"><ShoppingBag size={18} /> Shop Tested Picks</ButtonLink>
                <ButtonLink href="/submit" variant="secondary"><PenLine size={18} /> Submit Story</ButtonLink>
                <ButtonLink href="/partners" variant="ghost"><Wrench size={18} /> Find Partners</ButtonLink>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {trustMetrics.map(([title, body, Icon]) => (
                  <div key={title as string} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <Icon size={18} className="text-orange" />
                    <p className="mt-2 text-sm font-black text-white">{title as string}</p>
                    <p className="mt-1 text-xs leading-5 text-metal">{body as string}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-lg p-4 sm:p-5">
                <div className="absolute -right-16 -top-16 size-52 rounded-full bg-speed-arc opacity-80" />
                <div className="relative rounded-lg border border-white/10 bg-black/35 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">Garage signal</p>
                      <h2 className="mt-2 text-2xl font-black text-white">What owners need this week</h2>
                    </div>
                    <div className="grid size-16 place-items-center rounded-full border border-orange/30 bg-orange/10">
                      <Gauge className="text-orange" />
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["New buyer", "PDI checklist + first accessory priorities", "21.5k reads"],
                      ["Highway run", "Tyre pressure, dashcam, emergency kit", "31k views"],
                      ["Partner lead", "Detailing, dashcam install, tyre shops", "5 cities"]
                    ].map(([label, title, stat]) => (
                      <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">{label}</p>
                          <span className="text-xs font-bold text-orange">{stat}</span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.slug} className={`rounded-lg bg-gradient-to-br ${vehicle.accent} p-4`}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{vehicle.type}</p>
                      <h3 className="mt-2 text-lg font-black text-white">{vehicle.name}</h3>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4 rounded-lg border border-white/10 bg-black/25 p-4">
                  <p className="flex items-center gap-2 text-sm font-bold text-white"><Sparkles size={16} className="text-orange" /> Open to every machine</p>
                  <p className="mt-2 text-sm leading-6 text-metal">Hatchbacks, sedans, SUVs, scooters, motorcycles, project cars, family cars, and first vehicles all belong here.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Featured vlog" title="Watch the garage come alive" body="Video-first garage stories with practical notes, accessories used, route context, and ownership details." action={<ButtonLink href="/vlogs">All vlogs <ArrowRight size={16} /></ButtonLink>} />
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="glass-card group overflow-hidden rounded-lg">
            <div className="relative grid min-h-[360px] place-items-center overflow-hidden bg-gradient-to-br from-orange/35 via-black to-cyan/20 p-6 text-center">
              <div className="absolute inset-0 bg-road-grid bg-[length:36px_36px] opacity-30" />
              <div className="absolute inset-x-6 bottom-10 h-1 road-line opacity-80" />
              <div className="relative">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-orange text-white shadow-glow"><PlayCircle size={34} /></span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-orange">Featured garage episode</p>
                <h3 className="mx-auto mt-3 max-w-xl text-3xl font-black text-white">{vlogs[0].title}</h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-metal">{vlogs[0].description}</p>
                <ButtonLink href={`/vlogs/${vlogs[0].slug}`} className="mt-6" variant="secondary">Watch episode</ButtonLink>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-lg p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">Deep read</p>
            <h3 className="mt-3 text-2xl font-black text-white">{featured.title}</h3>
            <p className="mt-4 text-sm leading-6 text-metal">{featured.excerpt}</p>
            <ButtonLink href={`/stories/${featured.slug}`} className="mt-6" variant="secondary">Read ownership story</ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Garage channels" title="Find your kind of machine" body="Dedicated hubs for daily drivers, SUVs, tourers, bikes, ownership notes, costs, common issues, accessories, maintenance timelines, galleries, vlogs, and community submissions." />
        <div className="grid gap-5 md:grid-cols-3">{vehicles.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Latest stories" title="Deep ownership knowledge, modern creator flow" action={<ButtonLink href="/stories" variant="secondary">Explore stories</ButtonLink>} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.slice(0, 3).map((post) => <StoryCard key={post.slug} post={post} />)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Tested accessories" title="Marketplace picks with ownership logic" body="Affiliate-ready product cards backed by practical reasons, compatibility, badges, and review paths." action={<ButtonLink href="/marketplace" variant="secondary">Shop all</ButtonLink>} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <ChallengeCard challenge={challenges[0]} />
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard icon={<Users />} label="Community members" value="8.4k" />
            <StatCard icon={<Eye />} label="Monthly views" value="1.2L" />
            <StatCard icon={<Trophy />} label="Challenge entries" value={`${challenges[0].entries}`} />
          </div>
        </div>
        <div className="mt-5 grid gap-4 rounded-lg border border-orange/20 bg-orange/10 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-xl font-black text-white">This month: best real ownership shot wins</h3>
            <p className="mt-2 text-sm leading-6 text-metal">Submit a useful photo, reel, garage setup, accessory install, or road-trip story. Practical entries get more visibility.</p>
          </div>
          <ButtonLink href="/challenges" variant="secondary"><Trophy size={16} /> Join challenge</ButtonLink>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="glass-card rounded-lg p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange">Garage Club</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Join the WhatsApp waitlist, get featured, and meet people who maintain before they modify.</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {submissions.slice(0, 4).map((entry) => <TagPill key={entry.id}>{entry.city} • {entry.vehicle}</TagPill>)}
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <NewsletterForm />
            <p className="mt-3 text-xs text-metal">TODO: connect this to Supabase leads, WhatsApp community approvals, and campaign segmentation.</p>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="glass-card rounded-lg p-6">
            <Wrench className="text-cyan" />
            <h2 className="mt-4 text-2xl font-black text-white">Feature your garage, detailing studio, or accessory store</h2>
            <p className="mt-3 text-sm leading-6 text-metal">Qualified local leads, verified partner cards, city discovery, sponsored explainers, and trust-first community placement.</p>
            <div className="mt-4 flex flex-wrap gap-2"><TagPill><IndianRupee size={13} /> Lead-gen ready</TagPill><TagPill><Star size={13} /> Verified badge</TagPill></div>
            <ButtonLink href="/partners" className="mt-5" variant="secondary">Become a partner</ButtonLink>
          </div>
          <div className="glass-card rounded-lg p-6">
            <ShoppingBag className="text-orange" />
            <h2 className="mt-4 text-2xl font-black text-white">List your accessory</h2>
            <p className="mt-3 text-sm leading-6 text-metal">Marketplace-ready structure for affiliate links, product reviews, compatibility notes, and community trust signals.</p>
            <ButtonLink href="/contact" className="mt-5" variant="secondary">Start marketplace inquiry</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
