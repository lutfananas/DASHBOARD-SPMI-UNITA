// ============================================================
// DATA SPMI - 33 STANDAR + 8 IKU + AMI MULTI-TAHUN
// ------------------------------------------------------------
// Tahun 2021-2022: kosong (belum ada data AMI)
// Tahun 2023    : kosong (tidak ada dokumen AMI TA 2022/2023 yang tersedia)
// Tahun 2024    : AMI TA 2023/2024 berdasarkan Permendikbudristek 53/2023
//                 (Sumber: 20 dokumen AMI dari PPM UNITA, folder GDrive SPMI UPLOAD 2023-2024)
// Tahun 2025    : AMI TA 2024/2025 berdasarkan Permen 39/2025
//                 (Sumber: 15 dokumen AMI dari PPM UNITA)
// ============================================================

export type KategoriStandar = "Pendidikan" | "Penelitian" | "PkM" | "Tambahan";
export type StatusAMI = "MS" | "ML" | "BS" | "MSV";

export interface StandarSPMI {
  no: number;
  nama: string;
  kode: string;
  kategori: KategoriStandar;
  rujukanPasal?: string;
  penanggungJawab: string;
  ami: Record<number, {
    skor: number;
    status: StatusAMI;
    temuan: number;
    ptK: number;
    tindakLanjut: number;
    catatan: string;
    dokumenAMI?: string;
    tanggalAMI?: string;
  } | null>;
}

export interface IKU {
  no: number;
  nama: string;
  unit: string;
  baseline2025: number | string;
  target2030: number | string;
  capaian: Record<number, number | string | null>;
  trend: "up" | "down" | "stable";
}

export interface DokumenMutu {
  kode: string;
  nama: string;
  halaman: number;
  revisi: string;
  tanggalPenetapan: string;
  status: "Berlaku" | "Revisi" | "Baru";
  matchStandar: string;
}

// ============================================================
// METADATA REGULASI PER TAHUN
// ============================================================
export interface RegulasiTahun {
  tahun: number;
  permen: string;
  judulPermen: string;
  siklus: string;
  tanggalAudit: string;
  sumberData: string;
  totalDokumenAMI: number;
}

export const REGULASI_PER_TAHUN: Record<number, RegulasiTahun> = {
  2021: {
    tahun: 2021, permen: "Permendikbud 3/2020",
    judulPermen: "Standar Nasional Pendidikan Tinggi",
    siklus: "PPEPP", tanggalAudit: "-", sumberData: "Tidak ada dokumen AMI", totalDokumenAMI: 0,
  },
  2022: {
    tahun: 2022, permen: "Permendikbud 3/2020",
    judulPermen: "Standar Nasional Pendidikan Tinggi",
    siklus: "PPEPP", tanggalAudit: "-", sumberData: "Tidak ada dokumen AMI", totalDokumenAMI: 0,
  },
  2023: {
    tahun: 2023, permen: "Permendikbud 3/2020 & 5/2020",
    judulPermen: "SN-Dikti & Akreditasi Prodi/PT",
    siklus: "PPEPP (Penetapan-Pelaksanaan-Evaluasi-Pengendalian-Peningkatan)",
    tanggalAudit: "17 Januari 2023 s.d. 14 Agustus 2023",
    sumberData: "14 dokumen AMI dari PPM UNITA (folder GDrive LAPORAN MONEV + PENDIDIKAN)",
    totalDokumenAMI: 14,
  },
  2024: {
    tahun: 2024, permen: "Permendikbudristek 53/2023",
    judulPermen: "Penjaminan Mutu Pendidikan Tinggi",
    siklus: "PPEPP (Penetapan-Pelaksanaan-Evaluasi-Pengendalian-Peningkatan)",
    tanggalAudit: "10 November 2023 s.d. 4 Agustus 2024",
    sumberData: "20 dokumen AMI dari PPM UNITA (folder SPMI UPLOAD 2023-2024)",
    totalDokumenAMI: 20,
  },
  2025: {
    tahun: 2025, permen: "Permen 39/2025",
    judulPermen: "Penjaminan Mutu Pendidikan Tinggi",
    siklus: "PPEPP", tanggalAudit: "Sepanjang TA 2024/2025",
    sumberData: "15 dokumen AMI dari PPM UNITA", totalDokumenAMI: 15,
  },
};

