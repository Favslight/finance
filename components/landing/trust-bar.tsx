export function TrustBar() {
  const logos = ["Forbes", "TechCrunch", "FinTech", "Venture", "Bloomberg"];

  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="container">
        <p className="mb-5 text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          As featured in
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

