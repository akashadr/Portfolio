import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    title: 'EdTech Online Education Platform',
    description:
      'A fully functional ed-tech platform enabling users to create, consume, and rate educational content. Supports student and instructor roles with distinct dashboards, course management, and analytics.',
    highlights: [
      'JWT + Bcrypt authentication with OTP verification via Nodemailer',
      'Student: Course list, Wishlist, Cart, Course content, Profile',
      'Instructor: Dashboard with Chart.js insights, Course management',
      'Razorpay payments · Cloudinary media storage · Redux state management',
      'Deployed on Vercel (frontend) + Render (backend)',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind', 'JWT', 'Razorpay', 'Cloudinary', 'Chart.js'],
    links: { live: 'https://studynotion-frontend-lgqzhc9w0-akashadr.vercel.app/', github: 'https://github.com/akashadr/StudyNotion' },
    gradient: 'from-purple-600 to-blue-600',
    badge: 'Full-Stack',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  },
];

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl overflow-hidden glow-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-3 ${project.badgeColor}`}>
              {project.badge}
            </span>
            <h3 className="text-slate-100 font-bold text-xl leading-tight">{project.title}</h3>
          </div>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500 transition-all"
            >
              <ExternalIcon />
            </a>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-slate-400 text-sm min-w-0">
              <span className="text-purple-400 shrink-0">▸</span>
              <span className="min-w-0 break-words">{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 bg-[var(--bg-tag-alt)] text-slate-400 rounded-lg border border-[var(--border-tag-alt)] font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="projects" className="py-24 bg-[var(--bg-1)]">
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
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Projects</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
