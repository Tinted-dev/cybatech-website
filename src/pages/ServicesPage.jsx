import infrastructureImage from "../assets/service-infrastructure.jpg"
import securityImage from "../assets/service-security.jpg"
import supportImage from "../assets/service-support.jpg"
import digitalImage from "../assets/service-digital.jpg"
import SEO from "../components/SEO"
import { whatsappUrl } from "../config/contact"
const services = [
  {
    icon: "🖧",
    title: "IT Infrastructure",
    tagline: "The foundation everything else runs on",
    image: infrastructureImage,
    description:
      "Every business decision your team makes today depends on a network that works. Slow Wi-Fi, unreliable internet, or a server that goes down at the wrong moment doesn't just cost time — it costs trust, sales and momentum. We design and install IT infrastructure that's built for how your business actually operates day to day, not a generic template.",
    details:
      "We start by understanding how your team moves through their workday: how many people need to connect, which areas need the strongest Wi-Fi coverage, what applications depend on a stable connection, and where you're likely to grow in the next few years. From there we design a network that's structured, documented and easy to maintain — so when something does need attention, it's a quick fix, not a mystery.",
    features: [
      {
        name: "Network Design & Structured Cabling",
        detail:
          "Clean, labeled cabling and network layouts that make troubleshooting fast and future expansion straightforward.",
      },
      {
        name: "Wi-Fi Setup & Coverage Optimization",
        detail:
          "Access point placement and configuration that eliminates dead zones across offices, floors or hotel premises.",
      },
      {
        name: "Server Installation & Configuration",
        detail:
          "Setup of file, application or communication servers sized correctly for your business, not over- or under-built.",
      },
      {
        name: "IP Phone Systems",
        detail:
          "Modern voice-over-IP phone systems that reduce call costs and integrate with your existing network.",
      },
      {
        name: "Computer Setup & Procurement",
        detail:
          "Sourcing, configuring and deploying desktops and laptops ready to work from day one.",
      },
    ],
  },
  {
    icon: "🛡️",
    title: "Security Systems",
    tagline: "Protection that matches how your business runs",
    image: securityImage,
    description:
      "Security isn't just about installing cameras — it's about knowing what's happening on your premises at all times, controlling who has access to sensitive areas, and having a record when it matters most. We design security systems around your actual risk points: entrances, storage areas, cash handling zones, staff movement and after-hours activity.",
    details:
      "Whether you're running a hotel with multiple entry points, an office with sensitive equipment, or a retail space that needs to deter theft, we assess your premises first and recommend coverage that makes sense — not the maximum number of cameras we can sell you. All systems are set up for remote viewing, so you can check on your business from your phone wherever you are.",
    features: [
      {
        name: "CCTV Installation & Remote Monitoring",
        detail:
          "HD camera systems with mobile app access so you can monitor your premises from anywhere.",
      },
      {
        name: "Access Control Systems",
        detail:
          "Card, code or app-based entry systems that restrict access to authorized staff only.",
      },
      {
        name: "Biometric Time & Attendance",
        detail:
          "Fingerprint or facial recognition systems that simplify payroll and eliminate buddy-punching.",
      },
      {
        name: "Alarm Systems",
        detail:
          "Intrusion detection with instant alerts, giving you peace of mind outside business hours.",
      },
      {
        name: "Site Surveys & Security Consulting",
        detail:
          "An on-site assessment to identify vulnerabilities before recommending any equipment.",
      },
    ],
  },
  {
    icon: "🧰",
    title: "IT Support & Maintenance",
    tagline: "So small problems never become big ones",
    image: supportImage,
    description:
      "Most IT problems are cheap to fix early and expensive to fix late. A slow computer, an outdated system, or a missed backup can seem harmless — until it isn't. Our support plans are built to catch issues before they interrupt your business, backed by a team that already knows your setup, so you're not re-explaining your systems every time something comes up.",
    details:
      "We offer both on-demand troubleshooting for when something breaks and scheduled maintenance to prevent things from breaking in the first place. Because we're already familiar with your infrastructure — since we set it up or have supported it before — response times are faster and fixes are more accurate.",
    features: [
      {
        name: "Remote & On-Site Troubleshooting",
        detail:
          "Fast response for hardware, software or connectivity issues, resolved remotely when possible.",
      },
      {
        name: "Scheduled Preventive Maintenance",
        detail:
          "Regular check-ups on servers, networks and workstations to catch problems before they cause downtime.",
      },
      {
        name: "Help Desk & User Assistance",
        detail:
          "A direct line for your staff when they run into technical issues, so work doesn't stop.",
      },
      {
        name: "Software Updates & Patch Management",
        detail:
          "Keeping systems current and secure without disrupting your team's workflow.",
      },
      {
        name: "Backup & Data Protection",
        detail:
          "Automated backup systems so your business data is recoverable if something goes wrong.",
      },
    ],
  },
  {
    icon: "💻",
    title: "Digital Solutions",
    tagline: "Tools built around how you actually work",
    image: digitalImage,
    description:
      "A generic website or off-the-shelf system often forces your business to adapt to the software, instead of the other way around. We build digital tools — websites, point-of-sale systems and custom software — that are shaped around your actual processes, so your team spends less time working around the tool and more time using it.",
    details:
      "We work closely with you to understand your workflow before writing a single line of code or picking a template. The result is a website that represents your business properly, or a system that fits how your staff already work, rather than requiring them to relearn their job around new software.",
    features: [
      {
        name: "Business & E-Commerce Websites",
        detail:
          "Professional websites that establish credibility and make it easy for customers to reach you or buy from you.",
      },
      {
        name: "Point of Sale (POS) Systems",
        detail:
          "Sales, inventory and reporting systems suited to retail, hospitality or service businesses.",
      },
      {
        name: "Custom Software Development",
        detail:
          "Purpose-built applications for workflows that off-the-shelf software doesn't handle well.",
      },
      {
        name: "System Integrations",
        detail:
          "Connecting your existing tools so data flows between them instead of being entered twice.",
      },
      {
        name: "Ongoing Hosting & Maintenance",
        detail:
          "Reliable hosting and continued support after launch, so your digital tools keep working as intended.",
      },
    ],
  },
]

function ServicesPage() {
  return (

    <>
    <SEO
  title="IT Services & Technology Solutions"
  description="Explore Cybatech's IT infrastructure, security systems, IT support, website development and digital solutions for businesses in Kenya."
  path="/services"
/>
      {/* Header */}
      <section className="bg-slate-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            What We Offer
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Practical technology solutions covering infrastructure, security,
            support and digital tools — designed around how your business
            actually operates, not a one-size-fits-all package.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.title}
          id={service.title.toLowerCase().replace(/\s+/g, "-")}
          className={`px-6 py-20 md:py-24 ${
            index % 2 === 1 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              {/* Image */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full min-h-72 w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-3xl">
                  {service.icon}
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-blue-600">
                  {service.tagline}
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {service.description}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.details}
                </p>
              </div>

            </div>

            {/* Feature grid */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {feature.name}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-gray-600">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-blue-600 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-blue-100">
            Tell us what your business is dealing with and we'll recommend
            the right solution — no pressure, no unnecessary upsells.
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

export default ServicesPage
