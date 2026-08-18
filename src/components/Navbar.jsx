import { useState } from "react"
import cybatechLogo from "../assets/cybatech-logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-nowrap items-center gap-8 px-6 py-4">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src={cybatechLogo}
            alt="Cybatech IT Solutions"
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#projects"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-gray-700 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Desktop WhatsApp CTA */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 md:block"
        >
          Talk to us
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700"
            >
              Talk to us
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar