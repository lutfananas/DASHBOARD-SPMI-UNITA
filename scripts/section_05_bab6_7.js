// ============================================================
// BAB VI: KEBIJAKAN DAN STRATEGI SPMI
// BAB VII: MANAJEMEN SPMI (SIKLUS PPEPP)
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB VI: KEBIJAKAN DAN STRATEGI SPMI
// ============================================================
function buildBabVI() {
  const items = [];
  
  items.push(h1("BAB VI\nKEBIJAKAN DAN STRATEGI SPMI"));
  
  items.push(body(
    "Bab ini menjabarkan kebijakan dan strategi Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung yang menjadi pedoman operasional bagi seluruh sivitas akademika dalam menyelenggarakan penjaminan mutu. Kebijakan dan strategi ini disusun dengan mengacu pada Pasal 67 dan Pasal 68 Permen 39 Tahun 2025, serta mempertimbangkan karakteristik, visi, misi, dan tujuan Universitas Tulungagung. Bab ini mencakup tujuan SPMI, prinsip SPMI, asas pelaksanaan SPMI, tata kelola perguruan tinggi yang baik, dan strategi pelaksanaan SPMI."
  ));
  
  // 6.1 Tujuan SPMI
  items.push(h2("6.1 Tujuan SPMI"));
  
  items.push(body(
    "Sistem Penjaminan Mutu Internal Universitas Tulungagung bertujuan untuk menjamin pemenuhan Standar Nasional Pendidikan Tinggi (SN Dikti) secara sistematis dan berkelanjutan, sehingga akan tumbuh dan berkembang budaya mutu di Universitas Tulungagung. Sebagaimana diamanatkan Pasal 67 ayat (1) Permen 39 Tahun 2025, perguruan tinggi wajib melaksanakan penjaminan mutu internal dengan mengembangkan SPMI. Universitas Tulungagung memenuhi kewajiban ini melalui penyelenggaraan SPMI yang terstruktur, terdokumentasi, dan berbasis siklus PPEPP. Tujuan SPMI Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const tujuanSpmi = [
    "1. Memastikan terselenggaranya pemenuhan Standar Nasional Pendidikan Tinggi (SN Dikti) di Universitas Tulungagung, sebagaimana diatur dalam Bab II Permen 39 Tahun 2025;",
    "2. Memastikan terselenggaranya Tridharma Perguruan Tinggi sesuai dengan visi, misi, dan tujuan Universitas Tulungagung, dengan proporsi pelaksanaan masing-masing dharma yang jelas di tingkat perguruan tinggi, program studi, dan individu dosen;",
    "3. Memastikan terpenuhinya kebutuhan pemangku kepentingan, dengan rincian sebagai berikut:",
  ];
  tujuanSpmi.forEach(t => items.push(bodyNoIndent(t)));
  
  const subTujuan = [
    "a. Mendorong semua unit di Universitas Tulungagung bekerja mencapai tujuan mengacu pada standar secara berkelanjutan sehingga menghasilkan mutu penyelenggaraan pendidikan tinggi;",
    "b. Memberikan layanan akademik kepada dosen dan mahasiswa mengacu pada standar pendidikan tinggi;",
    "c. Adanya transparansi dan akuntabilitas kepada masyarakat, khususnya orang tua mahasiswa, terkait penyelenggaraan pendidikan tinggi sesuai dengan standar.",
  ];
  subTujuan.forEach(t => items.push(bodyNoIndent(t, { left: 1440, hanging: 360 })));
  
  items.push(body(
    "Selain ketiga tujuan utama di atas, SPMI Universitas Tulungagung juga bertujuan untuk menjamin terlaksananya tata kelola perguruan tinggi yang baik sebagaimana diatur dalam Pasal 67 ayat (2) Permen 39 Tahun 2025, serta menjamin ketersediaan data dan informasi yang akurat di PD Dikti sebagai sumber data utama bagi SPM Dikti sebagaimana diatur dalam Pasal 111. Pencapaian tujuan SPMI ini diukur melalui Indikator Kinerja Utama (IKU) yang tercantum dalam Renstra Universitas Tulungagung, sebagaimana akan diuraikan pada Bab XII."
  ));
  
  // 6.2 Prinsip SPMI
  items.push(h2("6.2 Prinsip SPMI"));
  
  items.push(body(
    "Sesuai dengan karakteristik SPMI sebagaimana diatur dalam Permen 39 Tahun 2025, terdapat lima prinsip utama yang menjadi dasar pelaksanaan SPMI di Universitas Tulungagung. Kelima prinsip ini saling melengkapi dan harus dipenuhi secara konsisten agar SPMI berjalan efektif dan dapat menghasilkan dampak nyata terhadap peningkatan mutu."
  ));
  
  const prinsip = [
    { judul: "a. Otonom", isi: "SPMI dikembangkan dan diimplementasikan secara otonom atau mandiri oleh setiap perguruan tinggi, baik pada aras Unit Pengelola Program Studi (UPPS) maupun pada aras perguruan tinggi. Universitas Tulungagung, melalui PPM, LPM, dan GKM, memiliki kewenangan penuh untuk merumuskan, menetapkan, melaksanakan, mengevaluasi, mengendalikan, dan meningkatkan standar mutu di lingkungannya, dengan tetap mengacu pada SN Dikti sebagai standar minimal." },
    { judul: "b. Terstandar", isi: "SPMI menggunakan Standar Dikti yang terdiri atas SN Dikti yang ditetapkan oleh Menteri dan Standar Dikti yang ditetapkan oleh setiap perguruan tinggi. Universitas Tulungagung menetapkan Standar Pendidikan Tinggi yang berlaku di lingkungannya, dengan kedalaman dan keluasan substansi yang melampaui SN Dikti, sebagaimana diatur dalam Pasal 64 Permen 39 Tahun 2025." },
    { judul: "c. Akurasi", isi: "SPMI menggunakan data dan informasi yang akurat pada PD Dikti. Sesuai Pasal 111 ayat (4) Permen 39 Tahun 2025, perguruan tinggi bertanggung jawab terhadap kebenaran dan ketepatan data dan informasi PD Dikti. Universitas Tulungagung menerapkan mekanisme verifikasi berlapis dan prinsip triangulasi sebagaimana diatur dalam Pasal 66 untuk memastikan akurasi data." },
    { judul: "d. Terencana dan Berkelanjutan", isi: "SPMI diimplementasikan dengan menggunakan 5 (lima) langkah penjaminan mutu, yaitu PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, Peningkatan) yang membentuk suatu siklus. Siklus ini dijalankan secara berkelanjutan dan terencana, sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025." },
    { judul: "e. Terdokumentasi", isi: "Setiap langkah PPEPP dalam SPMI harus ditulis dalam suatu dokumen, dan didokumentasikan secara sistematis. Dokumen SPMI Universitas Tulungagung terdiri atas Kebijakan SPMI, Manual SPMI, Standar SPMI, dan Formulir SPMI, yang dikelola melalui sistem pengendalian dokumen yang jelas." },
  ];
  
  prinsip.forEach(p => {
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
  
  // 6.3 Asas Pelaksanaan
  items.push(h2("6.3 Asas Pelaksanaan SPMI"));
  
  items.push(body(
    "Selain prinsip-prinsip di atas, pelaksanaan SPMI Universitas Tulungagung juga didasarkan pada delapan asas yang menjadi pedoman etis dan operasional. Asas-asas ini memastikan bahwa SPMI tidak hanya berjalan secara teknis, tetapi juga menjunjung tinggi nilai-nilai akademik, hukum, dan moral yang luhur. Kedelapan asas tersebut adalah sebagai berikut:"
  ));
  
  const asas = [
    { judul: "1) Asas Akuntabilitas", isi: "Pelaksanaan kebijakan SPMI harus dapat dipertanggungjawabkan secara ilmiah, terbuka, dan senantiasa mengacu pada perkembangan keilmuan yang mutakhir dan dinamis." },
    { judul: "2) Asas Transparansi", isi: "Kebijakan SPMI dilaksanakan secara terbuka didasarkan pada tatanan dan aturan yang jelas, yang senantiasa berorientasi pada rasa saling percaya untuk terselenggaranya suasana akademik yang kondusif dan menjamin terwujudnya sinergisme." },
    { judul: "3) Asas Kualitas", isi: "Kebijakan SPMI dilaksanakan dengan senantiasa mengedepankan kualitas input, proses, dan output, sehingga menghasilkan lulusan dan luaran Tridharma yang bermutu tinggi." },
    { judul: "4) Asas Kebersamaan", isi: "Kebijakan SPMI dilaksanakan secara terpadu, terstruktur, sistematik, komprehensif, dan terarah, dengan berbasis pada visi, misi, dan tujuan kelembagaan." },
    { judul: "5) Asas Hukum", isi: "Semua pihak yang terlibat secara langsung maupun tidak langsung dalam pelaksanaan kebijakan SPMI taat pada hukum yang berlaku, yang penegakannya dijamin oleh negara." },
    { judul: "6) Asas Manfaat", isi: "Kebijakan SPMI dilaksanakan untuk memberikan manfaat yang sebesar-besarnya bagi segenap sivitas akademika, institusi, bangsa, dan negara." },
    { judul: "7) Asas Kesetaraan", isi: "Kebijakan SPMI dilaksanakan atas dasar persamaan hak untuk menjamin terciptanya lingkungan akademik yang egaliter." },
    { judul: "8) Asas Kemandirian", isi: "Pelaksanaan kebijakan SPMI senantiasa didasarkan pada kemampuan institusi dengan mengandalkan segenap potensi dan sumber daya yang ada untuk mengoptimalkan kemampuan institusi yang terus berkembang secara sistematik dan terstruktur." },
  ];
  asas.forEach(a => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: a.judul + " ", size: 24, font: FONT, bold: true }),
        new TextRun({ text: a.isi, size: 24, font: FONT }),
      ],
    }));
  });
  
  // 6.4 Tata Kelola PT Baik
  items.push(h2("6.4 Tata Kelola Perguruan Tinggi yang Baik"));
  
  items.push(body(
    "Sesuai Pasal 67 ayat (2) Permen 39 Tahun 2025, dalam mengembangkan SPMI, perguruan tinggi menerapkan tata kelola perguruan tinggi yang baik berdasarkan prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan, yang saling menilik dan mengimbangi satu terhadap yang lain. Enam prinsip tata kelola ini menjadi rujukan operasional bagi seluruh kebijakan, prosedur, dan aktivitas SPMI di Universitas Tulungagung."
  ));
  
  const tataKelola = [
    { judul: "a. Akuntabilitas", isi: "Setiap keputusan, tindakan, dan penggunaan sumber daya dalam SPMI harus dapat dipertanggungjawabkan kepada pemangku kepentingan internal dan eksternal. Universitas Tulungagung memastikan adanya transparansi pelaporan keuangan, kinerja akademik, dan capaian SPMI melalui laporan tahunan, laporan AMI, dan laporan RTM." },
    { judul: "b. Transparansi", isi: "Seluruh kebijakan, standar, prosedur, dan hasil evaluasi SPMI didokumentasikan secara sistematis dan dapat diakses oleh sivitas akademika sesuai dengan kewenangannya. Universitas Tulungagung mempublikasikan status akreditasi, capaian IKU, dan laporan kinerja kepada masyarakat melalui situs web resmi." },
    { judul: "c. Nirlaba", isi: "Universitas Tulungagung sebagai perguruan tinggi swasta bertujuan untuk menyelenggarakan pendidikan tinggi yang bermutu, bukan untuk mencari keuntungan finansial. Seluruh pendapatan universitas digunakan untuk mendukung operasional Tridharma dan peningkatan mutu, sesuai dengan ketentuan yang berlaku." },
    { judul: "d. Efektivitas", isi: "Setiap kegiatan SPMI harus mampu mencapai tujuan yang telah ditetapkan. Universitas Tulungagung melakukan evaluasi berkala terhadap efektivitas setiap program penjaminan mutu, dan menindaklanjuti temuan-temuan yang mengindikasikan ketidakefektifan melalui mekanisme pengendalian dan peningkatan." },
    { judul: "e. Efisiensi", isi: "Pemanfaatan sumber daya dalam SPMI dilakukan secara hemat dan optimal, menghindari pemborosan dan duplikasi. Universitas Tulungagung memanfaatkan teknologi informasi untuk mengotomatisasi proses penjaminan mutu, sehingga beban administratif dapat diminimalkan dan sumber daya dapat difokuskan pada substansi mutu." },
    { judul: "f. Peningkatan Mutu Berkelanjutan", isi: "Universitas Tulungagung berkomitmen untuk terus meningkatkan mutu secara berkelanjutan, dengan menerapkan prinsip Kaizen (perbaikan berkelanjutan) pada setiap aspek SPMI. Setiap siklus PPEPP harus menghasilkan peningkatan minimal pada satu aspek mutu, sehingga terjadi akumulasi peningkatan dari waktu ke waktu." },
  ];
  tataKelola.forEach(t => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: t.judul + " ", size: 24, font: FONT, bold: true }),
        new TextRun({ text: t.isi, size: 24, font: FONT }),
      ],
    }));
  });
  
  items.push(body(
    "Keenam prinsip tata kelola perguruan tinggi yang baik ini saling menilik dan mengimbangi satu terhadap yang lain. Artinya, tidak ada satu prinsip pun yang boleh diabaikan demi prinsip lainnya. Misalnya, efisiensi tidak boleh mengorbankan efektivitas; nirlaba tidak boleh mengorbankan akuntabilitas; dan transparansi tidak boleh mengorbankan kerahasiaan data yang sensitif. Universitas Tulungagung berupaya menyeimbangkan keenam prinsip ini dalam setiap keputusan dan tindakan yang berkaitan dengan SPMI."
  ));
  
  // 6.5 Strategi Pelaksanaan
  items.push(h2("6.5 Strategi dalam Melaksanakan SPMI"));
  
  items.push(body(
    "Dalam rangka pencapaian sasaran kebijakan SPMI di Universitas Tulungagung, diterapkan strategi-strategi sebagai berikut:"
  ));
  
  const strategi = [
    "1. Mengkaji visi, misi, dan tujuan Universitas Tulungagung secara berkala untuk memastikan keselarasan dengan dinamika perkembangan nasional dan global;",
    "2. Mengkaji dasar hukum terkait sistem penjaminan mutu perguruan tinggi dan standar nasional pendidikan tinggi, khususnya Permendiktisaintek Nomor 39 Tahun 2025;",
    "3. Menetapkan Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung sebagai sistem yang terintegrasi dan mengikat seluruh sivitas akademika;",
    "4. Membentuk dan menjalankan organisasi penjaminan mutu—PPM, LPM, dan GKM—serta mekanisme kerjanya di lingkungan Universitas Tulungagung;",
    "5. Meningkatkan komitmen pimpinan dan seluruh sivitas akademika di dalam menerapkan sistem penjaminan mutu internal, melalui sosialisasi berkala, pelatihan, dan insentif kinerja;",
    "6. Melakukan benchmarking mutu pendidikan tinggi secara berkelanjutan dengan perguruan tinggi lain yang mengacu pada standar nasional pendidikan dan standar lain yang relevan;",
    "7. Menjalankan siklus PPEPP secara konsisten dan terdokumentasi pada setiap standar mutu;",
    "8. Memanfaatkan teknologi informasi dalam pengelolaan SPMI Universitas Tulungagung, termasuk integrasi dengan PD Dikti dan sistem informasi internal;",
    "9. Mengembangkan budaya mutu (quality culture) di seluruh lingkungan Universitas Tulungagung melalui pembiasaan, penghargaan, dan keteladanan.",
  ];
  strategi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Sembilan strategi tersebut menjadi acuan operasional bagi seluruh unit kerja dalam melaksanakan SPMI. Setiap strategi diturunkan ke dalam program kerja tahunan, dengan penanggung jawab yang jelas dan indikator ketercapaian yang terukur. PPM, LPM, dan GKM bertanggung jawab atas koordinasi pelaksanaan strategi-strategi ini di masing-masing aras, dan melaporkan capaianya melalui mekanisme AMI dan RTM sebagaimana diatur dalam Bab VIII."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB VII: MANAJEMEN SPMI (SIKLUS PPEPP)
