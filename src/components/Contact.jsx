import { whatsappUrl } from "../config/contact"
function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Let's Talk About Your IT Needs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Need help with your business network, CCTV, website, office IT
            setup or another technology challenge? Talk to us and let's find
            the right solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
               Talk to Us on WhatsApp
            </a>

            <a
              href="mailto:info@cybatech.co.ke"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Send Us an Email
            </a>
          </div>
        </div>

        {/* Info cards + form */}
        <div className="mt-16 grid gap-8 md:grid-cols-5">

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
                </div>
              </div>

            </div>
          </div>

          {/* Message form */}
          <div className="md:col-span-3">
            <form className="rounded-2xl border border-gray-200 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
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
  )
}

export default Contact
