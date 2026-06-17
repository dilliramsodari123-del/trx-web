"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, Star, ExternalLink, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import type { PortfolioItem } from "@/types";

const CATEGORIES = PORTFOLIO_CATEGORIES.filter((c) => c !== "All");

export function PortfolioManager({ items: initial }: { items: PortfolioItem[] }) {
  const [items, setItems] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    thumbnail_url: "",
    live_url: "",
    is_featured: false,
  });

  const handleAdd = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("portfolio_items")
      .insert([{ ...form, sort_order: items.length + 1 }])
      .select()
      .single();
    if (error) {
      toast.error("Failed to add portfolio item");
    } else {
      setItems((prev) => [...prev, data as PortfolioItem]);
      setForm({ title: "", category: "", description: "", thumbnail_url: "", live_url: "", is_featured: false });
      setShowForm(false);
      toast.success("Portfolio item added");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this portfolio item?")) return;
    const supabase = createClient();
    await supabase.from("portfolio_items").delete().eq("id", id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success("Deleted");
  };

  const toggleFeatured = async (id: string, current: boolean) => {
    const supabase = createClient();
    await supabase.from("portfolio_items").update({ is_featured: !current }).eq("id", id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, is_featured: !current } : i)));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)} variant="gradient">
          <Plus className="w-4 h-4" />
          Add Portfolio Item
        </Button>
      </div>

      {showForm && (
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-4">New Portfolio Item</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Project Title"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select onValueChange={(v) => setForm({ ...form, category: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Thumbnail URL</Label>
              <Input
                value={form.thumbnail_url}
                onChange={(e) => setForm({ ...form, thumbnail_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="space-y-1.5">
              <Label>Live URL</Label>
              <Input
                value={form.live_url}
                onChange={(e) => setForm({ ...form, live_url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="sm:col-span-2 space-y-1.5">
              <Label>Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Brief description..."
                rows={2}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button onClick={handleAdd} variant="gradient" size="sm">Save</Button>
            <Button onClick={() => setShowForm(false)} variant="outline" size="sm">Cancel</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            {item.thumbnail_url && (
              <div className="relative h-40">
                <Image
                  src={item.thumbnail_url}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFeatured(item.id, item.is_featured)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    item.is_featured ? "text-amber-500 bg-amber-50" : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  <Star className={`w-4 h-4 ${item.is_featured ? "fill-amber-400" : ""}`} />
                </button>
                {item.live_url && (
                  <a
                    href={item.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 transition-colors ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
