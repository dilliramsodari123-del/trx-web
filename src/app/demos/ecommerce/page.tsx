import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { ShoppingCart, Heart, Star, Search, User, Truck, Shield, RefreshCw, ChevronRight } from "lucide-react";

export const metadata = { title: "KathShop — Nepal's Premium Online Store" };

const products = [
  { name: "Himalayan Hand-Knit Sweater", price: "NPR 3,200", original: "NPR 4,500", rating: 4.8, reviews: 124, badge: "Best Seller", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop" },
  { name: "Pashmina Luxury Shawl", price: "NPR 5,800", original: "NPR 7,000", rating: 4.9, reviews: 87, badge: "New", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop" },
  { name: "Singing Bowl Set (7 Chakras)", price: "NPR 4,100", original: null, rating: 5.0, reviews: 56, badge: "Handcrafted", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=500&fit=crop" },
  { name: "Thangka Painting — Mandala", price: "NPR 8,500", original: "NPR 11,000", rating: 4.7, reviews: 32, badge: "Sale", img: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=500&fit=crop" },
  { name: "Yak Wool Blanket", price: "NPR 6,200", original: null, rating: 4.8, reviews: 45, badge: "Eco", img: "https://images.unsplash.com/photo-1631248822714-c7a67f54ad55?w=400&h=500&fit=crop" },
  { name: "Copper Dhaka Topi + Kurta Set", price: "NPR 2,800", original: "NPR 3,500", rating: 4.6, reviews: 78, badge: "Traditional", img: "https://images.unsplash.com/photo-1614093302611-8efc4b284657?w=400&h=500&fit=crop" },
];

const categories = ["All", "Clothing", "Handicrafts", "Jewelry", "Art", "Wellness", "Home Decor"];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="E-Commerce" price="NPR 19,999" />

      {/* Top bar */}
      <div className="bg-zinc-900 text-white text-xs py-2 text-center">
        Free shipping on orders above NPR 2,000 · Use code NEPAL10 for 10% off
      </div>

      {/* Nav */}
      <header className="bg-white border-b border-zinc-100 sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-black">Kath<span className="text-orange-500">Shop</span></span>
            <div className="text-xs text-zinc-400">Made in Nepal</div>
          </div>
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-2 border border-zinc-200 rounded-full px-5 py-2.5 focus-within:border-orange-400 transition-colors">
              <Search className="w-4 h-4 text-zinc-400" />
              <input className="flex-1 text-sm outline-none placeholder-zinc-400" placeholder="Search Nepali handicrafts, clothing, art..." />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center hover:bg-zinc-100 rounded-full relative">
              <User className="w-5 h-5 text-zinc-600" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center hover:bg-zinc-100 rounded-full relative">
              <Heart className="w-5 h-5 text-zinc-600" />
            </button>
            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors relative">
              <ShoppingCart className="w-4 h-4" />
              Cart (3)
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>
        <div className="border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 py-2 overflow-x-auto">
            {categories.map((c, i) => (
              <a key={c} href="#" className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap font-medium transition-colors ${i === 0 ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"}`}>{c}</a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop" alt="Nepal Crafts" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center px-12">
          <div className="text-white max-w-lg">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Summer Collection 2025</span>
            <h1 className="text-5xl font-black leading-tight mt-2 mb-4">Authentic<br />Nepali Crafts</h1>
            <p className="text-white/60 mb-6">Handmade with love by local artisans. Every purchase supports traditional craftsmanship.</p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 rounded-full transition-colors">Shop Now</button>
              <button className="border border-white/40 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Our Story</button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-center">
          <div className="text-2xl font-black">30%</div>
          <div className="text-xs font-semibold">OFF TODAY</div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 divide-x divide-zinc-200 text-center text-sm">
          {[
            { icon: <Truck className="w-5 h-5" />, title: "Free Shipping", desc: "On orders above NPR 2,000" },
            { icon: <Shield className="w-5 h-5" />, title: "Authentic Guarantee", desc: "100% genuine handcrafted items" },
            { icon: <RefreshCw className="w-5 h-5" />, title: "Easy Returns", desc: "7-day hassle-free returns" },
          ].map((b) => (
            <div key={b.title} className="flex items-center justify-center gap-3 px-6 py-2">
              <div className="text-orange-500">{b.icon}</div>
              <div className="text-left">
                <div className="font-bold text-xs">{b.title}</div>
                <div className="text-zinc-400 text-xs">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black">Featured Products</h2>
          <a href="#" className="flex items-center gap-1 text-orange-500 font-semibold text-sm hover:gap-2 transition-all">View All <ChevronRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-50 mb-3">
                <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.badge}</div>
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                  <Heart className="w-3.5 h-3.5 text-zinc-600" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full bg-zinc-900 text-white text-xs font-bold py-2 rounded-xl hover:bg-zinc-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-xs leading-snug mb-1 line-clamp-2">{p.name}</h3>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-xs text-zinc-500">{p.rating} ({p.reviews})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-orange-600">{p.price}</span>
                {p.original && <span className="text-xs text-zinc-400 line-through">{p.original}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            { title: "Handicrafts", img: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=400&h=300&fit=crop", count: "200+ items" },
            { title: "Traditional Clothing", img: "https://images.unsplash.com/photo-1614093302611-8efc4b284657?w=400&h=300&fit=crop", count: "150+ items" },
            { title: "Wellness & Yoga", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop", count: "80+ items" },
          ].map((c) => (
            <div key={c.title} className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-black text-lg">{c.title}</h3>
                <p className="text-white/60 text-xs">{c.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-900 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-2">Get 10% Off Your First Order</h2>
          <p className="text-zinc-400 mb-6">Join 50,000+ shoppers. No spam, just great deals.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder-white/40 focus:outline-none focus:border-orange-400 text-white" placeholder="Your email address" />
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="font-black text-xl">Kath<span className="text-orange-500">Shop</span></span>
          <p className="text-zinc-500 text-sm">© 2025 KathShop · Supporting Nepali Artisans</p>
          <div className="flex gap-4 text-xs text-zinc-500"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </footer>
    </div>
  );
}
