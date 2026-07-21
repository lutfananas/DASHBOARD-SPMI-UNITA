// ============================================================
// BAB IX, X, REFERENSI
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./manual_mutu_core.js");

// ============================================================
// BAB IX PEMETAAN SISTEM KERJA DAN KEBUTUHAN DOKUMEN
// ============================================================
function buildBabIX() {
  const items = [];
  
  items.push(h1("BAB IX\nPEMETAAN SISTEM KERJA DAN KEBUTUHAN DOKUMEN"));
  
  items.push(body(
    "Bab ini menyajikan pemetaan sistem kerja dan kebutuhan dokumen untuk setiap tahapan siklus PPEPP di Universitas Tulungagung. Pemetaan ini menjadi referensi operasional bagi seluruh unit kerja dalam melaksanakan aktivitas penjaminan mutu, sehingga setiap aktivitas memiliki penanggung jawab, pelaksana, jadwal, potensi risiko, dan dokumen pendukung yang jelas. Tabel-tabel berikut disusun berdasarkan tahapan PPEPP, mulai dari Penetapan, Pelaksanaan, Evaluasi, Pengendalian, hingga Peningkatan."
  ));
  
  // 9.1 Implementasi Siklus PPEPP
  items.push(h2("9.1 Implementasi Siklus PPEPP"));
  
  items.push(body(
    "Implementasi siklus PPEPP di Universitas Tulungagung melibatkan berbagai aktivitas yang dikelompokkan berdasarkan tahapan PPEPP, Organisasi/Sumber Daya/Aktivitas (OSDAT), Proses, Penanggung Jawab, Pelaksana, Waktu Pelaksanaan, Potensi Risiko, dan Dokumen Pendukung/Pedoman. Setiap kolom dalam tabel-tabel berikut memberikan informasi spesifik yang dibutuhkan untuk pelaksanaan aktivitas terkait."
  ));
  
  // Helper untuk membuat baris pemetaan
  function buildPemetaanRow(ppepp, osdat, proses, pj, pelaksana, waktu, risiko, dokumen) {
    return new TableRow({
      cantSplit: true,
      children: [
        cell(ppepp, { align: AlignmentType.LEFT, bold: true, size: 20, width: 10 }),
        cell(osdat, { align: AlignmentType.LEFT, size: 20, width: 14 }),
        cell(proses, { align: AlignmentType.LEFT, size: 20, width: 16 }),
        cell(pj, { align: AlignmentType.LEFT, size: 20, width: 12 }),
        cell(pelaksana, { align: AlignmentType.LEFT, size: 20, width: 14 }),
        cell(waktu, { align: AlignmentType.LEFT, size: 20, width: 10 }),
        cell(risiko, { align: AlignmentType.LEFT, size: 20, width: 10 }),
        cell(dokumen, { align: AlignmentType.LEFT, size: 20, width: 14 }),
      ],
    });
  }
  
  function buildPemetaanHeader() {
    return new TableRow({
      tableHeader: true, cantSplit: true,
      children: [
        cell("Siklus PPEPP", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 10 }),
        cell("OSDAT", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 14 }),
        cell("Proses", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 16 }),
        cell("Penanggung Jawab", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 12 }),
        cell("Pelaksana", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 14 }),
        cell("Waktu", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 10 }),
        cell("Potensi Risiko", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 10 }),
        cell("Dokumen Pendukung & Pedoman", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20, width: 14 }),
      ],
    });
  }
  
  // a. Tabel Penetapan
  items.push(h3("a. Tahap Penetapan"));
  
  items.push(body("Tabel berikut memetakan sistem kerja dan kebutuhan dokumen pada tahap Penetapan:"));
  
  const tabelPenetapan = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      buildPemetaanHeader(),
      buildPemetaanRow(
        "Penetapan",
        "Organisasi",
        "Penetapan struktur organisasi Penjaminan Mutu UNITA dan Uraian Tugas",
        "Rektor UNITA",
        "PPM, SPI",
        "1 kali / 5 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan",
        "SK Rektor tentang Sistem Organisasi dan Tata Kerja"
      ),
      buildPemetaanRow(
        "Penetapan",
        "Organisasi",
        "Penetapan unit penjaminan mutu di Fakultas",
        "Dekan",
        "GPM",
        "1 kali / 5 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan",
        "SK Dekan Struktur Organisasi dan Tata Kerja Fakultas"
      ),
      buildPemetaanRow(
        "Penetapan",
        "Sistem",
        "Penetapan dokumen SPMI tingkat Universitas",
        "Rektor UNITA",
        "PPM",
        "1 kali / 2 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional",
        "SK Pernyataan dan Kebijakan Mutu; SK Rektor tentang Manual Mutu, SPMI, Standar Mutu, Formulir Mutu, Luaran dan Capaian Tridharma, Instruksi Kerja"
      ),
      buildPemetaanRow(
        "Penetapan",
        "Sistem",
        "Penetapan dokumen SPMI tingkat Fakultas",
        "PPM",
        "Dekan dan GPM",
        "1 kali / 2 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional",
        "SK Pernyataan dan Kebijakan Mutu; SK Rektor tentang Manual Mutu, Standar Mutu, Formulir Mutu, Manual Prosedur, Luaran dan Capaian Tridharma, Instruksi Kerja"
      ),
    ],
  });
  items.push(tabelPenetapan);
  
  // b. Tabel Pelaksanaan
  items.push(h3("b. Tahap Pelaksanaan"));
  
  items.push(body("Tabel berikut memetakan sistem kerja dan kebutuhan dokumen pada tahap Pelaksanaan:"));
  
  const tabelPelaksanaan = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      buildPemetaanHeader(),
      buildPemetaanRow(
        "Pelaksanaan",
        "Perencanaan",
        "Pelaksanaan Renstra UNITA",
        "Rektor UNITA",
        "Wakil Rektor, Dekan",
        "1 kali / 5 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Renstra UNITA"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Perencanaan",
        "Pelaksanaan Renstra oleh PPM",
        "Ketua PPM",
        "Ketua PPM; Ka. Bag. Pengembangan SPMI; Ka. Bag. Audit dan Monevin",
        "1 kali / 5 tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Renstra UNITA"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pelaksanaan",
        "Pelaksanaan Perjanjian Kinerja UNITA",
        "Rektor UNITA",
        "Wakil Rektor, Dekan",
        "1 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional",
        "Standar Mutu Tata Pamong dan Tata Kelola"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pemutakhiran Data",
        "Pemutakhiran Data PD Dikti",
        "Ka. Biro Administrasi dan Akademik; Ka. Bag. Badan Kepegawaian",
        "Operator PD Dikti; Tim SI",
        "2 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Standar Mutu Sumber Daya Manusia"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pemutakhiran Data",
        "Pemutakhiran data SIAKAD",
        "Wakil Rektor I",
        "Tim SI",
        "2 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Standar Mutu Sumber Daya Manusia"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Peningkatan Kapasitas",
        "Peningkatan Kapasitas GPM",
        "PPM",
        "PPM",
        "1 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan",
        "Standar Mutu Sumber Daya Manusia"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Fasilitasi Akreditasi",
        "Fasilitasi persiapan akreditasi",
        "PPM",
        "PPM",
        "2 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Dokumen Mutu (Kebijakan, Manual, Standar, dan Formulir)"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pengelolaan Pendidikan",
        "Pengelolaan Pendidikan",
        "Ketua Program Studi",
        "Ketua Tim Kurikulum Prodi",
        "1x / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Monev Pendidikan"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pengelolaan Penelitian",
        "Pengelolaan Penelitian",
        "Ketua LPPM; Ketua PPM",
        "LPPM, PPM",
        "1x / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Monev Penelitian"
      ),
      buildPemetaanRow(
        "Pelaksanaan",
        "Pengelolaan PkM",
        "Pengelolaan Pengabdian Masyarakat",
        "Ketua LPPM; Ketua PPM",
        "LPPM, PPM",
        "1x / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Monev PkM"
      ),
    ],
  });
  items.push(tabelPelaksanaan);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  // c. Tabel Evaluasi (Monev per standar)
  items.push(h3("c. Tahap Evaluasi (Monitoring dan Evaluasi per Standar)"));
  
  items.push(body(
    "Tabel berikut memetakan kegiatan monitoring dan evaluasi (Monev) per standar mutu di Universitas Tulungagung. Setiap standar memiliki Monev tersendiri yang dilaksanakan secara berkala oleh PPM bersama Ka. Bag. Audit dan Monevin, Dekan, Ka. Prodi, dan GPM."
  ));
  
  const standarMonevList = [
    ["Monev Capaian Renstra", "Monev Evaluasi dan Capaian Tridharma"],
    ["Monev Visi Misi Tujuan dan Strategi (VMTS)", "Monev VMTS"],
    ["Monev Tata Pamong Tata Kelola dan Kerjasama (TPTK)", "Monev TPTK"],
    ["Monev Mahasiswa", "Monev Mahasiswa"],
    ["Monev Sumber Daya Manusia (SDM)", "Monev SDM"],
    ["Monev Keuangan, Sarana dan Prasarana", "Monev Keuangan dan Monev Sarana dan Prasarana"],
    ["Monev Kerjasama", "Monev Kerjasama"],
    ["Monev MBKM", "Monev MBKM"],
    ["Monev Kesejahteraan/Pelayanan Kepada Mahasiswa", "Monev Kesejahteraan"],
    ["Monev Proses Pembelajaran", "Monev Proses Pembelajaran"],
    ["Monev Pelayanan kepada Mahasiswa", "Monev Pelayanan kepada Mahasiswa"],
  ];
  
  const tabelEvaluasi = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      buildPemetaanHeader(),
      ...standarMonevList.map(([proses, dokumen]) =>
        buildPemetaanRow(
          "Evaluasi",
          "Audit Monev",
          proses,
          "PPM; Ka. Bag. Audit dan Monev; Dekan; Ka. Prodi; GPM",
          "PPM; Ka. Bag. Audit dan Monev; Dekan; Ka. Prodi; GPM",
          proses.includes("Proses") || proses.includes("Pelayanan") ? "2x / tahun" : "1x / tahun",
          "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
          dokumen
        )
      ),
    ],
  });
  items.push(tabelEvaluasi);
  
  // d. Tabel Pengendalian (Diseminasi hasil AMI)
  items.push(h3("d. Tahap Pengendalian (Diseminasi Hasil AMI per Standar)"));
  
  items.push(body(
    "Tabel berikut memetakan kegiatan diseminasi hasil AMI per standar mutu sebagai bagian dari tahap pengendalian. Setiap standar memiliki RTL (Rencana Tindak Lanjut) dari RTM yang menjadi rujukan tindakan koreksi."
  ));
  
  const standarDiseminasiList = [
    "Diseminasi hasil AMI Visi Misi Tujuan dan Strategi (VMTS)",
    "Diseminasi hasil AMI Tata Pamong Tata Kelola dan Kerjasama (TPTK)",
    "Diseminasi hasil AMI Mahasiswa",
    "Diseminasi hasil AMI Sumber Daya Manusia (SDM)",
    "Diseminasi hasil AMI Keuangan, Sarana dan Prasarana",
    "Diseminasi hasil AMI Kerjasama",
    "Diseminasi hasil AMI MBKM",
    "Diseminasi hasil AMI Kesejahteraan/Pelayanan Kepada Mahasiswa",
    "Diseminasi hasil AMI Proses Pembelajaran",
    "Diseminasi hasil AMI Pelayanan kepada Mahasiswa",
  ];
  
  const tabelPengendalian = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      buildPemetaanHeader(),
      // Baris Tindak Lanjut Analisis Kajian Capaian Standar
      buildPemetaanRow(
        "Pengendalian",
        "Tindak Lanjut",
        "Analisis Kajian Capaian Standar dan Indikator Kinerja sebagai Early Warning System",
        "Ketua PPM",
        "Ka. PPM; Ka. GPM; Dekan; Kaprodi",
        "1 kali / tahun",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "RTM dan RTL Capaian Renstra"
      ),
      ...standarDiseminasiList.map((proses, idx) => {
        const dokumen = proses.replace("Diseminasi hasil AMI ", "RTL dari RTM ");
        return buildPemetaanRow(
          "Pengendalian",
          "Diseminasi",
          proses,
          "PPM; Ka. Bag. Audit dan Monev; Dekan; Ka. Prodi; GPM",
          "PPM; Ka. Bag. Audit dan Monev; Dekan; Ka. Prodi; GPM",
          (proses.includes("Proses") || proses.includes("Pelayanan")) ? "2x / tahun" : "1x / tahun",
          "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
          dokumen
        );
      }),
    ],
  });
  items.push(tabelPengendalian);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  // e. Tabel Peningkatan
  items.push(h3("e. Tahap Peningkatan"));
  
  items.push(body("Tabel berikut memetakan sistem kerja dan kebutuhan dokumen pada tahap Peningkatan:"));
  
  const tabelPeningkatan = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      buildPemetaanHeader(),
      buildPemetaanRow(
        "Peningkatan",
        "Tindak Lanjut",
        "Penetapan Standar Mutu UNITA",
        "Ketua PPM",
        "PPM dan GPM UNITA",
        "Periodik sesuai Program Kerja",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Dokumen Standar Mutu"
      ),
      buildPemetaanRow(
        "Peningkatan",
        "Tindak Lanjut",
        "Penetapan Indikator Kinerja Baru",
        "Ketua PPM",
        "PPM; Dekan; Kaprodi; Ka. Bag. Pengembangan SPMI; GPM",
        "Periodik sesuai Program Kerja",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Dokumen Standar Mutu dan Formulir Mutu"
      ),
      buildPemetaanRow(
        "Peningkatan",
        "Tindak Lanjut",
        "Penetapan Program Prioritas dan Unggulan",
        "Ketua PPM",
        "PPM; Dekan; Kaprodi; Ka. Bag. Pengembangan SPMI; GPM",
        "Periodik sesuai Program Kerja",
        "Risiko Kebijakan; Risiko Kepatuhan; Risiko Operasional; Risiko Reputasi",
        "Dokumen Standar Mutu"
      ),
    ],
  });
  items.push(tabelPeningkatan);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB X KEBUTUHAN DOKUMEN, FORMULIR, DAN SOP