// ============================================================
// 33 STANDAR SPMI - DATA AMI 2024 (PERMEN 53/2023) & 2025 (PERMEN 39/2025)
// ============================================================
export const STANDAR_SPMI: StandarSPMI[] = [
  // === 8 STANDAR PENDIDIKAN ===
  {
    no: 1, nama: "Standar Kompetensi Lulusan", kode: "SKL", kategori: "Pendidikan",
    rujukanPasal: "Pasal 6-10", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 85, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 86,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 Ganjil & Genap (Bab III poin 3 - Standar Kompetensi Lulusan). Prodi review kebutuhan dunia kerja up-to-date, adaptif via Asosiasi/Ikatan Alumni. Skor institusi 3,475/4 (87%). Saran: benchmarking kurikulum rutin.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap (21 Feb 2023 & 14 Agustus 2023)",
        tanggalAMI: "21 Februari 2023 & 14 Agustus 2023",
      },
      2024: {
        skor: 88, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 90,
        catatan: "Lulusan terserap DUDI 80% (≥70%), wirausahawan 15% (≥10%), IPK 3,42 (≥3,00), masa studi 4,0 thn (≤4,5), masa tunggu 4 bln (≤6). Seluruh 5 indikator Mencapai Standar.",
        dokumenAMI: "AMI Pendidikan 2023 (Monev 4 Maret 2024)",
        tanggalAMI: "8 Juli 2024",
      },
      2025: {
        skor: 87, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Lulusan terserap DUDI 86,50%, IPK rata-rata 3,48, masa studi 3,8 thn, masa tunggu 3,2 bln. Lulusan wirausahawan 18,20%. Semua indikator Tercapai.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025",
      },
    }
  },
  {
    no: 2, nama: "Standar Proses Pembelajaran", kode: "SPB", kategori: "Pendidikan",
    rujukanPasal: "Pasal 11-24", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 87, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 88,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 Ganjil & Genap, skala Likert 1-4. Ganjil: 7 Prodi skor range 3,20-3,60, avg 3,44 (Agribisnis 3,45; Adm Publik 3,56; Akuntansi 3,24; Hukum 3,60; Manajemen 3,20; Teknik Sipil 3,40; Teknik Elektro 3,60). Genap: range 3,30-3,70, avg 3,51 (Agribisnis 3,60; Adm Publik 3,70; Akuntansi 3,40; Hukum 3,30; Manajemen 3,50; Teknik Sipil 3,70; Teknik Elektro 3,40). Rata-rata institusi TA 2022/2023: 3,475/4 (87%) = Baik. Saran: dosen lebih kreatif/inovatif, metode interaktif bervariasi, tambah referensi.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        tanggalAMI: "21 Februari 2023 & 14 Agustus 2023",
      },
      2024: {
        skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 86,
        catatan: "Bahan ajar 100% mutakhir, RPS ditinjau 2x/thn, 35 mhs/kelas (≤40), blended 25% (≥20%), monitoring 2x/semester. Ganjil avg 3,45 (FISIP), Genap avg 3,30 (Univ). P7 (Biaya Kuliah) 3,0 dan P13 (Surat Mahasiswa) 3,1 menjadi area perbaikan.",
        dokumenAMI: "AMI Proses Pembelajaran Gasal 2023 + AMI Pelayanan Mahasiswa Genap 2032",
        tanggalAMI: "4 Agustus 2024",
      },
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 92,
        catatan: "Skor rata-rata kepuasan 3,54 (Likert 1-4). Ganjil 3,49 → Genap 3,59. Seluruh fakultas meningkat. Metode daring skor terendah namun di atas rata-rata.",
        dokumenAMI: "AMI PROSES PEMBELAJARAN GANJIL & GENAP 2024-2025",
      },
    }
  },
  {
    no: 3, nama: "Standar Penilaian", kode: "SPN", kategori: "Pendidikan",
    rujukanPasal: "Pasal 25", penanggungJawab: "GKM",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 84, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 85,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 8 - Standar Penilaian Hasil Pendidikan). Hasil penilaian ditampilkan di mading & diinput ke SIAKAD. Skor estimasi 84%. Saran: transparansi nilai ditingkatkan.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        tanggalAMI: "21 Februari 2023 & 14 Agustus 2023",
      },
      2024: {
        skor: 88, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 90,
        catatan: "100% dosen menerapkan berbagai teknik penilaian, memberi umpan balik, prosedur lengkap, dan input nilai ≤10 hari kerja. Konsistensi penilaian sangat baik.",
        dokumenAMI: "AMI Pendidikan 2023 (Standar D - Penilaian)",
        tanggalAMI: "8 Juli 2024",
      },
      2025: {
        skor: 85, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Penilaian di SIAKAD tervalidasi. Feedback dosen terdokumentasi. Rubrik penilaian berbasis OBE mulai diterapkan. Beberapa prodi belum konsisten rubrik.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025",
      },
    }
  },
  {
    no: 4, nama: "Standar Pengelolaan", kode: "SPP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 26-30", penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 83, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 84,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 6 - Standar Pengelolaan). Penyesuaian kalender akademik, dosen didorong studi lanjut, rekonstruksi kurikulum berkala. Skor estimasi 83%.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        tanggalAMI: "21 Februari 2023 & 14 Agustus 2023",
      },
      2024: {
        skor: 86, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 88,
        catatan: "Dokumen RPS, laporan evaluasi, input nilai online (Sisformik) 100% tersedia. Wawancara Prodi tentang siklus PPEPP dilakukan. Pengelolaan pendidikan berjalan baik.",
        dokumenAMI: "AMI Pendidikan 2023 (Standar G - Pengelolaan)",
        tanggalAMI: "8 Juli 2024",
      },
      2025: {
        skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Rasio mahasiswa per dosen pembimbing 16:1 (target ≤20:1). Dashboard SPMI mulai berfungsi. Mekanisme PPEPP terintegrasi.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025",
      },
    }
  },
  {
    no: 5, nama: "Standar Isi", kode: "SIS", kategori: "Pendidikan",
    rujukanPasal: "Pasal 31-39", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 85, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 86,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 1 - Standar Isi). Kurikulum disusun matang dengan memperhatikan faktor pasar kerja. Perlu updating rutin & benchmarking. 7 Prodi: Agribisnis, Adm Publik, Akuntansi, Hukum, Manajemen, Teknik Sipil, Teknik Elektro.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        tanggalAMI: "21 Februari 2023 & 14 Agustus 2023",
      },
      2024: {
        skor: 87, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 89,
        catatan: "Dokumen kurikulum & silabus 100% tersedia. Matriks/peta kurikulum lengkap. Tinjauan kurikulum 2x/thn (≥1). Rasio mhs/dosen PA 18 (≤20). Rasio mhs/dosen TA 12 (≤10, perlu perhatian). Pertemuan bimbingan 4x/sem (≥3).",
        dokumenAMI: "AMI Pendidikan 2023 (Standar B - Isi)",
        tanggalAMI: "8 Juli 2024",
      },
      2025: {
        skor: 83, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 86,
        catatan: "Ketersediaan dokumen kurikulum 100%. Frekuensi tinjauan kurikulum 2x/tahun. Rasio dosen pembimbing TA 8:1 (dari 12:1). OBE mulai diterapkan.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025",
      },
    }
  },
  {
    no: 6, nama: "Standar Dosen & Tenaga Kependidikan", kode: "SDT", kategori: "Pendidikan",
    rujukanPasal: "Pasal 40-45", penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 83, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 85,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 4 - Standar Tenaga Pendidik) & AMI SDM 15 April 2023. Kualitas dosen baik, perlu pengembangan: kreativitas/inovasi mengajar, disiplin waktu, perbanyak latihan praktikum. Tambah teknisi lab, kembangkan tenaga pendukung. 9 dosen studi lanjut. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Adm jarang dilibatkan seminar.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI SDM 2022-2023",
        tanggalAMI: "21 Februari 2023, 14 Agustus 2023 & 15 April 2023",
      },
      2024: {
        skor: 82, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 84,
        catatan: "Dosen: 80% berkepangkatan (20% belum), 60%+ sertifikasi dosen. BKD 100% terpenuhi. Tendik: Pustakawan 75%, Laboran 80%, IT 85%, Administrasi 70% kompeten. Perlu pelatihan lebih lanjut.",
        dokumenAMI: "AMI SDM 2023 (Monev 15 Juni 2024)",
        tanggalAMI: "15 Juni 2024",
      },
      2025: {
        skor: 89, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 88,
        catatan: "Total SDM 93 orang. Sertifikasi pendidik 94,60% (target 100%, BELUM TERCAPAI). Dosen Lektor+ 78,40%. Tendik kualifikasi S2 96,40% (BELUM TERCAPAI). Realisasi anggaran SDM 88,70%. 16/18 indikator Tercapai, 2 Belum Tercapai.",
        dokumenAMI: "AMI SDM 2024-2025",
      },
    }
  },
  {
    no: 7, nama: "Standar Sarana & Prasarana", kode: "SSP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 46-47", penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 80, status: "BS", temuan: 5, ptK: 3, tindakLanjut: 82,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 5 - Standar Sarana & Prasarana) & AMI Sarpras 20 Maret 2023. Fasilitas perlu ditingkatkan: perpustakaan (referensi buku/jurnal/tesis), laboratorium, akses komputer & Wi-Fi, fasilitas kesehatan & keamanan. 46 item inventaris: rata-rata BAIK. Perangkat perlu upgrade: Laptop 15, Komputer 78, Printer 25, LCD 25, Scanner 8, Stand LCD 22, Diesel 1, Mobil 2, Bus 1. Rekomendasi: tambah Lab Teknik Elektro.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI Sarpras 2022-2023",
        tanggalAMI: "21 Februari 2023, 14 Agustus 2023 & 20 Maret 2023",
      },
      2024: {
        skor: 83, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80,
        catatan: "Sarana: 24/29 jenis (83%) baik, 5/29 (17%) kurang baik (Lap. Basket/Voli/Silat, Studio Musik, R. Kesehatan). Prasarana: 6/9 (84%) baik, 3/9 (16%) kurang (Scanner 8 unit, Stand LCD 22 unit, Diesel 1 unit). 47 item diperiksa.",
        dokumenAMI: "AMI Sarana dan Prasarana 2023 (Monev 24-27 Maret 2024)",
        tanggalAMI: "24 Maret 2024",
      },
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Sarana baik 95,20% (dari 83% di 2023). Prasarana baik 95,80% (dari 84%). Peningkatan signifikan. Beberapa scanner, stand LCD, diesel perlu perbaikan.",
        dokumenAMI: "AMI SARANA DAN PRASARANA 2024-2025",
      },
    }
  },
  {
    no: 8, nama: "Standar Pembiayaan", kode: "SPM", kategori: "Pendidikan",
    rujukanPasal: "Pasal 48-51", penanggungJawab: "BAKU / SPI",
    ami: {
      2021: null, 2022: null,
      2023: {
        skor: 80, status: "BS", temuan: 4, ptK: 3, tindakLanjut: 82,
        catatan: "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 7 - Standar Pembiayaan) & AMI Keuangan 3 Mei 2023. Biaya pendidikan sesuai tuntutan mahasiswa & standar Pendidikan Tinggi. APB UNITA Rp 10.319.370.000, penggunaan Rp 10.941.870.000 → DEFISIT Rp 622.500. Sistem keuangan tersentral. Rekomendasi: sinkronisasi Renstra & Renop dengan APB tahunan.",
        dokumenAMI: "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI Keuangan 2022-2023",
        tanggalAMI: "21 Februari 2023, 14 Agustus 2023 & 3 Mei 2023",
      },
      2024: {
        skor: 75, status: "BS", temuan: 6, ptK: 4, tindakLanjut: 78,
        catatan: "Biro Adm. Keuangan menyerap anggaran terbesar (Rp 9,2 M / 69%). Fokus pada layanan mahasiswa (kegiatan kemahasiswaan, wisuda, PMB). TERJADI DEFISIT hampir Rp 1,9 M (pengeluaran > pendapatan). Diversifikasi sumber pendanaan mendesak.",
        dokumenAMI: "AMI Keuangan 2023 (Monev 13-15 Mei 2024)",
        tanggalAMI: "15 Mei 2024",
      },
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Realisasi pendapatan 95,20% dari target RENOP. Belanja operasional 94,80%. Belanja kemahasiswaan 95,60%. Belanja penelitian 96,10%. Total pendapatan target Rp28.400 juta. Semua indikator Tercapai.",
        dokumenAMI: "AMI KEUANGAN 2024-2025",
      },
    }
  },

  // === 8 STANDAR PENELITIAN ===
  {
    no: 9, nama: "Standar Luaran Penelitian", kode: "PEN-LRN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 95, status: "ML", temuan: 1, ptK: 1, tindakLanjut: 96,
        catatan: "Penelitian sesuai kode etik 100%. Relevansi dengan pendidikan & IPTEK: 85% libatkan mahasiswa, 15 raih HAKI. Publikasi: 12 jurnal internasional, 35 jurnal nasional terakreditasi, 18 seminar nasional/internasional. Semua MELEBIHI standar.",
        dokumenAMI: "AMI Penelitian 2023 (Monev 15 Juli 2024)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 94, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Publikasi ilmiah 95,60% (10 dokumen/prodi). HKI 93,40% (meningkat/tahun). Sitasi 90,80%. Adopsi industri 88,50%. Semua Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 10, nama: "Standar Proses Penelitian", kode: "PEN-PRS", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 96, status: "ML", temuan: 1, ptK: 1, tindakLanjut: 97,
        catatan: "Perencanaan awal tahun: roadmap & jadwal penelitian tersedia di semua Prodi. Pelaksanaan 100% tepat waktu, monitoring aktif. Evaluasi sistematis tiap akhir semester. Semua MELEBIHI standar.",
        dokumenAMI: "AMI Penelitian 2023 (Standar C - Proses)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 95, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Panduan penelitian tersedia 100%. Sosialisasi terlaksana 100%. Laporan akhir 96,80%. Integrasi ke RPS 93,50%. Kesesuaian roadmap 97,20%.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 11, nama: "Standar Masukan Penelitian", kode: "PEN-MSK", kategori: "Penelitian",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 95, status: "ML", temuan: 2, ptK: 1, tindakLanjut: 94,
        catatan: "Sarana & prasarana: 95% penelitian gunakan sarpras kampus. Kontrak penelitian 100% terdokumentasi di LPPM. Rencana induk pengembangan tersedia di semua Prodi. SOP & dokumen penilaian aktif digunakan.",
        dokumenAMI: "AMI Penelitian 2023 (Standar F & G)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 91, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 90,
        catatan: "Pendanaan penelitian dari RENOP. Fasilitas dan infrastruktur penelitian memadai. SDM peneliti tersertifikasi. Sistem informasi terintegrasi.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 12, nama: "Standar Hasil Penelitian", kode: "PEN-HSL", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 95, status: "ML", temuan: 1, ptK: 1, tindakLanjut: 95,
        catatan: "Kualitas publikasi: 12 internasional, 35 nasional. 95% penelitian sesuai roadmap LPPM. Hasil penelitian diadopsi untuk pembelajaran dan masyarakat. Semua MELEBIHI standar.",
        dokumenAMI: "AMI Penelitian 2023 (Standar B - Isi)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 93,
        catatan: "Adopsi industri 88,50%. Sitasi 90,80%. Integrasi RPS 93,50%. Hasil penelitian diadopsi untuk pembelajaran dan masyarakat.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 13, nama: "Standar Publikasi Ilmiah Penelitian", kode: "PEN-PUB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 94, status: "ML", temuan: 2, ptK: 1, tindakLanjut: 95,
        catatan: "12 jurnal internasional + 35 jurnal nasional terakreditasi + 18 seminar nasional/internasional. Rekomendasi: tingkatkan ke 100% publikasi internasional dengan insentif khusus.",
        dokumenAMI: "AMI Penelitian 2023 (Standar A - Hasil)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 94, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 94,
        catatan: "Publikasi 95,60% (10 dokumen/prodi/tahun). Sitasi 90,80%. Buku ilmiah meningkat. Semua indikator Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 14, nama: "Standar Paten & HKI Penelitian", kode: "PEN-PTN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 93, status: "ML", temuan: 2, ptK: 1, tindakLanjut: 92,
        catatan: "15 penelitian meraih HAKI. 5 penelitian mendapat penghargaan nasional. Kolaborasi: 40 dosen terlibat penelitian kolaboratif. 22 penelitian mendapat hibah nasional/internasional. Semua MELEBIHI standar.",
        dokumenAMI: "AMI Penelitian 2023 (Standar A & E)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 90,
        catatan: "HKI (Paten, Hak Cipta, Desain) 93,40% (meningkat/tahun). Adopsi industri 88,50%. Semua Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 15, nama: "Standar Diseminasi Penelitian", kode: "PEN-DSM", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "ML", temuan: 2, ptK: 1, tindakLanjut: 90,
        catatan: "Evaluasi dilakukan sistematis tiap akhir semester. 18 seminar nasional/internasional sebagai bentuk diseminasi. Semua penelitian direview eksternal melalui seminar hasil.",
        dokumenAMI: "AMI Penelitian 2023 (Standar C & D)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 90, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 88,
        catatan: "Sosialisasi dan pelatihan terkait penelitian terlaksana 100%. Diseminasi melalui seminar dan forum ilmiah. Perlu peningkatan forum internasional.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },
  {
    no: 16, nama: "Standar Kolaborasi Penelitian", kode: "PEN-KLB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 92, status: "ML", temuan: 2, ptK: 1, tindakLanjut: 92,
        catatan: "40 dosen terlibat penelitian kolaboratif. 18 penelitian didanai pihak luar (pemerintah, mitra industri). 88% dosen telah ikuti pelatihan metodologi. Pendanaan eksternal mencapai 90%.",
        dokumenAMI: "AMI Penelitian 2023 (Standar E & H)",
        tanggalAMI: "15 Juli 2024",
      },
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 86,
        catatan: "Proporsi skema penelitian 96,80%. Kerjasama dengan mitra industri perlu peningkatan. Kolaborasi antar-prodi mulai berkembang.",
        dokumenAMI: "AMI PENELITIAN 2024-2025",
      },
    }
  },

  // === 8 STANDAR PkM ===
  {
    no: 17, nama: "Standar Luaran PkM", kode: "PKM-LRN", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 92,
        catatan: "PkM > 50 desa, 14 institusi mitra. 8 jurnal nasional + 2 jurnal internasional dari PkM. 5 bahan ajar, 6 modul pelatihan, 2 penghargaan nasional, 4 paten, 9 inovasi diterapkan. 92% masyarakat sangat puas, 8% puas.",
        dokumenAMI: "AMI PKM 2023 (Monev 22 Juli 2024)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 95, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Publikasi PkM 94,50%. HKI/TTG 93,80%. Adopsi masyarakat 91,20%. Penyelesaian masalah mitra 96,80%. Semua Tercapai.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 18, nama: "Standar Proses PkM", kode: "PKM-PRS", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 91, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 92,
        catatan: "36 proposal masuk, 32 kegiatan dilaksanakan (89% konversi). 19 kegiatan libatkan mahasiswa. Semua laporan sah dan termonitor. Pedoman penulisan dan peta keahlian dosen tersedia.",
        dokumenAMI: "AMI PKM 2023 (Standar 8 - Proses)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 96, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 97,
        catatan: "Panduan PkM tersedia 100%. Sosialisasi 100%. Laporan akhir 96,20%. Integrasi ke RPS 92,80%. Kesesuaian roadmap 95,40%.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 19, nama: "Standar Masukan PkM", kode: "PKM-MSK", kategori: "PkM",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 90,
        catatan: "Dana internal PkM Rp 250 juta/tahun. 100% kegiatan PkM gunakan fasilitas kampus (lab, mobil kampus, alat TTG). Renstra PkM 2023-2027 dan panduan operasional tersedia.",
        dokumenAMI: "AMI PKM 2023 (Standar 11-13)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 92,
        catatan: "Pendanaan PkM dari RENOP. SDM pengabdi tersertifikasi. Fasilitas penunjang PkM memadai. Sistem informasi PkM mulai berfungsi.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 20, nama: "Standar Hasil PkM", kode: "PKM-HSL", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 88, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 88,
        catatan: "Survei masyarakat: 92% sangat puas, 8% puas. 4 paten, 9 inovasi diterapkan. 5 bahan ajar dari PkM diintegrasikan ke RPS. TTG hanya 20% (di bawah target 100%) - area perbaikan utama.",
        dokumenAMI: "AMI PKM 2023 (Standar 9 - Penilaian)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 94, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 95,
        catatan: "Adopsi hasil PkM oleh masyarakat 91,20%. Penyelesaian masalah mitra 96,80%. TTG meningkat dari 20% (2023). Semua Tercapai.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 21, nama: "Standar Publikasi PkM", kode: "PKM-PUB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 90,
        catatan: "8 jurnal nasional + 2 jurnal internasional dari hasil PkM. Sertifikat dan link publikasi terlampir. 20 publikasi kegiatan. Rekomendasi: dorong publikasi internasional lebih banyak.",
        dokumenAMI: "AMI PKM 2023 (Standar 7 - Isi)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 92,
        catatan: "Publikasi ilmiah dari PkM 94,50% (meningkat/tahun). Diseminasi melalui forum dan media. Perlu peningkatan publikasi internasional.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 22, nama: "Standar Produk & Jasa PkM", kode: "PKM-PRD", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 70, status: "BS", temuan: 5, ptK: 3, tindakLanjut: 75,
        catatan: "TTG hanya 20% (target 100%) - satu-satunya indikator BELUM TERCAPAI. 13 alat inovatif digunakan di 11 desa. 4 paten diterapkan. Perlu kolaborasi lintas bidang (teknik, sains, pertanian, kesehatan) untuk TTG.",
        dokumenAMI: "AMI PKM 2023 (Standar 2 - TTG)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 90,
        catatan: "HKI/TTG 93,80% (meningkat/tahun). Produk PkM diadopsi masyarakat. TTG masih perlu peningkatan dari 20% (2023).",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 23, nama: "Standar Diseminasi PkM", kode: "PKM-DSM", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 88,
        catatan: "100% kegiatan PkM terlaksana tepat waktu. 95% kegiatan sesuai keahlian dosen. Survei masyarakat 92% sangat puas. Diseminasi melalui publikasi dan sertifikat.",
        dokumenAMI: "AMI PKM 2023 (Standar 10 - Peneliti)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 91, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 89,
        catatan: "Sosialisasi dan pelatihan PkM 100%. Diseminasi melalui seminar dan media. Perlu peningkatan forum diseminasi tingkat nasional.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 24, nama: "Standar Kolaborasi PkM", kode: "PKM-KLB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 88,
        catatan: "MoU dengan 65 desa dan 14 institusi mitra. 32 kegiatan PkM dilaksanakan dari 36 proposal. 19 kegiatan libatkan mahasiswa. Kolaborasi kuat antar-dosen dan mitra.",
        dokumenAMI: "AMI PKM 2023 (Standar 1 - Penyelesaian)",
        tanggalAMI: "22 Juli 2024",
      },
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 86,
        catatan: "Proporsi skema PkM 95,60%. Jumlah kegiatan PkM progresif 94,20%. Kerjasama dengan mitra luar perlu peningkatan.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025",
      },
    }
  },

  // === 9 STANDAR TAMBAHAN ===
  {
    no: 25, nama: "Standar VMTS", kode: "VMTS", kategori: "Tambahan",
    penanggungJawab: "Senat Universitas",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 76, status: "BS", temuan: 6, ptK: 4, tindakLanjut: 80,
        catatan: "15 indikator Likert 1-4, rata-rata 2.77-3.37. Tertinggi: P12 (integrasi kurikulum) 3.37, P13 (kesempatan aplikasi) 3.30. Terendah: P2 (relevansi visi) 2.77, P15 (inspirasi prestasi) 2.83. Sample 30 responden. Perlu lokakarya strategic review visi.",
        dokumenAMI: "AMI VMTS 2023 (Monev 10 November 2023)",
        tanggalAMI: "10 November 2023",
      },
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90,
        catatan: "Rata-rata keseluruhan 3,54 (Likert 1-4, Sangat Baik). Dosen 3,54, Tendik 3,48. Sosialisasi VMTS berjalan. Pemahaman civitas akademika baik. Perlu peningkatan metode sosialisasi (skor 3,38).",
        dokumenAMI: "AMI VMTS 2024-2025",
      },
    }
  },
  {
    no: 26, nama: "Standar Tata Pamong & Tata Kelola", kode: "TPTK", kategori: "Tambahan",
    penanggungJawab: "Senat / SPI",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 92,
        catatan: "20 indikator Likert 1-4, semua di atas 3.50, range 3.56-3.66. Tertinggi: Indikator 8 (SDM profesional) 3.66, 17 (Penilaian akademik transparan) 3.66, 20 (Evaluasi rutin tata kelola) 3.66. Terendah: Indikator 4 & 16 (pelayanan keluhan & organisasi mahasiswa) 3.58. Sample 50 responden.",
        dokumenAMI: "AMI TPTK 2023 (Monev 3 November 2023)",
        tanggalAMI: "3 November 2023",
      },
      2025: {
        skor: 90, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 92,
        catatan: "Rata-rata keseluruhan 3,59 (Likert 1-4, Sangat Baik). SD 0,58. Tata pamong berjalan baik. Koordinasi antar-unit 3,50. Pelayanan administrasi akademik 3,45 (terendah). Evaluasi ditindaklanjuti 3,52.",
        dokumenAMI: "AMI TPTK 2024-2025",
      },
    }
  },
  {
    no: 27, nama: "Standar Mahasiswa", kode: "MHS", kategori: "Tambahan",
    penanggungJawab: "Wakil Rektor III",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 93, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 94,
        catatan: "13 indikator Likert 1-4, semua di atas 3.65, range 3.65-3.76. Tertinggi: WKK Keikutsertaan 3.76, PMB Registrasi 3.74. Terendah: Tracer Dokumen 3.65, BEM Program Kerja 3.68. SD kecil (±0.44-0.48) menunjukkan persepsi homogen. Sample 500 responden.",
        dokumenAMI: "AMI Mahasiswa 2023 (Monev 4 Maret 2024)",
        tanggalAMI: "4 Maret 2024",
      },
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 94,
        catatan: "AEE PT 92,50% (≥90%). Lulusan bekerja/wirausaha 84,30% (≥80%). Mahasiswa berkegiatan MBKM 68,40% (≥60%). Program integritas akademik 95,00%. Capaian kompetensi lulusan 91,80%. Semua Tercapai.",
        dokumenAMI: "AMI MAHASISWA 2024-2025",
      },
    }
  },
  {
    no: 28, nama: "Standar Sumber Daya Manusia", kode: "SDM", kategori: "Tambahan",
    penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 82, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 84,
        catatan: "Dosen: 80% kinerja penunjang memadai, 20% belum berkepangkatan, 60%+ bersertifikasi. Tendik: Pustakawan 75%, Laboran 80%, IT 85%, Adm 70% kompeten. AMI Kesejahteraan: 18 indikator Likert 1-4, range 3.15-3.55, avg ~3.42. Sample 500 mhs + 50 dosen/tendik.",
        dokumenAMI: "AMI SDM 2023 & AMI Kesejahteraan 2023 (Monev 29 Mei 2024)",
        tanggalAMI: "15 Juni 2024",
      },
      2025: {
        skor: 89, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 88,
        catatan: "Total SDM 93 orang. Sertifikasi pendidik 94,60% (BELUM TERCAPAI, target 100%). Dosen Lektor+ 78,40%. Tendik S2 96,40% (BELUM TERCAPAI). Realisasi anggaran SDM 88,70%. 16/18 indikator Tercapai, 2 Belum Tercapai. AMI Kesejahteraan: rata-rata 96,32% (Sangat Baik).",
        dokumenAMI: "AMI SDM 2024-2025 & AMI KESEJAHTERAAN 2024-2025",
      },
    }
  },
  {
    no: 29, nama: "Standar Keuangan, Sarana, Prasarana", kode: "KSP", kategori: "Tambahan",
    penanggungJawab: "BAKU / BAU / SPI",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 79, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80,
        catatan: "Keuangan: Biro Adm. Keu 69% anggaran (Rp 9,2 M), DEFISIT ~Rp 1,9 M. Sarana: 83% baik (24/29), 17% kurang baik. Prasarana: 84% baik (6/9), 16% kurang. Perlu diversifikasi pendanaan & penggantian scanner/stand LCD/diesel.",
        dokumenAMI: "AMI Keuangan 2023 + AMI Sarana Prasarana 2023",
        tanggalAMI: "15 Mei & 24 Maret 2024",
      },
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Keuangan: realisasi pendapatan 95,20%, belanja operasional 94,80%, kemahasiswaan 95,60%, penelitian 96,10%. Sarana: 95,20% baik (dari 83%). Prasarana: 95,80% baik (dari 84%). Target pendapatan Rp28.400 juta. Semua Tercapai.",
        dokumenAMI: "AMI KEUANGAN 2024-2025 & AMI SARANA DAN PRASARANA 2024-2025",
      },
    }
  },
  {
    no: 30, nama: "Standar Kerjasama", kode: "KJS", kategori: "Tambahan",
    penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 90, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 90,
        catatan: "87 mitra kerjasama (30 Pendidikan, 30 Penelitian, 27 Pengabdian). 7 indikator Likert 1-4, range 3.56-3.96. Tertinggi: Implementasi kegiatan 3.96, Kelanjutan kerjasama 3.94. Terendah: Respons saran 3.56, Kepuasan 3.56. >60% mitra akan melanjutkan.",
        dokumenAMI: "AMI Kerjasama 2023 (Monev 20 Mei 2024)",
        tanggalAMI: "26 Mei 2024",
      },
      2025: {
        skor: 80, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80,
        catatan: "Tidak ada AMI khusus Kerjasama. Data dari AMI MBKM: kerjasama mitra 92,40%. MoU/MoA aktif namun implementasi perlu peningkatan. Perlu AMI khusus untuk Kerjasama.",
        dokumenAMI: "Tidak ada AMI khusus (estimasi dari AMI MBKM)",
      },
    }
  },
  {
    no: 31, nama: "Standar MBKM", kode: "MBKM", kategori: "Tambahan",
    penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 75, status: "BS", temuan: 7, ptK: 5, tindakLanjut: 78,
        catatan: "58 kegiatan MBKM TA 2023/2024 (16 semester 1 + 42 semester 2). Status: 15 (26%) Selesai, 39 (67%) Evaluasi, 4 (7%) Dibatalkan. Dominan Studi/Proyek Independen (35 kegiatan, 60%), Magang (11), Asistensi Mengajar (6). Mitra: Orbit, Arkatama, Revou, Sekolah Ekspor, BPP, dll.",
        dokumenAMI: "AMI MBKM 2023 (Monev 22 April 2024)",
        tanggalAMI: "22 April 2024",
      },
      2025: {
        skor: 96, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Dokumen Standar MBKM 100. Buku Panduan MBKM 100. Pemetaan Mitra 94,20. Kerjasama mitra 92,40. Rata-rata capaian 95,50 (Sangat Baik). Rekognisi & konversi nilai 96,90. SKPI 95,40. Semua indikator Sangat Baik.",
        dokumenAMI: "AMI MBKM 2024-2025",
      },
    }
  },
  {
    no: 32, nama: "Standar Luaran & Capaian Tridharma", kode: "LCT", kategori: "Tambahan",
    penanggungJawab: "PPM",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 87, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 88,
        catatan: "Lulusan terserap 80%, IPK 3,42. Penelitian: 12 jurnal internasional + 35 nasional + 18 seminar, 15 HAKI, 5 penghargaan. PkM: 8+2 publikasi, 4 paten, 9 inovasi, 92% masyarakat puas. TTG 20% (perlu perbaikan).",
        dokumenAMI: "AMI Pendidikan + Penelitian + PKM 2023",
        tanggalAMI: "8 Juli - 22 Juli 2024",
      },
      2025: {
        skor: 88, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 88,
        catatan: "Lulusan terserap 86,50%. IPK 3,48. Publikasi penelitian 95,60%. Publikasi PkM 94,50%. HKI penelitian 93,40%. HKI/TTG PkM 93,80%. Berdasarkan AMI Pendidikan, Penelitian, dan PkM.",
        dokumenAMI: "AMI PENDIDIKAN + PENELITIAN + PENGABDIAN 2024-2025",
      },
    }
  },
  {
    no: 33, nama: "Standar Pelayanan Kepada Mahasiswa", kode: "PKM-MHS", kategori: "Tambahan",
    penanggungJawab: "BAA",
    ami: {
      2021: null, 2022: null, 2023: null,
      2024: {
        skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 85,
        catatan: "Ganjil 2023-1 (3 Feb 2024, FISIP): 20 indikator range 3.26-3.57, avg ~3.45. Genap 2023-2 (4 Aug 2024, Universitas): 20 indikator range 3.0-3.8, avg ~3.30. Terendah: P7 (Biaya Kuliah) 3.0, P13 (Surat Mahasiswa) 3.1, P19 (Kebersihan) 3.1. Tertinggi: P12 (Info organisasi) 3.7-3.8.",
        dokumenAMI: "AMI Pelayanan Mahasiswa Ganjil 2031 & Genap 2032",
        tanggalAMI: "3 Februari & 4 Agustus 2024",
      },
      2025: {
        skor: 88, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Ganjil 3,48 → Genap 3,58 (Likert 1-4, Sangat Baik). 17/20 indikator Sangat Baik (Genap). Tren: 3,42 (2023-1) → 3,48 (2024-1) → 3,58 (2024-2). Info akademik SIAKAD 3,70. Prioritas perbaikan: beasiswa, pendampingan magang.",
        dokumenAMI: "AMI PELAYANAN KEPADA MAHASISWA GANJIL & GENAP 2024-2025",
      },
    }
  },
];

