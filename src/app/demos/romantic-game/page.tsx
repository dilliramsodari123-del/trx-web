import { PreviewBar } from "@/components/shared/preview-bar";
import { Heart, Sparkles, Star, ChevronRight, Trophy, Gamepad2 } from "lucide-react";

export const metadata = { title: "LoveQuest — The Ultimate Couple's Game" };

const questions = [
  { q: "Your partner's love language is…", options: ["Words of Affirmation", "Acts of Service", "Physical Touch", "Quality Time"] },
  { q: "On a perfect date, you'd…", options: ["Cook dinner at home", "Go on a hike", "Watch movies & cuddle", "Try a new restaurant"] },
  { q: "Your relationship's biggest strength is…", options: ["Communication", "Humor & laughter", "Shared adventures", "Deep emotional bond"] },
];

const levels = [
  { name: "Fresh Love", emoji: "🌸", desc: "0–30 days", points: "Starter level, learning each other", color: "from-pink-400 to-rose-500" },
  { name: "Sweet Couple", emoji: "💑", desc: "1–6 months", points: "Finding your rhythm together", color: "from-rose-500 to-red-600" },
  { name: "Soul Mates", emoji: "✨", desc: "6–24 months", points: "Deep connection forming", color: "from-purple-500 to-violet-600" },
  { name: "Forever Pair", emoji: "💍", desc: "2+ years", points: "Unbreakable bond achieved", color: "from-amber-500 to-orange-600" },
];

export default function RomanticGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#16082a] to-[#0d0518] text-white" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Romantic Game" price="NPR 8,999" />

      {/* Nav */}
      <nav className="sticky top-8 z-50 bg-[#1a0a2e]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-pink-400" />
            <span className="text-xl font-black">Love<span className="text-pink-400">Quest</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#how" className="hover:text-pink-300">How It Works</a>
            <a href="#questions" className="hover:text-pink-300">Questions</a>
            <a href="#levels" className="hover:text-pink-300">Levels</a>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-6 py-2.5 rounded-full text-sm hover:from-pink-400 hover:to-rose-400 transition-all">
            Play Now Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-28 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-500/20 text-2xl"
              style={{ left: `${(i * 13 + 7) % 100}%`, top: `${(i * 17 + 5) % 100}%` }}
            >
              {["♥", "✦", "★", "♦"][i % 4]}
            </div>
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 fill-pink-400 text-pink-400" />)}
              <span className="text-white/50 text-sm ml-2">4.9 · 12,000+ couples</span>
            </div>
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 fill-white text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-black leading-none mb-6">
            How Well Do<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">You Know</span><br />
            Each Other?
          </h1>
          <p className="text-white/50 text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Play LoveQuest with your partner — 100+ romantic questions designed to deepen your connection and create unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black px-12 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-pink-500/30">
              Start Playing — It's Free!
            </button>
            <button className="border border-white/20 text-white px-10 py-5 rounded-full text-lg hover:bg-white/10 transition-colors">
              See Demo Questions
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            {[["100+", "Questions"], ["12K+", "Couples"], ["4.9★", "Rating"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-black text-pink-400">{n}</div>
                <div className="text-xs text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-white/5 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Create Room", desc: "One partner creates a game room and gets a unique code", emoji: "🏠" },
              { step: "2", title: "Partner Joins", desc: "Share the code with your partner — they join instantly", emoji: "🔗" },
              { step: "3", title: "Answer Together", desc: "Both answer questions simultaneously — no peeking!", emoji: "🎯" },
              { step: "4", title: "Reveal & Discuss", desc: "See how well you matched and discover new things", emoji: "🎉" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-4 text-2xl">
                  {s.emoji}
                </div>
                <div className="text-pink-400 text-xs font-bold tracking-widest mb-1">STEP {s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section id="questions" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <h2 className="text-4xl font-black">Sample Questions</h2>
            <p className="text-white/40 mt-2">Get a taste of what's inside — over 100 more await!</p>
          </div>
          <div className="space-y-6">
            {questions.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-400 font-black text-lg">Q{i + 1}</span>
                  <h3 className="font-bold text-lg">{item.q}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {item.options.map((opt, j) => (
                    <button key={j} className="text-left bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 rounded-xl px-4 py-3 text-sm text-white/70 hover:text-white transition-all">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="py-20 bg-white/5 backdrop-blur px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h2 className="text-4xl font-black">Couple Levels</h2>
            <p className="text-white/40 mt-2">Progress through levels as you play more together</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {levels.map((l) => (
              <div key={l.name} className={`rounded-2xl bg-gradient-to-br ${l.color} p-6 text-white text-center`}>
                <div className="text-4xl mb-3">{l.emoji}</div>
                <h3 className="font-black text-lg mb-1">{l.name}</h3>
                <p className="text-white/70 text-xs mb-2">{l.desc}</p>
                <p className="text-white/60 text-xs">{l.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 fill-pink-500 text-pink-500 mx-auto mb-6" />
          <h2 className="text-5xl font-black mb-4">Ready to Play?</h2>
          <p className="text-white/40 text-lg mb-8">It's completely free. No downloads. Just love.</p>
          <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black px-16 py-5 rounded-full text-xl hover:scale-105 transition-transform shadow-2xl shadow-pink-500/30">
            Play LoveQuest Free 💕
          </button>
        </div>
      </section>

      <footer className="bg-[#0a0314] border-t border-white/5 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-white/20 text-xs">
          <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
          <span>© 2025 LoveQuest · Made with love for couples everywhere</span>
          <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
        </div>
      </footer>
    </div>
  );
}
