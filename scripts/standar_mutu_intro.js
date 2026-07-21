// ============================================================
// INTRO: HEADER DOKUMEN + TIM PENYUSUN + KATA PENGANTAR + BAB I + BAB II
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./standar_mutu_core.js");

// ============================================================
// HEADER DOKUMEN UMUM + TIM PENYUSUN
// ============================================================
function buildHeaderUmum() {
  const items = [];
  
  // Tabel header dokumen umum
  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          cell("Dokumen Mutu", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Kode Dok.   : SPMI/PPM/DM/STD/2025", { align: AlignmentType.LEFT, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Universitas\nTulungagung", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanggal       : 1 September 2025\nRevisi          : 01\nHalaman      : 1 dari ...", { align: AlignmentType.LEFT, width: 50 }),
          cell("Logo\n[UNITA]", { align: AlignmentType.CENTER, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Sistem Penjaminan Mutu Internal", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Nama Dokumen: Standar Mutu SPMI UNITA", { align: AlignmentType.LEFT, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
    ],
  });
  items.push(headerTable);
  items.push(...spacer(1));
  
  // Judul dokumen
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: "STANDAR MUTU", bold: true, size: 32, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "SISTEM PENJAMINAN MUTU INTERNAL (SPMI)", bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "UNIVERSITAS TULUNGAGUNG", bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 300, line: 312 },
    children: [new TextRun({ text: "33 STANDAR (8 Pendidikan + 8 Penelitian + 8 PkM + 9 Tambahan)", size: 24, italics: true, font: FONT })],
  }));
  
  // Tabel Pengendalian Dokumen
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 120, line: 312 },
    children: [new TextRun({ text: "TABEL PENGENDALIAN DOKUMEN", bold: true, size: 26, font: FONT })],
  }));
  
  const pengendalianTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 5 }),
          cell("Proses", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 18 }),
          cell("Nama", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 32 }),
          cell("Jabatan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanda Tangan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 12 }),
          cell("Tanggal", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 8 }),
        ],
      }),
      ...[
        ["1", "Perumus", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["2", "Pemeriksa", "Eni Minarni, S.E., Ak., M.Ak.", "Ka. Bag. Monev"],
        ["3", "Persetujuan", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["4", "Penetapan", "Dr. Muharsono, M.Si.", "Rektor"],
        ["5", "Pengendalian", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
      ].map(([no, proses, nama, jabatan]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(no, { align: AlignmentType.CENTER, width: 5 }),
            cell(proses, { align: AlignmentType.CENTER, width: 18 }),
            cell(nama, { align: AlignmentType.LEFT, width: 32 }),
            cell(jabatan, { align: AlignmentType.LEFT, width: 25 }),
            cell("", { width: 12 }),
            cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
          ],
        })
      ),
    ],
  });
  items.push(pengendalianTable);
  
  // Tim Penyusun
  items.push(h1("TIM PENYUSUN"));
  
  items.push(body(
    "Tim penyusun Standar Mutu Universitas Tulungagung menjalankan tugas berdasarkan Keputusan Rektor Universitas Tulungagung Nomor: A/002.I/KEP/UNITA/I/2025 tentang Pernyataan dan Kebijakan Mutu Universitas Tulungagung, tanggal 1 September 2025. Tim penyusun bertanggung jawab atas perumusan, penyusunan, dan pengkajian substansi Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung agar selaras dengan ketentuan Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi. Tim penyusun juga bertugas memastikan bahwa dokumen Standar Mutu ini dapat menjadi acuan kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan Tridharma di lingkungan Universitas Tulungagung, dan konsisten dengan dokumen Kebijakan Mutu serta Manual Mutu SPMI UNITA Tahun 2025."
  ));
  
  items.push(body("Susunan keanggotaan Tim Penyusun Standar Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
  const timTable = new Table({
    width: { size: 90, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    borders: tableBorders,
    rows: [
      ...[
        ["Penanggung Jawab", "Dr. Muharsono, M.Si.", true],
        ["Ketua", "Anang Sugeng Cahyono, S.AP., M.Si.", true],
        ["Sekretaris", "Lutfan Anas Zahir, S.Si., M.Pd.", true],
        ["Anggota", "1. Prof. Dr. Dwi Ima Herminingsih, M.Hum.\n2. Danang Wijanarko, S.T., M.T.\n3. Chusnatul Ulaela Sajali, S.P., M.P.\n4. Aulia Rahman Hakim, S.H., M.H.\n5. Eni Minarni, S.E., M.Ak.", false],
        ["Administrator", "Yeni Setyowati, S.P.", true],
      ].map(([jabatan, nama, center]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(jabatan, { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
            cell(nama, { align: center ? AlignmentType.CENTER : AlignmentType.LEFT, width: 50 }),
          ],
        })
      ),
    ],
  });
  items.push(timTable);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// KATA PENGANTAR
// ============================================================
function buildKataPengantar() {
  const items = [];
  
  items.push(h1("KATA PENGANTAR"));
  
  items.push(body(
    "Puji syukur senantiasa kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat, hidayah, dan karunia-Nya, sehingga Pusat Penjaminan Mutu Universitas Tulungagung dapat menyelesaikan penyusunan dokumen Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Penyusunan dokumen ini merupakan wujud nyata komitmen Universitas Tulungagung dalam menjalankan amanat Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, yang menjadi landasan regulasi terkini bagi penyelenggaraan Sistem Penjaminan Mutu Pendidikan Tinggi di Indonesia."
  ));
  
  items.push(body(
    "Standar Mutu ini disusun dengan restrukturisasi total sesuai kerangka SN Dikti sebagaimana diatur dalam Permen 39 Tahun 2025, yang terdiri atas tiga standar utama—yaitu Standar Pendidikan, Standar Penelitian, dan Standar Pengabdian kepada Masyarakat—dan sembilan standar tambahan sebagai pelampauan SN Dikti sesuai Pasal 64. Total terdapat 33 standar yang dikelola melalui siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan). Setiap standar memiliki kode dokumen unik, sehingga memudahkan pengelolaan, distribusi, dan pengendalian dokumen di seluruh unit kerja Universitas Tulungagung."
  ));
  
  items.push(body(
    "Standar Mutu ini menjadi acuan kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan Tridharma Perguruan Tinggi di Universitas Tulungagung, agar dapat dinilai bermutu sesuai dengan ketentuan perundang-undangan sehingga memuaskan kepentingan internal dan eksternal. Dokumen ini konsisten dengan Kebijakan Mutu SPMI UNITA Tahun 2025 yang menjadi payung strategis, serta Manual Mutu SPMI UNITA Tahun 2025 yang menjadi panduan operasional pelaksanaan PPEPP. Ketiga dokumen—Kebijakan Mutu, Manual Mutu, dan Standar Mutu—saling melengkapi dan membentuk sistem dokumentasi SPMI yang utuh, terintegrasi, dan kuat (powerful)."
  ));
  
  items.push(body(
    "Setiap standar dalam dokumen ini disusun dengan template 9 bagian: (1) Visi, Misi, Tujuan Perguruan Tinggi; (2) Rasional; (3) Pihak yang Bertanggung Jawab; (4) Definisi Istilah; (5) Pernyataan Isi Standar; (6) Strategi; (7) Indikator dengan target capaian 2026-2030 dan baseline 2025; (8) Dokumen terkait; dan (9) Referensi. Struktur template yang konsisten ini memastikan bahwa setiap standar memiliki kelengkapan yang sama, sehingga memudahkan pemangku kepentingan—baik internal maupun eksternal—dalam memahami, mengevaluasi, dan menindaklanjuti setiap standar."
  ));
  
  items.push(body(
    "Kami menyampaikan terima kasih yang tulus kepada seluruh pihak internal dan eksternal Universitas Tulungagung yang telah memberikan kontribusi, masukan, dan kritik membangun dalam proses penyusunan dokumen ini. Kritik, saran, dan masukan dari berbagai pihak senantiasa kami harapkan demi penyempurnaan dokumen Standar Mutu ini di masa mendatang. Kami berharap bahwa Standar Mutu ini digunakan oleh pihak-pihak yang disebutkan dalam dokumen SPMI, sehingga kita mampu mengakselerasi perwujudan Budaya Mutu di Universitas Tulungagung untuk mewujudkan visi Universitas Tulungagung sebagai perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional, serta memperoleh status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi."
  ));
  
  items.push(...spacer(2));
  
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Tulungagung, 1 September 2025", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Pusat Penjaminan Mutu", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Ketua,", size: 24, font: FONT })],
  }));
  
  items.push(...spacer(3));
  
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Anang Sugeng Cahyono, S.AP., M.Si.", bold: true, size: 24, font: FONT, underline: { type: "single" } })],
  }));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB I PENDAHULUAN
