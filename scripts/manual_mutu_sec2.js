// ============================================================
// BAB III, IV, V
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./manual_mutu_core.js");

// ============================================================
// BAB III SISTEM PENJAMINAN MUTU INTERNAL UNITA
// ============================================================
function buildBabIII() {
  const items = [];
  
  items.push(h1("BAB III\nSISTEM PENJAMINAN MUTU INTERNAL UNIVERSITAS TULUNGAGUNG"));
  
  // 3.1 Kebijakan SPMI
  items.push(h2("3.1 Kebijakan Sistem Penjaminan Mutu Internal Universitas Tulungagung"));
  
  items.push(body(
    "Universitas Tulungagung telah lama menerapkan Sistem Penjaminan Mutu (SPM) secara internal. Pada tahun 2011, UNITA menggunakan Sistem Penjaminan Mutu dengan nama Sistem Penjaminan Mutu dengan standar mutu akademik Direktorat Jenderal Pendidikan Tinggi (Dikti). Mulai tahun 2011, sistem penjaminan mutu di UNITA menggunakan nama SPMI dengan mengacu pada standar akreditasi nasional dari BAN-PT untuk AIPT dan APS. Pada tahun 2014, SPMI di UNITA ditingkatkan untuk memenuhi Standar Mutu UNITA yang mengadopsi dari Standar Nasional Pendidikan Tinggi, standar akreditasi nasional dari BAN-PT untuk APT dan APS dengan 7 Kriteria Standar Akreditasi dari turunan Tridharma (Pendidikan, Penelitian, dan PkM)."
  ));
  
  items.push(body(
    "Pada tahun 2025, sejalan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, Universitas Tulungagung melakukan penyesuaian menyeluruh terhadap dokumen SPMI—termasuk Kebijakan Mutu, Manual Mutu, Standar Mutu, dan Formulir Mutu—agar selaras dengan kerangka regulasi terbaru. Penyesuaian ini mencakup restrukturisasi sembilan Standar Nasional Pendidikan Tinggi (SN Dikti) sesuai Pasal 4 dan Pasal 5 Permen 39 Tahun 2025, penerapan prinsip triangulasi data berbasis PD Dikti sebagaimana diatur dalam Pasal 66, serta penerapan tata kelola perguruan tinggi yang baik sebagaimana diatur dalam Pasal 67 ayat (2)."
  ));
  
  items.push(body(
    "UNITA melakukan penjaminan mutu pendidikan tinggi sebagai pertanggungjawaban kepada pemangku kepentingan untuk mengembangkan mutu pendidikan UNITA secara berkelanjutan. Dengan demikian, mutu penyelenggaraan pendidikan di UNITA diakui tidak saja secara internal, namun juga secara eksternal oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT), Lembaga Akreditasi Mandiri (LAM), dan Lembaga Akreditasi dan Sertifikasi Internasional. Pada penerapan SPMI, UNITA memastikan bahwa budaya mutu dipahami dan dilaksanakan semua pihak, serta dikendalikan melalui mekanisme yang sistematis. Dengan SPMI ini, UNITA akan mampu menetapkan dan mewujudkan visinya melalui pelaksanaan misinya, mampu memenuhi kebutuhan dan memuaskan pemangku kepentingan—yaitu kebutuhan masyarakat, dunia kerja, dan profesional."
  ));
  
  items.push(body(
    "Kebijakan Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung disusun dan ditetapkan dengan tujuan sebagai berikut: (1) menggariskan kegiatan utama (core business) yaitu Tridharma pendidikan tinggi, baik yang terkait langsung ataupun tidak langsung dengan layanan pendidikan di UNITA, baik dalam perencanaan, pelaksanaan, evaluasi ataupun tindakan perbaikan untuk menjamin adanya perbaikan berkelanjutan dalam memenuhi persyaratan pelanggan; (2) menjelaskan hubungan berbagai aktivitas yang terkait dalam proses di atas; (3) mencerminkan komitmen UNITA dalam peningkatan mutu secara berkelanjutan dalam bentuk tertulis, sehingga dapat dipahami oleh semua pihak yang terlibat dalam proses layanan Tridharma dan penunjangnya di UNITA; serta (4) menggariskan perencanaan dan implementasi SPMI yang terintegrasi di unit-unit kerja di lingkungan UNITA."
  ));
  
  items.push(body(
    "Komitmen penerapan SPMI yang efektif mengacu pada standar mutu berbasis risiko dengan daya saing nasional dan internasional untuk menciptakan budaya dan peningkatan mutu berkelanjutan dengan Siklus PPEPP. Sesuai Pasal 67 ayat (1) Permen 39 Tahun 2025, perguruan tinggi wajib melaksanakan penjaminan mutu internal dengan mengembangkan SPMI. Universitas Tulungagung memenuhi kewajiban ini melalui pelaksanaan SPMI yang terstruktur, terdokumentasi, dan berbasis siklus PPEPP sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025."
  ));
  
  // 3.2 Landasan Hukum
  items.push(h2("3.2 Landasan Hukum Manajemen Mutu UNITA"));
  
  items.push(body(
    "Landasan hukum manajemen mutu Universitas Tulungagung Tahun 2025 telah sepenuhnya diselaraskan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, sehingga tidak lagi merujuk pada regulasi terdahulu yang telah digantikan. Landasan hukum tersebut adalah sebagai berikut:"
  ));
  
  const landasan = [
    "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;",
    "2. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "3. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "4. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "5. Peraturan Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) yang berlaku;",
    "6. Statuta Universitas Tulungagung;",
    "7. Rencana Strategis (Renstra) Universitas Tulungagung.",
  ];
  landasan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Seluruh landasan hukum tersebut menjadi pijakan yuridis bagi setiap kebijakan, standar, prosedur, dan kegiatan yang dilaksanakan dalam rangka penjaminan mutu internal di Universitas Tulungagung. Setiap perubahan regulasi yang berlaku akan diakomodasi melalui peninjauan berkala dokumen SPMI, sehingga selalu selaras dengan perkembangan kebijakan pemerintah di bidang penjaminan mutu pendidikan tinggi."
  ));
  
  // 3.3 Strategi dan Implementasi
  items.push(h2("3.3 Strategi dan Implementasi Manajemen Mutu UNITA"));
  
  items.push(body(
    "Untuk menjalankan SPMI, UNITA menerapkan langkah-langkah yang disebut 'siklus penjaminan mutu' yaitu PPEPP, singkatan dari Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan, sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025. Siklus PPEPP ini menjadi kerangka operasional utama bagi pelaksanaan SPMI di Universitas Tulungagung, dan dijalankan secara berkelanjutan dengan periode siklus satu tahun atau satu kalender akademik, dan diikuti oleh siklus yang sama pada tahun-tahun berikutnya."
  ));
  
  items.push(body(
    "Proses Pelaksanaan PPEPP mencakup: (a) penyusunan organisasi penjaminan mutu; (b) penyusunan sistem (kebijakan SPMI, standar SPMI, manual SPMI, SOP, Instruksi Kerja, formulir); (c) sistem dijalankan melalui sosialisasi dan menjadi acuan kerja; (d) pelaksanaan Audit Mutu Internal (AMI) sebagai satu siklus penjaminan mutu; dan (e) tindak lanjut hasil audit. Setiap tahapan didokumentasikan secara sistematis, dan hasilnya menjadi basis bagi perbaikan berkelanjutan."
  ));
  
  items.push(body(
    "Implementasi SPMI UNITA memerlukan panduan atau petunjuk praktis berupa Manual SPMI sebagai pedoman bagaimana Standar SPMI ditetapkan, dilaksanakan/dipenuhi, dikendalikan, dan dikembangkan/ditingkatkan mutunya secara berkelanjutan oleh seluruh penyelenggara perguruan tinggi di UNITA, yang dilengkapi dengan Standard Operating Procedure (SOP) dan Formulir. Implementasi SPMI tersebut melalui suatu tahapan penetapan, pelaksanaan/pemenuhan, pengendalian, dan pengembangan/peningkatan yang berkelanjutan, dengan menggunakan model PDCA (Plan, Do, Check, Action) yang mengacu pada Visi, Misi, dan Tujuan UNITA, Renstra UNITA, serta Kebijakan SPMI UNITA dalam waktu satu siklus—yaitu satu tahun atau satu kalender akademik—dan diikuti oleh siklus yang sama pada tahun-tahun berikutnya."
  ));
  
  // 3.4 Lingkup Manajemen Mutu
  items.push(h2("3.4 Lingkup Manajemen Mutu UNITA"));
  
  items.push(body(
    "Kebijakan SPMI UNITA disusun dan ditetapkan untuk ruang lingkup penyediaan jasa layanan Tridharma perguruan tinggi yang mencakup pendidikan vokasi, sarjana, dan pascasarjana, penelitian, dan pengabdian kepada masyarakat, dengan didukung layanan penunjangnya. Penyelenggara layanan Tridharma perguruan tinggi di UNITA terdiri dari fakultas, departemen, program studi, dan unit pendukung (supporting units). Supporting units adalah unit selain fakultas dan program studi yang tercantum dalam OTK UNITA, terdiri dari direktorat, lembaga, unit pelaksana teknis (UPT), divisi, dan Satuan Pengawas Internal (SPI)."
  ));
  
  items.push(body(
    "Sesuai dengan Pasal 65 ayat (2) Permen 39 Tahun 2025, SPM Dikti mencakup bidang akademik dan bidang nonakademik. Bidang akademik berkaitan dengan Tridharma, sedangkan bidang nonakademik meliputi organisasi, keuangan, kemahasiswaan, ketenagaan, dan sarana prasarana. Universitas Tulungagung menerapkan SPMI pada kedua bidang tersebut secara komprehensif, sehingga tidak ada aspek penyelenggaraan yang berada di luar jangkauan SPMI. Setiap unit kerja, baik akademik maupun nonakademik, memiliki tanggung jawab spesifik dalam pelaksanaan SPMI, dengan dukungan PPM, LPM, dan GKM."
  ));
  
  // 3.5 Manajemen Mutu Berbasis Risiko
  items.push(h2("3.5 Manajemen Mutu Berbasis Risiko di UNITA"));
  
  items.push(body(
    "Salah satu tujuan SPMI UNITA adalah pencapaian visi-misi melalui pemenuhan standar mutu dengan cara perbaikan berkelanjutan (continuous improvement), menggunakan manajemen mutu berbasis risiko. Yang dimaksud manajemen mutu berbasis risiko adalah penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan (PPEPP) Standar Mutu Berbasis Risiko. Pendekatan ini mengintegrasikan analisis risiko ke dalam setiap tahapan PPEPP, sehingga setiap keputusan dan tindakan mempertimbangkan potensi risiko dan strategi mitigasinya."
  ));
  
  items.push(body(
    "Implementasi manajemen mutu berbasis risiko di UNITA melibatkan empat jenis risiko utama—risiko kebijakan, risiko kepatuhan, risiko operasional, dan risiko reputasi—yang dijabarkan secara rinci dalam Bab II. Setiap unit kerja bertanggung jawab untuk mengidentifikasi, menganalisis, dan memitigasi risiko yang relevan dengan tugas dan fungsinya, dengan dukungan PPM sebagai koordinator. Hasil analisis risiko dan strategi mitigasi didokumentasikan dan dipantau secara berkala melalui mekanisme AMI dan RTM."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB IV MANUAL PENETAPAN MUTU
// ============================================================
function buildBabIV() {
  const items = [];
  
  items.push(h1("BAB IV\nMANUAL PENETAPAN MUTU"));
  
  // 4.1 Struktur Organisasi
  items.push(h2("4.1 Struktur Organisasi Penjaminan Mutu UNITA"));
  
  items.push(body(
    "Secara umum, organisasi penjaminan mutu di UNITA adalah unit kerja fungsional yang berada langsung di bawah naungan Rektor Universitas Tulungagung, sehingga dalam menjalankan tugas dan fungsi (tusi) selalu melibatkan pejabat struktural. Antara unit penjaminan mutu di universitas—yaitu Pusat Penjaminan Mutu (PPM)—dan unit penjaminan mutu di fakultas/program—yaitu Gugus Penjaminan Mutu (GPM)—terdapat hubungan koordinasi, dan masing-masing bertanggung jawab terhadap pimpinan unit kerja. Selain itu, di tingkat fakultas juga terdapat Lembaga Penjaminan Mutu (LPM) yang berfungsi sebagai koordinator antara PPM universitas dengan GKM program studi."
  ));
  
  items.push(body(
    "Untuk mencapai keberhasilan misi, PPM UNITA mengembangkan struktur organisasi yang terdiri dari Ketua, Sekretaris, Staff Administrasi, Kepala Bagian Pengembangan SPMI, Kepala Bagian Audit dan Monevin, serta Gugus Penjaminan Mutu Lembaga dan Fakultas pada masing-masing Program Studi. Susunan organisasi PPM ini ditetapkan berdasarkan Surat Keputusan Rektor Universitas Tulungagung Nomor A/001.D/KEP/UNITA/I/2025 tentang Pengangkatan Pejabat Penjaminan Mutu Universitas Tulungagung. Setiap jabatan memiliki tugas, wewenang, dan tanggung jawab yang jelas, sebagaimana telah diuraikan secara rinci dalam dokumen Kebijakan Mutu SPMI Universitas Tulungagung Tahun 2025."
  ));
  
  // 4.2 Dokumen SPMI
  items.push(h2("4.2 Dokumen SPMI Universitas Tulungagung"));
  
  items.push(body(
    "Sistem Dokumentasi SPMI UNITA mengacu pada sembilan standar SN Dikti sebagaimana diatur dalam Pasal 4 dan Pasal 5 Permen 39 Tahun 2025, yang tertuang dalam 4 Dokumen Mutu Utama dan terintegrasi dengan dokumen induk Universitas. Dokumen induk Universitas menjadi acuan dalam penyusunan dokumen mutu. Sembilan standar SN Dikti tersebut terdiri atas delapan Standar Pendidikan, delapan Standar Penelitian, delapan Standar Pengabdian kepada Masyarakat, dan sembilan Standar Tambahan sebagai pelampauan SN Dikti sesuai Pasal 64 Permen 39 Tahun 2025."
  ));
  
  items.push(body(
    "Tabel berikut menunjukkan daftar jenis dokumen SPMI UNITA dan strukturnya pada masing-masing aras—Universitas, Fakultas, dan Program Studi:"
  ));
  
  const dokumenTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 5 }),
          cell("Jenis Dokumen Mutu", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 50 }),
          cell("Universitas", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 15 }),
          cell("Fakultas", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 15 }),
          cell("Prodi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 15 }),
        ],
      }),
      ...[
        ["1", "Visi, Misi, Tujuan, dan Sasaran Organisasi (Dokumen Induk)"],
        ["2", "Rencana Induk Pengembangan (RIP)"],
        ["3", "Statuta"],
        ["4", "Pedoman Pendidikan"],
        ["5", "Renstra dan Renop"],
        ["6", "Dokumen Anggaran, Penerimaan dan Belanja"],
        ["7", "Struktur Organisasi dan Tata Kerja (SOTK)"],
        ["8", "Pernyataan dan Kebijakan Mutu"],
        ["9", "Standar Mutu"],
        ["10", "Manual Mutu"],
        ["11", "Manual Prosedur"],
        ["12", "Formulir Mutu"],
        ["13", "Dokumen Kurikulum"],
      ].map(([no, dok, u, f, p]) => {
        const dokumenData = {
          "1": [1,1,1], "2": [1,0,0], "3": [1,0,0], "4": [1,1,0], "5": [1,1,1],
          "6": [1,1,0], "7": [1,1,0], "8": [1,1,0], "9": [1,1,0], "10": [1,1,0],
          "11": [0,1,0], "12": [1,0,0], "13": [1,1,1]
        };
        const [u1, f1, p1] = dokumenData[no] || [0,0,0];
        return new TableRow({
          cantSplit: true,
          children: [
            cell(no, { align: AlignmentType.CENTER, width: 5 }),
            cell(dok, { align: AlignmentType.LEFT, size: 22, width: 50 }),
            cell(u1 ? "\u221a" : "-", { align: AlignmentType.CENTER, width: 15 }),
            cell(f1 ? "\u221a" : "-", { align: AlignmentType.CENTER, width: 15 }),
            cell(p1 ? "\u221a" : "-", { align: AlignmentType.CENTER, width: 15 }),
          ],
        });
      }),
    ],
  });
  items.push(dokumenTable);
  
  // 4.3 Tahapan Penetapan
  items.push(h2("4.3 Tahapan Penetapan Standar Mutu"));
  
  items.push(body(
    "Penetapan Standar Mutu dilakukan melalui langkah-langkah sistematis yang mengacu pada struktur SN Dikti sebagaimana diatur dalam Permen 39 Tahun 2025. Universitas Tulungagung menetapkan standar mutu dengan struktur sebagai berikut: (a) tiga Standar Utama sesuai SN Dikti—yaitu Standar Pendidikan, Standar Penelitian, dan Standar Pengabdian kepada Masyarakat—yang masing-masing memiliki sub-standar luaran, proses, dan masukan; serta (b) sembilan Standar Tambahan sebagai pelampauan SN Dikti sesuai Pasal 64 Permen 39 Tahun 2025."
  ));
  
  items.push(h3("a. Standar Utama Sesuai SN Dikti (Permen 39 Tahun 2025)"));
  
  items.push(bodyNoIndent("Standar Pendidikan (8 standar):"));
  const stdPendidikan = [
    "1. Standar Kompetensi Lulusan (Pasal 6-10) — standar luaran pendidikan;",
    "2. Standar Proses Pembelajaran (Pasal 11-24) — bagian dari standar proses pendidikan;",
    "3. Standar Penilaian (Pasal 25) — bagian dari standar proses pendidikan;",
    "4. Standar Pengelolaan (Pasal 26-30) — bagian dari standar proses pendidikan;",
    "5. Standar Isi (Pasal 31-39) — bagian dari standar masukan pendidikan;",
    "6. Standar Dosen dan Tenaga Kependidikan (Pasal 40-45) — bagian dari standar masukan;",
    "7. Standar Sarana dan Prasarana (Pasal 46-47) — bagian dari standar masukan;",
    "8. Standar Pembiayaan (Pasal 48-51) — bagian dari standar masukan.",
  ];
  stdPendidikan.forEach(t => items.push(bodyNoIndent(t, { left: 1080, hanging: 360 })));
  
  items.push(bodyNoIndent("Standar Penelitian (8 standar — Pasal 52-56):", { spacing: { before: 120 } }));
  items.push(bodyNoIndent("Mencakup Standar Luaran, Proses, Masukan Penelitian, ditambah standar operasional untuk Hasil, Publikasi, Paten/HKI, Diseminasi, dan Kolaborasi Penelitian.", { left: 1080, hanging: 360 }));
  
  items.push(bodyNoIndent("Standar Pengabdian kepada Masyarakat (8 standar — Pasal 57-63):", { spacing: { before: 120 } }));
  items.push(bodyNoIndent("Mencakup Standar Luaran, Proses, Masukan PkM, ditambah standar operasional untuk Hasil, Publikasi, Produk/Jasa, Diseminasi, dan Kolaborasi PkM.", { left: 1080, hanging: 360 }));
  
  items.push(h3("b. Standar Tambahan sebagai Pelampauan SN Dikti (9 standar)"));
  
  const stdTambahan = [
    "1. Standar Visi, Misi, Tujuan, dan Strategi;",
    "2. Standar Tata Pamong dan Tata Kelola;",
    "3. Standar Mahasiswa;",
    "4. Standar Sumber Daya Manusia;",
    "5. Standar Keuangan, Sarana, dan Prasarana;",
    "6. Standar Luaran dan Capaian Tridharma;",
    "7. Standar Merdeka Belajar Kampus Merdeka (MBKM);",
    "8. Standar Kerjasama;",
    "9. Standar Pelayanan Kepada Mahasiswa.",
  ];
  stdTambahan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Penetapan standar dilakukan melalui mekanisme berikut: (a) kriteria, indikator, target, dan cara pengukuran diatur berdasarkan struktur SN Dikti sebagaimana dijabarkan di atas, dengan kedalaman dan keluasan substansi yang melampaui SN Dikti; (b) kriteria, indikator, target, dan cara pengukuran dikaitkan dengan proses bisnis PPEPP yang dilakukan oleh semua unit terkait yang terdapat pada SOTK UNITA; (c) semua unit yang terkait melakukan analisis potensi risiko yang mungkin terjadi dan mitigasi/cara penanganan risiko tersebut di setiap kriteria, di mana risiko bisa dibagi menjadi risiko kebijakan, risiko kepatuhan, risiko operasional, dan risiko reputasi; (d) pengumpulan dokumen dan data dukung untuk pelengkap semua kriteria; (e) draft Standar Mutu UNITA diserahkan ke Senat Akademik Universitas untuk direview; dan (f) draft Standar Mutu UNITA yang sudah direview diajukan ke Rektor untuk disahkan menjadi Surat Keputusan Rektor, setelah mendapat pertimbangan Senat dan persetujuan badan penyelenggara sesuai Pasal 64 ayat (3) Permen 39 Tahun 2025."
  ));
  
  // 4.4 Indikator Kinerja
  items.push(h2("4.4 Indikator Kinerja Penjaminan Mutu UNITA"));
  
  items.push(body(
    "Indikator Kinerja Penjaminan Mutu UNITA didasarkan pada hasil Audit Mutu Internal (AMI) pada semua ruang lingkup AMI dan Hasil Rapat Tinjauan Manajemen (RTM) UNITA, yang nantinya akan digunakan sebagai proses peningkatan mutu—seperti penetapan standar baru, indikator kinerja baru, strategi, dan program prioritas dan unggulan UNITA. Indikator Kinerja Utama (IKU) Universitas Tulungagung mencakup delapan aspek utama yang selaras dengan kebijakan Kementerian Pendidikan Tinggi, Sains, dan Teknologi, sebagaimana telah dijabarkan dalam dokumen Kebijakan Mutu SPMI Universitas Tulungagung Tahun 2025."
  ));
  
  items.push(body(
    "Capaian IKU dipantau secara berkala oleh PPM, dan dilaporkan kepada Rektor melalui mekanisme AMI dan RTM. Capaian IKU juga dipublikasikan kepada masyarakat melalui situs web resmi Universitas Tulungagung, sebagai bentuk akuntabilitas publik. Apabila terdapat IKU yang tidak tercapai sesuai target, Universitas Tulungagung melakukan analisis akar masalah dan menetapkan tindakan koreksi melalui mekanisme pengendalian."
  ));
  
  // 4.5 Potensi dan Mitigasi Risiko
  items.push(h2("4.5 Potensi dan Mitigasi Risiko Tahapan Penetapan"));
  
  items.push(body(
    "Potensi risiko yang dapat terjadi pada tahapan penetapan dalam proses PPM antara lain:"
  ));
  
  const risikoPenetapan = [
    "a. Risiko Kebijakan: kebijakan SPMI yang ditetapkan tidak selaras dengan Permen 39 Tahun 2025 atau kebijakan pemerintah lainnya;",
    "b. Risiko Kepatuhan: unit kerja tidak mematuhi standar yang telah ditetapkan;",
    "c. Risiko Operasional: proses penyusunan standar tidak berjalan sesuai jadwal atau tidak melibatkan pemangku kepentingan yang relevan;",
    "d. Risiko Reputasi: standar yang ditetapkan tidak diakui oleh BAN-PT/LAM, sehingga berdampak pada status akreditasi.",
  ];
  risikoPenetapan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Potensi risiko di atas mungkin terjadi karena tahapan penetapan berkaitan dengan dokumen Induk (SOTK PPM, Standar Mutu UNITA, dan Renstra) dan dokumen operasional (Manual Mutu PPM, SOP, IK, Formulir, dan Program Kerja PPM) sebagai acuan/prosedur untuk tahapan proses bisnis selanjutnya. Mitigasi risiko yang dapat dilakukan pada tahapan penetapan dalam proses pelaksanaan SPMI antara lain:"
  ));
  
  const mitigasiPenetapan = [
    "a. Penyediaan dokumen induk dan dokumen operasional yang lengkap dan terkini;",
    "b. Koordinasi internal dengan unit terkait dengan PPM secara berkala;",
    "c. Sosialisasi dokumen induk dan dokumen operasional kepada seluruh pemangku kepentingan;",
    "d. Penguatan SPMI melalui pelatihan, workshop, dan benchmarking;",
    "e. Sosialisasi kebijakan dan pedoman selain dokumen induk dan operasional PPM (contoh: Peraturan Rektor, Peraturan Menteri, Peraturan BAN-PT, dll);",
    "f. Pelatihan untuk peningkatan kualitas SDM di PPM, LPM, dan GKM;",
    "g. Koordinasi eksternal (contoh: benchmarking PPM ke universitas lain, BAN-PT, LAM).",
  ];
  mitigasiPenetapan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB V MANUAL PELAKSANAAN MUTU
