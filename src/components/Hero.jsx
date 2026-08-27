import heroImage from "../assets/hero-tech.png"
import { Link } from "react-router-dom"
import { whatsappUrl } from "../config/contact"
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 md:py-32">
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark gradient overlay for text contrast + brand tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

      {/* Subtle grid pattern for a technical feel */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <p className="text-base font-semibold uppercase tracking-wider text-blue-400">
          Business Technology Solutions
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Empowering Businesses to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Grow Through Technology
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          We help SMEs, hotels and offices use technology to streamline operations,
          improve efficiency, reduce unnecessary costs and create better ways to serve
          their customers.
        </p>

        <p className="mt-4 text-sm font-medium tracking-wide text-blue-400">
          IT Infrastructure&nbsp;•&nbsp;Security Systems&nbsp;•&nbsp;Digital Solutions&nbsp;•&nbsp;IT Support
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          >
        Talk to Us on WhatsApp
        </a>

          <Link to ="/services"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
          >
            View Our Services
          </Link>
        </div>
      </div>
  
    </section>
  )
}

export default Hero