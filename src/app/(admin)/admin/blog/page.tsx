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
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Blog Posts</h1>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                {["Title", "Status", "Published", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(posts ?? []).map((post) => (
                <tr key={post.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-sm text-slate-900">
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        post.is_published
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {post.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500">
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {(!posts || posts.length === 0) && (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center text-slate-400">
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