// ============================================================
// 8 IKU - Capaian 2024 & 2025
// ============================================================
export const IKU_LIST: IKU[] = [
  {
    no: 1, nama: "Lulusan terserap DUDI <6 bulan", unit: "Wakil Rektor III",
    baseline2025: 60, target2030: 92,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 80, 2025: 87 },
    trend: "up"
  },
  {
    no: 2, nama: "Mahasiswa mendapat pengalaman luar kampus", unit: "UPPS",
    baseline2025: 20, target2030: 40,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 26, 2025: 68 },
    trend: "up"
  },
  {
    no: 3, nama: "Dosen berkegiatan di luar kampus", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 15, 2025: 15 },
    trend: "up"
  },
  {
    no: 4, nama: "Praktisi mengajar di kampus (per prodi)", unit: "UPPS",
    baseline2025: 2, target2030: 6,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 2, 2025: 2 },
    trend: "up"
  },
  {
    no: 5, nama: "Hasil kerja dosen digunakan masyarakat", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 18, 2025: 18 },
    trend: "up"
  },
  {
    no: 6, nama: "Prodi berkerjasama dengan DUDI (per prodi)", unit: "BAU",
    baseline2025: 3, target2030: 7,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 3, 2025: 3 },
    trend: "up"
  },
  {
    no: 7, nama: "Mata kuliah metode praktik (%)", unit: "UPPS",
    baseline2025: 40, target2030: 60,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 25, 2025: 45 },
    trend: "up"
  },
  {
    no: 8, nama: "Prodi terakreditasi unggul (%)", unit: "UPPS",
    baseline2025: 30, target2030: 70,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: 30, 2025: 30 },
    trend: "up"
  },
];

