// ============================================================
// MAIN SCRIPT: GENERATE KEBIJAKAN MUTU SPMI UNITA 2025
// ============================================================

const path = require("path");
const fs = require("fs");

// Load all section modules
const core = require("./generate_kebijakan_mutu.js");
const {
  Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber,
  AlignmentType, HeadingLevel, NumberFormat, PageBreak, BorderStyle, fs: fsCore,
  FONT, P, c,
} = core;

const { buildSKRektor, buildHeaderDokumen } = core;
const { buildTimPenyusun, buildKataPengantar } = require("./section_01_intro.js");
const { buildBabI, buildBabII } = require("./section_02_bab1_2.js");
const { buildBabIII, buildBabIV } = require("./section_03_bab3_4.js");
const { buildBabV } = require("./section_04_bab5.js");
const { buildBabVI, buildBabVII } = require("./section_05_bab6_7.js");
const { buildBabVIII, buildBabIX } = require("./section_06_bab8_9.js");
const { buildBabX, buildBabXI } = require("./section_07_bab10_11.js");
const { buildBabXII, buildBabXIII, buildBabXIV, buildBabXV, buildReferensi } = require("./section_08_bab12_15.js");

// ============================================================
// HEADER & FOOTER
// ============================================================
function buildHeader() {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60, line: 240 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
        children: [
          new TextRun({
            text: "PERNYATAAN DAN KEBIJAKAN MUTU SPMI - UNIVERSITAS TULUNGAGUNG - 2025",
            size: 18, font: FONT, bold: true, color: c(P.primary),
          }),
        ],
      }),
    ],
  });
}

function buildFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, line: 240 },
        border: { top: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 1 } },
        children: [
          new TextRun({ text: "Halaman ", size: 18, font: FONT, color: c(P.primary) }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, font: FONT, color: c(P.primary) }),
          new TextRun({ text: "  |  Kode Dok: SPMI/PPM/DM/KBJ/2025", size: 18, font: FONT, color: c(P.primary) }),
        ],
      }),
    ],
  });
}

// ============================================================
// DOCUMENT ASSEMBLY
// ============================================================
console.log("Menyusun dokumen Kebijakan Mutu SPMI UNITA 2025...");

const allChildren = [
  ...buildSKRektor(),
  ...buildHeaderDokumen(),
  ...buildTimPenyusun(),
  ...buildKataPengantar(),
  ...buildBabI(),
  ...buildBabII(),
  ...buildBabIII(),
  ...buildBabIV(),
  ...buildBabV(),
  ...buildBabVI(),
  ...buildBabVII(),
  ...buildBabVIII(),
  ...buildBabIX(),
  ...buildBabX(),
  ...buildBabXI(),
  ...buildBabXII(),
  ...buildBabXIII(),
  ...buildBabXIV(),
  ...buildBabXV(),
  ...buildReferensi(),
];

console.log(`Total paragraph/table: ${allChildren.length}`);

// ============================================================
// CREATE DOCUMENT
// ============================================================
const doc = new Document({
  creator: "Pusat Penjaminan Mutu Universitas Tulungagung",
  title: "Pernyataan dan Kebijakan Mutu SPMI Universitas Tulungagung 2025",
  description: "Dokumen Kebijakan Mutu SPMI UNITA 2025 berdasarkan Permendiktisaintek No. 39 Tahun 2025",
  subject: "Sistem Penjaminan Mutu Internal (SPMI)",
  
  styles: {
    default: {
      document: {
        run: {
          font: FONT,
          size: 24, // 12pt
          color: c(P.body),
        },
        paragraph: {
          spacing: { line: 312 }, // 1.3x mandatory
        },
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
    headers: { default: buildHeader() },
    footers: { default: buildFooter() },
    children: allChildren,
  }],
});

// ============================================================
// SAVE
// ============================================================
const outputPath = "/home/z/my-project/download/KEBIJAKAN_MUTU_SPMI_UNITA_2025.docx";

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
