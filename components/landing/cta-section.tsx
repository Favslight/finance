import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-[#0A2540] py-20 text-center text-[#D4AF37]">
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold md:text-5xl">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#f3d980] md:text-lg">
          Join 500+ members already building wealth together.
        </p>
        <Button className="mt-8" size="lg">
          Create Free Account
        </Button>
      </div>
    </section>
  );
}

