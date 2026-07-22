// ============================================================
// DETAIL AMI - Data indikator per dokumen AMI 2023/2024 (Permen 53/2023)
// Sumber: 20 dokumen AMI dari PPM UNITA (folder SPMI UPLOAD 2023-2024)
// ============================================================

export interface IndikatorAMI {
  no: number;
  indikator: string;
  capaian: string;
  target: string;
  status: "Tercapai" | "Belum Tercapai" | "Melebihi" | "Mencapai";
}

export interface DokumenAMI {
  id: string;
  namaDokumen: string;
  kodeDokumen: string;
  tanggal: string;
  rataSkor: string;
  kategori: string;
  standarTerkait: string;
  indikator: IndikatorAMI[];
}

// ============================================================
// 20 DOKUMEN AMI TA 2023/2024 (PERMEN 53/2023) DENGAN INDIKATOR DETAIL
// ============================================================
export const DOKUMEN_AMI_2024_DETAIL: DokumenAMI[] = [
  {
    id: "AMI-2024-PENDIDIKAN",
    namaDokumen: "AMI Pendidikan TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/PEND/2023",
    tanggal: "8 Juli 2024",
    rataSkor: "88% - Mencapai Standar",
    kategori: "Pendidikan",
    standarTerkait: "Standar A-H (8 Standar Pendidikan sesuai Permendikbud 3/2020)",
    indikator: [
      // Standar A - Kompetensi Lulusan / Mahasiswa
      { no: 1, indikator: "Kompetensi terserap dalam Lulusan dunia kerja", capaian: "80%", target: "≥ 70%", status: "Mencapai" },
      { no: 2, indikator: "Mahasiswa menjadi usahawan", capaian: "15%", target: "≥ 10%", status: "Mencapai" },
      { no: 3, indikator: "Rata-rata IPK lulusan", capaian: "3,42", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Rata-rata masa studi", capaian: "4,0 tahun", target: "≤ 4,5 tahun", status: "Mencapai" },
      { no: 5, indikator: "Rata-rata masa tunggu lulusan kerja", capaian: "4 bulan", target: "≤ 6 bulan", status: "Mencapai" },
      // Standar B - Isi
      { no: 6, indikator: "Dokumen kompetensi lulusan lengkap", capaian: "1+ dokumen", target: "1 dokumen minimal", status: "Mencapai" },
      { no: 7, indikator: "Matriks/peta kurikulum", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 8, indikator: "Silabus mutakhir", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 9, indikator: "Tinjauan kurikulum", capaian: "2 kali/tahun", target: "≥ 1/tahun", status: "Mencapai" },
      { no: 10, indikator: "Rasio mahasiswa per dosen pembimbing akademik", capaian: "18", target: "≤ 20", status: "Mencapai" },
      { no: 11, indikator: "Rasio mahasiswa per dosen pembimbing tugas akhir", capaian: "12", target: "≤ 10", status: "Mencapai" },
      { no: 12, indikator: "Pertemuan bimbingan akademik per semester", capaian: "4 kali", target: "≥ 3 kali/semester", status: "Mencapai" },
      { no: 13, indikator: "Pertemuan bimbingan tugas akhir per semester", capaian: "12 kali", target: "≥ 10 kali/semester", status: "Mencapai" },
      // Standar C - Bahan ajar & Proses
      { no: 14, indikator: "Bahan ajar & referensi mutakhir", capaian: "100%", target: "100% mata kuliah", status: "Mencapai" },
      { no: 15, indikator: "RPS ditinjau berkala", capaian: "2x/tahun", target: "≥ 1x/tahun", status: "Mencapai" },
      { no: 16, indikator: "Jumlah mahasiswa per kelas", capaian: "35", target: "≤ 40 orang", status: "Mencapai" },
      { no: 17, indikator: "Mata kuliah blended", capaian: "25%", target: "≥ 20%", status: "Mencapai" },
      { no: 18, indikator: "Monitoring kehadiran & kesesuaian materi", capaian: "2x/semester", target: "1x/semester", status: "Mencapai" },
      { no: 19, indikator: "Penjaminan mutu soal ujian", capaian: "1x/semester", target: "1x/semester", status: "Mencapai" },
      { no: 20, indikator: "Pertemuan kuliah & praktikum (16x/semester)", capaian: "100%", target: "100%", status: "Mencapai" },
      // Standar D - Penilaian
      { no: 21, indikator: "Dosen menggunakan berbagai teknik penilaian", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 22, indikator: "Dosen memberi umpan balik & kesempatan tanya", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 23, indikator: "Prosedur penilaian lengkap", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 24, indikator: "Input nilai ≤ 10 hari kerja pasca ujian", capaian: "100%", target: "100%", status: "Mencapai" },
      // Standar E - Dosen & Tendik
      { no: 25, indikator: "Dosen berkualifikasi S2/S3 sesuai bidang", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 26, indikator: "BKD ≥ 40 jam/minggu / 12-16 SKS", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 27, indikator: "Dosen bersertifikat keahlian sesuai prodi", capaian: "80%", target: "≥ 75%", status: "Mencapai" },
      { no: 28, indikator: "Tenaga kependidikan S1 sesuai tugas", capaian: "80%", target: "≥ 75%", status: "Mencapai" },
      { no: 29, indikator: "Tenaga kependidikan bersertifikat keahlian", capaian: "60%", target: "≥ 50%", status: "Mencapai" },
      // Standar F - Sarpras
      { no: 30, indikator: "Ruang kelas (≥42 m², ventilasi, penerangan baik, rasio 1:30)", capaian: "100%", target: "≥ 100%", status: "Mencapai" },
      { no: 31, indikator: "Fasilitas interaktif sesuai kebutuhan", capaian: "100%", target: "100%", status: "Mencapai" },
      { no: 32, indikator: "Buku teks minimal 50 judul", capaian: "55 judul", target: "≥ 50 judul", status: "Mencapai" },
      // Standar G - Pengelolaan
      { no: 33, indikator: "Dokumen RPS, laporan evaluasi, input nilai online (Sisformik)", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 34, indikator: "Wawancara Prodi tentang siklus PPEPP", capaian: "Dilakukan", target: "Dilakukan", status: "Mencapai" },
      // Standar H - Pembiayaan
      { no: 35, indikator: "Dokumen RKAT, realisasi anggaran, alokasi dana riset/PkM", capaian: "Tersedia", target: "Tersedia", status: "Mencapai" },
      { no: 36, indikator: "Wawancara bendahara & dosen penerima dana", capaian: "Dilakukan", target: "Dilakukan", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-VMTS",
    namaDokumen: "AMI VMTS TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/VMTS/2023",
    tanggal: "10 November 2023",
    rataSkor: "3,00 / 4,00 (75%) - Belum mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar VMTS (Likert 1-4, 30 Sample)",
    indikator: [
      { no: 1, indikator: "Saya memahami visi dan misi Universitas Tulungagung dengan jelas", capaian: "2,97", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 2, indikator: "Visi universitas relevan dengan perkembangan ilmu pengetahuan", capaian: "2,77", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 3, indikator: "Misi universitas mencerminkan komitmen menghasilkan lulusan kompeten", capaian: "2,93", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 4, indikator: "Visi dan misi sesuai dengan kebutuhan masyarakat dan dunia kerja", capaian: "3,07", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Universitas rutin menyosialisasikan visi dan misi", capaian: "2,90", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 6, indikator: "Kegiatan akademik selaras dengan visi dan misi", capaian: "2,90", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 7, indikator: "Pimpinan menunjukkan komitmen kuat terhadap visi dan misi", capaian: "3,07", target: "≥ 3,00", status: "Mencapai" },
      { no: 8, indikator: "Penelitian dan pengabdian mendukung visi dan misi", capaian: "3,27", target: "≥ 3,00", status: "Mencapai" },
      { no: 9, indikator: "Mahasiswa aktif dalam kegiatan pendukung visi dan misi", capaian: "2,87", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 10, indikator: "Saya merasa bangga dengan visi dan misi universitas", capaian: "2,97", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 11, indikator: "Misi mendukung pengembangan keahlian dan karakter lulusan", capaian: "3,10", target: "≥ 3,00", status: "Mencapai" },
      { no: 12, indikator: "Visi dan misi terintegrasi dalam kurikulum dan pembelajaran", capaian: "3,37", target: "≥ 3,00", status: "Mencapai" },
      { no: 13, indikator: "Mahasiswa diberi kesempatan mengaplikasikan nilai-nilai visi misi", capaian: "3,30", target: "≥ 3,00", status: "Mencapai" },
      { no: 14, indikator: "Mahasiswa dilibatkan dalam evaluasi visi dan misi", capaian: "2,93", target: "≥ 3,00", status: "Belum Tercapai" },
      { no: 15, indikator: "Visi dan misi menginspirasi prestasi akademik dan non-akademik", capaian: "2,83", target: "≥ 3,00", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2024-TPTK",
    namaDokumen: "AMI Tata Pamong dan Tata Kelola TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/TPTK/2023",
    tanggal: "3 November 2023",
    rataSkor: "3,62 / 4,00 (90%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar Tata Pamong & Tata Kelola (Likert 1-4, 50 Sample)",
    indikator: [
      { no: 1, indikator: "Sistem tata pamong sudah berjalan baik dan transparan", capaian: "3,60", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "Pimpinan mendukung pengembangan akademik dan non-akademik", capaian: "3,62", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "Tata kelola keuangan transparan dan akuntabel", capaian: "3,64", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Pelayanan optimal terhadap keluhan mahasiswa", capaian: "3,58", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Pengambilan keputusan melibatkan berbagai pihak", capaian: "3,56", target: "≥ 3,00", status: "Mencapai" },
      { no: 6, indikator: "Sarana dan prasarana memadai", capaian: "3,60", target: "≥ 3,00", status: "Mencapai" },
      { no: 7, indikator: "Visi dan misi jelas, mendukung pendidikan nasional", capaian: "3,65", target: "≥ 3,00", status: "Mencapai" },
      { no: 8, indikator: "Tata kelola SDM profesional dan kompeten", capaian: "3,66", target: "≥ 3,00", status: "Mencapai" },
      { no: 9, indikator: "Akses adil dan merata bagi seluruh mahasiswa", capaian: "3,60", target: "≥ 3,00", status: "Mencapai" },
      { no: 10, indikator: "Komunikasi mahasiswa dan pengelola berjalan baik", capaian: "3,62", target: "≥ 3,00", status: "Mencapai" },
      { no: 11, indikator: "Informasi kebijakan tersedia dengan baik", capaian: "3,64", target: "≥ 3,00", status: "Mencapai" },
      { no: 12, indikator: "Mahasiswa diberi kesempatan memberi masukan", capaian: "3,58", target: "≥ 3,00", status: "Mencapai" },
      { no: 13, indikator: "Dosen dan staf terbuka terhadap saran mahasiswa", capaian: "3,60", target: "≥ 3,00", status: "Mencapai" },
      { no: 14, indikator: "Sistem administrasi mudah diakses dan dipahami", capaian: "3,65", target: "≥ 3,00", status: "Mencapai" },
      { no: 15, indikator: "Kebijakan menjaga keberlanjutan lingkungan kampus", capaian: "3,62", target: "≥ 3,00", status: "Mencapai" },
      { no: 16, indikator: "Pengembangan organisasi mahasiswa didukung", capaian: "3,58", target: "≥ 3,00", status: "Mencapai" },
      { no: 17, indikator: "Penilaian akademik dilakukan transparan dan objektif", capaian: "3,66", target: "≥ 3,00", status: "Mencapai" },
      { no: 18, indikator: "Kebijakan kampus mendukung keberagaman dan inklusivitas", capaian: "3,60", target: "≥ 3,00", status: "Mencapai" },
      { no: 19, indikator: "Unit layanan mahasiswa memberikan pelayanan responsif", capaian: "3,64", target: "≥ 3,00", status: "Mencapai" },
      { no: 20, indikator: "Evaluasi rutin terhadap efektivitas tata kelola dilakukan", capaian: "3,66", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-MAHASISWA",
    namaDokumen: "AMI Mahasiswa TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/MHS/2023",
    tanggal: "4 Maret 2024",
    rataSkor: "3,71 / 4,00 (93%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar Mahasiswa (Likert 1-4, 500 Sample, 4 domain)",
    indikator: [
      { no: 1, indikator: "PMB Prosedur", capaian: "3,70", target: "≥ 3,30", status: "Mencapai" },
      { no: 2, indikator: "PMB Instrumen", capaian: "3,69", target: "≥ 3,30", status: "Mencapai" },
      { no: 3, indikator: "PMB Ketentuan Tes", capaian: "3,71", target: "≥ 3,30", status: "Mencapai" },
      { no: 4, indikator: "PMB Registrasi", capaian: "3,74", target: "≥ 3,30", status: "Mencapai" },
      { no: 5, indikator: "WKK Keikutsertaan", capaian: "3,76", target: "≥ 3,30", status: "Mencapai" },
      { no: 6, indikator: "WKK Pemahaman Materi", capaian: "3,72", target: "≥ 3,30", status: "Mencapai" },
      { no: 7, indikator: "BEM Program Kerja", capaian: "3,68", target: "≥ 3,30", status: "Mencapai" },
      { no: 8, indikator: "BEM Implementasi", capaian: "3,70", target: "≥ 3,30", status: "Mencapai" },
      { no: 9, indikator: "BEM Laporan", capaian: "3,69", target: "≥ 3,30", status: "Mencapai" },
      { no: 10, indikator: "Tracer Dokumen", capaian: "3,65", target: "≥ 3,30", status: "Mencapai" },
      { no: 11, indikator: "Tracer Umpan Balik", capaian: "3,71", target: "≥ 3,30", status: "Mencapai" },
      { no: 12, indikator: "Tracer Konsistensi", capaian: "3,70", target: "≥ 3,30", status: "Mencapai" },
      { no: 13, indikator: "Tracer Unit Karir", capaian: "3,73", target: "≥ 3,30", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-PENELITIAN",
    namaDokumen: "AMI Penelitian TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/PNLT/2023",
    tanggal: "15 Juli 2024",
    rataSkor: "95% - Melampaui Standar",
    kategori: "Penelitian",
    standarTerkait: "Standar A-H Penelitian (sesuai Permendikbud 3/2020)",
    indikator: [
      // Standar A - Hasil
      { no: 1, indikator: "Penelitian sesuai kode etik", capaian: "100%", target: "100%", status: "Melebihi" },
      { no: 2, indikator: "Relevansi dengan pendidikan dan IPTEK", capaian: "85% libatkan mahasiswa, 15 HAKI", target: "Tersedia", status: "Melebihi" },
      { no: 3, indikator: "Publikasi artikel ilmiah", capaian: "12 jurnal internasional, 35 nasional, 18 seminar", target: "Tersedia", status: "Melebihi" },
      // Standar B - Isi
      { no: 4, indikator: "Sesuai roadmap penelitian LPPM", capaian: "95%", target: "≥ 75%", status: "Melebihi" },
      { no: 5, indikator: "Kualitas publikasi", capaian: "12 internasional, 35 nasional", target: "Meningkat", status: "Melebihi" },
      // Standar C - Proses
      { no: 6, indikator: "Perencanaan awal tahun", capaian: "Roadmap & jadwal di semua Prodi", target: "Tersedia", status: "Melebihi" },
      { no: 7, indikator: "Pelaksanaan sesuai jadwal", capaian: "100% tepat waktu, monitoring aktif", target: "Tepat waktu", status: "Melebihi" },
      { no: 8, indikator: "Monitoring & evaluasi akhir semester", capaian: "Evaluasi sistematis tiap akhir semester", target: "Terlaksana", status: "Melebihi" },
      // Standar D - Penilaian
      { no: 9, indikator: "Transparansi proposal dan hasil", capaian: "98% proposal memuat tujuan-anggaran, 90% sesuai tujuan", target: "Transparan", status: "Melebihi" },
      { no: 10, indikator: "Penilaian oleh pihak berkompeten", capaian: "Semua penelitian direview eksternal melalui seminar hasil", target: "Review eksternal", status: "Melebihi" },
      // Standar E - Peneliti
      { no: 11, indikator: "Kesesuaian bidang keilmuan", capaian: "100% sesuai keilmuan", target: "100%", status: "Melebihi" },
      { no: 12, indikator: "Penghargaan nasional", capaian: "5 penelitian mendapat penghargaan", target: "Ada", status: "Melebihi" },
      { no: 13, indikator: "Kolaborasi penelitian", capaian: "40 dosen terlibat kolaboratif", target: "Ada", status: "Melebihi" },
      { no: 14, indikator: "Penguasaan metodologi", capaian: "88% dosen ikuti pelatihan metodologi", target: "Meningkat", status: "Melebihi" },
      { no: 15, indikator: "Prestasi hibah & pendanaan", capaian: "22 penelitian mendapat hibah", target: "Ada", status: "Melebihi" },
      // Standar F - Sarpras
      { no: 16, indikator: "Ketersediaan fasilitas kampus", capaian: "95% penelitian gunakan sarpras kampus", target: "≥ 75%", status: "Melebihi" },
      { no: 17, indikator: "Kontrak penelitian terdokumentasi", capaian: "100% terdokumentasi di LPPM", target: "100%", status: "Melebihi" },
      // Standar G - Pengelolaan
      { no: 18, indikator: "Rencana induk pengembangan", capaian: "Tersedia lengkap di semua Prodi", target: "Tersedia", status: "Melebihi" },
      { no: 19, indikator: "SOP monitoring dan evaluasi", capaian: "SOP & dokumen penilaian aktif digunakan", target: "Tersedia", status: "Melebihi" },
      // Standar H - Pendanaan
      { no: 20, indikator: "Dana memadai untuk penelitian", capaian: "Rata-rata Rp 15-20 juta/penelitian, 85% terserap", target: "Memadai", status: "Melebihi" },
      { no: 21, indikator: "Pendanaan eksternal", capaian: "18 penelitian didanai pihak luar", target: "Ada", status: "Melebihi" },
    ]
  },
  {
    id: "AMI-2024-PKM",
    namaDokumen: "AMI Pengabdian kepada Masyarakat TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/PKM/2023",
    tanggal: "22 Juli 2024",
    rataSkor: "90% - Mencapai Standar (TTG Belum Tercapai)",
    kategori: "PkM",
    standarTerkait: "Standar PkM 1-13 (sesuai Permendikbud 3/2020)",
    indikator: [
      { no: 1, indikator: "Penyelesaian masalah oleh mitra/Desa", capaian: ">50 desa, 14 institusi mitra, dosen ≥1 judul/thn", target: "PkM > 50 desa", status: "Tercapai" },
      { no: 2, indikator: "Pemanfaatan teknologi tepat guna", capaian: "20% (13 alat inovatif di 11 desa)", target: ">10 TTG/tahun (100%)", status: "Belum Tercapai" },
      { no: 3, indikator: "Pengembangan ilmu pengetahuan dan teknologi", capaian: "8 jurnal nasional + 2 jurnal internasional", target: "Publikasi dari PkM", status: "Tercapai" },
      { no: 4, indikator: "Bahan ajar untuk pengayaan perkuliahan", capaian: "5 bahan ajar dari PkM di RPS", target: "Ada", status: "Tercapai" },
      { no: 5, indikator: "Modul pelatihan dihasilkan", capaian: "6 modul pelatihan kewirausahaan & pertanian", target: "Ada", status: "Tercapai" },
      { no: 6, indikator: "Tata laksana hasil PkM", capaian: "Pedoman penulisan & peta keahlian dosen tersedia", target: "Tersedia", status: "Tercapai" },
      { no: 7, indikator: "Isi PkM (penghargaan, publikasi, paten, inovasi)", capaian: "2 penghargaan nasional, 20 publikasi, 4 paten, 9 inovasi, 100% tepat waktu", target: "Ada", status: "Tercapai" },
      { no: 8, indikator: "Proses PkM (proposal, pelaksanaan, evaluasi)", capaian: "36 proposal → 32 dilaksanakan, 19 libatkan mahasiswa, semua sah & termonitor", target: "Terlaksana", status: "Tercapai" },
      { no: 9, indikator: "Penilaian PkM (survei masyarakat)", capaian: "92% sangat puas, 8% puas", target: "Puas", status: "Tercapai" },
      { no: 10, indikator: "Peneliti PkM sesuai kualifikasi", capaian: "100% sesuai kualifikasi, 95% sesuai keahlian", target: "Sesuai", status: "Tercapai" },
      { no: 11, indikator: "Sarana dan prasarana PkM", capaian: "100% kegiatan gunakan fasilitas kampus", target: "Tersedia", status: "Tercapai" },
      { no: 12, indikator: "Pengelolaan PkM (renstra & panduan)", capaian: "Renstra PkM 2023-2027 & panduan operasional lengkap", target: "Tersedia", status: "Tercapai" },
      { no: 13, indikator: "Pendanaan dan pembiayaan PkM", capaian: "Dana internal Rp 250 juta/tahun", target: "Tersedia", status: "Tercapai" },
    ]
  },
  {
    id: "AMI-2024-SDM",
    namaDokumen: "AMI SDM TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/SDM/2023",
    tanggal: "15 Juni 2024",
    rataSkor: "82% - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar SDM (Dosen & Tenaga Kependidikan)",
    indikator: [
      // Dosen
      { no: 1, indikator: "Evaluasi Kinerja Penunjang Dosen", capaian: "80% dosen menunjukkan kinerja penunjang memadai (penelitian, PkM, seminar)", target: "≥ 75%", status: "Mencapai" },
      { no: 2, indikator: "Evaluasi Kinerja Kepangkatan Dosen", capaian: "80% dosen sudah terakreditasi kepangkatan, 20% belum", target: "100% berkepangkatan", status: "Belum Tercapai" },
      { no: 3, indikator: "Evaluasi Sertifikasi Dosen", capaian: ">60% dosen sudah memiliki sertifikasi dosen", target: "≥ 75%", status: "Belum Tercapai" },
      // Tendik
      { no: 4, indikator: "Kompetensi Tenaga Pustakawan", capaian: "75% kompeten, perlu pengembangan berkelanjutan", target: "≥ 75%", status: "Mencapai" },
      { no: 5, indikator: "Kompetensi Tenaga Laboran", capaian: "80% keterampilan sesuai bidang, perlu pelatihan teknis lebih lanjut", target: "≥ 75%", status: "Mencapai" },
      { no: 6, indikator: "Kompetensi Tenaga IT", capaian: "85% kompeten, perlu pengembangan keamanan siber", target: "≥ 75%", status: "Mencapai" },
      { no: 7, indikator: "Kompetensi Tenaga Administrasi", capaian: "70% kompeten, perlu pelatihan efisiensi proses kerja", target: "≥ 75%", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2024-KEUANGAN",
    namaDokumen: "AMI Keuangan TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/KEU/2023",
    tanggal: "15 Mei 2024",
    rataSkor: "75% - Belum mencapai Standar (Defisit)",
    kategori: "Tambahan",
    standarTerkait: "Standar Keuangan (RKAT & Realisasi Anggaran)",
    indikator: [
      { no: 1, indikator: "Alokasi anggaran Biro Administrasi Keuangan", capaian: "Rp 9,2 M (69% dari total)", target: "Proporsional", status: "Belum Tercapai" },
      { no: 2, indikator: "Anggaran kegiatan kemahasiswaan", capaian: "Cukup tinggi (403)", target: "Adekuat", status: "Tercapai" },
      { no: 3, indikator: "Anggaran wisuda", capaian: "Cukup tinggi (409.03)", target: "Adekuat", status: "Tercapai" },
      { no: 4, indikator: "Anggaran penerimaan mahasiswa baru", capaian: "Cukup tinggi (409.01)", target: "Adekuat", status: "Tercapai" },
      { no: 5, indikator: "Neraca pendapatan vs pengeluaran", capaian: "DEFISIT ~Rp 1,9 M (pengeluaran > pendapatan)", target: "Surplus / Seimbang", status: "Belum Tercapai" },
      { no: 6, indikator: "Diversifikasi sumber pendanaan", capaian: "Masih didominasi pendapatan mahasiswa", target: "Terdiversifikasi (hibah, CSR, usaha mandiri)", status: "Belum Tercapai" },
    ]
  },
  {
    id: "AMI-2024-SARPRAS",
    namaDokumen: "AMI Sarana dan Prasarana TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/SARPRAS/2023",
    tanggal: "24 Maret 2024",
    rataSkor: "83% - Belum mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar Sarana dan Prasarana (47 item diperiksa)",
    indikator: [
      { no: 1, indikator: "Sarana dalam kondisi baik/terawat", capaian: "24/29 jenis (83%)", target: "100%", status: "Belum Tercapai" },
      { no: 2, indikator: "Sarana kurang baik/tidak terawat", capaian: "5/29 jenis (17%): Lap. Basket, Voli, Pencak Silat, Studio Musik, R. Kesehatan", target: "0%", status: "Belum Tercapai" },
      { no: 3, indikator: "Prasarana dalam kondisi baik/terawat", capaian: "6/9 jenis (84%)", target: "100%", status: "Belum Tercapai" },
      { no: 4, indikator: "Prasarana kurang baik/tidak terawat", capaian: "3/9 jenis (16%): Scanner (8 unit), Stand LCD (22 unit), Diesel (1 unit)", target: "0%", status: "Belum Tercapai" },
      { no: 5, indikator: "Total aset layak pakai", capaian: "± 83-84%", target: "≥ 95%", status: "Belum Tercapai" },
      { no: 6, indikator: "Ruang Kelas (19 unit)", capaian: "100% baik", target: "100%", status: "Tercapai" },
      { no: 7, indikator: "Ruang Dosen (65 unit)", capaian: "100% baik", target: "100%", status: "Tercapai" },
      { no: 8, indikator: "Komputer lengkap (101 unit)", capaian: "100% baik", target: "100%", status: "Tercapai" },
      { no: 9, indikator: "LCD Proyektor (30 unit)", capaian: "100% baik", target: "100%", status: "Tercapai" },
      { no: 10, indikator: "Gedung Rektorat, Biro, Lab, Perpustakaan", capaian: "100% baik", target: "100%", status: "Tercapai" },
    ]
  },
  {
    id: "AMI-2024-MBKM",
    namaDokumen: "AMI MBKM TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/MBKM/2023",
    tanggal: "22 April 2024",
    rataSkor: "75% - Belum mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar MBKM (8 skema: magang, KKN, wirausaha, asisten mengajar, penelitian, kemanusiaan, studi independen, bela negara)",
    indikator: [
      { no: 1, indikator: "Total kegiatan MBKM TA 2023/2024", capaian: "58 kegiatan (16 semester 1 + 42 semester 2)", target: "Tinggi", status: "Tercapai" },
      { no: 2, indikator: "Tingkat penyelesaian kegiatan", capaian: "15/58 (26%) Selesai", target: "≥ 70%", status: "Belum Tercapai" },
      { no: 3, indikator: "Kegiatan dalam proses evaluasi", capaian: "39/58 (67%) Evaluasi", target: "≤ 30%", status: "Belum Tercapai" },
      { no: 4, indikator: "Kegiatan dibatalkan", capaian: "4/58 (7%) Dibatalkan", target: "≤ 5%", status: "Belum Tercapai" },
      { no: 5, indikator: "Studi/Proyek Independen", capaian: "35 kegiatan (60% total) - paling dominan", target: "Beragam skema", status: "Tercapai" },
      { no: 6, indikator: "Magang/Praktik Kerja", capaian: "11 kegiatan (19%)", target: "≥ 30%", status: "Belum Tercapai" },
      { no: 7, indikator: "Asistensi Mengajar di Satuan Pendidikan", capaian: "6 kegiatan (10%)", target: "Ada", status: "Tercapai" },
      { no: 8, indikator: "Pertukaran Pelajar", capaian: "5 kegiatan (Univ. HKBP Nommensen, Univ. Jember)", target: "Ada", status: "Tercapai" },
      { no: 9, indikator: "Kerjasama dengan mitra industri", capaian: "Orbit, Arkatama, Revou, Sekolah Ekspor, BPP, dll", target: "Beragam mitra", status: "Tercapai" },
    ]
  },
  {
    id: "AMI-2024-KESEJAHTERAAN",
    namaDokumen: "AMI Kesejahteraan TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/KSJH/2023",
    tanggal: "29 Mei 2024",
    rataSkor: "3,42 / 4,00 (85%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar Kesejahteraan (Likert 1-4, 500 mhs + 50 dosen/tendik)",
    indikator: [
      { no: 1, indikator: "[Mhs] Sosialisasi Dokumen Standar Mahasiswa", capaian: "3,15", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "[Mhs] Reliability pelayanan dosen/tendik", capaian: "3,15", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "[Mhs] Responsiveness cepat & tanggap", capaian: "3,30", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "[Mhs] Assurance kepastian pelayanan", capaian: "3,50", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "[Mhs] Empathy kepedulian Program Studi", capaian: "3,45", target: "≥ 3,00", status: "Mencapai" },
      { no: 6, indikator: "[Mhs] Tangible sarpras pendukung", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 7, indikator: "[Mhs] Bantuan UKT sesuai ketentuan", capaian: "3,55", target: "≥ 3,00", status: "Mencapai" },
      { no: 8, indikator: "[Mhs] Reward prestasi & pengembangan kompetensi", capaian: "3,45", target: "≥ 3,00", status: "Mencapai" },
      { no: 9, indikator: "[Mhs] Bantuan dana sosial", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 10, indikator: "[Mhs] UKK Universitas", capaian: "3,50", target: "≥ 3,00", status: "Mencapai" },
      { no: 11, indikator: "[Dosen] Sosialisasi Dokumen Standar Kesejahteraan", capaian: "3,35", target: "≥ 3,00", status: "Mencapai" },
      { no: 12, indikator: "[Dosen] Dana pengembangan kualitas pegawai (seminar/workshop)", capaian: "3,50", target: "≥ 3,00", status: "Mencapai" },
      { no: 13, indikator: "[Dosen] Bantuan dana sosial pegawai", capaian: "3,45", target: "≥ 3,00", status: "Mencapai" },
      { no: 14, indikator: "[Dosen] UKK Universitas", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 15, indikator: "[Dosen] Pelaporan kinerja bulanan dosen", capaian: "3,45", target: "≥ 3,00", status: "Mencapai" },
      { no: 16, indikator: "[Dosen] Updating data sistem berkala", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 17, indikator: "[Dosen] Pengajuan surat pejabat DPK", capaian: "3,35", target: "≥ 3,00", status: "Mencapai" },
      { no: 18, indikator: "[Dosen] Pengajuan dana kegiatan diverifikasi", capaian: "3,50", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-KERJASAMA",
    namaDokumen: "AMI Kerjasama TA 2023/2024",
    kodeDokumen: "SPMI/PPM/MONEV/KJSM/2023",
    tanggal: "26 Mei 2024",
    rataSkor: "3,79 / 4,00 (95%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Standar Kerjasama (7 indikator Likert 1-4, 87 mitra)",
    indikator: [
      { no: 1, indikator: "Perjanjian kerjasama mudah dilakukan", capaian: "3,76", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "Respons terhadap saran kerjasama cepat", capaian: "3,56", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "Proses penandatanganan kerjasama cepat", capaian: "3,79", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Kerjasama diimplementasikan dengan kegiatan", capaian: "3,96", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Implementasi sesuai naskah Kerjasama", capaian: "3,88", target: "≥ 3,00", status: "Mencapai" },
      { no: 6, indikator: "Kepuasan terhadap kerjasama", capaian: "3,56", target: "≥ 3,00", status: "Mencapai" },
      { no: 7, indikator: "Kelanjutan kerjasama di masa depan", capaian: "3,94", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-PLYN-GANJIL",
    namaDokumen: "AMI Pelayanan Kepada Mahasiswa Ganjil 2031",
    kodeDokumen: "SPMI/PPM/MONEV/PLYN/2023-1",
    tanggal: "3 Februari 2024",
    rataSkor: "3,45 / 4,00 (86%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Pelayanan Akademik Mahasiswa (FISIP - Likert 1-4, 20 indikator)",
    indikator: [
      { no: 1, indikator: "Info jadwal perkuliahan, ujian, kegiatan akademik jelas & tepat waktu", capaian: "3,56", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "Kemudahan pengisian KRS", capaian: "3,56", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "Layanan konsultasi akademik dengan dosen wali", capaian: "3,52", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Akses informasi akademik via SIAKAD", capaian: "3,57", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Respons UPPS terhadap keluhan akademik", capaian: "3,41", target: "≥ 3,00", status: "Mencapai" },
      { no: 6, indikator: "Layanan akademik dukung pencapaian target pembelajaran", capaian: "3,46", target: "≥ 3,00", status: "Mencapai" },
      { no: 7, indikator: "Info biaya kuliah & pembayaran jelas", capaian: "3,51", target: "≥ 3,00", status: "Mencapai" },
      { no: 8, indikator: "Pengalaman proses pembayaran", capaian: "3,48", target: "≥ 3,00", status: "Mencapai" },
      { no: 9, indikator: "Transparansi penggunaan dana/biaya kuliah", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 10, indikator: "Pelayanan beasiswa/keringanan/cicilan", capaian: "3,55", target: "≥ 3,00", status: "Mencapai" },
      { no: 11, indikator: "Kecepatan verifikasi/pengembalian dana", capaian: "3,42", target: "≥ 3,00", status: "Mencapai" },
      { no: 12, indikator: "Akses info kegiatan organisasi & event kampus", capaian: "3,43", target: "≥ 3,00", status: "Mencapai" },
      { no: 13, indikator: "Kemudahan pengurusan surat keterangan mahasiswa", capaian: "3,50", target: "≥ 3,00", status: "Mencapai" },
      { no: 14, indikator: "Pendampingan program kewirausahaan/magang", capaian: "3,40", target: "≥ 3,00", status: "Mencapai" },
      { no: 15, indikator: "Efektivitas layanan kemahasiswaan menangani keluhan", capaian: "3,43", target: "≥ 3,00", status: "Mencapai" },
      { no: 16, indikator: "Fasilitas ruang kelas (meja, kursi, proyektor, AC)", capaian: "3,26", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
  {
    id: "AMI-2024-PLYN-GENAP",
    namaDokumen: "AMI Pelayanan Kepada Mahasiswa Genap 2032",
    kodeDokumen: "SPMI/PPM/MONEV/PLYN/2023-2",
    tanggal: "4 Agustus 2024",
    rataSkor: "3,30 / 4,00 (83%) - Mencapai Standar",
    kategori: "Tambahan",
    standarTerkait: "Pelayanan Akademik Mahasiswa (Universitas - Likert 1-4, 20 indikator)",
    indikator: [
      { no: 1, indikator: "Info jadwal perkuliahan, ujian, kegiatan akademik jelas & tepat waktu", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 2, indikator: "Kemudahan pengisian KRS", capaian: "3,1", target: "≥ 3,00", status: "Mencapai" },
      { no: 3, indikator: "Layanan konsultasi akademik dengan dosen wali", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 4, indikator: "Akses informasi akademik via SIAKAD", capaian: "3,5", target: "≥ 3,00", status: "Mencapai" },
      { no: 5, indikator: "Respons UPPS terhadap keluhan akademik", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 6, indikator: "Layanan akademik dukung pencapaian target pembelajaran", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 7, indikator: "Info biaya kuliah & pembayaran jelas", capaian: "3,0", target: "≥ 3,00", status: "Mencapai" },
      { no: 8, indikator: "Pengalaman proses pembayaran", capaian: "3,4", target: "≥ 3,00", status: "Mencapai" },
      { no: 9, indikator: "Transparansi penggunaan dana/biaya kuliah", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 10, indikator: "Pelayanan beasiswa/keringanan/cicilan", capaian: "3,5", target: "≥ 3,00", status: "Mencapai" },
      { no: 11, indikator: "Kecepatan verifikasi/pengembalian dana", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 12, indikator: "Akses info kegiatan organisasi & event kampus", capaian: "3,7", target: "≥ 3,00", status: "Mencapai" },
      { no: 13, indikator: "Kemudahan pengurusan surat keterangan mahasiswa", capaian: "3,1", target: "≥ 3,00", status: "Mencapai" },
      { no: 14, indikator: "Pendampingan program kewirausahaan/magang", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 15, indikator: "Efektivitas layanan kemahasiswaan menangani keluhan", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 16, indikator: "Fasilitas ruang kelas (meja, kursi, proyektor, AC)", capaian: "3,4", target: "≥ 3,00", status: "Mencapai" },
      { no: 17, indikator: "Akses fasilitas laboratorium/ruang praktik", capaian: "3,2", target: "≥ 3,00", status: "Mencapai" },
      { no: 18, indikator: "Koleksi buku & jurnal perpustakaan relevan", capaian: "3,3", target: "≥ 3,00", status: "Mencapai" },
      { no: 19, indikator: "Fasilitas kebersihan (toilet, tempat sampah)", capaian: "3,1", target: "≥ 3,00", status: "Mencapai" },
      { no: 20, indikator: "Kemudahan layanan peminjaman fasilitas", capaian: "3,5", target: "≥ 3,00", status: "Mencapai" },
    ]
  },
];
