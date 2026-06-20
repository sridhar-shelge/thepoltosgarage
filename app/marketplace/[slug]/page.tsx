import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { ButtonLink, SectionHeader, TagPill } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";
import { products } from "@/lib/data";
import { BadgeCheck, ShieldCheck, ShoppingCart, Star, Wrench } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product?.name ?? "Product", description: product?.reason, openGraph: { title: product?.name, description: product?.reason } };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.reason, offers: { "@type": "Offer", priceCurrency: "INR", price: product.price } };
  return (
    <section className="container-shell py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg" style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
          <Image src={product.image} alt="" fill className="object-cover" priority />
        </div>
        <div className="glass-card rounded-lg p-6">
          <TagPill className="border-cyan/30 bg-cyan/10 text-cyan">{product.badge}</TagPill>
          <h1 className="mt-4 text-4xl font-black text-white">{product.name}</h1>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-metal">{product.category}</p>
          <p className="mt-5 text-3xl font-black text-white">{formatCurrency(product.price)}</p>
          <p className="mt-3 flex items-center gap-1 text-orange"><Star size={18} fill="currentColor" /> {product.rating} rating</p>
          <p className="mt-5 leading-7 text-metal">{product.reason}</p>
          <div className="mt-5 flex flex-wrap gap-2">{product.compatibleVehicles.map((item) => <TagPill key={item}>{item}</TagPill>)}</div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <TagPill><ShieldCheck size={13} /> Tested pick</TagPill>
            <TagPill><Wrench size={13} /> {product.difficulty}</TagPill>
            <TagPill><BadgeCheck size={13} /> Fitment notes</TagPill>
          </div>
          <ButtonLink href="/contact" className="mt-6 w-full"><ShoppingCart size={16} /> Check best buy link</ButtonLink>
          <p className="mt-3 text-xs text-metal">Affiliate disclaimer: Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Pros</h2><ul className="mt-3 grid gap-2 text-sm text-metal">{product.pros.map((item) => <li key={item}>+ {item}</li>)}</ul></div>
        <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Cons</h2><ul className="mt-3 grid gap-2 text-sm text-metal">{product.cons.map((item) => <li key={item}>- {item}</li>)}</ul></div>
      </div>
      <div className="mt-8 glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Why we recommend it</h2><p className="mt-2 text-sm leading-6 text-metal">{product.reason} Full install and ownership review can be connected here with affiliate click tracking and product analytics.</p></div>
      <section className="mt-10"><SectionHeader title="Related products" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>
    </section>
  );
}
