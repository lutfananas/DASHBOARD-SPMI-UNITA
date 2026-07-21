// ============================================================
// BAB VI, VII, VIII
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./manual_mutu_core.js");

// ============================================================
// BAB VI MANUAL EVALUASI STANDAR MUTU
// ============================================================
function buildBabVI() {
  const items = [];
  
  items.push(h1("BAB VI\nMANUAL EVALUASI STANDAR MUTU"));
  
  // 6.1 Definisi
  items.push(h2("6.1 Definisi Manual Evaluasi Standar Mutu UNITA"));
  
  items.push(body(
    "Manual Evaluasi Standar Mutu UNITA adalah dokumen yang berisi petunjuk teknis mengenai cara, langkah, dan prosedur untuk mengevaluasi pemenuhan standar mutu yang telah dilaksanakan di lingkungan Universitas Tulungagung. Sesuai dengan Pasal 68 ayat (2) Permen 39 Tahun 2025, evaluasi pemenuhan standar pendidikan tinggi dilaksanakan secara berkala melalui pemantauan, evaluasi diri, audit mutu internal, asesmen, dan/atau cara lain yang ditetapkan perguruan tinggi. Manual Evaluasi ini menjadi panduan bagi seluruh unit kerja dalam melaksanakan evaluasi secara konsisten, objektif, dan terdokumentasi, sehingga hasil evaluasi dapat menjadi basis yang kuat bagi tahap pengendalian dan peningkatan."
  ));
  
  items.push(body(
    "Evaluasi standar mutu di UNITA dilaksanakan oleh pejabat atau dosen yang ditugaskan oleh pimpinan perguruan tinggi, sebagaimana diatur dalam Pasal 68 ayat (3) Permen 39 Tahun 2025. Auditor internal yang ditugaskan harus memiliki kompetensi yang relevan dan tidak boleh mengaudit unit kerjanya sendiri, untuk menjaga objektivitas. Hasil evaluasi didokumentasikan secara sistematis, dan menjadi input bagi Rapat Tinjauan Manajemen (RTM) yang membahas kinerja SPMI secara menyeluruh."
  ));
  
  // 6.2 Tujuan
  items.push(h2("6.2 Tujuan Evaluasi Standar Mutu UNITA"));
  
  items.push(body(
    "Tujuan evaluasi standar mutu adalah: (a) memastikan bahwa pelaksanaan standar mutu di seluruh unit kerja sesuai dengan ketentuan yang telah ditetapkan; (b) mengidentifikasi kesenjangan antara pelaksanaan dengan standar yang ditetapkan, sehingga dapat dirumuskan tindakan koreksi yang tepat; (c) mengidentifikasi praktik baik yang dapat direplikasi ke unit kerja lain; (d) memberikan basis objektif bagi pengambilan keputusan oleh manajemen puncak melalui RTM; serta (e) memenuhi amanat Pasal 68 Permen 39 Tahun 2025 terkait pelaksanaan evaluasi pemenuhan standar pendidikan tinggi secara berkala."
  ));
  
  items.push(body(
    "Selain tujuan-tujuan tersebut, evaluasi standar mutu juga bertujuan untuk memperkuat akuntabilitas eksternal Universitas Tulungagung. Hasil evaluasi internal menjadi bahan persiapan untuk akreditasi eksternal oleh BAN-PT atau LAM, sebagaimana diatur dalam Pasal 70-83 Permen 39 Tahun 2025. Dengan evaluasi internal yang kuat, Universitas Tulungagung dapat lebih siap menghadapi evaluasi eksternal, dan memiliki dokumen pendukung yang lengkap saat proses akreditasi dilaksanakan."
  ));
  
  // 6.3 Lingkup
  items.push(h2("6.3 Lingkup Evaluasi Standar Mutu UNITA"));
  
  items.push(body(
    "Lingkup evaluasi standar mutu di Universitas Tulungagung mencakup dua aspek utama, yaitu aspek manajemen dan aspek sumber daya manusia. Pembagian lingkup ini memungkinkan fokus evaluasi yang lebih tajam dan sesuai dengan karakteristik masing-masing aspek."
  ));
  
  items.push(h3("a. Aspek Manajemen"));
  
  items.push(body(
    "Lingkup evaluasi standar mutu pada aspek manajemen meliputi Permintaan Tindakan Koreksi (PTK), hasil AMI, hasil monitoring dan evaluasi IKU, hasil survey kepuasan, dan Hasil Rapat Tinjauan Manajemen (RTM). Aspek manajemen mencakup seluruh proses pengelolaan Universitas Tulungagung, mulai dari perencanaan, pelaksanaan, monitoring, hingga evaluasi. Evaluasi aspek manajemen fokus pada kepatuhan terhadap prosedur yang ditetapkan, efektivitas pencapaian target, dan efisiensi penggunaan sumber daya."
  ));
  
  items.push(h3("b. Aspek Sumber Daya Manusia"));
  
  items.push(body(
    "Lingkup evaluasi standar mutu pada aspek sumber daya manusia meliputi Rapat Tinjauan Manajemen (RTM) dan Rencana Tindak Lanjut (RTL) sebagai pengendalian. Aspek SDM mencakup dosen, tenaga kependidikan, dan pejabat struktural. Evaluasi aspek SDM fokus pada kualifikasi, kompetensi, beban kerja, kinerja, dan pengembangan kapasitas. Hasil evaluasi SDM menjadi basis bagi kebijakan mutasi, promosi, pelatihan, dan pengembangan karir."
  ));
  
  // 6.4 Mekanisme Evaluasi
  items.push(h2("6.4 Mekanisme Evaluasi"));
  
  items.push(body(
    "Sesuai Pasal 68 ayat (2) Permen 39 Tahun 2025, evaluasi pemenuhan standar pendidikan tinggi dilaksanakan secara berkala melalui lima mekanisme utama: (a) pemantauan; (b) evaluasi diri; (c) audit mutu internal; (d) asesmen; dan (e) cara lain yang ditetapkan perguruan tinggi. Universitas Tulungagung menerapkan kelima mekanisme tersebut secara terintegrasi, dengan pembagian peran yang jelas antara PPM, LPM, GKM, dan UPPS."
  ));
  
  items.push(body(
    "Pemantauan dilakukan secara rutin oleh pejabat struktural di setiap unit kerja, melalui rapat rutin, observasi, dan analisis data. Evaluasi diri dilakukan secara berkala oleh setiap unit kerja menggunakan instrumen evaluasi diri yang disiapkan PPM. Audit Mutu Internal (AMI) dilakukan oleh auditor internal yang ditugaskan oleh PPM, dengan jadwal yang ditetapkan secara tahunan. Asesmen dilakukan oleh pihak eksternal—seperti asesor BAN-PT/LAM atau lembaga asesor independen—pada saat akreditasi atau evaluasi eksternal. Cara lain yang ditetapkan perguruan tinggi mencakup benchmarking, tracer study, dan survey kepuasan pemangku kepentingan."
  ));
  
  // 6.5 AMI
  items.push(h2("6.5 Audit Mutu Internal (AMI)"));
  
  items.push(body(
    "Audit Mutu Internal (AMI) adalah mekanisme evaluasi sumatif yang dilakukan oleh auditor internal Universitas Tulungagung terhadap pelaksanaan SPMI di setiap unit kerja. AMI merupakan instrumen utama dalam tahap Evaluasi (E) pada siklus PPEPP, dan menjadi basis utama bagi Rapat Tinjauan Manajemen (RTM). AMI dilaksanakan secara independen dari unit yang diaudit, sehingga hasilnya objektif dan dapat dipertanggungjawabkan. Auditor internal terdiri atas dosen dan pejabat yang telah mengikuti pelatihan auditor internal dan memiliki sertifikat yang relevan."
  ));
  
  items.push(body(
    "Tahapan pelaksanaan AMI di Universitas Tulungagung meliputi: (a) PPM menetapkan kebijakan AMI tahunan, mencakup ruang lingkup, jadwal, auditor, dan kriteria penilaian; (b) AMI dijalankan sesuai dengan pedoman AMI yang telah ditetapkan oleh PPM dan disahkan oleh Rektor; (c) AMI dijalankan sesuai dengan SOP audit yang dikeluarkan oleh PPM, termasuk SOP persiapan, pelaksanaan, pelaporan, dan tindak lanjut; (d) auditee menyusun evaluasi diri sesuai dengan pelaksanaan standar di masing-masing unit, dengan menggunakan instrumen evaluasi diri yang telah disiapkan PPM; (e) auditor melakukan audit kesesuaian pada masing-masing unit, melalui penelaahan dokumen, observasi, wawancara, dan verifikasi data; (f) auditor menyusun laporan audit yang berisi temuan, analisis, dan rekomendasi, dan menyerahkan kepada PPM untuk kompilasi; (g) PPM menyusun laporan kompilasi AMI tingkat universitas dan menyampaikan kepada Rektor; (h) hasil AMI wajib ditindaklanjuti dan dibahas dalam RTM."
  ));
  
  // 6.6 Prinsip Triangulasi
  items.push(h2("6.6 Prinsip Triangulasi dalam Evaluasi"));
  
  items.push(body(
    "Sesuai Pasal 66 Permen 39 Tahun 2025, SPM Dikti dilakukan berdasarkan PD Dikti dengan prinsip triangulasi. Prinsip triangulasi adalah penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi. Dalam konteks evaluasi SPMI di Universitas Tulungagung, prinsip triangulasi diterapkan melalui penggunaan minimal tiga sumber data: (a) data primer dari PD Dikti; (b) data hasil pemantauan dan evaluasi internal; serta (c) data dari pemangku kepentingan eksternal, seperti hasil akreditasi BAN-PT/LAM, umpan balik pengguna lulusan, masukan DUDI, serta pengaduan masyarakat."
  ));
  
  items.push(body(
    "Penerapan prinsip triangulasi dalam evaluasi memastikan bahwa setiap kesimpulan yang ditarik tentang kinerja unit kerja memiliki dasar yang kuat dan objektif. Selain itu, prinsip ini juga memperkuat integritas data, karena setiap data yang dilaporkan oleh unit kerja dapat divalidasi melalui sumber data lain yang independen. Pelanggaran terhadap prinsip triangulasi—seperti laporan yang hanya berdasarkan self-report tanpa validasi—dapat berdampak pada kredibilitas hasil evaluasi dan status akreditasi."
  ));
  
  // 6.7 Potensi dan Mitigasi Risiko
  items.push(h2("6.7 Potensi dan Mitigasi Risiko Tahapan Evaluasi"));
  
  items.push(h3("a. Aspek Manajemen"));
  
  items.push(body("Potensi Risiko:", { spacing: { after: 60 } }));
  const risikoManajemen = [
    "1. Risiko Kebijakan: kebijakan evaluasi yang tidak konsisten atau tidak selaras dengan regulasi;",
    "2. Risiko Kepatuhan: unit kerja tidak menyampaikan data yang sebenarnya;",
    "3. Risiko Operasional: pelaksanaan AMI terhambat oleh ketidaktersediaan dokumen atau auditor;",
    "4. Risiko Reputasi: hasil evaluasi yang tidak menggembirakan dapat berdampak pada citra UNITA.",
  ];
  risikoManajemen.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Mitigasi Risiko:", { spacing: { before: 200, after: 60 } }));
  const mitigasiManajemen = [
    "1. Melakukan sinkronisasi peraturan internal terkait pelaksanaan pengendalian;",
    "2. Menyusun SOP terkait pengendalian penjaminan mutu;",
    "3. Melakukan monitoring pelaksanaan pengendalian secara berkala;",
    "4. Melakukan koordinasi secara berkala di seluruh unit terkait tindak lanjut hasil audit internal.",
  ];
  mitigasiManajemen.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(h3("b. Aspek Sumber Daya Manusia"));
  
  items.push(body("Potensi Risiko:", { spacing: { after: 60 } }));
  const risikoSDM = [
    "1. Risiko Kebijakan: kebijakan mutasi tenaga kependidikan yang tidak sesuai dengan kapasitas dan kemampuan;",
    "2. Risiko Kepatuhan: sumber daya manusia yang tidak taat pada peraturan;",
    "3. Risiko Operasional: tidak berjalannya sistem yang ada, baik secara internal (ketidakmampuan) maupun eksternal;",
    "4. Risiko Reputasi: menurunnya kepercayaan terhadap sumber daya manusia, baik dosen maupun tenaga kependidikan.",
  ];
  risikoSDM.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Mitigasi Risiko:", { spacing: { before: 200, after: 60 } }));
  const mitigasiSDM = [
    "1. Penerapan SOP terkait pengelolaan SDM;",
    "2. Publikasi hasil survei tahun sebelumnya untuk ditindaklanjuti;",
    "3. Pelatihan berkala untuk peningkatan kapasitas SDM;",
    "4. Sistem penghargaan dan sanksi yang jelas dan konsisten.",
  ];
  mitigasiSDM.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB VII MANUAL PENGENDALIAN STANDAR MUTU
// ============================================================
function buildBabVII() {
  const items = [];
  
  items.push(h1("BAB VII\nMANUAL PENGENDALIAN STANDAR MUTU"));
  
  // 7.1 Definisi
  items.push(h2("7.1 Definisi Manual Pengendalian Standar Mutu UNITA"));
  
  items.push(body(
    "Manual pengendalian standar mutu PPM UNITA adalah serangkaian aktivitas monitoring dan evaluasi terhadap proses perencanaan, pelaksanaan, dan evaluasi sesuai standar mutu yang ditetapkan melalui Audit Mutu Internal (AMI). Pengendalian merupakan tahapan dalam siklus PPEPP yang dilakukan setelah evaluasi, sebagai tindak lanjut atas hasil evaluasi. Sesuai dengan Pasal 68 ayat (4) Permen 39 Tahun 2025, siklus kegiatan PPEPP digunakan untuk menjamin pemenuhan standar pendidikan tinggi, sehingga pengendalian menjadi bagian integral dari mekanisme penjaminan mutu."
  ));
  
  // 7.2 Tujuan
  items.push(h2("7.2 Tujuan Pengendalian Standar Mutu UNITA"));
  
  items.push(body(
    "Tujuan pengendalian standar mutu adalah untuk memastikan program dilaksanakan sesuai dengan standar mutu yang ditetapkan. Selain itu, pengendalian juga bertujuan untuk: (a) menutup kesenjangan antara pelaksanaan dengan standar yang ditetapkan; (b) memitigasi risiko yang teridentifikasi pada tahap evaluasi; (c) memastikan tindakan koreksi dilakukan secara cepat dan tepat; (d) mempertahankan dan memperkuat praktik baik yang telah diidentifikasi; serta (e) memastikan bahwa hasil AMI dan RTM ditindaklanjuti secara efektif."
  ));
  
  // 7.3 Lingkup
  items.push(h2("7.3 Lingkup Pengendalian Standar Mutu UNITA"));
  
  items.push(body(
    "Lingkup pengendalian standar mutu di Universitas Tulungagung mencakup dua aspek utama, yaitu aspek manajemen dan aspek sumber daya manusia, sebagaimana halnya dengan lingkup evaluasi. Pengendalian pada aspek manajemen mencakup tindak lanjut atas Permintaan Tindakan Koreksi (PTK), tindak lanjut hasil AMI, tindak lanjut monitoring dan evaluasi IKU, tindak lanjut survey kepuasan, serta tindak lanjut Hasil RTM. Pengendalian pada aspek SDM mencakup RTM dan RTL sebagai instrumen pengendalian kinerja SDM."
  ));
  
  // 7.4 Tabel Alternatif Langkah Pengendalian
  items.push(h2("7.4 Alternatif Langkah Pengendalian"));
  
  items.push(body(
    "Sesuai dengan hasil evaluasi yang diperoleh, terdapat empat alternatif langkah pengendalian yang dapat dilakukan oleh Universitas Tulungagung, sebagaimana dijabarkan dalam tabel berikut:"
  ));
  
  const pengendalianTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Kemungkinan Kesimpulan Evaluasi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Alternatif Langkah Pengendalian", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 65 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Mencapai Standar dalam SPMI", { align: AlignmentType.LEFT, bold: true, width: 35 }),
          cell("UNITA mempertahankan pencapaian standar dan berupaya meningkatkan standar dalam SPMI melalui inovasi dan pengembangan berkelanjutan.", { align: AlignmentType.LEFT, width: 65 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Melampaui Standar dalam SPMI", { align: AlignmentType.LEFT, bold: true, width: 35 }),
          cell("UNITA mempertahankan pelampauan dan berupaya lebih meningkatkan standar dalam SPMI, sekaligus mendokumentasikan praktik baik untuk replikasi.", { align: AlignmentType.LEFT, width: 65 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Belum Mencapai Standar dalam SPMI", { align: AlignmentType.LEFT, bold: true, width: 35 }),
          cell("UNITA melakukan tindakan koreksi pelaksanaan agar standar dalam SPMI dapat dicapai, dengan target waktu yang jelas dan penanggung jawab yang ditetapkan.", { align: AlignmentType.LEFT, width: 65 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Menyimpang dari Standar dalam SPMI", { align: AlignmentType.LEFT, bold: true, width: 35 }),
          cell("UNITA melakukan tindakan koreksi pelaksanaan agar pelaksanaan standar kembali pada standar yang telah ditetapkan, dengan eskalasi ke pimpinan apabila penyimpangan berulang.", { align: AlignmentType.LEFT, width: 65 }),
        ],
      }),
    ],
  });
  items.push(pengendalianTable);
  
  // 7.5 Langkah-langkah
  items.push(h2("7.5 Langkah-langkah Pengendalian Standar Mutu UNITA"));
  
  items.push(h3("a. Aspek Manajemen"));
  
  items.push(body(
    "Langkah-langkah pelaksanaan standar mutu pada aspek manajemen adalah sebagai berikut:"
  ));
  
  const langkahManajemen = [
    "1. Melakukan tindak lanjut atas Permintaan Tindakan Koreksi (PTK) yang dikeluarkan oleh auditor;",
    "2. Melakukan diseminasi hasil AMI supporting units kepada seluruh pemangku kepentingan internal;",
    "3. Melakukan diseminasi hasil monitoring dan evaluasi IKU kepada pimpinan dan unit kerja terkait;",
    "4. Melakukan diseminasi hasil survey kepuasan kepada pemangku kepentingan, termasuk mahasiswa dan lulusan;",
    "5. Menyusun Rapat Tinjauan Manajemen (RTM) dengan agenda yang lengkap sesuai standar;",
    "6. Melakukan analisa dan kajian Early Warning System dari hasil Monev untuk mengidentifikasi risiko yang sedang berkembang.",
  ];
  langkahManajemen.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(h3("b. Aspek Sumber Daya Manusia"));
  
  items.push(body(
    "Langkah-langkah pengendalian standar mutu pada aspek SDM mencakup: (a) pelaksanaan RTM sebagai forum evaluasi kinerja SDM; (b) penyusunan Rencana Tindak Lanjut (RTL) sebagai instrumen pengendalian; (c) monitoring pelaksanaan RTL oleh PPM dan SPI; (d) evaluasi efektivitas RTL pada RTM berikutnya; serta (e) penyesuaian kebijakan SDM berdasarkan hasil evaluasi, termasuk mutasi, promosi, pelatihan, dan pengembangan karir."
  ));
  
  // 7.6 Potensi dan Mitigasi Risiko
  items.push(h2("7.6 Potensi dan Mitigasi Risiko Tahapan Pengendalian"));
  
  items.push(body(
    "Potensi risiko pada tahapan pengendalian antara lain: (a) Risiko Kebijakan—tindakan koreksi yang ditetapkan tidak sesuai dengan akar masalah; (b) Risiko Kepatuhan—unit kerja tidak melaksanakan tindakan koreksi yang telah ditetapkan; (c) Risiko Operasional—pelaksanaan tindakan koreksi terhambat oleh keterbatasan sumber daya; (d) Risiko Reputasi—tindakan koreksi yang terlambat dapat berdampak pada citra UNITA."
  ));
  
  items.push(body(
    "Mitigasi risiko pada tahapan pengendalian dilakukan melalui: (a) analisis akar masalah yang mendalam sebelum menetapkan tindakan koreksi; (b) penetapan penanggung jawab dan target waktu yang jelas untuk setiap tindakan koreksi; (c) monitoring berkala oleh PPM terhadap pelaksanaan tindakan koreksi; (d) eskalasi ke pimpinan apabila tindakan koreksi tidak dilaksanakan; (e) dokumentasi sistematis atas setiap tindakan koreksi untuk pembelajaran di masa mendatang."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB VIII MANUAL PENINGKATAN STANDAR MUTU
// ============================================================
function buildBabVIII() {
  const items = [];
  
  items.push(h1("BAB VIII\nMANUAL PENINGKATAN STANDAR MUTU"));
  
  // 8.1 Definisi
  items.push(h2("8.1 Definisi Manual Peningkatan Standar Mutu UNITA"));
  
  items.push(body(
    "Manual Peningkatan Standar Mutu UNITA merupakan dokumen yang berisi tentang petunjuk teknis, cara, dan langkah peningkatan standar di lingkungan Universitas Tulungagung. Manual ini merangkum peningkatan isi standar mutu untuk menjadi pedoman pencapaian perbaikan mutu standar di tingkat Internal dan Eksternal yang dilakukan secara periodik dengan mendasarkan pada siklus berkelanjutan dan hasil evaluasi pelaksanaan standar yang telah ditetapkan sebelumnya. Peningkatan mutu dilakukan dengan memperhatikan perkembangan situasi dan kondisi yang berlangsung pada tingkat lokal, nasional, regional, dan internasional, serta mempertimbangkan relevansinya dengan visi dan misi Universitas Tulungagung."
  ));
  
  items.push(body(
    "Peningkatan standar mutu merupakan wujud nyata komitmen Universitas Tulungagung terhadap amanat Pasal 3 ayat (1) huruf d Permen 39 Tahun 2025, yaitu mendorong perguruan tinggi untuk secara berkelanjutan meningkatkan mutu melampaui SN Dikti. Peningkatan juga merupakan implementasi prinsip Kaizen—yaitu perbaikan berkelanjutan yang berasal dari filosofi manajemen mutu modern—di mana setiap siklus PPEPP harus menghasilkan peningkatan minimal pada satu aspek mutu, sehingga terjadi akumulasi peningkatan dari waktu ke waktu yang signifikan."
  ));
  
  // 8.2 Tujuan
  items.push(h2("8.2 Tujuan Peningkatan Standar Mutu UNITA"));
  
  items.push(body(
    "Peningkatan standar mutu dilakukan untuk meningkatkan capaian kinerja Universitas Tulungagung dalam pelaksanaan Renstra yang telah ditetapkan, yang dapat dijabarkan sebagai berikut:"
  ));
  
  const tujuanPeningkatan = [
    "1. Untuk meningkatkan Standar Mutu UNITA secara berkesinambungan pada setiap akhir siklus setiap standar mutu Universitas Tulungagung;",
    "2. Untuk mendapatkan informasi menyeluruh tentang kelebihan dan kekurangan Standar Mutu UNITA di Universitas Tulungagung;",
    "3. Untuk melakukan diversifikasi Standar Mutu UNITA, sehingga dapat mengakomodasi kebutuhan spesifik setiap program studi dan unit kerja;",
    "4. Untuk memenuhi amanat Pasal 3 ayat (1) huruf d Permen 39 Tahun 2025, yaitu mendorong perguruan tinggi untuk secara berkelanjutan meningkatkan mutu melampaui SN Dikti;",
    "5. Untuk memperkuat posisi Universitas Tulungagung dalam memperoleh status akreditasi terakreditasi unggul, sebagaimana diatur dalam Pasal 73 dan Pasal 74 Permen 39 Tahun 2025.",
  ];
  tujuanPeningkatan.forEach(t => items.push(bodyNoIndent(t)));
  
  // 8.3 Lingkup
  items.push(h2("8.3 Lingkup Peningkatan Standar Mutu UNITA"));
  
  items.push(body(
    "Lingkup peningkatan Standar Mutu UNITA meliputi tiga aspek utama, yaitu: (a) peningkatan standar mutu layanan manajemen, mencakup tata kelola, organisasi, keuangan, dan administrasi; (b) peningkatan standar mutu layanan pendidikan, penelitian, dan pengabdian masyarakat (Tridharma); serta (c) peningkatan standar mutu layanan penunjang, mencakup sarana prasarana, sistem informasi, kemahasiswaan, dan kerjasama. Setiap aspek ditingkatkan secara berkelanjutan melalui siklus PPEPP, dengan mempertimbangkan hasil evaluasi dan masukan dari pemangku kepentingan."
  ));
  
  // 8.4 Potensi dan Mitigasi Risiko
  items.push(h2("8.4 Potensi dan Mitigasi Risiko Tahapan Peningkatan"));
  
  items.push(body(
    "Pelaksanaan peningkatan standar mutu UNITA memiliki potensi risiko sehingga perlu adanya upaya mitigasi. Potensi dan mitigasi risiko itu dapat dijelaskan sebagai berikut:"
  ));
  
  const risikoPeningkatan = [
    "1. Risiko Kebijakan: terkait dengan proses dan mekanisme penetapan kebijakan di tingkat pimpinan Universitas, termasuk kemungkinan kebijakan peningkatan yang tidak didukung oleh seluruh pemangku kepentingan;",
    "2. Risiko Kepatuhan: terkait dengan realisasi pada tingkat pelaksana, termasuk kemungkinan unit kerja yang tidak melaksanakan standar baru yang telah ditetapkan;",
    "3. Risiko Operasional: terkait dengan teknis pelaksanaan kebijakan yang telah ditetapkan, termasuk kemungkinan sumber daya yang tidak mencukupi untuk pelaksanaan standar baru;",
    "4. Risiko Reputasi: terkait dengan akibat dari pelaksanaan kebijakan yang akan memberi pengaruh pada reputasi UNITA di tingkat nasional maupun internasional.",
  ];
  risikoPeningkatan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Mitigasi risiko pada tahapan peningkatan dilakukan melalui: (a) konsultasi dengan Senat dan badan penyelenggara sebelum menetapkan standar baru; (b) sosialisasi intensif terhadap standar baru kepada seluruh pemangku kepentingan; (c) penyediaan sumber daya yang memadai untuk pelaksanaan standar baru; (d) monitoring berkala oleh PPM terhadap pelaksanaan standar baru; (e) evaluasi efektivitas standar baru setelah satu siklus PPEPP; serta (f) penyesuaian standar baru berdasarkan hasil evaluasi."
  ));
  
  // 8.5 Langkah-langkah
  items.push(h2("8.5 Langkah-langkah Peningkatan Standar Mutu UNITA"));
  
  items.push(body(
    "Peningkatan Standar Mutu UNITA dilakukan melalui langkah-langkah berurutan sebagai berikut:"
  ));
  
  const langkah = [
    "1. Peningkatan Standar Mutu UNITA diawali dengan Penetapan Standar Mutu yang akan menjadi acuan dalam pelaksanaan setiap kegiatan yang berlangsung di lingkungan Universitas Tulungagung;",
    "2. Langkah selanjutnya adalah menetapkan Indikator Kinerja baru yang akan menjadi panduan ketercapaian kinerja Universitas Tulungagung;",
    "3. Penetapan Pengembangan Strategi dilakukan sebagai kelanjutan dari adanya standar mutu dan indikator kinerja yang menghasilkan strategi peningkatan mutu Universitas Tulungagung;",
    "4. Langkah terakhir adalah dilakukannya penetapan program prioritas dan unggulan. Dengan adanya program prioritas dan unggulan ini, Universitas Tulungagung memberikan upaya peningkatan mutu yang terarah dan terukur.",
  ];
  langkah.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Selain langkah-langkah di atas, peningkatan mutu di Universitas Tulungagung juga dilakukan melalui mekanisme lain, yaitu: (a) revisi berkala dokumen SPMI (Kebijakan, Manual, Standar, Formulir) berdasarkan hasil evaluasi dan perubahan regulasi; (b) penambahan standar baru sebagai pelampauan SN Dikti; (c) peningkatan kualifikasi dan kompetensi dosen serta tenaga kependidikan melalui studi lanjut, pelatihan, dan sertifikasi; (d) peningkatan sarana dan prasarana melalui investasi berkala; (e) peningkatan kualitas luaran Tridharma melalui target publikasi, paten, dan PkM berdampak; serta (f) peningkatan status akreditasi program studi dan perguruan tinggi menuju terakreditasi unggul."
  ));
  
  // 8.6 Penanggung Jawab
  items.push(h2("8.6 Penanggung Jawab Peningkatan Standar Mutu UNITA"));
  
  items.push(body(
    "Penanggung jawab peningkatan standar mutu di Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const penanggungJawab = [
    "1. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor UNITA untuk melaksanakan penjaminan mutu Universitas Tulungagung dengan mendasarkan pada Standar Mutu UNITA yang telah ditetapkan oleh Rektor UNITA;",
    "2. Ketua PPM bertanggung jawab atas akreditasi organisasi di tingkat nasional maupun internasional;",
    "3. Ketua PPM menerima tanggung jawab pelaksanaan tugas penjaminan mutu dari Rektor terkait akreditasi organisasi di tingkat nasional maupun internasional;",
    "4. Ketua PPM menerima tanggung jawab pelaksanaan tugas penjaminan mutu dari Rektor terkait peringkat UNITA di tingkat nasional maupun internasional;",
    "5. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor terkait dengan pelaksanaan sistem penjaminan mutu internal;",
    "6. Kepala Bagian Audit dan Monevin AMI menerima tanggung jawab pelaksanaan tugas dari Ketua PPM terkait dengan pelaksanaan Audit Mutu di tingkat Internal UNITA;",
    "7. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor terkait dengan akreditasi pendidikan secara nasional dari setiap program studi di lingkungan UNITA;",
    "8. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor terkait dengan akreditasi pendidikan secara internasional dari setiap program studi di lingkungan UNITA;",
    "9. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor terkait dengan peringkat UNITA di tingkat nasional;",
    "10. Ketua PPM menerima tanggung jawab pelaksanaan tugas dari Rektor terkait dengan peringkat UNITA di tingkat internasional.",
  ];
  penanggungJawab.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabVI, buildBabVII, buildBabVIII };
