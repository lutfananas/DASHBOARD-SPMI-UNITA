// ============================================================
// INTRO: HEADER DOKUMEN + TIM PENYUSUN + KATA PENGANTAR + BAB I + BAB II
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./formulir_mutu_core.js");

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
          cell("Kode Dok.   : SPMI/PPM/DM/FORM/2025", { align: AlignmentType.LEFT, width: 50 }),
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
          cell("Nama Dokumen: Formulir Mutu SPMI UNITA", { align: AlignmentType.LEFT, width: 50 }),
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
    children: [new TextRun({ text: "FORMULIR MUTU", bold: true, size: 32, font: FONT })],
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
    children: [new TextRun({ text: "38 Formulir (Akademik + Standar + AMI/RTM + PD Dikti)", size: 24, italics: true, font: FONT })],
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
    "Tim penyusun Formulir Mutu Universitas Tulungagung menjalankan tugas berdasarkan Keputusan Rektor Universitas Tulungagung Nomor: A/002.I/KEP/UNITA/I/2025 tentang Pernyataan dan Kebijakan Mutu Universitas Tulungagung, tanggal 1 September 2025. Tim penyusun bertanggung jawab atas perumusan, penyusunan, dan pengkajian substansi Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung agar selaras dengan ketentuan Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi. Tim penyusun juga bertugas memastikan bahwa dokumen Formulir Mutu ini dapat menjadi alat pendukung pelaksanaan siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan) yang konsisten dengan dokumen Kebijakan Mutu, Manual Mutu, dan Standar Mutu SPMI UNITA Tahun 2025."
  ));
  
  items.push(body("Susunan keanggotaan Tim Penyusun Formulir Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
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
    "Puji syukur senantiasa kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat, hidayah, dan karunia-Nya, sehingga Pusat Penjaminan Mutu Universitas Tulungagung dapat menyelesaikan penyusunan dokumen Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Penyusunan dokumen ini merupakan wujud nyata komitmen Universitas Tulungagung dalam menjalankan amanat Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, yang menjadi landasan regulasi terkini bagi penyelenggaraan Sistem Penjaminan Mutu Pendidikan Tinggi di Indonesia."
  ));
  
  items.push(body(
    "Formulir Mutu ini disusun sebagai instrumen pendukung pelaksanaan siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan) sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025. Dokumen ini konsisten dengan Kebijakan Mutu SPMI UNITA Tahun 2025 yang menjadi payung strategis, Manual Mutu SPMI UNITA Tahun 2025 yang menjadi panduan operasional, serta Standar Mutu SPMI UNITA Tahun 2025 yang berisi 33 standar dengan kriteria dan indikator terukur. Empat dokumen—Kebijakan Mutu, Manual Mutu, Standar Mutu, dan Formulir Mutu—membentuk sistem dokumentasi SPMI yang utuh, terintegrasi, dan kuat (powerful)."
  ));
  
  items.push(body(
    "Formulir Mutu Tahun 2025 ini berisi 38 formulir yang dikelompokkan ke dalam beberapa kategori: (a) formulir monitoring dan evaluasi per standar (8 formulir Pendidikan, 5 formulir Penelitian/PkM, 9 formulir Tambahan); (b) formulir AMI dan RTM (4 formulir); (c) formulir akademik (5 formulir); dan (d) formulir pendukung PD Dikti dan triangulasi (2 formulir). Setiap formulir memiliki kode dokumen unik (mis. SPMI/PPM/DM/FORM/FM-PBM-01/2025 untuk Formulir Monitoring Evaluasi Proses Pembelajaran), sehingga memudahkan pengelolaan, distribusi, dan pengendalian dokumen di seluruh unit kerja Universitas Tulungagung."
  ));
  
  items.push(body(
    "Beberapa formulir baru ditambahkan dalam dokumen ini untuk mengakomodasi prinsip-prinsip baru Permen 39 Tahun 2025, antara lain: (a) Formulir Verifikasi Data PD Dikti (FM-PDD-01) yang mengakomodasi prinsip triangulasi sebagaimana diatur dalam Pasal 66 dan kewajiban PT terhadap kebenaran data PD Dikti sebagaimana diatur dalam Pasal 111; serta (b) Formulir Survey Kepuasan Mahasiswa (FM-PDD-02) yang menjadi salah satu sumber data triangulasi dari perspektif mahasiswa sebagai pemangku kepentingan. Selain itu, formulir-formulir yang sudah ada telah diperbarui agar selaras dengan struktur 33 standar SPMI UNITA 2025 dan mengakomodasi baseline 2025 serta target capaian 2026-2030."
  ));
  
  items.push(body(
    "Kami menyampaikan terima kasih yang tulus kepada seluruh pihak internal dan eksternal Universitas Tulungagung yang telah memberikan kontribusi, masukan, dan kritik membangun dalam proses penyusunan dokumen ini. Kritik, saran, dan masukan dari berbagai pihak senantiasa kami harapkan demi penyempurnaan dokumen Formulir Mutu ini di masa mendatang. Kami berharap bahwa Formulir Mutu ini digunakan oleh pihak-pihak yang disebutkan dalam dokumen SPMI, sehingga kita mampu mengakselerasi perwujudan Budaya Mutu di Universitas Tulungagung untuk mewujudkan visi Universitas Tulungagung sebagai perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional."
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
    "Universitas Tulungagung sebagai institusi pendidikan tinggi telah menetapkan Sistem Penjaminan Mutu Internal (SPMI) sebagai sistem yang terintegrasi untuk menjamin dan meningkatkan mutu penyelenggaraan Tridharma Perguruan Tinggi. SPMI di Universitas Tulungagung dikelola melalui siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan) sebagaimana diatur dalam Pasal 68 Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025. Setiap tahapan PPEPP memerlukan instrumen pendukung yang dapat mendokumentasikan pelaksanaan standar mutu secara sistematis, objektif, dan akuntabel."
  ));
  
  items.push(body(
    "Formulir Mutu adalah dokumen tertulis yang berfungsi untuk mencatat, merekam hal atau informasi atau kegiatan tertentu sebagai bagian yang tak terpisahkan dari standar mutu, manual mutu atau prosedur mutu. Formulir Mutu dirancang agar pelaksanaan setiap standar terdokumentasi secara sistematis, dan menjadi bukti objektif bagi auditor internal maupun eksternal. Setiap formulir memiliki kode unik, nomor revisi, dan tanggal berlaku, yang dikelola melalui sistem pengendalian dokumen di PPM."
  ));
  
  items.push(body(
    "Berlakunya Permen 39 Tahun 2025 sejak tanggal 2 September 2025 membawa konsekuensi yuridis dan operasional yang signifikan bagi penyelenggaraan SPMI di Universitas Tulungagung. Permen ini mencabut regulasi sebelumnya dan merestrukturisasi Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Bab II. Universitas Tulungagung merespons restrukturisasi ini dengan menyusun ulang secara total dokumen SPMI—termasuk Formulir Mutu—agar selaras dengan kerangka regulasi terbaru dan konsisten dengan dokumen Kebijakan Mutu, Manual Mutu, dan Standar Mutu SPMI UNITA Tahun 2025."
  ));
  
  items.push(body(
    "Dokumen Formulir Mutu Tahun 2025 ini disusun dengan restrukturisasi total sesuai dengan struktur 33 standar SPMI UNITA 2025. Total terdapat 38 formulir yang dikelola melalui kode dokumen unik per formulir, sehingga memudahkan pengelolaan, distribusi, dan pengendalian dokumen. Beberapa formulir baru ditambahkan untuk mengakomodasi prinsip-prinsip baru Permen 39 Tahun 2025, khususnya terkait triangulasi data (Pasal 66) dan pengelolaan PD Dikti (Pasal 111)."
  ));
  
  // 1.2 Dasar Hukum
  items.push(h2("1.2 Dasar Hukum"));
  
  items.push(body(
    "Penyusunan dan penetapan Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 didasarkan pada peraturan perundang-undangan yang berlaku, yang menjadi landasan yuridis dan operasional bagi seluruh kegiatan penjaminan mutu di lingkungan universitas. Dasar hukum ini merupakan kerangka regulasi terkini yang berlaku efektif sejak tanggal diundangkannya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, sehingga seluruh dokumen SPMI Universitas Tulungagung telah sepenuhnya diselaraskan dengan regulasi terbaru tersebut."
  ));
  
  items.push(body("Dasar hukum Formulir Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
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
  items.push(h2("1.3 Tujuan Formulir Mutu"));
  
  items.push(body(
    "Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 disusun dengan tujuan untuk: (a) menyediakan instrumen pendukung pelaksanaan siklus PPEPP yang konsisten dengan Kebijakan Mutu, Manual Mutu, dan Standar Mutu SPMI UNITA 2025; (b) mendokumentasikan pelaksanaan setiap standar mutu secara sistematis, objektif, dan akuntabel; (c) menjadi bukti objektif bagi auditor internal dan asesor eksternal dalam menilai pelaksanaan SPMI di Universitas Tulungagung; (d) memfasilitasi pelaksanaan prinsip triangulasi data sebagaimana diatur dalam Pasal 66 Permen 39 Tahun 2025; serta (e) mendukung pengelolaan data PD Dikti sebagaimana diatur dalam Pasal 111 Permen 39 Tahun 2025."
  ));
  
  items.push(body(
    "Selain tujuan-tujuan tersebut, Formulir Mutu ini juga bertujuan untuk: (f) menyediakan kerangka yang baku bagi setiap unit kerja dalam mendokumentasikan pelaksanaan standar; (g) memperkuat akuntabilitas dan transparansi pelaksanaan SPMI; (h) menjadi rujukan bagi monitoring dan evaluasi (Monev) per standar; (i) mendukung pelaksanaan AMI dan RTM; serta (j) mendukung pencapaian status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi sesuai Pasal 73 dan Pasal 74 Permen 39 Tahun 2025."
  ));
  
  // 1.4 Ruang Lingkup
  items.push(h2("1.4 Ruang Lingkup Formulir Mutu"));
  
  items.push(body(
    "Ruang lingkup Formulir Mutu SPMI Universitas Tulungagung mencakup seluruh aspek penyelenggaraan Tridharma Perguruan Tinggi dan aspek nonakademik pendukungnya, sebagaimana diatur dalam Pasal 65 Permen 39 Tahun 2025. Formulir Mutu dikelompokkan ke dalam beberapa kategori berdasarkan fungsinya, agar memudahkan pengelolaan dan penggunaan oleh unit kerja yang relevan."
  ));
  
  items.push(body(
    "Kategori formulir dalam dokumen ini adalah: (a) formulir monitoring dan evaluasi per standar Pendidikan (8 formulir) yang sesuai dengan 8 Standar Pendidikan dalam Standar Mutu UNITA 2025; (b) formulir Penelitian dan PkM (5 formulir) yang sesuai dengan standar Penelitian dan PkM; (c) formulir monitoring dan evaluasi per standar Tambahan (9 formulir) yang sesuai dengan 9 Standar Tambahan sebagai pelampauan SN Dikti; (d) formulir AMI dan RTM (4 formulir) yang sesuai dengan Manual Mutu Bab VI dan VIII; (e) formulir akademik (5 formulir) untuk operasional pendidikan; serta (f) formulir pendukung PD Dikti dan triangulasi (2 formulir) yang mengakomodasi prinsip baru Permen 39 Tahun 2025."
  ));
  
  // 1.5 Definisi Istilah
  items.push(h2("1.5 Definisi Istilah"));
  
  items.push(body(
    "Dalam dokumen Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung ini, istilah-istilah teknis dan administratif yang digunakan mengacu pada definisi yang telah dibakukan dalam Pasal 1 Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, dilengkapi dengan definisi operasional yang umum digunakan dalam praktik penjaminan mutu. Definisi dan istilah dalam dokumen Formulir Mutu ini konsisten dengan definisi dalam dokumen Kebijakan Mutu, Manual Mutu, dan Standar Mutu SPMI UNITA 2025."
  ));
  
  const definisi = [
    ["1.", "Formulir Mutu", "dokumen tertulis yang berfungsi untuk mencatat, merekam hal atau informasi atau kegiatan tertentu sebagai bagian yang tak terpisahkan dari standar mutu, manual mutu atau prosedur mutu."],
    ["2.", "Audit Mutu Internal (AMI)", "kegiatan pemeriksaan kepatuhan yang secara internal dilakukan oleh auditor Universitas Tulungagung terhadap pelaksanaan SPMI."],
    ["3.", "RTM", "Rapat Tinjauan Manajemen, rapat formal manajemen puncak untuk mengevaluasi penerapan sistem mutu."],
    ["4.", "PTK", "Permintaan Tindakan Koreksi, permintaan formal untuk melakukan koreksi atas temuan ketidaksesuaian dalam AMI."],
    ["5.", "RTL", "Rencana Tindak Lanjut, rencana yang disusun sebagai tindak lanjut dari hasil AMI dan RTM."],
    ["6.", "PD Dikti", "Pangkalan Data Pendidikan Tinggi, kumpulan data penyelenggaraan pendidikan tinggi seluruh perguruan tinggi yang terintegrasi secara nasional."],
    ["7.", "Prinsip Triangulasi", "penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi, sebagaimana diatur dalam Pasal 66 Permen 39 Tahun 2025."],
    ["8.", "RPS", "Rencana Pembelajaran Semester, dokumen perencanaan pembelajaran untuk satu semester."],
    ["9.", "MBKM", "Merdeka Belajar Kampus Merdeka, kebijakan yang memberikan ruang bagi mahasiswa untuk mengambil kegiatan di luar program studi."],
    ["10.", "CPL", "Capaian Pembelajaran Lulusan, rumusan kompetensi lulusan."],
    ["11.", "CPMK", "Capaian Pembelajaran Mata Kuliah, rumusan kompetensi mata kuliah yang berkontribusi pada CPL."],
    ["12.", "SIAKAD", "Sistem Informasi Akademik, platform digital untuk pengelolaan data akademik mahasiswa."],
    ["13.", "MoU/MoA", "Memorandum of Understanding / Agreement, perjanjian kerja sama formal."],
    ["14.", "Monev", "Monitoring dan Evaluasi, kegiatan pengawasan dan penilaian terhadap pelaksanaan program."],
    ["15.", "Baseline", "nilai awal pengukuran kinerja pada tahun dasar (2025) yang digunakan sebagai pembanding untuk target capaian periode berikutnya (2026-2030)."],
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
// BAB II STRUKTUR 38 FORMULIR
// ============================================================
function buildBabII() {
  const items = [];
  
  items.push(h1("BAB II\nSTRUKTUR 38 FORMULIR MUTU SPMI UNITA"));
  
  // 2.1 Struktur Formulir
  items.push(h2("2.1 Struktur Formulir Mutu"));
  
  items.push(body(
    "Dokumen Formulir Mutu SPMI UNITA Tahun 2025 berisi 38 formulir yang dikelompokkan ke dalam enam kategori berdasarkan fungsinya. Pengelompokan ini sejalan dengan struktur 33 standar SPMI UNITA 2025 dan kebutuhan operasional penjaminan mutu. Setiap formulir memiliki kode dokumen unik dengan format SPMI/PPM/DM/FORM/{KODE}/2025, di mana {KODE} adalah kode formulir yang menunjukkan kategori dan nomor urut."
  ));
  
  items.push(body(
    "Struktur formulir mengikuti template baku yang mencakup: (a) header dokumen dengan kode unik, tanggal, revisi, dan nama formulir; (b) deskripsi formulir yang menjelaskan tujuan dan rujukan standar; (c) instruksi pengisian; (d) tabel-tabel formulir yang berisi field yang harus diisi; dan (e) blok tanda tangan untuk akuntabilitas. Setiap formulir didesain agar mudah diisi oleh pengguna, namun cukup komprehensif untuk mendokumentasikan pelaksanaan standar secara objektif."
  ));
  
  // 2.2 Daftar 38 Formulir
  items.push(h2("2.2 Daftar 38 Formulir Mutu"));
  
  items.push(body(
    "Tabel berikut menampilkan daftar lengkap 38 Formulir Mutu SPMI Universitas Tulungagung Tahun 2025, beserta kategori, kode dokumen unik, dan rujukan standar yang sesuai:"
  ));
  
  const FORMULIR_LIST = require("./formulir_mutu_data.js").FORMULIR_LIST;
  
  const daftarTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 5 }),
          cell("Nama Formulir", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 38 }),
          cell("Kategori", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 18 }),
          cell("Kode Dokumen", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 20 }),
          cell("Rujukan Standar", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 19 }),
        ],
      }),
      ...FORMULIR_LIST.map(f =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(String(f.nomor), { align: AlignmentType.CENTER, size: 18, width: 5 }),
            cell(f.namaFormulir, { align: AlignmentType.LEFT, size: 18, width: 38 }),
            cell(f.kategori || "FORM", { align: AlignmentType.CENTER, size: 18, width: 18 }),
            cell(`SPMI/PPM/DM/${f.kategori || "FORM"}/${f.kodeFormulir}/2025`, { align: AlignmentType.LEFT, size: 16, width: 20 }),
            cell(f.matchStandar || "-", { align: AlignmentType.LEFT, size: 16, width: 19 }),
          ],
        })
      ),
    ],
  });
  items.push(daftarTable);
  
  // 2.3 Pengelolaan Dokumen
  items.push(h2("2.3 Pengelolaan Dokumen Formulir"));
  
  items.push(body(
    "Pengelolaan dokumen Formulir Mutu di Universitas Tulungagung dilakukan oleh Sekretaris PPM dengan dukungan Administrasi, mengacu pada prinsip-prinsip pengendalian dokumen yang baku. Setiap formulir memiliki kode unik yang menunjukkan kategori, jenis, dan tahun penetapan. Setiap formulir juga memiliki nomor revisi dan tanggal berlaku, yang dikelola melalui sistem pengendalian dokumen. Formulir yang telah diperbarui akan menggantikan formulir lama, dan formulir lama ditarik kembali untuk menghindari kebingungan di lapangan."
  ));
  
  items.push(body(
    "Distribusi formulir dilakukan melalui saluran resmi—baik cetak maupun digital—kepada seluruh unit kerja yang membutuhkan. Setiap unit kerja memiliki penanggung jawab pengelolaan formulir yang bertanggung jawab atas keutuhan dan kekinian formulir di unitnya. PPM melakukan audit berkala terhadap pengelolaan formulir di setiap unit kerja, untuk memastikan bahwa formulir yang digunakan adalah formulir terbaru dan kondisi penyimpanannya memadai. Formulir juga diunggah ke sistem informasi internal Universitas Tulungagung, sehingga dapat diakses oleh seluruh sivitas akademika sesuai dengan kewenangannya."
  ));
  
  items.push(body(
    "Penghapusan formulir yang sudah tidak berlaku dilakukan melalui mekanisme yang diatur dalam SOP Pengendalian Dokumen. Formulir yang akan dihapus harus didaftarkan terlebih dahulu, mendapat persetujuan dari Ketua PPM, dan kemudian dimusnahkan secara aman—tidak disebarluaskan ke pihak yang tidak berwenang. Daftar formulir yang dihapus dicatat dalam riwayat dokumen, untuk keperluan audit dan pelacakan di masa mendatang. Setiap pengisian formulir yang telah selesai didokumentasikan minimal selama 5 tahun, sebagai bukti objektif pelaksanaan SPMI yang dapat diaudit oleh BAN-PT, LAM, atau LLDIKTI pada saat akreditasi atau evaluasi eksternal."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildHeaderUmum, buildKataPengantar, buildBabI, buildBabII };
