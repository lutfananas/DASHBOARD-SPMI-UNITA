// ============================================================
// DATA SPMI - 33 STANDAR + 8 IKU + AMI 2025 (data baru)
// Sesuai Permen 39/2025 dan dokumen mutu UNITA 2025
// Tahun 2021-2024: kosong (belum ada data AMI)
// Tahun 2025: berisi data AMI dari hasil audit dokumen asli
// Sumber: 15 dokumen AMI 2024-2025 dari PPM UNITA
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
// 33 STANDAR SPMI - DATA AMI TAHUN 2025 (DARI DOKUMEN ASLI)
// ============================================================
export const STANDAR_SPMI: StandarSPMI[] = [
  // === 8 STANDAR PENDIDIKAN ===
  {
    no: 1, nama: "Standar Kompetensi Lulusan", kode: "SKL", kategori: "Pendidikan",
    rujukanPasal: "Pasal 6-10", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 87, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Lulusan terserap DUDI 86,50%, IPK rata-rata 3,48, masa studi 3,8 thn, masa tunggu 3,2 bln. Lulusan wirausahawan 18,20%. Semua indikator Tercapai.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025"
      },
    }
  },
  {
    no: 2, nama: "Standar Proses Pembelajaran", kode: "SPB", kategori: "Pendidikan",
    rujukanPasal: "Pasal 11-24", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 92,
        catatan: "Skor rata-rata kepuasan 3,54 (Likert 1-4). Ganjil 3,49 → Genap 3,59. Seluruh fakultas meningkat. Metode daring skor terendah namun di atas rata-rata.",
        dokumenAMI: "AMI PROSES PEMBELAJARAN GANJIL & GENAP 2024-2025"
      },
    }
  },
  {
    no: 3, nama: "Standar Penilaian", kode: "SPN", kategori: "Pendidikan",
    rujukanPasal: "Pasal 25", penanggungJawab: "GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 85, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Penilaian di SIAKAD tervalidasi. Feedback dosen terdokumentasi. Rubrik penilaian berbasis OBE mulai diterapkan. Beberapa prodi belum konsisten rubrik.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025"
      },
    }
  },
  {
    no: 4, nama: "Standar Pengelolaan", kode: "SPP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 26-30", penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Rasio mahasiswa per dosen pembimbing 16:1 (target ≤20:1). Dashboard SPMI mulai berfungsi. Mekanisme PPEPP terintegrasi.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025"
      },
    }
  },
  {
    no: 5, nama: "Standar Isi", kode: "SIS", kategori: "Pendidikan",
    rujukanPasal: "Pasal 31-39", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 83, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 86,
        catatan: "Ketersediaan dokumen kurikulum 100%. Frekuensi tinjauan kurikulum 2x/tahun. Rasio dosen pembimbing TA 8:1 (dari 12:1). OBE mulai diterapkan.",
        dokumenAMI: "AMI PENDIDIKAN 2024-2025"
      },
    }
  },
  {
    no: 6, nama: "Standar Dosen & Tenaga Kependidikan", kode: "SDT", kategori: "Pendidikan",
    rujukanPasal: "Pasal 40-45", penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 88,
        catatan: "Total SDM 93 orang. Sertifikasi pendidik 94,60% (target 100%, BELUM TERCAPAI). Dosen Lektor+ 78,40%. Tendik kualifikasi S2 96,40% (BELUM TERCAPAI). Realisasi anggaran SDM 88,70%. 16/18 indikator Tercapai, 2 Belum Tercapai.",
        dokumenAMI: "AMI SDM 2024-2025"
      },
    }
  },
  {
    no: 7, nama: "Standar Sarana & Prasarana", kode: "SSP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 46-47", penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Sarana baik 95,20% (dari 83% di 2023). Prasarana baik 95,80% (dari 84%). Peningkatan signifikan. Beberapa scanner, stand LCD, diesel perlu perbaikan.",
        dokumenAMI: "AMI SARANA DAN PRASARANA 2024-2025"
      },
    }
  },
  {
    no: 8, nama: "Standar Pembiayaan", kode: "SPM", kategori: "Pendidikan",
    rujukanPasal: "Pasal 48-51", penanggungJawab: "BAKU / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Realisasi pendapatan 95,20% dari target RENOP. Belanja operasional 94,80%. Belanja kemahasiswaan 95,60%. Belanja penelitian 96,10%. Total pendapatan target Rp28.400 juta. Semua indikator Tercapai.",
        dokumenAMI: "AMI KEUANGAN 2024-2025"
      },
    }
  },

  // === 8 STANDAR PENELITIAN ===
  {
    no: 9, nama: "Standar Luaran Penelitian", kode: "PEN-LRN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 94, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Publikasi ilmiah 95,60% (10 dokumen/prodi). HKI 93,40% (meningkat/tahun). Sitasi 90,80%. Adopsi industri 88,50%. Semua Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 10, nama: "Standar Proses Penelitian", kode: "PEN-PRS", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 95, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Panduan penelitian tersedia 100%. Sosialisasi terlaksana 100%. Laporan akhir 96,80%. Integrasi ke RPS 93,50%. Kesesuaian roadmap 97,20%.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 11, nama: "Standar Masukan Penelitian", kode: "PEN-MSK", kategori: "Penelitian",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 91, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 90,
        catatan: "Pendanaan penelitian dari RENOP. Fasilitas dan infrastruktur penelitian memadai. SDM peneliti tersertifikasi. Sistem informasi terintegrasi.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 12, nama: "Standar Hasil Penelitian", kode: "PEN-HSL", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 93,
        catatan: "Adopsi industri 88,50%. Sitasi 90,80%. Integrasi RPS 93,50%. Hasil penelitian diadopsi untuk pembelajaran dan masyarakat.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 13, nama: "Standar Publikasi Ilmiah Penelitian", kode: "PEN-PUB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 94, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 94,
        catatan: "Publikasi 95,60% (10 dokumen/prodi/tahun). Sitasi 90,80%. Buku ilmiah meningkat. Semua indikator Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 14, nama: "Standar Paten & HKI Penelitian", kode: "PEN-PTN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 90,
        catatan: "HKI (Paten, Hak Cipta, Desain) 93,40% (meningkat/tahun). Adopsi industri 88,50%. Semua Tercapai.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 15, nama: "Standar Diseminasi Penelitian", kode: "PEN-DSM", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 90, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 88,
        catatan: "Sosialisasi dan pelatihan terkait penelitian terlaksana 100%. Diseminasi melalui seminar dan forum ilmiah. Perlu peningkatan forum internasional.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },
  {
    no: 16, nama: "Standar Kolaborasi Penelitian", kode: "PEN-KLB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 86,
        catatan: "Proporsi skema penelitian 96,80%. Kerjasama dengan mitra industri perlu peningkatan. Kolaborasi antar-prodi mulai berkembang.",
        dokumenAMI: "AMI PENELITIAN 2024-2025"
      },
    }
  },

  // === 8 STANDAR PkM ===
  {
    no: 17, nama: "Standar Luaran PkM", kode: "PKM-LRN", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 95, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Publikasi PkM 94,50%. HKI/TTG 93,80%. Adopsi masyarakat 91,20%. Penyelesaian masalah mitra 96,80%. Semua Tercapai.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 18, nama: "Standar Proses PkM", kode: "PKM-PRS", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 96, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 97,
        catatan: "Panduan PkM tersedia 100%. Sosialisasi 100%. Laporan akhir 96,20%. Integrasi ke RPS 92,80%. Kesesuaian roadmap 95,40%.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 19, nama: "Standar Masukan PkM", kode: "PKM-MSK", kategori: "PkM",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 92,
        catatan: "Pendanaan PkM dari RENOP. SDM pengabdi tersertifikasi. Fasilitas penunjang PkM memadai. Sistem informasi PkM mulai berfungsi.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 20, nama: "Standar Hasil PkM", kode: "PKM-HSL", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 94, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 95,
        catatan: "Adopsi hasil PkM oleh masyarakat 91,20%. Penyelesaian masalah mitra 96,80%. TTG meningkat dari 20% (2023). Semua Tercapai.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 21, nama: "Standar Publikasi PkM", kode: "PKM-PUB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 92,
        catatan: "Publikasi ilmiah dari PkM 94,50% (meningkat/tahun). Diseminasi melalui forum dan media. Perlu peningkatan publikasi internasional.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 22, nama: "Standar Produk & Jasa PkM", kode: "PKM-PRD", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 92, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 90,
        catatan: "HKI/TTG 93,80% (meningkat/tahun). Produk PkM diadopsi masyarakat. TTG masih perlu peningkatan dari 20% (2023).",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 23, nama: "Standar Diseminasi PkM", kode: "PKM-DSM", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 91, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 89,
        catatan: "Sosialisasi dan pelatihan PkM 100%. Diseminasi melalui seminar dan media. Perlu peningkatan forum diseminasi tingkat nasional.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 24, nama: "Standar Kolaborasi PkM", kode: "PKM-KLB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 86,
        catatan: "Proporsi skema PkM 95,60%. Jumlah kegiatan PkM progresif 94,20%. Kerjasama dengan mitra luar perlu peningkatan.",
        dokumenAMI: "AMI PENGABDIAN 2024-2025"
      },
    }
  },

  // === 9 STANDAR TAMBAHAN ===
  {
    no: 25, nama: "Standar VMTS", kode: "VMTS", kategori: "Tambahan",
    penanggungJawab: "Senat Universitas",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90,
        catatan: "Rata-rata keseluruhan 3,54 (Likert 1-4, Sangat Baik). Dosen 3,54, Tendik 3,48. Sosialisasi VMTS berjalan. Pemahaman civitas akademika baik. Perlu peningkatan metode sosialisasi (skor 3,38).",
        dokumenAMI: "AMI VMTS 2024-2025"
      },
    }
  },
  {
    no: 26, nama: "Standar Tata Pamong & Tata Kelola", kode: "TPTK", kategori: "Tambahan",
    penanggungJawab: "Senat / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 90, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 92,
        catatan: "Rata-rata keseluruhan 3,59 (Likert 1-4, Sangat Baik). SD 0,58. Tata pamong berjalan baik. Koordinasi antar-unit 3,50. Pelayanan administrasi akademik 3,45 (terendah). Evaluasi ditindaklanjuti 3,52.",
        dokumenAMI: "AMI TPTK 2024-2025"
      },
    }
  },
  {
    no: 27, nama: "Standar Mahasiswa", kode: "MHS", kategori: "Tambahan",
    penanggungJawab: "Wakil Rektor III",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 93, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 94,
        catatan: "AEE PT 92,50% (≥90%). Lulusan bekerja/wirausaha 84,30% (≥80%). Mahasiswa berkegiatan MBKM 68,40% (≥60%). Program integritas akademik 95,00%. Capaian kompetensi lulusan 91,80%. Semua Tercapai.",
        dokumenAMI: "AMI MAHASISWA 2024-2025"
      },
    }
  },
  {
    no: 28, nama: "Standar Sumber Daya Manusia", kode: "SDM", kategori: "Tambahan",
    penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 89, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 88,
        catatan: "Total SDM 93 orang. Sertifikasi pendidik 94,60% (BELUM TERCAPAI, target 100%). Dosen Lektor+ 78,40%. Tendik S2 96,40% (BELUM TERCAPAI). Realisasi anggaran SDM 88,70%. 16/18 indikator Tercapai, 2 Belum Tercapai. AMI Kesejahteraan: rata-rata 96,32% (Sangat Baik).",
        dokumenAMI: "AMI SDM 2024-2025 & AMI KESEJAHTERAAN 2024-2025"
      },
    }
  },
  {
    no: 29, nama: "Standar Keuangan, Sarana, Prasarana", kode: "KSP", kategori: "Tambahan",
    penanggungJawab: "BAKU / BAU / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 95, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95,
        catatan: "Keuangan: realisasi pendapatan 95,20%, belanja operasional 94,80%, kemahasiswaan 95,60%, penelitian 96,10%. Sarana: 95,20% baik (dari 83%). Prasarana: 95,80% baik (dari 84%). Target pendapatan Rp28.400 juta. Semua Tercapai.",
        dokumenAMI: "AMI KEUANGAN 2024-2025 & AMI SARANA DAN PRASARANA 2024-2025"
      },
    }
  },
  {
    no: 30, nama: "Standar Kerjasama", kode: "KJS", kategori: "Tambahan",
    penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 80, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80,
        catatan: "Tidak ada AMI khusus Kerjasama. Data dari AMI MBKM: kerjasama mitra 92,40%. MoU/MoA aktif namun implementasi perlu peningkatan. Perlu AMI khusus untuk Kerjasama.",
        dokumenAMI: "Tidak ada AMI khusus (estimasi dari AMI MBKM)"
      },
    }
  },
  {
    no: 31, nama: "Standar MBKM", kode: "MBKM", kategori: "Tambahan",
    penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 96, status: "MS", temuan: 2, ptK: 1, tindakLanjut: 96,
        catatan: "Dokumen Standar MBKM 100. Buku Panduan MBKM 100. Pemetaan Mitra 94,20. Kerjasama mitra 92,40. Rata-rata capaian 95,50 (Sangat Baik). Rekognisi & konversi nilai 96,90. SKPI 95,40. Semua indikator Sangat Baik.",
        dokumenAMI: "AMI MBKM 2024-2025"
      },
    }
  },
  {
    no: 32, nama: "Standar Luaran & Capaian Tridharma", kode: "LCT", kategori: "Tambahan",
    penanggungJawab: "PPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 88, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 88,
        catatan: "Lulusan terserap 86,50%. IPK 3,48. Publikasi penelitian 95,60%. Publikasi PkM 94,50%. HKI penelitian 93,40%. HKI/TTG PkM 93,80%. Berdasarkan AMI Pendidikan, Penelitian, dan PkM.",
        dokumenAMI: "AMI PENDIDIKAN + PENELITIAN + PENGABDIAN 2024-2025"
      },
    }
  },
  {
    no: 33, nama: "Standar Pelayanan Kepada Mahasiswa", kode: "PKM-MHS", kategori: "Tambahan",
    penanggungJawab: "BAA",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: {
        skor: 88, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88,
        catatan: "Ganjil 3,48 → Genap 3,58 (Likert 1-4, Sangat Baik). 17/20 indikator Sangat Baik (Genap). Tren: 3,42 (2023-1) → 3,48 (2024-1) → 3,58 (2024-2). Info akademik SIAKAD 3,70. Prioritas perbaikan: beasiswa, pendampingan magang.",
        dokumenAMI: "AMI PELAYANAN KEPADA MAHASISWA GANJIL & GENAP 2024-2025"
      },
    }
  },
];

