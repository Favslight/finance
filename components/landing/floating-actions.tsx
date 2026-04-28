"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a href="#home" aria-label="Get Started">
        <Button className="shadow-lg" size="lg">
          Get Started
        </Button>
      </a>
      {showTop && (
        <button
          aria-label="Back to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white shadow-lg transition hover:bg-[#12385f]"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

