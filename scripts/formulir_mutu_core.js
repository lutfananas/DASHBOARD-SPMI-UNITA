// ============================================================
// FORMULIR MUTU SPMI UNIVERSITAS TULUNGAGUNG 2025
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
const P = { primary: "#000000", body: "#000000", accent: "#1F4E79", surface: "#FFFFFF" };
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
// BUILDER: Header Dokumen Formulir (per formulir unik)
// ============================================================
function buildFormulirHeader(namaFormulir, kodeFormulir, kategori = "FORM") {
  const items = [];
  
  // Tabel header dokumen
  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          cell("Dokumen Mutu", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell(`Kode Dok.   : SPMI/PPM/DM/${kategori}/${kodeFormulir}/2025`, { align: AlignmentType.LEFT, size: 21, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Universitas\nTulungagung", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanggal       : 1 September 2025\nRevisi          : 01\nHalaman      : ...", { align: AlignmentType.LEFT, size: 21, width: 50 }),
          cell("Logo\n[UNITA]", { align: AlignmentType.CENTER, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Sistem Penjaminan Mutu Internal", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell(`Nama Formulir: ${namaFormulir}`, { align: AlignmentType.LEFT, size: 21, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
    ],
  });
  items.push(headerTable);
  items.push(...spacer(1));
  
  // Judul formulir
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: namaFormulir, bold: true, size: 28, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "SISTEM PENJAMINAN MUTU INTERNAL (SPMI)", bold: true, size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 300, line: 312 },
    children: [new TextRun({ text: "UNIVERSITAS TULUNGAGUNG", bold: true, size: 24, font: FONT })],
  }));
  
  return items;
}

// ============================================================
// BUILDER: Formulir dengan tabel field
// ============================================================
function buildFormulirTemplate(data) {
  // data: { namaFormulir, kodeFormulir, kategori, deskripsi, fieldTables: [{title, headers, rows, notes}], tandaTangan: [{label, nama}] }
  const items = [];
  
  // Header
  items.push(...buildFormulirHeader(data.namaFormulir, data.kodeFormulir, data.kategori || "FORM"));
  
  // Deskripsi formulir
  if (data.deskripsi) {
    items.push(h3("Deskripsi Formulir"));
    data.deskripsi.forEach(p => items.push(body(p)));
  }
  
  // Instruksi pengisian
  if (data.instruksi) {
    items.push(h3("Instruksi Pengisian"));
    items.push(body(data.instruksi));
  }
  
  // Tabel-tabel formulir
  data.fieldTables.forEach((ft, idx) => {
    if (ft.title) {
      items.push(new Paragraph({
        spacing: { before: 200, after: 100, line: 312 },
        children: [new TextRun({ text: ft.title, bold: true, size: 24, font: FONT })],
      }));
    }
    
    // Build tabel
    const rows = [];
    
    // Header row
    if (ft.headers) {
      rows.push(new TableRow({
        tableHeader: true, cantSplit: true,
        children: ft.headers.map(h => cell(h, { 
          align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 20,
          width: ft.widths ? ft.widths[ft.headers.indexOf(h)] : undefined
        })),
      }));
    }
    
    // Data rows
    if (ft.rows) {
      ft.rows.forEach((row, rowIdx) => {
        rows.push(new TableRow({
          cantSplit: true,
          children: row.map((col, colIdx) => cell(col, { 
            align: colIdx === 0 ? AlignmentType.LEFT : AlignmentType.LEFT,
            size: 20,
            width: ft.widths ? ft.widths[colIdx] : undefined,
            bold: ft.boldFirstCol && colIdx === 0,
          })),
        }));
      });
    }
    
    // Empty rows for filling (jika ft.emptyRows > 0)
    if (ft.emptyRows) {
      for (let i = 0; i < ft.emptyRows; i++) {
        rows.push(new TableRow({
          cantSplit: true,
          children: ft.headers.map((h, idx) => cell("", { width: ft.widths ? ft.widths[idx] : undefined })),
        }));
      }
    }
    
    const table = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: tableBorders,
      rows: rows,
    });
    items.push(table);
    
    // Notes
    if (ft.notes) {
      ft.notes.forEach(n => {
        items.push(new Paragraph({
          spacing: { before: 80, after: 80, line: 280 },
          children: [new TextRun({ text: n, size: 20, italics: true, font: FONT })],
        }));
      });
    }
  });
  
  // Tanda tangan
  if (data.tandaTangan) {
    items.push(...spacer(1));
    const ttdTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: tableBorders,
      rows: [
        new TableRow({
          cantSplit: true,
          children: data.tandaTangan.map(t => cell(t.label, { 
            align: AlignmentType.CENTER, bold: true, fill: "F2F2F2", size: 22,
            width: Math.floor(100 / data.tandaTangan.length)
          })),
        }),
        new TableRow({
          cantSplit: true,
          children: data.tandaTangan.map(() => cell("", { width: Math.floor(100 / data.tandaTangan.length) })),
        }),
        new TableRow({
          cantSplit: true,
          children: data.tandaTangan.map(t => cell([
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 280 }, children: [new TextRun({ text: t.nama || "", size: 22, bold: true, font: FONT, underline: { type: "single" } })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 280 }, children: [new TextRun({ text: t.jabatan || "", size: 20, font: FONT })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 280 }, children: [new TextRun({ text: t.nip || "", size: 20, font: FONT })] }),
          ], { align: AlignmentType.CENTER, width: Math.floor(100 / data.tandaTangan.length) })),
        }),
      ],
    });
    items.push(ttdTable);
  }
  
  // Page break
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = {
  P, c, FONT, FONT_HEADING,
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders,
  buildFormulirHeader, buildFormulirTemplate,
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
  fs,
};
