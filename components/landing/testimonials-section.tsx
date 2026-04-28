import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Teacher",
    quote:
      "Joining CoopVest was the best financial decision. I now own my car and my savings are growing!",
  },
  {
    name: "Tunde Balogun",
    role: "Small Business Owner",
    quote:
      "The contribution reminders and investment dashboard keep me disciplined and confident about my future.",
  },
  {
    name: "Grace Eze",
    role: "Nurse",
    quote:
      "Everything feels transparent and secure. I finally found a cooperative platform I can trust.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container">
        <h2 className="section-heading text-center">What Our Members Say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#0A2540]">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600">"{item.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

