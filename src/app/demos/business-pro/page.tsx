import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { TrendingUp, Users, Shield, Globe, ChevronRight, Phone, Mail, MapPin, Award, BarChart3 } from "lucide-react";

export const metadata = { title: "Apex Consulting — Strategic Business Solutions" };

const services = [
  { icon: <TrendingUp />, title: "Business Strategy", desc: "Comprehensive strategic planning to scale your business and outperform the competition." },
  { icon: <BarChart3 />, title: "Financial Advisory", desc: "Expert financial guidance, investment planning, and risk management for sustainable growth." },
  { icon: <Users />, title: "HR & Talent", desc: "Build high-performing teams with our executive recruitment and leadership development programs." },
  { icon: <Globe />, title: "Market Expansion", desc: "Enter new markets confidently with our research-backed expansion strategies." },
  { icon: <Shield />, title: "Risk Management", desc: "Identify, assess, and mitigate business risks before they impact your bottom line." },
  { icon: <Award />, title: "Brand Positioning", desc: "Craft a compelling brand narrative that resonates with your target audience." },
];

const team = [
  { name: "Sanjay Karki", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { name: "Priya Shrestha", role: "CFO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
  { name: "Rajan Pandey", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  { name: "Maya Thapa", role: "Director, Operations", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" },
];

export default function BusinessProPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Business Website" price="NPR 9,999" />

      {/* Nav */}
      <nav className="bg-[#0c1e3c] text-white sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-lg leading-none">APEX</div>
              <div className="text-blue-400 text-xs tracking-widest">CONSULTING</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+977-1-5555555" className="flex items-center gap-1.5 text-white/60 text-sm hover:text-white">
              <Phone className="w-4 h-4" /> +977-1-5555555
            </a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded text-sm transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#0c1e3c] text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=800&fit=crop" alt="Business" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded mb-6">
              <Award className="w-3.5 h-3.5" /> Nepal's #1 Business Consultancy 2024
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Transform Your<br />
              <span className="text-blue-400">Business Vision</span><br />
              Into Reality
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Apex Consulting partners with businesses across Nepal and South Asia to drive sustainable growth, improve operations, and build competitive advantage.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded text-sm transition-colors">
                Get Free Consultation
              </button>
              <button className="border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded text-sm transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["200+", "Clients Served"], ["NPR 2B+", "Revenue Generated"], ["15+", "Years Experience"], ["98%", "Client Retention"]].map(([n, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-blue-400">{n}</div>
                <div className="text-white/50 text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-zinc-50 py-10 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-6">Trusted by Nepal's Leading Companies</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-40">
            {["Ncell", "Nepal Telecom", "Nabil Bank", "Standard Chartered", "Himalayan Bank", "Soaltee Hotels"].map((c) => (
              <span key={c} className="font-bold text-zinc-700">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Services</h2>
            <p className="text-zinc-500 max-w-lg mx-auto">End-to-end consulting solutions tailored to your business needs and industry context.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-zinc-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors [&>svg]:w-5 [&>svg]:h-5">{s.icon}</div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm mb-4">{s.desc}</p>
                <a href="#" className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#0c1e3c] text-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop" alt="Office" className="rounded-2xl object-cover w-full h-96" width={600} height={400} />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl">
              <div className="text-4xl font-black">15+</div>
              <div className="text-xs tracking-widest uppercase">Years of Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6">Why Choose Apex?</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Founded in 2010, Apex Consulting has grown to become Nepal's most trusted business advisory firm with a team of 60+ expert consultants across various industries.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our proven methodologies, combined with deep local market knowledge and global best practices, deliver measurable results for every client we work with.
            </p>
            <div className="space-y-3">
              {["Data-driven strategic recommendations", "Industry-specific expertise across 12 sectors", "Ongoing support beyond project completion", "Confidential & transparent engagement"].map((p) => (
                <div key={p} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-white/70">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Leadership Team</h2>
            <p className="text-zinc-500">Experienced professionals dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center group">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4">
                  <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-zinc-400 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
              <p className="text-zinc-500 mb-8">Ready to transform your business? Schedule a free 30-minute consultation call.</p>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="w-4 h-4" />, label: "+977-1-5555555" },
                  { icon: <Mail className="w-4 h-4" />, label: "info@apexconsulting.com.np" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Durbar Marg, Kathmandu" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 text-zinc-600">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">{c.icon}</div>
                    <span className="text-sm">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Free Consultation</h3>
              <div className="space-y-4">
                <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Your Full Name" />
                <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Company Name" />
                <input className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" placeholder="Email Address" />
                <select className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 text-zinc-600">
                  <option>Select Service</option>
                  <option>Business Strategy</option>
                  <option>Financial Advisory</option>
                  <option>HR & Talent</option>
                </select>
                <button className="w-full bg-[#0c1e3c] hover:bg-blue-900 text-white font-bold py-4 rounded-xl text-sm transition-colors">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#07111f] text-white py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center"><TrendingUp className="w-4 h-4" /></div>
            <div><div className="font-black">APEX CONSULTING</div><div className="text-blue-400/60 text-xs">Kathmandu, Nepal</div></div>
          </div>
          <p className="text-white/30 text-sm">© 2025 Apex Consulting. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