// ============================================================
function buildBabI() {
  const items = [];
  
  items.push(h1("BAB I\nPENDAHULUAN"));
  
  // 1.1 Latar Belakang
  items.push(h2("1.1 Latar Belakang"));
  
  items.push(body(
    "Universitas Tulungagung sebagai institusi pendidikan tinggi memiliki tanggung jawab strategis dalam menyelenggarakan Tridharma Perguruan Tinggi—yaitu pendidikan, penelitian, dan pengabdian kepada masyarakat—sesuai dengan standar mutu yang telah ditetapkan. Untuk memenuhi tanggung jawab tersebut, Universitas Tulungagung wajib menetapkan Standar Mutu yang menjadi acuan operasional bagi seluruh unit kerja, mulai dari tingkat universitas, fakultas, hingga program studi. Standar Mutu ini menjadi tolok ukur bagi pelaksanaan, evaluasi, pengendalian, dan peningkatan mutu di lingkungan Universitas Tulungagung."
  ));
  
  items.push(body(
    "Berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi sejak tanggal 2 September 2025 membawa konsekuensi yuridis dan operasional yang signifikan. Permen ini mencabut regulasi sebelumnya dan merestrukturisasi Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Bab II. Universitas Tulungagung merespons restrukturisasi ini dengan menyusun ulang secara total dokumen Standar Mutu, agar selaras dengan kerangka regulasi terbaru dan konsisten dengan dokumen Kebijakan Mutu serta Manual Mutu SPMI UNITA Tahun 2025."
  ));
  
  items.push(body(
    "Restrukturisasi Standar Mutu ini bukan sekadar substitusi normatif, melainkan reformasi substansial yang mencakup: (a) pengelompokan ulang standar sesuai struktur SN Dikti sebagaimana diatur dalam Pasal 4 dan Pasal 5 Permen 39 Tahun 2025; (b) penegasan sembilan standar tambahan sebagai pelampauan SN Dikti sesuai Pasal 64; (c) integrasi prinsip triangulasi data berbasis PD Dikti dalam setiap standar; (d) penetapan target capaian 2026-2030 dengan baseline 2025 untuk seluruh indikator kinerja; serta (e) konsistensi dengan tata kelola perguruan tinggi yang baik sebagaimana diatur dalam Pasal 67 ayat (2)."
  ));
  
  items.push(body(
    "Dokumen Standar Mutu ini menjadi acuan kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan Tridharma Perguruan Tinggi di Universitas Tulungagung. Setiap standar dikelola melalui siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan) sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025, dan dievaluasi secara berkala melalui Audit Mutu Internal (AMI) serta Rapat Tinjauan Manajemen (RTM). Hasil evaluasi menjadi basis bagi peningkatan mutu secara berkelanjutan, sehingga Universitas Tulungagung mampu memenuhi dan melampaui SN Dikti, serta memperoleh status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi."
  ));
  
  // 1.2 Dasar Hukum
  items.push(h2("1.2 Dasar Hukum"));
  
  items.push(body(
    "Penyusunan dan penetapan Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 didasarkan pada peraturan perundang-undangan yang berlaku, yang menjadi landasan yuridis dan operasional bagi seluruh kegiatan penjaminan mutu di lingkungan universitas. Dasar hukum ini merupakan kerangka regulasi terkini yang berlaku efektif sejak tanggal diundangkannya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, sehingga seluruh dokumen SPMI Universitas Tulungagung telah sepenuhnya diselaraskan dengan regulasi terbaru tersebut."
  ));
  
  items.push(body("Dasar hukum Standar Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
  const dasarHukum = [
    "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;",
    "2. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "3. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "4. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "5. Peraturan Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) yang berlaku;",
    "6. Statuta Universitas Tulungagung;",
    "7. Rencana Strategis (Renstra) Universitas Tulungagung.",
  ];
  dasarHukum.forEach(t => items.push(bodyNoIndent(t)));
  
  // 1.3 Tujuan
  items.push(h2("1.3 Tujuan Standar Mutu"));
  
  items.push(body(
    "Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 disusun dengan tujuan untuk: (a) menetapkan kriteria, ukuran, patokan, atau spesifikasi minimal dari seluruh kegiatan penyelenggaraan Tridharma Perguruan Tinggi di Universitas Tulungagung; (b) menjadi acuan operasional bagi seluruh unit kerja dalam melaksanakan siklus PPEPP; (c) memastikan pemenuhan Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Permen 39 Tahun 2025; (d) mendorong pelampauan SN Dikti melalui sembilan standar tambahan sesuai Pasal 64; serta (e) menjadi basis bagi evaluasi melalui AMI dan RTM, dan basis bagi peningkatan mutu berkelanjutan."
  ));
  
  items.push(body(
    "Selain tujuan-tujuan tersebut, Standar Mutu ini juga bertujuan untuk: (f) menyediakan kerangka yang jelas dan terukur bagi setiap unit kerja dalam merencanakan, melaksanakan, dan mengevaluasi kinerja; (g) memperkuat akuntabilitas dan transparansi pelaksanaan Tridharma; (h) menjadi rujukan bagi auditor internal dan asesor eksternal dalam menilai pelaksanaan SPMI di Universitas Tulungagung; (i) mendukung pencapaian status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi sesuai Pasal 73 dan Pasal 74 Permen 39 Tahun 2025; serta (j) mendukung pencapaian visi Universitas Tulungagung sebagai perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional."
  ));
  
  // 1.4 Ruang Lingkup
  items.push(h2("1.4 Ruang Lingkup Standar Mutu"));
  
  items.push(body(
    "Ruang lingkup Standar Mutu SPMI Universitas Tulungagung mencakup seluruh aspek penyelenggaraan Tridharma Perguruan Tinggi dan aspek nonakademik pendukungnya, sebagaimana diatur dalam Pasal 65 Permen 39 Tahun 2025. Sesuai Pasal 65 ayat (2), Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) mencakup bidang akademik dan bidang nonakademik. Bidang akademik berkaitan dengan Tridharma—yaitu pendidikan, penelitian, dan pengabdian kepada masyarakat—sedangkan bidang nonakademik meliputi organisasi, keuangan, kemahasiswaan, ketenagaan, dan sarana prasarana."
  ));
  
  items.push(body(
    "Secara struktural, ruang lingkup Standar Mutu SPMI UNITA mencakup 33 standar yang dikelompokkan ke dalam empat kategori: (a) 8 Standar Pendidikan yang sesuai SN Dikti sebagaimana diatur dalam Pasal 5-51 Permen 39 Tahun 2025; (b) 8 Standar Penelitian yang sesuai SN Dikti sebagaimana diatur dalam Pasal 52-56; (c) 8 Standar Pengabdian kepada Masyarakat yang sesuai SN Dikti sebagaimana diatur dalam Pasal 57-63; serta (d) 9 Standar Tambahan sebagai pelampauan SN Dikti sesuai Pasal 64. Setiap standar berlaku bagi seluruh unit kerja di lingkungan Universitas Tulungagung, mulai dari tingkat universitas, fakultas, hingga program studi."
  ));
  
  // 1.5 Definisi Istilah
  items.push(h2("1.5 Definisi Istilah"));
  
  items.push(body(
    "Dalam dokumen Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung ini, istilah-istilah teknis dan administratif yang digunakan mengacu pada definisi yang telah dibakukan dalam Pasal 1 Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, dilengkapi dengan definisi operasional yang umum digunakan dalam praktik penjaminan mutu di lingkungan perguruan tinggi. Definisi dan istilah dalam dokumen Standar Mutu ini adalah sebagai berikut:"
  ));
  
  const definisi = [
    ["1.", "Penjaminan Mutu Pendidikan Tinggi", "kegiatan sistemik untuk meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["2.", "Standar Nasional Pendidikan Tinggi (SN Dikti)", "satuan standar yang meliputi standar nasional pendidikan ditambah dengan standar penelitian dan standar pengabdian kepada masyarakat."],
    ["3.", "Tridharma Perguruan Tinggi", "kewajiban perguruan tinggi untuk menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat."],
    ["4.", "Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti)", "rangkaian unsur dan proses terkait mutu pendidikan tinggi yang saling berkaitan dan tersusun secara teratur dalam menjamin dan meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["5.", "Sistem Penjaminan Mutu Internal (SPMI)", "rangkaian unsur dan proses yang saling berkaitan dan tersusun secara teratur dalam rangka menjamin dan meningkatkan mutu pendidikan tinggi di perguruan tinggi secara otonom."],
    ["6.", "Standar Pendidikan Tinggi", "standar pendidikan tinggi yang ditetapkan oleh perguruan tinggi sebagai penjabaran operasional SN Dikti sesuai tingkat mutu dan keluasan substansi yang ditetapkan perguruan tinggi."],
    ["7.", "Standar SPMI", "dokumen tertulis berisi berbagai kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan pendidikan tinggi suatu perguruan tinggi untuk mewujudkan visi dan misinya."],
    ["8.", "Indikator Kinerja Utama (IKU)", "ukuran kuantitatif yang menggambarkan kinerja perguruan tinggi dalam aspek-aspek strategis yang menjadi prioritas."],
    ["9.", "Baseline", "nilai awal pengukuran kinerja pada tahun dasar yang digunakan sebagai pembanding untuk target capaian periode berikutnya."],
    ["10.", "Target Capaian", "nilai kinerja yang ingin dicapai pada periode tertentu, diturunkan dari sasaran strategis dan indikator kinerja."],
    ["11.", "Pangkalan Data Pendidikan Tinggi (PD Dikti)", "kumpulan data penyelenggaraan pendidikan tinggi seluruh perguruan tinggi yang terintegrasi secara nasional."],
    ["12.", "Audit Mutu Internal (AMI)", "kegiatan pemeriksaan kepatuhan yang secara internal dilakukan oleh auditor Universitas Tulungagung terhadap pelaksanaan SPMI."],
    ["13.", "Rapat Tinjauan Manajemen (RTM)", "rapat formal manajemen puncak untuk mengevaluasi penerapan sistem mutu dan merumuskan tindakan koreksi serta prioritas peningkatan."],
    ["14.", "PPEPP", "siklus penjaminan mutu yang terdiri atas Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan."],
    ["15.", "Prinsip Triangulasi", "penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi."],
    ["16.", "Tata Kelola Perguruan Tinggi yang Baik", "tata kelola yang didasarkan pada prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan."],
    ["17.", "Kompetensi Lulusan", "kesatuan kompetensi sikap, keterampilan, dan pengetahuan yang menunjukkan capaian mahasiswa dari hasil pembelajarannya pada akhir program pendidikan tinggi."],
    ["18.", "Capaian Pembelajaran Lulusan (CPL)", "rumusan kompetensi lulusan yang dirumuskan dari standar kompetensi lulusan."],
    ["19.", "Kurikulum", "seperangkat rencana dan pengaturan mengenai capaian pembelajaran lulusan, mata kuliah, beban belajar, dan strategi pembelajaran."],
    ["20.", "Pusat Penjaminan Mutu (PPM)", "unit kerja fungsional di tingkat universitas yang bertugas merencanakan, menerapkan, mengendalikan, dan mengembangkan SPMI."],
    ["21.", "Lembaga Penjaminan Mutu (LPM)", "lembaga di tingkat fakultas yang bertugas mengelola SPMI di fakultas."],
    ["22.", "Gugus Penjaminan Mutu (GKM)", "unsur di tingkat program studi yang bertugas mengelola SPMI di program studi."],
    ["23.", "Unit Pengelola Program Studi (UPPS)", "unit yang merencanakan seluruh upaya pengembangan program studi berbasis evaluasi diri."],
  ];
  
  definisi.forEach(([no, istilah, def]) => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${no} `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: `${istilah} `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: `: ${def}`, size: 24, font: FONT }),
      ],
    }));
  });
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB II STRUKTUR 33 STANDAR SPMI UNITA
// ============================================================
function buildBabII() {
  const items = [];
  
  items.push(h1("BAB II\nSTRUKTUR 33 STANDAR SPMI UNITA"));
  
  // 2.1 Restrukturisasi
  items.push(h2("2.1 Restrukturisasi Sesuai Permen 39 Tahun 2025"));
  
  items.push(body(
    "Universitas Tulungagung melakukan restrukturisasi total Standar Mutu sesuai dengan kerangka Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Bab II Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025. Sesuai Pasal 4 ayat (1), SN Dikti terdiri atas tiga komponen utama: (a) standar nasional pendidikan; (b) standar penelitian; dan (c) standar pengabdian kepada masyarakat. Ketiga komponen ini merupakan satu kesatuan yang tidak terpisahkan sebagai dasar bagi perguruan tinggi dalam penyelenggaraan Tridharma."
  ));
  
  items.push(body(
    "Sesuai Pasal 5 ayat (1), standar nasional pendidikan terdiri atas: (a) standar luaran pendidikan—yang merupakan standar kompetensi lulusan; (b) standar proses pendidikan—yang terdiri atas standar proses pembelajaran, standar penilaian, dan standar pengelolaan; dan (c) standar masukan pendidikan—yang terdiri atas standar isi, standar dosen dan tenaga kependidikan, standar sarana dan prasarana, dan standar pembiayaan. Dengan demikian, total terdapat delapan sub-standar nasional pendidikan. Universitas Tulungagung mengelola kedelapan sub-standar tersebut sebagai 8 Standar Pendidikan dalam dokumen Standar Mutu ini."
  ));
  
  items.push(body(
    "Untuk standar penelitian dan standar pengabdian kepada masyarakat, masing-masing terdiri atas tiga komponen sebagaimana diatur dalam Pasal 52-56 (penelitian) dan Pasal 57-63 (PkM), yaitu standar luaran, standar proses, dan standar masukan. Universitas Tulungagung mengelola masing-masing komponen ini dengan menambahkan lima standar operasional—yaitu standar hasil, publikasi, paten/HKI atau produk/jasa, diseminasi, dan kolaborasi—sehingga total terdapat 8 Standar Penelitian dan 8 Standar Pengabdian kepada Masyarakat. Penambahan ini dilakukan untuk memperkuat pengelolaan operasional Tridharma di tingkat universitas."
  ));
  
  items.push(body(
    "Selain 24 standar utama yang sesuai SN Dikti (8 pendidikan + 8 penelitian + 8 PkM), Universitas Tulungagung menetapkan sembilan standar tambahan sebagai pelampauan SN Dikti sesuai Pasal 64 ayat (2). Sembilan standar tambahan tersebut meliputi: (1) Standar Visi, Misi, Tujuan, dan Strategi; (2) Standar Tata Pamong dan Tata Kelola; (3) Standar Mahasiswa; (4) Standar Sumber Daya Manusia; (5) Standar Keuangan, Sarana, dan Prasarana; (6) Standar Kerjasama; (7) Standar Merdeka Belajar Kampus Merdeka; (8) Standar Luaran dan Capaian Tridharma; serta (9) Standar Pelayanan Kepada Mahasiswa. Total keseluruhan terdapat 33 Standar SPMI Universitas Tulungagung Tahun 2025."
  ));
  
  // 2.2 Daftar 33 Standar
  items.push(h2("2.2 Daftar 33 Standar SPMI UNITA"));
  
  items.push(body(
    "Tabel berikut menampilkan daftar lengkap 33 Standar SPMI Universitas Tulungagung Tahun 2025, beserta kategori dan kode dokumen unik untuk setiap standar:"
  ));
  
  const standarList = [
    // 8 Standar Pendidikan
    ["1", "Standar Kompetensi Lulusan", "Pendidikan", "SKL"],
    ["2", "Standar Proses Pembelajaran", "Pendidikan", "SPB"],
    ["3", "Standar Penilaian", "Pendidikan", "SPN"],
    ["4", "Standar Pengelolaan", "Pendidikan", "SPP"],
    ["5", "Standar Isi", "Pendidikan", "SIS"],
    ["6", "Standar Dosen dan Tenaga Kependidikan", "Pendidikan", "SDT"],
    ["7", "Standar Sarana dan Prasarana", "Pendidikan", "SSP"],
    ["8", "Standar Pembiayaan", "Pendidikan", "SPM"],
    // 8 Standar Penelitian
    ["9", "Standar Luaran Penelitian", "Penelitian", "PEN-LRN"],
    ["10", "Standar Proses Penelitian", "Penelitian", "PEN-PRS"],
    ["11", "Standar Masukan Penelitian", "Penelitian", "PEN-MSK"],
    ["12", "Standar Hasil Penelitian", "Penelitian", "PEN-HSL"],
    ["13", "Standar Publikasi Ilmiah Penelitian", "Penelitian", "PEN-PUB"],
    ["14", "Standar Paten dan HKI Penelitian", "Penelitian", "PEN-PTN"],
    ["15", "Standar Diseminasi Penelitian", "Penelitian", "PEN-DSM"],
    ["16", "Standar Kolaborasi Penelitian", "Penelitian", "PEN-KLB"],
    // 8 Standar PkM
    ["17", "Standar Luaran PkM", "PkM", "PKM-LRN"],
    ["18", "Standar Proses PkM", "PkM", "PKM-PRS"],
    ["19", "Standar Masukan PkM", "PkM", "PKM-MSK"],
    ["20", "Standar Hasil PkM", "PkM", "PKM-HSL"],
    ["21", "Standar Publikasi PkM", "PkM", "PKM-PUB"],
    ["22", "Standar Produk dan Jasa PkM", "PkM", "PKM-PRD"],
    ["23", "Standar Diseminasi PkM", "PkM", "PKM-DSM"],
    ["24", "Standar Kolaborasi PkM", "PkM", "PKM-KLB"],
    // 9 Standar Tambahan
    ["25", "Standar Visi, Misi, Tujuan, dan Strategi", "Tambahan", "VMTS"],
    ["26", "Standar Tata Pamong dan Tata Kelola", "Tambahan", "TPTK"],
    ["27", "Standar Mahasiswa", "Tambahan", "MHS"],
    ["28", "Standar Sumber Daya Manusia", "Tambahan", "SDM"],
    ["29", "Standar Keuangan, Sarana, dan Prasarana", "Tambahan", "KSP"],
    ["30", "Standar Kerjasama", "Tambahan", "KJS"],
    ["31", "Standar Merdeka Belajar Kampus Merdeka", "Tambahan", "MBKM"],
    ["32", "Standar Luaran dan Capaian Tridharma", "Tambahan", "LCT"],
    ["33", "Standar Pelayanan Kepada Mahasiswa", "Tambahan", "PKM-MHS"],
  ];
  
  const daftarTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 6 }),
          cell("Nama Standar", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 50 }),
          cell("Kategori", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Kode Dokumen", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 24 }),
        ],
      }),
      ...standarList.map(([no, nama, kategori, kode]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(no, { align: AlignmentType.CENTER, size: 20, width: 6 }),
            cell(nama, { align: AlignmentType.LEFT, size: 20, width: 50 }),
            cell(kategori, { align: AlignmentType.CENTER, size: 20, width: 20 }),
            cell(`SPMI/PPM/DM/STD/${kode}/2025`, { align: AlignmentType.LEFT, size: 18, width: 24 }),
          ],
        })
      ),
    ],
  });
  items.push(daftarTable);
  
  // 2.3 Template 9-Bagian
  items.push(h2("2.3 Template 9-Bagian Setiap Standar"));
  
  items.push(body(
    "Setiap standar dalam dokumen Standar Mutu SPMI UNITA disusun dengan template 9 bagian yang konsisten, sehingga seluruh standar memiliki struktur yang sama dan memudahkan pemangku kepentingan dalam memahami, mengevaluasi, dan menindaklanjuti setiap standar. Sembilan bagian tersebut adalah sebagai berikut:"
  ));
  
  const templateBagian = [
    ["1", "Visi, Misi, Tujuan Perguruan Tinggi", "Memuat rumusan Visi, Misi, Tujuan, dan Sasaran Strategis Universitas Tulungagung yang menjadi landasan filosofis bagi setiap standar."],
    ["2", "Rasional", "Memuat justifikasi rasional mengapa standar tersebut perlu ditetapkan, termasuk konteks regulasi, akademik, dan operasional."],
    ["3", "Pihak yang Bertanggungjawab", "Memuat tabel pihak-pihak yang bertanggung jawab dalam setiap tahapan PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, Peningkatan)."],
    ["4", "Definisi Istilah", "Memuat definisi istilah-istilah teknis yang digunakan dalam standar, untuk memastikan pemahaman yang konsisten."],
    ["5", "Pernyataan Isi Standar", "Memuat rumusan kriteria minimal yang harus dipenuhi oleh Universitas Tulungagung untuk standar terkait."],
    ["6", "Strategi", "Memuat langkah-langkah strategis yang akan dilakukan untuk mencapai standar yang ditetapkan."],
    ["7", "Indikator", "Memuat tabel indikator kinerja, strategi pencapaian, unit penanggung jawab, baseline 2025, dan target capaian 2026-2030."],
    ["8", "Dokumen terkait", "Memuat daftar dokumen-dokumen yang terkait dengan pelaksanaan standar, baik dokumen SPMI maupun dokumen induk universitas."],
    ["9", "Referensi", "Memuat daftar landasan yuridis dan dokumen acuan yang digunakan dalam penyusunan standar."],
  ];
  
  const templateTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 6 }),
          cell("Bagian", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 30 }),
          cell("Deskripsi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 64 }),
        ],
      }),
      ...templateBagian.map(([no, bagian, deskripsi]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(no, { align: AlignmentType.CENTER, size: 20, width: 6 }),
            cell(bagian, { align: AlignmentType.LEFT, size: 20, bold: true, width: 30 }),
            cell(deskripsi, { align: AlignmentType.LEFT, size: 20, width: 64 }),
          ],
        })
      ),
    ],
  });
  items.push(templateTable);
  
  items.push(body(
    "Dengan template yang konsisten, setiap standar dapat dievaluasi dan dibandingkan secara sistematis. Auditor internal dapat menggunakan template ini sebagai checklist saat AMI, dan asesor eksternal dapat dengan mudah menavigasi dokumen saat akreditasi. Selain itu, template ini juga memudahkan revisi berkala, karena setiap bagian dapat diperbarui secara independen tanpa mempengaruhi bagian lain."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildHeaderUmum, buildKataPengantar, buildBabI, buildBabII };
