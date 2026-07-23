// ============================================================
// DETAIL AMI - Data indikator per dokumen AMI TA 2022/2023
// Berdasarkan Permendikbud 3/2020 (SN-Dikti) & 5/2020 (Akreditasi)
// Sumber: 14 dokumen AMI dari PPM UNITA (folder GDrive LAPORAN MONEV + PENDIDIKAN)
// ============================================================

export interface IndikatorAMI2023 {
  no: number;
  indikator: string;
  capaian: string;
  target: string;
  status: "Tercapai" | "Belum Tercapai" | "Melebihi" | "Mencapai" | "Cukup" | "Baik";
}

export interface DokumenAMI2023 {
  id: string;
  namaDokumen: string;
  kodeDokumen: string;
  tanggal: string;
  rataSkor: string;
  kategori: string;
  standarTerkait: string;
  indikator: IndikatorAMI2023[];
}

// ============================================================
// 14 DOKUMEN AMI TA 2022/2023 (PERMENDIKBUD 3/2020 & 5/2020)
// ============================================================
export const DOKUMEN_AMI_2023_DETAIL: DokumenAMI2023[] = [
  {
    id: "AMI-2023-SPB-GANJIL",
    namaDokumen: "AMI Proses Pembelajaran 2022 Ganjil",
    kodeDokumen: "Monev-in - SPB-Ganjil",
    tanggal: "21 Februari 2023",
    rataSkor: "3,44 / 4,00 (86%) - Baik",
    kategori: "Pendidikan",
    standarTerkait: "Standar Proses Pembelajaran (Skala Likert 1-4, 7 Program Studi)",
    indikator: [
      { no: 1, indikator: "Program Studi Agribisnis", capaian: "3,45", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 2, indikator: "Program Studi Administrasi Publik/Hukum", capaian: "3,56", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 3, indikator: "Program Studi Akuntansi", capaian: "3,24", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 4, indikator: "Program Studi Hukum", capaian: "3,60", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 5, indikator: "Program Studi Manajemen", capaian: "3,20", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 6, indikator: "Program Studi Teknik Sipil", capaian: "3,40", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 7, indikator: "Program Studi Teknik Elektro", capaian: "3,60", target: "≥ 3,00 (Baik)", status: "Baik" },
    ]
  },
  {
    id: "AMI-2023-SPB-GENAP",
    namaDokumen: "AMI Proses Pembelajaran 2022 Genap",
    kodeDokumen: "Monev-in - SPB-Genap",
    tanggal: "14 Agustus 2023",
    rataSkor: "3,51 / 4,00 (88%) - Baik",
    kategori: "Pendidikan",
    standarTerkait: "Standar Proses Pembelajaran (Skala Likert 1-4, 7 Program Studi)",
    indikator: [
      { no: 1, indikator: "Program Studi Agribisnis", capaian: "3,60", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 2, indikator: "Program Studi Administrasi Publik/Hukum", capaian: "3,70", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 3, indikator: "Program Studi Akuntansi", capaian: "3,40", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 4, indikator: "Program Studi Hukum", capaian: "3,30", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 5, indikator: "Program Studi Manajemen", capaian: "3,50", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 6, indikator: "Program Studi Teknik Sipil", capaian: "3,70", target: "≥ 3,00 (Baik)", status: "Baik" },
      { no: 7, indikator: "Program Studi Teknik Elektro", capaian: "3,40", target: "≥ 3,00 (Baik)", status: "Baik" },
    ]
  },
  {
    id: "AMI-2023-VMTS",
    namaDokumen: "AMI VMTS TA 2022/2023",
    kodeDokumen: "Monev-in - VMTS",
    tanggal: "7 Agustus 2023",
    rataSkor: "3,425 / 4,00 (86%) - Mencapai",
    kategori: "Tambahan",
    standarTerkait: "Standar VMTS (Skala Likert 1-4, 364 responden)",
    indikator: [
      { no: 1, indikator: "Pemahaman VMTS - Pimpinan dan Dosen (66 responden)", capaian: "3,8", target: "≥ 3,00", status: "Baik" },
      { no: 2, indikator: "Pemahaman VMTS - Tenaga Kependidikan (38 responden)", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "Pemahaman VMTS - Mahasiswa (250 responden)", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Pemahaman VMTS - Stakeholders (10 responden)", capaian: "3,4", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Rata-rata skor pemahaman VMTS institusi", capaian: "3,425 (Baik)", target: "≥ 3,00 (Baik)", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2023-TPTK",
    namaDokumen: "AMI Tata Pamong & Tata Kelola TA 2022/2023",
    kodeDokumen: "Monev-in - TPTK",
    tanggal: "14 Agustus 2023",
    rataSkor: "3,375 / 4,00 (84%) - Mencapai",
    kategori: "Tambahan",
    standarTerkait: "Standar Tata Pamong & Tata Kelola (Skala 1-4, 364 responden, mengacu Permendikbud 3/2020 Pasal 24-29)",
    indikator: [
      { no: 1, indikator: "Kepuasan TPTK - Pimpinan dan Dosen (66 responden)", capaian: "3,4", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "Kepuasan TPTK - Tenaga Kependidikan (38 responden)", capaian: "3,5", target: "≥ 3,00", status: "Baik" },
      { no: 3, indikator: "Kepuasan TPTK - Mahasiswa (250 responden)", capaian: "3,4", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Kepuasan TPTK - Stakeholders (10 responden)", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Rata-rata skor kepuasan TPTK institusi", capaian: "3,375", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2023-MAHASISWA",
    namaDokumen: "AMI Mahasiswa TA 2022/2023",
    kodeDokumen: "Monev-in - Mahasiswa",
    tanggal: "13 Maret 2023",
    rataSkor: "Baik (rata-rata) - Mencapai",
    kategori: "Tambahan",
    standarTerkait: "Standar Mahasiswa (BEM/UKM, INBIS, Tracer Study)",
    indikator: [
      { no: 1, indikator: "BEM/UKM - Kepemilikan Program Kerja", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 2, indikator: "BEM/UKM - Implementasi Program Kerja", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 3, indikator: "BEM/UKM - Laporan Pertanggungjawaban", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 4, indikator: "INBIS - Kepemilikan Pedoman Pelaksanaan", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 5, indikator: "INBIS - Kepemilikan Program Kerja", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 6, indikator: "INBIS - Implementasi Program Kerja", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 7, indikator: "INBIS - Keterlibatan mahasiswa", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 8, indikator: "INBIS - Dampak & manfaat bagi pihak terlibat", capaian: "Cukup", target: "Baik", status: "Cukup" },
      { no: 9, indikator: "Tracer Study - Kepemilikan dokumen", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 10, indikator: "Tracer Study - Umpan balik responden", capaian: "Cukup", target: "Baik", status: "Cukup" },
      { no: 11, indikator: "Tracer Study - Konsistensi & keberlanjutan pelaporan", capaian: "Baik", target: "Baik", status: "Baik" },
      { no: 12, indikator: "Tracer Study - Peran Unit Pusat Karir", capaian: "Baik", target: "Baik", status: "Baik" },
    ]
  },
  {
    id: "AMI-2023-SDM",
    namaDokumen: "AMI SDM TA 2022/2023",
    kodeDokumen: "Monev-in - SDM",
    tanggal: "15 April 2023",
    rataSkor: "Mencapai (perlu peningkatan)",
    kategori: "Tambahan",
    standarTerkait: "Standar SDM (Dosen & Tenaga Kependidikan, evaluasi via DP3)",
    indikator: [
      { no: 1, indikator: "Dosen - Kinerja penunjang (seminar/workshop nasional & internasional)", capaian: "Aktif mengikuti", target: "Aktif", status: "Mencapai" },
      { no: 2, indikator: "Dosen - Kepanitiaan internal & eksternal", capaian: "Aktif mengikuti", target: "Aktif", status: "Mencapai" },
      { no: 3, indikator: "Dosen - Terdaftar di organisasi & asosiasi sesuai Prodi", capaian: "Terdaftar", target: "Terdaftar", status: "Mencapai" },
      { no: 4, indikator: "Dosen - Kepangkatan/Jabatan Fungsional", capaian: "Sebagian besar mengusulkan, dibantu tim percepatan", target: "100% berkepangkatan", status: "Belum Tercapai" },
      { no: 5, indikator: "Pustakawan - Kompetensi sesuai bidang (S1 Perpustakaan)", capaian: "Sesuai bidang", target: "S1 sesuai bidang", status: "Mencapai" },
      { no: 6, indikator: "Pustakawan - Keterlibatan seminar/workshop", capaian: "Sangat terbatas", target: "Aktif", status: "Belum Tercapai" },
      { no: 7, indikator: "Laboran - Kompetensi sesuai bidang keahlian", capaian: "Sesuai keahlian", target: "Sesuai keahlian", status: "Mencapai" },
      { no: 8, indikator: "Laboran - Keterlibatan seminar/workshop", capaian: "Kurang dilibatkan", target: "Aktif", status: "Belum Tercapai" },
      { no: 9, indikator: "Laboran - Sertifikasi", capaian: "Belum semua bersertifikasi", target: "100% bersertifikasi", status: "Belum Tercapai" },
      { no: 10, indikator: "Tenaga IT - Kompetensi & keterlibatan seminar", capaian: "Aktif mengikuti seminar/workshop eksternal", target: "Aktif", status: "Mencapai" },
      { no: 11, indikator: "Administrasi - Keterlibatan seminar/workshop", capaian: "Jarang dilibatkan", target: "Aktif", status: "Belum Tercapai" },
      { no: 12, indikator: "Dosen - Studi lanjut", capaian: "9 dosen sedang studi lanjut", target: "Meningkat", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2023-KEUANGAN",
    namaDokumen: "AMI Keuangan TA 2022/2023",
    kodeDokumen: "Monev-in - Keuangan",
    tanggal: "3 Mei 2023",
    rataSkor: "Defisit Rp 622.500 - Belum Tercapai",
    kategori: "Tambahan",
    standarTerkait: "Standar Keuangan (APB Universitas)",
    indikator: [
      { no: 1, indikator: "APB Universitas (Anggaran Penerimaan & Belanja)", capaian: "Rp 10.319.370.000", target: "Seimbang", status: "Mencapai" },
      { no: 2, indikator: "Realisasi penggunaan dana", capaian: "Rp 10.941.870.000", target: "≤ APB", status: "Belum Tercapai" },
      { no: 3, indikator: "Selisih anggaran (defisit)", capaian: "Defisit Rp 622.500", target: "Surplus / Seimbang", status: "Belum Tercapai" },
      { no: 4, indikator: "Sistem pengelolaan keuangan", capaian: "Tersentral", target: "Tersentral & akuntabel", status: "Mencapai" },
      { no: 5, indikator: "Sinkronisasi Renstra & Renop dengan APB", capaian: "Perlu disinkronkan", target: "Tersinkron", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2023-SARPRAS",
    namaDokumen: "AMI Sarana dan Prasarana TA 2022/2023",
    kodeDokumen: "Monev-in - SARPRAS",
    tanggal: "20 Maret 2023",
    rataSkor: "Baik (rata-rata) - Mencapai",
    kategori: "Tambahan",
    standarTerkait: "Standar Sarana & Prasarana (46 item inventaris)",
    indikator: [
      { no: 1, indikator: "Gedung Rektorat", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 2, indikator: "Ruang 5 Biro (Adm Akademik, Umum, Keuangan, Kemahasiswaan, LPPM)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 3, indikator: "Ruang Pusat Penjaminan Mutu", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 4, indikator: "Gedung 4 Fakultas (Ekonomi, FISIP, Hukum, Pertanian)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 5, indikator: "Ruang Program Studi (Teknik Sipil & Teknik Elektro)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 6, indikator: "Ruang Inkubator Bisnis", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 7, indikator: "Laboratorium Bahasa & Komputer", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 8, indikator: "Laboratorium Teknik Sipil (Aspal, Besi, Baja, Beton)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 9, indikator: "Laboratorium Teknik Elektro", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 10, indikator: "Ruang Pertemuan/Meeting", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 11, indikator: "Ruang Dosen", capaian: "65 unit, Baik", target: "Baik", status: "Baik" },
      { no: 12, indikator: "Ruang Kelas", capaian: "19 unit, Baik", target: "Baik", status: "Baik" },
      { no: 13, indikator: "Ruang UKM (Silat, BEM, PMB, MAPALA)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 14, indikator: "Gedung Perpustakaan, Auditorium, Musholla, IT Mart", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 15, indikator: "Toilet Dosen & Mahasiswa", capaian: "7 unit, Baik", target: "Baik", status: "Baik" },
      { no: 16, indikator: "Lapangan (Bola Basket, Tenis, Pencak Silat)", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 17, indikator: "Studio Musik & Alat Musik", capaian: "Baik/terawat", target: "Baik", status: "Baik" },
      { no: 18, indikator: "CCTV", capaian: "8 unit, Baik", target: "Baik", status: "Baik" },
      { no: 19, indikator: "Laptop", capaian: "15 unit", target: "Tersedia", status: "Mencapai" },
      { no: 20, indikator: "Komputer lengkap", capaian: "78 unit", target: "Tersedia", status: "Mencapai" },
      { no: 21, indikator: "Printer", capaian: "25 unit", target: "Tersedia", status: "Mencapai" },
      { no: 22, indikator: "LCD Proyektor & Stand LCD", capaian: "25 + 22 unit", target: "Tersedia", status: "Mencapai" },
      { no: 23, indikator: "Scanner", capaian: "8 unit", target: "Tersedia", status: "Mencapai" },
      { no: 24, indikator: "AC", capaian: "18 unit", target: "Tersedia", status: "Mencapai" },
      { no: 25, indikator: "Kursi & Meja", capaian: "760 set", target: "Tersedia", status: "Mencapai" },
      { no: 26, indikator: "Diesel, Mobil, Bus (kendaraan operasional)", capaian: "1+2+1 unit", target: "Tersedia", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2023-PENELITIAN-PKM",
    namaDokumen: "AMI Penelitian & PKM TA 2022/2023",
    kodeDokumen: "Monev-in - PEN-PKM",
    tanggal: "3 Agustus 2023",
    rataSkor: "Mencapai (skala lokal/daerah)",
    kategori: "Penelitian & PkM",
    standarTerkait: "Standar Penelitian & PkM (Roadmap LPPM, 2 skim: Regular & Institusi/IbM)",
    indikator: [
      { no: 1, indikator: "Roadmap penelitian & kelompok keilmuan", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 2, indikator: "Skim penelitian (Regular & Institusi)", capaian: "2 skim aktif", target: "Tersedia", status: "Mencapai" },
      { no: 3, indikator: "Pendanaan internal (UNITA) & eksternal (DIKTI/LLDIKTI)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 4, indikator: "Publikasi - BEMJ Business, Entrepreneurship & Management Journal 2(1)", capaian: "Sitasi 1", target: "Terpublikasi", status: "Mencapai" },
      { no: 5, indikator: "Publikasi - Get Press India 2023 (Strategi Bisnis Digital)", capaian: "Sitasi 10", target: "Terpublikasi", status: "Mencapai" },
      { no: 6, indikator: "Publikasi - BEMJ 2(2) (Komunikasi & Motivasi Kinerja)", capaian: "Sitasi 2", target: "Terpublikasi", status: "Mencapai" },
      { no: 7, indikator: "Publikasi - International Seminar (Digital Marketing Strategy)", capaian: "Sitasi 0", target: "Terpublikasi", status: "Mencapai" },
      { no: 8, indikator: "Publikasi - International Journal of AI Research 6(1.2)", capaian: "Sitasi 0", target: "Terpublikasi", status: "Mencapai" },
      { no: 9, indikator: "Publikasi - Journal of Social Science (Economic Factors Divorce)", capaian: "Sitasi 0", target: "Terpublikasi", status: "Mencapai" },
      { no: 10, indikator: "Diseminasi via jurnal Prodi, jurnal institusi, jurnal terakreditasi", capaian: "Rutin", target: "Rutin", status: "Mencapai" },
      { no: 11, indikator: "Pelibatan mahasiswa dalam penelitian (skim Regular)", capaian: "Aktif", target: "Aktif", status: "Mencapai" },
      { no: 12, indikator: "Skim PkM (Regular & IbM/Ipteks bagi Masyarakat)", capaian: "2 skim aktif", target: "Tersedia", status: "Mencapai" },
      { no: 13, indikator: "Skala PkM", capaian: "Lokal/Daerah", target: "Nasional/Internasional", status: "Belum Tercapai" },
      { no: 14, indikator: "Hubungan penelitian-PkM-pengajaran (bahan ajar)", capaian: "Hasil jadi bahan ajar", target: "Terintegrasi", status: "Mencapai" },
      { no: 15, indikator: "HKI/Paten", capaian: "Belum dilaporkan terstruktur", target: "Meningkat/tahun", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2023-MBKM",
    namaDokumen: "AMI MBKM TA 2022/2023",
    kodeDokumen: "Monev-in - MBKM",
    tanggal: "10 April 2023",
    rataSkor: "Sangat kurang - Belum Tercapai",
    kategori: "Tambahan",
    standarTerkait: "Standar MBKM (Permendikbud 3/2020, 9 skema: Pertukaran Pelajar, Magang, Riset, Proyek Independen, Wirausaha, Kemanusiaan, Asistensi Mengajar, KKN Tematik, Bela Negara)",
    indikator: [
      { no: 1, indikator: "Jumlah mahasiswa lolos MBKM TA 2022/2023", capaian: "3 mahasiswa (Fakultas Ekonomi)", target: "Tinggi", status: "Belum Tercapai" },
      { no: 2, indikator: "Skema MBKM yang diikuti", capaian: "Kewirausahaan & Studi Proyek Independen", target: "Beragam skema", status: "Belum Tercapai" },
      { no: 3, indikator: "Minat mahasiswa mengikuti MBKM", capaian: "Tinggi", target: "Tinggi", status: "Mencapai" },
      { no: 4, indikator: "Tingkat seleksi portal MBKM", capaian: "Ketat (kualifikasi tertentu)", target: "Selektif", status: "Mencapai" },
      { no: 5, indikator: "Bantuan potongan UKT", capaian: "Maksimal Rp 2.400.000", target: "Tersedia", status: "Mencapai" },
      { no: 6, indikator: "Sosialisasi tata cara pendaftaran MBKM", capaian: "Perlu intensif", target: "Intens", status: "Belum Tercapai" },
      { no: 7, indikator: "Pelatihan tes seleksi MBKM", capaian: "Belum ada", target: "Tersedia", status: "Belum Tercapai" },
      { no: 8, indikator: "Kerjasama dengan Mitra MBKM", capaian: "Terbatas", target: "Banyak mitra", status: "Belum Tercapai" },
      { no: 9, indikator: "Penanggungjawab khusus pelaporan MBKM", capaian: "Belum ada", target: "Tersedia", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2023-KESEJAHTERAAN",
    namaDokumen: "AMI Kesejahteraan TA 2022/2023",
    kodeDokumen: "Monev-in - KSJH",
    tanggal: "15 Mei 2023",
    rataSkor: "Tersedia & terlaksana - Mencapai",
    kategori: "Tambahan",
    standarTerkait: "Standar Kesejahteraan (10 indikator: pedoman penggajian, insentif, dana purna tugas, cuti, jaminan, bebas pendapat, beasiswa, asuransi, reward, dana sosial)",
    indikator: [
      { no: 1, indikator: "Pedoman penggajian (Gaji pokok, Golongan, DPK)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 2, indikator: "Pedoman pemberian insentif (Transport, Lembur, Prestasi)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 3, indikator: "Dokumen kesejahteraan (Dana purna tugas, hari tua/pensiun, kunjungan)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 4, indikator: "Kesejahteraan cuti & izin (kebijakan tidak menjalankan tugas jangka waktu tertentu)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 5, indikator: "Jaminan keselamatan, perlindungan kecelakaan, ketenagakerjaan", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 6, indikator: "Kebebasan berpendapat", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 7, indikator: "Beasiswa mahasiswa (Bidik Misi & Prestasi)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 8, indikator: "Asuransi Mahasiswa", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 9, indikator: "Reward Prestasi", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 10, indikator: "Dana Sosial & Dana Kegiatan Mahasiswa", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2023-PLYN-GANJIL",
    namaDokumen: "AMI Pelayanan Kepada Mahasiswa Ganjil 2022/2023",
    kodeDokumen: "Monev-in - PLYN-Ganjil",
    tanggal: "17 Januari 2023",
    rataSkor: "3,40 / 5,00 (68%) - Cukup/Baik",
    kategori: "Tambahan",
    standarTerkait: "Pelayanan Akademik Mahasiswa (Skala 1-5, 6 Program Studi: Adm Negara, Ilmu Hukum, Agribisnis, Manajemen, Akuntansi, Teknik Sipil)",
    indikator: [
      { no: 1, indikator: "Pelayanan Program Studi Ilmu Administrasi Negara", capaian: "3,33", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 2, indikator: "Pelayanan Program Studi Ilmu Hukum", capaian: "3,36", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 3, indikator: "Pelayanan Program Studi Agribisnis", capaian: "3,36", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 4, indikator: "Pelayanan Program Studi Manajemen", capaian: "3,51", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 5, indikator: "Pelayanan Program Studi Akuntansi", capaian: "3,33", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 6, indikator: "Pelayanan Program Studi Teknik Sipil", capaian: "3,50", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 7, indikator: "Pelayanan Biro Administrasi Akademik & Kemahasiswaan (BAAK)", capaian: "3,39", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 8, indikator: "Pelayanan Biro Keuangan", capaian: "3,57", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 9, indikator: "Pelayanan Biro Umum", capaian: "3,30", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 10, indikator: "Pelayanan Biro Kemahasiswaan", capaian: "3,37", target: "≥ 4,00 (Baik)", status: "Cukup" },
    ]
  },
  {
    id: "AMI-2023-PLYN-GENAP",
    namaDokumen: "AMI Pelayanan Kepada Mahasiswa Genap 2022/2023",
    kodeDokumen: "Monev-in - PLYN-Genap",
    tanggal: "Juli 2023",
    rataSkor: "3,74 / 5,00 (75%) - Baik",
    kategori: "Tambahan",
    standarTerkait: "Pelayanan Akademik Mahasiswa (Skala 1-5, 7 Program Studi: + Teknik Elektro baru)",
    indikator: [
      { no: 1, indikator: "Pelayanan Program Studi Administrasi Publik", capaian: "3,79", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 2, indikator: "Pelayanan Program Studi Ilmu Hukum", capaian: "3,90", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 3, indikator: "Pelayanan Program Studi Agribisnis", capaian: "4,10 (Baik Sekali)", target: "≥ 4,00 (Baik)", status: "Baik" },
      { no: 4, indikator: "Pelayanan Program Studi Manajemen", capaian: "4,00", target: "≥ 4,00 (Baik)", status: "Baik" },
      { no: 5, indikator: "Pelayanan Program Studi Akuntansi", capaian: "3,90", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 6, indikator: "Pelayanan Program Studi Teknik Sipil", capaian: "4,00 (Baik Sekali)", target: "≥ 4,00 (Baik)", status: "Baik" },
      { no: 7, indikator: "Pelayanan Program Studi Teknik Elektro (baru)", capaian: "4,00 (Baik Sekali)", target: "≥ 4,00 (Baik)", status: "Baik" },
      { no: 8, indikator: "Pelayanan Biro Administrasi Akademik & Kemahasiswaan (BAAK)", capaian: "3,39", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 9, indikator: "Pelayanan Biro Keuangan", capaian: "3,57", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 10, indikator: "Pelayanan Biro Umum", capaian: "3,30", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 11, indikator: "Pelayanan Biro Kemahasiswaan", capaian: "3,37", target: "≥ 4,00 (Baik)", status: "Cukup" },
      { no: 12, indikator: "Pelayanan UPT Perpustakaan", capaian: "3,09 (terendah)", target: "≥ 4,00 (Baik)", status: "Belum Tercapai" },
      { no: 13, indikator: "Pelayanan LPPM", capaian: "3,32", target: "≥ 4,00 (Baik)", status: "Cukup" },
    ]
  },
];
