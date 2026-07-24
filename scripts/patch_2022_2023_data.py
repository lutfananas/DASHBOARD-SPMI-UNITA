"""
Patch spmi-data.ts:
1. Tambah data 2023 untuk standar 9-33 (Penelitian, PkM, Tambahan)
2. Tambah data 2022 untuk seluruh 33 standar (dari 11 PDF AMI TA 2021/2022)
"""
FILE = "/home/z/my-project/src/lib/spmi-data.ts"

# ============ DATA 2023 (Standar 9-33) ============
# Dari 12 PDF AMI TA 2022/2023 (folder LAPORAN MONEV + PENDIDIKAN)
DATA_2023 = {
    9: {  # Luaran Penelitian
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023 (3 Agustus 2023). Publikasi tercatat: 1) BEMJ Business 2(1) sitasi 1, 2) Get Press India sitasi 10, 3) BEMJ 2(2) sitasi 2, 4) International Seminar sitasi 0, 5) International Journal of AI Research 6(1.2), 6) Journal of Social Science. Skim penelitian: Regular & Institusi. Pendanaan internal dari UNITA + eksternal DIKTI/LLDIKTI.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023 (Monev 3 Agustus 2023)",
        "tanggalAMI": "3 Agustus 2023",
    },
    10: {  # Proses Penelitian
        "skor": 82, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 84,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Kegiatan disesuaikan dengan roadmap penelitian & kelompok keilmuan. Skim Regular (dosen+mahasiswa) & Institusi (kerja sama antar-PT). Diseminasi via jurnal Pendidikan & pertemuan ilmiah dosen. Hasil penelitian dipublikasi di jurnal internal Prodi, jurnal institusi, jurnal terakreditasi nasional/internasional.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    11: {  # Masukan Penelitian
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Pendanaan penelitian internal dari UNITA + eksternal dari DIKTI/LLDIKTI. Fasilitas kampus mendukung. SDM peneliti sesuai bidang keilmuan. Sistem informasi terintegrasi melalui LPPM.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    12: {  # Hasil Penelitian
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Hasil penelitian dipublikasi di jurnal internal Program Studi, jurnal PkM institusi, jurnal terakreditasi nasional/internasional. Hasil juga dijadikan bahan ajar pendukung mata kuliah.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    13: {  # Publikasi Ilmiah
        "skor": 78, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. 6 publikasi tercatat: BEMJ 2(1) sitasi 1, Get Press India sitasi 10, BEMJ 2(2) sitasi 2, International Seminar sitasi 0, International Journal of AI Research 6(1.2) sitasi 0, Journal of Social Science sitasi 0. Belum ada target 10 dokumen/prodi.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    14: {  # Paten & HKI
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. HKI/Paten belum dilaporkan secara terstruktur di laporan 2023. Rekomendasi: sosialisasi hibah nasional, pemetaan dosen untuk konsistensi publikasi jurnal terkait kepangkatan.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    15: {  # Diseminasi Penelitian
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Diseminasi via jurnal Program Studi, jurnal institusi, jurnal terakreditasi nasional/internasional. Pertemuan ilmiah dosen rutin dilaksanakan.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    16: {  # Kolaborasi Penelitian
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Skim Institusi membuka jaringan kerjasama penelitian dosen-mahasiswa dan antar-PT. Belum ada kolaborasi internasional. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    # PkM 17-24
    17: {
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. PkM dilaksanakan sesuai roadmap. 2 skim: Regular & IbM (Ipteks bagi Masyarakat). Regular rutin terjadwal + accommodasi permohonan PkM via LPPM. IbM hibah kompetisi per semester.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    18: {
        "skor": 82, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 84,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. PkM dilaksanakan secara terjadwal sesuai bidang keilmuan dosen & kebutuhan masyarakat. Sasaran 1 penelitian/mahasiswa, PkM mahasiswa via MBKM, PKL, KKN.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    19: {
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Pendanaan PkM internal dari UNITA. Skim IbM sebagai hibah kompetisi. SDM pengabdi sesuai bidang. Fasilitas dari Biro Umum.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    20: {
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Skala PkM masih LOKAL/DAERAH, belum menyentuh nasional/internasional. Hasil penelitian diterapkan pada objek PkM secara terstruktur.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    21: {
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Publikasi PkM di jurnal Program Studi & jurnal institusi. Belum ada target kuantitatif. Rekomendasi: workshop ToT penyusunan proposal PkM.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    22: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Produk/jasa PkM belum dilaporkan secara terstruktur. Rekomendasi: tingkatkan dana penelitian & PkM, kembangkan inovasi yang applicable.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    23: {
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Diseminasi melalui jurnal internal & pertemuan ilmiah. Belum ada forum diseminasi nasional/internasional.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    24: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2022/2023. Kolaborasi PkM masih lokal. Skim Institusi membuka jaringan antar-PT. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    # Tambahan 25-33
    25: {  # VMTS
        "skor": 86, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 88,
        "catatan": "Berdasarkan AMI VMTS 7 Agustus 2023 (364 responden: 66 Pimpinan/Dosen, 38 Tendik, 250 Mahasiswa, 10 Stakeholders). Skor rata-rata 3.425/4 (86% = Baik). Pimpinan&Dosen 3.8 (tertinggi), Tendik 3.2 (terendah), Mahasiswa 3.3, Stakeholders 3.4. Perlu peningkatan sosialisasi ke tendik baru.",
        "dokumenAMI": "AMI VMTS 2022-2023 (Monev 7 Agustus 2023)",
        "tanggalAMI": "7 Agustus 2023",
    },
    26: {  # TPTK
        "skor": 84, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 86,
        "catatan": "Berdasarkan AMI TPTK 14 Agustus 2023 (364 responden). Skor rata-rata 3.375/4 (84%). Tendik 3.5 (tertinggi), Pimpinan&Dosen 3.4, Mahasiswa 3.4, Stakeholders 3.2 (terendah). Mengacu Permendikbud 3/2020 Pasal 24-29 tentang Tata Pamong. Perlu peningkatan sistem administrasi & kepemimpinan.",
        "dokumenAMI": "AMI TPTK 2022-2023 (Monev 14 Agustus 2023)",
        "tanggalAMI": "14 Agustus 2023",
    },
    27: {  # Mahasiswa
        "skor": 80, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Mahasiswa 13 Maret 2023. 12 indikator dalam 3 kategori: BEM/UKM (3 indikator), INBIS Inkubator Bisnis (5 indikator), Tracer Study (4 indikator). Rata-rata BAIK. INBIS 'Dampak dan manfaat' & Tracer 'Umpan balik responden' = Cukup (perlu perbaikan). Rekomendasi: tingkatkan implementasi program kerja BEM/UKM selaras Renstra, kembangkan strategi INBIS, sosialisasi tracer study.",
        "dokumenAMI": "AMI Mahasiswa 2022-2023 (Monev 13 Maret 2023)",
        "tanggalAMI": "13 Maret 2023",
    },
    28: {  # SDM
        "skor": 78, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI SDM 15 April 2023. Dosen: aktif seminar/workshop, kepanitiaan, terdaftar asosiasi, mengusulkan kenaikan jabatan via tim percepatan. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar eksternal, Administrasi jarang dilibatkan seminar. 9 dosen studi lanjut.",
        "dokumenAMI": "AMI SDM 2022-2023 (Monev 15 April 2023) & AMI Kesejahteraan 15 Mei 2023",
        "tanggalAMI": "15 April 2023 & 15 Mei 2023",
    },
    29: {  # KSP
        "skor": 76, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 78,
        "catatan": "Keuangan (3 Mei 2023): APB Rp 10.319.370.000, penggunaan Rp 10.941.870.000, DEFISIT Rp 622.500. Sarpras (20 Maret 2023): 46 item diperiksa, kondisi rata-rata BAIK. Beberapa perangkat perlu upgrade. Rekomendasi: maintenance rusak, upgrade teknologi, sistem inventarisasi aplikasi, tambah Lab Teknik Elektro.",
        "dokumenAMI": "AMI Keuangan 2022-2023 & AMI Sarpras 2022-2023",
        "tanggalAMI": "3 Mei 2023 & 20 Maret 2023",
    },
    30: {  # Kerjasama
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Kerjasama 26 Mei 2023. 87 mitra kerjasama (30 Pendidikan, 30 Penelitian, 27 Pengabdian). 7 indikator Likert 1-4, range 3.56-3.96. Tertinggi: Implementasi kegiatan 3.96, Kelanjutan kerjasama 3.94. Terendah: Respons saran 3.56, Kepuasan 3.56. >60% mitra akan melanjutkan.",
        "dokumenAMI": "AMI Kerjasama 2022-2023 (Monev 26 Mei 2023)",
        "tanggalAMI": "26 Mei 2023",
    },
    31: {  # MBKM
        "skor": 40, "status": "BS", "temuan": 7, "ptK": 5, "tindakLanjut": 50,
        "catatan": "Berdasarkan AMI MBKM 10 April 2023. Implementasi MBKM masih SANGAT KURANG. Hanya 3 mahasiswa Fakultas Ekonomi lolos (skema Kewirausahaan & Studi Proyek Independen). Minat mahasiswa tinggi namun seleksi portal MBKM ketat. Bantuan potongan UKT maksimal Rp 2.400.000. 9 skema MBKM. Rekomendasi: sosialisasi intensif, pelatihan tes seleksi, kerjasama mitra, tambah PIC pelaporan MBKM.",
        "dokumenAMI": "AMI MBKM 2022-2023 (Monev 10 April 2023)",
        "tanggalAMI": "10 April 2023",
    },
    32: {  # LCT
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2023. Publikasi: 6 paper tercatat (1 internasional seminar, 1 internasional jurnal, 4 nasional). Sitasi 0-10. PkM lokal/daerah. Belum ada target kuantitatif capaian Tridharma.",
        "dokumenAMI": "AMI Penelitian & PkM 2022-2023",
        "tanggalAMI": "3 Agustus 2023",
    },
    33: {  # Pelayanan Mahasiswa
        "skor": 76, "status": "BS", "temuan": 5, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Pelayanan Mahasiswa Ganjil (17 Jan 2023) & Genap (Juli 2023), skala 1-5. Ganjil: 6 Prodi skor 3.33-3.51, Biro 3.30-3.57. Genap: 7 Prodi skor 3.79-4.10 (termasuk Teknik Elektro baru), BAAK 3.39, Biro Keuangan 3.57, Biro Umum 3.30, Kemahasiswaan 3.37, Perpustakaan 3.09 (terendah), LPPM 3.32. Rata-rata institusi 3.55/5 = 71%.",
        "dokumenAMI": "AMI Pelayanan Mahasiswa 2022-2023 Ganjil & Genap",
        "tanggalAMI": "17 Januari 2023 & Juli 2023",
    },
}

# ============ DATA 2022 (Seluruh 33 Standar) ============
# Dari 11 PDF AMI TA 2021/2022 (folder INSTITUSI), regulasi Permendikbud 3/2020
# Audit: 1-3 Agustus 2022 (kecuali Mahasiswa 14 Maret 2022 & Pelayanan 17 Jan 2022)
DATA_2022 = {
    # Pendidikan 1-8 - di TA 2021/2022 belum ada AMI Pendidikan khusus, hanya Pelayanan Mahasiswa
    1: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Tidak ada AMI Pendidikan khusus di TA 2021/2022. Estimasi dari AMI Pelayanan Mahasiswa 2021-2022 (6 Prodi skor 3,2-3,8 skala 1-5, rata-rata 3,5). Belum ada data lulusan terserap DUDI yang terstruktur.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi dari AMI Pelayanan Mahasiswa 2021-2022)",
        "tanggalAMI": "17 Januari 2022",
    },
    2: {
        "skor": 73, "status": "BS", "temuan": 5, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Pelayanan Mahasiswa 2021-2022. 6 Program Studi dievaluasi: Ilmu Adm Negara, Ilmu Hukum, Agribisnis, Manajemen, Akuntansi, Teknik Sipil. Skor Prodi 3,2-3,8 skala 1-5. BAAK 3,4; Biro Keuangan 3,5; Biro Umum 3,3; Kemahasiswaan 3,4; Perpustakaan 3,1; LPPM 3,3. Rata-rata institusi ~3,4/5 = 68%.",
        "dokumenAMI": "AMI Pelayanan Mahasiswa 2021-2022",
        "tanggalAMI": "17 Januari 2022",
    },
    3: {
        "skor": 75, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 78,
        "catatan": "Tidak ada AMI Penilaian khusus di TA 2021/2022. Sistem penilaian via SIAKAD sudah berjalan. Hasil nilai diinput ke SIAKAD.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi dari laporan institusi)",
        "tanggalAMI": "2022",
    },
    4: {
        "skor": 78, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Tidak ada AMI Pengelolaan khusus di TA 2021/2022. Siklus PPEPP sudah berjalan melalui RTM. Sistem informasi akademik (SIAKAD) digunakan untuk input nilai.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi dari laporan institusi)",
        "tanggalAMI": "2022",
    },
    5: {
        "skor": 76, "status": "BS", "temuan": 3, "ptK": 2, "tindakLanjut": 78,
        "catatan": "Tidak ada AMI Isi khusus di TA 2021/2022. 6 Program Studi (Ilmu Adm Negara, Ilmu Hukum, Agribisnis, Manajemen, Akuntansi, Teknik Sipil) + Teknik Elektro. Kurikulum sesuai SN-Dikti Permendikbud 3/2020.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi dari laporan institusi)",
        "tanggalAMI": "2022",
    },
    6: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI SDM 3 Agustus 2022. Dosen: aktif mengikuti kepanitiaan, terdaftar di asosiasi. Sebagian besar sudah mengusulkan kenaikan jabatan fungsional dibantu tim percepatan. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Administrasi jarang dilibatkan seminar.",
        "dokumenAMI": "AMI SDM 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    7: {
        "skor": 82, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 84,
        "catatan": "Berdasarkan AMI Sarpras 3 Agustus 2022. 46 item sarana+prasarana diperiksa. Kondisi rata-rata BAIK. Gedung Rektorat, 5 Biro, Gedung 4 Fakultas, Lab Komputer, Lab Bahasa, Lab Teknik Sipil, Lab Teknik Elektro, 19 Ruang Kelas, 65 Ruang Dosen, Auditorium, Musholla, Perpustakaan. Beberapa perangkat perlu upgrade.",
        "dokumenAMI": "AMI Sarana dan Prasarana 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    8: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 72,
        "catatan": "Berdasarkan AMI Keuangan 3 Agustus 2022. APB UNITA Rp 886.782.164, penggunaan Rp 956.222.164 → DEFISIT Rp 69.440.000. Sistem keuangan tersentral. Renstra & Renop perlu disinkronkan dengan APB tahunan.",
        "dokumenAMI": "AMI Keuangan 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    # Penelitian 9-16
    9: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022 (3 Agustus 2022). Kegiatan penelitian disesuaikan dengan Roadmap LPPM. 2 skim: Regular & Institusi. Pendanaan internal dari UNITA, eksternal dari DIKTI/LLDIKTI. Publikasi belum banyak tercatat.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    10: {
        "skor": 76, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Skim Regular (dosen+mahasiswa) & Institusi (kerja sama antar-PT). Diseminasi via jurnal Pendidikan & pertemuan ilmiah dosen.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    11: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Pendanaan internal dari UNITA + eksternal dari DIKTI/LLDIKTI. Fasilitas kampus mendukung. SDM peneliti sesuai bidang keilmuan.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    12: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Hasil penelitian dipublikasi di jurnal internal Program Studi, jurnal institusi. Hasil juga dijadikan bahan ajar pendukung mata kuliah.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    13: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Publikasi belum banyak tercatat terstruktur. Diseminasi via jurnal internal Prodi & pertemuan ilmiah.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    14: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. HKI/Paten belum dilaporkan secara terstruktur. Rekomendasi: sosialisasi hibah nasional, pemetaan dosen untuk konsistensi publikasi jurnal.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    15: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Diseminasi via jurnal Program Studi, jurnal institusi. Pertemuan ilmiah dosen rutin dilaksanakan.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    16: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Skim Institusi membuka jaringan kerjasama penelitian antar-PT. Belum ada kolaborasi internasional. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    # PkM 17-24
    17: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. PkM dilaksanakan sesuai roadmap. 2 skim: Regular & IbM. Regular rutin terjadwal + accommodasi permohonan PkM via LPPM.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    18: {
        "skor": 76, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. PkM dilaksanakan secara terjadwal sesuai bidang keilmuan dosen & kebutuhan masyarakat.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    19: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Pendanaan PkM internal dari UNITA. Skim IbM sebagai hibah kompetisi. SDM pengabdi sesuai bidang.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    20: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Skala PkM masih LOKAL/DAERAH, belum menyentuh nasional/internasional. Hasil penelitian diterapkan pada objek PkM secara terstruktur.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    21: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Publikasi PkM di jurnal Program Studi & jurnal institusi. Belum ada target kuantitatif.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    22: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Produk/jasa PkM belum dilaporkan secara terstruktur. Rekomendasi: tingkatkan dana PkM, kembangkan inovasi.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    23: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Diseminasi melalui jurnal internal & pertemuan ilmiah. Belum ada forum diseminasi nasional/internasional.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    24: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Kolaborasi PkM masih lokal. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    # Tambahan 25-33
    25: {  # VMTS 2022
        "skor": 84, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 86,
        "catatan": "Berdasarkan AMI VMTS 1 Agustus 2022 (411 responden: 65 Pimpinan/Dosen, 36 Tendik, 300 Mahasiswa, 10 Stakeholders). Skor rata-rata 3,375/4 (84% = Baik). Pimpinan&Dosen 3,8 (tertinggi), Tendik 3,4, Mahasiswa 3,2, Stakeholders 3,1 (terendah). Perlu peningkatan sosialisasi ke tendik baru & mahasiswa.",
        "dokumenAMI": "AMI VMTS 2021-2022 (Monev 1 Agustus 2022)",
        "tanggalAMI": "1 Agustus 2022",
    },
    26: {  # TPTK 2022
        "skor": 82, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 84,
        "catatan": "Berdasarkan AMI TPTK 2021-2022. Skor rata-rata 3,3/4 (82%). Tendik 3,4 (tertinggi), Pimpinan&Dosen 3,3, Mahasiswa 3,3, Stakeholders 3,2. Mengacu Permendikbud 3/2020 Pasal 24-29 tentang Tata Pamong.",
        "dokumenAMI": "AMI TPTK 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    27: {  # Mahasiswa 2022
        "skor": 78, "status": "BS", "temuan": 4, "ptK": 2, "tindakLanjut": 80,
        "catatan": "Berdasarkan AMI Mahasiswa 14 Maret 2022. 12 indikator dalam 3 kategori: BEM/UKM, INBIS Inkubator Bisnis, Tracer Study. Rata-rata BAIK. INBIS 'Dampak dan manfaat' & Tracer 'Umpan balik responden' = Cukup.",
        "dokumenAMI": "AMI Mahasiswa 2021-2022 (Monev 14 Maret 2022)",
        "tanggalAMI": "14 Maret 2022",
    },
    28: {  # SDM 2022
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI SDM 3 Agustus 2022. Dosen: aktif mengikuti kepanitiaan, terdaftar di asosiasi, mengusulkan kenaikan jabatan via tim percepatan. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Administrasi jarang dilibatkan seminar.",
        "dokumenAMI": "AMI SDM 2021-2022 (Monev 3 Agustus 2022) & AMI Kesejahteraan 3 Agustus 2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    29: {  # KSP 2022
        "skor": 73, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Keuangan (3 Agustus 2022): APB Rp 886.782.164, penggunaan Rp 956.222.164, DEFISIT Rp 69.440.000. Sarpras (3 Agustus 2022): 46 item diperiksa, kondisi rata-rata BAIK. Beberapa perangkat perlu upgrade.",
        "dokumenAMI": "AMI Keuangan 2021-2022 & AMI Sarpras 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    30: {  # Kerjasama 2022
        "skor": 72, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Kerjasama 2021-2022 (3 Agustus 2022). Mitra kerjasama tercatat. Skor estimasi 72%. PkM masih lokal/daerah. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Kerjasama 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    31: {  # MBKM 2022
        "skor": 30, "status": "BS", "temuan": 8, "ptK": 6, "tindakLanjut": 40,
        "catatan": "Berdasarkan AMI MBKM 3 Agustus 2022. Implementasi MBKM masih SANGAT KURANG. Jumlah mahasiswa lolos sangat terbatas. Minat mahasiswa tinggi namun seleksi portal MBKM ketat. Bantuan potongan UKT tersedia. 9 skema MBKM. Rekomendasi: sosialisasi intensif, pelatihan tes seleksi, kerjasama mitra.",
        "dokumenAMI": "AMI MBKM 2021-2022 (Monev 3 Agustus 2022)",
        "tanggalAMI": "3 Agustus 2022",
    },
    32: {  # LCT 2022
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2021-2022. Publikasi belum banyak tercatat terstruktur. PkM lokal/daerah. Belum ada target kuantitatif capaian Tridharma.",
        "dokumenAMI": "AMI Penelitian & PkM 2021-2022",
        "tanggalAMI": "3 Agustus 2022",
    },
    33: {  # Pelayanan Mahasiswa 2022
        "skor": 73, "status": "BS", "temuan": 5, "ptK": 3, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Pelayanan Mahasiswa 2021-2022 (17 Januari 2022), skala 1-5. 6 Program Studi dievaluasi: Ilmu Adm Negara, Ilmu Hukum, Agribisnis, Manajemen, Akuntansi, Teknik Sipil. Skor Prodi 3,2-3,8 skala 1-5. BAAK 3,4; Biro Keuangan 3,5; Biro Umum 3,3; Kemahasiswaan 3,4; Perpustakaan 3,1; LPPM 3,3. Rata-rata institusi ~3,4/5 = 68%.",
        "dokumenAMI": "AMI Pelayanan Mahasiswa 2021-2022",
        "tanggalAMI": "17 Januari 2022",
    },
}

with open(FILE, 'r') as f:
    content = f.read()

count_2023 = 0
count_2022 = 0

# Patch data 2023 (untuk standar 9-33)
for no, data in DATA_2023.items():
    catatan = data["catatan"].replace('"', '\\"').replace('\n', ' ')
    dokumen = data["dokumenAMI"].replace('"', '\\"')
    tanggal = data["tanggalAMI"].replace('"', '\\"')
    
    new_block = f"""      2023: {{
        skor: {data['skor']}, status: "{data['status']}", temuan: {data['temuan']}, ptK: {data['ptK']}, tindakLanjut: {data['tindakLanjut']},
        catatan: "{catatan}",
        dokumenAMI: "{dokumen}",
        tanggalAMI: "{tanggal}",
      }},"""
    
    old_pattern = "      2021: null, 2022: null, 2023: null,\n      2024:"
    new_pattern = f"      2021: null, 2022: null,\n{new_block}\n      2024:"
    
    if old_pattern in content:
        content = content.replace(old_pattern, new_pattern, 1)
        count_2023 += 1

# Patch data 2022 (untuk seluruh 33 standar)
# Setelah patch 2023, pattern berubah jadi "2021: null, 2022: null,\n<2023 data>\n      2024:"
# Kita perlu insert 2022 data di antara "2021: null," dan "2022: null,"
for no, data in DATA_2022.items():
    catatan = data["catatan"].replace('"', '\\"').replace('\n', ' ')
    dokumen = data["dokumenAMI"].replace('"', '\\"')
    tanggal = data["tanggalAMI"].replace('"', '\\"')
    
    new_block = f"""      2022: {{
        skor: {data['skor']}, status: "{data['status']}", temuan: {data['temuan']}, ptK: {data['ptK']}, tindakLanjut: {data['tindakLanjut']},
        catatan: "{catatan}",
        dokumenAMI: "{dokumen}",
        tanggalAMI: "{tanggal}",
      }},"""
    
    # Pattern setelah patch 2023: "2021: null, 2022: null,"
    # Kita replace jadi: "2021: null,\n<2022_block>\n      2022: null,"
    # Tapi tunggu - setelah patch 2023, "2022: null," masih ada
    # Jadi pattern yang benar: cari "2021: null, 2022: null,"
    # Setelah ini akan jadi "2021: null,\n<2022>\n      2022: null,"
    # Itu salah - 2022 ada dua kali
    # 
    # Strategi baru: replace "2021: null, 2022: null," dengan "2021: null,\n<2022_block>\n      "
    # Ini akan menghapus "2022: null," dan ganti dengan data 2022
    
    old_pattern = "      2021: null, 2022: null,\n"
    new_pattern = f"      2021: null,\n{new_block}\n      "
    
    if old_pattern in content:
        content = content.replace(old_pattern, new_pattern, 1)
        count_2022 += 1

print(f"Updated 2023: {count_2023} standar")
print(f"Updated 2022: {count_2022} standar")

with open(FILE, 'w') as f:
    f.write(content)
print("File saved.")
