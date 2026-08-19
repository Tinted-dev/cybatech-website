const services = [
  {
    icon: "🖧",
    title: "IT Infrastructure",
    description:
      "Reliable business technology setups that keep your team connected and productive, built to grow with your business.",
    features: [
      "Network design & structured cabling",
      "Wi-Fi setup & coverage optimization",
      "Server installation & configuration",
      "IP phone systems",
      "Computer setup & procurement",
    ],
  },
  {
    icon: "🛡️",
    title: "Security Systems",
    description:
      "Protect your premises, staff and assets with security systems tailored to how your business actually operates.",
    features: [
      "CCTV installation & remote monitoring",
      "Access control systems",
      "Biometric time & attendance",
      "Alarm systems",
      "Site surveys & security consulting",
    ],
  },
  {
    icon: "🧰",
    title: "IT Support & Maintenance",
    description:
      "Ongoing support so small issues get fixed before they become downtime, with a team that knows your setup.",
    features: [
      "Remote & on-site troubleshooting",
      "Scheduled preventive maintenance",
      "Help desk & user assistance",
      "Software updates & patch management",
      "Backup & data protection",
    ],
  },
  {
    icon: "💻",
    title: "Digital Solutions",
    description:
      "Custom-built digital tools that reflect how your business actually works, not generic off-the-shelf templates.",
    features: [
      "Business & e-commerce websites",
      "Point of Sale (POS) systems",
      "Custom software development",
      "System integrations",
      "Ongoing hosting & maintenance",
    ],
  },
]

function Services() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Technology Solutions for Your Business
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            From infrastructure and security to websites and software,
            Cybatech provides practical technology solutions that support
            your day-to-day business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-blue-600">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