// ============================================================
// 4 DOKUMEN MUTU
// ============================================================
export const DOKUMEN_MUTU: DokumenMutu[] = [
  {
    kode: "SPMI/PPM/DM/KBJ/2025", nama: "Kebijakan Mutu SPMI", halaman: 65,
    revisi: "01", tanggalPenetapan: "1 September 2025", status: "Baru",
    matchStandar: "Payung strategis untuk seluruh 33 standar SPMI"
  },
  {
    kode: "SPMI/PPM/DM/MNL/2025", nama: "Manual Mutu SPMI", halaman: 55,
    revisi: "01", tanggalPenetapan: "1 September 2025", status: "Baru",
    matchStandar: "Panduan operasional PPEPP untuk 33 standar"
  },
  {
    kode: "SPMI/PPM/DM/STD/2025", nama: "Standar Mutu SPMI", halaman: 312,
    revisi: "01", tanggalPenetapan: "1 September 2025", status: "Baru",
    matchStandar: "33 standar (8 Pendidikan + 8 Penelitian + 8 PkM + 9 Tambahan)"
  },
  {
    kode: "SPMI/PPM/DM/FORM/2025", nama: "Formulir Mutu SPMI", halaman: 132,
    revisi: "01", tanggalPenetapan: "1 September 2025", status: "Baru",
    matchStandar: "38 formulir pendukung PPEPP untuk 33 standar"
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================
export const TAHUN_LIST = [2021, 2022, 2023, 2024, 2025];

export function getStandarByKategori(kategori: KategoriStandar): StandarSPMI[] {
  return STANDAR_SPMI.filter(s => s.kategori === kategori);
}

export function getRataRataSkorAMI(tahun: number): number | null {
  const standarWithData = STANDAR_SPMI.filter(s => s.ami[tahun] !== null);
  if (standarWithData.length === 0) return null;
  const total = standarWithData.reduce((sum, s) => sum + (s.ami[tahun]?.skor || 0), 0);
  return Math.round(total / standarWithData.length);
}

export function getRataRataSkorByKategori(tahun: number, kategori: KategoriStandar): number | null {
  const list = getStandarByKategori(kategori);
  const listWithData = list.filter(s => s.ami[tahun] !== null);
  if (listWithData.length === 0) return null;
  const total = listWithData.reduce((sum, s) => sum + (s.ami[tahun]?.skor || 0), 0);
  return Math.round(total / listWithData.length);
}

export function getTotalTemuan(tahun: number): number | null {
  const standarWithData = STANDAR_SPMI.filter(s => s.ami[tahun] !== null);
  if (standarWithData.length === 0) return null;
  return standarWithData.reduce((sum, s) => sum + (s.ami[tahun]?.temuan || 0), 0);
}

export function getTotalPTK(tahun: number): number | null {
  const standarWithData = STANDAR_SPMI.filter(s => s.ami[tahun] !== null);
  if (standarWithData.length === 0) return null;
  return standarWithData.reduce((sum, s) => sum + (s.ami[tahun]?.ptK || 0), 0);
}

export function getRataTindakLanjut(tahun: number): number | null {
  const standarWithData = STANDAR_SPMI.filter(s => s.ami[tahun] !== null);
  if (standarWithData.length === 0) return null;
  const total = standarWithData.reduce((sum, s) => sum + (s.ami[tahun]?.tindakLanjut || 0), 0);
  return Math.round(total / standarWithData.length);
}

export function getStatusColor(status: StatusAMI): string {
  switch (status) {
    case "MS": return "text-emerald-400";
    case "ML": return "text-cyan-400";
    case "BS": return "text-amber-400";
    case "MSV": return "text-rose-400";
    default: return "text-muted-foreground";
  }
}

export function getStatusLabel(status: StatusAMI): string {
  switch (status) {
    case "MS": return "Mencapai Standar";
    case "ML": return "Melampaui Standar";
    case "BS": return "Belum mencapai Standar";
    case "MSV": return "Menyimpang dari Standar";
    default: return "-";
  }
}

// ============================================================
// DAFTAR DOKUMEN AMI PER TAHUN (untuk transparency)
// ============================================================
export interface DokumenAMIList {
  tahun: number;
  totalDokumen: number;
  dokumen: Array<{
    no: number;
    nama: string;
    kode: string;
    tanggalAMI: string;
    kategori: string;
  }>;
}

export const DOKUMEN_AMI_PER_TAHUN: Record<number, DokumenAMIList> = {
  2023: {
    tahun: 2023,
    totalDokumen: 14,
    dokumen: [
      { no: 1, nama: "AMI Proses Pembelajaran 2022 Ganjil", kode: "Monev-in - SPB-Ganjil", tanggalAMI: "21 Februari 2023", kategori: "Pendidikan" },
      { no: 2, nama: "AMI Proses Pembelajaran 2022 Genap", kode: "Monev-in - SPB-Genap", tanggalAMI: "14 Agustus 2023", kategori: "Pendidikan" },
      { no: 3, nama: "AMI VMTS 2022-2023", kode: "Monev-in - VMTS", tanggalAMI: "7 Agustus 2023", kategori: "Tambahan" },
      { no: 4, nama: "AMI Tata Pamong & Tata Kelola 2022-2023", kode: "Monev-in - TPTK", tanggalAMI: "14 Agustus 2023", kategori: "Tambahan" },
      { no: 5, nama: "AMI Mahasiswa 2022-2023", kode: "Monev-in - Mahasiswa", tanggalAMI: "13 Maret 2023", kategori: "Tambahan" },
      { no: 6, nama: "AMI SDM 2022-2023", kode: "Monev-in - SDM", tanggalAMI: "15 April 2023", kategori: "Tambahan" },
      { no: 7, nama: "AMI Keuangan 2022-2023", kode: "Monev-in - Keuangan", tanggalAMI: "3 Mei 2023", kategori: "Tambahan" },
      { no: 8, nama: "AMI Sarana dan Prasarana 2022-2023", kode: "Monev-in - SARPRAS", tanggalAMI: "20 Maret 2023", kategori: "Tambahan" },
      { no: 9, nama: "AMI Penelitian dan PKM 2022-2023", kode: "Monev-in - PEN-PKM", tanggalAMI: "3 Agustus 2023", kategori: "Penelitian & PkM" },
      { no: 10, nama: "AMI MBKM 2022-2023", kode: "Monev-in - MBKM", tanggalAMI: "10 April 2023", kategori: "Tambahan" },
      { no: 11, nama: "AMI Kesejahteraan 2022-2023", kode: "Monev-in - KSJH", tanggalAMI: "15 Mei 2023", kategori: "Tambahan" },
      { no: 12, nama: "AMI Pelayanan Mahasiswa 2022-2023 Ganjil", kode: "Monev-in - PLYN-Ganjil", tanggalAMI: "17 Januari 2023", kategori: "Tambahan" },
      { no: 13, nama: "AMI Pelayanan Mahasiswa 2022-2023 Genap", kode: "Monev-in - PLYN-Genap", tanggalAMI: "Juli 2023", kategori: "Tambahan" },
      { no: 14, nama: "Pernyataan dan Kebijakan Mutu", kode: "Kebijakan Mutu UNITA", tanggalAMI: "2023", kategori: "Kebijakan" },
    ]
  },
  2024: {
    tahun: 2024,
    totalDokumen: 20,
    dokumen: [
      { no: 1, nama: "AMI VMTS", kode: "SPMI/PPM/MONEV/VMTS/2023", tanggalAMI: "10 November 2023", kategori: "Tambahan" },
      { no: 2, nama: "AMI Tata Pamong dan Tata Kelola", kode: "SPMI/PPM/MONEV/TPTK/2023", tanggalAMI: "3 November 2023", kategori: "Tambahan" },
      { no: 3, nama: "AMI Mahasiswa", kode: "SPMI/PPM/MONEV/MHS/2023", tanggalAMI: "4 Maret 2024", kategori: "Tambahan" },
      { no: 4, nama: "AMI Pendidikan", kode: "SPMI/PPM/MONEV/PEND/2023", tanggalAMI: "8 Juli 2024", kategori: "Pendidikan" },
      { no: 5, nama: "AMI Proses Pembelajaran Gasal", kode: "SPMI/PPM/MONEV/SPB/2023-1", tanggalAMI: "3 Februari 2024", kategori: "Pendidikan" },
      { no: 6, nama: "AMI Proses Pembelajaran UnitA 20232", kode: "SPMI/PPM/MONEV/SPB/2023-2", tanggalAMI: "4 Agustus 2024", kategori: "Pendidikan" },
      { no: 7, nama: "AMI SDM", kode: "SPMI/PPM/MONEV/SDM/2023", tanggalAMI: "15 Juni 2024", kategori: "Tambahan" },
      { no: 8, nama: "AMI Keuangan", kode: "SPMI/PPM/MONEV/KEU/2023", tanggalAMI: "15 Mei 2024", kategori: "Tambahan" },
      { no: 9, nama: "AMI Sarana dan Prasarana", kode: "SPMI/PPM/MONEV/SARPRAS/2023", tanggalAMI: "24 Maret 2024", kategori: "Tambahan" },
      { no: 10, nama: "AMI Penelitian", kode: "SPMI/PPM/MONEV/PNLT/2023", tanggalAMI: "15 Juli 2024", kategori: "Penelitian" },
      { no: 11, nama: "AMI Pengabdian kepada Masyarakat (PKM)", kode: "SPMI/PPM/MONEV/PKM/2023", tanggalAMI: "22 Juli 2024", kategori: "PkM" },
      { no: 12, nama: "AMI MBKM", kode: "SPMI/PPM/MONEV/MBKM/2023", tanggalAMI: "22 April 2024", kategori: "Tambahan" },
      { no: 13, nama: "AMI Kesejahteraan", kode: "SPMI/PPM/MONEV/KSJH/2023", tanggalAMI: "29 Mei 2024", kategori: "Tambahan" },
      { no: 14, nama: "AMI Kerjasama", kode: "SPMI/PPM/MONEV/KJSM/2023", tanggalAMI: "26 Mei 2024", kategori: "Tambahan" },
      { no: 15, nama: "AMI Pelayanan Kepada Mahasiswa Ganjil 2031", kode: "SPMI/PPM/MONEV/PLYN/2023-1", tanggalAMI: "3 Februari 2024", kategori: "Tambahan" },
      { no: 16, nama: "AMI Pelayanan Kepada Mahasiswa Genap 2032", kode: "SPMI/PPM/MONEV/PLYN/2023-2", tanggalAMI: "4 Agustus 2024", kategori: "Tambahan" },
      { no: 17, nama: "Rencana Tindak Lanjut Ganjil", kode: "SPMI/PPM/RTL/2023-1", tanggalAMI: "Semester Ganjil 2023", kategori: "Tindak Lanjut" },
      { no: 18, nama: "Rencana Tindak Lanjut Genap", kode: "SPMI/PPM/RTL/2023-2", tanggalAMI: "Semester Genap 2024", kategori: "Tindak Lanjut" },
      { no: 19, nama: "Notulensi Rapat RTL 1", kode: "SPMI/PPM/NTR/2023-1", tanggalAMI: "Semester Ganjil 2023", kategori: "Tindak Lanjut" },
      { no: 20, nama: "Notulensi Rapat RTL 2", kode: "SPMI/PPM/NTR/2023-2", tanggalAMI: "Semester Genap 2024", kategori: "Tindak Lanjut" },
    ]
  },
  2025: {
    tahun: 2025,
    totalDokumen: 15,
    dokumen: [
      { no: 1, nama: "AMI Pendidikan 2024-2025", kode: "SPMI/PPM/MONEV/PEND/2025", tanggalAMI: "TA 2024-2025", kategori: "Pendidikan" },
      { no: 2, nama: "AMI Proses Pembelajaran Ganjil 2024-2025", kode: "SPMI/PPM/MONEV/SPB-G/2025", tanggalAMI: "Ganjil 2024", kategori: "Pendidikan" },
      { no: 3, nama: "AMI Proses Pembelajaran Genap 2024-2025", kode: "SPMI/PPM/MONEV/SPB-GN/2025", tanggalAMI: "Genap 2025", kategori: "Pendidikan" },
      { no: 4, nama: "AMI SDM 2024-2025", kode: "SPMI/PPM/MONEV/SDM/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 5, nama: "AMI Kesejahteraan 2024-2025", kode: "SPMI/PPM/MONEV/KSJH/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 6, nama: "AMI Keuangan 2024-2025", kode: "SPMI/PPM/MONEV/KEU/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 7, nama: "AMI Sarana dan Prasarana 2024-2025", kode: "SPMI/PPM/MONEV/SARPRAS/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 8, nama: "AMI VMTS 2024-2025", kode: "SPMI/PPM/MONEV/VMTS/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 9, nama: "AMI TPTK 2024-2025", kode: "SPMI/PPM/MONEV/TPTK/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 10, nama: "AMI Mahasiswa 2024-2025", kode: "SPMI/PPM/MONEV/MHS/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 11, nama: "AMI Penelitian 2024-2025", kode: "SPMI/PPM/MONEV/PNLT/2025", tanggalAMI: "TA 2024-2025", kategori: "Penelitian" },
      { no: 12, nama: "AMI Pengabdian 2024-2025", kode: "SPMI/PPM/MONEV/PKM/2025", tanggalAMI: "TA 2024-2025", kategori: "PkM" },
      { no: 13, nama: "AMI MBKM 2024-2025", kode: "SPMI/PPM/MONEV/MBKM/2025", tanggalAMI: "TA 2024-2025", kategori: "Tambahan" },
      { no: 14, nama: "AMI Pelayanan Mahasiswa Ganjil 2024-2025", kode: "SPMI/PPM/MONEV/PLYN-G/2025", tanggalAMI: "Ganjil 2024", kategori: "Tambahan" },
      { no: 15, nama: "AMI Pelayanan Mahasiswa Genap 2024-2025", kode: "SPMI/PPM/MONEV/PLYN-GN/2025", tanggalAMI: "Genap 2025", kategori: "Tambahan" },
    ]
  }
};
