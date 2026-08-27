import aboutImage from "../assets/about-cybatech.jpg"
import storyImage from "../assets/about-story.jpg"
import SEO from "../components/SEO"
import { whatsappUrl } from "../config/contact"
const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "100+", label: "Projects Completed" },
  { value: "24/7", label: "Support Available" },
  { value: "4", label: "Core Service Areas" },
]

const approach = [
  {
    title: "Understand the Business Problem First",
    detail:
      "Before we recommend anything, we take time to understand how your business actually operates — your workflows, your constraints, and what's genuinely getting in the way. Technology is only useful if it solves a real problem.",
  },
  {
    title: "Recommend the Right Solution, Not the Most Expensive One",
    detail:
      "We size solutions to your business, not to a sales target. If a simpler, more affordable setup gets the job done, that's what we'll propose — even if it means a smaller invoice.",
  },
  {
    title: "Provide Clear Support Throughout the Process",
    detail:
      "You'll always know what we're doing, why we're doing it, and what to expect next. No jargon-heavy explanations designed to keep you dependent on us — just straight answers.",
  },
]

const values = [
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

function AboutPage() {
  return (
    <>
    <SEO
  title="About Us"
  description="Learn about Cybatech IT Solutions and our mission to help businesses grow through practical and reliable technology."
  path="/about"
/>
      {/* Header */}
      <section className="bg-slate-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            About Cybatech
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technology Built Around Your Business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We help SMEs, hotels and offices use technology to operate more
            efficiently, securely and reliably — without unnecessary
            complexity or cost.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={storyImage}
                  alt="Cybatech IT Solutions on-site work"
                  className="h-full min-h-80 w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Practical IT, Without the Jargon
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Cybatech IT Solutions was built on a simple observation: most
                businesses don't need more technology — they need the right
                technology, set up properly and supported reliably.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We've worked across real business environments — offices
                that needed a network that just works, hotels that needed
                security they could trust, and business owners who needed a
                website that actually brought in customers. That hands-on
                experience shapes how we approach every new project: start
                with the problem, not the product.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Today, Cybatech supports businesses across IT infrastructure,
                security systems, ongoing technical support and digital
                solutions — acting as a single technology partner instead of
                juggling multiple vendors who don't talk to each other.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Making Business Technology Simple
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            To give businesses of every size access to reliable, well-
            supported technology — delivered clearly, priced fairly, and
            built to actually work for the people using it every day.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Approach
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Cybatech
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              What Sets Us Apart
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {value.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + secondary image */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="order-2 md:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Track Record
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Trusted by Growing Businesses
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                From small offices to multi-location hotels, businesses
                choose Cybatech because we stay accountable long after
                installation day — through ongoing support, honest advice
                and technology that keeps working.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-blue-600">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={aboutImage}
                  alt="Cybatech IT Solutions team at work"
                  className="h-full min-h-80 w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-blue-600 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let's Build Technology That Works for You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-blue-100">
            Whether you're setting up from scratch or fixing what's not
            working, we're ready to help.
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
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
