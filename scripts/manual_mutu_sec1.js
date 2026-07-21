// ============================================================
// SECTIONS: KATA PENGANTAR + BAB I + BAB II
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./manual_mutu_core.js");

// ============================================================
// KATA PENGANTAR
// ============================================================
function buildKataPengantar() {
  const items = [];
  
  items.push(h1("KATA PENGANTAR"));
  
  items.push(body(
    "Puji syukur senantiasa kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat, hidayah, dan karunia-Nya, sehingga Pusat Penjaminan Mutu Universitas Tulungagung dapat menyelesaikan penyusunan dokumen Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Penyusunan dokumen ini merupakan wujud nyata komitmen Universitas Tulungagung dalam menjalankan amanat Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, yang menjadi landasan regulasi terkini bagi penyelenggaraan Sistem Penjaminan Mutu Pendidikan Tinggi di Indonesia."
  ));
  
  items.push(body(
    "Manual Mutu ini merupakan pengembangan dari Manual Akademik Universitas Tulungagung sebelumnya dan telah sepenuhnya diselaraskan dengan Permendiktisaintek Nomor 39 Tahun 2025. Dokumen ini berisi petunjuk praktis mengenai cara, langkah, atau prosedur tentang bagaimana SPMI dilaksanakan, dievaluasi, dan ditingkatkan mutunya secara berkelanjutan melalui siklus Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (PPEPP). Manual Mutu ini menjadi acuan operasional utama dalam pengelolaan penjaminan mutu di lingkungan Universitas Tulungagung, mulai dari tingkat universitas, fakultas, hingga program studi."
  ));
  
  items.push(body(
    "Manual Mutu ini mengintegrasikan prinsip-prinsip baru yang ditegaskan dalam Permen 39 Tahun 2025, antara lain: prinsip triangulasi data berbasis Pangkalan Data Pendidikan Tinggi (PD Dikti) sebagaimana diatur dalam Pasal 66; tata kelola perguruan tinggi yang baik berdasarkan prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan sebagaimana diatur dalam Pasal 67 ayat (2); serta restrukturisasi sembilan Standar Nasional Pendidikan Tinggi (SN Dikti) sesuai Pasal 4 dan Pasal 5. Dengan demikian, Manual Mutu ini tidak hanya menjadi pedoman teknis, tetapi juga mencerminkan komitmen Universitas Tulungagung untuk memenuhi dan melampaui SN Dikti secara berkelanjutan."
  ));
  
  items.push(body(
    "Kami menyampaikan terima kasih yang tulus kepada seluruh pihak internal dan eksternal Universitas Tulungagung yang telah memberikan kontribusi, masukan, dan kritik membangun dalam proses penyusunan dokumen ini. Kritik, saran, dan masukan dari berbagai pihak senantiasa kami harapkan demi penyempurnaan dokumen Manual Mutu ini di masa mendatang. Kami berharap bahwa Manual Mutu ini digunakan oleh pihak-pihak yang disebutkan dalam dokumen SPMI, sehingga kita mampu mengakselerasi perwujudan Budaya Mutu di Universitas Tulungagung untuk mewujudkan visi Universitas Tulungagung sebagai perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional."
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
  
  // 1.1 Visi, Misi, Tujuan
  items.push(h2("1.1 Visi, Misi, Tujuan, dan Sasaran Strategis Perguruan Tinggi"));
  
  items.push(body(
    "Universitas Tulungagung sebagai institusi pendidikan tinggi telah menetapkan visi, misi, tujuan, dan sasaran strategis yang menjadi arah dan pijakan bagi seluruh kegiatan penyelenggaraan Tridharma Perguruan Tinggi. Rumusan tersebut menjadi landasan filosofis dan operasional bagi penyusunan Manual Mutu Sistem Penjaminan Mutu Internal (SPMI), sehingga setiap prosedur dan kegiatan penjaminan mutu di Universitas Tulungagung senantiasa selaras dengan arah strategis lembaga. Berikut ini adalah visi, misi, tujuan, dan sasaran strategis Universitas Tulungagung yang menjadi acuan bagi dokumen Manual Mutu ini."
  ));
  
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 120, after: 60, line: 312 },
    children: [new TextRun({ text: "Visi Universitas Tulungagung:", bold: true, size: 24, font: FONT })],
  }));
  
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 200, line: 312 },
    indent: { left: 720, right: 720 },
    children: [new TextRun({
      text: "\u201cMewujudkan Perguruan Tinggi yang Berkualitas dan Mampu Berkompetisi Berskala Nasional Dan Internasional.\u201d",
      bold: true, italics: true, size: 24, font: FONT,
    })],
  }));
  
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 120, after: 60, line: 312 },
    children: [new TextRun({ text: "Misi Universitas Tulungagung:", bold: true, size: 24, font: FONT })],
  }));
  
  const misi = [
    "1. Peningkatan penyelenggaraan pendidikan, penelitian, dan pengabdian kepada masyarakat yang berkualitas menuju terbentuknya lulusan mandiri;",
    "2. Peningkatan kualitas Sumber Daya Manusia yang meliputi tenaga pendidik dan tenaga kependidikan;",
    "3. Peningkatan sarana dan prasarana akademik yang mendukung proses belajar mengajar.",
  ];
  misi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: "Tujuan Universitas Tulungagung:", bold: true, size: 24, font: FONT })],
  }));
  
  const tujuan = [
    "1. Berkembangnya potensi mahasiswa agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa dan berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, terampil, kompeten, dan berbudaya untuk kepentingan bangsa;",
    "2. Dihasilkannya lulusan yang menguasai cabang ilmu pengetahuan dan/atau teknologi untuk memenuhi kepentingan nasional dan peningkatan daya saing bangsa;",
    "3. Dihasilkannya ilmu pengetahuan dan teknologi melalui penelitian yang memperhatikan dan menerapkan nilai humaniora agar bermanfaat bagi kemajuan bangsa, serta kemajuan peradaban dan kesejahteraan umat manusia;",
    "4. Terwujudnya pengabdian kepada masyarakat berbasis penalaran dan karya penelitian yang bermanfaat dalam memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa.",
  ];
  tujuan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: "Sasaran Strategis Universitas Tulungagung:", bold: true, size: 24, font: FONT })],
  }));
  
  const sasaran = [
    "1. Terimplementasinya regulasi pendidikan sesuai dengan SN Dikti dan kebijakan pemerintah, khususnya Permendiktisaintek Nomor 39 Tahun 2025;",
    "2. Peningkatan kemampuan ilmiah dengan lebih mengembangkan program pendidikan akademik, profesional, dan pengembangan program penelitian universitas;",
    "3. Terbangunnya integrasi dosen dan mahasiswa dalam kegiatan penelitian dan Pengabdian kepada Masyarakat (PkM);",
    "4. Tercapainya kualitas dan kuantitas kegiatan penelitian berupa publikasi hasil penelitian atau PkM pada jurnal terakreditasi nasional dan internasional;",
    "5. Dihasilkannya produk unggulan berbasis Teknologi Tepat Guna yang berdampak untuk kesejahteraan masyarakat;",
    "6. Terjalinnya kerja sama nasional dan internasional yang berorientasi pada output berkelanjutan;",
    "7. Dimilikinya jiwa Entrepreneur University (EU) kewirausahaan;",
    "8. Terselenggaranya kegiatan peningkatan dan pengembangan sertifikasi akademik dan non-akademik bagi mahasiswa sebagai penunjang SKPI;",
    "9. Meningkatkan peringkat akreditasi Program Studi dan Universitas menuju status terakreditasi unggul sesuai Pasal 73 dan Pasal 74 Permen 39 Tahun 2025.",
  ];
  sasaran.forEach(t => items.push(bodyNoIndent(t)));
  
  // 1.2 Tujuan Manual Mutu
  items.push(h2("1.2 Tujuan Manual Mutu PPM Universitas Tulungagung"));
  
  items.push(body(
    "Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung disusun dengan tujuan untuk memberikan petunjuk praktis bagi seluruh unit kerja dalam melaksanakan siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan) terhadap setiap standar mutu yang berlaku di lingkungan Universitas Tulungagung. Manual Mutu ini menjadi acuan operasional bagi Pusat Penjaminan Mutu (PPM), Lembaga Penjaminan Mutu (LPM) fakultas, Gugus Penjaminan Mutu (GPM) program studi, serta seluruh unit kerja yang terlibat dalam penyelenggaraan Tridharma Perguruan Tinggi. Tujuan utama Manual Mutu ini adalah mendorong tercapainya budaya mutu di seluruh lingkungan Universitas Tulungagung, sehingga setiap aktivitas akademik dan non-akademik dilandasi oleh kesadaran akan pentingnya mutu, akuntabilitas, dan peningkatan berkelanjutan."
  ));
  
  items.push(body(
    "Selain itu, Manual Mutu ini juga bertujuan untuk: (a) memastikan bahwa pelaksanaan SPMI di Universitas Tulungagung sesuai dengan ketentuan Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025; (b) menyediakan panduan teknis yang konsisten bagi seluruh unit kerja dalam menjalankan tugas penjaminan mutu; (c) memperkuat akuntabilitas dan transparansi pelaksanaan SPMI melalui dokumentasi yang sistematis; (d) menjadi rujukan bagi auditor internal dan asesor eksternal dalam menilai pelaksanaan SPMI di Universitas Tulungagung; dan (e) memfasilitasi peningkatan mutu berkelanjutan melalui mekanisme evaluasi dan tindak lanjut yang terstruktur. Dengan tercapainya tujuan-tujuan tersebut, Manual Mutu ini diharapkan dapat menjadi instrumen yang efektif bagi Universitas Tulungagung untuk memenuhi dan melampaui SN Dikti, serta memperoleh status akreditasi terakreditasi unggul untuk seluruh program studi dan perguruan tinggi."
  ));
  
  // 1.3 Ruang Lingkup
  items.push(h2("1.3 Ruang Lingkup Cakupan Manual SPMI UNITA"));
  
  items.push(body(
    "Ruang lingkup cakupan Manual SPMI Universitas Tulungagung mencakup seluruh aspek penyelenggaraan Tridharma Perguruan Tinggi dan aspek nonakademik pendukungnya, sebagaimana diatur dalam Pasal 65 Permen 39 Tahun 2025. Sesuai Pasal 65 ayat (2), Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) mencakup bidang akademik dan bidang nonakademik. Bidang akademik berkaitan dengan Tridharma Perguruan Tinggi—yaitu pendidikan, penelitian, dan pengabdian kepada masyarakat—sedangkan bidang nonakademik meliputi organisasi, keuangan, kemahasiswaan, ketenagaan, dan sarana prasarana. Dengan demikian, tidak ada satu pun aspek penyelenggaraan Universitas Tulungagung yang berada di luar jangkauan Manual SPMI ini."
  ));
  
  items.push(body(
    "Secara struktural, ruang lingkup Manual SPMI UNITA mencakup seluruh unit kerja di lingkungan Universitas Tulungagung, mulai dari tingkat universitas (Rektorat, PPM, LPPM, Biro, UPT), fakultas (Dekan, LPM fakultas), hingga program studi (Ka. Prodi, GKM, UPPS). Setiap unit kerja memiliki tanggung jawab spesifik dalam pelaksanaan siklus PPEPP, dan Manual Mutu ini memberikan panduan teknis untuk masing-masing peran. Selain itu, ruang lingkup Manual SPMI juga mencakup seluruh tahapan PPEPP—mulai dari perumusan standar, pelaksanaan, evaluasi melalui AMI dan RTM, pengendalian tindak lanjut, hingga peningkatan mutu berkelanjutan—sehingga membentuk siklus yang utuh dan terintegrasi."
  ));
  
  items.push(body(
    "Manual SPMI UNITA juga mengatur integrasi dengan sistem eksternal, khususnya Pangkalan Data Pendidikan Tinggi (PD Dikti) sebagaimana diatur dalam Pasal 111 Permen 39 Tahun 2025. Seluruh data dan informasi yang digunakan dalam pelaksanaan SPMI bersumber dari dan terintegrasi dengan PD Dikti, dengan prinsip triangulasi sebagaimana diatur dalam Pasal 66. Universitas Tulungagung bertanggung jawab terhadap kebenaran dan ketepatan data yang diinput ke PD Dikti, dan memastikan bahwa setiap keputusan strategis terkait mutu berbasis pada data yang valid dan dapat dipertanggungjawabkan."
  ));
  
  // 1.4 Definisi Istilah
  items.push(h2("1.4 Definisi Istilah"));
  
  items.push(body(
    "Dalam dokumen Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung ini, istilah-istilah teknis dan administratif yang digunakan mengacu pada definisi yang telah dibakukan dalam Pasal 1 Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, dilengkapi dengan definisi operasional yang umum digunakan dalam praktik penjaminan mutu di lingkungan perguruan tinggi. Definisi dan istilah dalam dokumen Manual Mutu ini adalah sebagai berikut:"
  ));
  
  const definisi = [
    ["1)", "Penjaminan Mutu Pendidikan Tinggi", "kegiatan sistemik untuk meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["2)", "Standar Nasional Pendidikan Tinggi (SN Dikti)", "satuan standar yang meliputi standar nasional pendidikan ditambah dengan standar penelitian dan standar pengabdian kepada masyarakat."],
    ["3)", "Tridharma Perguruan Tinggi", "kewajiban perguruan tinggi untuk menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat."],
    ["4)", "Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti)", "rangkaian unsur dan proses terkait mutu pendidikan tinggi yang saling berkaitan dan tersusun secara teratur dalam menjamin dan meningkatkan mutu pendidikan tinggi secara berencana dan berkelanjutan."],
    ["5)", "Sistem Penjaminan Mutu Internal (SPMI)", "rangkaian unsur dan proses yang saling berkaitan dan tersusun secara teratur dalam rangka menjamin dan meningkatkan mutu pendidikan tinggi di perguruan tinggi secara otonom."],
    ["6)", "Sistem Penjaminan Mutu Eksternal (SPME)", "rangkaian unsur dan proses yang saling berkaitan dan tersusun secara teratur dalam rangka menjamin dan meningkatkan mutu pendidikan tinggi melalui Akreditasi."],
    ["7)", "Pangkalan Data Pendidikan Tinggi (PD Dikti)", "kumpulan data penyelenggaraan pendidikan tinggi seluruh perguruan tinggi yang terintegrasi secara nasional, yang menjadi sumber data dan informasi utama bagi implementasi SPM Dikti."],
    ["8)", "Kebijakan SPMI", "dokumen tertulis berisi garis besar penjelasan tentang bagaimana suatu perguruan tinggi memahami, merancang, dan melaksanakan SPMI dalam menyelenggaraan pelayanan pendidikan tinggi."],
    ["9)", "Manual SPMI", "dokumentasi tertulis berisi petunjuk praktis mengenai cara, langkah, atau prosedur tentang bagaimana SPMI dilaksanakan, dievaluasi, dan ditingkatkan mutunya secara berkelanjutan."],
    ["10)", "Standar SPMI", "dokumen tertulis berisi berbagai kriteria, ukuran, patokan, atau spesifikasi dari seluruh kegiatan penyelenggaraan pendidikan tinggi suatu perguruan tinggi."],
    ["11)", "Merancang Standar", "olah pikir untuk menghasilkan standar tentang ukuran/kriteria tertentu yang belum ada."],
    ["12)", "Merumuskan Standar", "menuliskan isi setiap standar dalam bentuk dokumen tertulis dengan format yang baku."],
    ["13)", "Menetapkan Standar", "tindakan berupa persetujuan dan pengesahan rancangan standar mutu agar berlaku secara resmi."],
    ["14)", "Melaksanakan Standar", "mengerjakan, mematuhi, dan memenuhi standar yang telah ditetapkan."],
    ["15)", "Standar Operasional Prosedur (SOP)", "uraian tentang urutan atau prosedur sistematis tentang cara melaksanakan suatu kegiatan."],
    ["16)", "Formulir/Borang", "dokumen tertulis yang berfungsi untuk mencatat, merekam hal atau informasi atau kegiatan tertentu sebagai bagian yang tak terpisahkan dari standar mutu."],
    ["17)", "Monitoring", "tindakan mengamati suatu proses atau kegiatan secara berkala untuk memastikan pelaksanaan sesuai rencana."],
    ["18)", "Evaluasi", "tindakan mengecek atau mengaudit secara detil semua pelaksanaan dan hasil kegiatan yang telah dilakukan."],
    ["19)", "Evaluasi Standar", "tindakan menilai isi standar didasarkan pada hasil pelaksanaan standar, untuk menilai apakah standar tersebut masih relevan, tepat, dan cukup memadai."],
    ["20)", "Pengembangan atau Peningkatan Standar", "upaya untuk meningkatkan isi, luas lingkup, atau kedalaman substansi standar agar lebih baik dari sebelumnya."],
    ["21)", "Siklus Standar", "durasi atau masa berlakunya standar SPMI dengan jadwal yang telah ditentukan."],
    ["22)", "Dampak", "gambaran apakah yang dilakukan menghasilkan keluaran, baik yang diharapkan maupun yang tidak diharapkan."],
    ["23)", "Audit Mutu Internal (AMI)", "kegiatan pemeriksaan kepatuhan yang secara internal dilakukan oleh auditor Universitas Tulungagung terhadap pelaksanaan SPMI."],
    ["24)", "Rapat Tinjauan Manajemen (RTM)", "rapat formal manajemen puncak untuk mengevaluasi penerapan sistem mutu dan merumuskan tindakan koreksi serta prioritas peningkatan."],
    ["25)", "Pusat Penjaminan Mutu (PPM)", "unit kerja fungsional di tingkat universitas yang bertugas merencanakan, menerapkan, mengendalikan, dan mengembangkan SPMI."],
    ["26)", "Lembaga Penjaminan Mutu (LPM)", "lembaga di tingkat fakultas/pascasarjana yang bertugas mengelola SPMI di fakultas."],
    ["27)", "Gugus Penjaminan Mutu (GKM)", "unsur di tingkat program studi yang bertugas mengelola SPMI di program studi."],
    ["28)", "Unit Pengelola Program Studi (UPPS)", "unit yang merencanakan seluruh upaya pengembangan program studi berbasis evaluasi diri."],
    ["29)", "Permintaan Tindakan Koreksi (PTK)", "permintaan formal untuk melakukan koreksi atas temuan ketidaksesuaian dalam audit mutu internal."],
    ["30)", "Rencana Tindak Lanjut (RTL)", "rencana yang disusun sebagai tindak lanjut dari hasil AMI dan RTM."],
    ["31)", "Indikator Kinerja Utama (IKU)", "ukuran kuantitatif yang menggambarkan kinerja perguruan tinggi dalam aspek-aspek strategis yang menjadi prioritas."],
    ["32)", "Prinsip Triangulasi", "penggalian kebenaran informasi melalui penggunaan berbagai sumber data dan sudut pandang yang saling melengkapi, sebagaimana diatur dalam Pasal 66 Permen 39 Tahun 2025."],
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
// BAB II ANALISIS RISIKO DAN PELUANG
// ============================================================
function buildBabII() {
  const items = [];
  
  items.push(h1("BAB II\nANALISIS RISIKO DAN PELUANG"));
  
  items.push(body(
    "Bab ini menjabarkan analisis risiko dan peluang yang menjadi dasar bagi penyusunan dan pelaksanaan Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung. Analisis ini dilakukan untuk mengidentifikasi faktor-faktor internal dan eksternal yang dapat mempengaruhi pelaksanaan SPMI, sehingga dapat dirumuskan strategi mitigasi risiko dan pemanfaatan peluang secara efektif. Pendekatan manajemen mutu berbasis risiko sejalan dengan amanat Pasal 67 ayat (2) Permen 39 Tahun 2025 yang mensyaratkan penerapan tata kelola perguruan tinggi yang baik, termasuk prinsip efektivitas dan efisiensi dalam pengelolaan risiko."
  ));
  
  // 2.1 Analisis SWOT
  items.push(h2("2.1 Analisis SWOT Universitas Tulungagung"));
  
  items.push(body(
    "Analisis SWOT (Strengths, Weaknesses, Opportunities, Threats) dilakukan untuk mengidentifikasi posisi strategis Universitas Tulungagung dalam pelaksanaan SPMI. Berikut adalah hasil analisis SWOT yang menjadi dasar bagi perumusan strategi penjaminan mutu:"
  ));
  
  // Strengths
  items.push(h3("a. Strengths (Kekuatan)"));
  
  items.push(body("Kekuatan internal Universitas Tulungagung dalam pelaksanaan SPMI meliputi:"));
  
  const strengths = [
    "1. Status Perguruan Tinggi Swasta, UNITA memiliki kemandirian dalam pengelolaan SPMI;",
    "2. UNITA sudah memiliki dokumen SPMI terkait kebijakan SPMI, Manual Mutu, Standar Mutu, dan Formulir Mutu;",
    "3. UNITA sudah memiliki standar mutu UNITA yang tertuang dalam dokumen standar mutu;",
    "4. UNITA sudah menetapkan model inovasi sistem penjaminan mutu yang memenuhi siklus PPEPP sesuai Pasal 68 Permen 39 Tahun 2025;",
    "5. UNITA memiliki dosen profesional yang dapat mendukung pelaksanaan Tridharma berkualitas;",
    "6. UNITA telah melakukan AMI secara berkala dengan lingkup audit seluruh unit kerja;",
    "7. Tersedianya auditor internal dalam jumlah yang memadai untuk pelaksanaan AMI;",
    "8. Tersedianya Instruksi Kerja untuk auditor, verifikator, dan auditee;",
    "9. Terlaksananya AMI secara mandiri di tingkat Fakultas untuk efisiensi pelaksanaan;",
    "10. UNITA memiliki sistem informasi dan data yang efektif untuk mendukung SPMI;",
    "11. UNITA telah mempunyai organ penjaminan mutu non akademik yang berfungsi;",
    "12. Sudah terlaksana proses audit pengelolaan keuangan dan akademik secara berkala;",
    "13. Sudah tersedia sistem pelaporan akuntabilitas kinerja melalui e-monev dan dokumen sejenis.",
  ];
  strengths.forEach(t => items.push(bodyNoIndent(t)));
  
  // Weaknesses
  items.push(h3("b. Weaknesses (Kelemahan)"));
  
  items.push(body("Kelemahan internal Universitas Tulungagung dalam pelaksanaan SPMI meliputi:"));
  
  const weaknesses = [
    "1. Belum semua pimpinan fakultas dan program studi, serta pengelola program studi memahami konsep SPMI sesuai Permendiktisaintek Nomor 39 Tahun 2025;",
    "2. Sebagian auditor internal sedang menjadi jabatan struktural sehingga beban tugas ganda;",
    "3. Terdapat ketidakmerataan antara jumlah auditor dalam fakultas dengan jumlah unit yang diaudit;",
    "4. Keterbaharuan kebijakan menuntut perubahan ruang lingkup AMI yang berdampak pada dokumen instrumen AMI;",
    "5. Ketepatan waktu pengumpulan instrumen dan hasil audit masih perlu ditingkatkan;",
    "6. Pergantian personalia jaminan mutu di tingkat UNITA, Fakultas, dan Program Studi yang cukup sering;",
    "7. Belum semua pengelola PS dan Ka. PS memahami perubahan regulasi terkini khususnya Permen 39 Tahun 2025;",
    "8. Belum optimalnya peran UPPS dalam melakukan pemantauan siklus PPEPP secara berkelanjutan;",
    "9. Kerja sama institusional belum berjalan maksimal;",
    "10. Kontribusi Revenue Generating Unit (RGU) UNITA masih rendah;",
    "11. Belum terdapatnya sistem informasi audit internal yang terintegrasi;",
    "12. Belum adanya mekanisme early warning system di UNITA dan fakultas;",
    "13. Sinkronisasi data dan informasi PD Dikti untuk mendukung penjaminan mutu masih perlu ditingkatkan;",
    "14. Belum optimal koordinasi terkait tindak lanjut evaluasi penjaminan mutu;",
    "15. Pemanfaatan sarana dan prasarana pendidikan belum optimal.",
  ];
  weaknesses.forEach(t => items.push(bodyNoIndent(t)));
  
  // 2.2 Analisis Risiko
  items.push(h2("2.2 Analisis Risiko"));
  
  items.push(body(
    "Sesuai dengan pendekatan manajemen mutu berbasis risiko yang diterapkan di Universitas Tulungagung, terdapat empat jenis risiko utama yang dapat terjadi dalam pelaksanaan SPMI. Setiap jenis risiko memiliki karakteristik dan dampak yang berbeda, sehingga memerlukan strategi mitigasi yang spesifik. Empat jenis risiko tersebut adalah:"
  ));
  
  const risikoList = [
    { judul: "a. Risiko Kebijakan", isi: "Risiko yang terkait dengan proses dan mekanisme penetapan kebijakan di tingkat pimpinan Universitas. Risiko ini meliputi kemungkinan kebijakan yang ditetapkan tidak sesuai dengan regulasi yang berlaku, tidak adaptif terhadap perubahan, atau tidak mendapat dukungan dari pemangku kepentingan. Contoh konkret: kebijakan SPMI yang tidak selaras dengan Permen 39 Tahun 2025, perubahan struktur organisasi yang tidak diiringi dengan penyesuaian kebijakan mutu, atau ketidakkonsistenan antar-kebijakan di tingkat universitas, fakultas, dan program studi." },
    { judul: "b. Risiko Kepatuhan", isi: "Risiko yang terkait dengan realisasi pada tingkat pelaksana. Risiko ini meliputi kemungkinan unit kerja atau individu tidak mematuhi kebijakan dan prosedur yang telah ditetapkan. Contoh konkret: data PD Dikti yang tidak diinput tepat waktu, dokumen SPMI yang tidak diperbarui sesuai jadwal, atau temuan AMI yang tidak ditindaklanjuti. Risiko kepatuhan dapat berdampak pada status akreditasi, sehingga perlu dimitigasi melalui monitoring berkala dan sanksi yang tegas." },
    { judul: "c. Risiko Operasional", isi: "Risiko yang terkait dengan teknis pelaksanaan kebijakan yang telah ditetapkan. Risiko ini meliputi kemungkinan kegagalan proses, ketidaktersediaan sumber daya, atau gangguan sistem. Contoh konkret: sistem informasi yang down saat pengisian AMI, auditor yang tidak tersedia saat jadwal audit, atau dokumen SPMI yang hilang karena pengelolaan dokumen yang buruk. Risiko operasional dapat dimitigasi melalui SOP yang jelas, pelatihan SDM, dan sistem back-up yang memadai." },
    { judul: "d. Risiko Reputasi", isi: "Risiko yang terkait dengan akibat dari pelaksanaan kebijakan yang akan memberi pengaruh pada reputasi UNITA di tingkat nasional maupun internasional. Risiko ini meliputi kemungkinan penurunan kepercayaan publik, penurunan minat calon mahasiswa, atau penurunan peringkat akreditasi. Contoh konkret: status akreditasi yang turun karena temuan ketidaksesuaian, publikasi negatif di media terkait mutu pendidikan, atau pengaduan masyarakat yang tidak ditangani dengan baik." },
  ];
  risikoList.forEach(r => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 120 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: r.judul + " ", size: 24, font: FONT, bold: true }),
        new TextRun({ text: r.isi, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Tabel Matriks Risiko
  items.push(body(
    "Tabel berikut merangkum matriks risiko dan strategi mitigasi yang akan diterapkan di Universitas Tulungagung:"
  ));
  
  const risikoTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Jenis Risiko", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Dampak Potensial", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Strategi Mitigasi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Risiko Kebijakan", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Kebijakan tidak selaras dengan regulasi; ketidakkonsistenan antar-tingkat", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("Kaji berkala regulasi; konsultasi Senat; peninjauan berkala dokumen SPMI", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Risiko Kepatuhan", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Data PD Dikti tidak tepat waktu; temuan AMI tidak ditindaklanjuti", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("Monitoring berkala; sanksi tegas; pelatihan ulang; eskalasi ke pimpinan", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Risiko Operasional", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Sistem down; auditor tidak tersedia; dokumen hilang", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("SOP jelas; pelatihan SDM; sistem back-up; pengelolaan dokumen terstruktur", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Risiko Reputasi", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Penurunan akreditasi; publikasi negatif; penurunan minat calon mahasiswa", { align: AlignmentType.LEFT, size: 20, width: 35 }),
          cell("Tindak lanjut cepat; transparansi publik; perbaikan berkelanjutan; PR aktif", { align: AlignmentType.LEFT, size: 20, width: 45 }),
        ],
      }),
    ],
  });
  items.push(risikoTable);
  
  // 2.3 Manajemen Mutu Berbasis Risiko
  items.push(h2("2.3 Manajemen Mutu Berbasis Risiko di UNITA"));
  
  items.push(body(
    "Salah satu tujuan SPMI UNITA adalah pencapaian visi-misi melalui pemenuhan standar mutu dengan cara perbaikan berkelanjutan (continuous improvement), menggunakan manajemen mutu berbasis risiko. Yang dimaksud manajemen mutu berbasis risiko adalah penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan (PPEPP) Standar Mutu Berbasis Risiko. Pendekatan ini sejalan dengan amanat Pasal 67 ayat (2) Permen 39 Tahun 2025 yang mensyaratkan penerapan tata kelola perguruan tinggi yang baik berdasarkan prinsip akuntabilitas, transparansi, nirlaba, efektivitas, efisiensi, dan peningkatan mutu berkelanjutan."
  ));
  
  items.push(body(
    "Dalam implementasinya, manajemen mutu berbasis risiko di UNITA diterapkan pada setiap tahapan PPEPP. Pada tahap Penetapan, dilakukan analisis risiko atas rancangan standar untuk mengidentifikasi potensi hambatan pelaksanaan. Pada tahap Pelaksanaan, dilakukan monitoring terhadap risiko-risiko yang teridentifikasi dan risiko baru yang muncul. Pada tahap Evaluasi, dilakukan penilaian terhadap efektivitas mitigasi risiko yang telah dilakukan. Pada tahap Pengendalian, dilakukan tindakan koreksi atas risiko yang terjadi. Pada tahap Peningkatan, dilakukan perbaikan sistem manajemen risiko berdasarkan pengalaman dan pelajaran yang diperoleh dari siklus sebelumnya."
  ));
  
  // 2.4 Peluang Peningkatan Mutu
  items.push(h2("2.4 Peluang Peningkatan Mutu"));
  
  items.push(body(
    "Selain risiko, Universitas Tulungagung juga mengidentifikasi peluang-peluang strategis yang dapat dimanfaatkan untuk meningkatkan mutu. Peluang-peluang tersebut antara lain: (a) berlakunya Permendiktisaintek Nomor 39 Tahun 2025 yang membuka peluang penyederhanaan mekanisme akreditasi berbasis PD Dikti sebagaimana diatur dalam Pasal 78 ayat (2); (b) tersedianya berbagai Lembaga Akreditasi Mandiri (LAM) yang memungkinkan akreditasi spesifik per rumpun ilmu; (c) peluang memperoleh status terakreditasi unggul dan terakreditasi secara internasional sebagaimana diatur dalam Pasal 73-74 dan Pasal 107; (d) kemajuan teknologi informasi yang memungkinkan otomasi proses SPMI; (e) meningkatnya kesadaran masyarakat akan mutu pendidikan tinggi yang membuka pelongan kerja sama strategis dengan DUDI; serta (f) kebijakan Merdeka Belajar Kampus Merdeka (MBKM) yang membuka peluang pengayaan pengalaman mahasiswa."
  ));
  
  items.push(body(
    "Universitas Tulungagung berkomitmen untuk memanfaatkan peluang-peluang tersebut secara strategis, dengan tetap waspada terhadap risiko yang menyertainya. Pemanfaatan peluang dilakukan melalui perencanaan yang matang, eksekusi yang konsisten, dan evaluasi yang berkelanjutan, sehingga setiap peluang dapat dikonversi menjadi pencapaian nyata yang meningkatkan mutu Universitas Tulungagung."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildKataPengantar, buildBabI, buildBabII };
