
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyCybatech from "../components/WhyCybatech"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
       <SEO
        description="Cybatech IT Solutions helps businesses in Kenya grow through reliable IT infrastructure, security systems, digital solutions and professional IT support."
        path="/"
      />

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
