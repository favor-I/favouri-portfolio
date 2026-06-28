import {useState} from "react";

const contactRows = [
  {icon: "📍", label: "Location", val: "Lagos, Nigeria", href: null},
  {
    icon: "✉",
    label: "Email",
    val: "favouri.applications@gmail.com",
    href: "mailto:favouri.applications@gmail.com",
  },
  {
    icon: "📞",
    label: "Encrypted Voice",
    val: "+234 902 841 6176",
    href: "tel:+2349028416176",
  },
  {
    icon: "↗",
    label: "Network",
    val: "LinkedIn Professional Profile ↗",
    href: "https://linkedin.com/in/ifeanacho-favour",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Collaboration Inquiry",
    message: "",
  });

  return (
    <section id="contact" className="py-24 bg-bg-low">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse2" />
            <span className="font-head text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald">
              System Active
            </span>
          </div>
          <h2
            className="font-head font-bold text-on-bg tracking-tight mb-4"
            style={{fontSize: "clamp(28px, 5vw, 48px)"}}
          >
            Secure Professional
            <br />
            Inquiry
          </h2>
          <p className="font-body text-on-muted text-[17px] max-w-md">
            Initiate formal communication regarding sovereign infrastructure
            projects, technical architecture audits, or strategic
            collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: info */}
          <div>
            <div className="glass border border-outline rounded-md overflow-hidden mb-6">
              {contactRows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex items-start gap-4 px-6 py-4 ${i < contactRows.length - 1 ? "border-b border-outline" : ""}`}
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-surface-hi border border-outline rounded-sm text-base flex-shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <p className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-slate mb-1">
                      {r.label}
                    </p>
                    {r.href ? (
                      <a
                        href={r.href}
                        target={
                          r.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener"
                        className="font-body text-[14px] text-on-bg no-underline hover:text-emerald transition-colors"
                      >
                        {r.val}
                      </a>
                    ) : (
                      <p className="font-body text-[14px] text-on-bg">
                        {r.val}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-slate mb-2">
                  Security Rating
                </p>
                <p className="font-head font-bold text-on-bg text-[22px] leading-[1.2]">
                  Institutional
                  <br />
                  Grade
                </p>
              </div>
              <div>
                <p className="font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-slate mb-2">
                  Response Window
                </p>
                <p className="font-head font-bold text-on-bg text-[22px] leading-[1.2]">
                  24–48
                  <br />
                  Hours
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass border border-outline rounded-md p-7">
            <div className="mb-5">
              <label className="block font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-on-muted mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name / Entity"
                value={form.name}
                onChange={(e) => setForm((v) => ({...v, name: e.target.value}))}
                className="w-full bg-surface-hi border border-outline rounded-sm text-on-bg font-body text-[14px] px-3.5 py-3 outline-none placeholder-slate focus:border-emerald focus:ring-1 focus:ring-emerald/20 transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-on-muted mb-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((v) => ({...v, email: e.target.value}))
                }
                className="w-full bg-surface-hi border border-outline rounded-sm text-on-bg font-body text-[14px] px-3.5 py-3 outline-none placeholder-slate focus:border-emerald focus:ring-1 focus:ring-emerald/20 transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-on-muted mb-2">
                Subject
              </label>
              <input
                disabled
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm((v) => ({...v, subject: e.target.value}))
                }
                className="w-full bg-surface-hi border border-outline rounded-sm text-on-bg font-body text-[14px] px-3.5 py-3 outline-none placeholder-slate focus:border-emerald focus:ring-1 focus:ring-emerald/20 transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block font-head text-[10px] font-semibold tracking-[0.1em] uppercase text-on-muted mb-2">
                Message
              </label>
              <textarea
                placeholder="Describe the scope of your inquiry..."
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((v) => ({...v, message: e.target.value}))
                }
                className="w-full bg-surface-hi border border-outline rounded-sm text-on-bg font-body text-[14px] px-3.5 py-3 outline-none placeholder-slate focus:border-emerald focus:ring-1 focus:ring-emerald/20 transition-all resize-y"
              />
            </div>

            <div className="flex items-center gap-2 text-slate text-[12px] font-body mb-5">
              <span>🔒</span> Transmission encrypted via TLS 1.3 protocol.
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-emerald text-black font-head text-[13px] font-semibold tracking-[0.05em] uppercase py-3.5 rounded-sm hover:bg-emerald/90 transition-colors duration-200 active:scale-[0.99]">
              Send ▷
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
