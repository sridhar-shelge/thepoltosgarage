"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button, Field, SectionHeader, inputClass } from "@/components/ui";

export default function ContactPage() {
  const [done, setDone] = useState(false);
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Contact" title="Collaborations, marketplace inquiries, and feature-my-ride requests" body="Use this for creator collaborations, accessory listings, partner garages, marketplace inquiries, and community features." />
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass-card rounded-lg p-5"><Mail className="text-orange" /><h2 className="mt-4 text-xl font-black text-white">Reach The Poltos Garage</h2><p className="mt-3 text-sm leading-6 text-metal">Instagram: @poltosgarage<br />Email: hello@poltosgarage.in</p></div>
        <form className="glass-card grid gap-4 rounded-lg p-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); console.info("Mock contact inquiry. TODO: persist to leads table.", Object.fromEntries(new FormData(event.currentTarget).entries())); setDone(true); event.currentTarget.reset(); }}>
          <Field label="Name"><input name="name" className={inputClass} required /></Field>
          <Field label="Email"><input name="email" type="email" className={inputClass} required /></Field>
          <Field label="Inquiry type"><select name="type" className={inputClass}><option>Collaboration inquiry</option><option>Marketplace inquiry</option><option>Feature my ride inquiry</option><option>Partner garage inquiry</option></select></Field>
          <Field label="Phone / Instagram"><input name="contact" className={inputClass} /></Field>
          <Field label="Message"><textarea name="message" className={`${inputClass} min-h-36 sm:col-span-2`} required /></Field>
          <div className="sm:col-span-2"><Button type="submit"><Send size={16} /> Send inquiry</Button>{done ? <p className="mt-3 text-sm font-semibold text-cyan">Inquiry received.</p> : null}</div>
        </form>
      </div>
    </section>
  );
}
