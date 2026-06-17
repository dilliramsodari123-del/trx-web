import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { Clock, Shield, Star, ChevronRight } from "lucide-react";

export const metadata = { title: "Wristigy — Premium Timepieces" };

export default function WristigyPage() {
  const collections = [
    { name: "Heritage", desc: "Swiss movement, sapphire crystal", price: "NPR 45,000", tag: "Best Seller", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop" },
    { name: "Apex Sport", desc: "100m water resistant, titanium case", price: "NPR 62,000", tag: "New", img: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=500&fit=crop" },
    { name: "Lumière", desc: "Diamond dial, rose gold plated", price: "NPR 89,000", tag: "Limited", img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=500&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Watch Brand" price="NPR 12,999" />

      {/* Nav */}
      <nav className="bg-[#0c0c0c]/95 backdrop-blur border-b border-white/10 sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="text-2xl font-thin tracking-[0.3em] uppercase">WRISTIGY</span>
          <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase text-white/60">
            <a href="#" className="hover:text-white">Collections</a>
            <a href="#" className="hover:text-white">Heritage</a>
            <a href="#" className="hover:text-white">Boutiques</a>
            <a href="#" className="hover:text-white">Services</a>
          </div>
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-white/60">
            <a href="#" className="hover:text-white">Search</a>
            <a href="#" className="hover:text-white border border-white/30 px-4 py-2">Shop Now</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=1600&h=900&fit=crop"
            alt="Luxury watch"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-amber-400/80 mb-6">New Collection 2025</p>
            <h1 className="text-7xl font-thin leading-none mb-8 tracking-tight">
              Time Is<br />
              <em className="font-light italic text-amber-400">Art.</em>
            </h1>
            <p className="text-white/50 leading-relaxed mb-10 text-sm">
              Every Wristigy timepiece is hand-assembled by master craftsmen using the finest Swiss movements and ethically sourced materials.
            </p>
            <div className="flex gap-4">
              <button className="bg-amber-500 text-black font-semibold px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-amber-400 transition-colors">
                Explore Collection
              </button>
              <button className="border border-white/30 px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors">
                Our Story
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 text-right">
          <div className="text-4xl font-thin text-amber-400">Since 1987</div>
          <div className="text-xs text-white/30 tracking-widest uppercase">Crafting Excellence</div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-1">
          {[
            { icon: <Clock className="w-5 h-5" />, title: "Swiss Movement", desc: "ETA 2824-2 automatic movement" },
            { icon: <Shield className="w-5 h-5" />, title: "5-Year Warranty", desc: "Full manufacturer guarantee" },
            { icon: <Star className="w-5 h-5" />, title: "Sapphire Crystal", desc: "Scratch-resistant glass" },
          ].map((f) => (
            <div key={f.title} className="px-8 py-12 text-center border-r border-white/5 last:border-r-0">
              <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center mx-auto mb-4 text-amber-400">{f.icon}</div>
              <h3 className="font-light tracking-widest uppercase text-sm mb-2">{f.title}</h3>
              <p className="text-white/40 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-amber-400/60 mb-3">Curated For You</p>
            <h2 className="text-4xl font-thin">Featured Collections</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((c) => (
              <div key={c.name} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <Image src={c.img} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-semibold px-3 py-1">{c.tag}</div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="border border-white text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-black transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="font-light tracking-widest uppercase mb-1">{c.name}</h3>
                <p className="text-white/40 text-xs mb-2">{c.desc}</p>
                <p className="text-amber-400 font-semibold">{c.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square">
            <Image src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=600&fit=crop" alt="Watchmaker" fill className="object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-8">
              <div className="text-4xl font-black">38+</div>
              <div className="text-xs font-semibold uppercase tracking-widest">Years of Craft</div>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-amber-400/60 mb-6">Our Heritage</p>
            <h2 className="text-4xl font-thin mb-6 leading-tight">Every Second, <br />Masterfully Crafted</h2>
            <p className="text-white/50 leading-relaxed mb-4 text-sm">
              Founded in Geneva in 1987, Wristigy has been synonymous with horological excellence. Our master watchmakers bring decades of expertise to each timepiece.
            </p>
            <p className="text-white/50 leading-relaxed mb-8 text-sm">
              Each watch undergoes 200 hours of quality checks before it reaches your wrist, ensuring timeless precision.
            </p>
            <a href="#" className="flex items-center gap-2 text-amber-400 text-xs tracking-widest uppercase hover:gap-4 transition-all">
              Discover Our Story <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-[#0c0c0c]">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20" />
        <div className="relative max-w-2xl mx-auto px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-400/60 mb-4">Limited Edition</p>
          <h2 className="text-5xl font-thin mb-6">Reserve Your Timepiece</h2>
          <p className="text-white/40 text-sm mb-10">Each collection is limited to 500 pieces worldwide. Reserve yours today.</p>
          <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-12 py-4 text-xs tracking-widest uppercase transition-colors">
            Reserve Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-white/5 py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-thin tracking-[0.3em] uppercase">WRISTIGY</span>
          <p className="text-white/20 text-xs tracking-widest">© 2025 Wristigy Timepieces. Geneva, Switzerland.</p>
          <div className="flex gap-6 text-xs tracking-widest uppercase text-white/30">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
