import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { Clock, TrendingUp, Globe, ChevronRight, Search, Bell } from "lucide-react";

export const metadata = { title: "NepNews — Nepal's Trusted News Portal" };

const featured = {
  title: "Nepal's Economy Shows Strong Growth in Q2 2025 Amid Regional Trade Surge",
  excerpt: "The Nepal Rastra Bank reports a 7.2% GDP growth rate for the second quarter, driven by increased tourism revenue and cross-border trade partnerships with India and China.",
  category: "Economy",
  time: "2 hours ago",
  img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&h=500&fit=crop",
  author: "Ramesh Thapa",
};

const articles = [
  { title: "Himalayan Trekking Season 2025 Breaks All Records with 800K+ Visitors", cat: "Tourism", time: "4h ago", img: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=300&h=200&fit=crop" },
  { title: "Kathmandu Metro Project Enters Final Phase, Launch Expected by December", cat: "Infrastructure", time: "6h ago", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=300&h=200&fit=crop" },
  { title: "Nepal Joins ASEAN Digital Economy Framework as Observer Member", cat: "Technology", time: "8h ago", img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=300&h=200&fit=crop" },
  { title: "New Education Policy: Free STEM Courses for All Government School Students", cat: "Education", time: "10h ago", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
];

const categories = ["Politics", "Economy", "Technology", "Sports", "Health", "Entertainment", "World", "Environment"];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="News Portal" price="NPR 9,999" />

      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="font-semibold">BREAKING:</span>
            <span className="opacity-80">Nepal's PM to attend BRICS+ Summit in Moscow next week</span>
          </div>
          <div className="flex items-center gap-4 opacity-70">
            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> EN / NP</span>
            <span>Monday, June 16, 2025</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-white border-b border-zinc-200 sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 border-b border-zinc-100">
            <div>
              <h1 className="text-3xl font-black tracking-tight">NEP<span className="text-red-600">NEWS</span></h1>
              <p className="text-xs text-zinc-400 tracking-widest">NEPAL'S TRUSTED SOURCE</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-2 text-sm text-zinc-400">
                <Search className="w-3.5 h-3.5" />
                <span>Search news...</span>
              </div>
              <button className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-red-700 transition-colors">Subscribe</button>
            </div>
          </div>
          <nav className="flex items-center gap-1 py-2 overflow-x-auto">
            {categories.map((c, i) => (
              <a key={c} href="#" className={`px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${i === 0 ? "bg-red-600 text-white" : "text-zinc-600 hover:bg-zinc-100"}`}>{c}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{featured.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold leading-tight mb-2">{featured.title}</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.time}</span>
                </div>
              </div>
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {articles.map((a) => (
                <div key={a.title} className="flex gap-4 group cursor-pointer">
                  <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">{a.cat}</span>
                    <h3 className="text-sm font-bold leading-snug mt-1 line-clamp-3 group-hover:text-red-600 transition-colors">{a.title}</h3>
                    <span className="text-xs text-zinc-400 flex items-center gap-1 mt-1.5"><Clock className="w-3 h-3" />{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending */}
            <div>
              <h3 className="font-black text-lg flex items-center gap-2 mb-4 border-b-2 border-red-600 pb-2">
                <TrendingUp className="w-4 h-4 text-red-600" /> Trending Now
              </h3>
              <div className="space-y-4">
                {[
                  "Nepal Wins 3 Gold Medals at South Asian Games 2025",
                  "Mount Everest Base Camp Gets First Permanent Wi-Fi Network",
                  "Government Launches NPR 50 Billion Renewable Energy Initiative",
                  "Pokhara International Airport Records 1M Passengers Milestone",
                  "Nepal's Tech Startup Scene Attracts $200M in Foreign Investment",
                ].map((h, i) => (
                  <div key={h} className="flex gap-4 group cursor-pointer">
                    <span className="text-3xl font-black text-zinc-100 shrink-0 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm font-semibold leading-snug group-hover:text-red-600 transition-colors">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <h3 className="font-black text-lg mb-2">Daily Digest</h3>
              <p className="text-zinc-500 text-sm mb-4">Get Nepal's top stories delivered to your inbox every morning.</p>
              <input className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm mb-3 focus:outline-none focus:border-red-400" placeholder="Your email address" />
              <button className="w-full bg-red-600 text-white font-bold py-2.5 rounded-xl text-sm hover:bg-red-700 transition-colors">
                Subscribe Free
              </button>
            </div>

            {/* Sports */}
            <div>
              <h3 className="font-black text-lg flex items-center justify-between mb-4 border-b border-zinc-100 pb-2">
                Sports <a href="#" className="text-red-600 text-xs font-normal flex items-center gap-1">More <ChevronRight className="w-3 h-3" /></a>
              </h3>
              <div className="relative rounded-xl overflow-hidden h-40">
                <Image src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop" alt="Sports" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <span className="text-xs bg-red-600 px-2 py-0.5 rounded font-semibold">Cricket</span>
                  <p className="text-sm font-bold mt-1">Nepal U-19 Team Qualifies for ICC World Cup Qualifiers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white mt-16 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-black mb-2">NEP<span className="text-red-500">NEWS</span></h2>
            <p className="text-zinc-400 text-sm">Nepal's most trusted digital news platform since 2015.</p>
          </div>
          {[
            ["Sections", ["Politics", "Economy", "Technology", "Sports", "Health"]],
            ["Company", ["About Us", "Our Team", "Careers", "Advertise", "Contact"]],
            ["Legal", ["Privacy Policy", "Terms of Use", "Cookie Policy", "Corrections"]],
          ].map(([title, links]) => (
            <div key={title as string}>
              <h4 className="font-bold mb-3 text-sm">{title as string}</h4>
              <ul className="space-y-2">
                {(links as string[]).map((l) => (
                  <li key={l}><a href="#" className="text-zinc-400 text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          © 2025 NepNews Media Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
