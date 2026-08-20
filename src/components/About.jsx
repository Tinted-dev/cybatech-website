import aboutImage from "../assets/about-cybatech.jpg"

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "100+", label: "Projects Completed" },
  { value: "24/7", label: "Support Available" },
]

const approach = [
  "Understand the business problem first",
  "Recommend the right solution, not the most expensive one",
  "Provide clear support throughout the process",
]

function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={aboutImage}
                alt="Cybatech IT Solutions team at work"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              About Cybatech
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Technology Built Around Your Business
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Cybatech IT Solutions helps businesses use technology to operate
              more efficiently, securely and reliably.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We work with SMEs, hotels and offices to provide practical
              solutions across IT infrastructure, security systems, digital
              solutions and ongoing technical support.
            </p>

            <ul className="mt-6 space-y-3">
              {approach.map((step) => (
                <li key={step} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                    ✓
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
