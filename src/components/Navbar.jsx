import { Link } from "react-router-dom"
import { useState } from "react"
import cybatechLogo from "../assets/cybatech-logo.png"
import { whatsappUrl } from "../config/contact"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Contact bar */}
      <div className="w-full bg-blue-600 py-2 text-sm font-medium text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 text-center sm:justify-end">
          <span className="inline-flex items-center gap-2">
            <span>📞</span>
            <span>+254 729 698 288</span>
          </span>
          <span className="mx-2 opacity-50">|</span>
          <span className="inline-flex items-center gap-2">
            <span>✉️</span>
            <span>info@cybatech.co.ke</span>
          </span>
        </div>
      </div>

      <nav className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center gap-8 px-6 py-4">

          {/* Logo */}
          <a href="/" className="shrink-0">
            <img
              src={cybatechLogo}
              alt="Cybatech IT Solutions"
              className="h-15 w-auto max-w-[160px] object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center gap-8 md:flex">
            <Link to="/"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link to ="/services"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link to ="/projects"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Projects
            </Link>

            <Link to="/about"
              className="text-gray-700 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link to="/contact"
              className="text-gray-700 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Desktop WhatsApp CTA */}
          {/* <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          >
          Talk to Us on WhatsApp
          </a> */}

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

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="text-gray-700 hover:text-blue-600"
      >
        Home
      </Link>

      <Link
        to="/services"
        onClick={() => setMenuOpen(false)}
        className="text-gray-700 hover:text-blue-600"
      >
        Services
      </Link>

      <Link
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className="text-gray-700 hover:text-blue-600"
      >
        Projects
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="text-gray-700 hover:text-blue-600"
      >
        About
      </Link>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-gray-700 hover:text-blue-600"
      >
        Contact
      </Link>

      <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      >
     Talk to Us on WhatsApp
    </a>

    </div>
  </div>
)}
      </nav>
    </>
  )
}

export default Navbar
