"use client";

import { motion } from "framer-motion";
import { Car, PiggyBank, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: PiggyBank,
    title: "Save Money",
    description:
      "High-yield savings with flexible plans. Earn competitive returns while keeping your funds accessible.",
  },
  {
    icon: Users,
    title: "Cooperative Contributions",
    description:
      "Seamlessly pay your monthly contributions. Track history and never miss a due date.",
  },
  {
    icon: Car,
    title: "Vehicle Hire Purchase",
    description:
      "Drive your dream car today. Low deposits, fair terms, and a path to full ownership.",
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description:
      "Multiply your wealth through vetted cooperative investment opportunities with transparent reporting.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container">
        <h2 className="section-heading text-center">Everything You Need to Thrive</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Purpose-built tools for cooperative members to build savings discipline, unlock assets, and grow long-term wealth.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div key={feature.title} whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
              <Card className="h-full border-slate-200">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-[#D4AF37]" aria-hidden="true" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{feature.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

