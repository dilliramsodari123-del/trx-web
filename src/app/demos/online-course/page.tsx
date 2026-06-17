import { PreviewBar } from "@/components/shared/preview-bar";
import Image from "next/image";
import { BookOpen, Play, Star, Users, Clock, ChevronRight, Award, CheckCircle, TrendingUp } from "lucide-react";

export const metadata = { title: "LearnNepal — Online Courses & Skill Development" };

const courses = [
  { title: "Complete Web Development Bootcamp 2025", instructor: "Bikash Sharma", rating: 4.9, students: 12400, hours: 42, price: "NPR 999", original: "NPR 3,999", level: "Beginner", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop", badge: "Bestseller" },
  { title: "Digital Marketing Masterclass", instructor: "Sima Rana", rating: 4.8, students: 8200, hours: 28, price: "NPR 799", original: "NPR 2,999", level: "All Levels", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop", badge: "Hot" },
  { title: "Python for Data Science & AI", instructor: "Rajan KC", rating: 4.9, students: 15600, hours: 56, price: "NPR 1,299", original: "NPR 4,999", level: "Intermediate", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop", badge: "New" },
];

const categories = ["Web Development", "Data Science", "Digital Marketing", "UI/UX Design", "Cybersecurity", "Business", "Nepali Language", "Photography"];

export default function OnlineCoursePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ paddingTop: "32px" }}>
      <PreviewBar category="Online Course Platform" price="NPR 14,999" />

      {/* Nav */}
      <nav className="bg-white border-b border-zinc-100 sticky top-8 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <BookOpen className="w-6 h-6 text-teal-600" />
            <span className="text-xl font-black">Learn<span className="text-teal-600">Nepal</span></span>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-2 focus-within:border-teal-400 transition-colors">
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><path d="m21 21-4.35-4.35" /></svg>
              <input className="flex-1 text-sm outline-none placeholder-zinc-400" placeholder="Search courses..." />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#categories" className="hover:text-teal-600">Categories</a>
            <a href="#courses" className="hover:text-teal-600">Courses</a>
            <a href="#" className="hover:text-teal-600">For Business</a>
          </div>
          <div className="flex items-center gap-3 ml-auto shrink-0">
            <button className="text-sm font-semibold text-zinc-700 hover:text-zinc-900">Log In</button>
            <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors">Sign Up Free</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(20,184,166,0.2) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Over 100,000 learners in Nepal
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Learn Without<br />
              <span className="text-teal-300">Limits.</span><br />
              Grow Without<br />
              Borders.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Nepal's largest online learning platform with 500+ courses in Nepali & English, taught by expert instructors.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-400 hover:bg-teal-300 text-teal-900 font-black px-8 py-4 rounded-full transition-colors">
                Start Learning Free
              </button>
              <button className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full transition-colors">
                Browse Courses
              </button>
            </div>
            <div className="flex gap-8 mt-10">
              {[["500+", "Courses"], ["100K+", "Learners"], ["4.8★", "Avg Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black text-teal-300">{n}</div>
                  <div className="text-white/40 text-xs">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 text-zinc-900 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop" alt="Course" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm">Web Development Bootcamp</p>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    4.9 · 12,400 students
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {["HTML, CSS & JavaScript Fundamentals", "React & Next.js Framework", "Node.js & Database Design", "Deploy to Production"].map((l, i) => (
                  <div key={l} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${i < 2 ? "text-teal-500" : "text-zinc-300"}`} />
                    <span className={i >= 2 ? "text-zinc-400" : ""}>{l}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-teal-600">NPR 999</span>
                  <span className="text-zinc-400 line-through text-sm ml-2">NPR 3,999</span>
                </div>
                <button className="bg-teal-600 text-white font-bold px-5 py-2 rounded-full text-sm">Enroll</button>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-amber-400 text-amber-900 font-bold px-4 py-2 rounded-xl text-sm shadow-lg">
              🎉 75% off today!
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8">Top Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <a key={c} href="#" className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${i === 0 ? "bg-teal-600 text-white border-teal-600" : "bg-white text-zinc-600 border-zinc-200 hover:border-teal-400 hover:text-teal-600"}`}>{c}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">Featured Courses</h2>
            <a href="#" className="flex items-center gap-1 text-teal-600 font-semibold text-sm hover:gap-2 transition-all">All Courses <ChevronRight className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{c.badge}</span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-5 h-5 text-zinc-900 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">{c.level}</span>
                  <h3 className="font-bold text-base mt-2 mb-1 line-clamp-2">{c.title}</h3>
                  <p className="text-zinc-400 text-sm mb-3">{c.instructor}</p>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-1 text-amber-600 font-bold"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{c.rating}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{c.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.hours}h</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                    <div>
                      <span className="font-black text-lg text-teal-700">{c.price}</span>
                      <span className="text-zinc-400 line-through text-sm ml-2">{c.original}</span>
                    </div>
                    <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-4 py-1.5 rounded-full text-sm transition-colors">Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LearnNepal */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">Why LearnNepal?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: "500+ Courses", desc: "New courses added weekly" },
              { icon: <Award className="w-6 h-6" />, title: "Certificates", desc: "Recognized by top employers" },
              { icon: <Play className="w-6 h-6" />, title: "Offline Access", desc: "Learn anywhere, anytime" },
              { icon: <Users className="w-6 h-6" />, title: "Community", desc: "Join 100,000+ learners" },
            ].map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-teal-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto mb-4">{f.icon}</div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-white/40 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Start Learning Today</h2>
          <p className="text-zinc-500 mb-8">Join 100,000+ learners building skills that matter. First 7 days free.</p>
          <button className="bg-teal-600 hover:bg-teal-500 text-white font-black px-12 py-4 rounded-full text-lg transition-colors">
            Get Started Free
          </button>
          <p className="text-zinc-400 text-sm mt-4">No credit card required</p>
        </div>
      </section>

      <footer className="bg-zinc-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-teal-400" /><span className="font-black">LearnNepal</span></div>
          <p className="text-zinc-500 text-sm">© 2025 LearnNepal. Empowering Nepali learners.</p>
          <div className="flex gap-4 text-xs text-zinc-500"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </footer>
    </div>
  );
}
