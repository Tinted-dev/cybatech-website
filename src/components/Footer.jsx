import { whatsappUrl } from "../config/contact"
function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-lg font-bold text-white">
              Cybatech IT Solutions
            </p>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              Practical technology solutions for modern businesses. We help
              SMEs, hotels and offices run smoother, safer and smarter.
            </p>

            <div className="mt-5 flex gap-3">
              <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp us"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
            >
             W
            </a>
              <a
                href="mailto:info@cybatech.co.ke"
                aria-label="Email us"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
              >
                @
              </a>
              <a
                href="tel:+254729698288"
                aria-label="Call us"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
              >
                ☎
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="/" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>IT Infrastructure</li>
              <li>Security Systems</li>
              <li>Digital Solutions</li>
              <li>IT Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="text-blue-400">📍</span>
                <span>
                  Ngong Hills Hotel,
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">📞</span>
                <a href="tel:+254729698288" className="transition hover:text-blue-400">
                  +254 729 698 288
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">✉️</span>
                <a
                  href="mailto:info@cybatech.co.ke"
                  className="transition hover:text-blue-400"
                >
                  info@cybatech.co.ke
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Cybatech IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
