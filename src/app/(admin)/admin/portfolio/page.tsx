import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin/admin-nav";
import { PortfolioManager } from "@/components/admin/portfolio-manager";

export default async function AdminPortfolioPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect("/admin/login");

  const { data: items } = await supabase
    .from("portfolio_items")
    .select("*")
    .order("sort_order");

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-8">Portfolio</h1>
        <PortfolioManager items={items ?? []} />
      </div>
    </div>
  );
}
