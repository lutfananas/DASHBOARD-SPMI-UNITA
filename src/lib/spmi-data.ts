// ============================================================
// DATA SPMI - 33 STANDAR + 8 IKU + AMI HISTORY 2021-2025
// Sesuai Permen 39/2025 dan dokumen mutu UNITA 2025
// ============================================================

export type KategoriStandar = "Pendidikan" | "Penelitian" | "PkM" | "Tambahan";
export type StatusAMI = "MS" | "ML" | "BS" | "MSV"; // Mencapai/Melampaui/Belum/Menyimpang

export interface StandarSPMI {
  no: number;
  nama: string;
  kode: string;
  kategori: KategoriStandar;
  rujukanPasal?: string;
  penanggungJawab: string;
  // Hasil AMI per tahun: skor 0-100, status, temuan, rekomendasi
  ami: Record<number, {
    skor: number;
    status: StatusAMI;
    temuan: number;
    ptK: number; // Permintaan Tindakan Koreksi
    tindakLanjut: number; // % tindak lanjut
    catatan: string;
  }>;
}

export interface IKU {
  no: number;
  nama: string;
  unit: string;
  baseline2025: number | string;
  target2030: number | string;
  // Capaian per tahun
  capaian: Record<number, number | string>;
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
// 33 STANDAR SPMI DENGAN HASIL AMI 2021-2025
// ============================================================
export const STANDAR_SPMI: StandarSPMI[] = [
  // === 8 STANDAR PENDIDIKAN ===
  {
    no: 1, nama: "Standar Kompetensi Lulusan", kode: "SKL", kategori: "Pendidikan",
    rujukanPasal: "Pasal 6-10", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: { skor: 72, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 75, catatan: "CPL belum mengacu asosiasi prodi" },
      2022: { skor: 78, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 80, catatan: "Tracer study response rate rendah" },
      2023: { skor: 82, status: "MS", temuan: 7, ptK: 4, tindakLanjut: 85, catatan: "CPL mulai mengacu asosiasi" },
      2024: { skor: 85, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 90, catatan: "Tracer study meningkat 30%" },
      2025: { skor: 88, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95, catatan: "CPL terintegrasi PD Dikti, pengguna lulusan puas 88%" },
    }
  },
  {
    no: 2, nama: "Standar Proses Pembelajaran", kode: "SPB", kategori: "Pendidikan",
    rujukanPasal: "Pasal 11-24", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: { skor: 70, status: "BS", temuan: 15, ptK: 10, tindakLanjut: 70, catatan: "RPS belum baku, blended learning terbatas" },
      2022: { skor: 75, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 75, catatan: "LMS mulai digunakan" },
      2023: { skor: 80, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 82, catatan: "Pelatihan RPS dilakukan" },
      2024: { skor: 84, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 88, catatan: "60% mata kuliah di LMS" },
      2025: { skor: 87, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 92, catatan: "PBL/CBL mulai diterapkan, kepuasan 87%" },
    }
  },
  {
    no: 3, nama: "Standar Penilaian", kode: "SPN", kategori: "Pendidikan",
    rujukanPasal: "Pasal 25", penanggungJawab: "GKM",
    ami: {
      2021: { skor: 68, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Rubrik belum konsisten" },
      2022: { skor: 73, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 74, catatan: "Penilaian autentik mulai" },
      2023: { skor: 78, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 80, catatan: "SIAKAD terintegrasi" },
      2024: { skor: 82, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 86, catatan: "Rubrik digital di LMS" },
      2025: { skor: 85, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90, catatan: "Bobot formatif ≥40%, transparansi 95%" },
    }
  },
  {
    no: 4, nama: "Standar Pengelolaan", kode: "SPP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 26-30", penanggungJawab: "UPPS",
    ami: {
      2021: { skor: 65, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 65, catatan: "SOTK belum lengkap" },
      2022: { skor: 72, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 72, catatan: "Rencana operasional mulai" },
      2023: { skor: 76, status: "MS", temuan: 10, ptK: 7, tindakLanjut: 78, catatan: "Dashboard digital mulai" },
      2024: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "15 prodi dengan dashboard" },
      2025: { skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88, catatan: "Benchmarking tahunan, evaluasi diri 100%" },
    }
  },
  {
    no: 5, nama: "Standar Isi", kode: "SIS", kategori: "Pendidikan",
    rujukanPasal: "Pasal 31-39", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: { skor: 67, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 67, catatan: "Review kurikulum belum 2 tahunan" },
      2022: { skor: 71, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 73, catatan: "MBKM mulai diperkenalkan" },
      2023: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 78, catatan: "MBKM di 25 prodi" },
      2024: { skor: 80, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 84, catatan: "Konstruktif alignment 70%" },
      2025: { skor: 83, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88, catatan: "MBKM di 40 prodi, 350 mahasiswa MBKM" },
    }
  },
  {
    no: 6, nama: "Standar Dosen & Tenaga Kependidikan", kode: "SDT", kategori: "Pendidikan",
    rujukanPasal: "Pasal 40-45", penanggungJawab: "BAKU",
    ami: {
      2021: { skor: 63, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 60, catatan: "Serdos rendah, rasio 1:42" },
      2022: { skor: 68, status: "BS", temuan: 15, ptK: 10, tindakLanjut: 65, catatan: "Serdos 28%" },
      2023: { skor: 73, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "Serdos 33%" },
      2024: { skor: 78, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 80, catatan: "Serdos 40%, rasio 1:35" },
      2025: { skor: 82, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 86, catatan: "Serdos 40% (target 52% 2026), 15 Lektor Kepala" },
    }
  },
  {
    no: 7, nama: "Standar Sarana & Prasarana", kode: "SSP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 46-47", penanggungJawab: "BAU",
    ami: {
      2021: { skor: 65, status: "BS", temuan: 17, ptK: 11, tindakLanjut: 60, catatan: "Lab peralatan kurang, WiFi terbatas" },
      2022: { skor: 70, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Smart classroom 5 unit" },
      2023: { skor: 74, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 75, catatan: "Smart classroom 10 unit, WiFi 50%" },
      2024: { skor: 78, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 82, catatan: "Smart classroom 15 unit, WiFi 60%" },
      2025: { skor: 81, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 86, catatan: "Akses disabilitas 40%, koleksi 15.000" },
    }
  },
  {
    no: 8, nama: "Standar Pembiayaan", kode: "SPM", kategori: "Pendidikan",
    rujukanPasal: "Pasal 48-51", penanggungJawab: "BAKU / SPI",
    ami: {
      2021: { skor: 60, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 55, catatan: "Opini WDP, BOP rendah" },
      2022: { skor: 66, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 62, catatan: "RGU belum optimal" },
      2023: { skor: 71, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 70, catatan: "RGU 3 unit aktif" },
      2024: { skor: 76, status: "MS", temuan: 10, ptK: 6, tindakLanjut: 78, catatan: "Opini WDP, RGU 5%" },
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "BOP Rp 8 juta/mhs, target WTP 2026" },
    }
  },

  // === 8 STANDAR PENELITIAN ===
  {
    no: 9, nama: "Standar Luaran Penelitian", kode: "PEN-LRN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 58, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 50, catatan: "Publikasi 80, Scopus 5" },
      2022: { skor: 64, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 58, catatan: "Publikasi 100, Scopus 8" },
      2023: { skor: 70, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Publikasi 120, Scopus 12" },
      2024: { skor: 75, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 76, catatan: "Publikasi 150, Scopus 20" },
      2025: { skor: 80, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 84, catatan: "Publikasi 150, Scopus 20, sitasi 200" },
    }
  },
  {
    no: 10, nama: "Standar Proses Penelitian", kode: "PEN-PRS", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 62, status: "BS", temuan: 19, ptK: 13, tindakLanjut: 55, catatan: "Reviewer internal kurang" },
      2022: { skor: 67, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 62, catatan: "Reviewer 8 orang" },
      2023: { skor: 72, status: "BS", temuan: 13, ptK: 8, tindakLanjut: 70, catatan: "Reviewer 12 orang, monitoring lapangan" },
      2024: { skor: 76, status: "MS", temuan: 10, ptK: 6, tindakLanjut: 78, catatan: "Reviewer 15 orang, komisi etik aktif" },
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "Laporan tepat waktu 80%, etika 85%" },
    }
  },
  {
    no: 11, nama: "Standar Masukan Penelitian", kode: "PEN-MSK", kategori: "Penelitian",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: { skor: 55, status: "BS", temuan: 24, ptK: 16, tindakLanjut: 50, catatan: "Dana internal Rp 200 juta" },
      2022: { skor: 60, status: "BS", temuan: 20, ptK: 13, tindakLanjut: 56, catatan: "Dana internal Rp 300 juta" },
      2023: { skor: 65, status: "BS", temuan: 17, ptK: 11, tindakLanjut: 64, catatan: "Dana internal Rp 400 juta" },
      2024: { skor: 70, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 72, catatan: "Dana internal Rp 500 juta, eksternal Rp 300 juta" },
      2025: { skor: 75, status: "BS", temuan: 10, ptK: 7, tindakLanjut: 80, catatan: "Peneliti aktif 80, lab dengan peralatan 70%" },
    }
  },
  {
    no: 12, nama: "Standar Hasil Penelitian", kode: "PEN-HSL", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 50, status: "BS", temuan: 26, ptK: 18, tindakLanjut: 45, catatan: "TTG 5, komersialisasi 0" },
      2022: { skor: 56, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 52, catatan: "TTG 8, komersialisasi 1" },
      2023: { skor: 62, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 60, catatan: "TTG 10, komersialisasi 1" },
      2024: { skor: 68, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 70, catatan: "TTG 10, komersialisasi 2, sitasi 150" },
      2025: { skor: 73, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 78, catatan: "TTG 10, komersialisasi 2, sitasi 200, RBL 25" },
    }
  },
  {
    no: 13, nama: "Standar Publikasi Ilmiah Penelitian", kode: "PEN-PUB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 52, status: "BS", temuan: 25, ptK: 17, tindakLanjut: 48, catatan: "SINTA 1-3: 8, Scopus: 3" },
      2022: { skor: 58, status: "BS", temuan: 21, ptK: 14, tindakLanjut: 55, catatan: "SINTA 1-3: 12, Scopus: 5" },
      2023: { skor: 64, status: "BS", temuan: 17, ptK: 11, tindakLanjut: 63, catatan: "SINTA 1-3: 18, Scopus: 8" },
      2024: { skor: 70, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 72, catatan: "SINTA 1-3: 25, Scopus: 12" },
      2025: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 80, catatan: "SINTA 1-3: 30, Scopus: 15, open access 25" },
    }
  },
  {
    no: 14, nama: "Standar Paten & HKI Penelitian", kode: "PEN-PTN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 35, status: "BS", temuan: 30, ptK: 22, tindakLanjut: 30, catatan: "Paten 0, HKI lain 2" },
      2022: { skor: 42, status: "BS", temuan: 26, ptK: 19, tindakLanjut: 38, catatan: "Paten 1, HKI lain 4" },
      2023: { skor: 50, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 48, catatan: "Paten 1, HKI lain 6" },
      2024: { skor: 58, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 58, catatan: "Paten 2, HKI lain 8, komersialisasi 1" },
      2025: { skor: 65, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Paten 3 (1 granted), HKI 10, komersialisasi 2" },
    }
  },
  {
    no: 15, nama: "Standar Diseminasi Penelitian", kode: "PEN-DSM", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 48, status: "BS", temuan: 28, ptK: 20, tindakLanjut: 40, catatan: "Seminar 2, repository belum" },
      2022: { skor: 54, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 48, catatan: "Seminar 3, repository mulai" },
      2023: { skor: 60, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 58, catatan: "Seminar 4, repository 1000 akses" },
      2024: { skor: 66, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 68, catatan: "Seminar 5, repository 3000 akses" },
      2025: { skor: 72, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 78, catatan: "Seminar 5, repository 5000 akses, media 15" },
    }
  },
  {
    no: 16, nama: "Standar Kolaborasi Penelitian", kode: "PEN-KLB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 40, status: "BS", temuan: 28, ptK: 20, tindakLanjut: 35, catatan: "MoU 5, internasional 0" },
      2022: { skor: 46, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 42, catatan: "MoU 8, internasional 1" },
      2023: { skor: 53, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 52, catatan: "MoU 12, internasional 2" },
      2024: { skor: 60, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 62, catatan: "MoU 16, internasional 3, joint 4" },
      2025: { skor: 67, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "MoU 20, internasional 5, joint 5, visiting 3" },
    }
  },

  // === 8 STANDAR PkM ===
  {
    no: 17, nama: "Standar Luaran PkM", kode: "PKM-LRN", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 50, status: "BS", temuan: 26, ptK: 18, tindakLanjut: 45, catatan: "Luaran 30, produk 5" },
      2022: { skor: 56, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 52, catatan: "Luaran 40, produk 7" },
      2023: { skor: 62, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 60, catatan: "Luaran 50, produk 8" },
      2024: { skor: 68, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 70, catatan: "Luaran 65, produk 10, publikasi 25" },
      2025: { skor: 73, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 78, catatan: "Luaran 80, produk 15, publikasi 30" },
    }
  },
  {
    no: 18, nama: "Standar Proses PkM", kode: "PKM-PRS", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 55, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 50, catatan: "Informed consent belum" },
      2022: { skor: 60, status: "BS", temuan: 19, ptK: 13, tindakLanjut: 56, catatan: "Informed consent 50%" },
      2023: { skor: 66, status: "BS", temuan: 15, ptK: 10, tindakLanjut: 65, catatan: "Reviewer 6 orang, monitoring" },
      2024: { skor: 72, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 74, catatan: "Reviewer 8 orang, etika 85%" },
      2025: { skor: 76, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 82, catatan: "Reviewer 10 orang, etika 85%, laporan tepat waktu 70%" },
    }
  },
  {
    no: 19, nama: "Standar Masukan PkM", kode: "PKM-MSK", kategori: "PkM",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: { skor: 48, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 42, catatan: "Dana internal Rp 100 juta" },
      2022: { skor: 54, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 50, catatan: "Dana internal Rp 150 juta" },
      2023: { skor: 60, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 58, catatan: "Dana internal Rp 200 juta, eksternal Rp 80 juta" },
      2024: { skor: 65, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 68, catatan: "Dana internal Rp 250 juta, eksternal Rp 150 juta" },
      2025: { skor: 70, status: "BS", temuan: 10, ptK: 7, tindakLanjut: 76, catatan: "Dana internal Rp 250 juta, eksternal Rp 150 juta, pelaksana 60" },
    }
  },
  {
    no: 20, nama: "Standar Hasil PkM", kode: "PKM-HSL", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 42, status: "BS", temuan: 26, ptK: 18, tindakLanjut: 38, catatan: "Dampak terukur 5, replikasi 1" },
      2022: { skor: 48, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 45, catatan: "Dampak terukur 8, replikasi 2" },
      2023: { skor: 54, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 54, catatan: "Dampak terukur 12, replikasi 3" },
      2024: { skor: 60, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 64, catatan: "Dampak terukur 15, replikasi 4, berkelanjutan 10" },
      2025: { skor: 66, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 74, catatan: "Dampak terukur 20, replikasi 5, berkelanjutan 15" },
    }
  },
  {
    no: 21, nama: "Standar Publikasi PkM", kode: "PKM-PUB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 40, status: "BS", temuan: 28, ptK: 20, tindakLanjut: 35, catatan: "Publikasi 8, SINTA 2" },
      2022: { skor: 46, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 42, catatan: "Publikasi 12, SINTA 4" },
      2023: { skor: 52, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 52, catatan: "Publikasi 18, SINTA 6" },
      2024: { skor: 58, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 62, catatan: "Publikasi 25, SINTA 10" },
      2025: { skor: 64, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "Publikasi 30, SINTA 15, best practice 10" },
    }
  },
  {
    no: 22, nama: "Standar Produk & Jasa PkM", kode: "PKM-PRD", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 35, status: "BS", temuan: 30, ptK: 22, tindakLanjut: 30, catatan: "Produk 5, adopsi 2" },
      2022: { skor: 42, status: "BS", temuan: 26, ptK: 19, tindakLanjut: 38, catatan: "Produk 8, adopsi 3" },
      2023: { skor: 48, status: "BS", temuan: 22, ptK: 16, tindakLanjut: 46, catatan: "Produk 12, adopsi 5" },
      2024: { skor: 54, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 56, catatan: "Produk 15, adopsi 8, komersialisasi 1" },
      2025: { skor: 60, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 66, catatan: "Produk 20, adopsi 10, komersialisasi 2" },
    }
  },
  {
    no: 23, nama: "Standar Diseminasi PkM", kode: "PKM-DSM", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 38, status: "BS", temuan: 30, ptK: 22, tindakLanjut: 32, catatan: "Seminar 1, pameran 0" },
      2022: { skor: 44, status: "BS", temuan: 26, ptK: 19, tindakLanjut: 40, catatan: "Seminar 2, pameran 1" },
      2023: { skor: 50, status: "BS", temuan: 22, ptK: 16, tindakLanjut: 48, catatan: "Seminar 2, pameran 1, media 5" },
      2024: { skor: 56, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 58, catatan: "Seminar 3, pameran 1, media 8" },
      2025: { skor: 62, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Seminar 3, pameran 1, media 10, repository 2000 akses" },
    }
  },
  {
    no: 24, nama: "Standar Kolaborasi PkM", kode: "PKM-KLB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: { skor: 36, status: "BS", temuan: 28, ptK: 20, tindakLanjut: 30, catatan: "MoU 3, pemerintah 1" },
      2022: { skor: 42, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 38, catatan: "MoU 5, pemerintah 2" },
      2023: { skor: 48, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 46, catatan: "MoU 8, pemerintah 3, DUDI 4" },
      2024: { skor: 54, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 56, catatan: "MoU 12, pemerintah 4, DUDI 6" },
      2025: { skor: 60, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 66, catatan: "MoU 15, pemerintah 5, DUDI 8, internasional 2" },
    }
  },

  // === 9 STANDAR TAMBAHAN PELAMPAUAN SN DIKTI ===
  {
    no: 25, nama: "Standar VMTS", kode: "VMTS", kategori: "Tambahan",
    penanggungJawab: "Senat Universitas",
    ami: {
      2021: { skor: 75, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 75, catatan: "VMTS 2020, sosialisasi terbatas" },
      2022: { skor: 78, status: "MS", temuan: 7, ptK: 4, tindakLanjut: 80, catatan: "Review VMTS mulai" },
      2023: { skor: 80, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 82, catatan: "VMTS 2022 ditetapkan" },
      2024: { skor: 82, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 85, catatan: "Pemahaman sivitas 75%" },
      2025: { skor: 85, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90, catatan: "Pemahaman 75%, integrasi VMTS 80%, dashboard 40%" },
    }
  },
  {
    no: 26, nama: "Standar Tata Pamong & Tata Kelola", kode: "TPTK", kategori: "Tambahan",
    penanggungJawab: "Senat / SPI",
    ami: {
      2021: { skor: 70, status: "MS", temuan: 12, ptK: 8, tindakLanjut: 65, catatan: "SOTK 2020, SPI 2 audit" },
      2022: { skor: 73, status: "MS", temuan: 10, ptK: 7, tindakLanjut: 70, catatan: "SOTK revisi, SPI 3 audit" },
      2023: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 75, catatan: "SPI 4 audit, kode etik disosialisasikan" },
      2024: { skor: 78, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 80, catatan: "SPI 5 audit, whistleblowing mulai" },
      2025: { skor: 80, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 84, catatan: "SOTK 85%, SPI 5 audit, Senat 4 rapat" },
    }
  },
  {
    no: 27, nama: "Standar Mahasiswa", kode: "MHS", kategori: "Tambahan",
    penanggungJawab: "Wakil Rektor III",
    ami: {
      2021: { skor: 68, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 65, catatan: "Mahasiswa 6000, beasiswa 10%" },
      2022: { skor: 72, status: "MS", temuan: 13, ptK: 9, tindakLanjut: 70, catatan: "Mahasiswa 6500, beasiswa 12%" },
      2023: { skor: 75, status: "MS", temuan: 11, ptK: 7, tindakLanjut: 75, catatan: "Mahasiswa 7000, beasiswa 13%" },
      2024: { skor: 78, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 80, catatan: "Mahasiswa 7500, beasiswa 14%, UKM 22" },
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "Mahasiswa 8000, beasiswa 15%, UKM 25, serap <6bln 60%" },
    }
  },
  {
    no: 28, nama: "Standar Sumber Daya Manusia", kode: "SDM", kategori: "Tambahan",
    penanggungJawab: "BAKU",
    ami: {
      2021: { skor: 62, status: "BS", temuan: 19, ptK: 13, tindakLanjut: 58, catatan: "SDM 280, pelatihan 5" },
      2022: { skor: 66, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 64, catatan: "SDM 300, pelatihan 8" },
      2023: { skor: 70, status: "BS", temuan: 13, ptK: 9, tindakLanjut: 70, catatan: "SDM 320, pelatihan 10" },
      2024: { skor: 74, status: "MS", temuan: 10, ptK: 7, tindakLanjut: 76, catatan: "SDM 340, pelatihan 12, SKP 60%>80" },
      2025: { skor: 77, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 82, catatan: "SDM 350, pelatihan 15, retensi 80%" },
    }
  },
  {
    no: 29, nama: "Standar Keuangan, Sarana, Prasarana", kode: "KSP", kategori: "Tambahan",
    penanggungJawab: "BAKU / BAU / SPI",
    ami: {
      2021: { skor: 58, status: "BS", temuan: 22, ptK: 15, tindakLanjut: 52, catatan: "Anggaran Rp 55 m, opini WDP" },
      2022: { skor: 63, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 60, catatan: "Anggaran Rp 60 m, opini WDP" },
      2023: { skor: 68, status: "BS", temuan: 15, ptK: 10, tindakLanjut: 68, catatan: "Anggaran Rp 65 m, opini WDP, smart campus mulai" },
      2024: { skor: 72, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 75, catatan: "Anggaran Rp 75 m, opini WDP, smart campus 5" },
      2025: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 82, catatan: "Anggaran Rp 80 m, opini WDP, smart campus 5, inventaris 85%" },
    }
  },
  {
    no: 30, nama: "Standar Kerjasama", kode: "KJS", kategori: "Tambahan",
    penanggungJawab: "BAU",
    ami: {
      2021: { skor: 55, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 50, catatan: "MoU 15, MoA 20" },
      2022: { skor: 60, status: "BS", temuan: 17, ptK: 12, tindakLanjut: 56, catatan: "MoU 20, MoA 28" },
      2023: { skor: 65, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 64, catatan: "MoU 25, MoA 35, internasional 5" },
      2024: { skor: 70, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 72, catatan: "MoU 32, MoA 45, internasional 7" },
      2025: { skor: 75, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80, catatan: "MoU 40, MoA 60, internasional 10, implementasi 60%" },
    }
  },
  {
    no: 31, nama: "Standar MBKM", kode: "MBKM", kategori: "Tambahan",
    penanggungJawab: "UPPS",
    ami: {
      2021: { skor: 30, status: "BS", temuan: 28, ptK: 20, tindakLanjut: 25, catatan: "MBKM belum mulai" },
      2022: { skor: 40, status: "BS", temuan: 24, ptK: 17, tindakLanjut: 35, catatan: "MBKM di 5 prodi" },
      2023: { skor: 50, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 48, catatan: "MBKM di 10 prodi, 50 mahasiswa" },
      2024: { skor: 60, status: "BS", temuan: 16, ptK: 11, tindakLanjut: 60, catatan: "MBKM di 18 prodi, 120 mahasiswa" },
      2025: { skor: 68, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "MBKM di 25 prodi, 200 mahasiswa, mitra 30" },
    }
  },
  {
    no: 32, nama: "Standar Luaran & Capaian Tridharma", kode: "LCT", kategori: "Tambahan",
    penanggungJawab: "PPM",
    ami: {
      2021: { skor: 55, status: "BS", temuan: 20, ptK: 14, tindakLanjut: 50, catatan: "Lulusan 1000, publikasi 80, IKU 45%" },
      2022: { skor: 60, status: "BS", temuan: 17, ptK: 12, tindakLanjut: 56, catatan: "Lulusan 1100, publikasi 100, IKU 50%" },
      2023: { skor: 65, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 64, catatan: "Lulusan 1200, publikasi 130, IKU 55%" },
      2024: { skor: 70, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 72, catatan: "Lulusan 1350, publikasi 170, IKU 60%" },
      2025: { skor: 75, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80, catatan: "Lulusan 1500, publikasi 200, paten 15, IKU 65%" },
    }
  },
  {
    no: 33, nama: "Standar Pelayanan Kepada Mahasiswa", kode: "PKM-MHS", kategori: "Tambahan",
    penanggungJawab: "BAA",
    ami: {
      2021: { skor: 62, status: "BS", temuan: 18, ptK: 12, tindakLanjut: 58, catatan: "Kepuasan 60%, layanan digital 30%" },
      2022: { skor: 66, status: "BS", temuan: 15, ptK: 10, tindakLanjut: 64, catatan: "Kepuasan 63%, layanan digital 40%" },
      2023: { skor: 70, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 70, catatan: "Kepuasan 65%, layanan digital 45%" },
      2024: { skor: 74, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 76, catatan: "Kepuasan 68%, OSS 3 unit, layanan digital 50%" },
      2025: { skor: 78, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 82, catatan: "Kepuasan 70%, OSS 3 unit, layanan digital 50%" },
    }
  },
];

