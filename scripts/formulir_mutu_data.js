// ============================================================
// DATA: 35 FORMULIR MUTU
// Match dengan 33 Standar + Formulir Akademik + AMI/RTM/PD Dikti
// ============================================================

const {
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, FONT, P, c,
} = require("./formulir_mutu_core.js");

// Helper untuk tanda tangan standar
function ttdKaProdi() {
  return [
    { label: "Disusun oleh:\nKa. Prodi / GKM", nama: "(...........................)", jabatan: "Ka. Prodi", nip: "NIDN/NIP: ................" },
    { label: "Diperiksa oleh:\nKa. LPM Fakultas", nama: "(...........................)", jabatan: "Ka. LPM", nip: "NIDN/NIP: ................" },
    { label: "Disetujui oleh:\nKa. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN/NIP: ................" },
  ];
}

function ttdKaLPPM() {
  return [
    { label: "Disusun oleh:\nPeneliti/Pelaksana", nama: "(...........................)", jabatan: "Peneliti", nip: "NIDN/NIP: ................" },
    { label: "Diperiksa oleh:\nKa. LPPM", nama: "(...........................)", jabatan: "Ka. LPPM", nip: "NIDN/NIP: ................" },
    { label: "Disetujui oleh:\nKa. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN/NIP: ................" },
  ];
}

function ttdKaUnit() {
  return [
    { label: "Disusun oleh:\nKa. Unit", nama: "(...........................)", jabatan: "Ka. Unit", nip: "NIDN/NIP: ................" },
    { label: "Diperiksa oleh:\nKa. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN/NIP: ................" },
    { label: "Mengetahui:\nWakil Rektor", nama: "(...........................)", jabatan: "Wakil Rektor", nip: "NIDN/NIP: ................" },
  ];
}

function ttdDosen() {
  return [
    { label: "Dosen Pengampu", nama: "(...........................)", jabatan: "Dosen", nip: "NIDN: ................" },
    { label: "Ka. Prodi", nama: "(...........................)", jabatan: "Ka. Prodi", nip: "NIDN: ................" },
  ];
}

// ============================================================
// 35 FORMULIR MUTU - MATCH DENGAN 33 STANDAR
// ============================================================

