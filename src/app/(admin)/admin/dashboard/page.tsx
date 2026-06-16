import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import {
  Users, Globe, MessageSquare, Star, TrendingUp, Clock,
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
  } catch (err) {
    console.error("Failed to fetch dashboard stats:", err);
    return { totalLeads: 0, newLeads: 0, portfolioItems: 0, testimonials: 0, recentLeads: [] };
  }
}

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const stats = await getStats();

  const statCards = [
    { title: "Total Leads",     value: stats.totalLeads,     icon: Users,  color: "text-primary",       bg: "bg-primary/10"       },
    { title: "New Leads",       value: stats.newLeads,       icon: Clock,  color: "text-brand-hot",     bg: "bg-brand-hot/10"     },
    { title: "Portfolio Items", value: stats.portfolioItems, icon: Globe,  color: "text-brand-violet",  bg: "bg-brand-violet/10"  },
    { title: "Testimonials",    value: stats.testimonials,   icon: Star,   color: "text-brand-success", bg: "bg-brand-success/10" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Card key={stat.title} className="border-border">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <TrendingUp className="w-4 h-4 text-brand-success" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick actions + recent leads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {[
                { label: "View Leads",   href: "/admin/leads",        icon: Users,        color: "bg-primary"       },
                { label: "Portfolio",    href: "/admin/portfolio",     icon: Globe,        color: "bg-brand-violet"  },
                { label: "Testimonials", href: "/admin/testimonials",  icon: Star,         color: "bg-brand-hot"     },
                { label: "Blog Posts",   href: "/admin/blog",          icon: MessageSquare,color: "bg-brand-success" },
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

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
            </CardHeader>
            <CardContent>
              {stats.recentLeads.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-4">No leads yet</p>
              ) : (
                <div className="space-y-3">
                  {stats.recentLeads.map((lead: { id: string; status: string; created_at: string }) => (
                    <div key={lead.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                        lead.status === "new"
                          ? "bg-brand-hot/10 text-brand-hot border-brand-hot/20"
                          : lead.status === "delivered"
                          ? "bg-brand-success/10 text-brand-success border-brand-success/20"
                          : "bg-primary/10 text-primary border-primary/20"
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