// ============================================================
// 8 INDIKATOR KINERJA UTAMA (IKU)
// ============================================================
export const IKU_LIST: IKU[] = [
  {
    no: 1, nama: "Lulusan terserap DUDI <6 bulan", unit: "Wakil Rektor III",
    baseline2025: 60, target2030: 92,
    capaian: { 2021: 45, 2022: 50, 2023: 55, 2024: 58, 2025: 60 },
    trend: "up"
  },
  {
    no: 2, nama: "Mahasiswa mendapat pengalaman luar kampus", unit: "UPPS",
    baseline2025: 20, target2030: 40,
    capaian: { 2021: 5, 2022: 8, 2023: 12, 2024: 15, 2025: 20 },
    trend: "up"
  },
  {
    no: 3, nama: "Dosen berkegiatan di luar kampus", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: 5, 2022: 8, 2023: 10, 2024: 12, 2025: 15 },
    trend: "up"
  },
  {
    no: 4, nama: "Praktisi mengajar di kampus (per prodi)", unit: "UPPS",
    baseline2025: 2, target2030: 6,
    capaian: { 2021: 1, 2022: 1, 2023: 2, 2024: 2, 2025: 2 },
    trend: "up"
  },
  {
    no: 5, nama: "Hasil kerja dosen digunakan masyarakat", unit: "LPPM",
    baseline2025: 15, target2030: 35,
    capaian: { 2021: 5, 2022: 8, 2023: 10, 2024: 12, 2025: 15 },
    trend: "up"
  },
  {
    no: 6, nama: "Prodi berkerjasama dengan DUDI (per prodi)", unit: "BAU",
    baseline2025: 3, target2030: 7,
    capaian: { 2021: 1, 2022: 2, 2023: 2, 2024: 3, 2025: 3 },
    trend: "up"
  },
  {
    no: 7, nama: "Mata kuliah metode praktik (%)", unit: "UPPS",
    baseline2025: 40, target2030: 60,
    capaian: { 2021: 20, 2022: 25, 2023: 30, 2024: 35, 2025: 40 },
    trend: "up"
  },
  {
    no: 8, nama: "Prodi terakreditasi unggul (%)", unit: "UPPS",
    baseline2025: 30, target2030: 70,
    capaian: { 2021: 10, 2022: 15, 2023: 20, 2024: 25, 2025: 30 },
    trend: "up"
  },
];

