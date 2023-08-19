import brandMIM from '../assets/imgs/logo-mim-bg.png'
import { useSteteContext } from '../context/StateContext'

const About = () => {
  const {tentang} = useSteteContext()
  return (
    <section ref={tentang} className="text-[#C58940] my-10 lg:mt-40 bg-no-repeat bg-[center_top_20vh] md:bg-center bg-[length:340px_80px] md:bg-[length:590px_180px] lg:bg-[length:690px_220px] drop-shadow-lg" style={{backgroundImage :`url(${brandMIM})`}}>
        <header className="text-center"><h1 className="text-[26px] md:text-[28px] font-bold mb-2">Apa Itu MIM ?</h1></header>
        <article className="border-t-2 md:border-l-2 border-tl-2 border-slate-400 md:mx-10 rounded-lg md:flex">
          <section className="leading-7 p-4 md:w-[55%] bg-cover">
            <h3 className="text-[22px] md:text-[24px] font-[500] leading-10">Menghafal Itu Mudah</h3>
            <p className="text-[18px] md:text-[21px] md:leading-[40px]">Sebuah metode menghafal Al Qur’an yang mudah diikuti oleh semua kalangan. Telah diikuti lebih dari 10.000 peserta dari seluruh Indonesia setiap hari In syaa Allah menjadi solusi untuk Anda yang belum bisa baca, baru mau belajar, masih terbata-bata dalam membaca Al Qur’an atau yang ingin menghafal Al Qur’an dengan cara yang mudah dan menyenangkan</p>
          </section>
          <section className="border-2 shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)] rounded-lg mx-1 p-4 md:w-[45%] md:mt-10">
            <ul className="list-disc pl-4 text-[18px] md:text-[21px]">
              <li>Hafal Nama Surat</li>
              <li>Hafal Nomor Surat</li>
              <li>Hafal Nomor Halaman</li>
              <li>Hafal Posisi (Kanan dan Kiri)</li>
              <li>Hafal Nomor Juz</li>
              <li>Tempat Turun Surat</li>
              <li>Hafal Ayat</li>
              <li>Hafal Nomor Ayat</li>
              <li>Hafal Arti Perkata</li>
              <li>Hafal Makna Ayat</li>
              <li>Hafal Awal Ayat</li>
              <li>Hafal Tengah Ayat</li>
              <li>Hafal Akhir Ayat</li>
              <li>Hafal Jumlah Ayat</li>
            </ul>
          </section>
        </article>
    </section>
  )
}

export default About