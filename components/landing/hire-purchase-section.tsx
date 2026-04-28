import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HirePurchaseSection() {
  const points = [
    "Low initial deposit",
    "Flexible repayment up to 48 months",
    "Insurance & registration support",
  ];

  return (
    <section className="bg-[#edf3f9] py-20">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5">
          <Image
            src="/car-showcase.svg"
            width={800}
            height={520}
            alt="Sleek financed vehicle"
            className="h-auto w-full"
            priority={false}
          />
        </div>
        <div>
          <h2 className="section-heading">Vehicle Financing Made Simple</h2>
          <ul className="mt-6 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#D4AF37]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8">Calculate Your Plan</Button>
        </div>
      </div>
    </section>
  );
}

