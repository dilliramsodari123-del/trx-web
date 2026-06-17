"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL, FACEBOOK_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "@/components/shared/motion";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello TRx WEB! 👋 I'm interested in getting a website. Can you help me?"
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-card rounded-2xl shadow-2xl border border-border p-4 w-76"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">TRx WEB</p>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Online · Replies within 1 hour
                </p>
              </div>
            </div>

            {/* Message bubble */}
            <div className="bg-secondary/60 rounded-xl p-3 mb-3">
              <p className="text-sm text-foreground leading-relaxed">
                👋 Ready to get your website in 48 hours? Chat with us — we&apos;re here!
              </p>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 mb-3"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </button>

            {/* Contact alternatives */}
            <div className="border-t border-border pt-3 flex flex-col gap-2">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Other ways to reach us</p>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                {EMAIL}
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center text-primary font-bold text-[10px]">f</span>
                facebook.com/trxweb687
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-colors relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </motion.button>
    </div>
  );
}
