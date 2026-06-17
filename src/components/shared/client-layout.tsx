"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemoPreview = /^\/demos\/.+/.test(pathname);

  return (
    <>
      {!isDemoPreview && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDemoPreview && <Footer />}
      {!isDemoPreview && <FloatingWhatsApp />}
    </>
  );
}
