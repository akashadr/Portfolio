import { useState, useEffect } from 'react';

const links = [
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles',     href: '#profiles' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#09090f]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-white font-bold text-xl tracking-tight select-none">
          <span className="text-purple-400">&lt;</span>
          AJ
          <span className="text-purple-400">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-purple-400 text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1ZoY1LjoIoRv8EpqMY6EmXy8_8vlMH5YvsoAnqNVq69A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-200"
          >
            Resume
          </a>
          <a
            href="mailto:akashjha2671@gmail.com"
            className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-[#09090f]/95 backdrop-blur-xl border-b border-purple-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-purple-400 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:akashjha2671@gmail.com"
            className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
