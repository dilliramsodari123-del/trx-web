import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  Users, Globe, MessageSquare, Star, TrendingUp, Clock, CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AdminNav } from "@/components/admin/admin-nav";

async function getStats() {
  try {
    const supabase = await createClient();
    const [leads, portfolio, testimonials] = await Promise.all([
      supabase.from("leads").select("id, status, created_at"),
      supabase.from("portfolio_items").select("id"),
      supabase.from("testimonials").select("id"),
    ]);
    return {
      totalLeads: leads.data?.length ?? 0,
      newLeads: leads.data?.filter((l) => l.status === "new").length ?? 0,
      portfolioItems: portfolio.data?.length ?? 0,
      testimonials: testimonials.data?.length ?? 0,
      recentLeads: leads.data
        ?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 5) ?? [],
    };
  } catch {
    return { totalLeads: 0, newLeads: 0, portfolioItems: 0, testimonials: 0, recentLeads: [] };
  }
}

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/admin/login");
  }

  const stats = await getStats();

  const statCards = [
    { title: "Total Leads", value: stats.totalLeads, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "New Leads", value: stats.newLeads, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Portfolio Items", value: stats.portfolioItems, icon: Globe, color: "text-violet-600", bg: "bg-violet-50" },
    { title: "Testimonials", value: stats.testimonials, icon: Star, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {[
                { label: "View Leads", href: "/admin/leads", icon: Users, color: "bg-blue-600" },
                { label: "Portfolio", href: "/admin/portfolio", icon: Globe, color: "bg-violet-600" },
                { label: "Testimonials", href: "/admin/testimonials", icon: Star, color: "bg-amber-500" },
                { label: "Blog Posts", href: "/admin/blog", icon: MessageSquare, color: "bg-green-600" },
              ].map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`${action.color} text-white rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{action.label}</span>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
            </CardHeader>
            <CardContent>
              {stats.recentLeads.length === 0 ? (
                <p className="text-slate-400 text-sm text-center py-4">No leads yet</p>
              ) : (
                <div className="space-y-3">
                  {stats.recentLeads.map((lead: { id: string; status: string; created_at: string }) => (
                    <div key={lead.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-slate-700">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        lead.status === "new"
                          ? "bg-amber-100 text-amber-700"
                          : lead.status === "delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
