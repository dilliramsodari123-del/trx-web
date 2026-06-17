import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { MapPin, Star, Wifi, Coffee, Car, Waves, ChevronRight, Phone } from "lucide-react";

export const metadata = { title: "Himalaya Grand Hotel — Pokhara, Nepal" };

const rooms = [
  { name: "Deluxe Room", view: "Mountain View", price: "NPR 8,500", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop", guests: "2 guests · 1 king bed · 32m²" },
  { name: "Junior Suite", view: "Lake & Mountain", price: "NPR 14,000", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop", guests: "2 guests · 1 king bed · 56m²" },
  { name: "Grand Suite", view: "Panoramic Himalaya", price: "NPR 28,000", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop", guests: "4 guests · 2 beds · 90m²" },
];

const amenities = [
  { icon: <Wifi />, name: "High-Speed Wi-Fi" },
  { icon: <Coffee />, name: "Breakfast Included" },
  { icon: <Waves />, name: "Heated Pool" },
  { icon: <Car />, name: "Free Parking" },
];

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Hotel Website" price="NPR 12,999" />

      {/* Nav */}
      <nav className="bg-[#1a1208]/95 backdrop-blur text-white sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold tracking-widest uppercase">Himalaya Grand</div>
            <div className="text-amber-400/60 text-xs tracking-widest">POKHARA · NEPAL</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-white/60">
            <a href="#rooms" className="hover:text-amber-400 transition-colors">Rooms</a>
            <a href="#dining" className="hover:text-amber-400 transition-colors">Dining</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Gallery</a>
          </div>
          <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2.5 text-xs tracking-widest uppercase transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&h=900&fit=crop"
          alt="Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/50 via-transparent to-[#1a1208]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-amber-400/80 text-xs tracking-[0.5em] uppercase mb-4">5-Star Luxury · Est. 2008</p>
          <h1 className="text-6xl md:text-8xl font-thin mb-4 leading-none">Himalaya Grand</h1>
          <div className="flex items-center gap-2 mb-6">
            {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed mb-10">
            Where the Annapurna range meets Phewa Lake — experience luxury redefined in the heart of Pokhara.
          </p>
          <div className="flex gap-4">
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              Book Your Stay
            </button>
            <button className="border border-white/40 hover:border-white text-white px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              Explore Hotel
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 px-8">
          <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 grid grid-cols-4 divide-x divide-white/20 text-white text-center">
            {[["Check-in", "Select Date"], ["Check-out", "Select Date"], ["Guests", "2 Adults"], ["Room Type", "Any"]].map(([l, v]) => (
              <div key={l} className="px-6">
                <p className="text-xs opacity-50 uppercase tracking-widest mb-1">{l}</p>
                <p className="font-semibold text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 text-xs tracking-[0.4em] uppercase mb-4">Welcome to</p>
            <h2 className="text-5xl font-thin leading-tight mb-6">A New Standard<br />of <em>Luxury</em></h2>
            <p className="text-zinc-500 leading-relaxed mb-4">
              Nestled on the shores of Phewa Lake with direct views of the Annapurna and Machhapuchhre peaks, Himalaya Grand offers an unmatched blend of Nepali hospitality and world-class luxury.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Our 89 meticulously designed rooms and suites, award-winning restaurants, and a comprehensive wellness centre make every stay an extraordinary experience.
            </p>
            <a href="#" className="flex items-center gap-2 text-amber-600 font-semibold text-sm hover:gap-4 transition-all">
              Discover Our Story <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=600&fit=crop" alt="Pool" fill className="object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop" alt="Restaurant" fill className="object-cover" />
              </div>
              <div className="bg-amber-500 rounded-2xl p-6 text-black text-center">
                <div className="text-3xl font-black">89</div>
                <div className="text-xs font-semibold uppercase tracking-widest">Luxury Rooms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-16 bg-[#1a1208] text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10 text-center">
            {amenities.map((a) => (
              <div key={a.name} className="px-8 py-8">
                <div className="w-10 h-10 rounded-full border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-4 [&>svg]:w-5 [&>svg]:h-5">{a.icon}</div>
                <p className="text-sm tracking-widest uppercase text-white/60">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-xs tracking-[0.4em] uppercase mb-3">Accommodation</p>
            <h2 className="text-4xl font-thin">Our Rooms & Suites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <Image src={r.img} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {r.view}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{r.name}</h3>
                    <div className="text-right">
                      <div className="font-bold text-amber-700">{r.price}</div>
                      <div className="text-xs text-zinc-400">per night</div>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{r.guests}</p>
                  <button className="w-full bg-[#1a1208] hover:bg-[#2a2010] text-white text-xs tracking-widest uppercase py-3 rounded-xl transition-colors font-semibold">
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=600&fit=crop" alt="Mountains" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#1a1208]/70" />
        <div className="relative max-w-2xl mx-auto px-8 text-center text-white">
          <h2 className="text-5xl font-thin mb-4">Experience Himalaya Grand</h2>
          <p className="text-white/50 mb-8">Special offer: Book 3+ nights and enjoy 20% off + complimentary spa treatment.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              Book Now
            </button>
            <a href="tel:+977-61-123456" className="flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors">
              <Phone className="w-4 h-4" /> Call Reception
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0b05] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold tracking-widest uppercase">Himalaya Grand Hotel</div>
            <div className="text-amber-400/50 text-xs mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Lakeside, Pokhara, Nepal</div>
          </div>
          <p className="text-white/30 text-sm">© 2025 Himalaya Grand. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="tel:+977-61-123456" className="hover:text-white">+977-61-123456</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
