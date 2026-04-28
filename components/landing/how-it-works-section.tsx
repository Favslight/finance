"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const steps = [
  { title: "Register", description: "Create your account in minutes." },
  { title: "Make Deposits", description: "Fund your wallet via bank transfer or mobile money." },
  { title: "Choose a Service", description: "Pick savings, hire purchase, or investments." },
  { title: "Achieve Goals", description: "Watch your money grow or drive your new car." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="container">
        <h2 className="section-heading text-center">How It Works</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Badge className="mb-4">Step {idx + 1}</Badge>
              <h3 className="text-lg font-semibold text-[#0A2540]">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

