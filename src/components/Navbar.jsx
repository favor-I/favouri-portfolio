import {useState, useEffect} from "react";

const navItems = [
  {label: "Home", href: "#home"},
  {label: "Experience", href: "#experience"},
  {label: "Stack", href: "#stack"},
  {label: "Contact", href: "#contact"},
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "experience", "stack", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? "bg-bg/95 backdrop-blur-xl border-b border-outline" : "bg-transparent"}`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-head font-semibold text-[17px] text-on-bg bg-surface-hi border border-outline px-2.5 py-1 rounded no-underline tracking-tight"
        >
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H2V14ZM5.5 13L4.1 11.6L6.675 9L4.075 6.4L5.5 5L9.5 9L5.5 13ZM10 13V11H16V13H10Z"
                fill="#4EDEA3"
              />
            </svg>
          </span>{" "}
          <p>FI</p>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`font-body text-sm transition-colors duration-200 no-underline ${
                active === n.href.slice(1)
                  ? "text-on-bg border-b border-emerald pb-0.5"
                  : "text-on-muted hover:text-on-bg"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-head text-xs font-semibold tracking-widest uppercase text-on-bg border border-outline px-4 py-1.5 rounded-sm no-underline hover:border-emerald hover:text-emerald transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-on-bg transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-on-bg transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-on-bg transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-bg/98 backdrop-blur-xl border-b border-outline px-6 py-5 flex flex-col gap-5">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-muted hover:text-emerald text-base no-underline font-body transition-colors"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