// ============================================================
function buildBabVII() {
  const items = [];
  
  items.push(h1("BAB VII\nMANAJEMEN SPMI (SIKLUS PPEPP)"));
  
  items.push(body(
    "Bab ini menjabarkan manajemen Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung yang diimplementasikan melalui siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan). Siklus PPEPP sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025 merupakan motor penggerak peningkatan mutu secara berkelanjutan, yang memastikan bahwa setiap standar mutu dikelola melalui tahapan yang sistematis, terdokumentasi, dan berbasis bukti. Bab ini menguraikan setiap tahapan PPEPP secara rinci, beserta mekanisme pelaksanaannya di lingkungan Universitas Tulungagung."
  ));
  
  // 7.1 Siklus PPEPP
  items.push(h2("7.1 Siklus PPEPP"));
  
  items.push(body(
    "Sesuai Pasal 68 ayat (1) Permen 39 Tahun 2025, SPMI diimplementasikan melalui siklus kegiatan yang terdiri atas: (a) penetapan standar pendidikan tinggi; (b) pelaksanaan standar pendidikan tinggi; (c) evaluasi pemenuhan standar pendidikan tinggi; (d) pengendalian pelaksanaan standar pendidikan tinggi; dan (e) peningkatan standar pendidikan tinggi. Siklus kegiatan ini digunakan untuk menjamin pemenuhan standar pendidikan tinggi (Pasal 68 ayat 4). Kelima tahapan ini tidak bersifat linear, melainkan siklis, sehingga setiap peningkatan menjadi titik awal bagi siklus berikutnya yang lebih tinggi."
  ));
  
  // Tabel siklus PPEPP
  const ppeppTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Tahap", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 18 }),
          cell("Aktivitas", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 32 }),
          cell("Output", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 30 }),
          cell("Penanggung Jawab", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("P - Penetapan", { align: AlignmentType.CENTER, bold: true, width: 18 }),
          cell("Perumusan & penetapan standar SN Dikti + Standar PT", { align: AlignmentType.LEFT, width: 32 }),
          cell("Kebijakan SPMI, Manual SPMI, Standar SPMI, Formulir SPMI", { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell("Rektor, Senat, PPM", { align: AlignmentType.LEFT, size: 20, width: 20 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("P - Pelaksanaan", { align: AlignmentType.CENTER, bold: true, width: 18 }),
          cell("Implementasi standar oleh seluruh sivitas akademika", { align: AlignmentType.LEFT, width: 32 }),
          cell("Kegiatan Tridharma, dokumen pelaksanaan, data PD Dikti", { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell("UUPPS, LPM, GKM, Dosen, Tendik, Mahasiswa", { align: AlignmentType.LEFT, size: 20, width: 20 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("E - Evaluasi", { align: AlignmentType.CENTER, bold: true, width: 18 }),
          cell("Pemantauan, evaluasi diri, AMI, asesmen", { align: AlignmentType.LEFT, width: 32 }),
          cell("Laporan AMI, laporan evaluasi diri, laporan monitoring", { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell("PPM, LPM, GKM, Tim Evaluasi", { align: AlignmentType.LEFT, size: 20, width: 20 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("P - Pengendalian", { align: AlignmentType.CENTER, bold: true, width: 18 }),
          cell("Tindak lanjut hasil evaluasi (koreksi, pertahankan, tingkatkan)", { align: AlignmentType.LEFT, width: 32 }),
          cell("Surat tindak lanjut, RTM, keputusan perbaikan", { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell("Rektor, PPM, LPM, GKM", { align: AlignmentType.LEFT, size: 20, width: 20 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("P - Peningkatan", { align: AlignmentType.CENTER, bold: true, width: 18 }),
          cell("Peningkatan isi/luas lingkup standar (Kaizen)", { align: AlignmentType.LEFT, width: 32 }),
          cell("Revisi standar, dokumen SPMI baru, pelampauan SN Dikti", { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell("Rektor, Senat, PPM", { align: AlignmentType.LEFT, size: 20, width: 20 }),
        ],
      }),
    ],
  });
  items.push(ppeppTable);
  
  // 7.2 Penetapan
  items.push(h2("7.2 Penetapan (P)"));
  
  items.push(body(
    "Penetapan standar mutu adalah kegiatan perumusan dan penetapan standar atau ukuran yang terdiri atas Standar Nasional Pendidikan Tinggi (SN Dikti) dan Standar Pendidikan Tinggi yang ditetapkan di Universitas Tulungagung. Penetapan berisi langkah-langkah perencanaan SPMI yang tertuang dalam empat dokumen SPMI, yaitu: (a) Kebijakan SPMI—dokumen yang sedang Anda baca ini; (b) Manual SPMI—petunjuk praktis pelaksanaan PPEPP setiap standar; (c) Standar SPMI—kriteria, ukuran, patokan, atau spesifikasi setiap standar; dan (d) Formulir SPMI—dokumen pencatatan dan rekam jejak pelaksanaan standar."
  ));
  
  items.push(body(
    "Penetapan standar di Universitas Tulungagung dilakukan melalui mekanisme berikut: (a) PPM mengkaji regulasi terbaru, khususnya Permen 39 Tahun 2025, dan mengidentifikasi standar yang perlu disusun atau direvisi; (b) UPPS, LPM, dan GKM mengusulkan rumusan standar sesuai dengan bidang tanggung jawabnya; (c) PPM mengkompilasi usulan dan menyusun draft standar; (d) Senat Universitas memberikan pertimbangan terhadap draft standar; (e) badan penyelenggara memberikan persetujuan untuk perguruan tinggi swasta, sebagaimana diatur Pasal 64 ayat (3) huruf b Permen 39 Tahun 2025; dan (f) Rektor menetapkan standar melalui Surat Keputusan. Setiap penetapan standar didokumentasikan secara sistematis dan dipublikasikan kepada seluruh sivitas akademika."
  ));
  
  // 7.3 Pelaksanaan
  items.push(h2("7.3 Pelaksanaan (P)"));
  
  items.push(body(
    "Pelaksanaan standar mutu adalah pengimplementasian standar atau ukuran yang terdiri atas SN Dikti dan Standar Pendidikan Tinggi yang ditetapkan di Universitas Tulungagung. Pelaksanaan dilaksanakan oleh semua pihak, yaitu seluruh jajaran manajemen (Rektor, Wakil Rektor, Dekan, Ka. Prodi, Ka. Lembaga, Ka. UPT) dan seluruh sivitas akademika (dosen, tenaga kependidikan, mahasiswa). Setiap pihak memiliki peran dan tanggung jawab spesifik dalam pelaksanaan standar, sesuai dengan fungsi dan kewenangannya."
  ));
  
  items.push(body(
    "Untuk memastikan pelaksanaan berjalan efektif, Universitas Tulungagung menerapkan beberapa mekanisme pendukung: (a) sosialisasi standar kepada seluruh pihak terkait melalui rapat, pelatihan, dan materi tertulis; (b) penyediaan dokumen pendukung—Manual SPMI, Formulir SPMI, dan SOP—yang mudah diakses; (c) integrasi standar dengan sistem informasi internal, sehingga pelaksanaan dapat dimonitor secara real-time; (d) pendampingan oleh PPM, LPM, dan GKM kepada unit kerja yang memerlukan bantuan; dan (e) pengakuan dan apresiasi terhadap unit kerja yang melaksanakan standar dengan baik, sebagai bagian dari pengembangan budaya mutu."
  ));
  
  // 7.4 Evaluasi
  items.push(h2("7.4 Evaluasi (E)"));
  
  items.push(body(
    "Sesuai Pasal 68 ayat (2) Permen 39 Tahun 2025, evaluasi pemenuhan standar pendidikan tinggi dilaksanakan secara berkala melalui: (a) pemantauan; (b) evaluasi diri; (c) audit mutu internal; (d) asesmen; dan/atau (e) cara lain yang ditetapkan perguruan tinggi. Pasal 68 ayat (3) menambahkan bahwa evaluasi dilaksanakan oleh pejabat atau dosen yang ditugaskan oleh pimpinan perguruan tinggi. Universitas Tulungagung menerapkan kelima mekanisme evaluasi tersebut secara terintegrasi, dengan pembagian peran yang jelas antara PPM, LPM, GKM, dan UPPS."
  ));
  
  items.push(body(
    "Evaluasi diagnostik dan formatif dilakukan dengan cara evaluasi diri dan monitoring secara rutin oleh pejabat struktural. Hasil evaluasi didapatkan melalui rapat rutin yang dilakukan oleh Program Studi, Fakultas, lembaga, dan/atau Universitas. Evaluasi bersifat sumatif dilakukan melalui proses Audit Mutu Internal (AMI) terhadap setiap unit pelaksanaan standar. Audit dilakukan oleh Pusat Penjaminan Mutu (PPM) Universitas Tulungagung, dan hasilnya ditindaklanjuti melalui Rapat Tinjauan Manajemen (RTM) sebagaimana diuraikan dalam Bab VIII."
  ));
  
  items.push(body(
    "Selain evaluasi internal, Universitas Tulungagung juga memanfaatkan hasil evaluasi eksternal—seperti hasil akreditasi BAN-PT/LAM, hasil asesmen LLDIKTI, dan umpan balik pengguna lulusan—sebagai bagian dari basis evaluasi. Hal ini sesuai dengan prinsip triangulasi sebagaimana diatur dalam Pasal 66 Permen 39 Tahun 2025, yang mengharuskan penggalian kebenaran informasi melalui berbagai sumber data dan sudut pandang yang saling melengkapi. Hasil seluruh evaluasi didokumentasikan secara sistematis dan menjadi basis bagi tahap pengendalian dan peningkatan."
  ));
  
  // 7.5 Pengendalian
  items.push(h2("7.5 Pengendalian (P)"));
  
  items.push(body(
    "Pengendalian standar mutu adalah kegiatan tindak lanjut atas hasil evaluasi pelaksanaan standar mutu dengan standar atau ukuran yang terdiri atas SN Dikti dan Standar Pendidikan Tinggi yang ditetapkan di Universitas Tulungagung. Hasil evaluasi meliputi evaluasi diri, audit internal, maupun hasil akreditasi. Berdasarkan hasil evaluasi tersebut, Universitas Tulungagung menentukan langkah pengendalian yang sesuai dengan kondisi yang dihadapi, sebagaimana dijabarkan dalam tabel berikut:"
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
          cell("Belum mencapai Standar dalam SPMI", { align: AlignmentType.LEFT, bold: true, width: 35 }),
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
  
  // 7.6 Peningkatan
  items.push(h2("7.6 Peningkatan (P)"));
  
  items.push(body(
    "Peningkatan standar mutu adalah kegiatan meningkatkan isi atau luas lingkup atas standar mutu dengan standar atau ukuran yang terdiri atas SN Dikti dan Standar Pendidikan Tinggi yang ditetapkan di Universitas Tulungagung, yang berdasarkan hasil evaluasi. Peningkatan merupakan kunci dari prinsip Kaizen—yaitu perbaikan berkelanjutan yang berasal dari filosofi manajemen mutu modern. Setiap siklus PPEPP harus menghasilkan peningkatan minimal pada satu aspek mutu, sehingga terjadi akumulasi peningkatan dari waktu ke waktu yang signifikan."
  ));
  
  items.push(body(
    "Universitas Tulungagung mewujudkan peningkatan mutu melalui beberapa mekanisme: (a) revisi berkala dokumen SPMI (Kebijakan, Manual, Standar, Formulir) berdasarkan hasil evaluasi dan perubahan regulasi; (b) penambahan standar baru sebagai pelampauan SN Dikti, sebagaimana telah dilakukan dengan sembilan standar tambahan (lihat Bab XI); (c) peningkatan kualifikasi dan kompetensi dosen serta tenaga kependidikan melalui studi lanjut, pelatihan, dan sertifikasi; (d) peningkatan sarana dan prasarana melalui investasi berkala; (e) peningkatan kualitas luaran Tridharma melalui target publikasi, paten, dan PkM berdampak; dan (f) peningkatan status akreditasi program studi dan perguruan tinggi menuju terakreditasi unggul."
  ));
  
  items.push(body(
    "Peningkatan tidak hanya bersifat reaktif—merespons hasil evaluasi—tetapi juga proaktif, yaitu melakukan inovasi dan pengembangan standar meskipun belum ada temuan evaluasi yang mengharuskan. Hal ini dilakukan melalui benchmarking dengan perguruan tinggi lain, kajian perkembangan ilmu pengetahuan dan teknologi, serta umpan balik dari pemangku kepentingan. Dengan demikian, SPMI Universitas Tulungagung tidak hanya menjaga standar yang ada, tetapi juga mendorong tercapainya standar yang lebih tinggi secara berkelanjutan, sebagaimana diamanatkan Pasal 3 ayat (1) huruf d Permen 39 Tahun 2025."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabVI, buildBabVII };
