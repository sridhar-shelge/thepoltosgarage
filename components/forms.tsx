"use client";

import { useState } from "react";
import { CheckCircle2, Send, Upload, MessageCircle } from "lucide-react";
import { Button, Field, inputClass } from "@/components/ui";

function Success({ message }: { message: string }) {
  return (
    <div className="mt-4 flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/10 p-3 text-sm font-semibold text-cyan">
      <CheckCircle2 size={18} /> {message}
    </div>
  );
}

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <form
      className={compact ? "mt-4 grid gap-2" : "grid gap-3 sm:grid-cols-[1fr_auto]"}
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
        console.info("TODO: send newsletter or WhatsApp waitlist lead to Supabase/PostgreSQL.");
      }}
    >
      <input className={inputClass} placeholder="Email or WhatsApp number" aria-label="Email or WhatsApp number" required />
      <Button type="submit" className={compact ? "w-full" : ""}>
        <MessageCircle size={16} /> Join Waitlist
      </Button>
      {done ? <div className="sm:col-span-2"><Success message="You are on the garage waitlist." /></div> : null}
    </form>
  );
}

export function SubmitForm({ challenge = false }: { challenge?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <form
      className="glass-card grid gap-4 rounded-lg p-5 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget).entries());
        console.info("Mock submission. TODO: persist to user_submissions/challenge_entries table.", data);
        setDone(true);
        event.currentTarget.reset();
      }}
    >
      <Field label="Name"><input name="name" className={inputClass} required /></Field>
      {!challenge ? <Field label="Email"><input name="email" type="email" className={inputClass} required /></Field> : null}
      <Field label="Instagram handle"><input name="instagram" className={inputClass} placeholder="@poltosgarage" /></Field>
      <Field label="City"><input name="city" className={inputClass} placeholder="Hyderabad" /></Field>
      <Field label="Vehicle"><input name="vehicle" className={inputClass} placeholder="Your car, bike, scooter, SUV, or project build" /></Field>
      {!challenge ? (
        <Field label="Submission type">
          <select name="type" className={inputClass} defaultValue="Ownership review">
            {["Blog", "Vlog", "Car/bike story", "Ownership review", "Accessory review", "Road-trip log", "Marketplace listing request"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      ) : null}
      <Field label={challenge ? "Entry title" : "Title"}><input name="title" className={inputClass} required /></Field>
      <Field label={challenge ? "Image/video link" : "YouTube/Instagram video link"}><input name="link" className={inputClass} placeholder="https://" /></Field>
      <label className="sm:col-span-2 grid min-h-32 cursor-pointer place-items-center rounded-lg border border-dashed border-white/15 bg-black/25 p-5 text-center text-sm text-metal transition hover:border-orange/60">
        <Upload className="mb-2 text-orange" />
        Drop images here. Real storage can connect to Supabase Storage later.
        <input type="file" className="sr-only" />
      </label>
      <Field label={challenge ? "Story" : "Story/description"}>
        <textarea name="story" className={`${inputClass} min-h-36 resize-y`} required />
      </Field>
      {!challenge ? <Field label="Tags"><input name="tags" className={inputClass} placeholder="diesel, roadtrip, dashcam" /></Field> : null}
      <label className="sm:col-span-2 flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-metal">
        <input className="mt-1" type="checkbox" required />
        I consent to The Poltos Garage reviewing and publishing this submission with edits, attribution, and related community promotion.
      </label>
      <div className="sm:col-span-2">
        <Button type="submit"><Send size={16} /> Submit</Button>
        {done ? <Success message={challenge ? "Challenge entry received." : "Submission received. Check the console for mock payload."} /> : null}
      </div>
    </form>
  );
}

export function LeadForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="glass-card grid gap-4 rounded-lg p-5 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        console.info("Mock lead. TODO: persist to partner_leads table.", Object.fromEntries(new FormData(event.currentTarget).entries()));
        setDone(true);
        event.currentTarget.reset();
      }}
    >
      {["Name", "Phone", "City", "Vehicle", "Requirement", "Budget"].map((field) => (
        <Field key={field} label={field}>
          <input name={field.toLowerCase()} className={inputClass} required />
        </Field>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit"><Send size={16} /> Submit Lead</Button>
        {done ? <Success message="Lead captured for partner follow-up." /> : null}
      </div>
    </form>
  );
}
