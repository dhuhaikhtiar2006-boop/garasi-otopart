
import { supabase } from "@/lib/supabase";
const services = [


  {
    number: "01",
    title: "SERVICE MOBIL",
    description: "Perawatan dan perbaikan kendaraan agar tetap prima.",
  },
  {
    number: "02",
    title: "PERBAIKAN MESIN",
    description: "Pemeriksaan dan perbaikan berbagai masalah mesin.",
  },
  {
    number: "03",
    title: "DIAGNOSTIC SCANNER",
    description: "Pengecekan sistem elektronik dan kerusakan kendaraan.",
  },
  {
    number: "04",
    title: "SPAREPART & AKSESORIS",
    description: "Penjualan berbagai kebutuhan dan perlengkapan otomotif.",
  },
  {
    number: "05",
    title: "TUNE UP MOBIL",
    description: "Penyetelan dan perawatan mesin untuk performa optimal.",
  },
  {
    number: "06",
    title: "OVERHAUL MESIN",
    description: "Pembongkaran dan perbaikan komponen mesin.",
  },
  {
    number: "07",
    title: "KELISTRIKAN MOBIL",
    description: "Pemeriksaan dan perbaikan sistem kelistrikan kendaraan.",
  },
  {
    number: "08",
    title: "PERBAIKAN KAKI-KAKI",
    description: "Perbaikan suspensi, kemudi, dan komponen kaki-kaki.",
  },
  {
    number: "09",
    title: "SERVICE AC MOBIL",
    description: "Pemeriksaan dan perawatan sistem pendingin kabin.",
  },
  {
    number: "10",
    title: "RESET & PROGRAM ECU",
    description: "Pemeriksaan dan penanganan sistem kontrol elektronik.",
  },
  {
    number: "11",
    title: "SERVICE RACING",
    description: "Perawatan, penyetelan, dan peningkatan performa kendaraan racing.",
  },
  {
    number: "12",
    title: "MODIFIKASI",
    description: "Modifikasi kendaraan sesuai konsep dan keinginan pelanggan.",
  },
];


const gallery = [
  "/bengkel1.jpg",
  "/bengkel2.jpg",
  "/bengkel3.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/95 px-6 py-5 md:px-14">
        <a href="#" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Logo Garasi Otoparts"
    className="h-16 w-16 object-contain"
  />
  <div>
    <h1 className="text-xl font-black">
      GARASI <span className="text-red-600">OTOPARTS</span>
    </h1>
    <p className="text-[10px] tracking-[4px] text-gray-400">
      MEDAN - CAR AUTOMOTIVE SHOP
    </p>
  </div>
</a>

        
<div className="flex flex-wrap gap-5 text-sm font-semibold">
  <a href="#layanan" className="hover:text-red-500">Layanan</a>
  <a href="#galeri" className="hover:text-red-500">Galeri</a>
  <a href="/harga" className="hover:text-red-500">Harga</a>
  <a href="#kontak" className="hover:text-red-500">Kontak</a>
</div>

      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28 md:px-16 md:py-36">
        <div className="absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative max-w-4xl">
          <p className="font-bold tracking-[5px] text-red-500">
            WELCOME TO GARASI OTOPARTS MEDAN
          </p>

          <h1 className="mt-7 text-5xl font-black leading-tight md:text-8xl">
            YOUR CAR.
            <br />
            <span className="text-red-600">OUR PRIORITY.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Solusi kebutuhan otomotif Anda. Mulai dari perawatan,
            perbaikan kendaraan hingga kebutuhan sparepart dan aksesoris.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/6285257053523"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-green-600 px-8 py-4 font-bold hover:bg-green-700"
            >
              Chat WhatsApp
            </a>

            <a
              href="#layanan"
              className="rounded-lg border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-white/10 bg-[#151515] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold tracking-[4px] text-red-500">ABOUT US</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            TENTANG GARASI OTOPARTS
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-gray-400">
            Garasi Otoparts hadir untuk membantu memenuhi kebutuhan
            perawatan dan perbaikan kendaraan Anda. Kami mengutamakan
            pelayanan dan kualitas pekerjaan untuk setiap pelanggan.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold tracking-[4px] text-red-500">OUR SERVICES</p>
          <h2 className="mt-4 text-4xl font-black">
            LAYANAN <span className="text-red-600">KAMI</span>
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-xl border border-white/10 bg-[#171717] p-7 transition hover:-translate-y-1 hover:border-red-600"
              >
                <p className="text-3xl font-black text-red-600">
                  {service.number}
                </p>
                <h3 className="mt-7 font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* GALLERY */}
<section id="galeri" className="bg-[#151515] px-6 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <p className="font-bold tracking-[4px] text-red-500">OUR GALLERY</p>
    <h2 className="mt-4 text-4xl font-black">
      GALERI <span className="text-red-600">BENGKEL</span>
    </h2>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {["dokumen1.png", "dokumen2.png", "dokumen3.png"].map((photo) => (
        <a
          key={photo}
          href={`/${photo}`}
          target="_blank"
          rel="noreferrer"
          className="overflow-hidden rounded-xl border border-white/10"
        >
          <img
            src={`/${photo}`}
            alt="Dokumentasi Garasi Otoparts"
            className="h-64 w-full object-cover"
          />
        </a>
      ))}
    </div>
  </div>
</section>


      {/* KATALOG HARGA */}
<section id="katalog" className="bg-[#101010] px-6 py-24 md:px-16">
  <div className="mx-auto max-w-6xl">
    <p className="font-bold tracking-[4px] text-red-500">
      OUR CATALOG
    </p>
    <h2 className="mt-4 text-4xl font-black">
      KATALOG <span className="text-red-600">HARGA</span>
    </h2>
    <p className="mt-4 text-gray-400">
      Lihat katalog Garasi Otoparts Medan.
    </p>

    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {["katalog1.jpg", "katalog2.jpg", "katalog3.jpg"].map((foto) => (
        <a key={foto} href={`/${foto}`} target="_blank" rel="noreferrer">
          <img
            src={`/${foto}`}
            alt="Katalog Garasi Otoparts"
            className="h-auto w-full rounded-xl border border-white/10"
          />
        </a>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="kontak" className="px-6 py-24 text-center md:px-16">
        <p className="font-bold tracking-[4px] text-red-500">CONTACT US</p>
        <h2 className="mt-4 text-4xl font-black">
          HUBUNGI <span className="text-red-600">KAMI</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          Silakan hubungi kami untuk informasi layanan dan kebutuhan
          otomotif kendaraan Anda.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.instagram.com/garasiotopartmedan/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-red-600 px-7 py-4 font-bold hover:opacity-90"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/6285257053523"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-green-600 px-7 py-4 font-bold hover:bg-green-700"
          >
            WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Garasi+Otoparts+Medan"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/30 px-7 py-4 font-bold hover:bg-white/10"
          >
            Google Maps
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-white/10 bg-[#151515] p-7">
          <h3 className="font-bold text-red-500">ALAMAT BENGKEL</h3>
          <p className="mt-4 leading-7 text-gray-300">
            Jl. Setia Budi No. 213
            <br />
            Di belakang Intermezzo Billiard, Medan
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">
        <h3 className="font-black">
          <span className="text-red-600">GARASI</span> OTOPARTS
        </h3>
        <p className="mt-2 text-xs tracking-[3px] text-gray-500">
          CAR AUTOMOTIVE SHOP
        </p>
        <p className="mt-5 text-xs text-gray-600">
          © 2026 Garasi Otoparts Medan. All Rights Reserved.BYE DIB CAPITAL
                  
        </p>
      </footer>

    </main>
  );
}
