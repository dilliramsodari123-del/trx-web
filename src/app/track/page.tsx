"use client";

import { useState } from "react";
import { Search, Package, CheckCircle2, Clock, Code2, Eye, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import type { ProjectTrack } from "@/types";

const STATUS_STEPS = [
  { key: "received", label: "Order Received", icon: Package },
  { key: "designing", label: "Designing", icon: Eye },
  { key: "developing", label: "Developing", icon: Code2 },
  { key: "review", label: "Review", icon: Clock },
  { key: "delivered", label: "Delivered", icon: Truck },
];

export default function TrackPage() {
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState<ProjectTrack | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!projectId.trim()) return;
    setLoading(true);
    setError("");
    setProject(null);
    try {
      const supabase = createClient();
      const { data, error: err } = await supabase
        .from("project_tracks")
        .select("*")
        .eq("project_id", projectId.trim().toUpperCase())
        .single();
      if (err || !data) {
        setError("Project not found. Please check your Project ID.");
      } else {
        setProject(data as ProjectTrack);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentStepIndex = project
    ? STATUS_STEPS.findIndex((s) => s.key === project.status)
    : -1;

  return (
    <>
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Track Your Project
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Enter your unique Project ID to see live progress updates.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Enter Project ID (e.g. TRX-2024-001)"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-blue-400"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              onClick={handleSearch}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          {error && (
            <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-center">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {project && (
            <div className="space-y-8">
              {/* Header */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-extrabold">{project.client_name}</h2>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    {project.project_id}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-blue-100 text-sm">
                  <span>Started: {new Date(project.started_at).toLocaleDateString()}</span>
                  {project.estimated_delivery && (
                    <span>
                      Est. Delivery: {new Date(project.estimated_delivery).toLocaleDateString()}
                    </span>
                  )}
                </div>
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span>Progress</span>
                    <span className="font-bold">{project.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Status steps */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-6">Build Progress</h3>
                <div className="space-y-4">
                  {STATUS_STEPS.map((step, i) => {
                    const isDone = i <= currentStepIndex;
                    const isCurrent = i === currentStepIndex;
                    return (
                      <div key={step.key} className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isDone
                              ? isCurrent
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                : "bg-green-500 text-white"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {isDone && !isCurrent ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <step.icon className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-semibold text-sm ${
                              isDone ? "text-slate-900" : "text-slate-400"
                            }`}
                          >
                            {step.label}
                          </p>
                          {isCurrent && (
                            <p className="text-xs text-blue-600 font-medium">In Progress...</p>
                          )}
                        </div>
                        {isDone && !isCurrent && (
                          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            Done
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Updates */}
              {project.updates && project.updates.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Latest Updates</h3>
                  <div className="space-y-3">
                    {project.updates.map((update, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="text-slate-400 text-xs whitespace-nowrap mt-0.5">
                          {new Date(update.timestamp).toLocaleString()}
                        </span>
                        <span className="text-slate-700">{update.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!project && !error && (
            <div className="text-center py-12 text-slate-400">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p>Enter your Project ID above to track your website progress.</p>
              <p className="text-sm mt-2">
                Your Project ID was provided in your WhatsApp confirmation message.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
