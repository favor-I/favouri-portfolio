export default function Footer() {
  return (
    <footer className="border-t border-outline px-6 py-8 flex flex-wrap items-center justify-between gap-4">
      <p className="font-head text-[11px] text-slate tracking-[0.05em]">
        ⊙ SOFTWARE ENGINEER &nbsp; © 2026 Favour Ifeanacho. ⊡ &lt;/&gt;
      </p>
      <div className="flex gap-6">
        {[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/ifeanacho-favour' },
          { label: 'Projects', href: '#experience' },
          { label: 'Stack', href: '#stack' },
          { label: 'Contact', href: '#contact' },
        ].map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
            className="font-head text-[12px] text-on-muted no-underline hover:text-emerald transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 font-head text-[11px] font-semibold tracking-[0.1em] uppercase text-emerald">
        <span className="w-2 h-2 rounded-full bg-emerald" />
        System Status: Optimal
      </div>
    </footer>
  );
}
