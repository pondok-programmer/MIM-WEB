import { About, Article, Download, Event, Feature1, Feature2, Footer } from "../../components"
import Carousel from "../../components/Carousel"

const Home = () => {
  return (
    <>
      <Carousel/>
      <About/>
      <Feature1/>
      <Feature2/>
      <Event/>
      <Article/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Home