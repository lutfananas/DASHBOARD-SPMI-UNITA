// ============================================================
// STANDAR MUTU SPMI UNIVERSITAS TULUNGAGUNG 2025
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
// BUILDER: Header Dokumen Standar (per standar unik)
// ============================================================
function buildStandarHeader(namaStandar, kodeStandar) {
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
          cell(`Kode Dok.   : SPMI/PPM/DM/STD/${kodeStandar}/2025`, { align: AlignmentType.LEFT, size: 22, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Universitas\nTulungagung", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell("Tanggal       : 1 September 2025\nRevisi          : 01\nHalaman      : ...", { align: AlignmentType.LEFT, size: 22, width: 50 }),
          cell("Logo\n[UNITA]", { align: AlignmentType.CENTER, width: 25 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Sistem Penjaminan Mutu Internal", { align: AlignmentType.LEFT, bold: true, fill: "D9E2F3", width: 25 }),
          cell(`Nama Standar: ${namaStandar}`, { align: AlignmentType.LEFT, size: 22, width: 50 }),
          cell("", { width: 25 }),
        ],
      }),
    ],
  });
  items.push(headerTable);
  items.push(...spacer(1));
  
  // Judul standar
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 60, line: 312 },
    children: [new TextRun({ text: namaStandar, bold: true, size: 30, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "SISTEM PENJAMINAN MUTU INTERNAL (SPMI)", bold: true, size: 26, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 300, line: 312 },
    children: [new TextRun({ text: "UNIVERSITAS TULUNGAGUNG", bold: true, size: 26, font: FONT })],
  }));
  
  // Tabel pengendalian (compact)
  const pengendalianTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Proses", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 20 }),
          cell("Nama", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Jabatan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 25 }),
          cell("T.Tangan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 10 }),
          cell("Tanggal", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 10 }),
        ],
      }),
      ...[
        ["Perumus", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["Pemeriksa", "Eni Minarni, S.E., Ak., M.Ak.", "Ka. Bag. Monev"],
        ["Persetujuan", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
        ["Penetapan", "Dr. Muharsono, M.Si.", "Rektor"],
        ["Pengendalian", "Anang Sugeng C., S.AP., M.Si.", "Ka. PPM"],
      ].map(([proses, nama, jabatan]) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(proses, { align: AlignmentType.CENTER, size: 20, width: 20 }),
            cell(nama, { align: AlignmentType.LEFT, size: 20, width: 35 }),
            cell(jabatan, { align: AlignmentType.LEFT, size: 20, width: 25 }),
            cell("", { width: 10 }),
            cell("01/09/2025", { align: AlignmentType.CENTER, size: 18, width: 10 }),
          ],
        })
      ),
    ],
  });
  items.push(pengendalianTable);
  items.push(...spacer(1));
  
  return items;
}

