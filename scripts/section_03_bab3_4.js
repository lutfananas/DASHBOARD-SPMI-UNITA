// ============================================================
// BAB III: DEFINISI DAN ISTILAH
// BAB IV: KERANGKA SISTEM PENJAMINAN MUTU DIKTI
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB III: DEFINISI DAN ISTILAH
// ============================================================
function buildBabIII() {
  const items = [];
  
  items.push(h1("BAB III\nDEFINISI DAN ISTILAH"));
  
  items.push(body(
    "Dalam dokumen Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung ini, istilah-istilah teknis dan administratif yang digunakan mengacu pada definisi yang telah dibakukan dalam Pasal 1 Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, dilengkapi dengan definisi operasional yang umum digunakan dalam praktik penjaminan mutu di lingkungan perguruan tinggi. Konsistensi pemahaman atas istilah-istilah ini menjadi prasyarat penting agar seluruh pemangku kepentingan—baik internal maupun eksternal—dapat menginterpretasikan dokumen SPMI dengan cara yang sama, sehingga implementasi kebijakan mutu dapat berjalan efektif, akurat, dan akuntabel."
  ));
  
  items.push(body(
    "Definisi dan istilah dalam dokumen SPMI Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const definisi = [
    ["a.", "Penjaminan Mutu Pendidikan Tinggi", "kegiatan sistemik untuk meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["b.", "Standar Nasional Pendidikan Tinggi (SN Dikti)", "satuan standar yang meliputi standar nasional pendidikan ditambah dengan standar penelitian dan standar pengabdian kepada masyarakat."],
    ["c.", "Tridharma Perguruan Tinggi (Tridharma)", "kewajiban perguruan tinggi untuk menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat."],
    ["d.", "Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti)", "rangkaian unsur dan proses terkait mutu pendidikan tinggi yang saling berkaitan dan tersusun secara teratur dalam menjamin dan meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["e.", "Sistem Penjaminan Mutu Internal (SPMI)", "rangkaian unsur dan proses yang saling berkaitan dan tersusun secara teratur dalam rangka menjamin dan meningkatkan mutu pendidikan tinggi di perguruan tinggi secara otonom."],
    ["f.", "Sistem Penjaminan Mutu Eksternal (SPME)", "rangkaian unsur dan proses yang saling berkaitan dan tersusun secara teratur dalam rangka menjamin dan meningkatkan mutu pendidikan tinggi melalui Akreditasi."],
    ["g.", "Akreditasi", "kegiatan penilaian sesuai dengan kriteria yang telah ditetapkan berdasarkan SN Dikti."],
    ["h.", "Masa Tempuh Kurikulum", "waktu teoretis yang dibutuhkan untuk menyelesaikan seluruh beban belajar dalam kurikulum pada suatu program pendidikan tinggi secara penuh waktu."],
    ["i.", "Masa Studi", "waktu yang dibutuhkan oleh mahasiswa untuk menyelesaikan seluruh beban belajar dalam kurikulum pada suatu program pendidikan tinggi yang dapat berbeda dari Masa Tempuh Kurikulum."],
    ["j.", "Pangkalan Data Pendidikan Tinggi (PD Dikti)", "kumpulan data penyelenggaraan pendidikan tinggi seluruh perguruan tinggi yang terintegrasi secara nasional, yang menjadi sumber data dan informasi utama bagi implementasi SPM Dikti."],
    ["k.", "Kementerian", "Kementerian Pendidikan Tinggi, Sains, dan Teknologi yang menyelenggarakan suburusan pemerintahan pendidikan tinggi yang merupakan lingkup urusan pemerintahan di bidang pendidikan dan urusan pemerintahan di bidang ilmu pengetahuan dan teknologi."],
    ["l.", "Menteri", "Menteri Pendidikan Tinggi, Sains, dan Teknologi."],
    ["m.", "Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)", "badan yang dibentuk oleh Pemerintah untuk mengembangkan sistem Akreditasi, melakukan Akreditasi terhadap perguruan tinggi, dan menetapkan status Akreditasi perguruan tinggi."],
    ["n.", "Lembaga Akreditasi Mandiri (LAM)", "lembaga akreditasi mandiri yang dibentuk oleh Pemerintah atau masyarakat yang diakui oleh Pemerintah, yang melakukan Akreditasi terhadap program studi."],
    ["o.", "Mutu Pendidikan Tinggi", "tingkat kesesuaian antara penyelenggaraan pendidikan tinggi dengan standar pendidikan tinggi yang terdiri atas SN Dikti dan Standar Pendidikan Tinggi yang ditetapkan oleh Perguruan Tinggi."],
    ["p.", "Kebijakan SPMI", "dokumen tertulis berisi garis besar penjelasan tentang bagaimana suatu perguruan tinggi memahami, merancang, dan melaksanakan SPMI dalam menyelenggarakan pelayanan pendidikan tinggi kepada masyarakat sehingga terwujud budaya mutu pada perguruan tinggi tersebut."],
    ["q.", "Manual SPMI", "dokumentasi tertulis berisi petunjuk praktis mengenai cara, langkah, atau prosedur tentang bagaimana SPMI dilaksanakan, dievaluasi, dan ditingkatkan mutunya secara berkelanjutan."],
    ["r.", "Standar SPMI", "dokumen tertulis berisi berbagai kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan pendidikan tinggi suatu perguruan tinggi untuk mewujudkan visi dan misinya, agar dapat dinilai bermutu sesuai dengan ketentuan perundang-undangan."],
    ["s.", "Formulir/Borang/Proforma", "dokumen tertulis yang berfungsi untuk mencatat, merekam hal atau informasi atau kegiatan tertentu sebagai bagian yang tak terpisahkan dari standar mutu, manual mutu atau prosedur mutu."],
    ["t.", "Prosedur Mutu", "dokumen tertulis berupa prosedur operasional standar (SOP) yang berfungsi sebagai pedoman untuk mengimplementasikan suatu standar."],
    ["u.", "Evaluasi Diri", "kegiatan setiap unit dalam universitas secara periodik untuk memeriksa, menganalisis, dan menilai kinerjanya sendiri selama kurun waktu tertentu untuk mengetahui kelemahan dan kekurangannya."],
    ["v.", "Audit Mutu Internal (AMI)", "kegiatan yang independen, obyektif, terencana secara sistemik, dan berdasarkan serangkaian bukti dilakukan oleh auditor internal universitas untuk memeriksa pelaksanaan SPMI dan mengevaluasi apakah seluruh standar SPMI telah dicapai/dipenuhi oleh setiap unit di lingkungan universitas."],
    ["w.", "Unit Pengelola Program Studi (UPPS)", "unit yang merencanakan seluruh upaya pengembangan program studi berbasis evaluasi diri yang dilakukan secara komprehensif, terstruktur, dan sistematis. UPPS berada di program sarjana terapan, program profesi, fakultas, dan pascasarjana."],
    ["x.", "Lembaga Penjaminan Mutu (LPM)", "lembaga yang merencanakan, menerapkan, mengendalikan, dan mengembangkan SPMI di fakultas/pascasarjana/program vokasi/program profesi."],
    ["y.", "Gugus Penjaminan Mutu (GKM)", "unsur yang merencanakan, menerapkan, mengendalikan, dan mengembangkan SPMI di Program Studi. GKM terdiri atas minimal satu orang dosen prodi dan sekretaris jurusan/dosen yang ditunjuk."],
    ["z.", "Tim Evaluasi", "tim yang dibentuk dengan SK Rektor untuk melaksanakan evaluasi pada setiap tahapan kegiatan Penetapan, Pelaksanaan, Evaluasi, Pengendalian dan Peningkatan (PPEPP)."],
    ["aa.", "Pembelajaran", "proses interaksi mahasiswa dengan dosen dan sumber belajar pada suatu lingkungan belajar."],
    ["ab.", "Penelitian", "kegiatan yang dilakukan menurut kaidah dan metode ilmiah secara sistematis untuk memperoleh informasi, data, dan keterangan yang berkaitan dengan pemahaman dan/atau pengujian suatu cabang ilmu pengetahuan dan teknologi."],
    ["ac.", "Publikasi Ilmiah", "hasil karya pemikiran seseorang atau sekelompok orang, setelah melalui penelaahan ilmiah disebarluaskan dalam bentuk karya tulis ilmiah, antara lain berupa: jurnal, buku, prosiding, laporan penelitian, makalah, dan poster ilmiah."],
    ["ad.", "Pengabdian Kepada Masyarakat (PkM)", "kegiatan sivitas akademika yang memanfaatkan Ilmu Pengetahuan dan Teknologi untuk memajukan kesejahteraan masyarakat dan mencerdaskan kehidupan bangsa."],
    ["ae.", "Prinsip Triangulasi", "penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi, sebagaimana diatur dalam Pasal 66 Permen 39 Tahun 2025."],
    ["af.", "Tata Kelola Perguruan Tinggi yang Baik", "tata kelola yang didasarkan pada prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan, yang saling menilik dan mengimbangi satu terhadap yang lain, sebagaimana diatur dalam Pasal 67 ayat (2) Permen 39 Tahun 2025."],
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
  
  items.push(body(
    "Definisi-definisi tersebut di atas menjadi rujukan tunggal dalam interpretasi setiap ketentuan yang tertuang dalam dokumen Kebijakan Mutu SPMI Universitas Tulungagung. Apabila di kemudian hari terdapat perubahan definisi pada level regulasi yang lebih tinggi, khususnya pada Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi, maka definisi dalam dokumen ini akan disesuaikan melalui mekanisme peninjauan berkala sebagaimana diatur dalam Bab XV dokumen ini."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB IV: KERANGKA SISTEM PENJAMINAN MUTU DIKTI
// ============================================================
function buildBabIV() {
  const items = [];
  
  items.push(h1("BAB IV\nKERANGKA SISTEM PENJAMINAN MUTU PENDIDIKAN TINGGI"));
  
  items.push(body(
    "Bab ini menjabarkan kerangka Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) yang menjadi payung operasional bagi pelaksanaan SPMI di Universitas Tulungagung. Kerangka ini mengacu pada Bab IV Permen 39 Tahun 2025, khususnya Pasal 65 sampai dengan Pasal 66, serta Pasal 111 yang mengatur tentang Pangkalan Data Pendidikan Tinggi. Pemahaman yang komprehensif terhadap kerangka SPM Dikti menjadi fondasi bagi setiap kebijakan, prosedur, dan aktivitas penjaminan mutu yang dilaksanakan di lingkungan Universitas Tulungagung, sehingga seluruh proses dapat berjalan secara terpadu, akuntabel, dan berbasis bukti."
  ));
  
  // 4.1 SPM Dikti
  items.push(h2("4.1 Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti)"));
  
  items.push(body(
    "Sesuai dengan Pasal 65 ayat (1) Permen 39 Tahun 2025, evaluasi pemenuhan dan relevansi SN Dikti serta standar pendidikan tinggi yang ditetapkan oleh perguruan tinggi dilakukan secara sistemik melalui SPM Dikti. SPM Dikti merupakan rangkaian unsur dan proses terkait mutu pendidikan tinggi yang saling berkaitan dan tersusun secara teratur dalam menjamin dan meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan. Dengan demikian, SPM Dikti bukan sekadar kegiatan administratif, melainkan sistem terintegrasi yang melibatkan berbagai unsur—mulai dari standar, dokumen, proses, lembaga, hingga sumber daya manusia—yang bekerja secara sinergis untuk menjamin mutu."
  ));
  
  items.push(body(
    "Sebagaimana diatur dalam Pasal 65 ayat (3) Permen 39 Tahun 2025, SPM Dikti terdiri atas Sistem Penjaminan Mutu Internal (SPMI) dan Sistem Penjaminan Mutu Eksternal (SPME). SPMI dilaksanakan oleh perguruan tinggi secara otonom, sedangkan SPME dilaksanakan melalui Akreditasi oleh BAN-PT untuk perguruan tinggi dan LAM untuk program studi. Universitas Tulungagung wajib melaksanakan penjaminan mutu internal dengan mengembangkan SPMI, sebagaimana diamanatkan Pasal 67 ayat (1). Dalam mengembangkan SPMI, Universitas Tulungagung menerapkan tata kelola perguruan tinggi yang baik berdasarkan prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan, yang saling menilik dan mengimbangi satu terhadap yang lain."
  ));
  
  // 4.2 Bidang Akademik dan Nonakademik
  items.push(h2("4.2 Bidang Akademik dan Bidang Nonakademik"));
  
  items.push(body(
    "Sesuai Pasal 65 ayat (2) Permen 39 Tahun 2025, SPM Dikti mencakup dua bidang utama, yaitu bidang akademik dan bidang nonakademik. Bidang akademik sebagaimana dimaksud pada Pasal 65 ayat (3) berkaitan dengan Tridharma Perguruan Tinggi, yaitu pendidikan, penelitian, dan pengabdian kepada masyarakat. Sementara itu, bidang nonakademik sebagaimana dimaksud pada Pasal 65 ayat (4) meliputi organisasi, keuangan, kemahasiswaan, ketenagaan, dan sarana prasarana. Pemisahan ini tidak berarti kedua bidang berdiri sendiri, melainkan saling melengkapi dan menopang satu sama lain. Mutu Tridharma tidak dapat dicapai tanpa dukungan organisasi yang sehat, keuangan yang transparan, kemahasiswaan yang aktif, ketenagaan yang kompeten, serta sarana prasarana yang memadai."
  ));
  
  items.push(body(
    "Universitas Tulungagung menerapkan SPMI pada kedua bidang tersebut secara komprehensif. Pada bidang akademik, SPMI mencakup delapan Standar Pendidikan, delapan Standar Penelitian, dan delapan Standar Pengabdian kepada Masyarakat, ditambah dengan standar tambahan sebagai pelampauan SN Dikti. Pada bidang nonakademik, SPMI mencakup standar terkait organisasi (tata pamong dan tata kelola), keuangan, kemahasiswaan (layanan mahasiswa), ketenagaan (sumber daya manusia), serta sarana dan prasarana. Setiap standar dikelola melalui siklus PPEPP yang konsisten dan terdokumentasi, dengan hasil evaluasi yang ditindaklanjuti melalui mekanisme pengendalian dan peningkatan."
  ));
  
  items.push(body(
    "Tabel berikut menggambarkan cakupan bidang akademik dan nonakademik dalam SPMI Universitas Tulungagung:"
  ));
  
  const bidangTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Bidang", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Cakupan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 30 }),
          cell("Komponen Standar", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Akademik", { align: AlignmentType.CENTER, bold: true, width: 20 }),
          cell("Tridharma Perguruan Tinggi", { align: AlignmentType.LEFT, width: 30 }),
          cell("Standar Pendidikan (8), Standar Penelitian (8), Standar Pengabdian kepada Masyarakat (8)", { align: AlignmentType.LEFT, width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Nonakademik", { align: AlignmentType.CENTER, bold: true, width: 20 }),
          cell("Organisasi, Keuangan, Kemahasiswaan, Ketenagaan, Sarana Prasarana", { align: AlignmentType.LEFT, width: 30 }),
          cell("Standar Tata Pamong & Tata Kelola, Standar Keuangan/Sarpras, Standar Mahasiswa, Standar SDM, Standar Pelayanan Kepada Mahasiswa, Standar Kerjasama, Standar MBKM, Standar Luaran & Capaian Tridharma", { align: AlignmentType.LEFT, width: 50 }),
        ],
      }),
    ],
  });
  items.push(bidangTable);
  
  items.push(body(
    "Cakupan tersebut menunjukkan bahwa tidak ada aspek penyelenggaraan Universitas Tulungagung yang berada di luar jangkauan SPMI. Setiap unit kerja, dari tingkat program studi hingga tingkat universitas, wajib menerapkan standar mutu yang relevan dengan fungsi dan tanggung jawabnya, dengan dukungan PPM, LPM, dan GKM sebagai pelaksana SPMI di masing-masing aras."
  ));
  
  // 4.3 Prinsip Triangulasi
  items.push(h2("4.3 Prinsip Triangulasi Data"));
  
  items.push(body(
    "Salah satu prinsip baru yang ditegaskan dalam Permen 39 Tahun 2025 adalah prinsip triangulasi data. Sesuai Pasal 66 ayat (1), SPM Dikti dilakukan berdasarkan PD Dikti dengan prinsip triangulasi. Pasal 66 ayat (2) mendefinisikan prinsip triangulasi sebagai penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi. Prinsip ini menjadi sangat penting karena SPM Dikti tidak lagi hanya bertumpu pada laporan diri perguruan tinggi (self-report), melainkan harus divalidasi melalui sumber data lain yang independen, sehingga temuan dan keputusan yang dihasilkan benar-benar akurat dan dapat dipertanggungjawabkan."
  ));
  
  items.push(body(
    "Dalam implementasinya di Universitas Tulungagung, prinsip triangulasi diterapkan melalui penggunaan minimal tiga sumber data yang saling melengkapi, yaitu: (1) data primer dari PD Dikti, termasuk data mahasiswa, dosen, kurikulum, lulusan, dan hasil Tridharma; (2) data hasil pemantauan dan evaluasi internal yang dilakukan oleh PPM, LPM, dan GKM melalui pemantauan rutin, evaluasi diri, dan Audit Mutu Internal (AMI); serta (3) data dari pemangku kepentingan eksternal, seperti hasil akreditasi BAN-PT/LAM, umpan balik pengguna lulusan, masukan dari dunia usaha/dunia industri (DUDI), serta pengaduan masyarakat. Ketiga sumber data ini saling memvalidasi, sehingga setiap kesimpulan yang ditarik tentang kinerja universitas memiliki dasar yang kuat dan objektif."
  ));
  
  items.push(body(
    "Penerapan prinsip triangulasi memerlukan kapasitas pengelolaan data yang baik di setiap unit kerja. Universitas Tulungagung memastikan bahwa setiap data yang diinput ke PD Dikti adalah data yang benar, akurat, dan tepat waktu, sebagaimana diamanatkan Pasal 111 ayat (4) Permen 39 Tahun 2025. Perguruan tinggi bertanggung jawab terhadap kebenaran dan ketepatan data dan informasi PD Dikti. Pelanggaran terhadap kewajiban ini dapat berdampak pada status akreditasi dan kepercayaan publik. Oleh karena itu, Universitas Tulungagung menempatkan integritas data sebagai prioritas tertinggi dalam pelaksanaan SPMI, dengan sistem verifikasi berlapis dan audit independen yang dilakukan secara berkala."
  ));
  
  items.push(body(
    "Tabel berikut menggambarkan implementasi prinsip triangulasi di Universitas Tulungagung:"
  ));
  
  const triangulasiTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Sumber Data", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Bentuk Data", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 40 }),
          cell("Penanggung Jawab", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("PD Dikti (Data Primer)", { align: AlignmentType.LEFT, bold: true, width: 25 }),
          cell("Data mahasiswa, dosen, kurikulum, lulusan, hasil Tridharma, status akreditasi", { align: AlignmentType.LEFT, width: 40 }),
          cell("UPT Sistem Informasi; BAA; BAKU; LPPM; UPPS", { align: AlignmentType.LEFT, width: 35 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Evaluasi Internal", { align: AlignmentType.LEFT, bold: true, width: 25 }),
          cell("Hasil AMI, evaluasi diri, monitoring rutin, Rapat Tinjauan Manajemen", { align: AlignmentType.LEFT, width: 40 }),
          cell("Pusat Penjaminan Mutu (PPM); LPM Fakultas; GKM Prodi", { align: AlignmentType.LEFT, width: 35 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Stakeholder Eksternal", { align: AlignmentType.LEFT, bold: true, width: 25 }),
          cell("Hasil akreditasi BAN-PT/LAM, umpan balik pengguna lulusan, masukan DUDI, pengaduan masyarakat", { align: AlignmentType.LEFT, width: 40 }),
          cell("PPM; LPPM; Pusat Karir; UPPS", { align: AlignmentType.LEFT, width: 35 }),
        ],
      }),
    ],
  });
  items.push(triangulasiTable);
  
  // 4.4 PD Dikti
  items.push(h2("4.4 Pangkalan Data Pendidikan Tinggi (PD Dikti)"));
  
  items.push(body(
    "Sesuai Pasal 111 ayat (1) Permen 39 Tahun 2025, PD Dikti merupakan sumber data dan informasi utama bagi implementasi SPM Dikti. PD Dikti direncanakan, dilaksanakan, dievaluasi, dikendalikan, dikembangkan, dan dikelola oleh Kementerian (Pasal 111 ayat 2). Cakupan data dan informasi pada PD Dikti dikembangkan secara berkelanjutan untuk memenuhi kebutuhan penjaminan mutu pendidikan tinggi (Pasal 111 ayat 3). Universitas Tulungagung, sebagai bagian dari ekosistem pendidikan tinggi nasional, wajib berkontribusi aktif dalam pengelolaan PD Dikti dengan memastikan bahwa setiap data yang diinput adalah data yang benar, akurat, dan tepat waktu."
  ));
  
  items.push(body(
    "Universitas Tulungagung menempatkan PD Dikti sebagai sumber data primer bagi seluruh aktivitas SPMI. Setiap keputusan strategis terkait mutu—mulai dari penyusunan standar, evaluasi pelaksanaan, hingga peningkatan mutu—berbasis pada data yang terdokumentasi dalam PD Dikti. Universitas Tulungagung juga memanfaatkan PD Dikti sebagai dasar untuk menyusun laporan AMI, bahan Rapat Tinjauan Manajemen (RTM), serta dokumen pendukung akreditasi. Selain itu, sebagaimana diatur dalam Pasal 112 ayat (1), Universitas Tulungagung mengumumkan status Akreditasi perguruan tinggi dan program studi kepada masyarakat, sehingga transparansi dan akuntabilitas terhadap publik terjamin."
  ));
  
  items.push(body(
    "Untuk memastikan integritas data PD Dikti, Universitas Tulungagung menerapkan mekanisme berlapis: (a) setiap unit kerja memiliki penanggung jawab penginputan data yang ditetapkan secara resmi; (b) terdapat verifikator internal di tingkat fakultas dan universitas yang memeriksa kebenaran data sebelum dipublikasikan; (c) PPM melakukan audit berkala terhadap konsistensi data antara PD Dikti dengan dokumen internal unit kerja; dan (d) setiap penyimpangan data ditindaklanjuti melalui mekanisme koreksi dan tindakan disiplin sesuai ketentuan yang berlaku. Dengan mekanisme ini, Universitas Tulungagung memastikan bahwa data yang digunakan untuk pengambilan keputusan mutu adalah data yang valid dan dapat dipertanggungjawabkan."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabIII, buildBabIV };
