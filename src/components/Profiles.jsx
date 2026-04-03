import { useInView } from '../hooks/useInView';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks, SiNpm } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const PROFILES = [
  {
    name: 'LeetCode',
    handle: 'Akash_Adr',
    href: 'https://leetcode.com/Akash_Adr/',
    stat: '950+ problems · Knight',
    color: 'from-yellow-400 to-orange-500',
    iconColor: 'text-yellow-400',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
    bg: 'bg-yellow-500/5',
    Icon: SiLeetcode,
  },
  {
    name: 'Codeforces',
    handle: 'beyondeagle',
    href: 'https://codeforces.com/profile/beyondeagle',
    stat: 'Specialist · GR 384',
    color: 'from-blue-400 to-sky-500',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    bg: 'bg-blue-500/5',
    Icon: SiCodeforces,
  },
  {
    name: 'CodeChef',
    handle: 'akash_adr',
    href: 'https://www.codechef.com/users/akash_adr',
    stat: '4★ · GR 104 · GR 210',
    color: 'from-amber-400 to-yellow-500',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    bg: 'bg-amber-500/5',
    Icon: SiCodechef,
  },
  {
    name: 'GeeksforGeeks',
    handle: 'akashjha2671',
    href: 'https://auth.geeksforgeeks.org/user/akashjha2671/',
    stat: 'Scholar · 1800+ score',
    color: 'from-green-400 to-emerald-500',
    iconColor: 'text-green-400',
    border: 'border-green-500/20 hover:border-green-500/50',
    bg: 'bg-green-500/5',
    Icon: SiGeeksforgeeks,
  },
  {
    name: 'GitHub',
    handle: 'akashadr',
    href: 'https://github.com/akashadr',
    stat: 'Open Source Contributions',
    color: 'from-slate-300 to-slate-400',
    iconColor: 'text-slate-300',
    border: 'border-slate-500/20 hover:border-slate-400/50',
    bg: 'bg-slate-500/5',
    Icon: FaGithub,
  },
  {
    name: 'NPM',
    handle: 'akashadr',
    href: 'https://www.npmjs.com/~akashadr',
    stat: 'Published packages',
    color: 'from-red-400 to-rose-500',
    iconColor: 'text-red-400',
    border: 'border-red-500/20 hover:border-red-500/50',
    bg: 'bg-red-500/5',
    Icon: SiNpm,
  },
];

function ProfileCard({ profile, delay }) {
  const [ref, inView] = useInView();
  const { Icon } = profile;

  return (
    <a
      ref={ref}
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border p-5 transition-all duration-300 ${profile.bg} ${profile.border} hover:scale-105`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <Icon className={`w-8 h-8 ${profile.iconColor}`} />
        <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <div className={`text-base font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-1`}>
        {profile.name}
      </div>
      <div className="text-slate-400 text-xs font-mono mb-1 truncate">@{profile.handle}</div>
      <div className="text-slate-500 text-xs leading-tight">{profile.stat}</div>
    </a>
  );
}

export default function Profiles() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="profiles" className="py-24 bg-[var(--bg-1)]">
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
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">Find me online</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Coding Profiles</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PROFILES.map((p, i) => (
            <ProfileCard key={p.name} profile={p} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
