function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">
            About Cybatech
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technology Built Around Your Business
          </h2>
        </div>

        <div className="space-y-5 text-gray-600">
          <p>
            Cybatech IT Solutions helps businesses use technology to operate
            more efficiently, securely and reliably.
          </p>

          <p>
            We work with SMEs, hotels and offices to provide practical
            solutions across IT infrastructure, security systems, digital
            solutions and ongoing technical support.
          </p>

          <p>
            Our approach is simple: understand the business problem first,
            recommend the right solution, and provide clear support throughout
            the process.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About