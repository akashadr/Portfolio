import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-16 bg-[var(--bg-2)]">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-8 glow-card flex flex-col sm:flex-row items-start gap-6"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shrink-0">
            🎓
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-slate-100 font-bold text-xl">MCKV Institute of Engineering</h3>
                <p className="text-purple-400 font-medium mt-0.5">Bachelor of Technology — Computer Science</p>
                <p className="text-slate-500 text-sm mt-0.5">West Bengal, India</p>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm font-mono bg-[var(--bg-tag)] px-3 py-1 rounded-full border border-[var(--border-tag)]">
                  2019 – 2023
                </div>
                <div className="mt-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  9.12 DGPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
