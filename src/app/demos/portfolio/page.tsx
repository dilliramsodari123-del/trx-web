import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { Code2, Link2, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

export const metadata = { title: "Aryan Sharma — Creative Developer Portfolio" };

const projects = [
  { title: "FinTrack Dashboard", cat: "UI/UX · React", year: "2025", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", tags: ["React", "TypeScript", "Tailwind"] },
  { title: "EcoMart Rebrand", cat: "Branding · Design", year: "2024", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", tags: ["Figma", "Illustration"] },
  { title: "NepNews Platform", cat: "Full Stack · Next.js", year: "2024", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop", tags: ["Next.js", "Supabase", "API"] },
  { title: "Lumina App", cat: "Mobile · React Native", year: "2023", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", tags: ["React Native", "Firebase"] },
];

const skills = ["React / Next.js", "TypeScript", "Node.js", "Figma / Design", "PostgreSQL", "React Native", "Tailwind CSS", "AWS"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Portfolio" price="NPR 4,999" />

      {/* Nav */}
      <nav className="sticky top-8 z-50 bg-white/90 backdrop-blur border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-black text-lg">aryan<span className="text-violet-600">.</span></span>
          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="#work" className="hover:text-zinc-900">Work</a>
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </div>
          <a href="#contact" className="bg-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-violet-700 transition-colors">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance
            </div>
            <h1 className="text-6xl font-black leading-none mb-6">
              I build digital<br />
              <span className="text-violet-600">experiences</span><br />
              that matter.
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-lg">
              Full-stack developer & UI designer from Kathmandu. I craft fast, beautiful, and user-centered web applications.
            </p>
            <div className="flex gap-4">
              <a href="#work" className="bg-zinc-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-700 transition-colors">
                View My Work
              </a>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors"><Code2 className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors"><Link2 className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden shrink-0">
            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Aryan Sharma" fill className="object-cover" />
            <div className="absolute -bottom-3 -right-3 bg-violet-600 text-white text-xs font-bold px-4 py-2 rounded-2xl">
              5+ years exp.
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-950 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-4 gap-8 text-center">
          {[["50+", "Projects"], ["30+", "Clients"], ["5+", "Years"], ["100%", "Satisfaction"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl font-black text-violet-400">{n}</div>
              <div className="text-sm text-white/50">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black">Selected Work</h2>
          <a href="#" className="flex items-center gap-1 text-violet-600 font-semibold text-sm hover:gap-2 transition-all">All projects <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] mb-4 bg-zinc-100">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-white text-zinc-900 font-semibold px-5 py-2.5 rounded-full text-sm">
                    <ExternalLink className="w-4 h-4" /> View Project
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-zinc-500 text-sm">{p.cat}</p>
                </div>
                <span className="text-xs text-zinc-400 mt-1">{p.year}</span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="bg-zinc-100 text-zinc-600 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="about" className="bg-zinc-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="bg-white border border-zinc-200 text-zinc-700 font-medium px-5 py-2.5 rounded-full text-sm hover:border-violet-300 hover:bg-violet-50 transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-zinc-950 text-white py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-4">Let's Work Together</h2>
          <p className="text-white/50 mb-8">Have a project in mind? I'd love to hear about it.</p>
          <a href="mailto:aryan@example.com" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors">
            <Mail className="w-5 h-5" /> Say Hello
          </a>
        </div>
      </section>

      <footer className="bg-zinc-900 py-8 px-6 text-center">
        <p className="text-zinc-500 text-sm">© 2025 Aryan Sharma. Built with passion in Kathmandu.</p>
      </footer>
    </div>
  );
}
