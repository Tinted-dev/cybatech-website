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
  },
  {
    title: "Business Website Development",
    category: "Digital Solutions",
    description:
      "Modern business websites designed to establish a professional online presence and make it easier for customers to connect.",
    image: websiteProject,
  },
  {
    title: "Office IT Infrastructure",
    category: "IT Infrastructure",
    description:
      "Business network and technology setup connecting computers, internet access and other office systems.",
    image: infrastructureProject,
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Projects We've Delivered
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            A selection of the technology solutions we provide for businesses.
            Our portfolio will continue to grow as we complete more projects.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
