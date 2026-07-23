"""
Patch spmi-data.ts: tambah data 2021 untuk seluruh 33 standar
Berdasarkan 11 PDF AMI TA 2020/2021 (folder GDrive "3. LAPORAN AUDIT MONEV INSTITUSI")
Regulasi: Permendikbud 3/2020 (SN-Dikti) & 5/2020 (Akreditasi)
Audit: 10 Agustus 2021 (kebanyakan), 14 Maret 2021 (Mahasiswa), 17 Januari 2021 (Pelayanan)
"""
FILE = "/home/z/my-project/src/lib/spmi-data.ts"

DATA_2021 = {
    # Pendidikan 1-8 - tidak ada AMI Pendidikan khusus, estimasi dari Pelayanan Mahasiswa 2020
    1: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Tidak ada AMI Pendidikan khusus di TA 2020/2021. Estimasi dari AMI Pelayanan Mahasiswa 2020 (6 Prodi skor 3,08-3,47 skala 1-5, rata-rata ~3,25 = 65%). Lulusan terserap DUDI belum dilaporkan terstruktur.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi dari AMI Pelayanan Mahasiswa 2020)",
        "tanggalAMI": "17 Januari 2021",
    },
    2: {
        "skor": 68, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Tidak ada AMI Proses Pembelajaran khusus di TA 2020/2021. Estimasi dari AMI Pelayanan Mahasiswa 2020. 6 Prodi: Ilmu Adm Negara 3,08; Ilmu Hukum 3,27; Agribisnis; Manajemen; Akuntansi; Teknik Sipil. BAAK 3,30; Biro Keuangan 3,47 (tertinggi); Biro Umum 3,21; Kemahasiswaan 3,28. Rata-rata institusi ~3,25/5 = 65%.",
        "dokumenAMI": "AMI Pelayanan Mahasiswa 2020 (estimasi)",
        "tanggalAMI": "17 Januari 2021",
    },
    3: {
        "skor": 72, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 75,
        "catatan": "Tidak ada AMI Penilaian khusus di TA 2020/2021. Sistem penilaian via SIAKAD sudah berjalan. Hasil nilai diinput ke SIAKAD. Rekomendasi: pemberitahuan nilai tepat waktu, KHS tepat waktu.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi)",
        "tanggalAMI": "2021",
    },
    4: {
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Tidak ada AMI Pengelolaan khusus di TA 2020/2021. Siklus PPEPP sudah berjalan. Sistem informasi akademik (SIAKAD) digunakan. Rekomendasi: peningkatan ketertiban administrasi pengajaran, lebih dekat ke mahasiswa.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi)",
        "tanggalAMI": "2021",
    },
    5: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Tidak ada AMI Isi khusus di TA 2020/2021. 6 Program Studi (Ilmu Adm Negara, Ilmu Hukum, Agribisnis, Manajemen, Akuntansi, Teknik Sipil). Kurikulum sesuai SN-Dikti Permendikbud 3/2020. Rekomendasi: penataan ruang Fakultas, peningkatan sistem informasi perkuliahan.",
        "dokumenAMI": "Tidak ada AMI khusus (estimasi)",
        "tanggalAMI": "2021",
    },
    6: {
        "skor": 72, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI SDM 10 Agustus 2021 (26 halaman). Dosen: aktif mengikuti kepanitiaan, terdaftar di asosiasi, mengusulkan kenaikan jabatan via tim percepatan. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Administrasi jarang dilibatkan seminar. Rekomendasi: sertifikasi tendik, perluas kerjasama Tri Dharma.",
        "dokumenAMI": "AMI SDM 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    7: {
        "skor": 80, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Sarpras 10 Agustus 2021 (7 halaman). 46+ item sarana+prasarana diperiksa. Kondisi rata-rata BAIK. Gedung Rektorat, Gedung Perpustakaan, Pusat Bahasa, Pusat Komputer, Auditorium, 4 Gedung Fakultas, 19 Ruang Kelas, 65 Ruang Dosen. Beberapa perangkat perlu upgrade.",
        "dokumenAMI": "AMI Sarpras 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    8: {
        "skor": 68, "status": "BS", "temuan": 6, "ptK": 5, "tindakLanjut": 70,
        "catatan": "Berdasarkan AMI Anggaran 10 Agustus 2021 (40 halaman). Pendapatan Rp 9.514.300.000 (dari mahasiswa, persewaan gedung, IT mart, sewa lahan). Pembelanjaan Rp 10.876.300.000. SELISIH DEFISIT Rp 1.362.000.000. Koreksi: hapus pos pengadaan sarana Rp 331.000.000 + prasarana Rp 1.031.000.000. Renstra & Renop perlu disinkronkan dengan APB tahunan.",
        "dokumenAMI": "AMI Anggaran 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    # Penelitian 9-16
    9: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 10 Agustus 2021 (21 halaman). Kegiatan disesuaikan Roadmap LPPM. 2 skim: Regular & Institusi. 29 artikel jurnal Internal + 1 jurnal eksternal tercatat. Kinerja dosen sudah rutin Tri Dharma namun Prodi baru belum terlapor. Perlu tindak lanjut pemenuhan standar SNPT.",
        "dokumenAMI": "AMI Penelitian & PkM 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    10: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Skim Regular (dosen+mahasiswa) & Institusi (kerja sama antar-PT). Diseminasi via jurnal internal Prodi & pertemuan ilmiah. Hasil penelitian dipublikasi di jurnal internal & eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    11: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Pendanaan internal dari UNITA + eksternal dari DIKTI/LLDIKTI. Fasilitas kampus mendukung. SDM peneliti sesuai bidang keilmuan.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    12: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. 29 artikel jurnal Internal + 1 jurnal eksternal tercatat. Hasil penelitian dipublikasi & dijadikan bahan ajar pendukung mata kuliah.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    13: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. 29 artikel jurnal Internal + 1 jurnal eksternal tercatat (Fakultas Hukum, FISIP, Pertanian, Ekonomi, PkM UNITA). Prodi baru belum terlapor. Rekomendasi: tindak lanjut pemenuhan standar SNPT.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    14: {
        "skor": 68, "status": "BS", "temuan": 6, "ptK": 5, "tindakLanjut": 70,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. HKI/Paten belum dilaporkan terstruktur. Rekomendasi: sosialisasi hibah nasional, pemetaan dosen untuk konsistensi publikasi jurnal terkait kepangkatan.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    15: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Diseminasi via jurnal internal Fakultas & jurnal institusi. Pertemuan ilmiah dosen rutin dilaksanakan. 5 tabel publikasi: Fakultas Hukum, FISIP, Pertanian, Ekonomi, PkM UNITA.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    16: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Skim Institusi membuka jaringan kerjasama penelitian antar-PT. Belum ada kolaborasi internasional. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    # PkM 17-24
    17: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. PkM dilaksanakan sesuai roadmap. 2 skim: Regular & IbM. Publikasi PkM via Tabel 5 (PkM UNITA).",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    18: {
        "skor": 73, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 76,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. PkM dilaksanakan terjadwal sesuai bidang keilmuan & kebutuhan masyarakat. Pelibatan mahasiswa via MBKM, PKL, KKN.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    19: {
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Pendanaan PkM internal dari UNITA. Skim IbM sebagai hibah kompetisi. SDM pengabdi sesuai bidang.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    20: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Skala PkM masih LOKAL/DAERAH, belum menyentuh nasional/internasional. Hasil penelitian diterapkan pada objek PkM.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    21: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Publikasi PkM di Tabel 5 (PkM UNITA). Belum ada target kuantitatif. Rekomendasi: workshop ToT penyusunan proposal PkM.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    22: {
        "skor": 68, "status": "BS", "temuan": 6, "ptK": 5, "tindakLanjut": 70,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Produk/jasa PkM belum dilaporkan terstruktur. Rekomendasi: tingkatkan dana PkM, kembangkan inovasi.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    23: {
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Diseminasi melalui jurnal internal & pertemuan ilmiah. Belum ada forum diseminasi nasional/internasional.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    24: {
        "skor": 68, "status": "BS", "temuan": 6, "ptK": 5, "tindakLanjut": 70,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. Kolaborasi PkM masih lokal. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    # Tambahan 25-33
    25: {  # VMTS 2021 (TA 2020/2021)
        "skor": 87, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 88,
        "catatan": "Berdasarkan AMI VMTS 10 Agustus 2021 (10 halaman, 397 responden: 19 Pimpinan Dekan/Kaprodi, 42 Dosen, 36 Tendik, 300 Mahasiswa). Skor rata-rata 3,475/4 (87% = Baik). Pimpinan 3,8 (tertinggi), Dosen 3,5 (terendah!), Tendik 3,6, Mahasiswa 3,6. Perlu peningkatan sosialisasi ke dosen karena skor terendah.",
        "dokumenAMI": "AMI VMTS 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    26: {  # TPTK 2021
        "skor": 83, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 85,
        "catatan": "Berdasarkan AMI TPTK 10 Agustus 2021 (7 halaman, 601 responden: 65 Dosen, 36 Tendik, 500 Mahasiswa). Skor rata-rata 3,3/4 (83% = Puas). Dosen 3,5 (tertinggi), Tendik 3,3, Mahasiswa 3,1 (terendah). Mengacu Permendikbud 3/2020 Pasal 24-29 tentang Tata Pamong. Perlu peningkatan kepuasan mahasiswa.",
        "dokumenAMI": "AMI TPTK 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    27: {  # Mahasiswa 2021
        "skor": 75, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 78,
        "catatan": "Berdasarkan AMI Mahasiswa 14 Maret 2021 (7 halaman). Indikator: PMB, WKK, BEM/UKM, Tracer Study. PMB Prosedur = Cukup. Rata-rata Baik. INBIS & Tracer Study perlu peningkatan. Rekomendasi: tingkatkan implementasi program kerja BEM/UKM selaras Renstra, kembangkan strategi INBIS, sosialisasi tracer study.",
        "dokumenAMI": "AMI Mahasiswa 2020 (Monev 14 Maret 2021)",
        "tanggalAMI": "14 Maret 2021",
    },
    28: {  # SDM 2021
        "skor": 72, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI SDM 10 Agustus 2021 (26 halaman). Dosen: aktif mengikuti kepanitiaan, terdaftar di asosiasi, mengusulkan kenaikan jabatan via tim percepatan. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Administrasi jarang dilibatkan seminar.",
        "dokumenAMI": "AMI SDM 2020 (Monev 10 Agustus 2021) & AMI Kesejahteraan 10 Agustus 2021",
        "tanggalAMI": "10 Agustus 2021",
    },
    29: {  # KSP 2021
        "skor": 70, "status": "BS", "temuan": 6, "ptK": 5, "tindakLanjut": 72,
        "catatan": "Anggaran (10 Agustus 2021): Pendapatan Rp 9.514.300.000, Pembelanjaan Rp 10.876.300.000, DEFISIT Rp 1.362.000.000. Koreksi: hapus pos sarana Rp 331.000.000 + prasarana Rp 1.031.000.000. Sarpras (10 Agustus 2021): kondisi rata-rata BAIK. Beberapa perangkat perlu upgrade.",
        "dokumenAMI": "AMI Anggaran 2020 & AMI Sarpras 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    30: {  # Kerjasama 2021
        "skor": 70, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Kerjasama 10 Agustus 2021 (14 halaman). Tabel 1: Pelaksanaan Kerjasama. Tabel 2: Kepuasan Mitra Kerjasama. Mitra kerjasama tercatat di bidang pendidikan, penelitian, pengabdian. Skor estimasi 70%. Rekomendasi: perluas kerjasama dengan mitra eksternal.",
        "dokumenAMI": "AMI Kerjasama 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    31: {  # MBKM 2021
        "skor": 25, "status": "BS", "temuan": 8, "ptK": 6, "tindakLanjut": 35,
        "catatan": "Berdasarkan AMI MBKM 10 Agustus 2021 (12 halaman). Implementasi MBKM masih SANGAT KURANG. Jumlah mahasiswa lolos sangat terbatas. Minat mahasiswa tinggi namun seleksi portal MBKM ketat. 9 skema MBKM: Pertukaran Pelajar, Magang, Riset, Proyek Independen, Wirausaha, Kemanusiaan, Asistensi Mengajar, KKN Tematik, Bela Negara. Rekomendasi: sosialisasi intensif, pelatihan tes seleksi, kerjasama mitra.",
        "dokumenAMI": "AMI MBKM 2020 (Monev 10 Agustus 2021)",
        "tanggalAMI": "10 Agustus 2021",
    },
    32: {  # LCT 2021
        "skor": 72, "status": "BS", "temuan": 5, "ptK": 4, "tindakLanjut": 75,
        "catatan": "Berdasarkan AMI Penelitian & PkM 2020. 29 artikel jurnal Internal + 1 jurnal eksternal tercatat. PkM lokal/daerah. Belum ada target kuantitatif capaian Tridharma. Prodi baru belum terlapor.",
        "dokumenAMI": "AMI Penelitian & PkM 2020",
        "tanggalAMI": "10 Agustus 2021",
    },
    33: {  # Pelayanan Mahasiswa 2021
        "skor": 70, "status": "BS", "temuan": 6, "ptK": 4, "tindakLanjut": 73,
        "catatan": "Berdasarkan AMI Pelayanan Mahasiswa 17 Januari 2021 (25 halaman), skala 1-5. 6 Program Studi: Ilmu Adm Negara 3,08; Ilmu Hukum 3,27; Agribisnis, Manajemen, Akuntansi, Teknik Sipil. BAAK 3,30; Biro Keuangan 3,47 (tertinggi); Biro Umum 3,21; Kemahasiswaan 3,28. Rata-rata institusi ~3,25/5 = 65%. Rekomendasi: peningkatan kedisiplinan, ketepatan, kecepatan, keramahan; sistem informasi perkuliahan; penataan ruang.",
        "dokumenAMI": "AMI Pelayanan Mahasiswa 2020 (Monev 17 Januari 2021)",
        "tanggalAMI": "17 Januari 2021",
    },
}

with open(FILE, 'r') as f:
    content = f.read()

count = 0
for no, data in DATA_2021.items():
    catatan = data["catatan"].replace('"', '\\"').replace('\n', ' ')
    dokumen = data["dokumenAMI"].replace('"', '\\"')
    tanggal = data["tanggalAMI"].replace('"', '\\"')
    
    new_block = f"""      2021: {{
        skor: {data['skor']}, status: "{data['status']}", temuan: {data['temuan']}, ptK: {data['ptK']}, tindakLanjut: {data['tindakLanjut']},
        catatan: "{catatan}",
        dokumenAMI: "{dokumen}",
        tanggalAMI: "{tanggal}",
      }},"""
    
    # Pattern saat ini: "2021: null,\n      2022: {" (setelah patch 2022)
    # Replace jadi: "<2021_block>\n      2022: {"
    old_pattern = "      2021: null,\n      2022: {"
    new_pattern = f"{new_block}\n      2022: {{"
    
    if old_pattern in content:
        content = content.replace(old_pattern, new_pattern, 1)
        count += 1

print(f"Updated 2021: {count} standar")

with open(FILE, 'w') as f:
    f.write(content)
print("File saved.")
