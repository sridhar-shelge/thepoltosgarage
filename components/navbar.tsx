"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, CarFront, Home, Menu, PenLine, ShoppingBag, Trophy, Users, Video, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

const nav = [
  ["Home", "/"],
  ["Garage", "/garage"],
  ["Stories", "/stories"],
  ["Vlogs", "/vlogs"],
  ["Marketplace", "/marketplace"],
  ["Challenges", "/challenges"],
  ["Community", "/community"],
  ["Partners", "/partners"],
  ["Submit", "/submit"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const primaryMobile = [
    ["Home", "/", Home],
    ["Stories", "/stories", BookOpen],
    ["Shop", "/marketplace", ShoppingBag],
    ["Submit", "/submit", PenLine]
  ];
  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/88 backdrop-blur-xl">
      <nav className="container-shell flex min-h-[68px] items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative size-11 overflow-hidden rounded-lg border border-white/10 bg-black shadow-glow">
            <Image src="/poltos-garage-logo.png" alt="The Poltos Garage logo" fill sizes="44px" className="object-cover" priority />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.18em] text-white">The Poltos</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.26em] text-orange">Garage</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.slice(1, -1).map(([label, href]) => (
            <Link key={href} href={href} className={cn("rounded-lg px-3 py-2 text-sm font-semibold text-metal transition hover:bg-white/7 hover:text-white", pathname === href && "bg-white/8 text-white")}>
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/submit" className="min-h-10 px-3">
            <PenLine size={16} /> Submit Your Story
          </ButtonLink>
        </div>
        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-asphalt lg:hidden">
          <div className="container-shell grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Garage", "/garage", CarFront],
                ["Stories", "/stories", BookOpen],
                ["Vlogs", "/vlogs", Video],
                ["Marketplace", "/marketplace", ShoppingBag],
                ["Challenges", "/challenges", Trophy],
                ["Community", "/community", Users]
              ].map(([label, href, Icon]) => (
                <Link key={href as string} href={href as string} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                  <Icon size={18} className="text-orange" /> {label as string}
                </Link>
              ))}
            </div>
            <ButtonLink href="/submit" className="w-full" onClick={() => setOpen(false)}>
              <PenLine size={16} /> Submit Your Story
            </ButtonLink>
            <Link href="/partners" className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-metal hover:bg-white/7 hover:text-white" onClick={() => setOpen(false)}>
              Partner with us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-asphalt/92 px-3 py-2 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {primaryMobile.map(([label, href, Icon]) => (
          <Link key={href as string} href={href as string} className={cn("grid min-h-12 place-items-center rounded-lg text-[11px] font-bold text-metal", pathname === href && "bg-orange text-white shadow-glow")}>
            <Icon size={18} />
            <span className="mt-1">{label as string}</span>
          </Link>
        ))}
      </div>
    </nav>
    </>
  );
}
