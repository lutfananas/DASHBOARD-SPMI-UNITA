// ============================================================
// BAB XII: INDIKATOR KINERJA UTAMA (IKU)
// BAB XIII: INFORMASI DOKUMEN SPMI LAINNYA
// BAB XIV: HUBUNGAN KEBIJAKAN SPMI DENGAN DOKUMEN PT
// BAB XV: KETENTUAN PENUTUP
// REFERENSI
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB XII: IKU DAN TARGET CAPAIAN
// ============================================================
function buildBabXII() {
  const items = [];
  
  items.push(h1("BAB XII\nINDIKATOR KINERJA UTAMA (IKU) DAN TARGET CAPAIAN"));
  
  items.push(body(
    "Bab ini menjabarkan Indikator Kinerja Utama (IKU) Universitas Tulungagung yang tertuang dalam Rencana Strategis (Renstra) Universitas Tulungagung. IKU menjadi ukuran kuantitatif bagi ketercapaian sasaran strategis dan tujuan SPMI, serta menjadi basis bagi evaluasi kinerja oleh pimpinan, sivitas akademika, dan pemangku kepentingan eksternal. IKU juga menjadi instrumen utama bagi BAN-PT dan LAM dalam menilai kinerja Universitas Tulungagung pada saat akreditasi, sebagaimana diatur dalam Pasal 75 ayat (2) Permen 39 Tahun 2025 yang menyebutkan bahwa instrumen Akreditasi disusun berdasarkan kriteria pada standar luaran, standar proses, dan standar masukan dengan mengutamakan kriteria pada standar luaran."
  ));
  
  // 12.1 Pengertian IKU
  items.push(h2("12.1 Pengertian Indikator Kinerja Utama"));
  
  items.push(body(
    "Sebagai komitmen perguruan tinggi, Universitas Tulungagung memiliki Indikator Kinerja Utama (IKU) yang tertuang di dalam Rencana Strategis Universitas Tulungagung. IKU merupakan ukuran kuantitatif yang menggambarkan kinerja perguruan tinggi dalam aspek-aspek strategis yang menjadi prioritas. IKU dirancang agar selaras dengan kebijakan Kementerian Pendidikan Tinggi, Sains, dan Teknologi, sehingga setiap pencapaian IKU dapat menjadi bukti konkret pemenuhan dan pelampauan SN Dikti. IKU juga menjadi dasar bagi penyusunan program kerja tahunan, alokasi anggaran, serta evaluasi kinerja unit kerja."
  ));
  
  items.push(body(
    "Setiap IKU memiliki target capaian tahunan dan target capaian lima tahunan, sebagaimana tertuang dalam Renstra Universitas Tulungagung. Capaian IKU dipantau secara berkala oleh PPM, dan dilaporkan kepada Rektor melalui mekanisme AMI dan RTM. Capaian IKU juga dipublikasikan kepada masyarakat melalui situs web resmi Universitas Tulungagung, sebagai bentuk akuntabilitas publik. Apabila terdapat IKU yang tidak tercapai sesuai target, Universitas Tulungagung melakukan analisis akar masalah dan menetapkan tindakan koreksi melalui mekanisme pengendalian sebagaimana diatur dalam Bab VII."
  ));
  
  // 12.2 Cakupan IKU
  items.push(h2("12.2 Cakupan 8 Indikator Kinerja Utama"));
  
  items.push(body(
    "Cakupan IKU Universitas Tulungagung berfokus pada delapan aspek utama yang selaras dengan kebijakan Kementerian Pendidikan Tinggi, Sains, dan Teknologi. Delapan IKU tersebut adalah sebagai berikut:"
  ));
  
  const ikuList = [
    { no: "1", judul: "Lulusan yang Berkualitas dan Berdaya Saing", isi: "Mencakup jumlah lulusan, masa studi, IPK rata-rata, persentase lulusan terserap di dunia kerja, dan waktu tunggu mendapatkan pekerjaan pertama. Target: peningkatan persentase lulusan terserap di dunia kerja ≤6 bulan setelah lulus." },
    { no: "2", judul: "Mahasiswa Mendapat Pengalaman di Luar Kampus", isi: "Mencakup jumlah mahasiswa yang mengikuti program MBKM di luar kampus, seperti magang, pertukaran, studi independen, atau proyek kemanusiaan. Target: peningkatan jumlah mahasiswa yang mengikuti MBKM ≥20% per tahun." },
    { no: "3", judul: "Dosen Berkegiatan di Luar Kampus", isi: "Mencakup jumlah dosen yang mengikuti kegiatan di luar kampus, seperti magang industri, visitor akademik, atau kolaborasi riset dengan DUDI. Target: peningkatan jumlah dosen yang berkegiatan di luar kampus ≥15% per tahun." },
    { no: "4", judul: "Praktisi Mengajar di dalam Kampus", isi: "Mencakup jumlah praktisi dari DUDI yang mengajar di Universitas Tulungagung, sebagai dosen tamu atau co-teacher. Target: setiap program studi memiliki ≥2 praktisi mengajar per tahun akademik." },
    { no: "5", judul: "Hasil Kerja Dosen Digunakan oleh Masyarakat/Mahasiswa", isi: "Mencakup jumlah penelitian, PkM, paten, HKI, atau produk yang diadopsi atau dimanfaatkan oleh masyarakat, industri, atau mahasiswa. Target: peningkatan jumlah luaran Tridharma yang dimanfaatkan ≥10% per tahun." },
    { no: "6", judul: "Program Studi Berkerjasama dengan Dunia Kerja", isi: "Mencakup jumlah kerja sama formal antara program studi dengan DUDI, dalam bentuk MoU, MoA, atau IA. Target: setiap program studi memiliki ≥3 kerja sama aktif dengan DUDI." },
    { no: "7", judul: "Aktivitas Pembelajaran Berorientasi Praktik", isi: "Mencakup persentase mata kuliah yang menggunakan metode pembelajaran berorientasi praktik—seperti project-based learning, case-based learning, atau problem-based learning. Target: ≥50% mata kuliah menggunakan metode berorientasi praktik." },
    { no: "8", judul: "Prestasi Akademik dan Akreditasi Program Studi", isi: "Mencakup prestasi mahasiswa dalam kompetisi akademik dan non-akademik, serta status akreditasi program studi. Target: 100% program studi berstatus terakreditasi, ≥50% berstatus terakreditasi unggul." },
  ];
  
  ikuList.forEach(iku => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 120, before: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${iku.no}. `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: `${iku.judul}: `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: iku.isi, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Tabel target capaian
  items.push(body(
    "Tabel berikut menjabarkan target capaian 8 IKU Universitas Tulungagung untuk periode 2025-2029:"
  ));
  
  const targetTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("IKU", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("2025", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 13 }),
          cell("2026", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 13 }),
          cell("2027", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 13 }),
          cell("2028", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 13 }),
          cell("2029", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("1. Lulusan terserap ≤6 bulan", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("60%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("65%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("70%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("75%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("80%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("2. Mahasiswa MBKM", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("20%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("25%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("30%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("35%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("40%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("3. Dosen di luar kampus", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("15%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("20%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("25%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("30%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("35%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("4. Praktisi mengajar/prodi", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("2", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("3", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("4", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("5", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("6", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("5. Luaran dimanfaatkan", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("15", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("20", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("25", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("30", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("35", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("6. Kerja sama/prodi", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("3", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("4", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("5", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("6", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("7", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("7. Mata kuliah praktik", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("40%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("45%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("50%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("55%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("60%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("8. Prodi terakreditasi unggul", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("30%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("40%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("50%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("60%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
          cell("70%", { align: AlignmentType.CENTER, size: 20, width: 13 }),
        ],
      }),
    ],
  });
  items.push(targetTable);
  
  items.push(body(
    "Target capaian tersebut bersifat indikatif dan dapat disesuaikan berdasarkan evaluasi tahunan serta perubahan konteks strategis. Setiap unit kerja—UPPS, LPM, GKM—bertanggung jawab atas pencapaian IKU yang relevan dengan bidang tanggung jawabnya, dan melaporkan progress-nya kepada PPM setiap semester. PPM mengkompilasi laporan capaian IKU dan menyampaikan kepada Rektor melalui RTM tahunan."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB XIII: INFORMASI DOKUMEN SPMI LAINNYA
// ============================================================
function buildBabXIII() {
  const items = [];
  
  items.push(h1("BAB XIII\nINFORMASI DOKUMEN SPMI LAINNYA"));
  
  items.push(body(
    "Bab ini menjabarkan secara singkat dokumen-dokumen Sistem Penjaminan Mutu Internal (SPMI) lainnya yang menjadi bagian tak terpisahkan dari dokumen Kebijakan Mutu ini. Dokumen-dokumen tersebut adalah Manual Mutu, Dokumen Standar Mutu, Formulir Mutu, dan Standar Operasional Prosedur (SOP). Setiap dokumen memiliki fungsi spesifik dalam mendukung pelaksanaan siklus PPEPP, dan saling terkait satu sama lain sehingga membentuk sistem dokumentasi SPMI yang utuh dan terintegrasi."
  ));
  
  items.push(h2("13.1 Manual Mutu"));
  
  items.push(body(
    "Manual Mutu berisi pedoman teknis tentang tahapan Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (PPEPP) setiap standar mutu Universitas Tulungagung. Manual Mutu disusun secara terstruktur untuk setiap standar, mulai dari standar pendidikan, penelitian, pengabdian kepada masyarakat, hingga standar tambahan sebagai pelampauan SN Dikti. Setiap Manual Mutu memuat tujuan standar, ruang lingkup, definisi, rujukan regulasi, prosedur pelaksanaan PPEPP, formulir yang digunakan, penanggung jawab, dan jadwal pelaksanaan. Manual Mutu menjadi referensi utama bagi pelaksana standar di tingkat operasional, dan ditinjau secara berkala untuk memastikan relevansinya dengan perkembangan regulasi dan praktik terbaik."
  ));
  
  items.push(body(
    "Manual Mutu Universitas Tulungagung bersifat hierarkis—ada Manual Mutu tingkat universitas yang menjadi rujukan umum, dan ada Manual Mutu tingkat program studi yang lebih spesifik sesuai dengan karakteristik keilmuan dan operasional masing-masing program studi. Manual Mutu tingkat program studi disusun oleh GKM, dengan dukungan LPM fakultas dan PPM universitas. Konsistensi antara Manual Mutu universitas dan program studi dijaga melalui mekanisme review oleh PPM sebelum diberlakukan."
  ));
  
  items.push(h2("13.2 Dokumen Standar Mutu"));
  
  items.push(body(
    "Dokumen Standar Mutu menguraikan tentang penetapan standar, pernyataan dan indikator pencapaian, serta strategi pencapaian setiap standar mutu Universitas Tulungagung. Dokumen ini menjadi rujukan normatif bagi setiap standar, dan memuat: (a) pernyataan standar—yaitu rumusan kriteria yang harus dipenuhi; (b) indikator pencapaian—yaitu ukuran kuantitatif dan kualitatif yang menunjukkan ketercapaian standar; (c) strategi pencapaian—yaitu langkah-langkah konkret yang akan dilakukan untuk mencapai standar; dan (d) penanggung jawab—yaitu unit kerja atau pejabat yang bertanggung jawab atas pencapaian standar. Dokumen Standar Mutu disahkan oleh Rektor setelah mendapat pertimbangan Senat dan persetujuan badan penyelenggara, sesuai Pasal 64 ayat (3) Permen 39 Tahun 2025."
  ));
  
  items.push(h2("13.3 Formulir Mutu"));
  
  items.push(body(
    "Formulir Mutu atau dokumen lainnya yang mendukung pelaksanaan manual mutu setiap standar mutu Universitas Tulungagung. Formulir Mutu berfungsi untuk mencatat, merekam, dan mendokumentasikan setiap aktivitas yang berkaitan dengan pelaksanaan standar, sehingga menjadi bukti objektif bagi auditor internal maupun eksternal. Setiap formulir memiliki kode unik yang menunjukkan standar yang terkait, nomor revisi, dan tanggal berlaku. Formulir Mutu dikelola melalui sistem pengendalian dokumen yang dikelola oleh Sekretaris PPM, untuk memastikan bahwa hanya formulir yang terbaru yang digunakan, dan formulir lama ditarik kembali."
  ));
  
  items.push(h2("13.4 Standar Operasional Prosedur (SOP)"));
  
  items.push(body(
    "Dokumen yang berisi prosedur sebagai pedoman pelaksanaan isi standar yang dijalankan oleh pihak pelaksana isi standar. SOP dirancang agar setiap aktivitas yang berkaitan dengan standar mutu dilaksanakan secara konsisten, terulang dengan kualitas yang sama, dan dapat dilakukan oleh siapa pun yang berkompeten. SOP Universitas Tulungagung mencakup berbagai aktivitas strategis, mulai dari penyusunan kurikulum, pelaksanaan perkuliahan, penilaian mahasiswa, pengelolaan laboratorium, pelaksanaan penelitian, pelaksanaan PkM, pengelolaan kerja sama, hingga pengelolaan dokumen SPMI. SOP ditinjau secara berkala—minimal setiap dua tahun—untuk memastikan relevansinya dengan perkembangan regulasi, teknologi, dan praktik terbaik."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB XIV: HUBUNGAN KEBIJAKAN SPMI DENGAN DOKUMEN PT
// ============================================================
function buildBabXIV() {
  const items = [];
  
  items.push(h1("BAB XIV\nHUBUNGAN KEBIJAKAN SPMI DENGAN DOKUMEN PERGURUAN TINGGI"));
  
  items.push(body(
    "Bab ini menjabarkan hubungan antara Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) dengan dokumen-dokumen strategis perguruan tinggi lainnya, yaitu Statuta dan Rencana Strategis (Renstra). Pemahaman atas hubungan ini penting untuk memastikan bahwa SPMI tidak berdiri sendiri sebagai dokumen administratif, melainkan terintegrasi dengan arah strategis dan tata kelola Universitas Tulungagung secara menyeluruh. Selain itu, bab ini juga menjabarkan hubungan Kebijakan SPMI dengan dokumen-dokumen SPMI lainnya—Manual, Standar, Formulir, dan SOP."
  ));
  
  items.push(h2("14.1 Hubungan dengan Statuta"));
  
  items.push(body(
    "Universitas Tulungagung selain memiliki dokumen SPMI juga memiliki Statuta. Statuta merupakan dokumen dasar yang mengatur tata kelola, struktur organisasi, tugas dan wewenang organ-organ perguruan tinggi, serta hak dan kewajiban sivitas akademika. Keberadaan Statuta menjadi landasan filosofis bagi kebijakan mutu, organisasi SPMI, dan perumusan standar mutu. Setiap ketentuan dalam dokumen Kebijakan Mutu ini harus selaras dengan Statuta, dan apabila terdapat perubahan Statuta, dokumen Kebijakan Mutu akan disesuaikan melalui mekanisme peninjauan sebagaimana diatur dalam Bab XV."
  ));
  
  items.push(body(
    "Statuta memberikan dasar yuridis bagi pembentukan PPM, LPM, dan GKM sebagai unit pelaksana SPMI di Universitas Tulungagung. Statuta juga mengatur kewenangan Rektor untuk menetapkan kebijakan mutu, kewenangan Senat untuk memberikan pertimbangan, serta kewenangan badan penyelenggara untuk memberikan persetujuan terhadap standar pendidikan tinggi yang ditetapkan oleh perguruan tinggi, sebagaimana diatur dalam Pasal 64 ayat (3) huruf b Permen 39 Tahun 2025. Dengan demikian, Statuta dan Kebijakan SPMI merupakan dua dokumen yang saling melengkapi—Statuta mengatur tata kelola, sedangkan Kebijakan SPMI mengatur substansi mutu."
  ));
  
  items.push(h2("14.2 Hubungan dengan Rencana Strategis (Renstra)"));
  
  items.push(body(
    "Renstra dibuat untuk membantu Universitas Tulungagung menyusun rencana operasional dan anggaran tahunan dalam pelaksanaan Tridharma pendidikan tinggi. Renstra memuat sasaran Universitas Tulungagung yang akan dicapai dalam 5 tahun ke depan, yang diturunkan ke dalam indikator ketercapaian dari masing-masing standar mutu yang ada. Dengan demikian, Renstra menjadi jembatan antara visi-misi-tujuan (jangka panjang) dengan pelaksanaan operasional (jangka pendek), dan menjadi acuan bagi penyusunan program kerja tahunan, alokasi anggaran, serta evaluasi kinerja."
  ));
  
  items.push(body(
    "Indikator Kinerja Utama (IKU) yang tertuang dalam Renstra menjadi ukuran kuantitatif bagi ketercapaian sasaran strategis, sebagaimana telah diuraikan dalam Bab XII. Setiap IKU diturunkan ke dalam target capaian tahunan, dan dipantau pelaksanaannya oleh PPM melalui mekanisme AMI dan RTM. Hasil capaian IKU menjadi salah satu input utama bagi peninjauan Renstra, sehingga terjadi siklus perencanaan-pelaksanaan-evaluasi yang berkelanjutan. Kebijakan SPMI dan Renstra saling terkait erat—Kebijakan SPMI mengatur bagaimana mutu dijamin, sedangkan Renstra mengatur apa yang ingin dicapai dan kapan."
  ));
  
  items.push(h2("14.3 Hubungan dengan Dokumen SPMI Lainnya"));
  
  items.push(body(
    "Kebijakan SPMI sebagai dokumen tertinggi dalam hierarki dokumen SPMI menjadi rujukan bagi dokumen-dokumen SPMI lainnya, yaitu Manual Mutu, Standar Mutu, Formulir Mutu, dan SOP. Hubungan hierarkis ini memastikan bahwa setiap dokumen di bawahnya konsisten dengan Kebijakan SPMI, dan tidak ada kontradiksi antara dokumen-dokumen tersebut. Apabila terdapat perubahan pada Kebijakan SPMI—seperti yang terjadi pada penyesuaian terhadap Permen 39 Tahun 2025 ini—maka dokumen-dokumen di bawahnya juga harus disesuaikan."
  ));
  
  items.push(body(
    "Selain hubungan vertikal (Kebijakan → Manual → Standar → Formulir/SOP), terdapat pula hubungan horizontal antara dokumen SPMI dengan dokumen-dokumen operasional lainnya, seperti kurikulum program studi, rencana pembelajaran semester (RPS), perjanjian kerja sama, laporan penelitian, dan laporan PkM. Hubungan horizontal ini memastikan bahwa setiap dokumen operasional mengacu pada standar mutu yang telah ditetapkan, dan menjadi bukti pelaksanaan standar tersebut. PPM bersama LPM dan GKM bertanggung jawab untuk memastikan konsistensi dokumen-dokumen ini melalui mekanisme review dan audit."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB XV: KETENTUAN PENUTUP
// ============================================================
function buildBabXV() {
  const items = [];
  
  items.push(h1("BAB XV\nKETENTUAN PENUTUP"));
  
  items.push(h2("15.1 Pernyataan Komitmen"));
  
  items.push(body(
    "Dengan ditetapkannya Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 ini, seluruh sivitas akademika—mulai dari Rektor, Wakil Rektor, Dekan, Ka. Lembaga, Ka. UPT, Ka. Program Studi, dosen, tenaga kependidikan, hingga mahasiswa—menyatakan komitmen penuh untuk melaksanakan setiap ketentuan yang tertuang dalam dokumen ini. Komitmen ini diwujudkan melalui pelaksanaan siklus PPEPP secara konsisten, pemenuhan SN Dikti sebagaimana diatur dalam Permen 39 Tahun 2025, serta upaya berkelanjutan untuk melampaui standar nasional melalui sembilan standar tambahan yang telah ditetapkan."
  ));
  
  items.push(body(
    "Universitas Tulungagung berkomitmen untuk menjadikan SPMI sebagai sistem yang kuat (powerful) dan efektif, bukan sekadar dokumen administratif. Komitmen ini diwujudkan melalui: (a) penyediaan sumber daya yang memadai untuk pelaksanaan SPMI—mulai dari SDM, anggaran, sarana prasarana, hingga sistem informasi; (b) pemberian kewenangan yang cukup kepada PPM, LPM, dan GKM untuk melaksanakan tugasnya; (c) dukungan pimpinan yang konsisten terhadap pelaksanaan SPMI; dan (d) penghargaan terhadap unit kerja dan individu yang berkontribusi positif terhadap peningkatan mutu. Dengan komitmen yang kuat dari seluruh pihak, SPMI Universitas Tulungagung diyakini mampu mendorong tercapainya visi untuk menjadi perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional."
  ));
  
  items.push(h2("15.2 Pemberlakuan dan Peninjauan Berkala"));
  
  items.push(body(
    "Kebijakan Mutu SPMI Universitas Tulungagung Tahun 2025 ini berlaku sejak tanggal ditetapkan oleh Rektor, yaitu 1 September 2025. Kebijakan ini berlaku bagi seluruh unit kerja di lingkungan Universitas Tulungagung tanpa terkecuali, dan menggantikan Kebijakan Mutu SPMI Tahun 2024 yang telah tidak selaras dengan Permen 39 Tahun 2025. Setiap dokumen turunan—Manual Mutu, Standar Mutu, Formulir Mutu, dan SOP—wajib disesuaikan dengan Kebijakan Mutu ini paling lambat enam bulan sejak tanggal penetapan."
  ));
  
  items.push(body(
    "Dokumen Kebijakan Mutu ini akan ditinjau secara berkala minimal satu kali dalam satu tahun, atau lebih cepat apabila terjadi perubahan regulasi yang signifikan, perubahan visi/misi/tujuan Universitas Tulungagung, atau temuan-temuan strategis dari AMI dan RTM yang mengharuskan revisi. Peninjauan dilakukan oleh PPM dengan melibatkan LPM, GKM, dan Senat Universitas, dan hasil peninjauan ditetapkan oleh Rektor melalui Surat Keputusan. Setiap revisi dicatat dalam riwayat revisi dokumen, dan dipublikasikan kepada seluruh sivitas akademika."
  ));
  
  items.push(h2("15.3 Penyesuaian terhadap Perubahan Regulasi"));
  
  items.push(body(
    "Universitas Tulungagung menyadari bahwa regulasi di bidang penjaminan mutu pendidikan tinggi dapat berubah seiring dengan dinamika perkembangan kebijakan pemerintah. Sesuai dengan Pasal 116 Permen 39 Tahun 2025, pengelolaan dan penyelenggaraan perguruan tinggi wajib menyesuaikan dengan Peraturan Menteri ini paling lama 2 (dua) tahun sejak Peraturan Menteri ini diundangkan. Universitas Tulungagung berkomitmen untuk memenuhi kewajiban penyesuaian ini dalam jangka waktu yang ditetapkan, dan memastikan bahwa setiap perubahan regulasi di masa mendatang akan direspons melalui mekanisme peninjauan berkala sebagaimana diatur dalam sub-bab 15.2."
  ));
  
  items.push(h2("15.4 Harapan dan Penutup"));
  
  items.push(body(
    "Dengan ditetapkannya Kebijakan Mutu SPMI Universitas Tulungagung Tahun 2025 ini, diharapkan seluruh sivitas akademika dapat menjadikan dokumen ini sebagai pedoman bersama dalam menyelenggarakan Tridharma Perguruan Tinggi yang bermutu. Diharapkan pula dokumen ini dapat mendorong terwujudnya budaya mutu yang berkelanjutan di lingkungan Universitas Tulungagung, sehingga setiap aktivitas akademik dan non-akademik dilandasi oleh kesadaran akan pentingnya mutu, akuntabilitas, dan peningkatan berkelanjutan. Pada akhirnya, diharapkan SPMI yang kuat ini dapat mempercepat tercapainya visi Universitas Tulungagung untuk menjadi perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional, serta memperoleh status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi."
  ));
  
  items.push(body(
    "Dokumen Kebijakan Mutu SPMI ini disusun dengan penuh tanggung jawab, melalui proses yang partisipatif dan transparan, dan diharapkan dapat memberikan manfaat yang sebesar-besarnya bagi Universitas Tulungagung dan seluruh pemangku kepentingan. Apabila di kemudian hari terdapat kekeliruan atau hal-hal yang perlu disempurnakan, akan diadakan perbaikan sebagaimana mestinya melalui mekanisme yang telah diatur."
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
    "Daftar referensi berikut adalah landaran yuridis dan dokumen acuan yang digunakan dalam penyusunan Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Daftar ini telah sepenuhnya diselaraskan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 sebagai landasan regulasi terkini, sehingga seluruh kegiatan penjaminan mutu di Universitas Tulungagung mengacu pada kerangka regulasi yang terbaru dan paling berlaku."
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

module.exports = { buildBabXII, buildBabXIII, buildBabXIV, buildBabXV, buildReferensi };
