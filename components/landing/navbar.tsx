"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems } from "./data";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all",
        scrolled ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a
          href="#home"
          className={cn(
            "text-2xl font-extrabold transition-colors",
            scrolled ? "text-[#0A2540]" : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          )}
        >
          CoopVest
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      !scrolled &&
                        (isActive
                          ? "text-[#D4AF37]"
                          : "text-white/95 hover:text-white"),
                      scrolled &&
                        (isActive
                          ? "text-[#0A2540]"
                          : "text-slate-700 hover:text-[#0A2540]")
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button>Join Now</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation"
                className={cn("rounded-full p-2", scrolled ? "text-[#0A2540]" : "text-white")}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-base font-medium text-[#0A2540] hover:bg-[#D4AF37]/15"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <Button className="mt-2">Join Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
