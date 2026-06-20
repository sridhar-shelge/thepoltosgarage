import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SearchAndFilters } from "@/components/search-and-filters";
import { ButtonLink, SectionHeader, StatCard } from "@/components/ui";
import { marketplaceCategories, products } from "@/lib/data";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

export const metadata: Metadata = { title: "Marketplace", description: "Tested accessories, road-trip essentials, dashcams, detailing products, bike gear, merch, and partner garages." };

export default function MarketplacePage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Marketplace" title="Buy fewer accessories. Buy the right ones first." body="Every card explains why it is recommended, who it fits, install difficulty, and the tradeoffs before the buy button." action={<ButtonLink href="/contact" variant="secondary">List your accessory</ButtonLink>} />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <StatCard icon={<ShieldCheck />} label="Trust rule" value="Tested first" />
        <StatCard icon={<BadgeCheck />} label="Badges" value="Fitment notes" />
        <StatCard icon={<Star />} label="Ratings" value="Owner-led" />
      </div>
      <div className="mb-6 rounded-lg border border-orange/20 bg-orange/10 p-4 text-sm leading-6 text-metal">
        Marketplace trust note: recommendations prioritize safety, usefulness, install quality, and long-term ownership value. Some links may be affiliate links. We may earn a commission at no extra cost to you.
      </div>
      <SearchAndFilters filters={marketplaceCategories} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}
