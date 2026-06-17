import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin/admin-nav";
import Link from "next/link";
import { Plus, Eye, EyeOff } from "lucide-react";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect("/admin/login");

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Blog Posts</h1>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-linear-to-r from-primary to-brand-violet text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </div>
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                {["Title", "Status", "Published", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {(posts ?? []).map((post) => (
                <tr key={post.id} className="hover:bg-accent/40 transition-colors">
                  <td className="px-4 py-3 font-semibold text-sm text-foreground">
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                        post.is_published
                          ? "bg-brand-success/10 text-brand-success border-brand-success/20"
                          : "bg-secondary text-muted-foreground border-border"
                      }`}
                    >
                      {post.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {(!posts || posts.length === 0) && (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center text-muted-foreground">
                    No blog posts yet. Create your first one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
