import { useState, useEffect } from 'react';

const links = [
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles',     href: '#profiles' },
  { label: 'Contact',      href: '#contact' },
];

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'var(--nav-bg)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-slate-100 font-bold text-xl tracking-tight select-none">
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
            className="px-4 py-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm font-semibold rounded-lg transition-all duration-200"
          >
            Resume
          </a>
          <a
            href="mailto:akashjha2671@gmail.com"
            className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Hire Me
          </a>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-slate-700 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-200 cursor-pointer"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Hamburger + mobile theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-200 cursor-pointer"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1 group"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div
          className="backdrop-blur-xl border-b border-purple-900/30 px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--nav-mobile-bg)' }}
        >
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
            href="https://docs.google.com/document/d/1ZoY1LjoIoRv8EpqMY6EmXy8_8vlMH5YvsoAnqNVq69A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-slate-700 text-slate-300 text-sm font-semibold rounded-lg text-center"
          >
            Resume
          </a>
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
