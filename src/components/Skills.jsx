import { useInView } from '../hooks/useInView';

const CATEGORIES = [
  {
    name: 'Languages',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    icon: '⚡',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'Java', 'C#', 'TypeScript'],
  },
  {
    name: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    icon: '🎨',
    skills: ['React', 'Next.js', 'React Native', 'Redux', 'Context API', 'HTML', 'CSS', 'SCSS', 'Tailwind', 'Bootstrap', 'MaterialUI', 'ChakraUI'],
  },
  {
    name: 'Backend',
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-500/10 border-green-500/20 text-green-300',
    icon: '🔧',
    skills: ['Node.js', 'Express', 'Django', 'FastAPI', 'Spring', 'REST APIs'],
  },
  {
    name: 'Databases',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'MSSQL', 'Sequelize'],
  },
  {
    name: 'Cloud & DevOps',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
    icon: '☁️',
    skills: ['AWS (EC2, S3, Amplify, RDS)', 'GCP', 'Azure', 'Firebase', 'Docker', 'Nginx', 'PM2', 'CI/CD', 'Kafka'],
  },
  {
    name: 'Tools',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-500/10 border-pink-500/20 text-pink-300',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'Linux', 'VSCode', 'Android Studio', 'Burp Suite', 'Docker', 'node-cron'],
  },
];

function CategoryCard({ cat, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 glow-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-base`}>
          {cat.icon}
        </div>
        <h3 className="text-slate-100 font-semibold text-lg">{cat.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map(s => (
          <span
            key={s}
            className={`px-3 py-1 text-xs font-medium rounded-full border ${cat.bg} transition-all duration-200 hover:scale-105 cursor-default`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="skills" className="py-24 bg-[#09090f] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
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
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Skills & Technologies</h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
