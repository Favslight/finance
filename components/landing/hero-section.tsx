"use client";

import { motion } from "framer-motion";
import { Banknote, Car, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#081d34] via-[#0f3154] to-[#2c5d88] pt-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-12 left-1/3 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-35">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{ left: `${(i * 11) % 100}%`, top: `${(i * 17) % 100}%` }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 + (i % 5), delay: i * 0.12 }}
          />
        ))}
      </div>

      <div className="container relative grid min-h-[calc(100vh-6rem)] items-center gap-10 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Empower Your Financial Future Together
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-100">
            Save consistently, invest wisely, and own your dream vehicle through our trusted cooperative.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-[430px]"
        >
          <div className="absolute inset-x-12 bottom-10 h-12 rounded-full bg-black/20 blur-xl" />

          <motion.div
            initial={{ opacity: 0, y: 18, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-6 top-12 right-6 rounded-3xl border border-white/25 bg-white/12 p-6 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/75">Member Overview</p>
            <p className="mt-2 text-3xl font-bold">₦2,480,000</p>
            <p className="mt-1 text-sm text-white/80">Total cooperative assets</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { icon: Banknote, label: "Savings", value: "₦980k" },
                { icon: Car, label: "Vehicle", value: "₦1.1m" },
                { icon: LineChart, label: "Returns", value: "₦400k" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 p-3">
                  <item.icon className="h-5 w-5 text-[#D4AF37]" />
                  <p className="mt-2 text-xs text-white/80">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {[
            { x: "3%", y: "6%" },
            { x: "78%", y: "10%" },
            { x: "84%", y: "68%" },
          ].map((pos, idx) => (
            <motion.div
              key={idx}
              className="absolute h-14 w-14 rounded-full bg-gradient-to-b from-[#f5d57a] to-[#b98d17] shadow-[0_10px_26px_rgba(212,175,55,0.45)]"
              style={{ left: pos.x, top: pos.y }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 + idx, ease: "easeInOut" }}
            >
              <span className="flex h-full w-full items-center justify-center text-xl font-black text-[#0A2540]">₦</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
