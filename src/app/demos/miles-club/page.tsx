import { PreviewBar } from "@/components/shared/preview-bar";
import { Plane, Star, Gift, Shield, ChevronRight, MapPin, Award, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = { title: "Miles Club — Travel Rewards & Loyalty Program" };

export default function MilesClubPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Travel Loyalty" price="NPR 14,999" />

      {/* Nav */}
      <nav className="bg-[#0a0e1a]/95 backdrop-blur border-b border-white/10 sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Miles<span className="text-amber-400">Club</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Earn Miles</a>
            <a href="#" className="hover:text-white transition-colors">Redeem</a>
            <a href="#" className="hover:text-white transition-colors">Partners</a>
            <a href="#" className="hover:text-white transition-colors">Tiers</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-white/70 hover:text-white">Sign In</button>
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2 rounded-full text-sm transition-colors">
              Join Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop"
            alt="Aerial view"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <Star className="w-3.5 h-3.5" />
              Over 2 Million Members Worldwide
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-none mb-6">
              Fly More.<br />
              <span className="text-amber-400">Earn More.</span><br />
              Live More.
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
              Join Miles Club and turn every journey into extraordinary rewards. Earn miles on flights, hotels, dining, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105">
                Start Earning Free
              </button>
              <button className="border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full text-base transition-all">
                Explore Benefits
              </button>
            </div>
            <div className="flex gap-8 mt-12">
              {[["2M+", "Members"], ["180+", "Countries"], ["500+", "Partners"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-black text-amber-400">{n}</div>
                  <div className="text-sm text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#0d1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How Miles Club Works</h2>
            <p className="text-white/50 max-w-lg mx-auto">Simple steps to start earning and redeeming your miles for dream experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, step: "01", title: "Join for Free", desc: "Create your account in 2 minutes. No credit card needed. Instant access to your miles wallet." },
              { icon: <MapPin className="w-6 h-6" />, step: "02", title: "Earn Miles", desc: "Fly with partner airlines, book hotels, dine at restaurants, and shop with 500+ partners worldwide." },
              { icon: <Gift className="w-6 h-6" />, step: "03", title: "Redeem Rewards", desc: "Use your miles for flights, hotel stays, car rentals, shopping vouchers, and exclusive experiences." },
            ].map((item) => (
              <div key={item.step} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Membership Tiers</h2>
            <p className="text-white/50">The more you fly, the more you earn.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tier: "Silver", color: "from-slate-400 to-slate-600", miles: "0–24,999", perks: ["1x miles multiplier", "Priority check-in", "Free baggage allowance", "Access to lounge (2×/year)"] },
              { tier: "Gold", color: "from-amber-400 to-amber-600", miles: "25,000–74,999", perks: ["1.5x miles multiplier", "Priority boarding", "2 free checked bags", "Unlimited lounge access", "Seat upgrades"] },
              { tier: "Platinum", color: "from-violet-400 to-violet-600", miles: "75,000+", perks: ["2x miles multiplier", "Dedicated concierge", "First class upgrades", "Unlimited companion passes", "Global lounge access", "Personal account manager"] },
            ].map((t, i) => (
              <div key={t.tier} className={`rounded-2xl border ${i === 1 ? "border-amber-500/50 scale-105" : "border-white/10"} bg-white/5 p-8 relative overflow-hidden`}>
                {i === 1 && <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-1">{t.tier}</h3>
                <p className="text-white/40 text-sm mb-6">{t.miles} miles/year</p>
                <ul className="space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-white/70">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Design Preview */}
      <section className="py-24 bg-[#0d1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/40 text-violet-400 rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5" />
              AI-Generated Design Preview
            </div>
            <h2 className="text-4xl font-black mb-4">See It In Action</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              A live preview of an AI-designed miles &amp; loyalty experience — built in minutes with TrX Web.
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
            {/* Browser Chrome */}
            <div className="bg-[#1a1a2e] border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#0a0e1a] rounded-md px-4 py-1.5 text-xs text-white/30 font-mono flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                  milesclub.com
                </div>
              </div>
            </div>
            {/* Iframe */}
            <div className="relative w-full" style={{ height: "680px" }}>
              <iframe
                src="/miles-club-preview.html"
                className="w-full h-full border-0"
                title="Miles Club AI Design Preview"
                style={{ transform: "scale(0.75)", transformOrigin: "top left", width: "133.33%", height: "133.33%" }}
              />
            </div>
          </div>

          <p className="text-center text-white/30 text-xs mt-4">
            Scroll inside the preview to explore the full design
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#0d1120] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-8">500+ Partner Brands</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {["Qatar Airways", "Marriott Hotels", "Hertz", "Amazon", "Starbucks", "Visa", "Hilton", "Uber"].map((b) => (
              <span key={b} className="text-white font-semibold text-lg">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600">
        <div className="max-w-3xl mx-auto px-6 text-center text-black">
          <h2 className="text-5xl font-black mb-4">Ready to Take Off?</h2>
          <p className="text-black/60 text-lg mb-8">Join 2 million members and start earning miles on every purchase.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-zinc-800 transition-colors">
              Join Miles Club Free
            </button>
            <button className="border-2 border-black/30 font-bold px-10 py-4 rounded-full text-lg hover:bg-black/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080b14] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Plane className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold">MilesClub</span>
          </div>
          <p className="text-white/30 text-sm">© 2025 Miles Club. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
