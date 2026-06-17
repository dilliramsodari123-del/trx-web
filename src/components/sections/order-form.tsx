"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { generateWhatsAppMessage, openWhatsApp } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { createClient } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "@/components/shared/motion";

const schema = z.object({
  full_name: z.string().min(2, "Name is required"),
  business_name: z.string().optional(),
  phone: z.string().min(10, "Valid phone number required"),
  whatsapp: z.string().optional(),
  email: z.string().email("Valid email required"),
  website_type: z.string().min(1, "Website type is required"),
  business_category: z.string().optional(),
  preferred_color: z.string().optional(),
  pages_needed: z.string().optional(),
  features_required: z.string().optional(),
  reference_websites: z.string().optional(),
  deadline: z.string().optional(),
  budget: z.string().optional(),
  additional_notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const WEBSITE_TYPES = [
  "Business Website",
  "E-Commerce Website",
  "Portfolio Website",
  "Blogging Platform",
  "Online Course Website",
  "Startup MVP",
  "Restaurant Website",
  "School/College Website",
  "Event Website",
  "Personal Brand Website",
  "Gift Website",
];

const BUDGET_OPTIONS = [
  "NPR 4,999 (Starter)",
  "NPR 9,999 (Business)",
  "NPR 19,999 (E-Commerce)",
  "Custom / Enterprise",
];

export function OrderFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Save to Supabase
      const supabase = createClient();
      await supabase.from("leads").insert([data]);
    } catch {
      // Continue even if Supabase save fails (env not set up yet)
    } finally {
      setIsLoading(false);
    }

    // Generate WhatsApp message and open
    const msg = generateWhatsAppMessage(data);
    openWhatsApp(WHATSAPP_NUMBER, msg);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <SectionWrapper id="contact" className="py-24 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Request Has Been Sent!
            </h2>
            <p className="text-muted-foreground mb-8">
              WhatsApp has opened with your details pre-filled. Our team will respond within 1 hour. You can also click below to send directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => {
                  const msg = encodeURIComponent(
                    "Hello TRx WEB! I just submitted a website request. Looking forward to hearing from you!"
                  );
                  openWhatsApp(WHATSAPP_NUMBER, msg);
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Again
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="py-12 sm:py-16 md:py-24 bg-secondary/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Start Your Project"
          title="Tell Us About Your Website"
          subtitle="Fill in your requirements and we'll get back to you on WhatsApp within 1 hour."
        />

        <div className="bg-card rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-primary/10 overflow-hidden border border-border">
          {/* Top accent bar */}
          <div className="h-1 bg-linear-to-r from-primary to-brand-violet" />
          <div className="p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Section: Contact Info */}
            <div className="flex items-center gap-3 pb-2 border-b border-dashed border-border">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <span className="text-sm font-semibold text-foreground font-display">Contact Info</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  placeholder="Ramesh Shrestha"
                  error={errors.full_name?.message}
                  {...register("full_name")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business_name">Business Name</Label>
                <Input
                  id="business_name"
                  placeholder="My Business Pvt. Ltd."
                  {...register("business_name")}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="98XXXXXXXX"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  placeholder="Same as phone (if different)"
                  {...register("whatsapp")}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            {/* Section: Project Details */}
            <div className="flex items-center gap-3 pb-2 border-b border-dashed border-border">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <span className="text-sm font-semibold text-foreground font-display">Project Details</span>
            </div>

            {/* Website Type */}
            <div className="space-y-2">
              <Label>Website Type *</Label>
              <Select onValueChange={(v) => setValue("website_type", v)}>
                <SelectTrigger error={errors.website_type?.message}>
                  <SelectValue placeholder="Select your website type" />
                </SelectTrigger>
                <SelectContent>
                  {WEBSITE_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.website_type && (
                <p className="text-xs text-red-500">{errors.website_type.message}</p>
              )}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="business_category">Business Category</Label>
                <Input
                  id="business_category"
                  placeholder="e.g. Retail, Education, Food"
                  {...register("business_category")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred_color">Preferred Color / Theme</Label>
                <Input
                  id="preferred_color"
                  placeholder="e.g. Blue and White, Dark Mode"
                  {...register("preferred_color")}
                />
              </div>
            </div>

            {/* Pages needed */}
            <div className="space-y-2">
              <Label htmlFor="pages_needed">Pages Needed</Label>
              <Input
                id="pages_needed"
                placeholder="e.g. Home, About, Services, Contact (5 pages)"
                {...register("pages_needed")}
              />
            </div>

            {/* Features required */}
            <div className="space-y-2">
              <Label htmlFor="features_required">Features Required</Label>
              <Textarea
                id="features_required"
                placeholder="e.g. Online booking, Payment gateway, Photo gallery, Blog, WhatsApp chat..."
                rows={3}
                {...register("features_required")}
              />
            </div>

            {/* Reference websites */}
            <div className="space-y-2">
              <Label htmlFor="reference_websites">Reference Websites</Label>
              <Input
                id="reference_websites"
                placeholder="URLs of websites you like (optional)"
                {...register("reference_websites")}
              />
            </div>

            {/* Budget & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Budget</Label>
                <Select onValueChange={(v) => setValue("budget", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" type="date" {...register("deadline")} />
              </div>
            </div>

            {/* Additional notes */}
            <div className="space-y-2">
              <Label htmlFor="additional_notes">Additional Notes</Label>
              <Textarea
                id="additional_notes"
                placeholder="Any other requirements, special requests, or information..."
                rows={3}
                {...register("additional_notes")}
              />
            </div>

            {/* Section: Submit */}
            <div className="flex items-center gap-3 pb-2 border-b border-dashed border-border">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <span className="text-sm font-semibold text-foreground font-display">Submit</span>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                size="xl"
                variant="whatsapp"
                className="w-full text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Submit & Open WhatsApp
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Your details will be sent via WhatsApp. We respond within 1 hour.
              </p>
            </div>
          </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
