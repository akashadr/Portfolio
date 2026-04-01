export default function Footer() {
  return (
    <footer className="py-8 bg-[#09090f] border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Akash Jha. Built with React + Tailwind.
        </span>
        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub',   href: 'https://github.com/akashadr' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/akash-adr' },
            { label: 'Email',    href: 'mailto:akashjha2671@gmail.com' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-purple-400 text-sm transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