// ============================================================
// 4 DOKUMEN MUTU - SINKRONISASI
// ============================================================
export const DOKUMEN_MUTU: DokumenMutu[] = [
  {
    kode: "SPMI/PPM/DM/KBJ/2025",
    nama: "Kebijakan Mutu SPMI",
    halaman: 65,
    revisi: "01",
    tanggalPenetapan: "1 September 2025",
    status: "Baru",
    matchStandar: "Payung strategis untuk seluruh 33 standar SPMI"
  },
  {
    kode: "SPMI/PPM/DM/MNL/2025",
    nama: "Manual Mutu SPMI",
    halaman: 55,
    revisi: "01",
    tanggalPenetapan: "1 September 2025",
    status: "Baru",
    matchStandar: "Panduan operasional PPEPP untuk 33 standar"
  },
  {
    kode: "SPMI/PPM/DM/STD/2025",
    nama: "Standar Mutu SPMI",
    halaman: 312,
    revisi: "01",
    tanggalPenetapan: "1 September 2025",
    status: "Baru",
    matchStandar: "33 standar (8 Pendidikan + 8 Penelitian + 8 PkM + 9 Tambahan)"
  },
  {
    kode: "SPMI/PPM/DM/FORM/2025",
    nama: "Formulir Mutu SPMI",
    halaman: 132,
    revisi: "01",
    tanggalPenetapan: "1 September 2025",
    status: "Baru",
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

export function getRataRataSkorAMI(tahun: number): number {
  const total = STANDAR_SPMI.reduce((sum, s) => sum + (s.ami[tahun]?.skor || 0), 0);
  return Math.round(total / STANDAR_SPMI.length);
}

export function getRataRataSkorByKategori(tahun: number, kategori: KategoriStandar): number {
  const list = getStandarByKategori(kategori);
  const total = list.reduce((sum, s) => sum + (s.ami[tahun]?.skor || 0), 0);
  return Math.round(total / list.length);
}

export function getTotalTemuan(tahun: number): number {
  return STANDAR_SPMI.reduce((sum, s) => sum + (s.ami[tahun]?.temuan || 0), 0);
}

export function getTotalPTK(tahun: number): number {
  return STANDAR_SPMI.reduce((sum, s) => sum + (s.ami[tahun]?.ptK || 0), 0);
}

export function getRataTindakLanjut(tahun: number): number {
  const total = STANDAR_SPMI.reduce((sum, s) => sum + (s.ami[tahun]?.tindakLanjut || 0), 0);
  return Math.round(total / STANDAR_SPMI.length);
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

export function getSkorColor(skor: number): string {
  if (skor >= 85) return "text-emerald-400";
  if (skor >= 75) return "text-cyan-400";
  if (skor >= 65) return "text-amber-400";
  if (skor >= 50) return "text-orange-400";
  return "text-rose-400";
}

export function getSkorBgColor(skor: number): string {
  if (skor >= 85) return "bg-emerald-500";
  if (skor >= 75) return "bg-cyan-500";
  if (skor >= 65) return "bg-amber-500";
  if (skor >= 50) return "bg-orange-500";
  return "bg-rose-500";
}
