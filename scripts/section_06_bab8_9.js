// ============================================================
// BAB VIII: AMI DAN RTM
// BAB IX: SPME (SISTEM PENJAMINAN MUTU EKSTERNAL)
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB VIII: AUDIT MUTU INTERNAL (AMI) DAN RTM
// ============================================================
function buildBabVIII() {
  const items = [];
  
  items.push(h1("BAB VIII\nAUDIT MUTU INTERNAL (AMI) DAN RAPAT TINJAUAN MANAJEMEN (RTM)"));
  
  items.push(body(
    "Bab ini menjabarkan mekanisme Audit Mutu Internal (AMI) dan Rapat Tinjauan Manajemen (RTM) sebagai bagian integral dari tahap Evaluasi (E) dalam siklus PPEPP. Sesuai Pasal 68 ayat (2) Permen 39 Tahun 2025, evaluasi pemenuhan standar pendidikan tinggi dilaksanakan secara berkala melalui pemantauan, evaluasi diri, audit mutu internal, asesmen, dan/atau cara lain yang ditetapkan perguruan tinggi. AMI dan RTM merupakan instrumen utama yang digunakan Universitas Tulungagung untuk memastikan keterlaksanaan SPMI dan ketercapaian standar mutu secara objektif, independen, dan terdokumentasi."
  ));
  
  // 8.1 Definisi AMI
  items.push(h2("8.1 Definisi Audit Mutu Internal (AMI)"));
  
  items.push(body(
    "Audit Mutu Internal (AMI) adalah tahapan pengujian yang sistematis, independen, dan terdokumentasi untuk memastikan implementasi kegiatan Tridharma di perguruan tinggi sesuai dengan prosedur yang ditetapkan, serta untuk memastikan bahwa hasil dari proses AMI telah sesuai dengan standar yang ditetapkan untuk mencapai tujuan Universitas Tulungagung. AMI merupakan bentuk evaluasi sumatif yang dilakukan oleh auditor internal—yaitu pejabat atau dosen yang ditugaskan oleh pimpinan perguruan tinggi sebagaimana diatur dalam Pasal 68 ayat (3) Permen 39 Tahun 2025—terhadap pelaksanaan SPMI di setiap unit kerja."
  ));
  
  items.push(body(
    "AMI dilaksanakan secara independen dari unit yang diaudit, sehingga hasilnya objektif dan dapat dipertanggungjawabkan. Auditor internal Universitas Tulungagung terdiri atas dosen dan pejabat yang telah mengikuti pelatihan auditor internal dan memiliki sertifikat yang relevan. Universitas Tulungagung memastikan bahwa auditor tidak mengaudit unit kerjanya sendiri, untuk menjaga objektivitas. Hasil AMI didokumentasikan dalam laporan formal yang berisi temuan, analisis, dan rekomendasi, yang ditindaklanjuti melalui mekanisme pengendalian dan dibahas dalam RTM."
  ));
  
  // 8.2 Tujuan AMI
  items.push(h2("8.2 Tujuan Pelaksanaan AMI"));
  
  items.push(body(
    "Tujuan pelaksanaan AMI di Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const tujuanAmi = [
    "a. Memastikan kesesuaian SPMI dengan standar dan regulasi yang berlaku, khususnya Permen 39 Tahun 2025;",
    "b. Memastikan terlaksananya Sistem Penjaminan Mutu sesuai dengan tujuan dan sasaran Universitas Tulungagung;",
    "c. Melakukan evaluasi pelaksanaan sistem penjaminan mutu di Universitas Tulungagung secara objektif dan terdokumentasi;",
    "d. Mengidentifikasi peluang peningkatan sistem penjaminan mutu di Universitas Tulungagung, baik pada level standar, prosedur, maupun pelaksanaan.",
  ];
  tujuanAmi.forEach(t => items.push(bodyNoIndent(t)));
  
  // 8.3 Manfaat AMI
  items.push(h2("8.3 Manfaat Pelaksanaan AMI"));
  
  items.push(body(
    "Manfaat pelaksanaan AMI di Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const manfaatAmi = [
    "a. Memverifikasi kesesuaian pelaksanaan Tridharma perguruan tinggi dengan tujuan pendidikan tinggi, SN Dikti, dan nilai-nilai yang ditetapkan oleh perguruan tinggi;",
    "b. Memantau tercapainya tujuan sesuai dengan standar yang telah ditetapkan, melalui pengukuran indikator kinerja yang terukur dan terjadwal;",
    "c. Memastikan akuntabilitas implementasi standar, baik kepada pemangku kepentingan internal (Rektor, Senat, sivitas akademika) maupun eksternal (BAN-PT, LAM, LLDIKTI, masyarakat, pemerintah);",
    "d. Menjadi bahan pertimbangan bagi perguruan tinggi untuk meminimalisir risiko terkait risiko kualitas, hukum, keuangan, strategi, kepatuhan, operasional, dan reputasi.",
  ];
  manfaatAmi.forEach(t => items.push(bodyNoIndent(t)));
  
  // 8.4 Tahapan AMI
  items.push(h2("8.4 Tahapan Implementasi AMI"));
  
  items.push(body(
    "Implementasi AMI di Universitas Tulungagung dilakukan melalui beberapa tahapan yang terstruktur dan berurutan, untuk memastikan bahwa audit berjalan efektif, efisien, dan menghasilkan output yang dapat ditindaklanjuti. Tahapan-tahapan tersebut adalah sebagai berikut:"
  ));
  
  const tahapanAmi = [
    "a. Pusat Penjaminan Mutu (PPM) menetapkan kebijakan AMI tahunan, mencakup ruang lingkup, jadwal, auditor, dan criteria penilaian;",
    "b. AMI dijalankan sesuai dengan pedoman AMI yang telah ditetapkan oleh PPM dan disahkan oleh Rektor;",
    "c. AMI dijalankan sesuai dengan standar operasional prosedur (SOP) audit yang dikeluarkan oleh PPM, termasuk SOP persiapan, pelaksanaan, pelaporan, dan tindak lanjut;",
    "d. Auditee menyusun evaluasi diri sesuai dengan pelaksanaan standar di masing-masing unit, dengan menggunakan instrumen evaluasi diri yang telah disiapkan PPM;",
    "e. Auditor melakukan audit kesesuaian pada masing-masing unit, melalui penelaahan dokumen, observasi, wawancara, dan verifikasi data;",
    "f. Auditor menyusun laporan audit yang berisi temuan, analisis, dan rekomendasi, dan menyerahkan kepada PPM untuk kompilasi;",
    "g. PPM menyusun laporan kompilasi AMI tingkat universitas dan menyampaikan kepada Rektor;",
    "h. Hasil AMI wajib ditindaklanjuti dan dibahas dalam Rapat Tinjauan Manajemen (RTM) sebagaimana diuraikan pada sub-bab 8.5.",
  ];
  tahapanAmi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Setiap tahapan AMI didokumentasikan secara sistematis, mulai dari surat tugas auditor, daftar hadir, notulen, instrumen audit, hingga laporan akhir. Dokumentasi ini menjadi bukti pelaksanaan SPMI yang dapat diaudit oleh BAN-PT, LAM, atau LLDIKTI pada saat akreditasi atau evaluasi eksternal. Universitas Tulungagung memastikan bahwa dokumentasi AMI tersimpan minimal selama 5 tahun dan dapat diakses oleh pihak yang berwenang."
  ));
  
  // 8.5 RTM
  items.push(h2("8.5 Rapat Tinjauan Manajemen (RTM)"));
  
  items.push(body(
    "Rapat Tinjauan Manajemen (RTM) merupakan langkah tindak lanjut dari proses AMI sebagai bentuk evaluasi formal yang dilakukan oleh manajemen puncak terhadap penerapan sistem mutu, dalam rangka merumuskan tindakan koreksi dan prioritas peningkatan yang dipilih oleh manajemen sesuai dengan aspek-aspek yang relevan dari unit yang bersangkutan. RTM di Universitas Tulungagung dijalankan oleh manajemen Universitas Tulungagung secara berkala—minimal satu kali dalam satu tahun—untuk mengevaluasi sistem penjaminan mutu dan sistem kinerja pelayanan institusi guna menjamin keberlanjutan, kesesuaian, kecukupan, serta efektivitas sistem penjamin mutu dan sistem pelayanan Universitas Tulungagung."
  ));
  
  items.push(body(
    "RTM dipimpin oleh Rektor dan dihadiri oleh Wakil Rektor I, II, III; Dekan; Ka. LPPM; Ka. PPM; Ka. BAA, BAU, BAKU, BAK; Ka. UPT; serta perwakilan LPM fakultas dan GKM program studi. PPM bertindak sebagai sekretariat RTM, bertanggung jawab atas penyusunan agenda, distribusi dokumen, notulen, dan dokumentasi. RTM menghasilkan keputusan formal yang dituangkan dalam Berita Acara RTM, yang menjadi rujukan bagi seluruh unit kerja dalam melaksanakan tindak lanjut. Sesuai dengan standar manajemen mutu, RTM harus mengagendakan tujuh unsur sebagai berikut:"
  ));
  
  const unsurRtm = [
    "a. Hasil Audit Mutu Internal (AMI), termasuk temuan-temuan utama, rekomendasi, dan status tindak lanjut;",
    "b. Umpan balik dari pemangku kepentingan (stakeholder), termasuk mahasiswa, orang tua, lulusan, pengguna lulusan, DUDI, mitra kerja sama, dan masyarakat;",
    "c. Pencapaian sasaran mutu atau Indikator Kinerja Utama (IKU), dengan analisis capaian terhadap target dan identifikasi kesenjangan;",
    "d. Tindak lanjut dari permintaan koreksi dan tindakan koreksi yang telah ditetapkan pada periode sebelumnya;",
    "e. Status tindak lanjut dari hasil RTM periode sebelumnya, untuk memastikan bahwa keputusan RTM benar-benar dilaksanakan;",
    "f. Perubahan yang dapat mempengaruhi peningkatan sistem mutu, baik perubahan internal (organisasi, kebijakan, SDM) maupun eksternal (regulasi, pasar, teknologi);",
    "g. Rekomendasi peningkatan, yang menjadi output utama RTM dan dijadikan basis bagi penyusunan program kerja peningkatan mutu tahun berikutnya.",
  ];
  unsurRtm.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Hasil RTM didokumentasikan dalam Berita Acara RTM yang berisi: (a) agenda RTM; (b) daftar hadir; (c) ringkasan pembahasan setiap unsur; (d) keputusan dan rekomendasi; (e) penanggung jawab dan target waktu tindak lanjut; dan (f) tanda tangan Rektor dan sekretariat. Berita Acara RTM didistribusikan kepada seluruh peserta dan diunggah ke sistem informasi internal untuk diakses oleh seluruh sivitas akademika. Tindak lanjut RTM dipantau oleh PPM dan dilaporkan progress-nya dalam RTM berikutnya, sehingga terjadi mekanisme kontrol yang berkelanjutan."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB IX: SPME (SISTEM PENJAMINAN MUTU EKSTERNAL)
// ============================================================
function buildBabIX() {
  const items = [];
  
  items.push(h1("BAB IX\nSISTEM PENJAMINAN MUTU EKSTERNAL (SPME)"));
  
  items.push(body(
    "Bab ini menjabarkan Sistem Penjaminan Mutu Eksternal (SPME) sebagaimana diatur dalam Bagian Ketiga Bab IV Permen 39 Tahun 2025 (Pasal 70-83). SPME merupakan bagian integral dari Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) yang dilaksanakan melalui Akreditasi. Universitas Tulungagung memandang SPME bukan sebagai proses administratif terpisah, melainkan sebagai validasi eksternal terhadap pelaksanaan SPMI yang dilakukan secara internal. Oleh karena itu, hasil SPME—baik berupa status akreditasi maupun temuan-temuan—diintegrasikan ke dalam siklus PPEPP, khususnya pada tahap Evaluasi dan Pengendalian, sebagai bagian dari prinsip triangulasi data."
  ));
  
  // 9.1 Pengertian SPME
  items.push(h2("9.1 Pengertian Sistem Penjaminan Mutu Eksternal"));
  
  items.push(body(
    "Sesuai Pasal 70 ayat (1) Permen 39 Tahun 2025, SPME dilakukan melalui Akreditasi. Akreditasi sebagaimana dimaksud pada Pasal 70 ayat (2) dilakukan untuk menentukan kelayakan program studi dan perguruan tinggi atas dasar kriteria yang mengacu pada SN Dikti. Akreditasi untuk menentukan kelayakan tersebut termasuk penentuan tingkat mutu program studi dan perguruan tinggi (Pasal 70 ayat 3). Pasal 70 ayat (4) menegaskan bahwa program studi wajib memiliki status terakreditasi pertama, terakreditasi, atau terakreditasi unggul untuk meluluskan mahasiswa dan menerbitkan ijazah. Dengan demikian, akreditasi bukan sekadar formalitas, melainkan syarat legal bagi program studi untuk beroperasi."
  ));
  
  items.push(body(
    "Universitas Tulungagung memandang SPME sebagai kesempatan strategis untuk memvalidasi pelaksanaan SPMI, memperoleh umpan balik independen dari asesor eksternal, dan memperkuat reputasi institusi di mata publik. Oleh karena itu, Universitas Tulungagung berkomitmen untuk: (a) mengikuti proses akreditasi secara tertib dan jujur; (b) menyiapkan dokumen akreditasi yang lengkap dan akurat, berbasis PD Dikti; (c) menindaklanjuti temuan akreditasi melalui mekanisme pengendalian; dan (d) berupaya meningkatkan status akreditasi menuju terakreditasi unggul untuk seluruh program studi dan perguruan tinggi."
  ));
  
  // 9.2 Prinsip Akreditasi
  items.push(h2("9.2 Prinsip Akreditasi"));
  
  items.push(body(
    "Sesuai Pasal 71 Permen 39 Tahun 2025, Akreditasi diselenggarakan dengan enam prinsip utama, yaitu:"
  ));
  
  const prinsipAkreditasi = [
    { judul: "a. Independen", isi: "Penyelenggaraan Akreditasi dilakukan secara mandiri serta bebas dari pengaruh dan kepentingan pihak mana pun." },
    { judul: "b. Akurat", isi: "Penyelenggaraan Akreditasi berdasarkan data dan informasi yang jelas, benar, tepat, dan dapat dipertanggungjawabkan." },
    { judul: "c. Objektif", isi: "Penyelenggaraan Akreditasi bebas dari pengaruh, pendapat, dan pandangan pribadi serta harus berdasarkan data dan informasi faktual." },
    { judul: "d. Transparan", isi: "Penyelenggaraan Akreditasi dilakukan berdasarkan tata cara yang diketahui dan dapat diakses oleh seluruh pemangku kepentingan." },
    { judul: "e. Akuntabel", isi: "Penyelenggaraan Akreditasi dapat dipertanggungjawabkan kepada seluruh pemangku kepentingan." },
    { judul: "f. Efisien", isi: "Penyelenggaraan Akreditasi dilakukan dengan penghematan penggunaan sumber daya." },
  ];
  prinsipAkreditasi.forEach(p => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: p.judul + " ", size: 24, font: FONT, bold: true }),
        new TextRun({ text: p.isi, size: 24, font: FONT }),
      ],
    }));
  });
  
  items.push(body(
    "Universitas Tulungagung mendukung penuh penerapan keenam prinsip tersebut, dan memastikan bahwa data serta informasi yang disampaikan kepada BAN-PT atau LAM adalah data yang benar, akurat, dan dapat diverifikasi. Pelanggaran terhadap prinsip-prinsip ini—khususnya prinsip akurasi dan objektivitas—dapat berdampak pada pencabutan status akreditasi sebagaimana diatur dalam Pasal 110 Permen 39 Tahun 2025."
  ));
  
  // 9.3 Lembaga Akreditasi
  items.push(h2("9.3 Lembaga Akreditasi: BAN-PT dan LAM"));
  
  items.push(body(
    "Sesuai Pasal 72 ayat (1) Permen 39 Tahun 2025, Akreditasi dilakukan oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) atau Lembaga Akreditasi Mandiri (LAM) sesuai dengan kewenangannya. LAM dibentuk berdasarkan rumpun ilmu dan/atau cabang ilmu serta dapat berdasarkan kewilayahan (Pasal 72 ayat 2). Pembagian kewenangan ini dijabarkan lebih rinci dalam Pasal 73 dan Pasal 74, yaitu: BAN-PT melakukan Akreditasi terhadap perguruan tinggi (Pasal 73 ayat 1), sedangkan LAM melakukan Akreditasi terhadap program studi (Pasal 74 ayat 1)."
  ));
  
  items.push(body(
    "Universitas Tulungagung, sebagai perguruan tinggi swasta, tunduk pada akreditasi oleh BAN-PT untuk tingkat perguruan tinggi, dan oleh LAM yang relevan untuk setiap program studi. Apabila untuk rumpun ilmu tertentu LAM belum terbentuk, maka sesuai Pasal 115 ayat (1) Permen 39 Tahun 2025, tugas dan wewenang LAM menjadi tugas dan wewenang BAN-PT. Universitas Tulungagung memantau perkembangan pembentukan LAM untuk setiap rumpun ilmu, dan menyesuaikan strategi akreditasi program studi sesuai dengan lembaga akreditasi yang berwenang."
  ));
  
  // 9.4 Status Akreditasi Baru
  items.push(h2("9.4 Status Akreditasi"));
  
  items.push(body(
    "Sesuai Pasal 73 ayat (4) dan Pasal 74 ayat (4) Permen 39 Tahun 2025, status Akreditasi terdiri atas: (a) terakreditasi; (b) terakreditasi unggul; atau (c) tidak terakreditasi. Status terakreditasi menunjukkan perguruan tinggi atau program studi memenuhi SN Dikti (Pasal 73 ayat 5 / Pasal 74 ayat 5). Status terakreditasi unggul menunjukkan perguruan tinggi atau program studi telah melampaui SN Dikti (Pasal 73 ayat 6 / Pasal 74 ayat 6). Status tidak terakreditasi menunjukkan tidak memenuhi atau berada di bawah SN Dikti (Pasal 73 ayat 7 / Pasal 74 ayat 7). Selain itu, terdapat pula status terakreditasi pertama yang diberikan kepada program studi baru atau perguruan tinggi baru pada saat memperoleh izin (Pasal 76), serta status terakreditasi secara internasional yang dapat diberikan oleh LAM yang diakui sebagai lembaga akreditasi internasional (Pasal 107)."
  ));
  
  items.push(body(
    "Tabel berikut merangkum status akreditasi sebagaimana diatur dalam Permen 39 Tahun 2025:"
  ));
  
  const statusTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Status Akreditasi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 22 }),
          cell("Indikasi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 30 }),
          cell("Masa Berlaku", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Rujukan Pasal", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 23 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Terakreditasi Pertama", { align: AlignmentType.LEFT, bold: true, width: 22 }),
          cell("Diberikan pada saat izin pendirian/penyelenggaraan", { align: AlignmentType.LEFT, width: 30 }),
          cell("Ditetapkan BAN-PT/LAM", { align: AlignmentType.LEFT, size: 20, width: 25 }),
          cell("Pasal 76", { align: AlignmentType.CENTER, width: 23 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Terakreditasi", { align: AlignmentType.LEFT, bold: true, width: 22 }),
          cell("Memenuhi SN Dikti", { align: AlignmentType.LEFT, width: 30 }),
          cell("5 tahun (Prodi) / 8 tahun (PT)", { align: AlignmentType.LEFT, size: 20, width: 25 }),
          cell("Pasal 73-74, 77", { align: AlignmentType.CENTER, width: 23 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Terakreditasi Unggul", { align: AlignmentType.LEFT, bold: true, width: 22 }),
          cell("Melampaui SN Dikti", { align: AlignmentType.LEFT, width: 30 }),
          cell("Ditetapkan BAN-PT/LAM", { align: AlignmentType.LEFT, size: 20, width: 25 }),
          cell("Pasal 73-74, 77, 79", { align: AlignmentType.CENTER, width: 23 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Terakreditasi Internasional", { align: AlignmentType.LEFT, bold: true, width: 22 }),
          cell("Memenuhi standar internasional", { align: AlignmentType.LEFT, width: 30 }),
          cell("Ditetapkan LAM", { align: AlignmentType.LEFT, size: 20, width: 25 }),
          cell("Pasal 107", { align: AlignmentType.CENTER, width: 23 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Tidak Terakreditasi", { align: AlignmentType.LEFT, bold: true, width: 22 }),
          cell("Tidak memenuhi SN Dikti", { align: AlignmentType.LEFT, width: 30 }),
          cell("Izin dicabut oleh Menteri", { align: AlignmentType.LEFT, size: 20, width: 25 }),
          cell("Pasal 77 ayat 6-7", { align: AlignmentType.CENTER, width: 23 }),
        ],
      }),
    ],
  });
  items.push(statusTable);
  
  items.push(body(
    "Universitas Tulungagung menargetkan seluruh program studi dan perguruan tinggi memperoleh status terakreditasi, dengan sebagian besar program studi berupaya mencapai status terakreditasi unggul. Bagi program studi yang berpotensi, Universitas Tulungagung juga mendorong untuk mengajukan permohonan status terakreditasi secara internasional kepada LAM yang diakui sebagai lembaga akreditasi internasional, sebagaimana diatur dalam Pasal 107 Permen 39 Tahun 2025. Pencapaian target ini menjadi tanggung jawab bersama UPPS, LPM, GKM, dan PPM, dengan dukungan penuh dari pimpinan universitas."
  ));
  
  // 9.5 Instrumen Akreditasi
  items.push(h2("9.5 Instrumen Akreditasi"));
  
  items.push(body(
    "Sesuai Pasal 75 ayat (1) Permen 39 Tahun 2025, Akreditasi dilakukan dengan menggunakan instrumen Akreditasi. Instrumen Akreditasi sebagaimana dimaksud pada ayat (1) disusun berdasarkan kriteria pada standar luaran, standar proses, dan standar masukan dengan mengutamakan kriteria pada standar luaran (Pasal 75 ayat 2). Hal ini menandakan pergeseran orientasi akreditasi dari input-driven ke output-driven, di mana luaran (kompetensi lulusan, hasil penelitian, hasil PkM) menjadi tolok ukur utama, dengan input dan proses sebagai pendukung."
  ));
  
  items.push(body(
    "Instrumen Akreditasi dapat dikonsultasikan dengan pemangku kepentingan yang relevan (Pasal 75 ayat 3) dan disusun oleh BAN-PT atau LAM sesuai dengan kewenangannya (Pasal 75 ayat 4). Universitas Tulungagung memastikan bahwa setiap program studi dan perguruan tinggi memahami instrumen akreditasi yang berlaku, dan menyiapkan dokumen pendukung yang relevan dengan kriteria yang diukur. PPM bertanggung jawab untuk mengkoordinasikan sosialisasi instrumen akreditasi kepada UPPS, LPM, dan GKM, serta menyediakan template dokumen yang konsisten dengan instrumen tersebut."
  ));
  
  // 9.6 Proses Akreditasi
  items.push(h2("9.6 Proses Akreditasi"));
  
  items.push(body(
    "Proses akreditasi sebagaimana diatur dalam Pasal 76-82 Permen 39 Tahun 2025 mencakup beberapa tahap: (a) program studi baru atau perguruan tinggi baru mendapatkan status terakreditasi pertama pada saat memperoleh izin (Pasal 76); (b) perguruan tinggi dan program studi dengan status terakreditasi pertama wajib mengajukan permohonan Akreditasi paling lambat 2 (dua) tahun setelah beroperasi (Pasal 77 ayat 1); (c) BAN-PT atau LAM menilai permohonan dan menetapkan status terakreditasi, terakreditasi unggul, atau tidak terakreditasi (Pasal 77 ayat 2-7); (d) status terakreditasi diperpanjang melalui mekanisme perpanjangan (Pasal 78); (e) peningkatan status dari terakreditasi ke terakreditasi unggul dapat diajukan kapan saja (Pasal 79)."
  ));
  
  items.push(body(
    "Universitas Tulungagung menerapkan sistem manajemen akreditasi yang terstruktur, dengan kalender akreditasi yang dipantau secara berkala oleh PPM. Setiap program studi memiliki penanggung jawab akreditasi di tingkat GKM, dengan dukungan LPM fakultas dan PPM universitas. Universitas Tulungagung juga memanfaatkan data PD Dikti sebagai sumber utama dokumen akreditasi, sebagaimana diatur dalam Pasal 78 ayat (2) yang menyebutkan bahwa mekanisme perpanjangan status terakreditasi disusun dengan memperhatikan efektivitas, efisiensi, dan meminimumkan beban administratif perguruan tinggi dengan memanfaatkan data dan informasi dari PD Dikti."
  ));
  
  // 9.7 Pemantauan Akreditasi
  items.push(h2("9.7 Pemantauan Akreditasi"));
  
  items.push(body(
    "Sesuai Pasal 83 ayat (1) Permen 39 Tahun 2025, BAN-PT atau LAM sesuai dengan kewenangannya melakukan pemantauan mutu pada perguruan tinggi atau program studi yang telah terakreditasi dengan memperhatikan: (a) data dan informasi pada PD Dikti; (b) pengaduan masyarakat; (c) permintaan dari Kementerian; dan/atau (d) informasi lain yang dapat dipertanggungjawabkan. Pemantauan mutu dilakukan sewaktu-waktu (Pasal 83 ayat 2), dan ketentuan lebih lanjut mengenai pemantauan mutu ditetapkan oleh BAN-PT (Pasal 83 ayat 3)."
  ));
  
  items.push(body(
    "Universitas Tulungagung menyambut baik mekanisme pemantauan akreditasi ini sebagai bagian dari akuntabilitas eksternal. Universitas Tulungagung memastikan bahwa data PD Dikti selalu up-to-date dan akurat, sehingga pemantauan oleh BAN-PT atau LAM tidak menemukan kesenjangan data. Selain itu, Universitas Tulungagung juga menyediakan saluran komunikasi yang mudah diakses oleh masyarakat untuk pengaduan, dan menindaklanjuti setiap pengaduan secara cepat dan transparan. Dengan demikian, Universitas Tulungagung memastikan bahwa status akreditasi yang dimiliki benar-benar mencerminkan mutu yang berkelanjutan, bukan sekadar status administratif saat akreditasi dilaksanakan."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabVIII, buildBabIX };
