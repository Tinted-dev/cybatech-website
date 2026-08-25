import { Helmet } from "react-helmet-async"

import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyCybatech from "../components/WhyCybatech"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <Helmet>
        <title>Cybatech IT Solutions | Business Technology Solutions in Nairobi</title>
        <meta
          name="description"
          content="Cybatech IT Solutions helps SMEs, hotels and offices in Nairobi with IT infrastructure, security systems, IT support and digital solutions."
        />
        <meta property="og:title" content="Cybatech IT Solutions | Business Technology Solutions in Nairobi" />
        <meta
          property="og:description"
          content="Practical IT infrastructure, security systems, support and digital solutions for growing businesses."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <Services />
      <WhyCybatech />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default Home
