import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '950+', label: 'LeetCode Problems',     color: 'text-yellow-400',  bg: 'from-yellow-500/20 to-amber-500/10' },
  { value: '500+', label: 'DSA Problems (CF+CC)',  color: 'text-blue-400',    bg: 'from-blue-500/20 to-cyan-500/10' },
  { value: '185+', label: 'GFG Articles',           color: 'text-green-400',   bg: 'from-green-500/20 to-emerald-500/10' },
  { value: '5M+',  label: 'Article Views (GFG)',   color: 'text-purple-400',  bg: 'from-purple-500/20 to-violet-500/10' },
  { value: '600+', label: 'Students Mentored',      color: 'text-pink-400',    bg: 'from-pink-500/20 to-rose-500/10' },
  { value: '300+', label: 'Problems Set (Shuttle)', color: 'text-sky-400',     bg: 'from-sky-500/20 to-blue-500/10' },
];

const AWARDS = [
  { icon: '🏆', title: 'Star Performer of the Quarter', desc: 'First-ever at Onelab Ventures', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7197225063954165760/' },
  { icon: '👑', title: 'Geek of the Year 2022',           desc: 'GeeksforGeeks – exceptional content' },
  { icon: '📅', title: 'Geek of the Month – Jul 2022',    desc: 'GeeksforGeeks' },
  { icon: '⌚', title: 'Smart Watch (×2)',                 desc: 'Technical Scripter 2022 & GPL 2022' },
  { icon: '💎', title: 'LinkedIn Premium (6 months)',      desc: 'Global Rank 210 · CodeChef Starters 41' },
  { icon: '🇮🇳', title: 'India Rank 2',                   desc: 'Sololearn · Platinum · 24k+ XP' },
];

const RATINGS = [
  { platform: 'CodeChef',   rating: '4★',        color: 'text-amber-400',   handle: 'akash_adr' },
  { platform: 'Codeforces', rating: 'Specialist', color: 'text-blue-400',    handle: 'beyondeagle' },
  { platform: 'LeetCode',   rating: 'Knight',     color: 'text-yellow-300',  handle: 'Akash_Adr' },
  { platform: 'LeetCode',   rating: '500+ day streak', color: 'text-orange-400', handle: '' },
];

function StatCard({ stat, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl p-4 bg-gradient-to-br ${stat.bg} border border-white/5 text-center glow-card`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'scale(0.9)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
      <div className="text-slate-400 text-xs font-medium leading-tight">{stat.label}</div>
    </div>
  );
}

function AwardCard({ award, delay }) {
  const [ref, inView] = useInView();
  return (
    <>{award.href ? (
      <a
        ref={ref}
        href={award.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 bg-[#111118] border border-[#1e1e2e] rounded-xl p-4 glow-card group"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-16px)',
          transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        }}
      >
        <div className="text-2xl shrink-0">{award.icon}</div>
        <div className="flex-1">
          <div className="text-slate-200 font-semibold text-sm group-hover:text-purple-300 transition-colors">{award.title}</div>
          <div className="text-slate-500 text-xs mt-0.5">{award.desc}</div>
        </div>
        <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400 mt-0.5 shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    ) : (
      <div
        ref={ref}
        className="flex items-start gap-4 bg-[#111118] border border-[#1e1e2e] rounded-xl p-4 glow-card"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-16px)',
          transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        }}
      >
        <div className="text-2xl shrink-0">{award.icon}</div>
        <div>
          <div className="text-slate-200 font-semibold text-sm">{award.title}</div>
          <div className="text-slate-500 text-xs mt-0.5">{award.desc}</div>
        </div>
      </div>
    )}</>
  );
}

export default function Achievements() {
  const [titleRef, titleInView] = useInView();
  const [ratingsRef, ratingsInView] = useInView();

  return (
    <section id="achievements" className="py-24 bg-[#0c0c13]">
      <div className="max-w-6xl mx-auto px-6">

        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">What I've achieved</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Achievements</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {STATS.map((s, i) => <StatCard key={s.label} stat={s} delay={i * 0.07} />)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards */}
          <div>
            <h3 className="text-slate-100 font-bold text-xl mb-5 flex items-center gap-2">
              <span className="text-yellow-400">🏅</span> Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {AWARDS.map((a, i) => <AwardCard key={a.title} award={a} delay={i * 0.07} />)}
            </div>
          </div>

          {/* Competitive ratings */}
          <div>
            <h3 className="text-slate-100 font-bold text-xl mb-5 flex items-center gap-2">
              <span className="text-purple-400">🎯</span> Competitive Programming
            </h3>
            <div
              ref={ratingsRef}
              className="space-y-3"
              style={{
                opacity: ratingsInView ? 1 : 0,
                transform: ratingsInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {RATINGS.map(r => (
                <div key={r.platform + r.rating} className="flex items-center justify-between bg-[#111118] border border-[#1e1e2e] rounded-xl px-5 py-4 glow-card">
                  <span className="text-slate-300 font-medium">{r.platform}</span>
                  <div className="flex items-center gap-3">
                    {r.handle && (
                      <span className="text-slate-500 text-sm font-mono">{r.handle}</span>
                    )}
                    <span className={`font-bold text-sm ${r.color}`}>{r.rating}</span>
                  </div>
                </div>
              ))}

              {/* Extra callout */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl px-5 py-4">
                <div className="text-slate-200 font-semibold text-sm">Global Rank 104</div>
                <div className="text-slate-400 text-xs mt-0.5">CodeChef Starters 59</div>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl px-5 py-4">
                <div className="text-slate-200 font-semibold text-sm">Global Rank 384</div>
                <div className="text-slate-400 text-xs mt-0.5">Codeforces Round #823 (Div. 2)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
