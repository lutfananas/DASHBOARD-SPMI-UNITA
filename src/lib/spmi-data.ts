// ============================================================
// DATA SPMI - 33 STANDAR + 8 IKU + AMI 2025 (data baru)
// Sesuai Permen 39/2025 dan dokumen mutu UNITA 2025
// Tahun 2021-2024: kosong (belum ada data AMI)
// Tahun 2025: berisi data AMI dari hasil audit
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
  } | null>;
}

export interface IKU {
  no: number;
  nama: string;
  unit: string;
  baseline2025: number | string;
  target2030: number | string;
  // Capaian per tahun (null untuk tahun yang belum ada data)
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
// 33 STANDAR SPMI - DATA AMI HANYA TAHUN 2025
// ============================================================
export const STANDAR_SPMI: StandarSPMI[] = [
  // === 8 STANDAR PENDIDIKAN ===
  {
    no: 1, nama: "Standar Kompetensi Lulusan", kode: "SKL", kategori: "Pendidikan",
    rujukanPasal: "Pasal 6-10", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 88, status: "MS", temuan: 3, ptK: 2, tindakLanjut: 95, catatan: "CPL terintegrasi PD Dikti, pengguna lulusan puas 88%" },
    }
  },
  {
    no: 2, nama: "Standar Proses Pembelajaran", kode: "SPB", kategori: "Pendidikan",
    rujukanPasal: "Pasal 11-24", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 87, status: "MS", temuan: 4, ptK: 3, tindakLanjut: 92, catatan: "PBL/CBL mulai diterapkan, kepuasan 87%" },
    }
  },
  {
    no: 3, nama: "Standar Penilaian", kode: "SPN", kategori: "Pendidikan",
    rujukanPasal: "Pasal 25", penanggungJawab: "GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 85, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90, catatan: "Bobot formatif ≥40%, transparansi 95%" },
    }
  },
  {
    no: 4, nama: "Standar Pengelolaan", kode: "SPP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 26-30", penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 84, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88, catatan: "Benchmarking tahunan, evaluasi diri 100%" },
    }
  },
  {
    no: 5, nama: "Standar Isi", kode: "SIS", kategori: "Pendidikan",
    rujukanPasal: "Pasal 31-39", penanggungJawab: "UPPS / GKM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 83, status: "MS", temuan: 5, ptK: 3, tindakLanjut: 88, catatan: "MBKM di 40 prodi, 350 mahasiswa MBKM" },
    }
  },
  {
    no: 6, nama: "Standar Dosen & Tenaga Kependidikan", kode: "SDT", kategori: "Pendidikan",
    rujukanPasal: "Pasal 40-45", penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 82, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 86, catatan: "Serdos 40% (target 52% 2026), 15 Lektor Kepala" },
    }
  },
  {
    no: 7, nama: "Standar Sarana & Prasarana", kode: "SSP", kategori: "Pendidikan",
    rujukanPasal: "Pasal 46-47", penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 81, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 86, catatan: "Akses disabilitas 40%, koleksi 15.000" },
    }
  },
  {
    no: 8, nama: "Standar Pembiayaan", kode: "SPM", kategori: "Pendidikan",
    rujukanPasal: "Pasal 48-51", penanggungJawab: "BAKU / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "BOP Rp 8 juta/mhs, target WTP 2026" },
    }
  },

  // === 8 STANDAR PENELITIAN ===
  {
    no: 9, nama: "Standar Luaran Penelitian", kode: "PEN-LRN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 80, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 84, catatan: "Publikasi 150, Scopus 20, sitasi 200" },
    }
  },
  {
    no: 10, nama: "Standar Proses Penelitian", kode: "PEN-PRS", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "Laporan tepat waktu 80%, etika 85%" },
    }
  },
  {
    no: 11, nama: "Standar Masukan Penelitian", kode: "PEN-MSK", kategori: "Penelitian",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 75, status: "BS", temuan: 10, ptK: 7, tindakLanjut: 80, catatan: "Peneliti aktif 80, lab dengan peralatan 70%" },
    }
  },
  {
    no: 12, nama: "Standar Hasil Penelitian", kode: "PEN-HSL", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 73, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 78, catatan: "TTG 10, komersialisasi 2, sitasi 200, RBL 25" },
    }
  },
  {
    no: 13, nama: "Standar Publikasi Ilmiah Penelitian", kode: "PEN-PUB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 80, catatan: "SINTA 1-3: 30, Scopus: 15, open access 25" },
    }
  },
  {
    no: 14, nama: "Standar Paten & HKI Penelitian", kode: "PEN-PTN", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 65, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Paten 3 (1 granted), HKI 10, komersialisasi 2" },
    }
  },
  {
    no: 15, nama: "Standar Diseminasi Penelitian", kode: "PEN-DSM", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 72, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 78, catatan: "Seminar 5, repository 5000 akses, media 15" },
    }
  },
  {
    no: 16, nama: "Standar Kolaborasi Penelitian", kode: "PEN-KLB", kategori: "Penelitian",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 67, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "MoU 20, internasional 5, joint 5, visiting 3" },
    }
  },

  // === 8 STANDAR PkM ===
  {
    no: 17, nama: "Standar Luaran PkM", kode: "PKM-LRN", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 73, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 78, catatan: "Luaran 80, produk 15, publikasi 30" },
    }
  },
  {
    no: 18, nama: "Standar Proses PkM", kode: "PKM-PRS", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 76, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 82, catatan: "Reviewer 10 orang, etika 85%, laporan tepat waktu 70%" },
    }
  },
  {
    no: 19, nama: "Standar Masukan PkM", kode: "PKM-MSK", kategori: "PkM",
    penanggungJawab: "LPPM / BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 70, status: "BS", temuan: 10, ptK: 7, tindakLanjut: 76, catatan: "Dana internal Rp 250 juta, eksternal Rp 150 juta, pelaksana 60" },
    }
  },
  {
    no: 20, nama: "Standar Hasil PkM", kode: "PKM-HSL", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 66, status: "BS", temuan: 11, ptK: 7, tindakLanjut: 74, catatan: "Dampak terukur 20, replikasi 5, berkelanjutan 15" },
    }
  },
  {
    no: 21, nama: "Standar Publikasi PkM", kode: "PKM-PUB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 64, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "Publikasi 30, SINTA 15, best practice 10" },
    }
  },
  {
    no: 22, nama: "Standar Produk & Jasa PkM", kode: "PKM-PRD", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 60, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 66, catatan: "Produk 20, adopsi 10, komersialisasi 2" },
    }
  },
  {
    no: 23, nama: "Standar Diseminasi PkM", kode: "PKM-DSM", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 62, status: "BS", temuan: 14, ptK: 9, tindakLanjut: 68, catatan: "Seminar 3, pameran 1, media 10, repository 2000 akses" },
    }
  },
  {
    no: 24, nama: "Standar Kolaborasi PkM", kode: "PKM-KLB", kategori: "PkM",
    penanggungJawab: "LPPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 60, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 66, catatan: "MoU 15, pemerintah 5, DUDI 8, internasional 2" },
    }
  },

  // === 9 STANDAR TAMBAHAN PELAMPAUAN SN DIKTI ===
  {
    no: 25, nama: "Standar VMTS", kode: "VMTS", kategori: "Tambahan",
    penanggungJawab: "Senat Universitas",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 85, status: "MS", temuan: 4, ptK: 2, tindakLanjut: 90, catatan: "Pemahaman 75%, integrasi VMTS 80%, dashboard 40%" },
    }
  },
  {
    no: 26, nama: "Standar Tata Pamong & Tata Kelola", kode: "TPTK", kategori: "Tambahan",
    penanggungJawab: "Senat / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 80, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 84, catatan: "SOTK 85%, SPI 5 audit, Senat 4 rapat" },
    }
  },
  {
    no: 27, nama: "Standar Mahasiswa", kode: "MHS", kategori: "Tambahan",
    penanggungJawab: "Wakil Rektor III",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 80, status: "MS", temuan: 7, ptK: 5, tindakLanjut: 84, catatan: "Mahasiswa 8000, beasiswa 15%, UKM 25, serap <6bln 60%" },
    }
  },
  {
    no: 28, nama: "Standar Sumber Daya Manusia", kode: "SDM", kategori: "Tambahan",
    penanggungJawab: "BAKU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 77, status: "MS", temuan: 8, ptK: 5, tindakLanjut: 82, catatan: "SDM 350, pelatihan 15, retensi 80%" },
    }
  },
  {
    no: 29, nama: "Standar Keuangan, Sarana, Prasarana", kode: "KSP", kategori: "Tambahan",
    penanggungJawab: "BAKU / BAU / SPI",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 76, status: "MS", temuan: 9, ptK: 6, tindakLanjut: 82, catatan: "Anggaran Rp 80 m, opini WDP, smart campus 5, inventaris 85%" },
    }
  },
  {
    no: 30, nama: "Standar Kerjasama", kode: "KJS", kategori: "Tambahan",
    penanggungJawab: "BAU",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 75, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80, catatan: "MoU 40, MoA 60, internasional 10, implementasi 60%" },
    }
  },
  {
    no: 31, nama: "Standar MBKM", kode: "MBKM", kategori: "Tambahan",
    penanggungJawab: "UPPS",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 68, status: "BS", temuan: 12, ptK: 8, tindakLanjut: 72, catatan: "MBKM di 25 prodi, 200 mahasiswa, mitra 30" },
    }
  },
  {
    no: 32, nama: "Standar Luaran & Capaian Tridharma", kode: "LCT", kategori: "Tambahan",
    penanggungJawab: "PPM",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 75, status: "BS", temuan: 8, ptK: 5, tindakLanjut: 80, catatan: "Lulusan 1500, publikasi 200, paten 15, IKU 65%" },
    }
  },
  {
    no: 33, nama: "Standar Pelayanan Kepada Mahasiswa", kode: "PKM-MHS", kategori: "Tambahan",
    penanggungJawab: "BAA",
    ami: {
      2021: null, 2022: null, 2023: null, 2024: null,
      2025: { skor: 78, status: "MS", temuan: 6, ptK: 4, tindakLanjut: 82, catatan: "Kepuasan 70%, OSS 3 unit, layanan digital 50%" },
    }
  },
];

// ============================================================
// 8 INDIKATOR KINERJA UTAMA (IKU) - Capaian hanya 2025
// ============================================================
export const IKU_LIST: IKU[] = [
  {
    no: 1, nama: "Lulusan terserap DUDI <6 bulan", unit: "Wakil Rektor III",
    baseline2025: 60, target2030: 92,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 60 },
    trend: "up"
  },
  {
    no: 2, nama: "Mahasiswa mendapat pengalaman luar kampus", unit: "UPPS",
    baseline2025: 20, target2030: 40,
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 20 },
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
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 15 },
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
    capaian: { 2021: null, 2022: null, 2023: null, 2024: null, 2025: 40 },
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
