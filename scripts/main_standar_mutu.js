// ============================================================
// MAIN SCRIPT: GENERATE STANDAR MUTU SPMI UNITA 2025
// ============================================================

const path = require("path");
const fs = require("fs");

// Load all section modules
const core = require("./standar_mutu_core.js");
const {
  Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber,
  AlignmentType, HeadingLevel, NumberFormat, PageBreak, BorderStyle, fs: fsCore,
  FONT, P, c,
  h1, h2, body, bodyNoIndent, buildStandarTemplate,
} = core;

const { buildHeaderUmum, buildKataPengantar, buildBabI, buildBabII } = require("./standar_mutu_intro.js");
const { STANDAR_PENDIDIKAN } = require("./standar_mutu_data1.js");
const { STANDAR_PENELITIAN } = require("./standar_mutu_data2.js");
const { STANDAR_PKM, STANDAR_TAMBAHAN } = require("./standar_mutu_data3.js");

// ============================================================
// HEADER & FOOTER (page)
// ============================================================
function buildPageHeader() {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60, line: 240 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
        children: [
          new TextRun({
            text: "STANDAR MUTU SPMI - UNIVERSITAS TULUNGAGUNG - 2025",
            size: 18, font: FONT, bold: true, color: c(P.primary),
          }),
        ],
      }),
    ],
  });
}

function buildPageFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, line: 240 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
        children: [
          new TextRun({ text: "Halaman ", size: 18, font: FONT, color: c(P.primary) }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, font: FONT, color: c(P.primary) }),
          new TextRun({ text: "  |  Kode Dok: SPMI/PPM/DM/STD/2025", size: 18, font: FONT, color: c(P.primary) }),
        ],
      }),
    ],
  });
}

// ============================================================
// BUILDER: Daftar Standar per Kategori (Bab)
// ============================================================
function buildBabStandar(namaBab, kategoriStandar) {
  const items = [];
  
  items.push(h1(namaBab));
  
  items.push(body(
    `Bab ini menjabarkan ${kategoriStandar.length} standar yang termasuk dalam kategori ini. Setiap standar disusun dengan template 9 bagian yang konsisten, mencakup Visi-Misi-Tujuan, Rasional, Pihak yang Bertanggungjawab, Definisi Istilah, Pernyataan Isi Standar, Strategi, Indikator dengan baseline 2025 dan target capaian 2026-2030, Dokumen terkait, dan Referensi. Setiap standar memiliki kode dokumen unik yang memudahkan pengelolaan dan pengendalian dokumen.`
  ));
  
  // Build setiap standar
  kategoriStandar.forEach((standar, idx) => {
    console.log(`  • Building standar ${idx + 1}/${kategoriStandar.length}: ${standar.namaStandar}`);
    items.push(...buildStandarTemplate(standar));
  });
  
  return items;
}

// ============================================================
// REFERENSI
// ============================================================
function buildReferensi() {
  const items = [];
  
  items.push(h1("REFERENSI"));
  
  items.push(body(
    "Daftar referensi berikut adalah landasan yuridis dan dokumen acuan yang digunakan dalam penyusunan Standar Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Daftar ini telah sepenuhnya diselaraskan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 sebagai landasan regulasi terkini, sehingga seluruh kegiatan penjaminan mutu di Universitas Tulungagung mengacu pada kerangka regulasi yang terbaru dan paling berlaku."
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

// ============================================================
// DOCUMENT ASSEMBLY
// ============================================================
console.log("Menyusun dokumen Standar Mutu SPMI UNITA 2025...");
console.log("Total standar yang akan dibangun:", STANDAR_PENDIDIKAN.length + STANDAR_PENELITIAN.length + STANDAR_PKM.length + STANDAR_TAMBAHAN.length);

const allChildren = [
  ...buildHeaderUmum(),
  ...buildKataPengantar(),
  ...buildBabI(),
  ...buildBabII(),
  ...buildBabStandar("BAB III\nSTANDAR PENDIDIKAN", STANDAR_PENDIDIKAN),
  ...buildBabStandar("BAB IV\nSTANDAR PENELITIAN", STANDAR_PENELITIAN),
  ...buildBabStandar("BAB V\nSTANDAR PENGABDIAN KEPADA MASYARAKAT", STANDAR_PKM),
  ...buildBabStandar("BAB VI\nSTANDAR TAMBAHAN PELAMPAUAN SN DIKTI", STANDAR_TAMBAHAN),
  ...buildReferensi(),
];

console.log(`\nTotal paragraph/table: ${allChildren.length}`);

// ============================================================
// CREATE DOCUMENT
// ============================================================
const doc = new Document({
  creator: "Pusat Penjaminan Mutu Universitas Tulungagung",
  title: "Standar Mutu SPMI Universitas Tulungagung 2025",
  description: "Dokumen Standar Mutu SPMI UNITA 2025 berdasarkan Permendiktisaintek No. 39 Tahun 2025",
  subject: "Sistem Penjaminan Mutu Internal (SPMI) - Standar Mutu",
  
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 24, color: c(P.body) },
        paragraph: { spacing: { line: 312 } },
      },
      heading1: {
        run: { font: FONT, size: 32, bold: true, color: c(P.primary) },
        paragraph: { spacing: { before: 360, after: 240, line: 312 } },
      },
      heading2: {
        run: { font: FONT, size: 28, bold: true, color: c(P.primary) },
        paragraph: { spacing: { before: 280, after: 140, line: 312 } },
      },
      heading3: {
        run: { font: FONT, size: 26, bold: true, color: c(P.primary) },
        paragraph: { spacing: { before: 200, after: 100, line: 312 } },
      },
    },
  },
  
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838, orientation: "portrait" },
        margin: { top: 1440, bottom: 1440, left: 1701, right: 1417 },
        pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL },
      },
    },
    headers: { default: buildPageHeader() },
    footers: { default: buildPageFooter() },
    children: allChildren,
  }],
});

// ============================================================
// SAVE
// ============================================================
const outputPath = "/home/z/my-project/download/STANDAR_MUTU_SPMI_UNITA_2025.docx";

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outputPath, buf);
  const stats = fs.statSync(outputPath);
  console.log(`\n✓ Dokumen berhasil dibuat: ${outputPath}`);
  console.log(`  Ukuran file: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`  Jumlah elemen: ${allChildren.length}`);
}).catch(err => {
  console.error("✗ Error:", err);
  process.exit(1);
});
