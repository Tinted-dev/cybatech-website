const projects = [
  {
    title: "Commercial CCTV Installation",
    category: "Security Systems",
    description:
      "Professional CCTV installation designed to improve visibility, monitoring and security for business premises.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business Website Development",
    category: "Digital Solutions",
    description:
      "Modern business websites designed to establish a professional online presence and make it easier for customers to connect.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Office IT Infrastructure",
    category: "IT Infrastructure",
    description:
      "Business network and technology setup connecting computers, internet access and other office systems.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Projects We've Delivered
          </h2>

          <p className="mt-4 text-gray-600">
            A selection of the technology solutions we provide for businesses.
            Our portfolio will continue to grow as we complete more projects.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-medium">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
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