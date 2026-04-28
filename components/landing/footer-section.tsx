import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="contact" className="bg-slate-950 py-16 text-slate-300">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-2xl font-bold text-white">CoopVest</p>
            <p className="mt-3 text-sm text-slate-400">
              A secure cooperative platform helping members save, contribute, finance assets, and invest confidently.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Savings Plans</li>
              <li>Monthly Contributions</li>
              <li>Vehicle Hire Purchase</li>
              <li>Cooperative Investments</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact Info</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@coopvest.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 800 000 0000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 21 Marina Road, Lagos</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full border border-slate-700 p-2 hover:border-[#D4AF37] hover:text-[#D4AF37]" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CoopVest. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

