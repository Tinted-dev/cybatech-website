function Footer() {
  return (
    <footer className="border-t px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-lg font-bold">
            Cybatech IT Solutions
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Practical technology solutions for modern businesses.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cybatech IT Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer