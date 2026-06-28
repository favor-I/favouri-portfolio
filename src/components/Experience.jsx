import { experiences, expStats } from '../data';

function Tag({ label }) {
  return (
    <span className="font-head text-[11px] text-on-muted bg-surface-hi border border-outline px-2.5 py-0.5 rounded-sm">
      {label}
    </span>
  );
}

function StatusChip({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-emerald bg-emerald/8 border border-emerald/25 px-2.5 py-1 rounded-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
      {label}
    </span>
  );
}

function TypeBadge({ type }) {
  const colours = {
    'Full-Time': 'text-emerald bg-emerald/8 border-emerald/25',
    'Contract':  'text-sky-400 bg-sky-400/8 border-sky-400/25',
    'Internship':'text-on-muted bg-surface-hi border-outline',
  };
  return (
    <span className={`font-head text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm border ${colours[type] || colours['Internship']}`}>
      {type}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="glass border border-outline rounded-md overflow-hidden transition-all duration-300 hover:border-emerald/30 mb-4">
      <div className="p-6">
        {/* Icon + name */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-surface-hi border border-outline rounded-md text-lg flex-shrink-0">
            {project.icon}
          </div>
          <div>
            <h4 className="font-head font-semibold text-[17px] text-on-bg leading-tight">{project.name}</h4>
            <p className="font-head text-[10px] font-semibold tracking-[0.08em] uppercase text-slate mt-0.5">{project.fullName}</p>
          </div>
        </div>

        <p className="font-body text-on-muted text-[14px] leading-[1.7] mb-4">{project.desc}</p>

        {project.quote && (
          <blockquote className="border-l-2 border-emerald pl-4 py-2 my-4 bg-surface rounded-r-sm">
            <p className="font-body text-on-muted text-[13px] leading-[1.65] italic">{project.quote}</p>
          </blockquote>
        )}

        <ul className="space-y-0 mb-4">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 items-start py-2 border-b border-outline/40 last:border-b-0 text-[13px] text-on-muted leading-[1.6]">
              <span className="text-emerald text-[11px] mt-0.5 flex-shrink-0">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 px-6 py-3 border-t border-outline bg-surface">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => <Tag key={t} label={t} />)}
        </div>
        <StatusChip label={project.status} />
      </div>
    </div>
  );
}

function ExperienceBlock({ exp }) {
  return (
    <div className="mb-16">
      {/* Company header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="font-head font-bold text-on-bg text-[22px] tracking-tight">{exp.company}</h3>
            <TypeBadge type={exp.type} />
          </div>
          <p className="font-head text-[13px] font-semibold text-emerald">{exp.role}</p>
        </div>
        <div className="text-right">
          <p className="font-head text-[12px] font-semibold text-on-muted">{exp.period}</p>
          <p className="font-head text-[11px] text-slate mt-0.5">{exp.location}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-outline mb-5" />

      {/* Context blurb */}
      <p className="font-body text-on-muted text-[15px] leading-[1.7] mb-6 max-w-2xl">{exp.context}</p>

      {/* Projects */}
      <div className={exp.projects.length > 1 ? 'grid grid-cols-1 lg:grid-cols-1 gap-0' : ''}>
        {exp.projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
}

export default function Experience() {
  const crownExp = experiences.find(e => e.id === 'crown');

  return (
    <section id="experience" className="py-24 bg-bg-low">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-head text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald mb-3">Work Experience</p>
          <h2 className="font-head font-bold text-on-bg leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}>
            What I've<br />Built
          </h2>
          <p className="font-body text-on-muted text-[17px] max-w-md">
            A track record of shipping across enterprise government platforms, SaaS startups, and client projects.
          </p>
        </div>

        {/* 1Gov stats — only for Crown context */}
        <div className="glass border border-outline rounded-md p-6 mb-14">
          <p className="font-head text-[10px] font-semibold tracking-[0.12em] uppercase text-slate mb-4">1Government Cloud · Key Outcomes</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {expStats.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-head font-bold text-emerald text-[32px] leading-none">{s.value}</div>
                <div className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-slate mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All experience blocks */}
        {experiences.map(exp => (
          <ExperienceBlock key={exp.id} exp={exp} />
        ))}

      </div>
    </section>
  );
}
