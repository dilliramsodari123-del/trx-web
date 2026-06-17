"use client";

import { useState } from "react";
import { Star, Trash2, Eye, EyeOff, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import type { Testimonial } from "@/types";

export function TestimonialsManager({ testimonials: initial }: { testimonials: Testimonial[] }) {
  const [testimonials, setTestimonials] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    client_name: "",
    business_name: "",
    review: "",
    rating: 5,
    website_type: "",
  });

  const handleAdd = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("testimonials")
      .insert([{ ...form, is_published: false }])
      .select()
      .single();
    if (error) {
      toast.error("Failed to add testimonial");
    } else {
      setTestimonials((prev) => [data as Testimonial, ...prev]);
      setForm({ client_name: "", business_name: "", review: "", rating: 5, website_type: "" });
      setShowForm(false);
      toast.success("Testimonial added");
    }
  };

  const togglePublish = async (id: string, current: boolean) => {
    const supabase = createClient();
    await supabase
      .from("testimonials")
      .update({ is_published: !current })
      .eq("id", id);
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, is_published: !current } : t))
    );
    toast.success(current ? "Unpublished" : "Published");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    const supabase = createClient();
    await supabase.from("testimonials").delete().eq("id", id);
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    toast.success("Deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)} variant="gradient">
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-4">New Testimonial</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Client Name</Label>
              <Input
                value={form.client_name}
                onChange={(e) => setForm({ ...form, client_name: e.target.value })}
                placeholder="Ramesh Shrestha"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Business Name</Label>
              <Input
                value={form.business_name}
                onChange={(e) => setForm({ ...form, business_name: e.target.value })}
                placeholder="Shrestha Traders"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Website Type</Label>
              <Input
                value={form.website_type}
                onChange={(e) => setForm({ ...form, website_type: e.target.value })}
                placeholder="Business Website"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Rating (1-5)</Label>
              <Input
                type="number"
                min={1}
                max={5}
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <Label>Review</Label>
              <Textarea
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                placeholder="Write the client review..."
                rows={3}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button onClick={handleAdd} variant="gradient" size="sm">Save</Button>
            <Button onClick={() => setShowForm(false)} variant="outline" size="sm">Cancel</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`bg-card rounded-2xl border p-5 shadow-sm ${
              t.is_published ? "border-brand-success/30" : "border-border"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold text-foreground">{t.client_name}</p>
                <p className="text-sm text-muted-foreground">{t.business_name}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePublish(t.id, t.is_published)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    t.is_published
                      ? "text-brand-success bg-brand-success/10 hover:bg-brand-success/20"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {t.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">{t.review}</p>
            {t.website_type && (
              <span className="inline-block mt-2 text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                {t.website_type}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
