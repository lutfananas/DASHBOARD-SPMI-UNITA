"""
Patch spmi-data.ts: update 8 Standar Pendidikan (no 1-8) untuk tahun 2023
dengan data riil dari AMI Proses Pembelajaran 2022 Ganjil & Genap.
"""
FILE = "/home/z/my-project/src/lib/spmi-data.ts"

# Data AMI Proses Pembelajaran 2022:
# Ganjil (21 Feb 2023): 7 Prodi skor 3.2-3.6, avg 3.44/4 = 86%
# Genap (14 Agustus 2023): 7 Prodi skor 3.3-3.7, avg 3.51/4 = 88%
# Rata-rata TA 2022/2023: ~87% = MS

DATA_PENDIDIKAN_2023 = {
    1: {  # SKL - Kompetensi Lulusan
        "skor": 85, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 86,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 Ganjil & Genap (Bab III poin 3 - Standar Kompetensi Lulusan). Prodi review kebutuhan dunia kerja up-to-date, adaptif via Asosiasi/Ikatan Alumni. Skor institusi 3,475/4 (87%). Saran: benchmarking kurikulum rutin.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap (21 Feb 2023 & 14 Agustus 2023)",
        "tanggalAMI": "21 Februari 2023 & 14 Agustus 2023",
    },
    2: {  # SPB - Proses Pembelajaran
        "skor": 87, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 88,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 Ganjil & Genap, skala Likert 1-4. Ganjil: 7 Prodi skor range 3,20-3,60, avg 3,44 (Agribisnis 3,45; Adm Publik 3,56; Akuntansi 3,24; Hukum 3,60; Manajemen 3,20; Teknik Sipil 3,40; Teknik Elektro 3,60). Genap: range 3,30-3,70, avg 3,51 (Agribisnis 3,60; Adm Publik 3,70; Akuntansi 3,40; Hukum 3,30; Manajemen 3,50; Teknik Sipil 3,70; Teknik Elektro 3,40). Rata-rata institusi TA 2022/2023: 3,475/4 (87%) = Baik. Saran: dosen lebih kreatif/inovatif, metode interaktif bervariasi, tambah referensi.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        "tanggalAMI": "21 Februari 2023 & 14 Agustus 2023",
    },
    3: {  # SPN - Penilaian
        "skor": 84, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 85,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 8 - Standar Penilaian Hasil Pendidikan). Hasil penilaian ditampilkan di mading & diinput ke SIAKAD. Skor estimasi 84%. Saran: transparansi nilai ditingkatkan.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        "tanggalAMI": "21 Februari 2023 & 14 Agustus 2023",
    },
    4: {  # SPP - Pengelolaan
        "skor": 83, "status": "MS", "temuan": 3, "ptK": 2, "tindakLanjut": 84,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 6 - Standar Pengelolaan). Penyesuaian kalender akademik, dosen didorong studi lanjut, rekonstruksi kurikulum berkala. Skor estimasi 83%.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        "tanggalAMI": "21 Februari 2023 & 14 Agustus 2023",
    },
    5: {  # SIS - Isi
        "skor": 85, "status": "MS", "temuan": 2, "ptK": 1, "tindakLanjut": 86,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 1 - Standar Isi). Kurikulum disusun matang dengan memperhatikan faktor pasar kerja. Perlu updating rutin & benchmarking. 7 Prodi: Agribisnis, Adm Publik, Akuntansi, Hukum, Manajemen, Teknik Sipil, Teknik Elektro.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap",
        "tanggalAMI": "21 Februari 2023 & 14 Agustus 2023",
    },
    6: {  # SDT - Dosen & Tendik
        "skor": 83, "status": "MS", "temuan": 4, "ptK": 3, "tindakLanjut": 85,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 4 - Standar Tenaga Pendidik) & AMI SDM 15 April 2023. Kualitas dosen baik, perlu pengembangan: kreativitas/inovasi mengajar, disiplin waktu, perbanyak latihan praktikum. Tambah teknisi lab, kembangkan tenaga pendukung. 9 dosen studi lanjut. Tendik: Pustakawan S1 sesuai bidang, Laboran sesuai keahlian (belum semua bersertifikasi), IT aktif seminar, Adm jarang dilibatkan seminar.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI SDM 2022-2023",
        "tanggalAMI": "21 Februari 2023, 14 Agustus 2023 & 15 April 2023",
    },
    7: {  # SSP - Sarana & Prasarana
        "skor": 80, "status": "BS", "temuan": 5, "ptK": 3, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 5 - Standar Sarana & Prasarana) & AMI Sarpras 20 Maret 2023. Fasilitas perlu ditingkatkan: perpustakaan (referensi buku/jurnal/tesis), laboratorium, akses komputer & Wi-Fi, fasilitas kesehatan & keamanan. 46 item inventaris: rata-rata BAIK. Perangkat perlu upgrade: Laptop 15, Komputer 78, Printer 25, LCD 25, Scanner 8, Stand LCD 22, Diesel 1, Mobil 2, Bus 1. Rekomendasi: tambah Lab Teknik Elektro.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI Sarpras 2022-2023",
        "tanggalAMI": "21 Februari 2023, 14 Agustus 2023 & 20 Maret 2023",
    },
    8: {  # SPM - Pembiayaan
        "skor": 80, "status": "BS", "temuan": 4, "ptK": 3, "tindakLanjut": 82,
        "catatan": "Berdasarkan AMI Proses Pembelajaran 2022 (Bab III poin 7 - Standar Pembiayaan) & AMI Keuangan 3 Mei 2023. Biaya pendidikan sesuai tuntutan mahasiswa & standar Pendidikan Tinggi. APB UNITA Rp 10.319.370.000, penggunaan Rp 10.941.870.000 → DEFISIT Rp 622.500. Sistem keuangan tersentral. Rekomendasi: sinkronisasi Renstra & Renop dengan APB tahunan.",
        "dokumenAMI": "AMI Proses Pembelajaran 2022 Ganjil & Genap & AMI Keuangan 2022-2023",
        "tanggalAMI": "21 Februari 2023, 14 Agustus 2023 & 3 Mei 2023",
    },
}

with open(FILE, 'r') as f:
    content = f.read()

# Patch each standar
count = 0
for no, data in DATA_PENDIDIKAN_2023.items():
    catatan = data["catatan"].replace('"', '\\"').replace('\n', ' ')
    dokumen = data["dokumenAMI"].replace('"', '\\"')
    tanggal = data["tanggalAMI"].replace('"', '\\"')
    
    new_block = f"""      2023: {{
        skor: {data['skor']}, status: "{data['status']}", temuan: {data['temuan']}, ptK: {data['ptK']}, tindakLanjut: {data['tindakLanjut']},
        catatan: "{catatan}",
        dokumenAMI: "{dokumen}",
        tanggalAMI: "{tanggal}",
      }},"""
    
    # Pattern: cari "2021: null, 2022: null, 2023: null," DAN diikuti 2024
    old_pattern = "      2021: null, 2022: null, 2023: null,\n      2024:"
    new_pattern = f"      2021: null, 2022: null,\n{new_block}\n      2024:"
    
    if old_pattern in content:
        content = content.replace(old_pattern, new_pattern, 1)
        count += 1
        print(f"  ✓ Standar {no}: updated")
    else:
        print(f"  ✗ Standar {no}: pattern not found")

print(f"\nTotal updated: {count}")

with open(FILE, 'w') as f:
    f.write(content)
print("File saved.")
