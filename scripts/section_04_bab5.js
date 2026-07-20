// ============================================================
// BAB V: STANDAR NASIONAL PENDIDIKAN TINGGI (SN DIKTI)
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

function buildBabV() {
  const items = [];
  
  items.push(h1("BAB V\nSTANDAR NASIONAL PENDIDIKAN TINGGI (SN DIKTI)"));
  
  items.push(body(
    "Bab ini menjabarkan secara rinci struktur dan substansi Standar Nasional Pendidikan Tinggi (SN Dikti) sebagaimana diatur dalam Bab II Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025. SN Dikti merupakan acuan utama bagi Universitas Tulungagung dalam menyelenggarakan Tridharma Perguruan Tinggi, sekaligus menjadi tolok ukur bagi penjaminan mutu internal dan eksternal. Universitas Tulungagung berkomitmen untuk memenuhi SN Dikti dan secara berkelanjutan berupaya melampaui standar tersebut melalui Standar Pendidikan Tinggi yang ditetapkan oleh Universitas Tulungagung."
  ));
  
  // 5.1 Tujuan SN Dikti
  items.push(h2("5.1 Tujuan Standar Nasional Pendidikan Tinggi"));
  
  items.push(body(
    "Sesuai Pasal 3 ayat (1) Permen 39 Tahun 2025, SN Dikti bertujuan untuk: (a) memberikan kerangka penyelenggaraan pendidikan tinggi untuk mencapai tujuan pendidikan tinggi yang berperan strategis dalam mencerdaskan kehidupan bangsa, serta memajukan ilmu pengetahuan dan teknologi untuk kemajuan pembangunan bangsa Indonesia yang berkelanjutan; (b) menjamin penyelenggaraan pendidikan tinggi yang efektif, inklusif, dan adaptif sesuai dinamika perkembangan ilmu pengetahuan, teknologi, dan kehidupan masyarakat; (c) menjamin penyelenggaraan pendidikan tinggi untuk menghasilkan sumber daya manusia unggul; dan (d) mendorong perguruan tinggi untuk secara berkelanjutan meningkatkan mutu melampaui SN Dikti."
  ));
  
  items.push(body(
    "Empat tujuan SN Dikti tersebut menempatkan perguruan tinggi tidak hanya sebagai penyelenggara pendidikan formal, tetapi juga sebagai agen perubahan yang berperan strategis dalam pembangunan bangsa. Penekanan pada efektivitas, inklusivitas, dan adaptabilitas mengamanatkan agar setiap perguruan tinggi mampu merespons dinamika perkembangan IPTEK dan kebutuhan masyarakat. Sementara itu, pernyataan bahwa SN Dikti mendorong perguruan tinggi untuk melampaui standar nasional menjadi landasan bagi Universitas Tulungagung untuk menyusun Standar Pendidikan Tinggi yang lebih tinggi kedalaman dan keluasan substansinya dibandingkan SN Dikti, sebagaimana akan diuraikan pada sub-bab 5.6."
  ));
  
  items.push(body(
    "Sesuai Pasal 3 ayat (2), SN Dikti wajib dipenuhi setiap perguruan tinggi untuk mewujudkan tujuan pendidikan nasional. Bagi Universitas Tulungagung, kewajiban ini menjadi komitmen yang mengikat seluruh sivitas akademika, dan pelaksanaannya dijamin melalui SPMI yang diatur dalam dokumen Kebijakan Mutu ini. Setiap penyimpangan dari SN Dikti akan ditindaklanjuti melalui mekanisme pengendalian sebagaimana diatur dalam Bab VII, dan dapat berdampak pada status akreditasi apabila tidak ditindaklanjuti secara tepat."
  ));
  
  // 5.2 Komposisi SN Dikti
  items.push(h2("5.2 Komposisi SN Dikti"));
  
  items.push(body(
    "Sesuai Pasal 4 ayat (1) Permen 39 Tahun 2025, SN Dikti terdiri atas tiga komponen utama: (a) standar nasional pendidikan; (b) standar penelitian; dan (c) standar pengabdian kepada masyarakat. Ketiga komponen ini merupakan satu kesatuan yang tidak terpisahkan sebagai dasar bagi perguruan tinggi dalam penyelenggaraan Tridharma (Pasal 4 ayat 2). Penyelenggaraan Tridharma tersebut sesuai dengan misi dan mandat perguruan tinggi dengan menentukan proporsi pelaksanaan masing-masing dharma di tingkat perguruan tinggi, program studi, dan individu dosen (Pasal 4 ayat 3)."
  ));
  
  items.push(body(
    "Dengan demikian, SN Dikti memiliki struktur tiga lapis: lapis pertama adalah tiga komponen standar (pendidikan, penelitian, PkM); lapis kedua adalah sub-standar pada masing-masing komponen; dan lapis ketiga adalah kriteria rinci pada setiap sub-standar. Struktur ini menggantikan struktur delapan standar yang berlaku pada regulasi terdahulu, dan menempatkan Tridharma secara seimbang sebagai pilar utama SN Dikti. Universitas Tulungagung merespons restrukturisasi ini dengan menyusun ulang dokumen Standar SPMI agar selaras dengan kerangka baru, sebagaimana akan diuraikan pada Bab XI dokumen ini."
  ));
  
  // 5.3 Standar Nasional Pendidikan
  items.push(h2("5.3 Standar Nasional Pendidikan"));
  
  items.push(body(
    "Sesuai Pasal 5 ayat (1) Permen 39 Tahun 2025, standar nasional pendidikan terdiri atas tiga kelompok: (a) standar luaran pendidikan; (b) standar proses pendidikan; dan (c) standar masukan pendidikan. Pengelompokan ini mencerminkan logika sistemik pendidikan—dari masukan (input), proses, hingga luaran (output)—yang memungkinkan evaluasi menyeluruh terhadap penyelenggaraan pendidikan. Universitas Tulungagung menerapkan pengelompokan ini sebagai kerangka rujukan bagi penyusunan dan evaluasi kurikulum, sebagaimana diamanatkan Pasal 5 ayat (5)."
  ));
  
  // 5.3.1 Standar Luaran - Kompetensi Lulusan
  items.push(h3("5.3.1 Standar Luaran Pendidikan (Kompetensi Lulusan)"));
  
  items.push(body(
    "Sesuai Pasal 5 ayat (2), standar luaran pendidikan merupakan standar kompetensi lulusan. Pasal 6 ayat (1) mendefinisikan standar kompetensi lulusan sebagai kriteria minimal mengenai kesatuan kompetensi sikap, keterampilan, dan pengetahuan yang menunjukkan capaian mahasiswa dari hasil pembelajarannya pada akhir program pendidikan tinggi. Standar kompetensi lulusan digunakan untuk menyiapkan mahasiswa menjadi anggota masyarakat yang beriman, bertakwa, berakhlak mulia, berkarakter sesuai dengan nilai-nilai Pancasila, mampu dan mandiri untuk menerapkan, mengembangkan, menemukan ilmu pengetahuan dan teknologi yang bermanfaat bagi masyarakat, serta secara aktif mengembangkan potensinya (Pasal 6 ayat 2). Standar kompetensi lulusan dirumuskan dalam capaian pembelajaran lulusan (Pasal 6 ayat 3)."
  ));
  
  items.push(body(
    "Sesuai Pasal 7, capaian pembelajaran lulusan untuk setiap program studi mencakup kompetensi yang meliputi: (a) penguasaan ilmu pengetahuan dan teknologi, kecakapan/keterampilan spesifik dan aplikasinya untuk satu atau sekumpulan bidang keilmuan tertentu; (b) kecakapan umum yang dibutuhkan sebagai dasar untuk penguasaan IPTEK serta bidang kerja yang relevan; (c) pengetahuan dan keterampilan yang dibutuhkan untuk dunia kerja dan/atau melanjutkan studi pada jenjang yang lebih tinggi ataupun untuk mendapatkan sertifikat profesi; dan (d) kemampuan intelektual untuk berpikir secara mandiri dan kritis sebagai pembelajar sepanjang hayat."
  ));
  
  items.push(body(
    "Sesuai Pasal 8 ayat (1), capaian pembelajaran lulusan disusun oleh unit pengelola program studi (UPPS) dengan melibatkan pemangku kepentingan dan/atau dunia usaha, dunia industri, dan dunia kerja (DUDI). Capaian pembelajaran lulusan memperhatikan: (a) visi dan misi perguruan tinggi; (b) kerangka kualifikasi nasional Indonesia (KKNI); (c) perkembangan ilmu pengetahuan dan teknologi; (d) kebutuhan kompetensi kerja dari dunia kerja; (e) ranah keilmuan program studi; (f) kompetensi utama lulusan program studi; dan (g) kurikulum program studi sejenis. Capaian pembelajaran lulusan diinformasikan kepada mahasiswa pada program studi tersebut, disusun ke dalam mata kuliah pada setiap program studi, dan setiap mata kuliah memiliki capaian pembelajaran mata kuliah yang berkontribusi pada capaian pembelajaran lulusan (Pasal 8 ayat 3-5)."
  ));
  
  items.push(body(
    "Sesuai Pasal 9, kompetensi utama lulusan program studi harus memenuhi ketentuan minimal yang berbeda untuk setiap jenjang, mulai dari diploma satu hingga subspesialis. Universitas Tulungagung memastikan bahwa setiap program studi menyusun CPL dengan mengacu pada ketentuan Pasal 9, dan apabila asosiasi program studi sejenis telah terbentuk, CPL mengacu pada kompetensi utama yang disusun oleh asosiasi tersebut bersama pihak lain yang terkait (Pasal 10 ayat 1). Dalam hal asosiasi belum terbentuk, CPL disusun oleh Universitas Tulungagung (Pasal 10 ayat 2)."
  ));
  
  // 5.3.2 Standar Proses
  items.push(h3("5.3.2 Standar Proses Pendidikan"));
  
  items.push(body(
    "Sesuai Pasal 5 ayat (3), standar proses pendidikan terdiri atas: (a) standar proses pembelajaran; (b) standar penilaian; dan (c) standar pengelolaan. Ketiga sub-standar ini mengatur aspek-aspek operasional penyelenggaraan pendidikan, mulai dari perencanaan, pelaksanaan, hingga penilaian dan pengelolaan secara institusional."
  ));
  
  items.push(body(
    "Standar proses pembelajaran sebagaimana diatur dalam Pasal 11-24 Permen 39 Tahun 2025 merupakan kriteria minimal proses pembelajaran untuk mencapai standar kompetensi lulusan. Standar proses pembelajaran meliputi perencanaan, pelaksanaan, dan penilaian proses pembelajaran. Perencanaan proses pembelajaran mencakup perumusan capaian pembelajaran mata kuliah, materi, metode, sumber belajar, dan kriteria penilaian. Pelaksanaan proses pembelajaran dilakukan melalui berbagai bentuk interaksi akademik—seperti kuliah, praktikum, kerja lapangan, daring, dan/atau blended learning—sesuai dengan karakteristik program studi. Penilaian proses pembelajaran dilakukan secara formatif dan sumatif untuk mengukur ketercapaian capaian pembelajaran."
  ));
  
  items.push(body(
    "Standar penilaian sebagaimana diatur dalam Pasal 25 meliputi kriteria minimal penilaian proses pembelajaran oleh dosen dan penilaian capaian pembelajaran. Penilaian dilakukan secara objektif, transparan, akuntabel, dan berkeadilan, menggunakan berbagai metode yang sesuai dengan karakteristik mata kuliah dan capaian pembelajaran. Hasil penilaian digunakan untuk perbaikan proses pembelajaran dan menjadi bahan evaluasi kinerja dosen serta kualitas kurikulum."
  ));
  
  items.push(body(
    "Standar pengelolaan sebagaimana diatur dalam Pasal 26-30 mengatur kriteria minimal pengelolaan program studi oleh UPPS, mencakup perencanaan, pelaksanaan, monitoring, evaluasi, dan perbaikan. UPPS bertanggung jawab atas penyelenggaraan program studi secara menyeluruh, termasuk pengelolaan kurikulum, dosen, mahasiswa, sarana prasarana, dan kerja sama. Universitas Tulungagung memastikan bahwa setiap UPPS memiliki struktur organisasi yang jelas, SOP yang terdokumentasi, dan mekanisme evaluasi yang efektif."
  ));
  
  // 5.3.3 Standar Masukan
  items.push(h3("5.3.3 Standar Masukan Pendidikan"));
  
  items.push(body(
    "Sesuai Pasal 5 ayat (4), standar masukan pendidikan terdiri atas empat sub-standar: (a) standar isi; (b) standar dosen dan tenaga kependidikan; (c) standar sarana dan prasarana; dan (d) standar pembiayaan. Keempat sub-standar ini mengatur sumber daya yang diperlukan untuk menyelenggarakan pendidikan tinggi yang bermutu, mulai dari substansi kurikulum, SDM, fasilitas fisik, hingga pembiayaan operasional."
  ));
  
  items.push(body(
    "Standar isi sebagaimana diatur dalam Pasal 31-39 mengatur kriteria minimal substansi kurikulum dan bahan ajar, mencakup struktur kurikulum, mata kuliah, beban belajar, dan capaian pembelajaran mata kuliah. Standar isi juga mengatur tentang MBKM (Merdeka Belajar Kampus Merdeka) yang memungkinkan mahasiswa mengambil kegiatan di luar program studi selama satu semester hingga satu tahun, dengan pengakuan kredit yang setara."
  ));
  
  items.push(body(
    "Standar dosen dan tenaga kependidikan sebagaimana diatur dalam Pasal 40-45 mengatur kriteria minimal kualifikasi, kompetensi, dan beban kerja dosen serta tenaga kependidikan. Dosen wajib memiliki kualifikasi minimal magister untuk program sarjana dan doktor untuk program magister/doktor, serta memiliki sertifikat pendidik. Tenaga kependidikan wajib memiliki kualifikasi dan kompetensi yang sesuai dengan tugasnya. Universitas Tulungagung memastikan rasio dosen-mahasiswa memenuhi standar, dan menyediakan program pengembangan kapasitas dosen serta tenaga kependidikan secara berkelanjutan."
  ));
  
  items.push(body(
    "Standar sarana dan prasarana sebagaimana diatur dalam Pasal 46-47 mengatur kriteria minimal sarana fisik dan prasarana pendukung penyelenggaraan pendidikan, mencakup ruang perkuliahan, laboratorium, perpustakaan, fasilitas ibadah, fasilitas olahraga, dan fasilitas penunjang lainnya. Universitas Tulungagung memastikan bahwa setiap program studi memiliki sarana dan prasarana yang memadai, sesuai dengan karakteristik keilmuan dan jumlah mahasiswa, serta terpelihara dengan baik melalui sistem manajemen fasilitas yang terdokumentasi."
  ));
  
  items.push(body(
    "Standar pembiayaan sebagaimana diatur dalam Pasal 48-51 mengatur kriteria minimal biaya operasional penyelenggaraan pendidikan per mahasiswa, mencakup biaya pendidikan, biaya penelitian, dan biaya pengabdian kepada masyarakat. Pembiayaan harus dihitung secara transparan dan akuntabel, dengan sumber pendanaan yang berkelanjutan. Universitas Tulungagung memastikan bahwa alokasi anggaran untuk Tridharma mencukupi kebutuhan operasional dan investasi peningkatan mutu, serta dipublikasikan secara terbuka kepada pemangku kepentingan."
  ));
  
  // 5.4 Standar Penelitian
  items.push(h2("5.4 Standar Penelitian"));
  
  items.push(body(
    "Sesuai Bagian Ketiga Bab II Permen 39 Tahun 2025 (Pasal 52-56), standar penelitian terdiri atas tiga komponen: standar luaran penelitian, standar proses penelitian, dan standar masukan penelitian. Standar luaran penelitian mengatur kriteria minimal hasil penelitian yang dihasilkan oleh perguruan tinggi, termasuk publikasi ilmiah, buku, paten, dan karya inovatif lainnya. Standar proses penelitian mengatur kriteria minimal pelaksanaan penelitian, mulai dari perencanaan, pelaksanaan, hingga pelaporan. Standar masukan penelitian mengatur kriteria minimal sumber daya yang diperlukan, mencakup pendanaan, SDM, sarana prasarana, dan sistem informasi."
  ));
  
  items.push(body(
    "Universitas Tulungagung, melalui Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM), mengelola pelaksanaan penelitian dengan mengacu pada standar penelitian sebagaimana diatur dalam Permen 39 Tahun 2025. LPPM bertanggung jawab atas perencanaan, pelaksanaan, monitoring, evaluasi, dan pelaporan penelitian, dengan dukungan UPPS dan GKM di tingkat program studi. Universitas Tulungagung menargetkan peningkatan kuantitas dan kualitas publikasi ilmiah pada jurnal terakreditasi nasional dan internasional, sebagaimana tertuang dalam sasaran strategis ke-4 (lihat Bab II)."
  ));
  
  // 5.5 Standar PkM
  items.push(h2("5.5 Standar Pengabdian kepada Masyarakat"));
  
  items.push(body(
    "Sesuai Bagian Keempat Bab II Permen 39 Tahun 2025 (Pasal 57-63), standar pengabdian kepada masyarakat (PkM) juga terdiri atas tiga komponen: standar luaran PkM, standar proses PkM, dan standar masukan PkM. Struktur ini paralel dengan standar penelitian, mencerminkan parity antara penelitian dan PkM sebagai bagian Tridharma. Standar luaran PkM mengatur kriteria minimal hasil PkM, termasuk produk, jasa, metode, dan publikasi PkM. Standar proses PkM mengatur kriteria minimal pelaksanaan, dan standar masukan PkM mengatur kriteria minimal sumber daya, termasuk penyediaan akses sarana prasarana, penugasan dosen, dan sistem teknologi informasi untuk dokumentasi dan diseminasi."
  ));
  
  items.push(body(
    "Universitas Tulungagung, melalui LPPM dan didukung UPPS/GKM, mengelola pelaksanaan PkM dengan mengacu pada standar PkM tersebut. Universitas Tulungagung menargetkan peningkatan kuantitas dan kualitas PkM yang berdampak nyata bagi masyarakat, sebagaimana tertuang dalam sasaran strategis ke-5 (lihat Bab II). Selain itu, Universitas Tulungagung berkomitmen untuk mengintegrasikan dosen dan mahasiswa dalam kegiatan PkM, sebagaimana tertuang dalam sasaran strategis ke-3, sehingga PkM tidak hanya menjadi kegiatan dosen, tetapi juga menjadi pengalaman belajar mahasiswa yang bermakna."
  ));
  
  // 5.6 Standar PT
  items.push(h2("5.6 Standar Pendidikan Tinggi yang Ditetapkan oleh Universitas Tulungagung"));
  
  items.push(body(
    "Sesuai Pasal 64 ayat (1) Permen 39 Tahun 2025, standar pendidikan tinggi yang ditetapkan oleh perguruan tinggi merupakan penjabaran operasional SN Dikti sesuai tingkat mutu dan keluasan substansi yang ditetapkan perguruan tinggi. Pasal 64 ayat (2) menegaskan bahwa standar pendidikan tinggi yang ditetapkan oleh perguruan tinggi memuat pelampauan terhadap SN Dikti dalam hal tingkat mutu dan keluasan substansi. Dengan demikian, standar Universitas Tulungagung tidak boleh berada di bawah SN Dikti, melainkan harus sama atau melampaui SN Dikti."
  ));
  
  items.push(body(
    "Sebagai perguruan tinggi swasta, sesuai Pasal 64 ayat (3) huruf b, standar pendidikan tinggi yang ditetapkan oleh Universitas Tulungagung ditetapkan oleh Rektor setelah mendapat pertimbangan Senat Universitas dan persetujuan badan penyelenggara. Universitas Tulungagung telah menetapkan sembilan standar tambahan sebagai pelampauan SN Dikti, yang akan diuraikan secara rinci pada Bab XI dokumen ini. Sembilan standar tambahan tersebut meliputi: Standar Visi, Misi, Tujuan, Strategi; Standar Tata Pamong dan Tata Kelola; Standar Mahasiswa; Standar Sumber Daya Manusia; Standar Keuangan, Sarana, dan Prasarana; Standar Kerjasama; Standar Merdeka Belajar Kampus Merdeka; Standar Luaran dan Capaian Tridharma; serta Standar Pelayanan Kepada Mahasiswa."
  ));
  
  // Tabel matriks 9 standar SN Dikti
  items.push(body(
    "Tabel berikut merangkum struktur SN Dikti sebagaimana diatur dalam Permen 39 Tahun 2025:"
  ));
  
  const snDiktiTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Komponen", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Sub-Standar", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Rujukan Pasal", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Deskripsi Singkat", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Standar Nasional Pendidikan", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("1. Standar Kompetensi Lulusan (Luaran)", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 6-10", { align: AlignmentType.CENTER, width: 20 }),
          cell("CPL untuk setiap jenjang", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("2. Standar Proses Pembelajaran", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 11-24", { align: AlignmentType.CENTER, width: 20 }),
          cell("Perencanaan, pelaksanaan, penilaian", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("3. Standar Penilaian", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 25", { align: AlignmentType.CENTER, width: 20 }),
          cell("Formatif & sumatif", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("4. Standar Pengelolaan", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 26-30", { align: AlignmentType.CENTER, width: 20 }),
          cell("Pengelolaan prodi oleh UPPS", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("5. Standar Isi", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 31-39", { align: AlignmentType.CENTER, width: 20 }),
          cell("Kurikulum & bahan ajar", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("6. Standar Dosen dan Tendik", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 40-45", { align: AlignmentType.CENTER, width: 20 }),
          cell("Kualifikasi, kompetensi, beban kerja", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("7. Standar Sarana dan Prasarana", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 46-47", { align: AlignmentType.CENTER, width: 20 }),
          cell("Fasilitas pendidikan", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 20 }),
          cell("8. Standar Pembiayaan", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 48-51", { align: AlignmentType.CENTER, width: 20 }),
          cell("Biaya operasional per mahasiswa", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Standar Penelitian", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Luaran, Proses, Masukan Penelitian", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 52-56", { align: AlignmentType.CENTER, width: 20 }),
          cell("Kriteria penelitian terintegrasi", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Standar Pengabdian kepada Masyarakat", { align: AlignmentType.LEFT, bold: true, width: 20 }),
          cell("Luaran, Proses, Masukan PkM", { align: AlignmentType.LEFT, width: 35 }),
          cell("Pasal 57-63", { align: AlignmentType.CENTER, width: 20 }),
          cell("Kriteria PkM terintegrasi", { align: AlignmentType.LEFT, size: 20, width: 25 }),
        ],
      }),
    ],
  });
  items.push(snDiktiTable);
  
  items.push(body(
    "Universitas Tulungagung berkomitmen untuk memenuhi seluruh standar SN Dikti sebagaimana dijabarkan di atas, dan secara berkelanjutan berupaya melampaui standar tersebut melalui sembilan standar tambahan yang akan diuraikan pada Bab XI. Setiap penyimpangan dari SN Dikti akan ditindaklanjuti melalui mekanisme pengendalian sebagaimana diatur dalam Bab VII, dan dapat berdampak pada status akreditasi Universitas Tulungagung dan/atau program studi sebagaimana diatur dalam Bab IX."
  ));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildBabV };
