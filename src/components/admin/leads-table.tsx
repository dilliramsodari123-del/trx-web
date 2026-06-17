"use client";

import { useState } from "react";
import { MessageCircle, ChevronDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppMessage, openWhatsApp } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import type { Lead } from "@/types";

const STATUS_OPTIONS = ["new", "contacted", "in_progress", "delivered", "cancelled"];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-amber-500/20 text-amber-400",
  contacted: "bg-primary/10 text-primary",
  in_progress: "bg-brand-violet/10 text-brand-violet",
  delivered: "bg-brand-success/10 text-brand-success",
  cancelled: "bg-destructive/10 text-destructive",
};

export function LeadsTable({ leads: initialLeads }: { leads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const updateStatus = async (id: string, status: string) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);
    if (error) {
      toast.error("Failed to update status");
    } else {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: status as Lead["status"] } : l))
      );
      toast.success("Status updated");
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
      {/* Filter tabs */}
      <div className="flex gap-1 p-4 border-b border-border flex-wrap">
        {["all", ...STATUS_OPTIONS].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
              filter === s
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary/50 border-b border-border">
            <tr>
              {["Name", "Business", "Email", "Type", "Budget", "Status", "Date", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((lead) => (
              <>
                <tr key={lead.id} className="hover:bg-accent/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-sm text-foreground">
                    {lead.full_name}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {lead.business_name || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{lead.email}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{lead.website_type}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{lead.budget || "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      value={lead.status ?? "new"}
                      onChange={(e) => updateStatus(lead.id!, e.target.value)}
                      className={`text-xs font-bold px-2 py-1 rounded-full border-0 cursor-pointer ${
                        STATUS_COLORS[lead.status ?? "new"]
                      }`}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {lead.created_at
                      ? new Date(lead.created_at).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8"
                        onClick={() =>
                          setExpanded(expanded === lead.id ? null : lead.id!)
                        }
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expanded === lead.id ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 text-green-600 hover:bg-green-50"
                        onClick={() => {
                          const msg = generateWhatsAppMessage(lead);
                          openWhatsApp(WHATSAPP_NUMBER, msg);
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                {expanded === lead.id && (
                  <tr key={`${lead.id}-expanded`}>
                    <td colSpan={8} className="px-4 py-4 bg-primary/5">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-bold text-foreground">Phone:</span>
                          <span className="ml-2 text-muted-foreground">{lead.phone}</span>
                        </div>
                        <div>
                          <span className="font-bold text-foreground">WhatsApp:</span>
                          <span className="ml-2 text-muted-foreground">{lead.whatsapp || lead.phone}</span>
                        </div>
                        <div>
                          <span className="font-bold text-foreground">Pages:</span>
                          <span className="ml-2 text-muted-foreground">{lead.pages_needed || "—"}</span>
                        </div>
                        <div>
                          <span className="font-bold text-foreground">Features:</span>
                          <span className="ml-2 text-muted-foreground">{lead.features_required || "—"}</span>
                        </div>
                        <div>
                          <span className="font-bold text-foreground">References:</span>
                          <span className="ml-2 text-muted-foreground">{lead.reference_websites || "—"}</span>
                        </div>
                        <div>
                          <span className="font-bold text-foreground">Deadline:</span>
                          <span className="ml-2 text-muted-foreground">{lead.deadline || "—"}</span>
                        </div>
                        {lead.additional_notes && (
                          <div className="col-span-3">
                            <span className="font-bold text-foreground">Notes:</span>
                            <span className="ml-2 text-muted-foreground">{lead.additional_notes}</span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
