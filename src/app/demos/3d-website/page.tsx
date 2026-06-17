import { PreviewBar } from "@/components/shared/preview-bar";
import { Layers, Zap, Globe2, MousePointer, Sparkles, ChevronRight } from "lucide-react";

export const metadata = { title: "Vortex Studio — Immersive 3D Web Experiences" };

export default function ThreeDWebsitePage() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden" style={{ paddingTop: "32px" }}>
      <PreviewBar category="3D Website" price="NPR 24,999" />

      {/* Nav */}
      <nav className="sticky top-8 z-50 bg-[#050510]/80 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 rounded-lg bg-violet-600 rotate-45 scale-75" />
              <div className="absolute inset-0 rounded-lg bg-cyan-500 rotate-12 scale-75 opacity-70" />
            </div>
            <span className="font-black text-xl tracking-tight">VOR<span className="text-violet-400">TEX</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <button className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="relative bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold px-6 py-2.5 rounded-full text-sm block">
              Start Project
            </span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl" />

        {/* 3D-ish floating cube */}
        <div className="absolute top-20 right-20 hidden lg:block" style={{ perspective: "500px" }}>
          <div className="w-32 h-32 relative" style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(-30deg)" }}>
            <div className="absolute inset-0 border border-violet-500/40 bg-violet-900/20 backdrop-blur" />
            <div className="absolute inset-2 border border-violet-400/20" />
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-violet-400" />
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-cyan-400" />
          </div>
        </div>

        {/* Floating ring */}
        <div className="absolute bottom-32 left-16 hidden lg:block">
          <div className="w-20 h-20 rounded-full border-2 border-cyan-500/30 relative">
            <div className="absolute inset-2 rounded-full border border-cyan-400/20" />
            <div className="absolute inset-0 rounded-full border border-violet-500/20 rotate-45" />
          </div>
        </div>

        <div className="relative text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            WebGL · Three.js · GSAP · Immersive UX
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              BEYOND
            </span>
            <br />
            <span className="text-white">FLAT.</span>
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            We craft immersive 3D web experiences that stop the scroll, engage the senses, and turn visitors into believers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-black px-10 py-4 rounded-full text-base">
                <MousePointer className="w-5 h-5" /> See Live Demo
              </span>
            </button>
            <button className="border border-white/10 hover:border-white/30 text-white/70 hover:text-white px-10 py-4 rounded-full text-base transition-all">
              View Our Work
            </button>
          </div>

          {/* Floating stats */}
          <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[["50+", "3D Projects"], ["100K+", "Monthly Visitors"], ["99%", "Client Satisfaction"]].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{n}</div>
                <div className="text-white/30 text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
          <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent" />
          Scroll
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-violet-400 text-xs tracking-[0.4em] uppercase mb-4">What We Build</p>
            <h2 className="text-5xl font-black">Dimensional <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Experiences</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe2 />, title: "3D Product Showcases", desc: "Interactive 3D product viewers that let customers explore every angle before buying.", tag: "WebGL" },
              { icon: <Layers />, title: "Immersive Storytelling", desc: "Scroll-driven narratives with parallax depth, particle systems, and cinematic transitions.", tag: "GSAP" },
              { icon: <Zap />, title: "Real-time Interactions", desc: "Physics-based interactions, cursor trails, and reactive elements that feel alive.", tag: "Three.js" },
              { icon: <Sparkles />, title: "3D Landing Pages", desc: "Hero sections with floating 3D geometry, ambient lighting, and fluid animations.", tag: "R3F" },
              { icon: <MousePointer />, title: "Virtual Showrooms", desc: "Walk-through product showrooms and virtual tours with spatial audio.", tag: "WebXR" },
              { icon: <Layers />, title: "Data Visualizations", desc: "Transform complex data into beautiful, interactive 3D charts and graphs.", tag: "D3 + GL" },
            ].map((s) => (
              <div key={s.title} className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:border-violet-500/30 transition-all hover:bg-white/[0.05]">
                <div className="absolute top-0 right-0 bg-violet-500/10 text-violet-300 text-xs px-3 py-1 rounded-bl-xl rounded-tr-2xl font-mono">{s.tag}</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/20 flex items-center justify-center mb-6 text-violet-400 [&>svg]:w-5 [&>svg]:h-5">{s.icon}</div>
                <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section id="work" className="py-24 bg-[#080815]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-black text-center mb-16">Selected <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Work</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Nike Air Max 3D Showcase", cat: "E-Commerce · WebGL", color: "from-orange-600/20 to-red-600/20", border: "border-orange-500/20" },
              { title: "Quantum Data Dashboard", cat: "SaaS · Three.js", color: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/20" },
              { title: "Serenity VR Meditation App", cat: "Wellness · WebXR", color: "from-violet-600/20 to-fuchsia-600/20", border: "border-violet-500/20" },
              { title: "Glacial Climate Story", cat: "Editorial · GSAP", color: "from-teal-600/20 to-green-600/20", border: "border-teal-500/20" },
            ].map((w) => (
              <div key={w.title} className={`relative rounded-2xl bg-gradient-to-br ${w.color} border ${w.border} p-10 group cursor-pointer hover:scale-[1.02] transition-transform`}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)" }} />
                <div className="h-40 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-2xl bg-white/5 rotate-12" />
                    <div className="absolute inset-2 rounded-xl bg-white/5 rotate-6" />
                    <div className="absolute inset-4 rounded-lg bg-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white/50" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl mt-4">{w.title}</h3>
                <p className="text-white/40 text-sm mt-1">{w.cat}</p>
                <div className="flex items-center gap-1 text-white/60 text-xs mt-4 group-hover:text-white transition-colors">
                  View Case Study <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 text-center px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-6xl font-black mb-6">
            Let's Build<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Something Epic</span>
          </h2>
          <p className="text-white/40 text-lg mb-10">Your brand deserves more than a flat website. Let's create an experience.</p>
          <button className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-black px-14 py-5 rounded-full text-xl">
              Start a Project
            </span>
          </button>
        </div>
      </section>

      <footer className="bg-[#030308] border-t border-white/5 py-8 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="font-black text-xl">VOR<span className="text-violet-400">TEX</span></span>
          <p className="text-white/20 text-sm">© 2025 Vortex Studio. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/20">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
