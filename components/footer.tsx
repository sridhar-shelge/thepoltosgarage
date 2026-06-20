import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { NewsletterForm } from "@/components/forms";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative size-14 overflow-hidden rounded-lg border border-white/10 bg-black">
              <Image src="/poltos-garage-logo.png" alt="The Poltos Garage logo" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <p className="text-xl font-black uppercase tracking-[0.18em] text-white">The Poltos Garage</p>
              <p className="mt-1 text-sm font-semibold text-orange">Torque • Thump • Roads</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-metal">
            Real Indian ownership stories, tested accessories, road trips, garage life, marketplace picks, and community challenges.
          </p>
        </div>
        <FooterList title="Quick links" links={[["Garage", "/garage"], ["Stories", "/stories"], ["Vlogs", "/vlogs"], ["Submit", "/submit"]]} />
        <FooterList title="Marketplace" links={[["Tested accessories", "/marketplace"], ["Partners", "/partners"], ["Challenges", "/challenges"], ["Community", "/community"]]} />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Waitlist</p>
          <NewsletterForm compact />
          <div className="mt-5 flex gap-3 text-metal">
            <Instagram size={20} />
            <Mail size={20} />
            <MessageCircle size={20} />
          </div>
        </div>
      </div>
      <div className="container-shell border-t border-white/10 py-6 text-xs leading-5 text-metal">
        <p>The Poltos Garage is an independent automotive community and is not affiliated with any vehicle manufacturer.</p>
        <p className="mt-2">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">{title}</p>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link className="text-sm text-metal transition hover:text-white" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
