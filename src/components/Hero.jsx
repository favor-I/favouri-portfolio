import { metrics } from '../data';

function MetricValue({ raw }) {
  const match = raw.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return <span className="text-on-bg">{raw}</span>;
  const [, pre, num, suf] = match;
  return (
    <span className="font-head font-bold text-[32px] leading-none">
      <span className="text-on-bg">{pre}{num}</span>
      <span className="text-emerald">{suf}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        {/* Status */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse2" />
          <span className="font-head text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-head font-bold text-on-bg leading-[1.04] tracking-tight mb-3"
            style={{ fontSize: 'clamp(44px, 9vw, 80px)' }}>
          Favour<br />Ifeanacho
        </h1>

        {/* Subtitle — broader now */}
        <p className="font-head font-semibold text-emerald mb-7"
           style={{ fontSize: 'clamp(17px, 2.5vw, 24px)' }}>
          Full-Stack Software Engineer · React · Next.js · Yii · Laravel
        </p>

        {/* Body — reflects full range */}
        <p className="font-body text-on-muted text-[17px] leading-[1.75] max-w-[540px] mb-11">
          4+ years building scalable, performant web applications across enterprise platforms,
          SaaS products, and government infrastructure. Comfortable owning the full stack,
          from pixel-perfect UIs to backend APIs and server configuration.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a href="#experience"
            className="inline-flex items-center gap-2 bg-emerald text-black font-head text-[13px] font-semibold tracking-[0.05em] uppercase px-7 py-3.5 rounded-sm no-underline hover:bg-emerald/90 transition-colors duration-200 hover:-translate-y-px">
            View Work
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-transparent text-on-bg border border-outline font-head text-[13px] font-semibold tracking-[0.05em] uppercase px-7 py-3.5 rounded-sm no-underline hover:border-emerald hover:text-emerald transition-colors duration-200">
            Get In Touch →
          </a>
        </div>

        {/* Metric bar */}
        <div className="pt-10 border-t border-outline grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map(m => (
            <div key={m.label}>
              <MetricValue raw={m.value} />
              <div className="font-head text-[10px] font-semibold tracking-[0.12em] uppercase text-slate mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