const FORMULIR_LIST = [
  // === BAB III: FORMULIR STANDAR PENDIDIKAN (FM-PBM-01 s/d FM-PBM-08) ===
  {
    nomor: 1,
    namaFormulir: "FORMULIR MONITORING EVALUASI PROSES PEMBELAJARAN",
    kodeFormulir: "FM-PBM-01",
    kategori: "FORM",
    matchStandar: "Standar Proses Pembelajaran (SPB)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pelaksanaan proses pembelajaran di setiap program studi. Formulir mengacu pada Standar Proses Pembelajaran (SPB) sebagaimana diatur dalam Permen 39 Tahun 2025, dengan target capaian 2026-2030 dan baseline 2025.",
      "Formulir diisi oleh Ka. Prodi dan GKM setiap semester, dan menjadi bahan bagi AMI dan RTM tahunan.",
    ],
    instruksi: "Isi formulir dengan data pelaksanaan pembelajaran semester berjalan. Berikan penilaian dengan skala 1-5 (1=sangat buruk, 5=sangat baik). Lampirkan bukti pendukung.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Semester / Tahun Akademik", ""],
          ["Mata Kuliah", ""],
          ["Kode Mata Kuliah / SKS", ""],
          ["Dosen Pengampu", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (Ka. Prodi/GKM)", ""],
        ],
      },
      {
        title: "B. Penilaian Pelaksanaan Pembelajaran",
        headers: ["No", "Indikator", "Skor (1-5)", "Bukti / Catatan"],
        widths: [5, 50, 10, 35],
        emptyRows: 12,
      },
      {
        title: "C. Rekomendasi dan Tindak Lanjut",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 2,
    namaFormulir: "FORMULIR MONITORING EVALUASI KOMPETENSI LULUSAN",
    kodeFormulir: "FM-PBM-02",
    kategori: "FORM",
    matchStandar: "Standar Kompetensi Lulusan (SKL)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi capaian CPL lulusan, dengan baseline 2025 dan target 2026-2030. Formulir mengacu pada Standar Kompetensi Lulusan (SKL) sebagaimana diatur dalam Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data tracer study dan analisis CPL lulusan. Berikan penilaian dan rekomendasi perbaikan.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Tahun Lulus", ""],
          ["Jumlah Lulusan", ""],
          ["Response Rate Tracer Study", ""],
          ["Tanggal Evaluasi", ""],
        ],
      },
      {
        title: "B. Capaian CPL Berdasarkan Tracer Study",
        headers: ["No", "Komponen CPL", "Target", "Capaian", "Selisih", "Analisis"],
        widths: [5, 35, 10, 10, 10, 30],
        emptyRows: 8,
      },
      {
        title: "C. Tingkat Kepuasan Pengguna Lulusan",
        headers: ["No", "Aspek", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        emptyRows: 6,
      },
      {
        title: "D. Rekomendasi Perbaikan CPL",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 3,
    namaFormulir: "FORMULIR MONITORING EVALUASI PENILAIAN",
    kodeFormulir: "FM-PBM-03",
    kategori: "FORM",
    matchStandar: "Standar Penilaian (SPN)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi sistem penilaian di setiap program studi, mencakup rubrik, transparansi, dan ketepatan waktu. Formulir mengacu pada Standar Penilaian (SPN) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data audit penilaian minimal 5 mata kuliah sample. Berikan penilaian dan rekomendasi.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Semester / Tahun Akademik", ""],
          ["Jumlah Mata Kuliah Diaudit", ""],
          ["Tanggal Audit", ""],
          ["Auditor (GKM)", ""],
        ],
      },
      {
        title: "B. Audit Penilaian Mata Kuliah Sample",
        headers: ["No", "Kode MK", "Rubrik", "Transparansi", "Ketepatan Waktu", "Skor (1-5)"],
        widths: [5, 15, 15, 20, 20, 25],
        emptyRows: 10,
      },
      {
        title: "C. Rekomendasi Perbaikan Penilaian",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 4,
    namaFormulir: "FORMULIR MONITORING EVALUASI PENGELOLAAN PROGRAM STUDI",
    kodeFormulir: "FM-PBM-04",
    kategori: "FORM",
    matchStandar: "Standar Pengelolaan (SPP)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pengelolaan program studi oleh UPPS, mencakup SOTK, rencana operasional, dan laporan kinerja. Mengacu pada Standar Pengelolaan (SPP) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data pengelolaan program studi semester berjalan.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Ka. Prodi (UPPS)", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (LPM)", ""],
        ],
      },
      {
        title: "B. Indikator Kinerja Pengelolaan",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        emptyRows: 10,
      },
      {
        title: "C. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 5,
    namaFormulir: "FORMULIR MONITORING EVALUASI ISI / KURIKULUM",
    kodeFormulir: "FM-PBM-05",
    kategori: "FORM",
    matchStandar: "Standar Isi (SIS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi kurikulum, mencakup review kurikulum 2 tahunan, MBKM, dan konstruktif alignment. Mengacu pada Standar Isi (SIS) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data review kurikulum dan implementasi MBKM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Tanggal Review", ""],
          ["Tim Reviewer", ""],
        ],
      },
      {
        title: "B. Review Kurikulum",
        headers: ["No", "Aspek", "Status", "Catatan"],
        widths: [5, 50, 15, 30],
        emptyRows: 8,
      },
      {
        title: "C. Implementasi MBKM",
        headers: ["No", "Skema MBKM", "Jumlah Mahasiswa", "Mitra DUDI", "Capaian"],
        widths: [5, 25, 15, 25, 30],
        emptyRows: 6,
      },
      {
        title: "D. Rekomendasi Perbaikan Kurikulum",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 6,
    namaFormulir: "FORMULIR MONITORING EVALUASI DOSEN DAN TENAGA KEPENDIDIKAN",
    kodeFormulir: "FM-PBM-06",
    kategori: "FORM",
    matchStandar: "Standar Dosen dan Tenaga Kependidikan (SDT)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi dosen dan tenaga kependidikan, mencakup kualifikasi, Serdos, rasio, dan beban kerja. Mengacu pada Standar Dosen dan Tenaga Kependidikan (SDT) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data SDM per program studi/unit kerja.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi / Unit", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (BAKU/PPM)", ""],
        ],
      },
      {
        title: "B. Data Dosen",
        headers: ["No", "Nama Dosen", "Kualifikasi", "Serdos", "Beban SKS", "Jabatan Akademik"],
        widths: [5, 30, 15, 10, 10, 30],
        emptyRows: 10,
      },
      {
        title: "C. Data Tenaga Kependidikan",
        headers: ["No", "Nama Tendik", "Kualifikasi", "Jabatan", "Kompetensi"],
        widths: [5, 30, 15, 25, 25],
        emptyRows: 6,
      },
      {
        title: "D. Rasio dan Beban Kerja",
        headers: ["Indikator", "Target", "Capaian", "Selisih"],
        widths: [40, 20, 20, 20],
        rows: [
          ["Rasio Dosen-Mahasiswa", "1:35", "", ""],
          ["Beban Kerja Rata-rata (SKS)", "12-16", "", ""],
          ["Persentase Dosen dengan Serdos", "≥50%", "", ""],
        ],
      },
    ],
    tandaTangan: ttdKaUnit(),
  },
  {
    nomor: 7,
    namaFormulir: "FORMULIR MONITORING EVALUASI SARANA DAN PRASARANA",
    kodeFormulir: "FM-PBM-07",
    kategori: "FORM",
    matchStandar: "Standar Sarana dan Prasarana (SSP)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi sarana dan prasarana, mencakup ruang kelas, laboratorium, perpustakaan, dan fasilitas penunjang. Mengacu pada Standar Sarana dan Prasarana (SSP) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data audit fasilitas minimal 1 kali per tahun.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Unit", ""],
          ["Tanggal Audit", ""],
          ["Auditor (BAU)", ""],
        ],
      },
      {
        title: "B. Audit Fasilitas",
        headers: ["No", "Jenis Fasilitas", "Jumlah", "Kondisi (B/R)", "Skor (1-5)", "Catatan"],
        widths: [5, 30, 10, 15, 10, 30],
        emptyRows: 12,
      },
      {
        title: "C. Indikator Kinerja Sarana",
        headers: ["Indikator", "Target", "Capaian", "Selisih"],
        widths: [40, 20, 20, 20],
        rows: [
          ["Rasio ruang kelas (m²/mahasiswa)", "≥1.5", "", ""],
          ["Persentase lab dengan peralatan standar", "≥80%", "", ""],
          ["Persentase fasilitas terpelihara", "≥85%", "", ""],
          ["Persentase gedung dengan akses disabilitas", "≥55%", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaUnit(),
  },
  {
    nomor: 8,
    namaFormulir: "FORMULIR MONITORING EVALUASI PEMBIAYAAN",
    kodeFormulir: "FM-PBM-08",
    kategori: "FORM",
    matchStandar: "Standar Pembiayaan (SPM)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pembiayaan, mencakup BOP, dana penelitian, dana PkM, dan audit keuangan. Mengacu pada Standar Pembiayaan (SPM) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan data anggaran dan realisasi tahun berjalan.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Anggaran", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (BAKU/SPI)", ""],
        ],
      },
      {
        title: "B. Indikator Pembiayaan",
        headers: ["No", "Indikator", "Target", "Capaian", "Selisih", "Catatan"],
        widths: [5, 35, 12, 12, 10, 26],
        rows: [
          ["1", "BOP per mahasiswa (Rp juta)", "≥9.5", "", "", ""],
          ["2", "Persentase pendapatan RGU", "≥9%", "", "", ""],
          ["3", "Persentase anggaran penelitian", "≥12%", "", "", ""],
          ["4", "Persentase anggaran PkM", "≥6%", "", "", ""],
          ["5", "Opini audit eksternal", "WTP", "", "", ""],
        ],
      },
      {
        title: "C. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaUnit(),
  },

  // === BAB IV: FORMULIR STANDAR PENELITIAN (FM-PEN-01 s/d FM-PEN-08) ===
  {
    nomor: 9,
    namaFormulir: "FORMULIR PROPOSAL PENELITIAN",
    kodeFormulir: "FM-PEN-01",
    kategori: "FORM",
    matchStandar: "Standar Proses Penelitian (PEN-PRS)",
    deskripsi: [
      "Formulir ini digunakan untuk pengajuan proposal penelitian internal/eksternal di Universitas Tulungagung. Mengacu pada Standar Proses Penelitian (PEN-PRS) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan lengkap dan lampirkan proposal ilmiah. Ajukan ke LPPM minimal 2 bulan sebelum pelaksanaan.",
    fieldTables: [
      {
        title: "A. Identitas Penelitian",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul Penelitian", ""],
          ["Jenis Penelitian", "(Skripsi/Tesis/Riset Dosen/Hibah Eksternal)"],
          ["Bidang Ilmu", ""],
          ["Lama Penelitian (bulan)", ""],
          ["Total Anggaran (Rp)", ""],
        ],
      },
      {
        title: "B. Identitas Peneliti",
        headers: ["Komponen", "Ketua", "Anggota 1", "Anggota 2"],
        widths: [25, 25, 25, 25],
        rows: [
          ["Nama Lengkap", "", "", ""],
          ["NIDN/NIP", "", "", ""],
          ["Jabatan Akademik", "", "", ""],
          ["Program Studi", "", "", ""],
          ["No. HP/Email", "", "", ""],
          ["Serdos", "", "", ""],
        ],
      },
      {
        title: "C. Ringkasan Proposal",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Latar Belakang (maks 200 kata)", ""],
          ["Rumusan Masalah", ""],
          ["Tujuan Penelitian", ""],
          ["Metode Penelitian", ""],
          ["Luaran yang Diharapkan", ""],
        ],
      },
      {
        title: "D. Timeline dan Anggaran",
        headers: ["No", "Kegiatan", "Bulan 1-2", "Bulan 3-4", "Bulan 5-6", "Anggaran (Rp)"],
        widths: [5, 30, 15, 15, 15, 20],
        emptyRows: 6,
      },
      {
        title: "E. Persetujuan Etik (jika melibatkan manusia/hewan)",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Persetujuan Etik", "(Ada/Tidak)"],
          ["No. Persetujuan Etik", ""],
          ["Tanggal Persetujuan", ""],
        ],
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 10,
    namaFormulir: "FORMULIR MONITORING PELAKSANAAN PENELITIAN",
    kodeFormulir: "FM-PEN-02",
    kategori: "FORM",
    matchStandar: "Standar Proses Penelitian (PEN-PRS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring pelaksanaan penelitian oleh LPPM. Mengacu pada Standar Proses Penelitian (PEN-PRS) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir saat monitoring lapangan oleh LPPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul Penelitian", ""],
          ["Ketua Peneliti", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (LPPM)", ""],
        ],
      },
      {
        title: "B. Hasil Monitoring",
        headers: ["No", "Aspek", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Kesesuaian timeline", "", ""],
          ["2", "Kesesuaian anggaran", "", ""],
          ["3", "Kesesuaian metode", "", ""],
          ["4", "Ketersediaan sarana", "", ""],
          ["5", "Etika penelitian", "", ""],
        ],
      },
      {
        title: "C. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 11,
    namaFormulir: "FORMULIR LAPORAN AKHIR PENELITIAN",
    kodeFormulir: "FM-PEN-03",
    kategori: "FORM",
    matchStandar: "Standar Hasil Penelitian (PEN-HSL)",
    deskripsi: [
      "Formulir ini digunakan untuk laporan akhir penelitian, mencakup hasil, luaran, dan keuangan. Mengacu pada Standar Hasil Penelitian (PEN-HSL) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir maksimal 30 hari setelah penelitian selesai. Lampirkan laporan ilmiah lengkap.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul Penelitian", ""],
          ["Ketua Peneliti", ""],
          ["No. Kontrak", ""],
          ["Periode Penelitian", ""],
          ["Tanggal Laporan", ""],
        ],
      },
      {
        title: "B. Luaran Penelitian",
        headers: ["No", "Jenis Luaran", "Judul/Deskripsi", "Status", "Evidence"],
        widths: [5, 20, 35, 15, 25],
        emptyRows: 5,
      },
      {
        title: "C. Realisasi Anggaran",
        headers: ["No", "Komponen Biaya", "Anggaran (Rp)", "Realisasi (Rp)", "Selisih"],
        widths: [5, 35, 20, 20, 20],
        emptyRows: 6,
      },
      {
        title: "D. Ringkasan Hasil",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Hasil utama penelitian", ""],
          ["Kontribusi terhadap IPTEK", ""],
          ["Dampak bagi masyarakat", ""],
          ["Rekomendasi tindak lanjut", ""],
        ],
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 12,
    namaFormulir: "FORMULIR PENDAFTARAN HKI / PATEN",
    kodeFormulir: "FM-PEN-04",
    kategori: "FORM",
    matchStandar: "Standar Paten dan HKI Penelitian (PEN-PTN)",
    deskripsi: [
      "Formulir ini digunakan untuk pendaftaran paten dan HKI atas hasil penelitian. Mengacu pada Standar Paten dan HKI Penelitian (PEN-PTN) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dan lampirkan dokumen pendukung (deskripsi, klaim, abstrak, gambar).",
    fieldTables: [
      {
        title: "A. Identitas Pemohon",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Pemohon (Peneliti)", ""],
          ["NIDN/NIP", ""],
          ["Program Studi", ""],
          ["No. HP/Email", ""],
        ],
      },
      {
        title: "B. Identitas Invensi",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul Invensi", ""],
          ["Jenis HKI", "(Paten/Paten Sederhana/Hak Cipta/Desain Industri/Merek)"],
          ["Bidang Teknologi", ""],
          ["Tanggal Penemuan", ""],
          ["Sumber Dana Penelitian", ""],
        ],
      },
      {
        title: "C. Uraian Invensi",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Latar belakang", ""],
          ["Masalah yang dipecahkan", ""],
          ["Solusi yang ditawarkan", ""],
          ["Keunggulan dibanding yang ada", ""],
          ["Potensi komersialisasi", ""],
        ],
      },
      {
        title: "D. Lampiran",
        headers: ["No", "Dokumen", "Status"],
        widths: [5, 70, 25],
        rows: [
          ["1", "Surat Pernyataan Pemilikan HKI", "(Ada/Belum)"],
          ["2", "Dokumen Deskripsi Invensi", "(Ada/Belum)"],
          ["3", "Dokumen Klaim", "(Ada/Belum)"],
          ["4", "Abstrak", "(Ada/Belum)"],
          ["5", "Gambar Teknis", "(Ada/Belum)"],
        ],
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 13,
    namaFormulir: "FORMULIR PENDAFTARAN PUBLIKASI JURNAL",
    kodeFormulir: "FM-PEN-05",
    kategori: "FORM",
    matchStandar: "Standar Publikasi Ilmiah Penelitian (PEN-PUB)",
    deskripsi: [
      "Formulir ini digunakan untuk pendaftaran klaim insentif dan page charges publikasi jurnal. Mengacu pada Standar Publikasi Ilmiah Penelitian (PEN-PUB) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dan lampirkan bukti publikasi (article, letter of acceptance, bukti bayar).",
    fieldTables: [
      {
        title: "A. Identitas Penulis",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Penulis (Ketua)", ""],
          ["NIDN/NIP", ""],
          ["Program Studi", ""],
          ["Email", ""],
        ],
      },
      {
        title: "B. Identitas Publikasi",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul Artikel", ""],
          ["Nama Jurnal", ""],
          ["Penerbit", ""],
          ["Akreditasi (SINTA/Scopus/WoS)", ""],
          ["Volume/Issue/Tahun", ""],
          ["DOI", ""],
          ["URL Artikel", ""],
        ],
      },
      {
        title: "C. Klaim Insentif",
        headers: ["No", "Jenis Klaim", "Jumlah (Rp)", "Bukti"],
        widths: [5, 50, 20, 25],
        rows: [
          ["1", "Insentif publikasi", "", ""],
          ["2", "Page charges", "", ""],
          ["3", "Translation/editing", "", ""],
        ],
      },
      {
        title: "D. Daftar Penulis",
        headers: ["No", "Nama Penulis", "Affiliation", "Peran", "NIDN"],
        widths: [5, 30, 25, 20, 20],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },

  // === BAB V: FORMULIR STANDAR PkM (FM-PKM-01 s/d FM-PKM-05) ===
  {
    nomor: 14,
    namaFormulir: "FORMULIR PROPOSAL PENGABDIAN KEPADA MASYARAKAT",
    kodeFormulir: "FM-PKM-01",
    kategori: "FORM",
    matchStandar: "Standar Proses PkM (PKM-PRS)",
    deskripsi: [
      "Formulir ini digunakan untuk pengajuan proposal PkM internal/eksternal. Mengacu pada Standar Proses PkM (PKM-PRS) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir dengan lengkap dan lampirkan proposal ilmiah. Ajukan ke LPPM minimal 2 bulan sebelum pelaksanaan.",
    fieldTables: [
      {
        title: "A. Identitas PkM",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul PkM", ""],
          ["Jenis PkM", "(Skripsi/Tesis/PkM Dosen/Hibah Eksternal)"],
          ["Bidang PkM", ""],
          ["Lama PkM (bulan)", ""],
          ["Total Anggaran (Rp)", ""],
        ],
      },
      {
        title: "B. Identitas Mitra PkM",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Mitra/Kelompok Masyarakat", ""],
          ["Lokasi PkM", ""],
          ["Jumlah Penerima Manfaat", ""],
          ["Kontak Mitra", ""],
        ],
      },
      {
        title: "C. Identitas Pelaksana",
        headers: ["Komponen", "Ketua", "Anggota 1", "Anggota 2"],
        widths: [25, 25, 25, 25],
        rows: [
          ["Nama Lengkap", "", "", ""],
          ["NIDN/NIP", "", "", ""],
          ["Program Studi", "", "", ""],
          ["No. HP/Email", "", "", ""],
        ],
      },
      {
        title: "D. Ringkasan Proposal",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Latar Belakang", ""],
          ["Masalah Masyarakat", ""],
          ["Tujuan PkM", ""],
          ["Metode PkM", ""],
          ["Luaran yang Diharapkan", ""],
          ["Dampak yang Diharapkan", ""],
        ],
      },
      {
        title: "E. Persetujuan Mitra (Informed Consent)",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Persetujuan Mitra", "(Ada/Tidak)"],
          ["Tanggal Persetujuan", ""],
          ["Tanda Tangan Mitra", ""],
        ],
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 15,
    namaFormulir: "FORMULIR MONITORING PELAKSANAAN PkM",
    kodeFormulir: "FM-PKM-02",
    kategori: "FORM",
    matchStandar: "Standar Proses PkM (PKM-PRS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring pelaksanaan PkM oleh LPPM.",
    ],
    instruksi: "Isi formulir saat monitoring lapangan oleh LPPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul PkM", ""],
          ["Ketua Pelaksana", ""],
          ["Tanggal Monitoring", ""],
          ["Pemonitor (LPPM)", ""],
        ],
      },
      {
        title: "B. Hasil Monitoring",
        headers: ["No", "Aspek", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Kesesuaian timeline", "", ""],
          ["2", "Kesesuaian anggaran", "", ""],
          ["3", "Kesesuaian metode", "", ""],
          ["4", "Partisipasi mitra", "", ""],
          ["5", "Etika PkM", "", ""],
        ],
      },
      {
        title: "C. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 16,
    namaFormulir: "FORMULIR LAPORAN AKHIR PENGABDIAN KEPADA MASYARAKAT",
    kodeFormulir: "FM-PKM-03",
    kategori: "FORM",
    matchStandar: "Standar Hasil PkM (PKM-HSL)",
    deskripsi: [
      "Formulir ini digunakan untuk laporan akhir PkM, mencakup hasil, luaran, dan keuangan.",
    ],
    instruksi: "Isi formulir maksimal 30 hari setelah PkM selesai.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Judul PkM", ""],
          ["Ketua Pelaksana", ""],
          ["No. Kontrak", ""],
          ["Periode PkM", ""],
          ["Tanggal Laporan", ""],
        ],
      },
      {
        title: "B. Luaran PkM",
        headers: ["No", "Jenis Luaran", "Deskripsi", "Status", "Penerima Manfaat"],
        widths: [5, 20, 30, 15, 30],
        emptyRows: 5,
      },
      {
        title: "C. Dampak PkM",
        headers: ["No", "Aspek Dampak", "Skor (1-5)", "Bukti"],
        widths: [5, 45, 15, 35],
        rows: [
          ["1", "Peningkatan kapasitas masyarakat", "", ""],
          ["2", "Pemberdayaan ekonomi", "", ""],
          ["3", "Peningkatan kualitas hidup", "", ""],
          ["4", "Kebijakan publik yang dipengaruhi", "", ""],
          ["5", "Replikasi di lokasi lain", "", ""],
        ],
      },
      {
        title: "D. Realisasi Anggaran",
        headers: ["No", "Komponen Biaya", "Anggaran (Rp)", "Realisasi (Rp)", "Selisih"],
        widths: [5, 35, 20, 20, 20],
        emptyRows: 6,
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 17,
    namaFormulir: "FORMULIR PENDAFTARAN PRODUK PkM",
    kodeFormulir: "FM-PKM-04",
    kategori: "FORM",
    matchStandar: "Standar Produk dan Jasa PkM (PKM-PRD)",
    deskripsi: [
      "Formulir ini digunakan untuk pendaftaran produk PkM untuk dokumentasi dan potensi komersialisasi.",
    ],
    instruksi: "Isi formulir dan lampirkan dokumentasi produk.",
    fieldTables: [
      {
        title: "A. Identitas Produk",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Produk", ""],
          ["Jenis Produk", "(Fisik/Digital/Intelektual)"],
          ["Asal Produk", "(Hasil Penelitian/PkM/Kolaborasi DUDI)"],
          ["Tanggal Pengembangan", ""],
          ["Penanggung Jawab", ""],
        ],
      },
      {
        title: "B. Deskripsi Produk",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Fungsi produk", ""],
          ["Keunggulan produk", ""],
          ["Pengguna/penerima manfaat", ""],
          ["Potensi komersialisasi", ""],
          ["Status HKI", "(Sudah/Belum)"],
        ],
      },
      {
        title: "C. Dokumentasi",
        headers: ["No", "Dokumen", "Status"],
        widths: [5, 70, 25],
        rows: [
          ["1", "Foto produk", "(Ada/Belum)"],
          ["2", "Manual penggunaan", "(Ada/Belum)"],
          ["3", "Sertifikat HKI (jika ada)", "(Ada/Belum)"],
          ["4", "Bukti adopsi masyarakat", "(Ada/Belum)"],
        ],
      },
    ],
    tandaTangan: ttdKaLPPM(),
  },
  {
    nomor: 18,
    namaFormulir: "FORMULIR KUESIONER KEPUASAN MITRA PkM",
    kodeFormulir: "FM-PKM-05",
    kategori: "FORM",
    matchStandar: "Standar Hasil PkM (PKM-HSL)",
    deskripsi: [
      "Formulir ini digunakan untuk mengukur tingkat kepuasan mitra PkM terhadap pelaksanaan PkM.",
    ],
    instruksi: "Berikan kuesioner kepada mitra PkM di akhir kegiatan. Skala 1-5 (1=sangat tidak puas, 5=sangat puas).",
    fieldTables: [
      {
        title: "A. Identitas Mitra",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Mitra", ""],
          ["Lokasi", ""],
          ["Judul PkM", ""],
          ["Tanggal Kuesioner", ""],
        ],
      },
      {
        title: "B. Penilaian Kepuasan",
        headers: ["No", "Aspek", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Kesesuaian pelaksanaan dengan rencana", "", ""],
          ["2", "Kualitas luaran PkM", "", ""],
          ["3", "Dampak terhadap masyarakat", "", ""],
          ["4", "Sikap pelaksana PkM", "", ""],
          ["5", "Keberlanjutan PkM", "", ""],
          ["6", "Komunikasi dengan mitra", "", ""],
        ],
      },
      {
        title: "C. Saran dan Masukan",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Saran untuk perbaikan", ""],
          ["Rekomendasi untuk PkM berikutnya", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Mitra PkM", nama: "(...........................)", jabatan: "Mitra", nip: "" },
      { label: "Pelaksana PkM", nama: "(...........................)", jabatan: "Pelaksana", nip: "" },
    ],
  },

  // === BAB VI: FORMULIR STANDAR TAMBAHAN (FM-TMB-01 s/d FM-TMB-09) ===
  {
    nomor: 19,
    namaFormulir: "FORMULIR MONITORING EVALUASI VISI MISI TUJUAN DAN STRATEGI",
    kodeFormulir: "FM-TMB-01",
    kategori: "FORM",
    matchStandar: "Standar Visi, Misi, Tujuan, dan Strategi (VMTS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi ketercapaian VMTS, dengan baseline 2025 dan target 2026-2030.",
    ],
    instruksi: "Isi formulir setiap tahun oleh Senat Universitas bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Evaluasi", ""],
          ["Tanggal Evaluasi", ""],
          ["Penanggung Jawab", "Senat Universitas"],
          ["Pemonitor", "Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator Ketercapaian VMTS",
        headers: ["No", "Indikator", "Baseline 2025", "Target 2030", "Capaian", "Skor (1-5)"],
        widths: [5, 35, 12, 12, 12, 24],
        emptyRows: 10,
      },
      {
        title: "C. Tinjauan VMTS",
        headers: ["Aspek", "Status", "Rekomendasi"],
        widths: [30, 20, 50],
        rows: [
          ["Relevansi VMTS dengan dinamika eksternal", "", ""],
          ["Pemahaman sivitas akademika terhadap VMTS", "", ""],
          ["Integrasi VMTS dalam Renstra/Renop", "", ""],
          ["Publikasi VMTS kepada pemangku kepentingan", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
      { label: "Ketua Senat", nama: "(...........................)", jabatan: "Ketua Senat", nip: "NIDN: ................" },
      { label: "Rektor", nama: "(...........................)", jabatan: "Rektor", nip: "NIDN: 0714046001" },
    ],
  },
  {
    nomor: 20,
    namaFormulir: "FORMULIR MONITORING EVALUASI TATA PAMONG DAN TATA KELOLA",
    kodeFormulir: "FM-TMB-02",
    kategori: "FORM",
    matchStandar: "Standar Tata Pamong dan Tata Kelola (TPTK)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi tata pamong dan tata kelola, mencakup SOTK, audit internal, dan kepuasan pemangku kepentingan.",
    ],
    instruksi: "Isi formulir setiap tahun oleh SPI bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Evaluasi", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. SPI / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator Tata Pamong",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        emptyRows: 10,
      },
      {
        title: "C. Audit Internal SPI",
        headers: ["No", "Jenis Audit", "Tanggal", "Opini", "Status Tindak Lanjut"],
        widths: [5, 35, 15, 15, 30],
        emptyRows: 5,
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. SPI", nama: "(...........................)", jabatan: "Ka. SPI", nip: "NIDN: ................" },
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
      { label: "Rektor", nama: "(...........................)", jabatan: "Rektor", nip: "NIDN: 0714046001" },
    ],
  },
  {
    nomor: 21,
    namaFormulir: "FORMULIR MONITORING EVALUASI MAHASISWA",
    kodeFormulir: "FM-TMB-03",
    kategori: "FORM",
    matchStandar: "Standar Mahasiswa (MHS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pengelolaan mahasiswa, mencakup penerimaan, beasiswa, organisasi, dan layanan.",
    ],
    instruksi: "Isi formulir setiap tahun oleh Wakil Rektor III bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Akademik", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Wakil Rektor III / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator Mahasiswa",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Jumlah mahasiswa aktif", "8500", "", "", ""],
          ["2", "Persentase mahasiswa dengan beasiswa", "≥22%", "", "", ""],
          ["3", "Tingkat retensi mahasiswa", "≥80%", "", "", ""],
          ["4", "Jumlah organisasi mahasiswa aktif", "≥32", "", "", ""],
          ["5", "Persentase lulusan terserap DUDI <6 bln", "≥68%", "", "", ""],
        ],
      },
      {
        title: "C. Layanan Kemahasiswaan",
        headers: ["No", "Jenis Layanan", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Beasiswa", "", ""],
          ["2", "Konseling", "", ""],
          ["3", "Pengembangan minat-bakat", "", ""],
          ["4", "Layanan karir", "", ""],
          ["5", "Kemahasiswaan (BEM/HIMA/UKM)", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Wakil Rektor III", nama: "(...........................)", jabatan: "Wakil Rektor III", nip: "NIDN: ................" },
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 22,
    namaFormulir: "FORMULIR MONITORING EVALUASI SUMBER DAYA MANUSIA",
    kodeFormulir: "FM-TMB-04",
    kategori: "FORM",
    matchStandar: "Standar Sumber Daya Manusia (SDM)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi SDM, mencakup rekrutmen, pelatihan, kinerja, dan retensi.",
    ],
    instruksi: "Isi formulir setiap tahun oleh BAKU bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Evaluasi", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. BAKU / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator SDM",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Jumlah SDM (dosen + tendik)", "≥385", "", "", ""],
          ["2", "Persentase SDM dengan kompetensi sesuai", "≥84%", "", "", ""],
          ["3", "Jumlah program pelatihan SDM per tahun", "≥25", "", "", ""],
          ["4", "Tingkat retensi SDM (5 tahun)", "≥85%", "", "", ""],
          ["5", "Persentase SDM dengan SKP >80", "≥72%", "", "", ""],
        ],
      },
      {
        title: "C. Rekrutmen dan Promosi",
        headers: ["No", "Jenis Kegiatan", "Jumlah", "Tanggal", "Keterangan"],
        widths: [5, 35, 12, 18, 30],
        emptyRows: 6,
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. BAKU", nama: "(...........................)", jabatan: "Ka. BAKU", nip: "NIP: ................" },
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
      { label: "Wakil Rektor II", nama: "(...........................)", jabatan: "Wakil Rektor II", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 23,
    namaFormulir: "FORMULIR MONITORING EVALUASI KEUANGAN, SARANA, DAN PRASARANA",
    kodeFormulir: "FM-TMB-05",
    kategori: "FORM",
    matchStandar: "Standar Keuangan, Sarana, dan Prasarana (KSP)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pengelolaan keuangan, sarana, dan prasarana secara terintegrasi.",
    ],
    instruksi: "Isi formulir setiap tahun oleh BAKU bersama BAU dan SPI.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Anggaran", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. BAKU / Ka. BAU / Ka. SPI"],
        ],
      },
      {
        title: "B. Indikator Keuangan",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Anggaran tahunan (Rp miliar)", "≥92", "", "", ""],
          ["2", "Opini audit eksternal", "WTP", "", "", ""],
          ["3", "Persentase anggaran berbasis kinerja", "≥75%", "", "", ""],
          ["4", "Jumlah audit internal SPI per tahun", "≥6", "", "", ""],
        ],
      },
      {
        title: "C. Indikator Sarana dan Prasarana",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Persentase sarana terinventarisasi", "≥92%", "", "", ""],
          ["2", "Persentase prasarana terpelihara", "≥88%", "", "", ""],
          ["3", "Jumlah smart campus components", "≥10", "", "", ""],
          ["4", "Jumlah investasi sarana-prasarana (Rp juta)", "≥800", "", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. BAKU", nama: "(...........................)", jabatan: "Ka. BAKU", nip: "NIP: ................" },
      { label: "Ka. BAU", nama: "(...........................)", jabatan: "Ka. BAU", nip: "NIP: ................" },
      { label: "Ka. SPI", nama: "(...........................)", jabatan: "Ka. SPI", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 24,
    namaFormulir: "FORMULIR MONITORING EVALUASI KERJASAMA",
    kodeFormulir: "FM-TMB-06",
    kategori: "FORM",
    matchStandar: "Standar Kerjasama (KJS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi kerja sama, mencakup MoU, MoA, dan implementasi.",
    ],
    instruksi: "Isi formulir setiap tahun oleh BAU bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Evaluasi", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. BAU / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator Kerjasama",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Jumlah MoU aktif", "≥60", "", "", ""],
          ["2", "Jumlah MoA aktif", "≥90", "", "", ""],
          ["3", "Jumlah kerjasama internasional aktif", "≥18", "", "", ""],
          ["4", "Persentase kerjasama dengan implementasi nyata", "≥75%", "", "", ""],
        ],
      },
      {
        title: "C. Daftar Kerjasama Aktif",
        headers: ["No", "Mitra", "Jenis (MoU/MoA)", "Bidang", "Status Implementasi"],
        widths: [5, 25, 15, 20, 35],
        emptyRows: 10,
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaUnit(),
  },
  {
    nomor: 25,
    namaFormulir: "FORMULIR MONITORING EVALUASI MBKM",
    kodeFormulir: "FM-TMB-07",
    kategori: "FORM",
    matchStandar: "Standar Merdeka Belajar Kampus Merdeka (MBKM)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pelaksanaan MBKM, mencakup skema, mitra DUDI, dan mahasiswa.",
    ],
    instruksi: "Isi formulir setiap semester oleh UPPS bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Semester / Tahun Akademik", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. UPPS / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator MBKM",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Persentase prodi yang menerapkan MBKM", "≥85%", "", "", ""],
          ["2", "Jumlah mahasiswa MBKM per tahun", "≥380", "", "", ""],
          ["3", "Jumlah mitra DUDI untuk MBKM", "≥50", "", "", ""],
          ["4", "Tingkat kepuasan mahasiswa terhadap MBKM", "≥82%", "", "", ""],
        ],
      },
      {
        title: "C. Skema MBKM",
        headers: ["No", "Skema MBKM", "Jumlah Mahasiswa", "Mitra DUDI", "Konversi SKS"],
        widths: [5, 25, 18, 25, 27],
        rows: [
          ["1", "Magang", "", "", ""],
          ["2", "Studi Independen", "", "", ""],
          ["3", "Pertukaran Pelajar", "", "", ""],
          ["4", "Asistensi Mengajar", "", "", ""],
          ["5", "Proyek Kemanusiaan", "", "", ""],
          ["6", "Kegiatan Wirausaha", "", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaProdi(),
  },
  {
    nomor: 26,
    namaFormulir: "FORMULIR MONITORING EVALUASI LUARAN DAN CAPAIAN TRIDHARMA",
    kodeFormulir: "FM-TMB-08",
    kategori: "FORM",
    matchStandar: "Standar Luaran dan Capaian Tridharma (LCT)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi luaran dan capaian Tridharma secara terintegrasi.",
    ],
    instruksi: "Isi formulir setiap tahun oleh PPM, dilaporkan dalam RTM tahunan.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun Evaluasi", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. PPM"],
        ],
      },
      {
        title: "B. Capaian 8 IKU",
        headers: ["No", "IKU", "Baseline 2025", "Target 2030", "Capaian", "Skor (1-5)"],
        widths: [5, 35, 12, 12, 12, 24],
        rows: [
          ["1", "Lulusan terserap DUDI <6 bulan", "60%", "92%", "", ""],
          ["2", "Mahasiswa mendapat pengalaman di luar kampus", "20%", "40%", "", ""],
          ["3", "Dosen berkegiatan di luar kampus", "15%", "35%", "", ""],
          ["4", "Praktisi mengajar di kampus", "2/prodi", "6/prodi", "", ""],
          ["5", "Hasil kerja dosen digunakan masyarakat", "15", "35", "", ""],
          ["6", "Prodi berkerjasama dengan DUDI", "3/prodi", "7/prodi", "", ""],
          ["7", "Mata kuliah dengan metode praktik", "40%", "60%", "", ""],
          ["8", "Prodi terakreditasi unggul", "30%", "70%", "", ""],
        ],
      },
      {
        title: "C. Luaran Tridharma",
        headers: ["Jenis Luaran", "Jumlah 2025", "Target 2030", "Capaian"],
        widths: [40, 20, 20, 20],
        rows: [
          ["Lulusan", "1500", "2750", ""],
          ["Publikasi Tridharma", "200", "980", ""],
          ["Paten/HKI", "15", "125", ""],
          ["Produk PkM", "30", "210", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
      { label: "Rektor", nama: "(...........................)", jabatan: "Rektor", nip: "NIDN: 0714046001" },
    ],
  },
  {
    nomor: 27,
    namaFormulir: "FORMULIR MONITORING EVALUASI PELAYANAN KEPADA MAHASISWA",
    kodeFormulir: "FM-TMB-09",
    kategori: "FORM",
    matchStandar: "Standar Pelayanan Kepada Mahasiswa (PKM-MHS)",
    deskripsi: [
      "Formulir ini digunakan untuk monitoring dan evaluasi pelayanan kepada mahasiswa, mencakup layanan akademik, administrasi, dan penunjang.",
    ],
    instruksi: "Isi formulir setiap semester oleh BAA bersama PPM.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Semester / Tahun Akademik", ""],
          ["Tanggal Evaluasi", ""],
          ["Pemonitor", "Ka. BAA / Ka. PPM"],
        ],
      },
      {
        title: "B. Indikator Pelayanan",
        headers: ["No", "Indikator", "Target", "Capaian", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 12, 12, 8, 28],
        rows: [
          ["1", "Tingkat kepuasan layanan akademik", "≥78%", "", "", ""],
          ["2", "Tingkat kepuasan layanan administrasi", "≥74%", "", "", ""],
          ["3", "Persentase layanan digital", "≥68%", "", "", ""],
          ["4", "Waktu rata-rata penyelesaian pengaduan (hari)", "≤5", "", "", ""],
        ],
      },
      {
        title: "C. Survey Kepuasan Mahasiswa",
        headers: ["No", "Jenis Layanan", "Jumlah Responden", "Skor (1-5)", "Catatan"],
        widths: [5, 35, 18, 12, 30],
        rows: [
          ["1", "KRS dan nilai online (SIAKAD)", "", "", ""],
          ["2", "KTM, transkrip, ijazah", "", "", ""],
          ["3", "Beasiswa", "", "", ""],
          ["4", "Konseling", "", "", ""],
          ["5", "Pusat karir", "", "", ""],
          ["6", "Perpustakaan", "", "", ""],
          ["7", "Laboratorium", "", "", ""],
          ["8", "Kafetaria", "", "", ""],
          ["9", "Parkir dan keamanan", "", "", ""],
        ],
      },
      {
        title: "D. Rekomendasi",
        headers: ["No", "Rekomendasi", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaUnit(),
  },

  // === BAB VII: FORMULIR AMI DAN RTM (FM-AMI-01 s/d FM-AMI-04) ===
  {
    nomor: 28,
    namaFormulir: "FORMULIR PERMOHONAN AUDIT MUTU INTERNAL (AMI)",
    kodeFormulir: "FM-AMI-01",
    kategori: "FORM",
    matchStandar: "Manual Mutu SPMI UNITA - Bab VI AMI",
    deskripsi: [
      "Formulir ini digunakan untuk permohonan AMI oleh unit kerja kepada PPM. Sesuai Manual Mutu Bab VI tentang AMI dan Pasal 68 ayat (2) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir minimal 1 bulan sebelum jadwal AMI yang diusulkan.",
    fieldTables: [
      {
        title: "A. Identitas Auditee",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Unit Kerja / Program Studi", ""],
          ["Ka. Unit / Ka. Prodi", ""],
          ["Alamat", ""],
          ["Kontak (HP/Email)", ""],
          ["Tanggal Permohonan", ""],
        ],
      },
      {
        title: "B. Lingkup Audit yang Dimohon",
        headers: ["No", "Standar yang Diaudit", "Periode Audit"],
        widths: [5, 65, 30],
        emptyRows: 8,
      },
      {
        title: "C. Jadwal AMI yang Diusulkan",
        headers: ["No", "Tahapan AMI", "Tanggal Usulan"],
        widths: [5, 65, 30],
        rows: [
          ["1", "Persiapan & evaluasi diri", ""],
          ["2", "Pelaksanaan audit (visitasi)", ""],
          ["3", "Penyusunan laporan", ""],
        ],
      },
      {
        title: "D. Tim Auditee",
        headers: ["No", "Nama", "Jabatan dalam Tim", "NIDN/NIP"],
        widths: [5, 40, 30, 25],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Ka. Unit / Ka. Prodi", nama: "(...........................)", jabatan: "Ka. Unit", nip: "NIDN: ................" },
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 29,
    namaFormulir: "FORMULIR LAPORAN EVALUASI DIRI AUDITEE",
    kodeFormulir: "FM-AMI-02",
    kategori: "FORM",
    matchStandar: "Manual Mutu SPMI UNITA - Bab VI AMI",
    deskripsi: [
      "Formulir ini digunakan oleh auditee untuk menyusun laporan evaluasi diri sebelum AMI. Sesuai Manual Mutu Bab VI.",
    ],
    instruksi: "Isi formulir minimal 2 minggu sebelum jadwal AMI.",
    fieldTables: [
      {
        title: "A. Identitas Auditee",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Unit Kerja / Program Studi", ""],
          ["Periode Evaluasi Diri", ""],
          ["Tanggal Penyusunan", ""],
          ["Penanggung Jawab", ""],
        ],
      },
      {
        title: "B. Evaluasi Diri per Standar",
        headers: ["No", "Standar", "Target", "Capaian", "Bukti", "Skor (1-5)"],
        widths: [5, 30, 10, 10, 25, 20],
        emptyRows: 12,
      },
      {
        title: "C. Identifikasi Masalah",
        headers: ["No", "Masalah", "Penyebab", "Dampak", "Usulan Solusi"],
        widths: [5, 30, 20, 20, 25],
        emptyRows: 5,
      },
      {
        title: "D. Rencana Tindak Lanjut",
        headers: ["No", "Rencana", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdKaUnit(),
  },
  {
    nomor: 30,
    namaFormulir: "FORMULIR LAPORAN HASIL AMI",
    kodeFormulir: "FM-AMI-03",
    kategori: "FORM",
    matchStandar: "Manual Mutu SPMI UNITA - Bab VI AMI",
    deskripsi: [
      "Formulir ini digunakan oleh auditor untuk melaporkan hasil AMI. Sesuai Manual Mutu Bab VI dan Pasal 68 ayat (2-3) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir maksimal 2 minggu setelah pelaksanaan AMI.",
    fieldTables: [
      {
        title: "A. Identitas Audit",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Unit Kerja / Program Studi (Auditee)", ""],
          ["Tim Auditor", ""],
          ["Tanggal Audit", ""],
          ["Lokasi Audit", ""],
          ["No. Surat Tugas", ""],
        ],
      },
      {
        title: "B. Temuan Audit per Standar",
        headers: ["No", "Standar", "Temuan", "Kategori*", "Rekomendasi"],
        widths: [5, 25, 30, 10, 30],
        emptyRows: 12,
        notes: ["*Kategori: MS (Mencapai Standar), ML (Melampaui Standar), BS (Belum mencapai Standar), MSV (Menyimpang dari Standar)"],
      },
      {
        title: "C. Permintaan Tindakan Koreksi (PTK)",
        headers: ["No", "PTK", "Penanggung Jawab", "Target Waktu", "Status"],
        widths: [5, 40, 20, 15, 20],
        emptyRows: 6,
      },
      {
        title: "D. Kesimpulan Auditor",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Kesimpulan umum", ""],
          ["Rekomendasi prioritas", ""],
          ["Tindak lanjut yang diharapkan", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Ketua Tim Auditor", nama: "(...........................)", jabatan: "Ketua Auditor", nip: "NIDN: ................" },
      { label: "Ka. Bag. Audit dan Monevin", nama: "(...........................)", jabatan: "Ka. Bag. AM", nip: "NIDN: ................" },
      { label: "Ka. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 31,
    namaFormulir: "FORMULIR BERITA ACARA RAPAT TINJAUAN MANAJEMEN (RTM)",
    kodeFormulir: "FM-AMI-04",
    kategori: "FORM",
    matchStandar: "Manual Mutu SPMI UNITA - Bab VIII RTM",
    deskripsi: [
      "Formulir ini digunakan untuk berita acara RTM tahunan, sesuai Manual Mutu Bab VIII. RTM membahas 7 unsur sebagaimana diatur dalam Manual Mutu.",
    ],
    instruksi: "Isi formulir saat pelaksanaan RTM tahunan oleh Rektor bersama pimpinan.",
    fieldTables: [
      {
        title: "A. Identitas RTM",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Tahun RTM", ""],
          ["Tanggal RTM", ""],
          ["Lokasi RTM", ""],
          ["Pimpinan RTM", "Rektor"],
          ["Sekretariat", "PPM"],
        ],
      },
      {
        title: "B. Daftar Hadir",
        headers: ["No", "Nama", "Jabatan", "Tanda Tangan"],
        widths: [5, 40, 30, 25],
        emptyRows: 15,
      },
      {
        title: "C. Agenda 7 Unsur RTM",
        headers: ["No", "Unsur", "Skor (1-5)", "Keputusan / Tindak Lanjut"],
        widths: [5, 35, 10, 50],
        rows: [
          ["1", "Hasil Audit Mutu Internal (AMI)", "", ""],
          ["2", "Umpan balik dari pemangku kepentingan", "", ""],
          ["3", "Pencapaian sasaran mutu / IKU", "", ""],
          ["4", "Tindak lanjut permintaan koreksi (PTK)", "", ""],
          ["5", "Status tindak lanjut RTM periode sebelumnya", "", ""],
          ["6", "Perubahan yang mempengaruhi sistem mutu", "", ""],
          ["7", "Rekomendasi peningkatan", "", ""],
        ],
      },
      {
        title: "D. Keputusan RTM",
        headers: ["No", "Keputusan", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 55, 25, 15],
        emptyRows: 8,
      },
    ],
    tandaTangan: [
      { label: "Sekretariat RTM\nKa. PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
      { label: "Pimpinan RTM\nRektor", nama: "Dr. Muharsono, M.Si.", jabatan: "Rektor", nip: "NIDN: 0714046001" },
    ],
  },

  // === BAB VIII: FORMULIR AKADEMIK (FM-AKD-01 s/d FM-AKD-05) ===
  {
    nomor: 32,
    namaFormulir: "FORMULIR RENCANA PEMBELAJARAN SEMESTER (RPS)",
    kodeFormulir: "FM-AKD-01",
    kategori: "FORM",
    matchStandar: "Standar Proses Pembelajaran (SPB)",
    deskripsi: [
      "Formulir ini digunakan oleh dosen untuk menyusun RPS setiap mata kuliah. Mengacu pada Standar Proses Pembelajaran (SPB) Permen 39 Tahun 2025.",
    ],
    instruksi: "RPS disusun sebelum semester dimulai dan disetujui Ka. Prodi.",
    fieldTables: [
      {
        title: "A. Identitas Mata Kuliah",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Mata Kuliah", ""],
          ["Kode Mata Kuliah / SKS", ""],
          ["Program Studi", ""],
          ["Semester", ""],
          ["Dosen Pengampu", ""],
          ["NIDN", ""],
          ["Tahun Akademik", ""],
        ],
      },
      {
        title: "B. Capaian Pembelajaran",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["CPL yang dibebankan (dari CPL Prodi)", ""],
          ["CPMK Mata Kuliah", ""],
          ["Sub-CPMK", ""],
        ],
      },
      {
        title: "C. Deskripsi Mata Kuliah",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Deskripsi singkat", ""],
          ["Bahan kajian / materi", ""],
          ["Pustaka utama", ""],
          ["Pustaka pendukung", ""],
        ],
      },
      {
        title: "D. Rencana Pembelajaran Mingguan",
        headers: ["Minggu", "Sub-CPMK", "Materi", "Metode", "Pengalaman Belajar", "Bobot Penilaian"],
        widths: [7, 18, 25, 12, 25, 13],
        emptyRows: 16,
      },
      {
        title: "E. Komponen Penilaian",
        headers: ["No", "Komponen", "Bobot (%)", "Keterangan"],
        widths: [5, 50, 15, 30],
        rows: [
          ["1", "Kehadiran dan partisipasi", "", ""],
          ["2", "Tugas individu", "", ""],
          ["3", "Tugas kelompok", "", ""],
          ["4", "UTS", "", ""],
          ["5", "UAS", "", ""],
          ["6", "Lain-lain", "", ""],
          ["", "TOTAL", "100%", ""],
        ],
      },
      {
        title: "F. Rubrik Penilaian",
        headers: ["Komponen", "Skor 1", "Skor 2", "Skor 3", "Skor 4", "Skor 5"],
        widths: [30, 14, 14, 14, 14, 14],
        emptyRows: 5,
      },
    ],
    tandaTangan: ttdDosen(),
  },
  {
    nomor: 33,
    namaFormulir: "FORMULIR BERITA ACARA UJIAN TENGAH SEMESTER / UJIAN AKHIR SEMESTER",
    kodeFormulir: "FM-AKD-02",
    kategori: "FORM",
    matchStandar: "Standar Penilaian (SPN)",
    deskripsi: [
      "Formulir ini digunakan untuk berita acara pelaksanaan UTS/UAS. Mengacu pada Standar Penilaian (SPN) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir saat pelaksanaan UTS/UAS oleh pengawas.",
    fieldTables: [
      {
        title: "A. Identitas Ujian",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Jenis Ujian", "(UTS / UAS)"],
          ["Mata Kuliah", ""],
          ["Kode Mata Kuliah / SKS", ""],
          ["Program Studi", ""],
          ["Dosen Pengampu", ""],
          ["Tanggal Ujian", ""],
          ["Waktu / Ruang", ""],
          ["Semester / Tahun Akademik", ""],
        ],
      },
      {
        title: "B. Pelaksanaan Ujian",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Jumlah mahasiswa terdaftar", ""],
          ["Jumlah mahasiswa hadir", ""],
          ["Jumlah mahasiswa tidak hadir", ""],
          ["Pengawas 1", ""],
          ["Pengawas 2", ""],
          ["Waktu mulai", ""],
          ["Waktu selesai", ""],
        ],
      },
      {
        title: "C. Catatan Pelaksanaan",
        headers: ["No", "Catatan", "Tindak Lanjut"],
        widths: [5, 65, 30],
        emptyRows: 5,
      },
      {
        title: "D. Kondisi Ujian",
        headers: ["Aspek", "Status", "Catatan"],
        widths: [40, 20, 40],
        rows: [
          ["Soal tersedia tepat waktu", "(Ya/Tidak)", ""],
          ["Kondisi ruang memadai", "(Ya/Tidak)", ""],
          ["Pelanggaran akademik", "(Ada/Tidak)", ""],
          ["Mahasiswa dengan khusus", "(Ada/Tidak)", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Pengawas 1", nama: "(...........................)", jabatan: "Dosen", nip: "NIDN: ................" },
      { label: "Pengawas 2", nama: "(...........................)", jabatan: "Dosen", nip: "NIDN: ................" },
      { label: "Dosen Pengampu", nama: "(...........................)", jabatan: "Dosen", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 34,
    namaFormulir: "FORMULIR BIMBINGAN TUGAS AKHIR / SKRIPSI / TESIS",
    kodeFormulir: "FM-AKD-03",
    kategori: "FORM",
    matchStandar: "Standar Proses Pembelajaran (SPB)",
    deskripsi: [
      "Formulir ini digunakan untuk pencatatan bimbingan tugas akhir/skripsi/tesis.",
    ],
    instruksi: "Isi formulir setiap kali bimbingan oleh mahasiswa dan dosen pembimbing.",
    fieldTables: [
      {
        title: "A. Identitas",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Mahasiswa", ""],
          ["NIM", ""],
          ["Program Studi", ""],
          ["Judul Tugas Akhir / Skripsi", ""],
          ["Dosen Pembimbing 1", ""],
          ["Dosen Pembimbing 2", ""],
          ["Tanggal Mulai Bimbingan", ""],
        ],
      },
      {
        title: "B. Log Bimbingan",
        headers: ["No", "Tanggal", "Materi Bimbingan", "Catatan Dosen", "Paraf Dosen"],
        widths: [5, 12, 35, 30, 18],
        emptyRows: 15,
      },
      {
        title: "C. Persetujuan Seminar Proposal / Hasil / Sidang",
        headers: ["Tahapan", "Status", "Tanggal", "Catatan"],
        widths: [30, 20, 20, 30],
        rows: [
          ["Seminar Proposal", "(Disetujui/Belum)", "", ""],
          ["Seminar Hasil", "(Disetujui/Belum)", "", ""],
          ["Sidang Akhir", "(Disetujui/Belum)", "", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Mahasiswa", nama: "(...........................)", jabatan: "Mahasiswa", nip: "NIM: ................" },
      { label: "Dosen Pembimbing 1", nama: "(...........................)", jabatan: "Pembimbing 1", nip: "NIDN: ................" },
      { label: "Dosen Pembimbing 2", nama: "(...........................)", jabatan: "Pembimbing 2", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 35,
    namaFormulir: "FORMULIR BERITA ACARA KONTRAK PERKULIAHAN",
    kodeFormulir: "FM-AKD-04",
    kategori: "FORM",
    matchStandar: "Standar Proses Pembelajaran (SPB)",
    deskripsi: [
      "Formulir ini digunakan untuk berita acara kontrak perkuliahan antara dosen dan mahasiswa pada awal semester.",
    ],
    instruksi: "Isi formulir pada pertemuan pertama perkuliahan.",
    fieldTables: [
      {
        title: "A. Identitas Mata Kuliah",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Mata Kuliah", ""],
          ["Kode Mata Kuliah / SKS", ""],
          ["Program Studi", ""],
          ["Semester / Tahun Akademik", ""],
          ["Dosen Pengampu", ""],
          ["NIDN", ""],
          ["Jumlah Pertemuan", ""],
          ["Jadwal Perkuliahan", ""],
        ],
      },
      {
        title: "B. Kontrak Perkuliahan",
        headers: ["No", "Komponen Kontrak", "Isian"],
        widths: [5, 35, 60],
        rows: [
          ["1", "Capaian Pembelajaran (CPMK)", ""],
          ["2", "Materi pokok", ""],
          ["3", "Metode pembelajaran", ""],
          ["4", "Kriteria penilaian", ""],
          ["5", "Bobot penilaian", ""],
          ["6", "Aturan kehadiran", "Minimal 75% kehadiran untuk mengikuti UAS"],
          ["7", "Pustaka utama", ""],
          ["8", "Tugas-tugas", ""],
          ["9", "Ujian (UTS/UAS)", ""],
          ["10", "Aturan lain", ""],
        ],
      },
      {
        title: "C. Pernyataan",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Pernyataan Dosen", "Saya berkomitmen melaksanakan perkuliahan sesuai kontrak di atas."],
          ["Pernyataan Mahasiswa", "Kami berkomitmen mengikuti perkuliahan sesuai kontrak di atas."],
        ],
      },
      {
        title: "D. Daftar Hadir Mahasiswa (Pertemuan Pertama)",
        headers: ["No", "NIM", "Nama Mahasiswa", "Tanda Tangan"],
        widths: [5, 18, 50, 27],
        emptyRows: 20,
      },
    ],
    tandaTangan: ttdDosen(),
  },

  // === BAB IX: FORMULIR PENDUKUNG PD DIKTI DAN TRIANGULASI ===
  {
    nomor: 36,
    namaFormulir: "FORMULIR VERIFIKASI DATA PANGKALAN DATA PENDIDIKAN TINGGI (PD DIKTI)",
    kodeFormulir: "FM-PDD-01",
    kategori: "FORM",
    matchStandar: "Bab IV Kebijakan Mutu - Prinsip Triangulasi (Pasal 66 & 111 Permen 39/2025)",
    deskripsi: [
      "Formulir ini digunakan untuk verifikasi data PD Dikti oleh unit kerja, sesuai Pasal 66 (triangulasi) dan Pasal 111 (PD Dikti sebagai sumber data utama) Permen 39 Tahun 2025.",
      "Universitas Tulungagung bertanggung jawab terhadap kebenaran dan ketepatan data PD Dikti sebagaimana diatur dalam Pasal 111 ayat (4) Permen 39 Tahun 2025.",
    ],
    instruksi: "Isi formulir minimal 2 kali per tahun (per semester) oleh operator PD Dikti unit kerja.",
    fieldTables: [
      {
        title: "A. Identitas Unit",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Unit Kerja", ""],
          ["Penanggung Jawab Penginputan", ""],
          ["Operator PD Dikti", ""],
          ["Periode Verifikasi (Semester)", ""],
          ["Tanggal Verifikasi", ""],
        ],
      },
      {
        title: "B. Verifikasi Data Mahasiswa",
        headers: ["No", "Jenis Data", "Jumlah di SIAKAD", "Jumlah di PD Dikti", "Status", "Tindak Lanjut"],
        widths: [5, 30, 15, 15, 12, 23],
        rows: [
          ["1", "Mahasiswa aktif", "", "", "", ""],
          ["2", "Mahasiswa baru", "", "", "", ""],
          ["3", "Mahasiswa cuti", "", "", "", ""],
          ["4", "Lulusan", "", "", "", ""],
        ],
      },
      {
        title: "C. Verifikasi Data Dosen",
        headers: ["No", "Jenis Data", "Jumlah Internal", "Jumlah PD Dikti", "Status", "Tindak Lanjut"],
        widths: [5, 30, 15, 15, 12, 23],
        rows: [
          ["1", "Dosen tetap (NIDN)", "", "", "", ""],
          ["2", "Dosen tidak tetap (NIDK)", "", "", "", ""],
          ["3", "Dosen dengan Serdos", "", "", "", ""],
          ["4", "Dosen S3", "", "", "", ""],
        ],
      },
      {
        title: "D. Verifikasi Data Akademik",
        headers: ["No", "Jenis Data", "Jumlah Internal", "Jumlah PD Dikti", "Status", "Tindak Lanjut"],
        widths: [5, 30, 15, 15, 12, 23],
        rows: [
          ["1", "Mata kuliah", "", "", "", ""],
          ["2", "Kurikulum", "", "", "", ""],
          ["3", "Publikasi", "", "", "", ""],
          ["4", "Penelitian", "", "", "", ""],
          ["5", "PkM", "", "", "", ""],
          ["6", "Paten/HKI", "", "", "", ""],
        ],
      },
      {
        title: "E. Triangulasi Data (Pasal 66 Permen 39/2025)",
        headers: ["Sumber Data", "Bentuk Data", "Penanggung Jawab"],
        widths: [25, 50, 25],
        rows: [
          ["PD Dikti (Data Primer)", "Data mahasiswa, dosen, kurikulum, lulusan, Tridharma", "UPT SI / BAA / BAKU / LPPM / UPPS"],
          ["Evaluasi Internal", "Hasil AMI, evaluasi diri, monitoring rutin, RTM", "PPM / LPM / GKM / Tim Evaluasi"],
          ["Stakeholder Eksternal", "Akreditasi BAN-PT/LAM, umpan balik lulusan, DUDI, pengaduan", "PPM / LPPM / Pusat Karir / UPPS"],
        ],
      },
      {
        title: "F. Catatan dan Tindak Lanjut",
        headers: ["No", "Catatan", "Tindak Lanjut", "Penanggung Jawab", "Target Waktu"],
        widths: [5, 35, 25, 20, 15],
        emptyRows: 5,
      },
    ],
    tandaTangan: [
      { label: "Operator PD Dikti", nama: "(...........................)", jabatan: "Operator", nip: "NIP: ................" },
      { label: "Ka. Unit Kerja", nama: "(...........................)", jabatan: "Ka. Unit", nip: "NIDN: ................" },
      { label: "Verifikator PPM", nama: "(...........................)", jabatan: "Ka. PPM", nip: "NIDN: ................" },
    ],
  },
  {
    nomor: 37,
    namaFormulir: "FORMULIR SURVEY KEPUASAN MAHASISWA (EMONEV)",
    kodeFormulir: "FM-PDD-02",
    kategori: "FORM",
    matchStandar: "Standar Proses Pembelajaran (SPB) & Standar Pelayanan Kepada Mahasiswa (PKM-MHS)",
    deskripsi: [
      "Formulir ini digunakan untuk survey kepuasan mahasiswa terhadap proses pembelajaran dan layanan, sebagai bagian dari prinsip triangulasi (Pasal 66 Permen 39/2025).",
    ],
    instruksi: "Sebarkan kuesioner setiap akhir semester kepada seluruh mahasiswa. Skala 1-5 (1=sangat tidak puas, 5=sangat puas).",
    fieldTables: [
      {
        title: "A. Identitas Responden",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Program Studi", ""],
          ["Semester Mahasiswa", ""],
          ["Mata Kuliah (untuk emonev per MK)", ""],
          ["Dosen Pengampu", ""],
          ["Tanggal Isi", ""],
        ],
      },
      {
        title: "B. Penilaian Proses Pembelajaran",
        headers: ["No", "Aspek", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Kesesuaian RPS dengan pelaksanaan", "", ""],
          ["2", "Penguasaan materi oleh dosen", "", ""],
          ["3", "Metode pembelajaran (interaktif)", "", ""],
          ["4", "Penggunaan media/teknologi", "", ""],
          ["5", "Ketersediaan materi di LMS", "", ""],
          ["6", "Waktu perkuliahan (tepat waktu)", "", ""],
          ["7", "Penilaian (objektif & transparan)", "", ""],
          ["8", "Feedback atas tugas/ujian", "", ""],
          ["9", "Kesediaan dosen untuk konsultasi", "", ""],
          ["10", "Suasana kelas (kondusif)", "", ""],
        ],
      },
      {
        title: "C. Penilaian Layanan",
        headers: ["No", "Jenis Layanan", "Skor (1-5)", "Catatan"],
        widths: [5, 50, 10, 35],
        rows: [
          ["1", "Layanan akademik (KRS, nilai)", "", ""],
          ["2", "Layanan administrasi (KTM, transkrip)", "", ""],
          ["3", "Layanan perpustakaan", "", ""],
          ["4", "Layanan laboratorium", "", ""],
          ["5", "Layanan WiFi/Internet", "", ""],
          ["6", "Layanan keamanan & parkir", "", ""],
          ["7", "Layanan kafetaria", "", ""],
          ["8", "Layanan BAA/BAU/BAK", "", ""],
        ],
      },
      {
        title: "D. Saran dan Masukan",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Saran untuk dosen pengampu", ""],
          ["Saran untuk program studi", ""],
          ["Saran untuk universitas", ""],
          ["Komplain/pengaduan (jika ada)", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Responden (Mahasiswa)", nama: "(Anonim)", jabatan: "Mahasiswa", nip: "" },
    ],
  },
  {
    nomor: 38,
    namaFormulir: "FORMULIR PERMOHONAN KOREKSI / BANDING NILAI",
    kodeFormulir: "FM-AKD-05",
    kategori: "FORM",
    matchStandar: "Standar Penilaian (SPN)",
    deskripsi: [
      "Formulir ini digunakan oleh mahasiswa untuk permohonan koreksi atau banding nilai, sesuai dengan SOP penilaian.",
    ],
    instruksi: "Isi formulir maksimal 7 hari kerja setelah pengumuman nilai.",
    fieldTables: [
      {
        title: "A. Identitas Mahasiswa",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Nama Mahasiswa", ""],
          ["NIM", ""],
          ["Program Studi", ""],
          ["Semester / Tahun Akademik", ""],
          ["No. HP/Email", ""],
        ],
      },
      {
        title: "B. Identitas Mata Kuliah",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Mata Kuliah", ""],
          ["Kode Mata Kuliah / SKS", ""],
          ["Dosen Pengampu", ""],
          ["Nilai yang Diberikan", ""],
          ["Nilai yang Diharapkan", ""],
        ],
      },
      {
        title: "C. Alasan Permohonan",
        headers: ["Komponen", "Isian"],
        widths: [30, 70],
        rows: [
          ["Jenis permohonan", "(Koreksi/Banding)"],
          ["Alasan (detail)", ""],
          ["Bukti pendukung (jika ada)", ""],
        ],
      },
      {
        title: "D. Proses Penanganan",
        headers: ["Tahap", "Tanggal", "Hasil", "Paraf"],
        widths: [35, 20, 30, 15],
        rows: [
          ["Diterima oleh Ka. Prodi", "", "", ""],
          ["Diteruskan ke Dosen Pengampu", "", "", ""],
          ["Respon Dosen Pengampu", "", "", ""],
          ["Keputusan Akhir", "", "", ""],
        ],
      },
    ],
    tandaTangan: [
      { label: "Mahasiswa Pemohon", nama: "(...........................)", jabatan: "Mahasiswa", nip: "NIM: ................" },
      { label: "Dosen Pengampu", nama: "(...........................)", jabatan: "Dosen", nip: "NIDN: ................" },
      { label: "Ka. Prodi", nama: "(...........................)", jabatan: "Ka. Prodi", nip: "NIDN: ................" },
    ],
  },
];

module.exports = { FORMULIR_LIST };
