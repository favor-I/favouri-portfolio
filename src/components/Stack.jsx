import { stackSections } from '../data';

function TechItem({ name, sub }) {
  return (
    <div className="bg-surface-hi border border-outline rounded-sm p-3">
      <div className="font-head font-semibold text-[13px] text-on-bg">{name}</div>
      {sub && <div className="text-[11px] text-slate mt-0.5">{sub}</div>}
    </div>
  );
}

function StackCard({ children, className = '' }) {
  return (
    <div className={`glass border border-outline rounded-md p-7 transition-all duration-300 hover:border-emerald/25 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ icon, title, subtitle }) {
  return (
    <>
      <h3 className="font-head font-semibold text-[16px] text-on-bg flex items-center gap-2 mb-1">
        {icon && <span>{icon}</span>}{title}
      </h3>
      <p className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-slate mb-5">{subtitle}</p>
    </>
  );
}

export default function Stack() {
  const { frontend, backend, infra, tools, specialisms } = stackSections;

  return (
    <section id="stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-head text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald mb-3">Technical Stack</p>
          <h2 className="font-head font-bold text-on-bg leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(30px, 5vw, 48px)' }}>
            Tools I build<br />
            <span className="text-emerald">production systems with.</span>
          </h2>
          <p className="font-body text-on-muted text-[17px] max-w-lg">
            A full-stack toolkit built from real delivery experience — not just tutorials. Each tool has been used in a shipped, live product.
          </p>
        </div>

        {/* Frontend + Backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <StackCard>
            <CardHeader icon={frontend.icon} title={frontend.title} subtitle={frontend.subtitle} />
            <div className="grid grid-cols-2 gap-2.5">
              {frontend.items.map(i => <TechItem key={i.name} {...i} />)}
            </div>
          </StackCard>

          <StackCard>
            <CardHeader icon={backend.icon} title={backend.title} subtitle={backend.subtitle} />
            <div className="grid grid-cols-2 gap-2.5">
              {backend.items.map(i => <TechItem key={i.name} {...i} />)}
            </div>
          </StackCard>
        </div>

        {/* Infra + Tools */}
        <StackCard className="mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <CardHeader icon="☁" title="Infrastructure & DevOps" subtitle="Deployment & Tooling" />
              <div className="flex flex-wrap gap-2 mb-5">
                {infra.map(t => (
                  <span key={t} className="font-head text-[11px] text-on-muted bg-surface-hi border border-outline px-2.5 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
              <div className="bg-emerald/6 border border-emerald/20 rounded-sm p-4">
                <p className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-emerald mb-2">
                  Production Deployments
                </p>
                <p className="font-body text-on-muted text-[13px] leading-[1.6]">
                  Hands-on server setup, database configuration, and CI/CD pipeline management — from DigitalOcean droplets to containerized microservices.
                </p>
              </div>
            </div>

            <div>
              <CardHeader icon="✕" title="Tools & Workflow" subtitle="Day-to-Day" />
              <ul className="divide-y divide-outline">
                {tools.map(t => (
                  <li key={t.label} className="flex justify-between py-2.5 text-[14px]">
                    <span className="text-on-muted font-body">{t.label}</span>
                    <span className="text-on-bg font-head text-[13px]">{t.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </StackCard>

        {/* Strengths */}
        <div className="glass border border-outline rounded-md p-7 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-300 hover:border-emerald/25">
          <div>
            <p className="font-head text-[10px] font-semibold tracking-[0.12em] uppercase text-emerald mb-3">Strengths</p>
            <h3 className="font-head font-bold text-on-bg text-[20px] leading-[1.3] mb-3">
              What sets my work apart
            </h3>
            <p className="font-body text-on-muted text-[14px] leading-[1.65]">
              Clean, maintainable code. Effective collaboration across design, QA, and backend teams. Shipping things that actually work in production.
            </p>
          </div>
          {specialisms.map(s => (
            <div key={s.title}>
              <div className="text-[24px] mb-3">{s.icon}</div>
              <h4 className="font-head font-semibold text-on-bg text-[14px] mb-2">{s.title}</h4>
              <p className="font-body text-slate text-[13px] leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
