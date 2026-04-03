import { useInView } from '../hooks/useInView';

const JOBS = [
  {
    role: 'Software Development Engineer 1',
    company: 'Onelab Ventures',
    period: 'Jul 2023 – Present',
    type: 'Full-time',
    color: 'from-purple-500 to-violet-600',
    dot: 'bg-purple-500',
    highlights: [
      'Improved API speed by 85% using Node, Express, Django, FastAPI, MongoDB, MySQL, and PostgreSQL.',
      'Integrated Chargebee, Stripe, and Cashfree for subscription and payment management.',
      'Built CI/CD pipelines with PM2 and Nginx — 100% automated deployments.',
      'Developed UIs with React, Next.js, Tailwind, MaterialUI, and ChakraUI.',
      'Implemented Firebase Web Push Notifications, increasing user engagement.',
      'Built live chat & chatbot with Web PubSub and related services.',
      'Developed React Native (CLI & Expo) mobile apps with deep linking, camera, calendar, and sharing.',
      'Reduced re-renders via optimized Redux; implemented lazy loading & pagination (95% faster loads).',
      'Built Kanban boards, hierarchy trees, Gemini 1.5 Flash insights from posts/tweets via Rapid APIs.',
      'Provisioned EC2, Amplify, RDS, S3, Azure SQL/Serverless/Blob, and GCP Cloud Run.',
    ],
  },
  {
    role: 'Problem Setter & Mentor',
    company: 'Coding Shuttle',
    period: 'May 2023 – Aug 2024',
    type: 'Contract',
    color: 'from-blue-500 to-cyan-500',
    dot: 'bg-blue-500',
    highlights: [
      'Wrote and structured 300+ DSA problems on the platform.',
      'Designed test cases covering brute, better, and optimal approaches (TLE for brute).',
      'Wrote driver code in C++, Java, and Python.',
      'Mentored 600+ students in DSA and resolved doubts on Discord.',
      'Hosted programming contests for competitive and collaborative learning.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Farvision ERP',
    period: 'Jan 2023 – Apr 2023',
    type: 'Internship',
    color: 'from-green-500 to-emerald-500',
    dot: 'bg-green-500',
    highlights: [
      'Built finance-team APIs using C# and .NET with layered architecture (CRUD, Repository, Service, Controller).',
      'Developed frontend with TypeScript and SQL Server for complex CRUD and advanced search.',
    ],
  },
  {
    role: 'Technical Content Writer',
    company: 'GeeksforGeeks',
    period: 'Sep 2021 – Jan 2023',
    type: 'Part-time',
    color: 'from-orange-500 to-amber-500',
    dot: 'bg-orange-500',
    highlights: [
      <>Published 185+ articles on C++, Python, DSA, Maths, CP, and Git. Read on{' '}
        <a href="https://auth.geeksforgeeks.org/user/akashjha2671/articles" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors">GeeksforGeeks</a>
        {' '}and{' '}
        <a href="https://www.knowledgehut.com/interview-questions/computer-science-interview-questions" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">KnowledgeHut UpGrad</a>.
      </>,
      'AVL Tree article: 600k+ views · Function Pointer in C++: 150k+ views · Total: 5M+ views.',
      'Awarded Geek of the Year 2022 and Geek of the Month July 2022.',
    ],
  },
];

function Job({ job, delay, isLast }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="relative pl-10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(-20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full ${job.dot} ring-4 ring-[var(--bg-1)] z-10 flex items-center justify-center`}>
        <div className="w-2 h-2 rounded-full bg-white/80" />
      </div>

      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-2.5 top-6 bottom-0 w-px bg-gradient-to-b from-slate-700 to-transparent" style={{ transform: 'translateX(-0.5px)' }} />
      )}

      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 mb-8 glow-card">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-slate-100 font-bold text-xl">{job.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${job.color} font-semibold`}>
                {job.company}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">{job.type}</span>
            </div>
          </div>
          <span className="text-sm text-slate-400 bg-[var(--bg-tag)] px-3 py-1 rounded-full border border-[var(--border-tag)] font-mono whitespace-nowrap">
            {job.period}
          </span>
        </div>

        <ul className="space-y-2">
          {job.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-slate-400 text-sm leading-relaxed min-w-0">
              <span className="text-purple-400 mt-1 shrink-0">▸</span>
              <span className="min-w-0 break-words">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="experience" className="py-24 bg-[var(--bg-2)]">
      <div className="max-w-4xl mx-auto px-6">

        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">Where I've worked</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Experience</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div>
          {JOBS.map((job, i) => (
            <Job key={job.company} job={job} delay={i * 0.1} isLast={i === JOBS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
