// ============================================================
// SECTIONS 3-4: TIM PENYUSUN & KATA PENGANTAR
// ============================================================

const {
  body, bodyNoIndent, h1, h2, h3, spacer,
  cell, tableBorders, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, FONT, P, c,
} = require("./generate_kebijakan_mutu.js");

// ============================================================
// SECTION 3: TIM PENYUSUN
// ============================================================
function buildTimPenyusun() {
  const items = [];
  
  items.push(h1("TIM PENYUSUN"));
  
  items.push(body(
    "Tim penyusun Kebijakan Mutu Universitas Tulungagung menjalankan tugas berdasarkan Keputusan Rektor Universitas Tulungagung Nomor: A/002.I/KEP/UNITA/I/2025 tentang Pernyataan dan Kebijakan Mutu Universitas Tulungagung, tanggal 1 September 2025. Tim penyusun bertanggung jawab atas perumusan, penyusunan, dan pengkajian substansi Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung agar selaras dengan ketentuan Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi. Tim penyusun juga bertugas memastikan bahwa dokumen Kebijakan Mutu ini dapat menjadi acuan utama dalam penyelenggaraan SPMI di lingkungan Universitas Tulungagung."
  ));
  
  items.push(body(
    "Susunan keanggotaan Tim Penyusun Kebijakan Mutu Universitas Tulungagung adalah sebagai berikut:"
  ));
  
  // Tabel tim penyusun
  const timTable = new Table({
    width: { size: 90, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    borders: tableBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          cell("Penanggung Jawab", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Dr. Muharsono, M.Si.", { align: AlignmentType.CENTER, bold: true, width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Ketua", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Anang Sugeng Cahyono, S.AP., M.Si.", { align: AlignmentType.CENTER, width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Sekretaris", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Lutfan Anas Zahir, S.Si., M.Pd.", { align: AlignmentType.CENTER, width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Anggota", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("1. Prof. Dr. Dwi Ima Herminingsih, M.Hum.\n2. Danang Wijanarko, S.T., M.T.\n3. Chusnatul Ulaela Sajali, S.P., M.P.\n4. Aulia Rahman Hakim, S.H., M.H.\n5. Eni Minarni, S.E., M.Ak.", { align: AlignmentType.LEFT, width: 50 }),
        ],
      }),
      new TableRow({
        cantSplit: true,
        children: [
          cell("Administrator", { align: AlignmentType.CENTER, bold: true, fill: "D9E2F3", width: 35 }),
          cell("Yeni Setyowati, S.P.", { align: AlignmentType.CENTER, width: 50 }),
        ],
      }),
    ],
  });
  items.push(timTable);
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

// ============================================================
// SECTION 4: KATA PENGANTAR
// ============================================================
function buildKataPengantar() {
  const items = [];
  
  items.push(h1("KATA PENGANTAR"));
  
  items.push(body(
    "Puji syukur senantiasa kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat, hidayah, dan karunia-Nya, sehingga Pusat Penjaminan Mutu Universitas Tulungagung dapat menyelesaikan penyusunan dokumen Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung Tahun 2025. Penyusunan dokumen ini merupakan wujud nyata komitmen Universitas Tulungagung dalam menjalankan amanat Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi, yang menjadi landasan regulasi terkini bagi penyelenggaraan Sistem Penjaminan Mutu Pendidikan Tinggi di Indonesia."
  ));
  
  items.push(body(
    "Dokumen Kebijakan Mutu ini disusun dengan mengacu pada kerangka Sistem Penjaminan Mutu Pendidikan Tinggi (SPM Dikti) sebagaimana diatur dalam Permen 39 Tahun 2025, yang mencakup Sistem Penjaminan Mutu Internal (SPMI) dan Sistem Penjaminan Mutu Eksternal (SPME). Dokumen ini mengintegrasikan prinsip triangulasi data berbasis Pangkalan Data Pendidikan Tinggi (PD Dikti), tata kelola perguruan tinggi yang baik, serta siklus Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan (PPEPP) sebagai motor penggerak peningkatan mutu secara berkelanjutan. Selain itu, dokumen ini juga merestrukturisasi sembilan Standar Nasional Pendidikan Tinggi (SN Dikti) sesuai Pasal 4 dan Pasal 5 Permen 39 Tahun 2025."
  ));
  
  items.push(body(
    "Kebijakan Mutu ini menjadi acuan utama dalam penyusunan Standar Mutu, Manual Mutu, Formulir Mutu, Standar Operasional Prosedur (SOP), dan Pengelolaan Penjaminan Mutu di lingkungan Universitas Tulungagung. Dokumen ini diharapkan dapat menjadi pedoman yang kuat (powerful) bagi seluruh sivitas akademika dalam mewujudkan budaya mutu, sehingga Universitas Tulungagung mampu memenuhi dan melampaui SN Dikti, memperoleh status akreditasi terakreditasi unggul, serta berkontribusi positif terhadap pembangunan bangsa dan negara. Kami menyampaikan terima kasih yang tulus kepada seluruh pihak internal dan eksternal Universitas Tulungagung yang telah memberikan kontribusi, masukan, dan kritik membangun dalam proses penyusunan dokumen ini."
  ));
  
  items.push(body(
    "Kami menyadari bahwa dokumen ini masih memerlukan penyempurnaan seiring dengan dinamika perkembangan regulasi, ilmu pengetahuan, teknologi, serta kebutuhan pemangku kepentingan. Oleh karena itu, kritik, saran, dan masukan dari berbagai pihak senantiasa kami harapkan demi penyempurnaan dokumen Kebijakan Mutu ini di masa mendatang. Semoga dokumen ini dapat memberikan manfaat yang sebesar-besarnya bagi kemajuan Universitas Tulungagung dan mewujudkan visi untuk menjadi perguruan tinggi yang berkualitas dan mampu berkompetisi berskala nasional dan internasional."
  ));
  
  items.push(...spacer(2));
  
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Tulungagung, 1 September 2025", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Pusat Penjaminan Mutu", size: 24, font: FONT })],
  }));
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Ketua,", size: 24, font: FONT })],
  }));
  
  items.push(...spacer(3));
  
  items.push(new Paragraph({
    alignment: AlignmentType.RIGHT,
    spacing: { after: 60, line: 312 },
    children: [new TextRun({ text: "Anang Sugeng Cahyono, S.AP., M.Si.", bold: true, size: 24, font: FONT, underline: { type: "single" } })],
  }));
  
  items.push(new Paragraph({
    children: [new TextRun({ text: "" }), new PageBreak()],
  }));
  
  return items;
}

module.exports = { buildTimPenyusun, buildKataPengantar };
