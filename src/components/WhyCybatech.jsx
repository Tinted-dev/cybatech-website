const reasons = [
  {
    icon: "🛠️",
    title: "Real-World Experience",
    description:
      "We've worked on real business environments, from CCTV and access control to websites, networks and complete office IT setups.",
  },
  {
    icon: "🎯",
    title: "Solutions That Make Sense",
    description:
      "We focus on practical technology solutions that solve your actual business problems instead of adding unnecessary complexity.",
  },
  {
    icon: "💬",
    title: "Clear & Transparent",
    description:
      "We communicate clearly about what your business needs, what we're doing and why we're recommending it.",
  },
  {
    icon: "🤝",
    title: "One Technology Partner",
    description:
      "From infrastructure and security to websites and software, Cybatech can support multiple areas of your business technology.",
  },
]

function WhyCybatech() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Cybatech
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Technology Built Around Your Business
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We combine practical IT experience with a clear understanding of
            how technology supports everyday business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl transition-colors duration-300 group-hover:bg-blue-100">
                {reason.icon}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyCybatech
