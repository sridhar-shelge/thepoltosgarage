import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { SectionHeader, StatCard } from "@/components/ui";
import { challenges, partners, posts, products, submissions, vlogs } from "@/lib/data";

export const metadata: Metadata = { title: "Admin Dashboard", description: "Protected-looking mock dashboard for future backend integration." };

export default function AdminPage() {
  return (
    <section className="container-shell py-10">
      <SectionHeader eyebrow="Mock admin" title="Backend-ready operating console" body="No auth is wired yet. This protected-looking dashboard is structured for future Supabase auth, publishing workflows, product catalog, challenge entries, comments, partner leads, and analytics." />
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <DashboardSidebar />
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Posts" value={`${posts.length}`} />
            <StatCard label="Vlogs" value={`${vlogs.length}`} />
            <StatCard label="Products" value={`${products.length}`} />
            <StatCard label="Leads" value="32" />
          </div>
          <div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Submission queue</h2><div className="mt-4 grid gap-3">{submissions.map((item) => <div key={item.id} className="grid gap-2 rounded-lg border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-4"><b className="text-white">{item.title}</b><span className="text-metal">{item.name}</span><span className="text-metal">{item.vehicle}</span><span className="text-orange">{item.type}</span></div>)}</div></div>
          <div className="grid gap-5 md:grid-cols-2"><div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Challenges</h2><p className="mt-3 text-sm text-metal">{challenges.length} campaigns staged. TODO: voting, moderation, anti-spam, prize sponsor fields.</p></div><div className="glass-card rounded-lg p-5"><h2 className="text-xl font-black text-white">Partners</h2><p className="mt-3 text-sm text-metal">{partners.length} partners listed. TODO: verification workflow, lead routing, commission tracking.</p></div></div>
        </div>
      </div>
    </section>
  );
}