// ============================================================
// 8 IKU - Capaian 2025 dari AMI Pendidikan
// ============================================================
export const IKU_LIST: IKU[] = [
  {
    no: 1, nama: "Lulusan terserap DUDI <6 bulan", unit: "Wakil Rektor III",
    baseline2025: 60, target2030: 92,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 87 },
    trend: "up"
  },
  {
    no: 2, nama: "Mahasiswa mendapat pengalaman luar kampus", unit: "UPPS",
    baseline2025: 20, target2030: 40,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 68 },
    trend: "up"
  },
  {
    no: 3, nama: "Dosen berkegiatan di luar kampus", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 15 },
    trend: "up"
  },
  {
    no: 4, nama: "Praktisi mengajar di kampus (per prodi)", unit: "UPPS",
    baseline2025: 2, target2030: 6,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 2 },
    trend: "up"
  },
  {
    no: 5, nama: "Hasil kerja dosen digunakan masyarakat", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 18 },
    trend: "up"
  },
  {
    no: 6, nama: "Prodi berkerjasama dengan DUDI (per prodi)", unit: "BAU",
    baseline2025: 3, target2030: 7,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 3 },
    trend: "up"
  },
  {
    no: 7, nama: "Mata kuliah metode praktik (%)", unit: "UPPS",
    baseline2025: 40, target2030: 60,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 45 },
    trend: "up"
  },
  {
    no: 8, nama: "Prodi terakreditasi unggul (%)", unit: "UPPS",
    baseline2025: 30, target2030: 70,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 30 },
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
