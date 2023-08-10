import { About, Article, Download, Event, Feature1, Feature2, Footer } from "../../components"
import Carousel from "../../components/Carousel"

const Home = () => {
  return (
    <>
    <section>
      <Carousel/>
    </section>
    <section>
      <About/>
    </section>
    <section>
      <Feature1/>
    </section>
    <section>
      <Feature2/>
    </section>
    <section>
      <Event/>
    </section>
    <section>
      <Article/>
    </section>
    <section>
      <Download/>
    </section>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default Home