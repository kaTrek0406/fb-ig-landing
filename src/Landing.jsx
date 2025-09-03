import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const slogans = [
    "GEARING UP TO MAKE IT POP",
    "PREPPING THE PIXELS",
    "WARMING UP THE REELS",
    "TUNING THE ADS ENGINE",
  ];
  const [sloganIdx, setSloganIdx] = useState(0);

  // Скрываем лоадер спустя ~2.5s после загрузки окна
  useEffect(() => {
    const onLoaded = () => setTimeout(() => setIsLoading(false), 3500);
    if (document.readyState === "complete") onLoaded();
    else window.addEventListener("load", onLoaded);
    return () => window.removeEventListener("load", onLoaded);
  }, []);

  // Меняем слоганы, пока лоадер активен
  useEffect(() => {
    if (!isLoading) return;
    const id = setInterval(() => {
      setSloganIdx((s) => (s + 1) % slogans.length);
    }, 1000);
    return () => clearInterval(id);
  }, [isLoading]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-[#F1EDE6] antialiased overflow-x-hidden">
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F] text-[#F2572E]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* лого VSK опущено ниже и без рамки */}
            <div className="absolute inset-x-0 top-16 md:top-24 flex justify-center">
              <div className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded">
                <div className="text-[#F2572E] font-black tracking-widest text-2xl md:text-3xl">VSK</div>
              </div>
            </div>

            {/* карточка без рамок */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mx-4"
            >
              <div className="px-8 py-10 md:px-14 md:py-12">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={sloganIdx}
                    initial={{ y: 40, opacity: 0 }}   // снизу вверх
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center font-black uppercase tracking-tight text-3xl md:text-6xl leading-tight"
                  >
                    {slogans[sloganIdx]}
                  </motion.h2>
                </AnimatePresence>

                {/* точки-индикаторы */}
                <div className="mt-6 flex justify-center gap-2">
                  {slogans.map((_, j) => (
                    <span
                      key={j}
                      className={`h-2 w-2 rounded-full ${j === sloganIdx ? "bg-[#F2572E]" : "bg-[#F2572E]/40"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>


      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1D1D1D]">
        <div className="mx-auto max-w-6xl px-6 py-2.5 flex items-center justify-between">
          <a
            href="#home"
            className="uppercase font-black tracking-tight text-2xl leading-none text-[#F2572E]"
          >
            VSK
          </a>
          <nav className="flex items-center gap-8 text-sm">
            <a href="#about" className="text-[#B8BED8] hover:text-white/90 transition">
              About
            </a>
            <a href="#pricing" className="text-[#B8BED8] hover:text-white/90 transition">
              Services
            </a>
            <a href="#testimonials" className="text-[#B8BED8] hover:text-white/90 transition">
              Work
            </a>
            <a href="#contact" className="text-[#B8BED8] hover:text-white/90 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-visible bg-[#111111] text-[#F1EDE6]">

        {/* local styles for marquee */}
        <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>

        {/* ANGLED DARK BANDS (остаются в минус – фон) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -bottom-10 -left-1/3 h-40 w-[140%] rotate-[-8deg] bg-[#1A1A1A]" />
          <div className="absolute -bottom-24 -left-1/3 h-28 w-[140%] rotate-[-4deg] bg-[#0E0E0E]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-28 md:py-36">
          <h1 className="mx-auto text-center font-black leading-[0.95] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            HOOKED BY{" "}
            <span className="relative group inline-block text-[#F3B600] px-1">
              VISUALS
              <svg
                className="absolute -right-10 -top-10 h-12 w-12 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="36" cy="36" r="22" fill="#F7E8D6" />
                <path
                  d="M22 36s6-8 14-8 14 8 14 8-6 8-14 8-14-8-14-8z"
                  fill="#141414"
                />
                <circle cx="36" cy="36" r="5" fill="#F3B600" />
                <g transform="translate(48,10)">
                  <circle cx="12" cy="12" r="12" fill="#FFD4DC" />
                  <path
                    d="M12 7c-1.8-4-8-2.4-8 2.4 0 4.1 4.5 6.3 8 10.6 3.5-4.3 8-6.5 8-10.6 0-4.8-6.2-6.4-8-2.4z"
                    fill="#FF6B81"
                  />
                </g>
              </svg>
            </span>
            ,<br className="hidden sm:block" />
            FASCINATED BY{" "}
            <span className="relative group inline-block text-[#0C8B72] px-1">
              TECHNOLOGY
              <svg
                className="absolute -right-10 -top-8 h-12 w-12 rotate-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="20" width="50" height="38" rx="4" fill="#F7E8D6" stroke="#141414" strokeWidth="3" />
                <rect x="18" y="28" width="34" height="18" rx="2" fill="#0B7C66" />
                <path d="M24 56h22" stroke="#141414" strokeWidth="3" />
                <circle cx="35" cy="37" r="3" fill="#F7E8D6" />
                <path d="M30 40h10" stroke="#F7E8D6" strokeWidth="2" />
              </svg>
            </span>
            ,<br className="hidden sm:block" />
            FUELLED BY{" "}
            <span className="relative group inline-block text-[#F2AFC3] px-1">
              CRAFTSMANSHIP
              <svg
                className="absolute -right-12 -top-6 h-14 w-14 -rotate-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="20" fill="#7C4DFF" />
                <circle cx="40" cy="40" r="12" fill="#B388FF" />
                <path d="M40 34l3 4 5 1-3 4 1 5-6-3-6 3 1-5-3-4 5-1 3-4z" fill="#F7E8D6" />
                <path d="M33 57l-8 10 11-4" fill="#2E7D32" />
              </svg>
            </span>{" "}
            AND
            <br className="hidden sm:block" />
            MEANINGFUL{" "}
            <span className="relative group inline-block text-[#F2572E] px-1">
              AESTHETICS
              <svg
                className="absolute -right-10 -top-2 h-14 w-14 rotate-12 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 35c0-11 9-20 20-20h10c11 0 20 9 20 20v18c0 7-6 13-13 13H28c-7 0-13-6-13-13V35z" fill="#F7D9CF" />
                <path d="M30 25h8c9 0 17 8 17 17v16" stroke="#F2572E" strokeWidth="6" />
                <path d="M30 37h9" stroke="#F2572E" strokeWidth="6" />
                <path d="M30 49h18" stroke="#F2572E" strokeWidth="6" />
              </svg>
            </span>
            .
          </h1>

          {/* sticker icon */}
          <div className="relative">
            <svg
              className="absolute right-10 md:right-24 -mt-6 h-20 w-20 rotate-12"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#a)">
                <path d="M15 35c0-11 9-20 20-20h10c11 0 20 9 20 20v18c0 7-6 13-13 13H28c-7 0-13-6-13-13V35z" fill="#F7D9CF" />
                <path d="M30 25h8c9 0 17 8 17 17v16" stroke="#F2572E" strokeWidth="6" />
                <path d="M30 37h9" stroke="#F2572E" strokeWidth="6" />
                <path d="M30 49h18" stroke="#F2572E" strokeWidth="6" />
              </g>
              <defs>
                <filter id="a" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".2" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* SLANTED TICKER (поворачиваем в плюс, чтобы пересекалась) */}
        <div className="pointer-events-none absolute -bottom-10 left-0 w-full rotate-[6deg] z-20">
          <div className="relative h-54 md:h-28 overflow-hidden bg-[#F24E2E]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-black uppercase tracking-wider text-[#FFE9DC] text-3xl md:text-4xl flex gap-10 animate-[marquee_18s_linear_infinite]">
              <span>DEEP COUNTER ◆ APPLE AFICIONADO ◆ RECTANGLE ARTIST ◆ TECH ENTHUSIAST ◆ BRAND CONNOISSEUR ◆</span>
              <span>DEEP COUNTER ◆ APPLE AFICIONADO ◆ RECTANGLE ARTIST ◆ TECH ENTHUSIAST ◆ BRAND CONNOISSEUR ◆</span>
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-[#111111]"   // единый фон
      >
        {/* мягкая склейка: градиент сверху секции */}
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-[#111111] to-transparent" />

        {/* продолжение косой тёмной плашки, чтобы шов не бросался в глаза */}
        <div className="pointer-events-none absolute -top-20 -left-1/3 h-40 w-[140%] rotate-[-6deg] bg-[#1A1A1A]" />


        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
          {/* Left: big stacked heading + badges */}
          <div>
            <h2 className="sr-only">About</h2>
            <div className="text-[#F1EDE6] font-black leading-[0.95] tracking-tight text-4xl sm:text-6xl">
              <div>CRAFTING BRAND EXPERIENCES</div>
              <div>
                AT <span className="text-[#F06AAE]">STORYLANE</span>
              </div>
              <div className="text-[#B8BED8]">PREVIOUSLY</div>
              <div className="text-[#B8BED8]">ZUDDL, KISSFLOW, MDF.</div>
            </div>

            {/* round badges */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#EC4AAE] flex items-center justify-center text-[#141414] font-black text-xl">S</div>
              <div className="h-12 w-12 rounded-full bg-[#6B5BFF] flex items-center justify-center text-white font-black text-xl">Z</div>
              <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-white font-black text-xl">K</div>
              <div className="h-12 w-12 rounded-full bg-[#F21D5A] flex items-center justify-center text-[#FFE9DC] font-black text-xl">M</div>
            </div>
          </div>

          {/* Right: paragraph + link + sticker */}
          <div className="relative">
            <p className="text-[#B8BED8] leading-7 text-sm sm:text-base max-w-[560px]">
              I am Vishal, a brand experience designer from India with generalist experience in designing for marketing,
              branding, web, B2B Software. I love everything that has to do with design and consumer technology. As a
              passionate creative and also a total nerd, the balance of art and science that marketing design strikes is the
              perfect playground for me.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-black uppercase tracking-wide text-[#F2AFC3] text-2xl hover:text-[#FFD3E6] transition"
            >
              More about me <span className="inline-block">↗</span>
            </a>

            {/* fun sticker */}
            <div className="absolute -left-4 -top-8 rotate-[-8deg]">
              <span className="inline-flex items-center rounded-md bg-[#6B5BFF] px-2 py-1 text-white font-black">YO!</span>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Pricing */}
      <motion.section
        id="pricing"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#141414] border-t border-[#222]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-[#F1EDE6] font-black uppercase tracking-tight text-3xl sm:text-5xl">
            Pricing
          </h2>
          <p className="mt-3 text-center text-[#B8BED8]">
            Simple plans designed to scale
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$390/mo", points: ["Setup & pixel", "1 platform", "2 creatives/mo"] },
              { name: "Growth", price: "$690/mo", featured: true, points: ["FB+IG", "6 creatives/mo", "A/B testing"] },
              { name: "Scale", price: "$1200/mo", points: ["FB+IG+Remarketing", "10 creatives/mo", "Slack support"] },
            ].map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -6, scale: 1.02, boxShadow: "0 10px 30px rgba(242,87,46,.25)" }}
                className={`relative rounded-2xl p-6 md:p-8 bg-[#0F0F0F] border ${p.featured ? "border-[#F2572E]" : "border-[#262626]"
                  }`}
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-black text-xl text-[#F1EDE6] uppercase tracking-wide">{p.name}</h3>
                  {p.featured && (
                    <span className="text-xs font-black uppercase text-[#F2572E]">Best</span>
                  )}
                </div>

                <div className="mt-2 text-4xl sm:text-5xl font-black text-[#F2572E]">
                  {p.price}
                </div>

                <ul className="mt-6 space-y-2 text-[#B8BED8]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="text-[#F24E2E]">◆</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-black uppercase tracking-wide transition ${p.featured
                    ? "bg-[#F2572E] text-[#141414] hover:brightness-110"
                    : "bg-white/10 text-[#F1EDE6] hover:bg-white/15"
                    }`}
                >
                  Get started
                </a>

                {p.featured && (
                  <div className="pointer-events-none absolute -top-3 -right-3 rotate-12">
                    <span className="inline-flex rounded-md bg-[#F2572E] text-[#141414] font-black text-xs px-2 py-1 uppercase">
                      Popular
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Testimonials */}
      <motion.section
        id="testimonials"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">What clients say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { quote: "Clear reporting and fast iterations.", name: "Elena" },
              { quote: "CPA down 37% in month two.", name: "Alex" },
              { quote: "Lead quality improved immediately.", name: "Mihai" },
            ].map((t, i) => (
              <motion.figure
                whileHover={{ scale: 1.03 }}
                key={i}
                className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm"
              >
                <blockquote className="text-sm">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-xs text-neutral-500">{t.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-neutral-200"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Request a free strategy</h2>
            <p className="mt-3 text-neutral-600">
              Tell us about your business, budget, and goals. We’ll respond within 24 hours.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 w-full shadow-sm"
          >
            <div className="grid gap-4">
              <input placeholder="Your name" required className="w-full rounded-xl border px-3 py-2 text-sm" />
              <input type="email" placeholder="you@email.com" required className="w-full rounded-xl border px-3 py-2 text-sm" />
              <input placeholder="@telegram or +373…" className="w-full rounded-xl border px-3 py-2 text-sm" />
              <select className="w-full rounded-xl border px-3 py-2 text-sm">
                <option>up to $500</option>
                <option>$500–$1,500</option>
                <option>$1,500–$5,000</option>
                <option>$5,000+</option>
              </select>
              <textarea rows={4} placeholder="Message" className="w-full rounded-xl border px-3 py-2 text-sm" />
              <button className="rounded-xl bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500 text-white px-4 py-2 text-sm font-medium hover:opacity-90">
                Send
              </button>
              {sent && <p className="text-sm text-green-600">Thanks! We’ll get back to you shortly.</p>}
            </div>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Rose Creative. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">
              Privacy
            </a>
            <a href="#" className="hover:opacity-70">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
}
