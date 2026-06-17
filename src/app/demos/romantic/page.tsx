import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { Heart, Star, Music, Camera } from "lucide-react";

export const metadata = { title: "A Love Story — Priya & Raj" };

const timeline = [
  { year: "2019", title: "First Meeting", desc: "We met at a college fest in Kathmandu. One look was all it took.", emoji: "✨" },
  { year: "2020", title: "First Date", desc: "A rainy evening, hot momos, and a conversation that never ended.", emoji: "☕" },
  { year: "2022", title: "Adventures Together", desc: "From Pokhara hills to Chitwan safaris — every journey made us closer.", emoji: "🏔️" },
  { year: "2024", title: "The Proposal", desc: "Under the stars at Nagarkot, with a ring and forever in mind.", emoji: "💍" },
  { year: "2025", title: "Forever Begins", desc: "Today, tomorrow, and every day after — it's always been you.", emoji: "💕" },
];

export default function RomanticPage() {
  return (
    <div className="min-h-screen bg-[#0d0508] text-white" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Romantic Website" price="NPR 7,999" />

      {/* Nav */}
      <nav className="sticky top-8 z-50 bg-[#0d0508]/90 backdrop-blur border-b border-rose-900/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="font-light tracking-widest text-rose-200/80 uppercase text-sm">Priya & Raj</span>
          </div>
          <div className="flex gap-6 text-xs tracking-widest uppercase text-white/40">
            <a href="#story" className="hover:text-rose-300">Our Story</a>
            <a href="#memories" className="hover:text-rose-300">Memories</a>
            <a href="#message" className="hover:text-rose-300">Message</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600&h=900&fit=crop" alt="Couple" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0508]/60 via-[#0d0508]/40 to-[#0d0508]" />
        </div>
        <div className="relative text-center px-6 max-w-3xl">
          <div className="flex justify-center mb-8">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <p className="text-rose-300/60 tracking-[0.5em] uppercase text-xs mb-4">A Love Story</p>
          <h1 className="text-7xl md:text-8xl font-thin mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Priya & Raj
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-12 font-light">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <div className="flex items-center justify-center gap-3 text-rose-300/60 text-sm">
            <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span className="tracking-widest">Together Since March 14, 2019</span>
            <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            {[["6", "Years Together"], ["∞", "Memories Made"], ["1", "Forever"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-4xl font-thin text-rose-400">{n}</div>
                <div className="text-xs text-white/30 mt-1 tracking-widest uppercase">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="story" className="py-24 bg-gradient-to-b from-[#0d0508] to-[#160a10]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl font-thin" style={{ fontFamily: "Georgia, serif" }}>Our Story</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-rose-900/30" />
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex gap-8 mb-16 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="text-rose-400/50 text-xs tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-xl font-light mt-1 mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#160a10] border border-rose-800/50 flex items-center justify-center text-2xl">
                  {item.emoji}
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="memories" className="py-24 bg-[#160a10]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Camera className="w-6 h-6 text-rose-400 mx-auto mb-4" />
            <h2 className="text-4xl font-thin" style={{ fontFamily: "Georgia, serif" }}>Our Memories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&h=500&fit=crop",
              "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=400&fit=crop",
            ].map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 1 || i === 3 ? "row-span-1 aspect-[3/4]" : "aspect-square"}`}>
                <Image src={src} alt={`Memory ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-rose-950/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter */}
      <section id="message" className="py-32 bg-[#0d0508]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Music className="w-8 h-8 text-rose-400 mx-auto mb-8" />
          <h2 className="text-4xl font-thin mb-10" style={{ fontFamily: "Georgia, serif" }}>A Message For You</h2>
          <div className="bg-rose-950/20 border border-rose-900/30 rounded-3xl p-10">
            <p className="text-white/60 leading-loose text-lg font-light italic" style={{ fontFamily: "Georgia, serif" }}>
              "Every morning I wake up grateful — grateful for your laugh, your eyes, your heart.
              You are my favorite adventure and my greatest treasure. Here's to forever, my love.
              Happy Anniversary."
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-rose-400/60">
              <Heart className="w-4 h-4 fill-rose-400" />
              <span className="text-sm font-light tracking-widest">With all my love, Raj</span>
              <Heart className="w-4 h-4 fill-rose-400" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#080306] border-t border-rose-950/30 py-8 text-center">
        <div className="flex items-center justify-center gap-2 text-rose-300/30 text-xs tracking-widest uppercase">
          <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
          Made with love — Priya & Raj, 2025
          <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
        </div>
      </footer>
    </div>
  );
}
