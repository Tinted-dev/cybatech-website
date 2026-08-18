
const reasons = [
  {
    title: "Real-World Experience",
    description:
      "We've worked on real business environments, from CCTV and access control to websites, networks and complete office IT setups.",
  },
  {
    title: "Solutions That Make Sense",
    description:
      "We focus on practical technology solutions that solve your actual business problems instead of adding unnecessary complexity.",
  },
  {
    title: "Clear & Transparent",
    description:
      "We communicate clearly about what your business needs, what we're doing and why we're recommending it.",
  },
  {
    title: "One Technology Partner",
    description:
      "From infrastructure and security to websites and software, Cybatech can support multiple areas of your business technology.",
  },
]

function WhyCybatech() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider">
            Why Cybatech
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technology Support You Can Understand and Trust
          </h2>

          <p className="mt-4 text-gray-600">
            We combine practical IT experience with a clear understanding of
            how technology supports everyday business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl bg-gray-50 p-6"
            >
              <h3 className="text-xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyCybatech