// ============================================================
// KEBIJAKAN MUTU SPMI UNIVERSITAS TULUNGAGUNG 2025
// Berdasarkan Permendiktisaintek No. 39 Tahun 2025
// ============================================================

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat, TabStopType, TabStopPosition,
} = require("docx");
const fs = require("fs");

// ============================================================
// PALETTE & FONTS (Profile A - Formal Indonesian Government Style)
// ============================================================
const P = {
  primary: "#000000",   // pure black
  body: "#000000",
  secondary: "#333333",
  accent: "#1F4E79",    // dark blue for table header shading
  surface: "#FFFFFF",
};

const c = (hex) => hex.replace("#", "");
const FONT = { ascii: "Times New Roman", eastAsia: "Times New Roman" };
const FONT_HEADING = { ascii: "Times New Roman", eastAsia: "Times New Roman" };

// ============================================================
// HELPER BUILDERS
// ============================================================

// Body paragraph (justified, indented, 1.3x line spacing)
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

// Plain body without indent (for sub-items already prefixed with bullet/number)
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

// Heading 1 - BAB
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 360, after: 240, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 32, font: FONT_HEADING, color: c(P.primary)
    })],
  });
}

// Heading 2 - sub-bab (e.g., 1.1)
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 140, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 28, font: FONT_HEADING, color: c(P.primary)
    })],
  });
}

// Heading 3 - sub-sub-bab
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 26, font: FONT_HEADING, color: c(P.primary)
    })],
  });
}

// Centered title text (for SK header)
function titleCenter(text, size = 28, bold = true) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 120, line: 312 },
    children: [new TextRun({ text, bold, size, font: FONT, color: c(P.primary) })],
  });
}

// Empty paragraph (spacer)
function spacer(n = 1) {
  return Array.from({ length: n }, () => new Paragraph({ children: [] }));
}

// Table cell helper
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

// Standard table borders
const tableBorders = {
  top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
  bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
};

const noBorders = {
  top: { style: BorderStyle.NONE },
  bottom: { style: BorderStyle.NONE },
  left: { style: BorderStyle.NONE },
  right: { style: BorderStyle.NONE },
  insideHorizontal: { style: BorderStyle.NONE },
  insideVertical: { style: BorderStyle.NONE },
};

