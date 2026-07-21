// ============================================================
// MANUAL MUTU SPMI UNIVERSITAS TULUNGAGUNG 2025
// Berdasarkan Permendiktisaintek No. 39 Tahun 2025
// ============================================================

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
} = require("docx");
const fs = require("fs");

// ============================================================
// PALETTE & FONTS
// ============================================================
const P = {
  primary: "#000000",
  body: "#000000",
  secondary: "#333333",
  accent: "#1F4E79",
  surface: "#FFFFFF",
};

const c = (hex) => hex.replace("#", "");
const FONT = { ascii: "Times New Roman", eastAsia: "Times New Roman" };
const FONT_HEADING = { ascii: "Times New Roman", eastAsia: "Times New Roman" };

// ============================================================
// HELPER BUILDERS
// ============================================================
function body(text, opts = {}) {
  const runs = Array.isArray(text)
    ? text
    : [new TextRun({ text, size: 24, font: FONT, color: c(P.body) })];
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    indent: { firstLine: opts.indent === false ? 0 : 480 },
    spacing: { line: 312, after: 120, ...(opts.spacing || {}) },
    children: runs,
  });
}

function bodyNoIndent(text, opts = {}) {
  const runs = Array.isArray(text)
    ? text
    : [new TextRun({ text, size: 24, font: FONT, color: c(P.body) })];
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    indent: { left: opts.left || 720, hanging: opts.hanging || 360 },
    spacing: { line: 312, after: 80, ...(opts.spacing || {}) },
    children: runs,
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 360, after: 240, line: 312 },
    children: [new TextRun({ text, bold: true, size: 32, font: FONT_HEADING, color: c(P.primary) })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 140, line: 312 },
    children: [new TextRun({ text, bold: true, size: 28, font: FONT_HEADING, color: c(P.primary) })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100, line: 312 },
    children: [new TextRun({ text, bold: true, size: 26, font: FONT_HEADING, color: c(P.primary) })],
  });
}

function spacer(n = 1) {
  return Array.from({ length: n }, () => new Paragraph({ children: [] }));
}

function cell(content, opts = {}) {
  const paragraphs = Array.isArray(content) ? content : [
    new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      spacing: { line: 280, after: 0 },
      children: [new TextRun({
        text: String(content || ""),
        size: opts.size || 22,
        bold: opts.bold || false,
        font: FONT,
        color: c(P.body),
      })],
    })
  ];
  return new TableCell({
    children: paragraphs,
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    verticalAlign: "center",
  });
}

const tableBorders = {
  top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
  bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
};

// ============================================================
// SECTION 1: HEADER DOKUMEN, TABEL PENGENDALIAN, TIM PENYUSUN
// ============================================================
function buildHeader() {
  const items = [];
  
  // Tabel header dokumen mutu
  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          cell("Dokumen Mutu", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Kode Dok.   : SPMI/PPM/DM/MNL/2025", { align: AlignmentType.LEFT, width: 35 }),
          cell("", { width: 40 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Universitas\nTulungagung", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanggal       : 1 September 2025", { align: AlignmentType.LEFT, width: 35 }),
          cell("Logo\n[UNITA]", { align: AlignmentType.CENTER, width: 40 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Sistem Penjaminan Mutu Internal", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Revisi          : 01", { align: AlignmentType.LEFT, width: 35 }),
          cell("", { width: 40 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("", { width: 25 }),
          cell("Halaman      : 1 dari ...", { align: AlignmentType.LEFT, width: 35 }),
          cell("", { width: 40 }),
        ],
      }),
    ],
  });
  
  items.push(headerTable);
  items.push(...spacer(1));
  
  // Judul dokumen
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: "MANUAL MUTU", bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "SISTEM PENJAMINAN MUTU INTERNAL (SPMI)", bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 300, line: 312 },
    children: [new TextRun({ text: "UNIVERSITAS TULUNGAGUNG", bold: true, size: 30, font: FONT })],
  }));
  
  // Tabel Pengendalian Dokumen
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 120, line: 312 },
    children: [new TextRun({ text: "TABEL PENGENDALIAN DOKUMEN", bold: true, size: 26, font: FONT })],
  }));
  
  const pengendalianTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true,
        cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 5 }),
          cell("Proses", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 18 }),
          cell("Nama", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 32 }),
          cell("Jabatan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanda Tangan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 12 }),
          cell("Tanggal", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 8 }),
        ],
      }),
      ...[
        ["1", "Perumus", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["2", "Pemeriksa", "Eni Minarni, S.E., Ak., M.Ak.", "Ka. Bag. Monev"],
        ["3", "Persetujuan", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["4", "Penetapan", "Dr. Muharsono, M.Si.", "Rektor"],
        ["5", "Pengendalian", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
      ].map(([no, proses, nama, jabatan]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(no, { align: AlignmentType.CENTER, width: 5 }),
            cell(proses, { align: AlignmentType.CENTER, width: 18 }),
            cell(nama, { align: AlignmentType.LEFT, width: 32 }),
            cell(jabatan, { align: AlignmentType.LEFT, width: 25 }),
            cell("", { width: 12 }),
            cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
          ],
        })
      ),
    ],
  });
  items.push(pengendalianTable);
  
  // Tim Penyusun
  items.push(h1("TIM PENYUSUN"));
  
  items.push(body(
    "Tim penyusun Manual Mutu Universitas Tulungagung menjalankan tugas berdasarkan Keputusan Rektor Universitas Tulungagung Nomor: A/002.I/KEP/UNITA/I/2025 tentang Pernyataan dan Kebijakan Mutu Universitas Tulungagung, tanggal 1 September 2025. Tim penyusun bertanggung jawab atas perumusan, penyusunan, dan pengkajian substansi Manual Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung agar selaras dengan ketentuan Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi. Tim penyusun juga bertugas memastikan bahwa dokumen Manual Mutu ini dapat menjadi pedoman operasional bagi seluruh unit kerja dalam melaksanakan siklus PPEPP di lingkungan Universitas Tulungagung."
  ));
  
  items.push(body("Susunan keanggotaan Tim Penyusun Manual Mutu Universitas Tulungagung adalah sebagai berikut:"));
  
  const timTable = new Table({
    width: { size: 90, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    borders: tableBorders,
    rows: [
      ...[
        ["Penanggung Jawab", "Dr. Muharsono, M.Si."],
        ["Ketua", "Anang Sugeng Cahyono, S.AP., M.Si."],
        ["Sekretaris", "Lutfan Anas Zahir, S.Si., M.Pd."],
        ["Anggota", "1. Prof. Dr. Dwi Ima Herminingsih, M.Hum.\n2. Danang Wijanarko, S.T., M.T.\n3. Chusnatul Ulaela Sajali, S.P., M.P.\n4. Aulia Rahman Hakim, S.H., M.H.\n5. Eni Minarni, S.E., M.Ak."],
        ["Administrator", "Yeni Setyowati, S.P."],
      ].map(([jabatan, nama]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(jabatan, { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
            cell(nama, alignAndWidth(jabatan)),
          ],
        })
      ),
    ],
  });
  items.push(timTable);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

function alignAndWidth(jabatan) {
  if (jabatan === "Anggota") return { align: AlignmentType.LEFT, width: 50 };
  return { align: AlignmentType.CENTER, width: 50 };
}

module.exports = {
  P, c, FONT, FONT_HEADING,
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders,
  buildHeader,
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
  fs,
};
