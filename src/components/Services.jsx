const services = [
  {
    title: "IT Infrastructure",
    description:
      "Reliable business technology setups including networks, Wi-Fi, servers, IP phones and computers.",
  },
  {
    title: "Security Systems",
    description:
      "Professional CCTV, access control, biometric and alarm solutions for your business.",
  },
  {
    title: "IT Support & Maintenance",
    description:
      "Ongoing technical support, troubleshooting, maintenance and user assistance to keep your business running.",
  },
  {
    title: "Digital Solutions",
    description:
      "Modern websites, POS solutions and custom software designed around your business needs.",
  },
]

function Services() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        What We Do
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Technology Solutions for Your Business
      </h2>

      <p className="mt-4 text-gray-600">
        From infrastructure and security to websites and software,
        Cybatech provides practical technology solutions that support
        your day-to-day business operations.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-blue-600">
            {service.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            {service.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  )
}

export default Services