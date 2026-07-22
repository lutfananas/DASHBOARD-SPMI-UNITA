<div align="center">

<img src="public/unita-logo.png" alt="UNITA Logo" width="120" height="120" />

# 🛡️ DASHBOARD SPMI UNITA

### Sistem Penjaminan Mutu Internal — Universitas Tulungagung

**Dashboard pemantauan mutu berbasis Audit Mutu Internal (AMI) sesuai Permendiktisaintek No. 39 Tahun 2025**

[![Live Demo](https://img.shields.io/badge/LIVE-spmiunita.pages.dev-386EE6?style=for-the-badge&logo=cloudflare&logoColor=white)](https://spmiunita.pages.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Daftar Isi

- [Overview](#-overview)
- [Fitur Utama](#-fitur-utama)
- [Arsitektur Sistem](#-arsitektur-sistem)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Setup](#-instalasi--setup)
- [Deployment](#-deployment)
- [Data Sources](#-data-sources)
- [Dokumentasi SPMI](#-dokumentasi-spmi)
- [Regulasi Acuan](#-regulasi-acuan)
- [Roadmap](#-roadmap)
- [Tim Pengembang](#-tim-pengembang)
- [Lisensi](#-lisensi)

---

## 🎯 Overview

**Dashboard SPMI UNITA** adalah platform pemantauan real-time untuk Sistem Penjaminan Mutu Internal (SPMI) Universitas Tulungagung. Dashboard ini mengintegrasikan hasil Audit Mutu Internal (AMI) dari 13 dokumen audit tahun 2024-2025, mencakup **33 Standar SPMI**, **8 Indikator Kinerja Utama (IKU)**, dan **4 Dokumen Mutu** dalam satu antarmuka terpusat.

Sistem ini dibangun dengan prinsip **triangulasi data** (Pasal 66 Permen 39/2025) yang mengintegrasikan tiga sumber data: PD Dikti (data primer), evaluasi internal (AMI/RTM), dan stakeholder eksternal (BAN-PT/LAM/DUDI).

### 🌐 Live Deployment

Dashboard ini sudah live dan dapat diakses publik di:

> **🔗 https://spmiunita.pages.dev**

---

## ✨ Fitur Utama

### 📊 Dashboard Analytics

| Fitur | Deskripsi |
|-------|-----------|
| **KPI Cards** | 5 indikator utama: Skor AMI, Total Temuan, PTK, Tindak Lanjut, Standar Terpantau |
| **Tren AMI Chart** | Area chart 2021-2025 dengan toggle Summary/Tahun terpilih |
| **Distribusi Status** | Pie chart MS/ML/BS/MSV untuk 33 standar |
| **Radar Chart** | Skor AMI per kategori (Pendidikan, Penelitian, PkM, Tambahan) |
| **Bar Chart** | Tren skor per kategori 5 tahun |
| **Year Selector** | Dropdown 2021-2025 dengan indikator tahun kosong |

### 📋 Tabel 33 Standar SPMI

Tabel detail dengan 11 kolom per standar:
- Nomor, Nama, Kategori, Kode Dokumen
- Skor AMI, Status (MS/ML/BS/MSV)
- Temuan, PTK (Permintaan Tindakan Koreksi)
- Tindak Lanjut (dengan progress bar)
- Catatan AMI, Dokumen AMI sumber
- **Klik baris** → Dialog detail riwayat AMI per tahun

### 📑 Detail AMI per Dokumen

Section accordion dengan **13 dokumen AMI** dan **212 indikator** detail:
- AMI Pendidikan (19 indikator)
- AMI Penelitian (20 indikator)
- AMI Pengabdian kepada Masyarakat (20 indikator)
- AMI VMTS — Visi, Misi, Tujuan, dan Strategi (15 indikator)
- AMI TPTK — Tata Pamong dan Tata Kelola (15 indikator)
- AMI Mahasiswa (14 indikator)
- AMI SDM — Sumber Daya Manusia (18 indikator)
- AMI Kesejahteraan (19 indikator)
- AMI Keuangan (14 indikator)
- AMI Sarana dan Prasarana (14 indikator)
- AMI MBKM — Merdeka Belajar Kampus Merdeka (4 indikator)
- AMI Pelayanan kepada Mahasiswa (20 indikator)
- AMI Proses Pembelajaran (20 indikator)

### 📈 8 Indikator Kinerja Utama (IKU)

| IKU | Baseline 2025 | Target 2030 |
|-----|---------------|-------------|
| Lulusan terserap DUDI <6 bulan | 87% | 92% |
| Mahasiswa pengalaman luar kampus | 68% | 40% |
| Dosen berkegiatan di luar kampus | 15% | 35% |
| Praktisi mengajar di kampus | 2/prodi | 6/prodi |
| Hasil kerja dosen digunakan masyarakat | 18 | 35 |
| Prodi berkerjasama DUDI | 3/prodi | 7/prodi |
| Mata kuliah metode praktik | 45% | 60% |
| Prodi terakreditasi unggul | 30% | 70% |

### 🔄 Sinkronisasi 4 Dokumen Mutu

| Dokumen | Kode | Halaman |
|---------|------|---------|
| Kebijakan Mutu SPMI | SPMI/PPM/DM/KBJ/2025 | 65 |
| Manual Mutu SPMI | SPMI/PPM/DM/MNL/2025 | 55 |
| Standar Mutu SPMI | SPMI/PPM/DM/STD/2025 | 312 |
| Formulir Mutu SPMI | SPMI/PPM/DM/FORM/2025 | 132 |

### 🎨 Tema Arkham (Dark Navy Blockchain)

Dashboard menggunakan tema gelap dengan aksen neon biru dongker:
- Background: `#0A0E1A` (near-black dengan hint biru)
- Primary: `#386EE6` (electric blue)
- Grid pattern subtle seperti terminal trading
- Glow effects (blue, emerald, amber, rose)
- Font monospace untuk label, kode, dan angka
- Terminal-border dengan corner accents
- Pulse animation untuk live indicator

---

## 🏗️ Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD SPMI UNITA                         │
│                    spmiunita.pages.dev                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │  KPI Cards   │  │  AMI Charts  │  │  33 Standar Table    │ │
│  │  (5 metrics) │  │  (Area/Pie/  │  │  + Detail Dialog     │ │
│  │              │  │  Radar/Bar)  │  │  + 13 AMI Accordion  │ │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘ │
│         │                 │                     │              │
│         └─────────────────┼─────────────────────┘              │
│                           │                                    │
│                    ┌──────▼──────┐                             │
│                    │  DATA LAYER │                             │
│                    │             │                             │
│  ┌─────────────────┼─────────────┼─────────────────────┐      │
│  │                 │             │                     │      │
│  │  ┌──────────────▼──┐  ┌──────▼──────┐  ┌──────────▼───┐  │
│  │  │  spmi-data.ts   │  │ ami-detail  │  │  IKU data    │  │
│  │  │  (33 standar)   │  │  -data.ts   │  │  (8 IKU)     │  │
│  │  │  + AMI 2025     │  │ (13 dokumen │  │  + baseline  │  │
│  │  │  + helper fn    │  │  + 212 ind) │  │  + target    │  │
│  │  └─────────────────┘  └─────────────┘  └──────────────┘  │
│  │                                                            │
│  └─── PRINSIP TRIANGULASI (Pasal 66 Permen 39/2025) ────────┘
│                           │                                    │
│         ┌─────────────────┼─────────────────┐                  │
│         │                 │                 │                  │
│  ┌──────▼──────┐  ┌───────▼───────┐  ┌─────▼──────────┐      │
│  │  PD Dikti   │  │  Evaluasi     │  │  Stakeholder   │      │
│  │  (Primer)   │  │  Internal     │  │  Eksternal     │      │
│  │             │  │  (AMI/RTM)    │  │  (BAN-PT/LAM)  │      │
│  └─────────────┘  └───────────────┘  └────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Alur Data

```
15 Dokumen AMI (PDF) → Ekstraksi Data → spmi-data.ts → Dashboard Rendering
                                              ↓
                                    Prinsip Triangulasi
                                    (Pasal 66 Permen 39/2025)
                                              ↓
                                    ┌─────────┴─────────┐
                                    │                   │
                              Tabel 33 Standar    Detail AMI per Dokumen
                              + Dialog Detail     + 212 Indikator
```

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org) | 16.1.3 |
| **Language** | [TypeScript](https://www.typescriptlang.org) | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 4.x |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) | New York |
| **Icons** | [Lucide React](https://lucide.dev) | 0.525+ |
| **Charts** | [Recharts](https://recharts.org) | 2.15+ |
| **Animation** | [Framer Motion](https://www.framer.com/motion) | 12.23+ |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com) | — |
| **Version Control** | [Git](https://git-scm.com) + [GitHub](https://github.com) | — |
| **Package Manager** | [Bun](https://bun.sh) / npm | — |

---

## 📁 Struktur Proyek

```
DASHBOARD-SPMI-UNITA/
├── public/
│   └── unita-logo.png                 # Logo Universitas Tulungagung
├── src/
│   ├── app/
│   │   ├── globals.css                # Tema Arkham (dark navy + neon)
│   │   ├── layout.tsx                 # Root layout + metadata
│   │   └── page.tsx                   # Dashboard utama (single-page)
│   ├── components/
│   │   ├── spmi/
│   │   │   ├── blockchain-card.tsx    # Komponen UI (KPI, Progress, Badge)
│   │   │   ├── standar-detail-dialog.tsx  # Dialog riwayat AMI per standar
│   │   │   └── detail-ami-section.tsx # Section 13 dokumen AMI + 212 indikator
│   │   └── ui/                        # shadcn/ui components (48 files)
│   └── lib/
│       ├── spmi-data.ts               # Data 33 standar + 8 IKU + 4 dokumen mutu
│       ├── ami-detail-data.ts         # Data 13 dokumen AMI + 212 indikator detail
│       ├── utils.ts                   # Utility functions
│       └── db.ts                      # Prisma database client
├── next.config.ts                     # Next.js config (static export)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Instalasi & Setup

### Prasyarat

- [Node.js](https://nodejs.org) 18+ atau [Bun](https://bun.sh) 1.0+
- npm atau bun package manager

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/lutfananas/DASHBOARD-SPMI-UNITA.git

# 2. Masuk ke direktori
cd DASHBOARD-SPMI-UNITA

# 3. Install dependencies
bun install
# atau
npm install --legacy-peer-deps

# 4. Jalankan development server
bun run dev
# atau
npm run dev

# 5. Buka browser
# Dashboard tersedia di http://localhost:3000
```

### Build untuk Production

```bash
# Build static export
npx next build

# Output akan ada di folder `out/`
```

---

## ☁️ Deployment

### Cloudflare Pages (Current)

Dashboard sudah dideploy ke Cloudflare Pages dan dapat diakses di:
> **https://spmiunita.pages.dev**

#### Deploy Manual

```bash
# 1. Build static export
npx next build

# 2. Deploy ke Cloudflare Pages
CLOUDFLARE_API_TOKEN="YOUR_TOKEN" wrangler pages deploy out \
  --project-name spmiunita \
  --branch main \
  --commit-dirty=true
```

#### Setup Cloudflare Pages Pertama Kali

```bash
# Install wrangler
npm install -g wrangler

# Buat project baru
CLOUDFLARE_API_TOKEN="YOUR_TOKEN" wrangler pages project create spmiunita \
  --production-branch main

# Deploy
CLOUDFLARE_API_TOKEN="YOUR_TOKEN" wrangler pages deploy out \
  --project-name spmiunita \
  --branch main
```

### GitHub Repository

> **https://github.com/lutfananas/DASHBOARD-SPMI-UNITA**

---

## 📊 Data Sources

Dashboard ini menggunakan data AMI asli yang diekstrak dari **15 dokumen PDF** hasil Audit Mutu Internal Universitas Tulungagung Tahun Akademik 2024/2025:

| No | Dokumen AMI | Kode Dokumen | Indikator |
|----|-------------|--------------|-----------|
| 1 | AMI Pendidikan | SPMI/PPM/MONEV/PEND/2025 | 19 |
| 2 | AMI Penelitian | SPMI/PPM/MONEV/PEN/2025 | 20 |
| 3 | AMI Pengabdian kepada Masyarakat | SPMI/PPM/MONEV/PKM/2025 | 20 |
| 4 | AMI VMTS | SPMI/PPM/MONEV/VMTS/2025 | 15 |
| 5 | AMI TPTK | SPMI/PPM/MONEV/TPTK/2025 | 15 |
| 6 | AMI Mahasiswa | SPMI/PPM/MONEV/MHS/2025 | 14 |
| 7 | AMI SDM | SPMI/PPM/MONEV/SDM/2025 | 18 |
| 8 | AMI Kesejahteraan | SPMI/PPM/MONEV/KSJH/2025 | 19 |
| 9 | AMI Keuangan | SPMI/PPM/MONEV/KEU/2025 | 14 |
| 10 | AMI Sarana dan Prasarana | SPMI/PPM/MONEV/SARPRAS/2025 | 14 |
| 11 | AMI MBKM | SPMI/PPM/MONEV/MBKM/2025 | 4 |
| 12 | AMI Pelayanan kepada Mahasiswa | SPMI/PPM/MONEV/PLYN/2025 | 20 |
| 13 | AMI Proses Pembelajaran | SPMI/PPM/MONEV/SPB/2025 | 20 |
| | **TOTAL** | | **212** |

### Status Indikator

| Status | Jumlah | Persentase |
|--------|--------|------------|
| ✅ Tercapai | 194 | 91.5% |
| ⚠️ Belum Tercapai | 18 | 8.5% |

---

## 📚 Dokumentasi SPMI

Dashboard ini sinkron dengan 4 dokumen mutu SPMI Universitas Tulungagung Tahun 2025:

### 1. Kebijakan Mutu SPMI (65 halaman)
- Kode: `SPMI/PPM/DM/KBJ/2025`
- Payung strategis untuk seluruh 33 standar SPMI
- Berisi: Visi-Misi, Dasar Hukum, Tujuan, Ruang Lingkup, 32 Definisi, Kerangka SPM Dikti, 9 Standar SN Dikti, Kebijakan & Strategi SPMI, Siklus PPEPP, AMI & RTM, SPME, Struktur Organisasi PPM, 33 Standar, 8 IKU, Ketentuan Penutup

### 2. Manual Mutu SPMI (55 halaman)
- Kode: `SPMI/PPM/DM/MNL/2025`
- Panduan operasional PPEPP untuk 33 standar
- Berisi: Analisis Risiko, SPMI UNITA, Manual Penetapan, Manual Pelaksanaan, Manual Evaluasi, Manual Pengendalian, Manual Peningkatan, Pemetaan Sistem Kerja, Kebutuhan Dokumen/SOP

### 3. Standar Mutu SPMI (312 halaman)
- Kode: `SPMI/PPM/DM/STD/2025`
- 33 standar (8 Pendidikan + 8 Penelitian + 8 PkM + 9 Tambahan)
- Setiap standar: 15 indikator, 12 poin pernyataan, 9 definisi, 8 strategi, target 2026-2030 dengan baseline 2025

### 4. Formulir Mutu SPMI (132 halaman)
- Kode: `SPMI/PPM/DM/FORM/2025`
- 38 formulir pendukung PPEPP
- Berisi: 8 formulir Pendidikan, 10 formulir Penelitian/PkM, 9 formulir Tambahan, 4 formulir AMI/RTM, 5 formulir Akademik, 2 formulir PD Dikti/Triangulasi

---

## 📜 Regulasi Acuan

| No | Regulasi | Tentang |
|----|----------|---------|
| 1 | UU No. 20 Tahun 2003 | Sistem Pendidikan Nasional |
| 2 | UU No. 12 Tahun 2012 | Pendidikan Tinggi |
| 3 | PP No. 4 Tahun 2014 | Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi |
| 4 | **Permendiktisaintek No. 39 Tahun 2025** | **Penjaminan Mutu Pendidikan Tinggi** |
| 5 | Peraturan BAN-PT | Akreditasi Perguruan Tinggi |
| 6 | Statuta Universitas Tulungagung | Tata Kelola Universitas |
| 7 | Renstra Universitas Tulungagung | Rencana Strategis 2023-2027 |

> ⚠️ **Catatan:** Dokumen SPMI UNITA 2025 telah sepenuhnya diselaraskan dengan Permendiktisaintek No. 39 Tahun 2025. Referensi terhadap Permen 53/2023, Permen 3/2020, dan Permen 5/2020 telah dihapus total.

---

## 🗺️ Roadmap

- [x] ✅ Dashboard utama dengan 33 standar SPMI
- [x] ✅ Data AMI asli dari 15 dokumen (212 indikator)
- [x] ✅ 8 IKU dengan baseline 2025 dan target 2030
- [x] ✅ Dialog detail riwayat AMI per standar
- [x] ✅ Section detail AMI per dokumen (13 accordion)
- [x] ✅ Toggle Summary/Tahun untuk chart tren AMI
- [x] ✅ Tema Arkham (dark navy blockchain)
- [x] ✅ Deploy ke Cloudflare Pages (spmiunita.pages.dev)
- [x] ✅ Logo UNITA
- [ ] 🔲 Data AMI tahun 2021-2024 (menunggu dokumen historis)
- [ ] 🔲 Integrasi API PD Dikti (real-time data)
- [ ] 🔲 Export laporan AMI ke PDF/Excel
- [ ] 🔲 Multi-user dengan role-based access (Rektor/PPM/LPM/GKM)
- [ ] 🔲 Notifikasi temuan AMI dan PTK via email
- [ ] 🔲 Mobile app (PWA)

---

## 👥 Tim Pengembang

### Pusat Penjaminan Mutu (PPM) Universitas Tulungagung

| Peran | Nama |
|-------|------|
| **Penanggung Jawab** | Dr. Muharsono, M.Si. (Rektor) |
| **Ketua PPM** | Dr. Anang Sugeng Cahyono, S.AP., S.H., M.Si. |
| **Sekretaris** | Lutfan Anas Zahir, S.Si., M.Pd. |
| **Ka. Bag. Pengembangan SPMI** | Dra. Dwi Iriani Margayaningsih, M.AP. |
| **Ka. Bag. Audit dan Monevin** | Eni Minarni, S.E., M.Ak. |
| **Administrator** | Yeni Setyowati, S.P. |

### Tim Anggota

- Prof. Dr. Dwi Ima Herminingsih, M.Hum.
- Danang Wijanarko, S.T., M.T.
- Chusnatul Ulaela Sajali, S.P., M.P.
- Aulia Rahman Hakim, S.H., M.H.

### Tim Pengembang Dashboard

| Peran | Tanggung Jawab |
|-------|---------------|
| **Full-Stack Developer** | Arsitektur, data layer, UI/UX, deployment |
| **SPMI Domain Expert** | Validasi data AMI, konsistensi dokumen mutu |
| **QA & Testing** | Browser verification, data integrity check |

---

## 📄 Lisensi

MIT License — Bebas digunakan, dimodifikasi, dan didistribusikan untuk kepentingan penjaminan mutu pendidikan tinggi.

---

## 🙏 Acknowledgments

- **Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemendiktisaintek)** — Regulasi Permen 39/2025
- **Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)** — Standar akreditasi
- **Pangkalan Data Pendidikan Tinggi (PD Dikti)** — Sumber data primer
- **Universitas Tulungagung** — Institusi penyelenggara
- **Cloudflare** — Hosting dan CDN
- **Vercel / Next.js Team** — Framework dan tooling
- **shadcn/ui** — Komponen UI yang elegan

---

<div align="center">

**SK Rektor Nomor: A/002.I/KEP/UNITA/I/2025 • Tanggal Penetapan: 1 September 2025**

**Dibangun dengan ❤️ untuk mutu pendidikan tinggi Indonesia**

[🌐 Live Demo](https://spmiunita.pages.dev) • [📦 GitHub](https://github.com/lutfananas/DASHBOARD-SPMI-UNITA) • [📖 Docs](https://github.com/lutfananas/DASHBOARD-SPMI-UNITA#readme)

</div>
