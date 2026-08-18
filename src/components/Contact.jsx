function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-wider">
          Get In Touch
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Let's Talk About Your IT Needs
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Need help with your business network, CCTV, website, office IT
          setup or another technology challenge? Talk to us and let's find
          the right solution.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-6 py-3 font-semibold"
          >
            Chat on WhatsApp
          </a>

          <a
            href="mailto:info@cybatech.co.ke"
            className="rounded-lg border px-6 py-3 font-semibold"
          >
            Send Us an Email
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact