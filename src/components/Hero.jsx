import { useTyping } from '../hooks/useTyping';
import { useInView } from '../hooks/useInView';

const ROLES = [
  'Software Development Engineer',
  'Full-Stack Developer',
  'Competitive Programmer',
  'Technical Content Writer',
  'Open Source Contributor',
];

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/akashadr',           icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akash-adr',     icon: <LinkedinIcon /> },
  { label: 'Email',    href: 'mailto:akashjha2671@gmail.com',         icon: <MailIcon /> },
];

export default function Hero() {
  const role  = useTyping(ROLES);
  const [ref, inView] = useInView(0.05);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-1)]">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #4f46e530 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-5 gradient-text leading-none tracking-tight"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          Akash Jha
        </h1>

        {/* Typing role */}
        <div
          className="flex items-center justify-center gap-2 mb-7 h-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.7s ease 0.35s',
          }}
        >
          <span className="text-xl md:text-2xl text-slate-300 font-light">{role}</span>
          <span className="w-0.5 h-7 bg-purple-400 animate-pulse rounded-full" />
        </div>

        <p
          className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
          }}
        >
          CSE graduate (DGPA 9.12) from MCKV Institute of Engineering, Kolkata.{' '}
          Currently building scalable products at{' '}
          <span className="text-purple-400 font-medium">Onelab Ventures</span>.{' '}
          Knight on LeetCode · 950+ problems · Geek of the Year 2022.
        </p>

        {/* Socials */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
          }}
        >
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={s.label}
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all duration-250 hover:scale-110 hover:bg-purple-500/10"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s',
          }}
        >
          <a
            href="#experience"
            className="w-full sm:w-auto text-center px-7 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-250 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-7 py-3 border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 font-semibold rounded-xl transition-all duration-250 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="https://docs.google.com/document/d/1ZoY1LjoIoRv8EpqMY6EmXy8_8vlMH5YvsoAnqNVq69A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center flex items-center gap-2 px-7 py-3 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-500 font-semibold rounded-xl transition-all duration-250 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-[0.2em] font-medium">scroll</span>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}
