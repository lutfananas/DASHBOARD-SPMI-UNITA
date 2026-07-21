// ============================================================
// BAB I: PENDAHULUAN
// BAB II: VISI, MISI, TUJUAN, SASARAN STRATEGIS
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// BAB I: PENDAHULUAN
// ============================================================
function buildBabI() {
  const items = [];
  
  items.push(h1("BAB I\nPENDAHULUAN"));
  
  // 1.1 Latar Belakang
  items.push(h2("1.1 Latar Belakang"));
  
  items.push(body(
    "Universitas Tulungagung sebagai institusi pendidikan tinggi memiliki tanggung jawab strategis dalam mencerdaskan kehidupan bangsa, memajukan ilmu pengetahuan dan teknologi, serta menghasilkan sumber daya manusia unggul yang mampu berkompetisi pada skala nasional dan internasional. Dalam menjalankan tanggung jawab tersebut, Universitas Tulungagung wajib memastikan bahwa seluruh penyelenggaraan Tridharma Perguruan Tinggi—yang meliputi pendidikan, penelitian, dan pengabdian kepada masyarakat—dilaksanakan sesuai dengan standar mutu yang telah ditetapkan, baik standar nasional maupun standar yang ditetapkan oleh perguruan tinggi itu sendiri."
  ));
  
  items.push(body(
    "Berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi sejak tanggal 2 September 2025 membawa konsekuensi yuridis dan operasional yang signifikan bagi setiap perguruan tinggi. Peraturan ini menjadi landasan regulasi terkini yang menggantikan regulasi sebelumnya, sehingga seluruh dokumen Sistem Penjaminan Mutu Internal (SPMI) yang ada di Universitas Tulungagung wajib disesuaikan agar selaras dengan kerangka regulasi terbaru. Penyesuaian ini bukan sekadar substitusi normatif, melainkan reformasi substansial terhadap tata kelola, struktur standar, dan mekanisme penjaminan mutu yang berlaku di lingkungan universitas."
  ));
  
  items.push(body(
    "Di tengah persaingan global, tuntutan masyarakat akan lulusan yang kompeten dan siap kerja, serta perkembangan ilmu pengetahuan dan teknologi yang dinamis, perguruan tinggi dituntut untuk terus meningkatkan mutu akademik, manajerial, dan layanan pendukung lainnya. Implementasi SPMI yang kuat (powerful) membantu perguruan tinggi dalam menilai, mengukur, dan memperbaiki berbagai aspek operasional, mulai dari kurikulum, proses pembelajaran, hingga kinerja dosen dan staf. Selain itu, SPMI juga memungkinkan perguruan tinggi untuk lebih responsif terhadap perubahan kebutuhan dunia kerja dan teknologi dengan cara melakukan evaluasi serta perbaikan berkelanjutan berbasis prinsip triangulasi data sebagaimana diamanatkan Pasal 66 Permen 39 Tahun 2025."
  ));
  
  items.push(body(
    "Sistem Penjaminan Mutu Internal Universitas Tulungagung bertujuan secara sistematis dan berkelanjutan meningkatkan kualitas pendidikan, sehingga mampu menghasilkan lulusan yang berdaya saing tinggi serta berkontribusi positif terhadap pembangunan nasional dan internasional. Melalui penerapan SPMI yang terintegrasi dengan Sistem Penjaminan Mutu Eksternal (SPME) berbasis Akreditasi, perguruan tinggi tidak hanya menjaga kualitas internal, tetapi juga membangun kepercayaan masyarakat, pemerintah, industri, dan calon mahasiswa. Komitmen yang kuat terhadap penjaminan mutu akan membangun citra positif Universitas Tulungagung, meningkatkan minat calon mahasiswa, memperluas kemitraan dengan industri, dan membuka peluang pendanaan serta kerja sama penelitian dan pengembangan."
  ));
  
  // 1.2 Dasar Hukum
  items.push(h2("1.2 Dasar Hukum"));
  
  items.push(body(
    "Penyusunan dan penetapan Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025 didasarkan pada peraturan perundang-undangan yang berlaku, yang menjadi landasan yuridis dan operasional bagi seluruh kegiatan penjaminan mutu di lingkungan universitas. Dasar hukum ini merupakan kerangka regulasi terkini yang berlaku efektif sejak tanggal diundangkannya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025, sehingga seluruh dokumen SPMI Universitas Tulungagung telah sepenuhnya diselaraskan dengan regulasi terbaru tersebut."
  ));
  
  items.push(body("Dasar hukum Kebijakan Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
  const dasarHukum = [
    "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;",
    "2. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "3. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "4. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "5. Peraturan Badan Akreditasi Nasional Perguruan Tinggi yang berlaku;",
    "6. Statuta Universitas Tulungagung;",
    "7. Rencana Strategis (Renstra) Universitas Tulungagung.",
  ];
  dasarHukum.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Seluruh dasar hukum tersebut menjadi pijakan yuridis bagi setiap kebijakan, standar, prosedur, dan kegiatan yang dilaksanakan dalam rangka penjaminan mutu internal di Universitas Tulungagung. Setiap perubahan regulasi yang berlaku akan diakomodasi melalui peninjauan berkala dokumen Kebijakan Mutu ini, sehingga selalu selaras dengan perkembangan kebijakan pemerintah di bidang penjaminan mutu pendidikan tinggi."
  ));
  
  // 1.3 Tujuan Dokumen Kebijakan SPMI
  items.push(h2("1.3 Tujuan Dokumen Kebijakan SPMI"));
  
  items.push(body(
    "Tujuan dokumen Kebijakan Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung adalah memberikan pedoman yang jelas, terstruktur, dan komprehensif bagi seluruh sivitas akademika dalam menjalankan dan mengelola sistem penjaminan mutu di lingkungan akademik. Dokumen ini bertujuan untuk menetapkan standar, prosedur, dan mekanisme yang diperlukan guna memastikan bahwa semua proses pendidikan, penelitian, dan pengabdian kepada masyarakat dilaksanakan sesuai dengan standar kualitas yang telah ditetapkan, baik SN Dikti maupun Standar Pendidikan Tinggi yang ditetapkan oleh Universitas Tulungagung. Dengan adanya kebijakan ini, perguruan tinggi dapat mengidentifikasi area-area yang memerlukan perbaikan dan mengambil langkah-langkah strategis untuk meningkatkan mutu secara berkelanjutan."
  ));
  
  items.push(body(
    "Selain memberikan panduan operasional, dokumen Kebijakan SPMI juga bertujuan untuk memperkuat akuntabilitas dan transparansi dalam pengelolaan perguruan tinggi. Dokumen ini menguraikan tanggung jawab dan peran masing-masing pihak dalam implementasi SPMI, mulai dari Rektor, Wakil Rektor, Dekan, Ketua Program Studi, Pusat Penjaminan Mutu (PPM), Lembaga Penjaminan Mutu (LPM) fakultas, Gugus Penjaminan Mutu (GPM) program studi, hingga dosen, tenaga kependidikan, dan mahasiswa. Dengan jelasnya pembagian tugas dan tanggung jawab, setiap individu dan unit kerja di Universitas Tulungagung dapat lebih memahami kontribusi mereka dalam mencapai tujuan mutu yang diinginkan, serta merasa lebih terlibat dan bertanggung jawab dalam upaya peningkatan mutu."
  ));
  
  items.push(body(
    "Dokumen Kebijakan SPMI juga berfungsi sebagai alat strategis untuk mendorong budaya peningkatan mutu yang berkelanjutan di seluruh lingkungan Universitas Tulungagung. Dengan adanya kebijakan yang tertulis dan terstruktur, perguruan tinggi dapat menciptakan budaya yang mendukung inovasi, evaluasi, dan perbaikan berkelanjutan dalam semua aspek operasional. Hal ini akan mendorong seluruh civitas akademika untuk selalu berupaya meningkatkan kualitas pendidikan dan layanan yang diberikan, serta beradaptasi dengan perubahan dan perkembangan yang terjadi di dunia pendidikan tinggi, sehingga meningkatkan reputasi dan kepercayaan masyarakat terhadap perguruan tinggi."
  ));
  
  items.push(body(
    "Komitmen yang kuat terhadap penjaminan mutu memungkinkan Universitas Tulungagung membangun citra positif di mata publik, pemerintah, dan berbagai pemangku kepentingan. Kepercayaan ini akan memberikan dampak positif berupa meningkatnya minat calon mahasiswa, kemitraan dengan industri, serta peluang pendanaan dan kerja sama dalam penelitian dan pengembangan. Dengan demikian, kebijakan SPMI tidak hanya berfungsi sebagai pedoman internal, tetapi juga sebagai alat strategis untuk meningkatkan daya saing dan kontribusi perguruan tinggi pada tingkat nasional dan internasional, sekaligus memperkuat posisi Universitas Tulungagung dalam memperoleh status akreditasi terakreditasi unggul dari BAN-PT atau Lembaga Akreditasi Mandiri (LAM)."
  ));
  
  // 1.4 Ruang Lingkup
  items.push(h2("1.4 Ruang Lingkup dan Keberlakuan Kebijakan SPMI"));
  
  items.push(body(
    "Universitas Tulungagung memastikan tercapainya tujuan dan sasaran SPMI sesuai dengan Permendiktisaintek Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi. Sesuai dengan Pasal 65 Permen 39 Tahun 2025, Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) mencakup bidang akademik dan bidang nonakademik. Bidang akademik berkaitan dengan Tridharma Perguruan Tinggi, sedangkan bidang nonakademik meliputi organisasi, keuangan, kemahasiswaan, ketenagaan, dan sarana prasarana. Oleh karena itu, SPMI Universitas Tulungagung diterapkan pada seluruh aspek tersebut secara komprehensif dan terintegrasi, sehingga tidak ada satu pun aspek penyelenggaraan perguruan tinggi yang berada di luar jangkauan sistem penjaminan mutu."
  ));
  
  items.push(body(
    "Dokumen Kebijakan SPMI ini menetapkan lingkup standar mutu Universitas Tulungagung untuk aspek akademik dan nonakademik yang terdiri atas: (a) Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Bab II Permen 39 Tahun 2025; dan (b) Standar Pendidikan Tinggi yang ditetapkan oleh Universitas Tulungagung sebagaimana diatur dalam Bab III Pasal 64 Permen 39 Tahun 2025, yang memuat pelampauan terhadap SN Dikti dalam hal tingkat mutu dan keluasan substansi. Standar Pendidikan Tinggi yang ditetapkan oleh Universitas Tulungagung ditetapkan oleh Rektor setelah mendapat pertimbangan Senat Universitas dan persetujuan badan penyelenggara, sesuai dengan karakteristik Universitas Tulungagung sebagai perguruan tinggi swasta."
  ));
  
  items.push(body(
    "Tingkat capaian setiap standar akan merujuk pada: (a) Deskripsi standar dalam Permendiktisaintek Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi dengan tingkat capaian memenuhi atau melampaui standar; dan (b) Visi, Misi, dan Tujuan Universitas Tulungagung yang dirumuskan pada tingkat capaian Indikator Kinerja Utama Rencana Strategis Universitas Tulungagung. Seluruh aktivitas SPMI di Universitas Tulungagung dilaksanakan berbasis Pangkalan Data Pendidikan Tinggi (PD Dikti) dengan prinsip triangulasi sebagaimana diamanatkan Pasal 66 Permen 39 Tahun 2025, sehingga setiap data dan informasi yang digunakan dalam pengambilan keputusan dapat dipertanggungjawabkan kebenarannya."
  ));
  
  items.push(body(
    "Kebijakan SPMI ini berlaku bagi seluruh unit kerja di lingkungan Universitas Tulungagung, mulai dari tingkat universitas, fakultas/pascasarjana/program vokasi/program profesi, hingga program studi. Setiap pimpinan unit kerja wajib memastikan terlaksananya SPMI di unit masing-masing, dengan dukungan Pusat Penjaminan Mutu (PPM) di tingkat universitas, Lembaga Penjaminan Mutu (LPM) di tingkat fakultas, dan Gugus Penjaminan Mutu (GPM) di tingkat program studi. Keberlakuan kebijakan ini bersifat mengikat bagi seluruh sivitas akademika, dan setiap penyimpangan dari ketentuan yang ditetapkan akan ditindaklanjuti melalui mekanisme pengendalian sebagaimana diatur dalam dokumen ini."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// BAB II: VISI, MISI, TUJUAN, SASARAN STRATEGIS
// ============================================================
function buildBabII() {
  const items = [];
  
  items.push(h1("BAB II\nVISI, MISI, TUJUAN, DAN SASARAN STRATEGIS"));
  
  items.push(body(
    "Universitas Tulungagung sebagai institusi pendidikan tinggi yang berkomitmen pada peningkatan mutu secara berkelanjutan, telah merumuskan visi, misi, tujuan, dan sasaran strategis yang menjadi arah dan pijakan bagi seluruh kegiatan penyelenggaraan Tridharma Perguruan Tinggi. Rumusan tersebut menjadi landasan filosofis dan operasional bagi penyusunan Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI), sehingga setiap standar, prosedur, dan kegiatan penjaminan mutu di Universitas Tulungagung senantiasa selaras dengan arah strategis lembaga. Bab ini menjabarkan secara rinci visi, misi, tujuan, dan sasaran strategis Universitas Tulungagung yang menjadi acuan bagi seluruh kebijakan mutu yang diatur dalam dokumen ini."
  ));
  
  // 2.1 Visi
  items.push(h2("2.1 Visi Universitas Tulungagung"));
  
  items.push(body(
    "Visi Universitas Tulungagung merupakan pernyataan cita-cita jangka panjang yang menggambarkan arah dan tujuan institusi ke depan. Visi ini dirumuskan dengan mempertimbangkan dinamika perkembangan ilmu pengetahuan, teknologi, dan kebutuhan masyarakat, serta posisi strategis Universitas Tulungagung dalam ekosistem pendidikan tinggi nasional dan internasional. Visi ini menjadi penanda identitas dan diferensiasi Universitas Tulungagung dibandingkan perguruan tinggi lainnya, sekaligus menjadi sumber inspirasi bagi seluruh sivitas akademika dalam menjalankan aktivitas akademik dan non-akademik."
  ));
  
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 200, line: 312 },
    indent: { left: 720, right: 720 },
    children: [new TextRun({
      text: "\u201cMewujudkan Perguruan Tinggi yang Berkualitas dan Mampu Berkompetisi Berskala Nasional Dan Internasional.\u201d",
      bold: true, italics: true, size: 26, font: FONT,
    })],
  }));
  
  items.push(body(
    "Visi ini mengandung makna bahwa Universitas Tulungagung berkomitmen untuk terus meningkatkan kualitas penyelenggaraan Tridharma Perguruan Tinggi, sehingga mampu berkompetisi tidak hanya pada level nasional tetapi juga internasional. Komitmen ini diwujudkan melalui penjaminan mutu yang sistematis, terstruktur, dan berkelanjutan, dengan mengacu pada Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Permen 39 Tahun 2025, serta berupaya melampaui standar tersebut melalui inovasi, kreativitas, dan adaptasi terhadap perkembangan global."
  ));
  
  // 2.2 Misi
  items.push(h2("2.2 Misi Universitas Tulungagung"));
  
  items.push(body(
    "Misi Universitas Tulungagung merupakan penjabaran visi ke dalam pernyataan-pernyataan operasional yang menggambarkan langkah-langkah strategis untuk mewujudkan visi tersebut. Misi ini menjadi acuan bagi penyusunan program kerja, alokasi sumber daya, dan evaluasi kinerja di setiap unit kerja di lingkungan Universitas Tulungagung. Berikut ini adalah misi Universitas Tulungagung:"
  ));
  
  const misi = [
    "1. Peningkatan penyelenggaraan pendidikan, penelitian, dan pengabdian kepada masyarakat yang berkualitas menuju terbentuknya lulusan mandiri;",
    "2. Peningkatan kualitas Sumber Daya Manusia yang meliputi tenaga pendidik dan tenaga kependidikan;",
    "3. Peningkatan sarana dan prasarana akademik yang mendukung proses belajar mengajar.",
  ];
  misi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Ketiga misi tersebut saling terkait dan menjadi pijakan dalam setiap kebijakan strategis Universitas Tulungagung. Peningkatan kualitas Tridharma merupakan inti dari misi perguruan tinggi, sementara peningkatan kualitas SDM dan sarana-prasarana merupakan enabler yang memungkinkan tercapainya Tridharma berkualitas. Implementasi misi ini dijalankan melalui siklus PPEPP (Penetapan, Pelaksanaan, Evaluasi, Pengendalian, Peningkatan) sebagaimana diatur dalam Pasal 68 Permen 39 Tahun 2025, yang menjadi kerangka operasional SPMI Universitas Tulungagung."
  ));
  
  // 2.3 Tujuan
  items.push(h2("2.3 Tujuan Universitas Tulungagung"));
  
  items.push(body(
    "Tujuan Universitas Tulungagung merupakan rumusan hasil yang ingin dicapai dalam jangka menengah sebagai wujud pelaksanaan misi. Tujuan ini bersifat terukur dan menjadi dasar bagi penyusunan indikator kinerja serta evaluasi capaian. Tujuan Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  const tujuan = [
    "1. Berkembangnya potensi mahasiswa agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa dan berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, terampil, kompeten, dan berbudaya untuk kepentingan bangsa;",
    "2. Dihasilkannya lulusan yang menguasai cabang ilmu pengetahuan dan/atau teknologi untuk memenuhi kepentingan nasional dan peningkatan daya saing bangsa;",
    "3. Dihasilkannya ilmu pengetahuan dan teknologi melalui penelitian yang memperhatikan dan menerapkan nilai humaniora agar bermanfaat bagi kemajuan bangsa, serta kemajuan peradaban dan kesejahteraan umat manusia; dan",
    "4. Terwujudnya pengabdian kepada masyarakat berbasis penalaran dan karya penelitian yang bermanfaat dalam memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa.",
  ];
  tujuan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body(
    "Tujuan-tujuan tersebut sejalan dengan amanat Pasal 6 Permen 39 Tahun 2025 tentang Standar Kompetensi Lulusan, yaitu menyiapkan mahasiswa menjadi anggota masyarakat yang beriman, bertakwa, berakhlak mulia, berkarakter sesuai nilai-nilai Pancasila, mampu dan mandiri untuk menerapkan, mengembangkan, dan menemukan ilmu pengetahuan serta teknologi yang bermanfaat bagi masyarakat. Dengan demikian, tujuan Universitas Tulungagung tidak hanya berorientasi pada capaian akademik, tetapi juga pada pembentukan karakter dan kontribusi nyata terhadap pembangunan bangsa."
  ));
  
  // 2.4 Sasaran Strategis
  items.push(h2("2.4 Sasaran Strategis Universitas Tulungagung"));
  
  items.push(body(
    "Sasaran strategis merupakan rumusan target spesifik yang ingin dicapai Universitas Tulungagung dalam jangka waktu tertentu sebagai operasionalisasi dari visi, misi, dan tujuan. Sasaran strategis ini diturunkan ke dalam Indikator Kinerja Utama (IKU) yang terukur, dan menjadi acuan bagi penyusunan rencana operasional serta anggaran tahunan. Berikut ini adalah sasaran strategis Universitas Tulungagung:"
  ));
  
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
  
  items.push(body(
    "Seluruh sasaran strategis tersebut diturunkan ke dalam Indikator Kinerja Utama (IKU) yang terukur dan terjadwal, sebagaimana akan diuraikan lebih lanjut pada Bab XII. Pencapaian sasaran strategis ini menjadi tanggung jawab bersama seluruh sivitas akademika Universitas Tulungagung, dengan dukungan sistem penjaminan mutu yang kuat, transparan, dan akuntabel. Setiap sasaran strategis dijadikan basis perumusan standar mutu di setiap unit kerja, mulai dari program studi, fakultas, lembaga, hingga tingkat universitas, sehingga terjamin adanya keselarasan antara visi, misi, tujuan, sasaran strategis, dan pelaksanaan SPMI."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabI, buildBabII };
