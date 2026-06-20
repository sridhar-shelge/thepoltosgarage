import Image from "next/image";
import Link from "next/link";
import { Bookmark, CheckCircle2, Clock, Eye, MessageCircle, Play, ShieldCheck, ShoppingCart, Star, Wrench, MapPin } from "lucide-react";
import type { Challenge, Partner, Post, Product, Vehicle, Vlog } from "@/lib/types";
import { ButtonLink, TagPill } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/garage/${vehicle.slug}`} className="glass-card group block overflow-hidden rounded-lg">
      <div className={`relative min-h-44 bg-gradient-to-br ${vehicle.accent} p-5`}>
        <div className="absolute inset-x-0 bottom-8 h-1 road-line opacity-70" />
        <div className="absolute right-5 top-5 size-24 rounded-full border border-white/25 bg-speed-arc opacity-80" />
        <p className="relative text-xs font-bold uppercase tracking-[0.24em] text-white/75">{vehicle.type}</p>
        <h3 className="relative mt-3 max-w-44 text-3xl font-black text-white">{vehicle.name}</h3>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-metal">{vehicle.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.notes.map((note) => <TagPill key={note}>{note}</TagPill>)}
        </div>
        <span className="mt-5 inline-flex text-sm font-bold text-orange group-hover:text-cyan">View Garage</span>
      </div>
    </Link>
  );
}

export function StoryCard({ post }: { post: Post }) {
  return (
    <article className="glass-card group overflow-hidden rounded-lg">
      <Link href={`/stories/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden" style={{ position: "relative", display: "block", aspectRatio: "16 / 10", overflow: "hidden" }}>
        <Image src={post.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <TagPill className="border-orange/35 bg-orange/20 text-white">{post.category}</TagPill>
          {post.sponsored ? <TagPill>Sponsored</TagPill> : null}
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/stories/${post.slug}`}><h3 className="text-lg font-black leading-tight text-white group-hover:text-cyan">{post.title}</h3></Link>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-metal">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">{post.vehicleTags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}</div>
        <div className="mt-5 flex items-center justify-between gap-3 text-xs text-metal">
          <span>{post.author}</span>
          <span className="flex items-center gap-3"><Clock size={14} /> {post.readTime} <Eye size={14} /> {post.views} <MessageCircle size={14} /> {post.comments}</span>
          <Bookmark size={16} />
        </div>
      </div>
    </article>
  );
}

export function VlogCard({ vlog }: { vlog: Vlog }) {
  return (
    <article className="glass-card group overflow-hidden rounded-lg">
      <Link href={`/vlogs/${vlog.slug}`} className="relative block aspect-video overflow-hidden" style={{ position: "relative", display: "block", aspectRatio: "16 / 9", overflow: "hidden" }}>
        <Image src={vlog.thumbnail} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-full bg-orange text-white shadow-glow"><Play size={20} fill="currentColor" /></span>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-bold">{vlog.duration}</span>
      </Link>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">{vlog.category}</p>
        <Link href={`/vlogs/${vlog.slug}`}><h3 className="mt-2 text-lg font-black text-white group-hover:text-cyan">{vlog.title}</h3></Link>
        <div className="mt-4 flex items-center justify-between text-xs text-metal">
          <span>{vlog.views} views</span>
          <ButtonLink href={`/vlogs/${vlog.slug}`} className="min-h-9 px-3" variant="secondary">Watch</ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="glass-card group overflow-hidden rounded-lg">
      <Link href={`/marketplace/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden" style={{ position: "relative", display: "block", aspectRatio: "4 / 3", overflow: "hidden" }}>
        <Image src={product.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute left-3 top-3"><TagPill className="border-cyan/35 bg-cyan/15 text-white">{product.badge}</TagPill></div>
      </Link>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-metal">{product.category}</p>
        <Link href={`/marketplace/${product.slug}`}><h3 className="mt-2 text-lg font-black text-white group-hover:text-orange">{product.name}</h3></Link>
        <p className="mt-2 text-sm leading-6 text-metal">{product.reason}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <TagPill className="border-orange/30 bg-orange/10 text-orange"><ShieldCheck size={13} /> Reviewed</TagPill>
          <TagPill><CheckCircle2 size={13} /> Fitment notes</TagPill>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-black text-white">{formatCurrency(product.price)}</span>
          <span className="flex items-center gap-1 text-sm font-bold text-orange"><Star size={16} fill="currentColor" /> {product.rating}</span>
        </div>
        <ButtonLink href={`/marketplace/${product.slug}`} className="mt-4 w-full"><ShoppingCart size={16} /> View tested pick</ButtonLink>
      </div>
    </article>
  );
}

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <div className="glass-card rounded-lg p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">{challenge.month}</p>
      <h3 className="mt-3 text-xl font-black text-white">{challenge.title}</h3>
      <p className="mt-3 text-sm leading-6 text-metal">{challenge.theme}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <TagPill>{challenge.prize}</TagPill>
        <TagPill>{challenge.entries} entries</TagPill>
      </div>
    </div>
  );
}

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="glass-card rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-white">{partner.name}</h3>
          <p className="mt-1 flex items-center gap-2 text-sm text-metal"><MapPin size={15} /> {partner.city}</p>
        </div>
        {partner.verified ? <TagPill className="border-cyan/30 bg-cyan/10 text-cyan"><ShieldCheck size={14} /> Verified</TagPill> : null}
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white"><Wrench size={16} /> {partner.serviceType}</p>
      <p className="mt-3 text-sm text-metal">{partner.offer}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="flex items-center gap-1 text-sm font-bold text-orange"><Star size={16} fill="currentColor" /> {partner.rating}</span>
        <ButtonLink href="/partners#lead" className="min-h-9 px-3">Contact</ButtonLink>
      </div>
    </div>
  );
}
