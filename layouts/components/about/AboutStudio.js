const disciplines = [
  ['01', 'Research', 'Find the question worth answering.'],
  ['02', 'Design', 'Make complex ideas feel intuitive.'],
  ['03', 'Engineering', 'Build for real-world use.'],
  ['04', 'Data', 'Learn what works and what can improve.'],
];

export default function AboutStudio() {
  return (
    <section id="team" className="scroll-mt-24 bg-primary px-5 py-24 font-reddit-sans text-black md:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-7 lg:grid-cols-[.65fr_1fr] lg:items-end">
          <p className="text-xs font-bold uppercase tracking-[.22em]">The studio behind the work</p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.055em] md:text-7xl">Different minds.<br />One direction.</h2>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-black/20 bg-[#151515] text-white lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#242b1c] p-7 md:min-h-[520px] md:p-12">
            <p className="relative z-10 text-xs font-bold uppercase tracking-[.2em] text-primary">Nusa Quanta / Collective thinking</p>
            <div aria-hidden="true" className="absolute -right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rotate-45 border-[54px] border-primary/90 md:h-[470px] md:w-[470px] md:border-[70px]" />
            <div aria-hidden="true" className="absolute -left-28 top-1/2 h-[290px] w-[290px] -translate-y-1/2 rotate-45 border-[38px] border-[#6b25e8] md:h-[390px] md:w-[390px] md:border-[54px]" />
            <p className="relative z-10 max-w-md text-4xl font-semibold leading-[.98] tracking-[-.05em] md:text-6xl">The best ideas happen between disciplines.</p>
          </div>
          <div className="flex flex-col justify-between gap-10 p-7 md:p-12 lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">How we connect the dots</p>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/75 md:text-2xl">A digital product is never just one discipline. We bring different perspectives into the same conversation, so the experience, the technology, and the evidence move together.</p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {disciplines.map(([number, title, description]) => (
                <div key={number} className="border-t border-white/25 py-5">
                  <p className="text-xs text-primary">{number} /</p>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
