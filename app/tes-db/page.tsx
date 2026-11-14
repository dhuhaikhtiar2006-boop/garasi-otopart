"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TesDatabase() {
  const [pesan, setPesan] = useState("Menghubungkan ke database...");

  useEffect(() => {
    async function tesKoneksi() {
      const { error } = await supabase
        .from("garasi otoparst")
        .select("id")
        .limit(1);

      if (error) {
        setPesan("Koneksi gagal: " + error.message);
      } else {
        setPesan("BERHASIL! Database Garasi Otoparts terhubung.");
      }
    }

    tesKoneksi();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl font-bold">
        Tes Database Garasi Otoparts
      </h1>
      <p className="mt-4">{pesan}</p>
    </main>
  );
}