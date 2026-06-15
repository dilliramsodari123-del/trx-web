import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin/admin-nav";
import { LeadsTable } from "@/components/admin/leads-table";

export default async function AdminLeadsPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect("/admin/login");

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Leads</h1>
            <p className="text-slate-500 mt-1">Manage all website requests and enquiries.</p>
          </div>
          <span className="bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm">
            {leads?.length ?? 0} total
          </span>
        </div>
        <LeadsTable leads={leads ?? []} />
      </div>
    </div>
  );
}
