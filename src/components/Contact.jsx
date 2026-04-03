import { useInView } from '../hooks/useInView';

const LINKS = [
  {
    label: 'Email',
    value: 'akashjha2671@gmail.com',
    href: 'mailto:akashjha2671@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-500/20 hover:border-purple-400/50',
    bg: 'bg-purple-500/10',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/akash-adr',
    href: 'https://linkedin.com/in/akash-adr',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'from-blue-500 to-sky-500',
    border: 'border-blue-500/20 hover:border-blue-400/50',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'GitHub',
    value: 'github.com/akashadr',
    href: 'https://github.com/akashadr',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: 'from-slate-400 to-slate-500',
    border: 'border-slate-500/20 hover:border-slate-400/50',
    bg: 'bg-slate-500/10',
  },
  {
    label: 'Phone',
    value: '+91 8697789244',
    href: 'tel:+918697789244',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-500/20 hover:border-green-400/50',
    bg: 'bg-green-500/10',
  },
];

function ContactCard({ link, delay }) {
  const [ref, inView] = useInView();
  const isExternal = !link.href.startsWith('mailto') && !link.href.startsWith('tel');

  return (
    <a
      ref={ref}
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${link.bg} ${link.border} hover:scale-105`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white shrink-0`}>
        {link.icon}
      </div>
      <div className="min-w-0">
        <div className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">{link.label}</div>
        <div className="text-slate-200 font-medium text-sm truncate group-hover:text-white transition-colors">
          {link.value}
        </div>
      </div>
      <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 ml-auto shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export default function Contact() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="contact" className="py-24 bg-[var(--bg-1)] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-14"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-5">Get in Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations.
            Feel free to reach out — I reply fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LINKS.map((link, i) => (
            <ContactCard key={link.label} link={link} delay={i * 0.1} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:akashjha2671@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold rounded-xl transition-all duration-250 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 text-lg"
          >
            Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
}
