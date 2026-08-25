import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Cybatech IT Solutions</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-md">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 leading-7 text-gray-600">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
