import imgSmartphone from '../assets/imgs'

const Feature1 = () => {
  return (
    <section className="">
      <header className="text-center">
        <h1 className="text-[26px] md:text-[28px] font-bold mb-2">Fitur - Fitur</h1>
      </header> 
      <main>
        <h2>Fitur Utama</h2>
        <article>
          <section>
            <h1>MIM Standar</h1>
            <h1>MIM Doa Dalam Quran</h1>
            <h1>MIM Bacaan Sholat</h1>
          </section>
          <section>
            <img src={imgSmartphone} alt="" />
          </section>
        </article>
      </main>
    </section>
  )
}

export default Feature1