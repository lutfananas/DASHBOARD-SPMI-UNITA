// ============================================================
// MAIN SCRIPT: GENERATE MANUAL MUTU SPMI UNITA 2025
// ============================================================

const path = require("path");
const fs = require("fs");

// Load all section modules
const core = require("./manual_mutu_core.js");
const {
  Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber,
  AlignmentType, HeadingLevel, NumberFormat, PageBreak, BorderStyle, fs: fsCore,
  FONT, P, c,
} = core;

const { buildHeader: buildHeaderDokumen } = core;
const { buildKataPengantar, buildBabI, buildBabII } = require("./manual_mutu_sec1.js");
const { buildBabIII, buildBabIV, buildBabV } = require("./manual_mutu_sec2.js");
const { buildBabVI, buildBabVII, buildBabVIII } = require("./manual_mutu_sec3.js");
const { buildBabIX, buildBabX, buildReferensi } = require("./manual_mutu_sec4.js");

// ============================================================
// HEADER & FOOTER (untuk halaman, berbeda dari header dokumen)
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
            text: "MANUAL MUTU SPMI - UNIVERSITAS TULUNGAGUNG - 2025",
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
          new TextRun({ text: "  |  Kode Dok: SPMI/PPM/DM/MNL/2025", size: 18, font: FONT, color: c(P.primary) }),
        ],
      }),
    ],
  });
}

// ============================================================
// DOCUMENT ASSEMBLY
// ============================================================
console.log("Menyusun dokumen Manual Mutu SPMI UNITA 2025...");

const allChildren = [
  ...buildHeaderDokumen(),
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
  ...buildReferensi(),
];

console.log(`Total paragraph/table: ${allChildren.length}`);

// ============================================================
// CREATE DOCUMENT
// ============================================================
const doc = new Document({
  creator: "Pusat Penjaminan Mutu Universitas Tulungagung",
  title: "Manual Mutu SPMI Universitas Tulungagung 2025",
  description: "Dokumen Manual Mutu SPMI UNITA 2025 berdasarkan Permendiktisaintek No. 39 Tahun 2025",
  subject: "Sistem Penjaminan Mutu Internal (SPMI) - Manual Mutu",
  
  styles: {
    default: {
      document: {
        run: {
          font: FONT,
          size: 24,
          color: c(P.body),
        },
        paragraph: {
          spacing: { line: 312 },
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
    headers: { default: buildPageHeader() },
    footers: { default: buildPageFooter() },
    children: allChildren,
  }],
});

// ============================================================
// SAVE
// ============================================================
const outputPath = "/home/z/my-project/download/MANUAL_MUTU_SPMI_UNITA_2025.docx";

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