// ============================================================
function buildBabV() {
  const items = [];
  
  items.push(h1("BAB V\nMANUAL PELAKSANAAN MUTU"));
  
  // 5.1 Definisi
  items.push(h2("5.1 Definisi Manual Pelaksanaan Standar Mutu UNITA"));
  
  items.push(body(
    "Manual Pelaksanaan Standar Mutu UNITA merupakan dokumen yang berisi tentang teknis pelaksanaan dari Penetapan Standar Mutu secara detail, menggambarkan bagaimana penetapan Standar Mutu dapat dilaksanakan, untuk menjadi pedoman bagi semua unit kerja secara operasional. Manual ini mencakup pelaksanaan mulai dari Visi, Misi, Tujuan, dan Sasaran UNITA hingga penyelenggaraan tata kelola, pendidikan, penelitian, pengabdian, dan pendukung untuk mencapai luaran atau output yang bermutu. Manual Pelaksanaan menjadi jembatan antara dokumen normatif (Kebijakan dan Standar) dengan praktik operasional di lapangan."
  ));
  
  // 5.2 Tujuan
  items.push(h2("5.2 Tujuan Pelaksanaan Standar Mutu UNITA"));
  
  items.push(body(
    "Pelaksanaan standar mutu bertujuan untuk memastikan kegiatan-kegiatan yang ada di unit kerja dilaksanakan sesuai dengan perencanaan penetapan yang telah dirumuskan. Secara lebih detail, tahapan pelaksanaan standar mutu juga bertujuan untuk menyelenggarakan manajemen tata kelola organisasi, pendidikan, penelitian, pengabdian, dan pendukung yang relevan sesuai dengan Standar Mutu UNITA. Pelaksanaan standar mutu yang konsisten dan terdokumentasi menjadi prasyarat bagi tercapainya pemenuhan SN Dikti sebagaimana diatur dalam Permen 39 Tahun 2025, serta menjadi basis bagi evaluasi melalui AMI dan RTM."
  ));
  
  // 5.3 Lingkup
  items.push(h2("5.3 Lingkup Pelaksanaan Standar Mutu UNITA"));
  
  items.push(body("Adapun ruang lingkup pelaksanaan Standar Mutu adalah:"));
  
  const lingkup = [
    "1. Pelaksanaan Kontrak Kinerja, Perjanjian Kerja, dan Program Kerja;",
    "2. Pelaksanaan kelengkapan data dan informasi pada SIAKAD dan PD Dikti;",
    "3. Pelaksanaan Peraturan Rektor yang berkaitan dengan tata pamong, tata kelola, dan kerjasama;",
    "4. Pelaksanaan Rencana Induk Pengembangan (RIP);",
    "5. Pelaksanaan Rencana Strategis (Renstra);",
    "6. Pelaksanaan Rencana Anggaran dan Belanja;",
    "7. Pelaksanaan Dokumen Kebijakan Penjaminan Mutu;",
    "8. Pelaksanaan Peraturan Rektor mengenai OTK dan kode etik;",
    "9. Pelaksanaan aspek pengelolaan pendidikan, penelitian, pengabdian, dan kerjasama;",
    "10. Pelaksanaan Standar Operasional Prosedur dalam aspek pengelolaan: (a) pendidikan; (b) pengembangan suasana akademik dan otonomi keilmuan; (c) kemahasiswaan; (d) penelitian; (e) PkM; (f) SDM; (g) keuangan; (h) sarana dan prasarana; (i) sistem informasi; (j) sistem penjaminan mutu; dan (k) kerjasama;",
    "11. Pelaksanaan Peraturan Rektor mengenai kebijakan IKU dan IKT;",
    "12. Pelaksanaan kegiatan Akreditasi (BAN-PT dan/atau LAM);",
    "13. Pelaksanaan kegiatan SDM dalam mencapai target/capaian sasaran kinerja tenaga pendidik dan tenaga kependidikan.",
  ];
  lingkup.forEach(t => items.push(bodyNoIndent(t)));
  
  // 5.4 Potensi dan Mitigasi Risiko
  items.push(h2("5.4 Potensi dan Mitigasi Risiko Tahapan Pelaksanaan"));
  
  items.push(body(
    "Pelaksanaan standar mutu UNITA memiliki potensi risiko sehingga perlu adanya upaya mitigasi. Potensi dan mitigasi risiko itu dapat dijelaskan sebagai berikut:"
  ));
  
  const risikoPelaksanaan = [
    "1. Risiko Kebijakan: terkait dengan proses dan mekanisme pelaksanaan kebijakan di unit kerja, termasuk kemungkinan kebijakan yang tidak dipahami atau tidak dilaksanakan sesuai maksud;",
    "2. Risiko Kepatuhan: terkait dengan realisasi pada tingkat pelaksana, termasuk kemungkinan unit kerja atau individu yang tidak mematuhi kebijakan dan prosedur yang telah ditetapkan;",
    "3. Risiko Operasional: terkait dengan teknis pelaksanaan kebijakan yang telah ditetapkan, termasuk kemungkinan kegagalan proses, ketidaktersediaan sumber daya, atau gangguan sistem;",
    "4. Risiko Reputasi: terkait dengan akibat dari pelaksanaan kebijakan yang akan memberi pengaruh pada reputasi UNITA di tingkat nasional maupun internasional.",
  ];
  risikoPelaksanaan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Mitigasi risiko pada tahapan pelaksanaan dilakukan melalui: (a) sosialisasi intensif terhadap kebijakan dan standar kepada seluruh pelaksana; (b) penyediaan dokumen pendukung (SOP, Instruksi Kerja, Formulir) yang mudah diakses; (c) pelatihan berkala untuk peningkatan kapasitas pelaksana; (d) monitoring oleh PPM, LPM, dan GKM terhadap pelaksanaan standar; (e) sistem pelaporan yang transparan dan akuntabel; serta (f) tindakan koreksi cepat atas setiap penyimpangan yang ditemukan."
  ));
  
  // 5.5 Penanggung Jawab
  items.push(h2("5.5 Penanggung Jawab Pelaksana Standar Mutu UNITA"));
  
  items.push(body(
    "Pelaksanaan standar mutu di Universitas Tulungagung melibatkan berbagai pihak dengan tugas dan tanggung jawab spesifik. Pembagian tanggung jawab tersebut adalah sebagai berikut:"
  ));
  
  const penanggungJawab = [
    "1. Wakil Rektor II mendapatkan tugas dari Rektor untuk melaksanakan Tata Pamong, Tata Kelola, dan Kerjasama di Universitas Tulungagung;",
    "2. Ketua Pusat Penjaminan Mutu (PPM) menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan penjaminan mutu Universitas Tulungagung di bidang akademik dengan mendasarkan pada Standar Mutu UNITA yang telah ditetapkan oleh Rektor UNITA;",
    "3. Ketua Satuan Pengawas Internal (SPI) menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan penjaminan mutu Universitas Tulungagung di bidang non akademik dengan mendasarkan pada Standar Mutu UNITA yang telah ditetapkan oleh Rektor UNITA;",
    "4. Wakil Rektor III menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan pengembangan bidang kemahasiswaan, pelaksanaan pengembangan karir mahasiswa dan alumni, serta kewirausahaan;",
    "5. Wakil Rektor II menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan administrasi UNITA yang menyelenggarakan kegiatan pelayanan administrasi umum, hukum dan tata laksana, sistem dan teknologi informasi, serta kehumasan dan protokoler;",
    "6. Wakil Rektor II menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan pengembangan tenaga pendidik dan tenaga kependidikan;",
    "7. Ketua Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) dan Kepala UPT Inkubator Bisnis menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan pengembangan penelitian dan pengabdian kepada masyarakat;",
    "8. Kepala Biro Administrasi Keuangan menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan sistem akuntabilitas kinerja di UNITA;",
    "9. Dekan Fakultas dan Ketua Program Studi menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk menyelenggarakan dan mengelola pendidikan akademik dan/atau pendidikan profesi dalam satu rumpun disiplin ilmu pengetahuan dan teknologi serta keahlian terapan;",
    "10. Kepala Bagian Pengembangan SPMI menerima tanggung jawab pelaksanaan tugas dari Ketua PPM untuk melakukan perencanaan kebijakan dan anggaran akreditasi pendidikan, melaksanakan penyelenggaraan dan pengembangan akreditasi pendidikan, melakukan koordinasi penyelenggaraan dan pengembangan akreditasi pendidikan, serta melakukan monitoring dan evaluasi penyelenggaraan dan pengembangan akreditasi pendidikan;",
    "11. Kepala Bagian Pengembangan SPMI untuk melakukan perencanaan kebijakan dan anggaran pemeringkatan, melaksanakan penyelenggaraan dan pengembangan pemeringkatan, melakukan koordinasi penyelenggaraan dan pengembangan pemeringkatan, serta melakukan monitoring dan evaluasi penyelenggaraan dan pengembangan pemeringkatan;",
    "12. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor untuk melaksanakan kebijakan, program, dan kegiatan dalam bidang sistem penjaminan mutu internal;",
    "13. Kepala Bagian Audit dan Monevin AMI menerima tanggung jawab pelaksanaan tugas dari Ketua PPM untuk melaksanakan kebijakan, program, dan kegiatan dalam bidang audit internal mutu;",
    "14. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor untuk melaksanakan kebijakan, program, dan kegiatan dalam bidang akreditasi nasional;",
    "15. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor untuk melaksanakan kebijakan, program, dan kegiatan dalam bidang reputasi nasional dan internasional.",
  ];
  penanggungJawab.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabIII, buildBabIV, buildBabV };