// ============================================================
// BUILDER: 9-Bagian Template Setiap Standar
// ============================================================
function buildStandarTemplate(data) {
  // data: { namaStandar, kodeStandar, visiMisi, rasional, pihakPJ, definisi, pernyataan, strategi, indikator: [{no, indikator, strategi, unit, baseline, target2026-2030}], dokumenTerkait, referensi }
  const items = [];
  
  // Header dokumen
  items.push(...buildStandarHeader(data.namaStandar, data.kodeStandar));
  
  // Bagian 1: Visi, Misi, Tujuan
  items.push(h2("1. Visi, Misi, Tujuan Perguruan Tinggi"));
  
  items.push(body("Visi Universitas Tulungagung:"));
  items.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 200, line: 312 },
    indent: { left: 720, right: 720 },
    children: [new TextRun({
      text: "\u201cMewujudkan Perguruan Tinggi yang Berkualitas dan Mampu Berkompetisi Berskala Nasional Dan Internasional.\u201d",
      bold: true, italics: true, size: 24, font: FONT,
    })],
  }));
  
  items.push(body("Misi Universitas Tulungagung:"));
  const misi = [
    "a. Peningkatan penyelenggaraan pendidikan, penelitian, dan pengabdian kepada masyarakat yang berkualitas menuju terbentuknya lulusan mandiri;",
    "b. Peningkatan kualitas Sumber Daya Manusia yang meliputi tenaga pendidik dan tenaga kependidikan;",
    "c. Peningkatan sarana dan prasarana akademik yang mendukung proses belajar mengajar.",
  ];
  misi.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Tujuan Universitas Tulungagung:", { spacing: { before: 160 } }));
  const tujuan = [
    "a. Berkembangnya potensi mahasiswa agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa dan berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, terampil, kompeten, dan berbudaya untuk kepentingan bangsa;",
    "b. Dihasilkannya lulusan yang menguasai cabang ilmu pengetahuan dan/atau teknologi untuk memenuhi kepentingan nasional dan peningkatan daya saing bangsa;",
    "c. Dihasilkannya ilmu pengetahuan dan teknologi melalui penelitian yang memperhatikan dan menerapkan nilai humaniora agar bermanfaat bagi kemajuan bangsa, serta kemajuan peradaban dan kesejahteraan umat manusia;",
    "d. Terwujudnya pengabdian kepada masyarakat berbasis penalaran dan karya penelitian yang bermanfaat dalam memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa.",
  ];
  tujuan.forEach(t => items.push(bodyNoIndent(t)));
  
  items.push(body("Sasaran Strategis Universitas Tulungagung:", { spacing: { before: 160 } }));
  const sasaran = [
    "1. Terimplementasinya regulasi pendidikan sesuai dengan SN Dikti dan kebijakan pemerintah, khususnya Permendiktisaintek Nomor 39 Tahun 2025;",
    "2. Peningkatan kemampuan ilmiah dengan lebih mengembangkan program pendidikan akademik, profesional, dan pengembangan program penelitian universitas;",
    "3. Terbangunnya integrasi dosen dan mahasiswa dalam kegiatan penelitian dan Pengabdian kepada Masyarakat (PkM);",
    "4. Tercapainya kualitas dan kuantitas kegiatan penelitian berupa publikasi hasil penelitian atau PkM pada jurnal terakreditasi nasional dan internasional;",
    "5. Menghasilkan produk unggulan berbasis Teknologi Tepat Guna yang berdampak untuk kesejahteraan masyarakat;",
    "6. Terjalinnya kerja sama nasional dan internasional yang berorientasi pada output berkelanjutan;",
    "7. Terselenggaranya kegiatan peningkatan dan pengembangan sertifikasi akademik dan non-akademik bagi mahasiswa sebagai penunjang SKPI;",
    "8. Meningkatkan peringkat akreditasi Program Studi dan Universitas menuju status terakreditasi unggul.",
  ];
  sasaran.forEach(t => items.push(bodyNoIndent(t)));
  
  // Bagian 2: Rasional
  items.push(h2("2. Rasional"));
  data.rasional.forEach(p => items.push(body(p)));
  
  // Bagian 3: Pihak yang Bertanggungjawab
  items.push(h2("3. Pihak yang Bertanggungjawab"));
  items.push(body("Pihak-pihak yang bertanggung jawab dalam pelaksanaan siklus PPEPP untuk standar ini adalah sebagai berikut:"));
  
  const pihakPJTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("Pihak", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 30 }),
          cell("Penetapan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 14 }),
          cell("Pelaksanaan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 14 }),
          cell("Evaluasi", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 14 }),
          cell("Pengendalian", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 14 }),
          cell("Peningkatan", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 14 }),
        ],
      }),
      ...data.pihakPJ.map(p => new TableRow({
        cantSplit: true,
        children: [
          cell(p.pihak, { align: AlignmentType.LEFT, size: 20, width: 30 }),
          cell(p.penetapan ? "\u221a" : "-", { align: AlignmentType.CENTER, size: 20, width: 14 }),
          cell(p.pelaksanaan ? "\u221a" : "-", { align: AlignmentType.CENTER, size: 20, width: 14 }),
          cell(p.evaluasi ? "\u221a" : "-", { align: AlignmentType.CENTER, size: 20, width: 14 }),
          cell(p.pengendalian ? "\u221a" : "-", { align: AlignmentType.CENTER, size: 20, width: 14 }),
          cell(p.peningkatan ? "\u221a" : "-", { align: AlignmentType.CENTER, size: 20, width: 14 }),
        ],
      })),
    ],
  });
  items.push(pihakPJTable);
  
  // Bagian 4: Definisi Istilah
  items.push(h2("4. Definisi Istilah"));
  items.push(body("Definisi istilah yang digunakan dalam standar ini adalah sebagai berikut:"));
  data.definisi.forEach(([huruf, istilah, def]) => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${huruf} `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: `${istilah} `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: `: ${def}`, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Bagian 5: Pernyataan Isi Standar
  items.push(h2("5. Pernyataan Isi Standar"));
  items.push(body("Pernyataan isi standar ini menggambarkan kriteria minimal yang harus dipenuhi oleh Universitas Tulungagung:"));
  data.pernyataan.forEach((p, idx) => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${String.fromCharCode(97 + idx)}. `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: p, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Bagian 6: Strategi
  items.push(h2("6. Strategi"));
  items.push(body("Strategi pencapaian standar ini adalah sebagai berikut:"));
  data.strategi.forEach((p, idx) => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 100 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${idx + 1}. `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: p, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Bagian 7: Indikator
  items.push(h2("7. Indikator"));
  items.push(body("Tabel berikut menjabarkan indikator kinerja, strategi pencapaian, unit penanggung jawab, baseline 2025, dan target capaian 2026-2030:"));
  
  const indikatorTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tableBorders,
    rows: [
      new TableRow({
        tableHeader: true, cantSplit: true,
        children: [
          cell("No.", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 4 }),
          cell("Indikator Kinerja", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 28 }),
          cell("Strategi Pencapaian", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 20 }),
          cell("Unit", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("Baseline 2025", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("2026", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("2027", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("2028", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("2029", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
          cell("2030", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", size: 18, width: 8 }),
        ],
      }),
      ...data.indikator.map((ind, idx) => new TableRow({
        cantSplit: true,
        children: [
          cell(String(idx + 1), { align: AlignmentType.CENTER, size: 18, width: 4 }),
          cell(ind.indikator, { align: AlignmentType.LEFT, size: 18, width: 28 }),
          cell(ind.strategi, { align: AlignmentType.LEFT, size: 18, width: 20 }),
          cell(ind.unit, { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.baseline), { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.target[0]), { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.target[1]), { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.target[2]), { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.target[3]), { align: AlignmentType.CENTER, size: 18, width: 8 }),
          cell(String(ind.target[4]), { align: AlignmentType.CENTER, size: 18, width: 8 }),
        ],
      })),
    ],
  });
  items.push(indikatorTable);
  
  // Bagian 8: Dokumen terkait
  items.push(h2("8. Dokumen terkait"));
  data.dokumenTerkait.forEach((d, idx) => {
    items.push(new Paragraph({
      alignment: AlignmentType.JUSTIFIED,
      spacing: { line: 312, after: 80 },
      indent: { left: 720, hanging: 360 },
      children: [
        new TextRun({ text: `${String.fromCharCode(97 + idx)}. `, size: 24, font: FONT, bold: true }),
        new TextRun({ text: d, size: 24, font: FONT }),
      ],
    }));
  });
  
  // Bagian 9: Referensi
  items.push(h2("9. Referensi"));
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
  
  // Page break untuk standar berikutnya
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = {
  P, c, FONT, FONT_HEADING,
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders,
  buildStandarHeader, buildStandarTemplate,
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  PageBreak, Header, Footer, PageNumber, NumberFormat,
  AlignmentType, HeadingLevel, WidthType, BorderStyle, ShadingType,
  PageOrientation, LevelFormat,
  fs,
};