// ============================================================
function buildBabX() {
  const items = [];
  
  items.push(h1("BAB X\nKEBUTUHAN DOKUMEN, FORMULIR, DAN SOP"));
  
  // 10.1 Pengantar
  items.push(h2("10.1 Pengantar"));
  
  items.push(body(
    "Kebutuhan dokumen di PPM disesuaikan dengan SK Rektor Universitas Tulungagung tentang Struktur Organisasi Universitas Tulungagung dan SK Rektor tentang Uraian Tugas di Lingkungan Universitas. Secara umum kebutuhan SOP pada PPM sesuai dengan bidang tugas yang ada dalam Susunan Organisasi PPM, yaitu: SPMI, AMI, Akreditasi, dan Pengembangan Mutu Universitas. Mengacu pada klasifikasi dokumen SPMI UNITA, maka PPM memiliki beberapa jenis dokumen penjaminan mutu yang akan dijabarkan pada bab ini."
  ));
  
  // 10.2 Klasifikasi Dokumen SPMI UNITA
  items.push(h2("10.2 Klasifikasi Dokumen SPMI UNITA"));
  
  items.push(body(
    "Berdasarkan klasifikasi dokumen SPMI UNITA, PPM memiliki 15 jenis dokumen penjaminan mutu. Kelima belas jenis dokumen tersebut mencakup dokumen utama SPMI, dokumen pendukung per fakultas, dan pengaturan operasional SPMI institusi. Daftar lengkap jenis dokumen SPMI UNITA adalah sebagai berikut:"
  ));
  
  const jenisDokumen = [
    "1. Pernyataan dan Kebijakan Mutu — dokumen tertinggi yang berisi garis besar penjelasan tentang bagaimana UNITA memahami, merancang, dan melaksanakan SPMI;",
    "2. Manual Mutu — dokumen yang sedang Anda baca ini, berisi petunjuk praktis pelaksanaan PPEPP setiap standar mutu;",
    "3. Standar Mutu — dokumen yang berisi kriteria, ukuran, patokan, atau spesifikasi setiap standar;",
    "4. Formulir Mutu — dokumen tertulis yang berfungsi untuk mencatat dan merekam aktivitas penjaminan mutu;",
    "5. Manual Prosedur Fakultas Ekonomi (FE) — manual prosedur spesifik untuk Fakultas Ekonomi;",
    "6. Manual Prosedur Fakultas Pertanian (FP) — manual prosedur spesifik untuk Fakultas Pertanian;",
    "7. Manual Prosedur Fakultas Hukum (FH) — manual prosedur spesifik untuk Fakultas Hukum;",
    "8. Manual Prosedur Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) — manual prosedur spesifik untuk FISIP;",
    "9. Manual Prosedur Fakultas Teknik (FT) — manual prosedur spesifik untuk Fakultas Teknik;",
    "10. Pengaturan pengelolaan SPMI Institusi — dokumen yang mengatur mekanisme pengelolaan SPMI di tingkat institusi;",
    "11. Pengaturan organisasi pengelola SPMI Institusi — dokumen yang mengatur struktur organisasi PPM, LPM, dan GKM;",
    "12. Pengaturan terkait pelaksanaan standar dalam SPMI Institusi — dokumen yang mengatur mekanisme pelaksanaan setiap standar;",
    "13. Pengaturan terkait evaluasi pelaksanaan standar — dokumen yang mengatur mekanisme evaluasi melalui AMI dan RTM;",
    "14. Pengaturan terkait pengendalian pelaksanaan standar — dokumen yang mengatur mekanisme tindak lanjut hasil evaluasi;",
    "15. Pengaturan terkait peningkatan standar dalam SPMI Institusi — dokumen yang mengatur mekanisme peningkatan standar secara berkelanjutan.",
  ];
  jenisDokumen.forEach(t => items.push(bodyNoIndent(t)));
  
  // 10.3 Kebutuhan SOP per Bidang Tugas
  items.push(h2("10.3 Kebutuhan SOP per Bidang Tugas"));
  
  items.push(body(
    "Kebutuhan SOP pada PPM sesuai dengan bidang tugas yang ada dalam Susunan Organisasi PPM, yaitu empat bidang tugas utama: SPMI, AMI, Akreditasi, dan Pengembangan Mutu Universitas. Setiap bidang tugas memiliki SOP spesifik yang menjadi panduan operasional bagi pelaksana."
  ));
  
  items.push(h3("a. Bidang SPMI"));
  
  items.push(body(
    "Bidang SPMI bertanggung jawab atas perencanaan, penyusunan, dan pemeliharaan dokumen SPMI (Kebijakan, Manual, Standar, Formulir). SOP yang dibutuhkan pada bidang SPMI antara lain: (1) SOP Penyusunan dan Revisi Kebijakan SPMI; (2) SOP Penyusunan dan Revisi Manual Mutu; (3) SOP Penyusunan dan Revisi Standar Mutu; (4) SOP Penyusunan dan Revisi Formulir Mutu; (5) SOP Pengendalian Dokumen SPMI; (6) SOP Sosialisasi Dokumen SPMI; serta (7) SOP Penyusunan dan Revisi Manual Prosedur per Fakultas."
  ));
  
  items.push(h3("b. Bidang AMI"));
  
  items.push(body(
    "Bidang AMI bertanggung jawab atas perencanaan, pelaksanaan, dan pelaporan Audit Mutu Internal. SOP yang dibutuhkan pada bidang AMI antara lain: (1) SOP Perencanaan AMI Tahunan; (2) SOP Penyusunan Instrumen AMI; (3) SOP Pelaksanaan AMI; (4) SOP Pelaporan Hasil AMI; (5) SOP Tindak Lanjut Hasil AMI; (6) SOP Pemilihan dan Pelatihan Auditor Internal; (7) SOP Penyelenggaraan RTM; serta (8) SOP Penyusunan RTL."
  ));
  
  items.push(h3("c. Bidang Akreditasi"));
  
  items.push(body(
    "Bidang Akreditasi bertanggung jawab atas persiapan dan pelaksanaan akreditasi eksternal oleh BAN-PT dan/atau LAM. SOP yang dibutuhkan pada bidang Akreditasi antara lain: (1) SOP Persiapan Akreditasi Program Studi; (2) SOP Persiapan Akreditasi Perguruan Tinggi; (3) SOP Pengisian Borang Akreditasi; (4) SOP Verifikasi Dokumen Akreditasi; (5) SOP Visitasi Asesor; (6) SOP Tindak Lanjut Hasil Akreditasi; serta (7) SOP Perpanjangan Status Akreditasi."
  ));
  
  items.push(h3("d. Bidang Pengembangan Mutu Universitas"));
  
  items.push(body(
    "Bidang Pengembangan Mutu Universitas bertanggung jawab atas pengembangan sistem mutu secara berkelanjutan, termasuk benchmarking, peningkatan kapasitas SDM, dan inovasi sistem. SOP yang dibutuhkan pada bidang Pengembangan Mutu antara lain: (1) SOP Benchmarking ke Perguruan Tinggi Lain; (2) SOP Pelatihan SDM Penjaminan Mutu; (3) SOP Penyusunan Program Peningkatan Mutu; (4) SOP Pemanfaatan Teknologi Informasi dalam SPMI; (5) SOP Pengelolaan PD Dikti; (6) SOP Tracer Study; serta (7) SOP Survey Kepuasan Pemangku Kepentingan."
  ));
  
  // 10.4 Pengelolaan Dokumen
  items.push(h2("10.4 Pengelolaan Dokumen"));
  
  items.push(body(
    "Pengelolaan dokumen SPMI UNITA dilakukan oleh Sekretaris PPM dengan dukungan Administrasi, mengacu pada prinsip-prinsip pengendalian dokumen yang baku. Setiap dokumen SPMI memiliki kode unik yang menunjukkan jenis dokumen, unit pengelola, dan tahun penetapan. Setiap dokumen juga memiliki nomor revisi dan tanggal berlaku, yang dikelola melalui sistem pengendalian dokumen. Dokumen yang telah diperbarui akan menggantikan dokumen lama, dan dokumen lama ditarik kembali untuk menghindari kebingungan di lapangan."
  ));
  
  items.push(body(
    "Distribusi dokumen SPMI dilakukan melalui saluran resmi—baik cetak maupun digital—kepada seluruh unit kerja yang membutuhkan. Setiap unit kerja memiliki penanggung jawab pengelolaan dokumen yang bertanggung jawab atas keutuhan dan kekinian dokumen di unitnya. PPM melakukan audit berkala terhadap pengelolaan dokumen di setiap unit kerja, untuk memastikan bahwa dokumen yang digunakan adalah dokumen terbaru dan kondisi penyimpanannya memadai. Dokumen SPMI juga diunggah ke sistem informasi internal Universitas Tulungagung, sehingga dapat diakses oleh seluruh sivitas akademika sesuai dengan kewenangannya."
  ));
  
  items.push(body(
    "Penghapusan dokumen SPMI yang sudah tidak berlaku dilakukan melalui mekanisme yang diatur dalam SOP Pengendalian Dokumen. Dokumen yang akan dihapus harus didaftarkan terlebih dahulu, mendapat persetujuan dari Ketua PPM, dan kemudian dimusnahkan secara aman—tidak disebarluaskan ke pihak yang tidak berwenang. Daftar dokumen yang dihapus dicatat dalam riwayat dokumen, untuk keperluan audit dan pelacakan di masa mendatang."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// REFERENSI
// ============================================================
function buildReferensi() {
  const items = [];
  
  items.push(h1("REFERENSI"));
  
  items.push(body(
    "Daftar referensi berikut adalah landasan yuridis dan dokumen acuan yang digunakan dalam penyusunan Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Daftar ini telah sepenuhnya diselaraskan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 sebagai landasan regulasi terkini, sehingga seluruh kegiatan penjaminan mutu di Universitas Tulungagung mengacu pada kerangka regulasi yang terbaru dan paling berlaku."
  ));
  
  const referensi = [
    "a. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;",
    "b. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "c. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "d. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "e. Peraturan Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) yang berlaku;",
    "f. Statuta Universitas Tulungagung;",
    "g. Rencana Strategis (Renstra) Universitas Tulungagung.",
  ];
  referensi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Selain referensi formal di atas, penyusunan dokumen ini juga mengacu pada praktik-praktik baik (best practices) di bidang penjaminan mutu pendidikan tinggi, baik dari perguruan tinggi dalam negeri maupun luar negeri, serta literatur-literatur akademik terkait manajemen mutu, tata kelola perguruan tinggi, dan budaya mutu. Setiap rujukan praktik dan literatur tersebut diintegrasikan ke dalam substansi dokumen ini sesuai dengan konteks dan kebutuhan Universitas Tulungagung."
  ));
  
  return items;
}

module.exports = { buildBabIX, buildBabX, buildReferensi };
