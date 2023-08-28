import { About, Article, Download, Event, Feature1, Feature2, Footer, Navbar } from "../../components"
import Carousel from "../../components/Carousel"

const Home = () => {
  return (
    <>
      <Navbar/>
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