const faqs = [
  {
    question: "How quickly can you respond to a support request?",
    answer:
      "For existing clients, most remote issues are picked up within a few hours during working hours. On-site visits are typically scheduled within 24–48 hours depending on urgency and location.",
  },
  {
    question: "Do you work with businesses outside Nairobi?",
    answer:
      "Yes. While we're based in Nairobi, we take on projects across Kenya. Reach out with your location and we'll confirm feasibility and timelines.",
  },
  {
    question: "Can you assess our current setup before recommending anything?",
    answer:
      "Absolutely — for infrastructure and security projects, we typically start with a site visit or consultation to understand what you already have before proposing any changes.",
  },
  {
    question: "Do you offer ongoing support contracts, or only one-off projects?",
    answer:
      "Both. Many clients start with a one-off installation and move to an ongoing support plan afterward, but we're happy to discuss either from the start.",
  },
]

function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Get In Touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's Talk About Your IT Needs
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Need help with your business network, CCTV, website, office IT
            setup or another technology challenge? Talk to us and let's find
            the right solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:info@cybatech.co.ke"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>

      {/* Info cards + form */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-5">

            {/* Contact info */}
            <div className="md:col-span-2">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-gray-50 p-6">

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    📍
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Ngong Hills Hotel, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    📞
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <a
                      href="tel:+254729698288"
                      className="mt-1 block text-sm text-gray-600 transition hover:text-blue-600"
                    >
                      +254 729 698 288
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✉️
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <a
                      href="mailto:info@cybatech.co.ke"
                      className="mt-1 block text-sm text-gray-600 transition hover:text-blue-600"
                    >
                      info@cybatech.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    🕒
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Mon – Fri: 8:00 AM – 5:00 PM
                    </p>
                    <p className="mt-0.5 text-sm text-gray-600">
                      Sat: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ⚡
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Support</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Existing clients can reach us on WhatsApp for urgent
                      issues outside working hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Message form */}
            <div className="md:col-span-3">
              <form className="rounded-2xl border border-gray-200 p-6">
                <p className="text-lg font-semibold text-gray-900">
                  Send Us a Message
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Fill in the form and we'll get back to you within one
                  business day.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select a service</option>
                      <option value="infrastructure">IT Infrastructure</option>
                      <option value="security">Security Systems</option>
                      <option value="support">IT Support & Maintenance</option>
                      <option value="digital">Digital Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Network setup for our office"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us a bit about what you need help with..."
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Find Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Ngong Hills Hotel, Nairobi
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Prefer to meet in person? Drop by during working hours, or
              message us ahead of time so we can make sure someone's
              available to see you.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              title="Cybatech IT Solutions location"
              src="https://www.google.com/maps?q=Ngong+Hills+Hotel,+Nairobi,+Kenya&output=embed"
              className="h-96 w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Common Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <p className="font-semibold text-gray-900">{faq.question}</p>
                <p className="mt-2 leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage