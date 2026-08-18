import heroImage from "../assets/hero-tech.png"
function Hero() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="text-base font-semibold uppercase tracking-wider text-blue-600">
             Business Technology Solutions
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
            Empowering Businesses to Grow Through Technology
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
             We help SMEs, hotels and offices use technology to streamline operations,
             improve efficiency, reduce unnecessary costs and create better ways to serve
             their customers.
          </p>

          <p className="mt-4 text-sm font-medium text-blue-600">
             IT Infrastructure • Security Systems • Digital Solutions • IT Support
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to Us on WhatsApp
            </a>

            <a
              href="#services"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View Our Services
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
    <img
    src={heroImage}
    alt="Cybatech technology solutions"
    className="h-full min-h-80 w-full object-cover"
    />
    </div>

      </div>
    </section>
  )
}

export default Hero