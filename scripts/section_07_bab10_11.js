// ============================================================
// BAB X: STRUKTUR ORGANISASI DAN TATA KELOLA PPM
// BAB XI: DAFTAR STANDAR DAN MANUAL SPMI
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB X: STRUKTUR ORGANISASI DAN TATA KELOLA PPM
// ============================================================
function buildBabX() {
  const items = [];
  
  items.push(h1("BAB X\nSTRUKTUR ORGANISASI DAN TATA KELOLA PUSAT PENJAMINAN MUTU"));
  
  items.push(body(
    "Bab ini menjabarkan struktur organisasi dan tata kelola Pusat Penjaminan Mutu (PPM) Universitas Tulungagung yang menjadi pelaksana utama SPMI di tingkat universitas. PPM dibentuk melalui Surat Keputusan Rektor Nomor: A/001.D/KEP/UNITA/I/2025, dengan tugas, wewenang, dan tanggung jawab yang jelas untuk setiap jabatan. Struktur organisasi PPM dirancang agar mampu menjalankan siklus PPEPP secara efektif, didukung oleh Lembaga Penjaminan Mutu (LPM) di tingkat fakultas dan Gugus Penjaminan Mutu (GKM) di tingkat program studi."
  ));
  
  // 10.1 Struktur Organisasi
  items.push(h2("10.1 Struktur Organisasi Pusat Penjaminan Mutu"));
  
  items.push(body(
    "Struktur organisasi PPM Universitas Tulungagung terdiri atas: (a) Ketua PPM; (b) Sekretaris; (c) Kepala Bagian Pengembangan SPMI; (d) Kepala Bagian Audit dan Monevin; (e) Gugus Penjaminan Mutu (GPM) di setiap program studi; dan (f) Administrasi. Struktur ini menggambarkan pembagian kerja yang jelas antara fungsi pengembangan standar (Ka. Bag. Pengembangan SPMI), fungsi evaluasi dan pengendalian (Ka. Bag. Audit dan Monevin), serta fungsi koordinasi dan administrasi (Ketua, Sekretaris, Administrasi). Pembagian fungsi ini memastikan adanya check-and-balance internal dalam pelaksanaan SPMI."
  ));
  
  items.push(body(
    "Selain PPM di tingkat universitas, terdapat pula Lembaga Penjaminan Mutu (LPM) di tingkat fakultas/pascasarjana/program vokasi/program profesi, yang membawahi Gugus Penjaminan Mutu (GKM) di tingkat program studi. LPM bertugas merencanakan, menerapkan, mengendalikan, dan mengembangkan SPMI di fakultas, sedangkan GKM melakukan tugas serupa di tingkat program studi. Hierarki PPM-LPM-GKM ini memastikan bahwa SPMI berjalan di setiap aras organisasi, dengan koordinasi vertikal (PPM-LPM-GKM) dan horizontal (antar-fakultas, antar-program studi) yang efektif."
  ));
  
  // 10.2 Tata Kelola PPM
  items.push(h2("10.2 Tata Kelola Pusat Penjaminan Mutu"));
  
  items.push(body(
    "Setiap jabatan di PPM Universitas Tulungagung memiliki wewenang dan tanggung jawab yang spesifik, sebagaimana dijabarkan pada sub-bagian-sub-bagian berikut. Pembagian wewenang dan tanggung jawab ini mengacu pada prinsip tata kelola perguruan tinggi yang baik sebagaimana diatur dalam Pasal 67 ayat (2) Permen 39 Tahun 2025, dan dirancang agar setiap fungsi saling melengkapi serta saling mengontrol."
  ));
  
  // a) Ketua PPM
  items.push(h3("a. Ketua Pusat Penjaminan Mutu"));
  
  items.push(body("Wewenang Ketua PPM:", { spacing: { after: 60 } }));
  const wewenangKetua = [
    "1. Memberikan masukan kepada Rektor tentang Kebijakan Sistem Penjaminan Mutu Internal di Universitas Tulungagung;",
    "2. Mengajukan Struktur Organisasi Lembaga Penjaminan Mutu kepada Rektor;",
    "3. Menentukan kebijakan dan langkah operasional implementasi Sistem Penjaminan Mutu Internal;",
    "4. Melakukan monitoring dan evaluasi ke semua unit di Universitas Tulungagung terhadap implementasi sistem penjaminan mutu;",
    "5. Menetapkan agenda pengajuan pengakuan mutu/akreditasi/sertifikasi dari lembaga eksternal;",
    "6. Mengajukan rencana anggaran dan belanja kegiatan Lembaga Penjaminan Mutu.",
  ];
  wewenangKetua.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Tanggung Jawab Ketua PPM:", { spacing: { before: 200, after: 60 } }));
  const tanggungJawabKetua = [
    "1. Menjamin terlaksananya Sistem Penjaminan Mutu Internal di Universitas Tulungagung;",
    "2. Menyusun Struktur Organisasi dan Tata Kelola Pusat Penjaminan Mutu;",
    "3. Menyusun rencana program kerja dan anggaran Pusat Penjaminan Mutu;",
    "4. Melakukan pengembangan Sistem Penjaminan Mutu Internal sesuai tuntutan Sistem Penjaminan Mutu Eksternal;",
    "5. Melaporkan pelaksanaan dan capaian Sistem Penjaminan Mutu Internal kepada Rektor;",
    "6. Menyusun agenda pengajuan pengakuan mutu/akreditasi/sertifikasi dari Lembaga eksternal;",
    "7. Bertanggung jawab atas ketersediaan dokumen SPMI;",
    "8. Berkoordinasi dengan seluruh unit Universitas Tulungagung untuk sosialisasi, monitoring, dan evaluasi implementasi sistem penjaminan mutu;",
    "9. Menjamin proses Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan Standar SPMI berjalan;",
    "10. Membuat laporan pelaksanaan SPMI kepada Rektor.",
  ];
  tanggungJawabKetua.forEach(t => items.push(bodyNoIndent(t)));
  
  // b) Sekretaris
  items.push(h3("b. Sekretaris"));
  
  items.push(body("Wewenang Sekretaris:", { spacing: { after: 60 } }));
  const wewenangSekretaris = [
    "1. Merencanakan kebutuhan dokumen mutu untuk unit kerja;",
    "2. Mengatur penyimpanan dokumen mutu;",
    "3. Mengendalikan keluar-masuk dokumen mutu;",
    "4. Mengatur penghapusan dokumen mutu.",
  ];
  wewenangSekretaris.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Tanggung Jawab Sekretaris:", { spacing: { before: 200, after: 60 } }));
  const tanggungJawabSekretaris = [
    "1. Mengelola surat masuk dan surat keluar PPM;",
    "2. Memfasilitasi rapat-rapat PPM;",
    "3. Aktif bekerja sama dengan pihak terkait;",
    "4. Membantu Ketua PPM dalam hal administrasi;",
    "5. Menyusun standar pengelolaan dokumen mutu di PPM;",
    "6. Menyusun SOP pengendalian dokumen mutu;",
    "7. Memfasilitasi kebutuhan dokumen mutu seluruh unit kerja.",
  ];
  tanggungJawabSekretaris.forEach(t => items.push(bodyNoIndent(t)));
  
  // c) Ka. Bag. Pengembangan SPMI
  items.push(h3("c. Kepala Bagian Pengembangan SPMI"));
  
  items.push(body("Wewenang Kepala Bagian Pengembangan SPMI:", { spacing: { after: 60 } }));
  items.push(bodyNoIndent("Menetapkan standar mutu terkait Tridharma perguruan tinggi, yaitu: Standar Pendidikan, Standar Penelitian, Standar Pengabdian kepada Masyarakat, dan standar tambahan lainnya."));
  
  items.push(body("Tanggung Jawab Kepala Bagian Pengembangan SPMI:", { spacing: { before: 200, after: 60 } }));
  const tjPengembangan = [
    "1. Menyusun Standar Pendidikan, Standar Penelitian, Standar Pengabdian kepada Masyarakat, dan Standar lainnya;",
    "2. Melakukan peninjauan secara berkala Standar Pendidikan, Standar Penelitian, Standar Pengabdian kepada Masyarakat, dan Standar lainnya;",
    "3. Menyusun formulir pelaksanaan standar mutu;",
    "4. Melakukan sosialisasi Standar Pendidikan, Standar Penelitian, Standar Pengabdian kepada Masyarakat, dan Standar lainnya;",
    "5. Memastikan seluruh unit terkait melaksanakan Standar Pendidikan, Standar Penelitian, Standar Pengabdian kepada Masyarakat, dan Standar lainnya;",
    "6. Bertanggung jawab kepada Ketua Pusat Penjaminan Mutu.",
  ];
  tjPengembangan.forEach(t => items.push(bodyNoIndent(t)));
  
  // d) Ka. Bag. Audit dan Monevin
  items.push(h3("d. Kepala Bagian Audit dan Monevin"));
  
  items.push(body("Wewenang Kepala Bagian Audit dan Monevin:", { spacing: { after: 60 } }));
  const wewenangMonevin = [
    "1. Menetapkan Instrumen Monitoring dan Evaluasi;",
    "2. Menetapkan jadwal Monitoring dan Evaluasi;",
    "3. Menetapkan metode pengukuran dan analisis hasil Monitoring dan Evaluasi.",
  ];
  wewenangMonevin.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Tanggung Jawab Kepala Bagian Audit dan Monevin:", { spacing: { before: 200, after: 60 } }));
  const tjMonevin = [
    "1. Menyusun instrumen monitoring dan evaluasi;",
    "2. Menyusun jadwal monitoring dan evaluasi;",
    "3. Melakukan analisis ketercapaian standar mutu;",
    "4. Menyusun laporan Monitoring dan Evaluasi;",
    "5. Menyelenggarakan Rapat Tinjauan Manajemen (RTM);",
    "6. Bertanggung jawab kepada Ketua Pusat Penjaminan Mutu.",
  ];
  tjMonevin.forEach(t => items.push(bodyNoIndent(t)));
  
  // e) GPM
  items.push(h3("e. Gugus Penjaminan Mutu (GPM)"));
  
  items.push(body("Wewenang GPM:", { spacing: { after: 60 } }));
  items.push(bodyNoIndent("Mengendalikan dan mengawasi pelaksanaan sesuai SOP."));
  
  items.push(body("Tanggung Jawab GPM:", { spacing: { before: 200, after: 60 } }));
  const tjGpm = [
    "1. Menyusun evaluasi diri unit kerja;",
    "2. Menyusun standar mutu, prosedur kerja (SOP), instruksi kerja, dan formulir;",
    "3. Menyusun standar akademik spesifikasi program studi;",
    "4. Mengevaluasi pemenuhan standar akademik;",
    "5. Melakukan tindakan perbaikan dan peningkatan standar;",
    "6. Melakukan perbaikan proses pembelajaran dan peningkatan standar akademik secara berkesinambungan;",
    "7. Mengikuti rapat-rapat penjaminan mutu;",
    "8. Bekerja sama dengan pihak terkait;",
    "9. Membuat laporan dalam bidangnya.",
  ];
  tjGpm.forEach(t => items.push(bodyNoIndent(t)));
  
  // f) Administrasi
  items.push(h3("f. Administrasi"));
  
  items.push(body("Wewenang Administrasi:", { spacing: { after: 60 } }));
  items.push(bodyNoIndent("Mengupdate data borang akreditasi fakultas."));
  
  items.push(body("Tanggung Jawab Administrasi:", { spacing: { before: 200, after: 60 } }));
  const tjAdmin = [
    "1. Membantu Tim Penjaminan Mutu Universitas dan Fakultas untuk melakukan evaluasi perkuliahan awal dan akhir semester;",
    "2. Menyiapkan dan melengkapi dokumen yang digunakan sebagai data pendukung untuk akreditasi;",
    "3. Merekap dan membuat rapor hasil evaluasi emonev PBM akhir semester;",
    "4. Membantu membuat proposal kegiatan dalam penyelenggaraan kegiatan penjaminan mutu;",
    "5. Membantu penyelesaian SPJ kegiatan yang dilaksanakan Tim Penjaminan Mutu;",
    "6. Membantu melaksanakan tugas administrasi lain dari atasan;",
    "7. Melaksanakan program penjaminan mutu sesuai dengan ketentuan yang diberlakukan oleh Tim Penjaminan Mutu;",
    "8. Melaksanakan tugas kedinasan lain;",
    "9. Melaporkan pelaksanaan tugas.",
  ];
  tjAdmin.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB XI: DAFTAR STANDAR DAN MANUAL SPMI
// ============================================================
function buildBabXI() {
  const items = [];
  
  items.push(h1("BAB XI\nDAFTAR STANDAR DAN MANUAL SPMI"));
  
  items.push(body(
    "Bab ini menjabarkan daftar standar dan manual Sistem Penjaminan Mutu Internal (SPMI) yang dimiliki oleh Universitas Tulungagung. Daftar standar ini disusun berdasarkan struktur SN Dikti sebagaimana diatur dalam Bab II Permen 39 Tahun 2025, ditambah dengan standar tambahan sebagai pelampauan SN Dikti sebagaimana diatur dalam Pasal 64 Permen 39 Tahun 2025. Universitas Tulungagung memiliki total 33 standar—terdiri atas 8 Standar Pendidikan, 8 Standar Penelitian, 8 Standar Pengabdian kepada Masyarakat, dan 9 Standar Pendukung sebagai Indikator Kinerja Tambahan (IKT)."
  ));
  
  // 11.1 Standar Utama SN Dikti
  items.push(h2("11.1 Standar Utama Mengacu SN Dikti"));
  
  items.push(body(
    "Sesuai dengan struktur SN Dikti sebagaimana diatur dalam Pasal 4 dan Pasal 5 Permen 39 Tahun 2025, Universitas Tulungagung menetapkan standar utama yang mencakup tiga komponen: Standar Nasional Pendidikan (8 standar), Standar Penelitian (8 standar), dan Standar Pengabdian kepada Masyarakat (8 standar). Setiap standar disusun dengan kedalaman dan keluasan substansi yang melampaui SN Dikti, sebagai wujud komitmen Universitas Tulungagung untuk tidak hanya memenuhi tetapi melampaui standar nasional."
  ));
  
  items.push(body("Standar Utama Universitas Tulungagung mengacu pada SN Dikti (Permen 39 Tahun 2025):"));
  
  const standarUtama = [
    ["A. Standar Pendidikan", [
      "1. Standar Kompetensi Lulusan (Pasal 6-10)",
      "2. Standar Proses Pembelajaran (Pasal 11-24)",
      "3. Standar Penilaian (Pasal 25)",
      "4. Standar Pengelolaan (Pasal 26-30)",
      "5. Standar Isi (Pasal 31-39)",
      "6. Standar Dosen dan Tenaga Kependidikan (Pasal 40-45)",
      "7. Standar Sarana dan Prasarana (Pasal 46-47)",
      "8. Standar Pembiayaan (Pasal 48-51)",
    ]],
    ["B. Standar Penelitian", [
      "1. Standar Luaran Penelitian (Pasal 52-53)",
      "2. Standar Proses Penelitian (Pasal 54-55)",
      "3. Standar Masukan Penelitian (Pasal 56)",
      "4. Standar Hasil Penelitian",
      "5. Standar Publikasi Ilmiah",
      "6. Standar Paten dan Hak Kekayaan Intelektual",
      "7. Standar Diseminasi Hasil Penelitian",
      "8. Standar Kolaborasi Penelitian",
    ]],
    ["C. Standar Pengabdian kepada Masyarakat", [
      "1. Standar Luaran PkM (Pasal 57-58)",
      "2. Standar Proses PkM (Pasal 59-61)",
      "3. Standar Masukan PkM (Pasal 62-63)",
      "4. Standar Hasil PkM",
      "5. Standar Publikasi PkM",
      "6. Standar Produk dan Jasa PkM",
      "7. Standar Diseminasi PkM",
      "8. Standar Kolaborasi PkM",
    ]],
  ];
  
  standarUtama.forEach(([kategori, list]) => {
    items.push(new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 200, after: 60, line: 312 },
      children: [new TextRun({ text: kategori, bold: true, size: 24, font: FONT })],
    }));
    list.forEach(t => items.push(bodyNoIndent(t, { left: 1080, hanging: 360 })));
  });
  
  // 11.2 Standar Tambahan
  items.push(h2("11.2 Standar Tambahan sebagai Pelampauan SN Dikti"));
  
  items.push(body(
    "Sebagai wujud pelampauan SN Dikti sebagaimana diatur dalam Pasal 64 ayat (2) Permen 39 Tahun 2025, Universitas Tulungagung menetapkan sembilan standar tambahan yang mencakup aspek-aspek nonakademik dan aspek akademik tambahan. Sembilan standar tambahan tersebut menjadi Indikator Kinerja Tambahan (IKT) yang memperkuat positioning Universitas Tulungagung sebagai perguruan tinggi yang tidak hanya memenuhi standar nasional, tetapi juga memiliki keunggulan komparatif di bidang-bidang strategis. Sembilan standar tambahan tersebut adalah sebagai berikut:"
  ));
  
  const standarTambahan = [
    "1. Standar Visi, Misi, Tujuan, dan Strategi;",
    "2. Standar Tata Pamong dan Tata Kelola;",
    "3. Standar Mahasiswa;",
    "4. Standar Sumber Daya Manusia;",
    "5. Standar Keuangan, Sarana, dan Prasarana;",
    "6. Standar Kerjasama;",
    "7. Standar Merdeka Belajar Kampus Merdeka (MBKM);",
    "8. Standar Luaran dan Capaian Tridharma;",
    "9. Standar Pelayanan Kepada Mahasiswa.",
  ];
  standarTambahan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Sembilan standar tambahan ini disusun dengan kedalaman substansi yang melampaui SN Dikti, dan ditetapkan oleh Rektor setelah mendapat pertimbangan Senat Universitas dan persetujuan badan penyelenggara, sebagaimana diatur dalam Pasal 64 ayat (3) huruf b Permen 39 Tahun 2025. Setiap standar tambahan dikelola melalui siklus PPEPP yang sama dengan standar utama, dengan penanggung jawab yang jelas di tingkat PPM, LPM, atau GKM sesuai dengan cakupan standar."
  ));
  
  // Tabel ringkasan 33 standar
  items.push(body(
    "Tabel berikut merangkum total 33 standar SPMI Universitas Tulungagung:"
  ));
  
  const totalStandarTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 8 }),
          cell("Kategori Standar", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 32 }),
          cell("Jumlah", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 15 }),
          cell("Rujukan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("1", { align: AlignmentType.CENTER, width: 8 }),
          cell("Standar Pendidikan", { align: AlignmentType.LEFT, width: 32 }),
          cell("8", { align: AlignmentType.CENTER, bold: true, width: 15 }),
          cell("Pasal 5-51 Permen 39/2025 (SN Dikti)", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("2", { align: AlignmentType.CENTER, width: 8 }),
          cell("Standar Penelitian", { align: AlignmentType.LEFT, width: 32 }),
          cell("8", { align: AlignmentType.CENTER, bold: true, width: 15 }),
          cell("Pasal 52-56 Permen 39/2025 (SN Dikti)", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("3", { align: AlignmentType.CENTER, width: 8 }),
          cell("Standar Pengabdian kepada Masyarakat", { align: AlignmentType.LEFT, width: 32 }),
          cell("8", { align: AlignmentType.CENTER, bold: true, width: 15 }),
          cell("Pasal 57-63 Permen 39/2025 (SN Dikti)", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("4", { align: AlignmentType.CENTER, width: 8 }),
          cell("Standar Tambahan (IKT)", { align: AlignmentType.LEFT, bold: true, width: 32 }),
          cell("9", { align: AlignmentType.CENTER, bold: true, width: 15 }),
          cell("Pasal 64 Permen 39/2025 (Pelampauan SN Dikti)", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 8, fill: "F2F2F2" }),
          cell("TOTAL", { align: AlignmentType.RIGHT, bold: true, width: 32, fill: "F2F2F2" }),
          cell("33", { align: AlignmentType.CENTER, bold: true, width: 15, fill: "F2F2F2" }),
          cell("", { width: 45, fill: "F2F2F2" }),
        ],
      }),
    ],
  });
  items.push(totalStandarTable);
  
  // 11.3 Manual Mutu
  items.push(h2("11.3 Manual Mutu Universitas Tulungagung"));
  
  items.push(body(
    "Manual Mutu Universitas Tulungagung berisi pedoman teknis tentang tahapan Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (PPEPP) setiap standar mutu Universitas Tulungagung. Manual Mutu dibagi menjadi beberapa sub-dokumen pada setiap masing-masing program studi, sehingga Manual Mutu Universitas Tulungagung merupakan kompilasi berbagai kegiatan manual mutu dari masing-masing program studi. Selain itu, setiap program studi juga memiliki manual prosedur yang disusun oleh setiap Gugus Penjaminan Mutu (GKM)."
  ));
  
  items.push(body(
    "Manual Mutu menjadi referensi operasional bagi seluruh pelaksana standar, mulai dari dosen, tenaga kependidikan, hingga pimpinan unit kerja. Manual Mutu memuat: (a) tujuan setiap standar; (b) ruang lingkup penerapan; (c) definisi istilah terkait; (d) rujukan regulasi; (e) prosedur pelaksanaan tahap PPEPP; (f) formulir yang digunakan; (g) penanggung jawab; dan (h) jadwal pelaksanaan. Dengan struktur yang konsisten, Manual Mutu memastikan bahwa setiap standar dikelola dengan cara yang seragam di seluruh unit kerja, meskipun konten substansinya berbeda-beda."
  ));
  
  // 11.4 Formulir Mutu
  items.push(h2("11.4 Formulir Mutu"));
  
  items.push(body(
    "Formulir Mutu adalah dokumen tertulis yang berfungsi untuk mencatat, merekam hal atau informasi atau kegiatan tertentu sebagai bagian yang tak terpisahkan dari standar mutu, manual mutu atau prosedur mutu. Formulir Mutu dirancang agar pelaksanaan setiap standar terdokumentasi secara sistematis, dan menjadi bukti objektif bagi auditor internal maupun eksternal. Setiap formulir memiliki kode unik, nomor revisi, dan tanggal berlaku, yang dikelola melalui sistem pengendalian dokumen di PPM."
  ));
  
  // 11.5 SOP
  items.push(h2("11.5 Standar Operasional Prosedur (SOP)"));
  
  items.push(body(
    "Standar Operasional Prosedur (SOP) adalah dokumen yang berisi prosedur sebagai pedoman pelaksanaan isi standar yang dijalankan oleh pihak pelaksana isi standar. SOP dirancang agar setiap aktivitas yang berkaitan dengan standar mutu dilaksanakan secara konsisten, terulang dengan kualitas yang sama, dan dapat dilakukan oleh siapa pun yang berkompeten. Universitas Tulungagung memiliki SOP untuk setiap aktivitas strategis—mulai dari penyusunan kurikulum, pelaksanaan perkuliahan, penilaian, pengelolaan laboratorium, penelitian, PkM, hingga pengelolaan dokumen SPMI. SOP ditinjau secara berkala untuk memastikan relevansinya dengan perkembangan regulasi dan praktik terbaik."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabX, buildBabXI };