// ============================================================
// SECTION 1: KOP SK REKTOR & KONSIDERANS
// ============================================================
function buildSKRektor() {
  const items = [];
  
  // Header SK
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "KEPUTUSAN", bold: true, size: 28, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "REKTOR UNIVERSITAS TULUNGAGUNG", bold: true, size: 28, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "NOMOR : A/002.I/KEP/UNITA/I/2025", bold: true, size: 26, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200, line: 312 },
    children: [new TextRun({ text: "TENTANG", bold: true, size: 26, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "PERNYATAAN DAN KEBIJAKAN MUTU", bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 320, line: 312 },
    children: [new TextRun({ text: "UNIVERSITAS TULUNGAGUNG", bold: true, size: 30, font: FONT })],
  }));
  
  // Menimbang
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 100, line: 312 },
    indent: { left: 0 },
    children: [
      new TextRun({ text: "Menimbang  ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: "a. bahwa dalam rangka meningkatkan pengelolaan dan penyelenggaraan pendidikan tinggi yang berkualitas di Universitas Tulungagung serta menjamin pemenuhan Standar Nasional Pendidikan Tinggi sebagaimana diatur dalam Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, maka dipandang perlu memberlakukan kembali Pernyataan dan Kebijakan Mutu di lingkungan Universitas Tulungagung;", size: 24, font: FONT }),
    ],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 200, line: 312 },
    indent: { left: 1134 },
    children: [
      new TextRun({ text: "b. bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a, perlu ditetapkan dengan Keputusan Rektor Universitas Tulungagung.", size: 24, font: FONT }),
    ],
  }));
  
  // Mengingat
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 100, line: 312 },
    children: [
      new TextRun({ text: "Mengingat   ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;", size: 24, font: FONT }),
    ],
  }));
  
  const mengingatItems = [
    "2. Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;",
    "3. Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi;",
    "4. Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    "5. Peraturan Badan Akreditasi Nasional Perguruan Tinggi yang berlaku;",
    "6. Statuta Universitas Tulungagung;",
    "7. Rencana Strategis Universitas Tulungagung.",
  ];
  mengingatItems.forEach(t => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { after: 80, line: 312 },
      indent: { left: 1134 },
      children: [new TextRun({ text: t, size: 24, font: FONT })],
    }));
  });
  
  // Memperhatikan
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { before: 160, after: 200, line: 312 },
    children: [
      new TextRun({ text: "Memperhatikan ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": -", bold: true, size: 24, font: FONT }),
    ],
  }));
  
  // MEMUTUSKAN
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 200, line: 312 },
    children: [new TextRun({ text: "MEMUTUSKAN:", bold: true, size: 26, font: FONT })],
  }));
  
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 160, line: 312 },
    children: [
      new TextRun({ text: "Menetapkan  ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: "KEPUTUSAN REKTOR UNIVERSITAS TULUNGAGUNG TENTANG PERNYATAAN DAN KEBIJAKAN MUTU UNIVERSITAS TULUNGAGUNG.", size: 24, font: FONT }),
    ],
  }));
  
  // Pertama
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 120, line: 312 },
    children: [
      new TextRun({ text: "Pertama      ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: "Memberlakukan Pernyataan dan Kebijakan Mutu di lingkungan Universitas Tulungagung sebagaimana tercantum dalam lampiran keputusan ini.", size: 24, font: FONT }),
    ],
  }));
  
  // Kedua
  items.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 120, line: 312 },
    children: [
      new TextRun({ text: "Kedua        ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: ": ", bold: true, size: 24, font: FONT }),
      new TextRun({ text: "Keputusan ini mulai berlaku sejak tanggal ditetapkan, dengan ketentuan apabila di kemudian hari terdapat kekeliruan dalam penetapannya akan diadakan perubahan sebagaimana mestinya.", size: 24, font: FONT }),
    ],
  }));
  
  // Spacer
  items.push(...spacer(2));
  
  // Ditetapkan
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "Ditetapkan di  : Tulungagung", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "Pada tanggal   : 1 September 2025", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "Universitas Tulungagung", bold: true, size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "Rektor,", size: 24, font: FONT })],
  }));
  
  items.push(...spacer(3));
  
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 60, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "Dr. Muharsono, M.Si", bold: true, size: 24, font: FONT, underline: { type: "single" } })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { after: 200, line: 312 },
    indent: { left: 5400 },
    children: [new TextRun({ text: "NIDN. 0714046001", size: 24, font: FONT })],
  }));
  
  // Tembusan
  items.push(new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 100, line: 312 },
    children: [new TextRun({ text: "Tembusan disampaikan kepada:", bold: true, size: 22, font: FONT })],
  }));
  const tembusan = [
    "1. Yth. Wakil Rektor I, II, dan III;",
    "2. Yth. Dekan FE, FISIP, FP, FH, FT, dan Prodi D3 Kebidanan;",
    "3. Yth. Ka. LPPM dan Ka. PPM;",
    "4. Yth. Ka. BAA, BAU, BAKU, dan BAK;",
    "5. Yth. UPT Sistem Informasi dan UPT Perpustakaan;",
    "6. Arsip.",
  ];
  tembusan.forEach(t => {
    items.push(new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 60, line: 312 },
      children: [new TextRun({ text: t, size: 22, font: FONT })],
    }));
  });
  
  // Page break
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// SECTION 2: HEADER Dokumen Mutu & Tabel Pengendalian
// ============================================================
function buildHeaderDokumen() {
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
          cell("Kode Dok.   : SPMI/PPM/DM/KBJ/2025", { align: AlignmentType.LEFT, width: 35 }),
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
    children: [new TextRun({ text: "PERNYATAAN DAN KEBIJAKAN", bold: true, size: 30, font: FONT })],
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
      new TableRow({
        cantSplit: true,
        children: [
          cell("1", { align: AlignmentType.CENTER, width: 5 }),
          cell("Perumus", { align: AlignmentType.CENTER, width: 18 }),
          cell("Anang Sugeng C., S.AP., M.Si.", { align: AlignmentType.LEFT, width: 32 }),
          cell("Ka. PPM", { align: AlignmentType.LEFT, width: 25 }),
          cell("", { width: 12 }),
          cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("2", { align: AlignmentType.CENTER, width: 5 }),
          cell("Pemeriksa", { align: AlignmentType.CENTER, width: 18 }),
          cell("Eni Minarni, S.E., Ak., M.Ak.", { align: AlignmentType.LEFT, width: 32 }),
          cell("Ka. Bag. Monev", { align: AlignmentType.LEFT, width: 25 }),
          cell("", { width: 12 }),
          cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("3", { align: AlignmentType.CENTER, width: 5 }),
          cell("Persetujuan", { align: AlignmentType.CENTER, width: 18 }),
          cell("Anang Sugeng C., S.AP., M.Si.", { align: AlignmentType.LEFT, width: 32 }),
          cell("Ka. PPM", { align: AlignmentType.LEFT, width: 25 }),
          cell("", { width: 12 }),
          cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("4", { align: AlignmentType.CENTER, width: 5 }),
          cell("Penetapan", { align: AlignmentType.CENTER, width: 18 }),
          cell("Dr. Muharsono, M.Si.", { align: AlignmentType.LEFT, width: 32 }),
          cell("Rektor", { align: AlignmentType.LEFT, width: 25 }),
          cell("", { width: 12 }),
          cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("5", { align: AlignmentType.CENTER, width: 5 }),
          cell("Pengendalian", { align: AlignmentType.CENTER, width: 18 }),
          cell("Anang Sugeng C., S.AP., M.Si.", { align: AlignmentType.LEFT, width: 32 }),
          cell("Ka. PPM", { align: AlignmentType.LEFT, width: 25 }),
          cell("", { width: 12 }),
          cell("01/09/2025", { align: AlignmentType.CENTER, size: 20, width: 8 }),
        ],
      }),
    ],
  });
  items.push(pengendalianTable);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = {
  P, c, FONT, FONT_HEADING,
  body, bodyNoIndent, h1, h2, h3, titleCenter, spacer,
  cell, tableBorders, noBorders,
  buildSKRektor, buildHeaderDokumen,
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat, TabStopType, TabStopPosition,
  fs,
};
