import { Helmet } from "react-helmet-async"

function SEO({
  title,
  description,
  path = "",
}) {
  const siteUrl = "https://cybatech.co.ke"
  const fullTitle = title
    ? `${title} | Cybatech IT Solutions`
    : "Cybatech IT Solutions | Empowering Businesses to Grow Through Technology"

  const canonicalUrl = `${siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />
    </Helmet>
  )
}

export default SEO