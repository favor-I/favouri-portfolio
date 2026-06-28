import { useState, useEffect } from 'react';

const navItems = [
  {
    label: 'Home', section: 'home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Projects', section: 'experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: 'Stack', section: 'stack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: 'Contact', section: 'contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function MobileNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'experience', 'stack', 'contact'];
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg/96 backdrop-blur-xl border-t border-outline pb-safe">
      <ul className="flex justify-around items-center py-2">
        {navItems.map(n => (
          <li key={n.section}>
            <a
              href={`#${n.section}`}
              className={`flex flex-col items-center gap-1 no-underline transition-colors duration-200 px-3 py-1 ${
                active === n.section ? 'text-emerald' : 'text-slate'
              }`}
            >
              {n.icon}
              <span className="font-head text-[9px] font-semibold tracking-[0.08em] uppercase">{n.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
