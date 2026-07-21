// ============================================================
// MAIN SCRIPT: GENERATE FORMULIR MUTU SPMI UNITA 2025
// ============================================================

const path = require("path");
const fs = require("fs");

const core = require("./formulir_mutu_core.js");
const {
  Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber,
  AlignmentType, HeadingLevel, NumberFormat, PageBreak, BorderStyle, fs: fsCore,
  FONT, P, c, h1, h2, buildFormulirTemplate,
} = core;

const { buildHeaderUmum, buildKataPengantar, buildBabI, buildBabII } = require("./formulir_mutu_intro.js");
const { FORMULIR_LIST } = require("./formulir_mutu_data.js");

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
            text: "FORMULIR MUTU SPMI - UNIVERSITAS TULUNGAGUNG - 2025",
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
          new TextRun({ text: "  |  Kode Dok: SPMI/PPM/DM/FORM/2025", size: 18, font: FONT, color: c(P.primary) }),
        ],
      }),
    ],
  });
}

// ============================================================
// BUILDER: Daftar Formulir per Kategori
// ============================================================
function buildBabFormulir(namaBab, kategoriList) {
  const items = [];
  
  items.push(h1(namaBab));
  
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { line: 312, after: 120 },
    indent: { firstLine: 480 },
    children: [new TextRun({
      text: `Bab ini menjabarkan ${kategoriList.length} formulir yang termasuk dalam kategori ini. Setiap formulir disusun dengan template baku yang mencakup header dokumen dengan kode unik, deskripsi formulir, instruksi pengisian, tabel-tabel formulir, dan blok tanda tangan. Setiap formulir mengacu pada standar mutu tertentu yang telah ditetapkan dalam dokumen Standar Mutu SPMI UNITA 2025, dan konsisten dengan Manual Mutu SPMI UNITA 2025.`,
      size: 24, font: FONT,
    })],
  }));
  
  // Build setiap formulir
  kategoriList.forEach((formulir, idx) => {
    console.log(`  • Building formulir ${idx + 1}/${kategoriList.length}: ${formulir.namaFormulir}`);
    items.push(...buildFormulirTemplate(formulir));
  });
  
  return items;
}

// ============================================================
// REFERENSI
// ============================================================
function buildReferensi() {
  const items = [];
  
  items.push(h1("REFERENSI"));
  
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { line: 312, after: 120 },
    indent: { firstLine: 480 },
    children: [new TextRun({
      text: "Daftar referensi berikut adalah landasan yuridis dan dokumen acuan yang digunakan dalam penyusunan Formulir Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Daftar ini telah sepenuhnya diselaraskan dengan berlakunya Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 sebagai landasan regulasi terkini, sehingga seluruh kegiatan penjaminan mutu di Universitas Tulungagung mengacu pada kerangka regulasi yang terbaru dan paling berlaku.",
      size: 24, font: FONT,
    })],
  }));
  
  const referensi = [
    "a. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;",
    "b. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "c. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "d. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "e. Peraturan Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) yang berlaku;",
    "f. Statuta Universitas Tulungagung;",
    "g. Rencana Strategis (Renstra) Universitas Tulungagung;",
    "h. Kebijakan Mutu SPMI Universitas Tulungagung Tahun 2025;",
    "i. Manual Mutu SPMI Universitas Tulungagung Tahun 2025;",
    "j. Standar Mutu SPMI Universitas Tulungagung Tahun 2025 (33 standar).",
  ];
  referensi.forEach(t => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      indent: { left: 720, hanging: 360 },
      spacing: { line: 312, after: 80 },
      children: [new TextRun({ text: t, size: 24, font: FONT })],
    }));
  });
  
  return items;
}

// ============================================================
// DOCUMENT ASSEMBLY
// ============================================================
console.log("Menyusun dokumen Formulir Mutu SPMI UNITA 2025...");
console.log("Total formulir yang akan dibangun:", FORMULIR_LIST.length);

// Klasifikasi formulir per bab
const formulirBabIII = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-PBM"));
const formulirBabIV = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-PEN") || f.kodeFormulir.startsWith("FM-PKM"));
const formulirBabV = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-TMB"));
const formulirBabVI = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-AMI"));
const formulirBabVII = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-AKD"));
const formulirBabVIII = FORMULIR_LIST.filter(f => f.kodeFormulir.startsWith("FM-PDD"));

console.log(`  - Bab III (Pendidikan): ${formulirBabIII.length} formulir`);
console.log(`  - Bab IV (Penelitian/PkM): ${formulirBabIV.length} formulir`);
console.log(`  - Bab V (Tambahan): ${formulirBabV.length} formulir`);
console.log(`  - Bab VI (AMI/RTM): ${formulirBabVI.length} formulir`);
console.log(`  - Bab VII (Akademik): ${formulirBabVII.length} formulir`);
console.log(`  - Bab VIII (PD Dikti): ${formulirBabVIII.length} formulir`);

const allChildren = [
  ...buildHeaderUmum(),
  ...buildKataPengantar(),
  ...buildBabI(),
  ...buildBabII(),
  ...buildBabFormulir("BAB III\nFORMULIR STANDAR PENDIDIKAN", formulirBabIII),
  ...buildBabFormulir("BAB IV\nFORMULIR STANDAR PENELITIAN DAN PENGABDIAN KEPADA MASYARAKAT", formulirBabIV),
  ...buildBabFormulir("BAB V\nFORMULIR STANDAR TAMBAHAN PELAMPAUAN SN DIKTI", formulirBabV),
  ...buildBabFormulir("BAB VI\nFORMULIR AUDIT MUTU INTERNAL (AMI) DAN RAPAT TINJAUAN MANAJEMEN (RTM)", formulirBabVI),
  ...buildBabFormulir("BAB VII\nFORMULIR AKADEMIK", formulirBabVII),
  ...buildBabFormulir("BAB VIII\nFORMULIR PENDUKUNG PD DIKTI DAN TRIANGULASI", formulirBabVIII),
  ...buildReferensi(),
];

console.log(`\nTotal paragraph/table: ${allChildren.length}`);

// ============================================================
// CREATE DOCUMENT
// ============================================================
const doc = new Document({
  creator: "Pusat Penjaminan Mutu Universitas Tulungagung",
  title: "Formulir Mutu SPMI Universitas Tulungagung 2025",
  description: "Dokumen Formulir Mutu SPMI UNITA 2025 berdasarkan Permendiktisaintek No. 39 Tahun 2025",
  subject: "Sistem Penjaminan Mutu Internal (SPMI) - Formulir Mutu",
  
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
const outputPath = "/home/z/my-project/download/FORMULIR_MUTU_SPMI_UNITA_2025.docx";

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
