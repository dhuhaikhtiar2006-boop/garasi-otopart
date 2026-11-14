
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Produk = {
  id: number;
  name: string;
  brand: string;
  category: string;
  viscosity: string;
  price: number;
  image_url: string | null;
};

export default function HargaPage() {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState(true);
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    async function ambilProduk() {
      const { data, error } = await supabase
  .from("garasi otoparst")
  .select("*")
  .order("brand");

      if (error) {
        setPesan("Gagal mengambil produk: " + error.message);
      } else {
        setProduk(data || []);
      }

      setLoading(false);
    }

    ambilProduk();
  }, []);

  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <header className="border-b border-white/10 bg-black px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-xl font-black">
            GARASI <span className="text-red-500">OTOPARTS</span>
          </Link>
          <Link href="/" className="text-sm text-gray-300 hover:text-red-500">
            ← Kembali
          </Link>
        </div>
      </header>

      <section className="px-6 py-14 text-center">
        <p className="font-bold tracking-[5px] text-red-500">
          GARASI OTOPARTS MEDAN
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          KATALOG <span className="text-red-500">OLI</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Produk ADNOC dan Shell
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {loading && (
          <p className="text-center text-gray-400">
            Memuat produk...
          </p>
        )}

        {pesan && (
          <p className="text-center text-red-500">{pesan}</p>
        )}

        {!loading && !pesan && produk.length === 0 && (
          <p className="text-center text-gray-400">
            Belum ada produk. Silakan tambahkan melalui database.
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {produk.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b]"
            >
              <div className="flex h-52 items-center justify-center bg-[#252525]">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-5xl font-black text-red-500">
                    {item.brand}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-sm font-bold text-red-500">
                  {item.brand}
                </p>
                <h2 className="mt-2 text-xl font-bold">{item.name}</h2>
                <p className="mt-2 text-gray-400">
                  {item.viscosity}
                </p>
                <p className="mt-4 text-xl font-black">
                  {item.price > 0
                    ? "Rp " + item.price.toLocaleString("id-ID")
                    : "Harga segera tersedia"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Garasi Otoparts Medan
      </footer>
    </main>
  );
}
