import { useState } from "react"
import cctvProject from "../assets/project-cctv.jpg"
import websiteProject from "../assets/project-website.jpg"
import infrastructureProject from "../assets/project-infrastructure.jpg"

const projects = [
  {
    title: "Commercial CCTV Installation",
    category: "Security Systems",
    description:
      "Professional CCTV installation designed to improve visibility, monitoring and security for business premises.",
    image: cctvProject,
    challenge:
      "The client had multiple entry points and blind spots across their premises, with no way to monitor activity outside of business hours or verify incidents after the fact.",
    solution:
      "We carried out a site survey to identify key coverage areas, then installed HD CCTV cameras across entrances, storage areas and parking, configured for remote viewing via a mobile app.",
    outcome:
      "The client can now monitor their premises in real time from anywhere, with recorded footage available whenever needed — improving both security and staff accountability.",
  },
  {
    title: "Business Website Development",
    category: "Digital Solutions",
    description:
      "Modern business websites designed to establish a professional online presence and make it easier for customers to connect.",
    image: websiteProject,
    challenge:
      "The client relied entirely on word-of-mouth and had no way for potential customers to find or verify their business online, which was costing them credibility and leads.",
    solution:
      "We designed and built a responsive business website covering services, contact details and a clear call to action, optimized to load quickly and work well on mobile devices.",
    outcome:
      "The business now has a professional online presence that customers can find and trust, with direct inquiries coming through the website's contact channels.",
  },
  {
    title: "Office IT Infrastructure",
    category: "IT Infrastructure",
    description:
      "Business network and technology setup connecting computers, internet access and other office systems.",
    image: infrastructureProject,
    challenge:
      "The office was running on an ad-hoc network setup with unreliable Wi-Fi, no structured cabling, and frequent connectivity drops that were interrupting daily work.",
    solution:
      "We redesigned the network from the ground up — structured cabling, properly placed access points for full coverage, and a configured server for shared file access.",
    outcome:
      "Staff now have consistent, reliable connectivity across the entire office, with a documented network that's easy to maintain and expand as the business grows.",
  },
]

const categories = ["All", "Security Systems", "Digital Solutions", "IT Infrastructure"]

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Our Work
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects We've Delivered
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A selection of the technology solutions we've provided for
            businesses across infrastructure, security and digital
            services. Our portfolio will continue to grow as we complete
            more projects.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section id="projects" className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                        The Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-gray-600">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                        Our Solution
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-gray-600">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                        The Outcome
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-gray-600">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-12 text-center text-gray-600">
              No projects in this category yet — check back soon.
            </p>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-blue-600 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-blue-100">
            Tell us what you're trying to achieve and we'll help you figure
            out the right technology solution for it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@cybatech.co.ke"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
