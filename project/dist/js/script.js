// Data Array untuk Select Options
const golonganDarah = [
    { id: null, nama: "Tidak Tahu" },
    { id: 1, nama: "A" },
    { id: 2, nama: "B" },
    { id: 3, nama: "AB" },
    { id: 4, nama: "O" }
];

const agama = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Islam" },
    { id: 2, nama: "Kristen" },
    { id: 3, nama: "Katolik" },
    { id: 4, nama: "Hindu" },
    { id: 5, nama: "Budha" },
    { id: 6, nama: "Khonghucu" },
    { id: 7, nama: "Lainnya" }
];

const statusPernikahan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Belum Kawin" },
    { id: 2, nama: "Kawin Belum Tercatat" },
    { id: 3, nama: "Kawin Tercatat" },
    { id: 4, nama: "Cerai Hidup" },
    { id: 5, nama: "Cerai Mati" }
];

const pekerjaan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Belum/ Tidak Bekerja" },
    { id: 2, nama: "Mengurus Rumah Tangga" },
    { id: 3, nama: "Pelajar/ Mahasiswa" },
    { id: 4, nama: "Pensiunan" },
    { id: 5, nama: "Pegawai Negeri Sipil" },
    { id: 6, nama: "Tentara Nasional Indonesia" },
    { id: 7, nama: "Kepolisian RI" },
    { id: 8, nama: "Perdagangan" },
    { id: 9, nama: "Petani/ Pekebun" },
    { id: 10, nama: "Peternak" },
    { id: 11, nama: "Nelayan/ Perikanan" },
    { id: 12, nama: "Industri" },
    { id: 13, nama: "Konstruksi" },
    { id: 14, nama: "Transportasi" },
    { id: 15, nama: "Karyawan Swasta" },
    { id: 16, nama: "Karyawan BUMN" },
    { id: 17, nama: "Karyawan BUMD" },
    { id: 18, nama: "Karyawan Honorer" },
    { id: 19, nama: "Buruh Harian Lepas" },
    { id: 20, nama: "Buruh Tani/ Perkebunan" },
    { id: 21, nama: "Buruh Nelayan/ Perikanan" },
    { id: 22, nama: "Buruh Peternakan" },
    { id: 23, nama: "Pembantu Rumah Tangga" },
    { id: 24, nama: "Tukang Cukur" },
    { id: 25, nama: "Tukang Listrik" },
    { id: 26, nama: "Tukang Batu" },
    { id: 27, nama: "Tukang Kayu" },
    { id: 28, nama: "Tukang Sol Sepatu" },
    { id: 29, nama: "Tukang Las/ Pandai Besi" },
    { id: 30, nama: "Tukang Jahit" },
    { id: 31, nama: "Tukang Gigi" },
    { id: 32, nama: "Penata Rias" },
    { id: 33, nama: "Penata Busana" },
    { id: 34, nama: "Penata Rambut" },
    { id: 35, nama: "Mekanik" },
    { id: 36, nama: "Seniman" },
    { id: 37, nama: "Tabib" },
    { id: 38, nama: "Paraji" },
    { id: 39, nama: "Perancang Busana" },
    { id: 40, nama: "Penterjemah" },
    { id: 41, nama: "Imam Masjid" },
    { id: 42, nama: "Pendeta" },
    { id: 43, nama: "Pastor" },
    { id: 44, nama: "Wartawan" },
    { id: 45, nama: "Ustadz/ Mubaligh" },
    { id: 46, nama: "Juru Masak" },
    { id: 47, nama: "Promotor Acara" },
    { id: 48, nama: "Anggota DPR-RI" },
    { id: 49, nama: "Anggota DPD" },
    { id: 50, nama: "Anggota BPK" },
    { id: 51, nama: "Presiden" },
    { id: 52, nama: "Wakil Presiden" },
    { id: 53, nama: "Anggota Mahkamah Konstitusi" },
    { id: 54, nama: "Anggota Kabinet/ Kementerian" },
    { id: 55, nama: "Duta Besar" },
    { id: 56, nama: "Gubernur" },
    { id: 57, nama: "Wakil Gubernur" },
    { id: 58, nama: "Bupati" },
    { id: 59, nama: "Wakil Bupati" },
    { id: 60, nama: "Walikota" },
    { id: 61, nama: "Wakil Walikota" },
    { id: 62, nama: "Anggota DPRD Provinsi" },
    { id: 63, nama: "Anggota DPRD Kabupaten/ Kota" },
    { id: 64, nama: "Dosen" },
    { id: 65, nama: "Guru" },
    { id: 66, nama: "Pilot" },
    { id: 67, nama: "Pengacara" },
    { id: 68, nama: "Notaris" },
    { id: 69, nama: "Arsitek" },
    { id: 70, nama: "Akuntan" },
    { id: 71, nama: "Konsultan" },
    { id: 72, nama: "Dokter" },
    { id: 73, nama: "Bidan" },
    { id: 74, nama: "Perawat" },
    { id: 75, nama: "Apoteker" },
    { id: 76, nama: "Psikiater/ Psikolog" },
    { id: 77, nama: "Penyiar Televisi" },
    { id: 78, nama: "Penyiar Radio" },
    { id: 79, nama: "Pelaut" },
    { id: 80, nama: "Peneliti" },
    { id: 81, nama: "Sopir" },
    { id: 82, nama: "Pialang" },
    { id: 83, nama: "Paranormal" },
    { id: 84, nama: "Pedagang" },
    { id: 85, nama: "Perangkat Desa" },
    { id: 86, nama: "Kepala Desa" },
    { id: 87, nama: "Biarawati" },
    { id: 88, nama: "Wiraswasta" }
];

const provinsi = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "DKI Jakarta" },
    { id: 2, nama: "Jawa Barat" },
    { id: 3, nama: "Jawa Timur" }
];

const kota = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, provinceId: 1, nama: "Kota Jakarta" },
    { id: 2, provinceId: 1, nama: "Kota Surabaya" },
    { id: 3, provinceId: 1, nama: "Kota Bandung" },
    { id: 4, provinceId: 2, nama: "Kota Bandung" },
    { id: 5, provinceId: 2, nama: "Kota Bogor" },
    { id: 6, provinceId: 3, nama: "Kota Malang" }
];

const kecamatan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, provinceId: 1, cityId: 1, nama: "Kecamatan 1" },
    { id: 2, provinceId: 1, cityId: 1, nama: "Kecamatan 2" },
    { id: 3, provinceId: 1, cityId: 2, nama: "Kecamatan 3" },
    { id: 4, provinceId: 2, cityId: 4, nama: "Kecamatan 4" },
    { id: 5, provinceId: 2, cityId: 4, nama: "Kecamatan 5" },
    { id: 6, provinceId: 3, cityId: 6, nama: "Kecamatan 6" }
];

const kelurahan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, provinceId: 1, cityId: 1, districtId: 1, nama: "Kelurahan A" },
    { id: 2, provinceId: 1, cityId: 1, districtId: 1, nama: "Kelurahan B" },
    { id: 3, provinceId: 1, cityId: 2, districtId: 3, nama: "Kelurahan C" },
    { id: 4, provinceId: 2, cityId: 4, districtId: 4, nama: "Kelurahan D" },
    { id: 5, provinceId: 2, cityId: 5, districtId: 5, nama: "Kelurahan E" },
    { id: 6, provinceId: 3, cityId: 6, districtId: 6, nama: "Kelurahan F" }
];


const kewarganegaraan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Warga Negara Indonesia" },
    { id: 2, nama: "Warga Negara Asing" },
];

const hubunganKeluarga = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Kepala Keluarga" },
    { id: 2, nama: "Suami" },
    { id: 3, nama: "Istri" },
    { id: 4, nama: "Anak" },
    { id: 5, nama: "Menantu" },
    { id: 6, nama: "Orang Tua" },
    { id: 7, nama: "Mertua" },
    { id: 8, nama: "Pembantu" },
    { id: 9, nama: "Famili Lain" },
    { id: 10, nama: "Lainnya" }
];


const pendidikan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Tidak / Belum Sekolah" },
    { id: 2, nama: "Belum Tamat SD / Sederajat" },
    { id: 3, nama: "Tamat SD / Sederajat" },
    { id: 4, nama: "SLTP / Sederajat" },
    { id: 5, nama: "SLTA / Sederajat" },
    { id: 6, nama: "Diploma I / II" },
    { id: 7, nama: "Akademi / Diploma III / S. Muda" },
    { id: 8, nama: "Diploma IV / Strata I" },
    { id: 9, nama: "Strata II" },
    { id: 10, nama: "Strata III" }
];
const berkebutuhanKhusus = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Tidak" },
    { id: 2, nama: "Netra (A)" },
    { id: 3, nama: "Rungu (B)" },
    { id: 4, nama: "Grahita ringan (C)" },
    { id: 5, nama: "Grahita Sedang (C1)" },
    { id: 6, nama: "Daksa Ringan (D)" },
    { id: 7, nama: "Daksa Sedang (D1)" },
    { id: 8, nama: "Laras (E)" },
    { id: 9, nama: "Wicara (F)" },
    { id: 10, nama: "Tuna ganda (G)" },
    { id: 11, nama: "Hiper aktif (H)" },
    { id: 12, nama: "Cerdas Istimewa (I)" },
    { id: 13, nama: "Bakat Istimewa (J)" },
    { id: 14, nama: "Kesulitan Belajar (K)" },
    { id: 15, nama: "Narkoba (N)" },
    { id: 16, nama: "Indigo (O)" },
    { id: 17, nama: "Down Sindrome (P)" },
    { id: 18, nama: "Autis (Q)" }
];

const tempatTinggal = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Bersama orang tua" },
    { id: 2, nama: "Wali" },
    { id: 3, nama: "Kos" },
    { id: 4, nama: "Asrama" },
    { id: 5, nama: "Panti Asuhan" },
    { id: 9, nama: "Lainnya" }
];

const modaTransportasi = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Jalan kaki" },
    { id: 2, nama: "Kendaraan pribadi" },
    { id: 3, nama: "Kendaraan Umum/angkot/Pete-pete" },
    { id: 4, nama: "Jemputan Sekolah" },
    { id: 5, nama: "Kereta Api" },
    { id: 6, nama: "Ojek" }
];

const alasanLayakPIP = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Pemegang PKH/KPS/KIP" },
    { id: 2, nama: "Penerima BSM 2014" },
    { id: 3, nama: "Yatim Piatu/Panti Asuhan/Panti Sosial" },
    { id: 4, nama: "Dampak Bencana Alam" },
    { id: 5, nama: "Pernah Drop OUT" },
    { id: 6, nama: "Siswa Miskin/Rentan Miskin" },
    { id: 7, nama: "Daerah Konflik" },
    { id: 8, nama: "Keluarga Terpidana" },
    { id: 9, nama: "Kelainan Fisik" }
];

const penghasilanBulanan = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Kurang dari 500,000" },
    { id: 2, nama: "500.000 - 999.999" },
    { id: 3, nama: "1 juta - 1.999.999" },
    { id: 4, nama: "2 juta - 4.999.999" },
    { id: 5, nama: "5 juta - 20 juta" },
    { id: 6, nama: "Lebih dari 20 juta" }
];

const jarakTempatTinggalKeSekolah = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Kurang dari 1 km" },
    { id: 2, nama: "Lebih dari 1 km" }
];

const jenisPrestasi = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Sains" },
    { id: 2, nama: "Seni" },
    { id: 3, nama: "Olahraga" },
    { id: 4, nama: "Lain-lain" }
];

const tingkatPrestasi = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Sekolah" },
    { id: 2, nama: "Kecamatan" },
    { id: 3, nama: "Kabupaten" },
    { id: 4, nama: "Provinsi" },
    { id: 5, nama: "Nasional" },
    { id: 6, nama: "Internasional" }
];

const jenisBeasiswa = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Anak berprestasi" },
    { id: 2, nama: "Anak Miskin" },
    { id: 3, nama: "Pendidikan" },
    { id: 4, nama: "Unggulan" },
    { id: 99, nama: "Lain-lain" }
];

const jenisPendaftaran = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Siswa Baru" },
    { id: 2, nama: "Pindahan" },
    { id: 3, nama: "Kembali Bersekolah" }
];

const keluarKarena = [
    { id: null, nama: "Tidak tahu" },
    { id: 1, nama: "Lulus" },
    { id: 2, nama: "Mutasi" },
    { id: 3, nama: "Dikeluarkan" },
    { id: 4, nama: "Mengundurkan Diri" },
    { id: 5, nama: "Putus Sekolah" },
    { id: 6, nama: "Wafat" },
    { id: 7, nama: "Hilang" },
    { id: 8, nama: "Lainnya" }
];


// Teks default untuk setiap dropdown
const defaultTexts = {
    golongan_darah: "Pilih Golongan Darah",
    agama: "Pilih Agama",
    status_pernikahan: "Pilih Status Pernikahan",
    pekerjaan: "Pilih Pekerjaan",
    kelurahan: "Pilih Kelurahan",
    kecamatan: "Pilih Kecamatan",
    kota: "Pilih Kota",
    provinsi: "Pilih Provinsi",
    kewarganegaraan: "Pilih Kewarganegaraan",
    hubungan_keluarga: "Pilih Satatus Hubungan dalam Keluarga",
    pendidikan: "Pilih Pendidikan",

};

const mataPelajaran = [
    { id: 1, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Pendidikan Agama" },
    { id: 2, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Pendidikan Pancasila dan Kewarganegaraan (PPKn)" },
    { id: 3, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Bahasa Indonesia" },
    { id: 4, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Matematika" },
    { id: 5, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)" },
    { id: 6, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Seni Budaya" },
    { id: 7, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Ilmu Pengetahuan Alam (IPA)" },
    { id: 8, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Ilmu Pengetahuan Sosial (IPS)" },
    { id: 9, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Muatan lokal" },
    { id: 10, jenis: "SD", tingkatan: "Sekolah Dasar", nama: "Bahasa Inggris (opsional)" },
    { id: 1, jenis: "SMP Umum", tingkatan: "SMP", nama: "Pendidikan Agama dan Budi Pekerti" },
    { id: 2, jenis: "SMP Umum", tingkatan: "SMP", nama: "Pendidikan Pancasila dan Kewarganegaraan" },
    { id: 3, jenis: "SMP Umum", tingkatan: "SMP", nama: "Bahasa Indonesia" },
    { id: 4, jenis: "SMP Umum", tingkatan: "SMP", nama: "Matematika" },
    { id: 5, jenis: "SMP Umum", tingkatan: "SMP", nama: "Ilmu Pengetahuan Alam (IPA)" },
    { id: 6, jenis: "SMP Umum", tingkatan: "SMP", nama: "Ilmu Pengetahuan Sosial (IPS)" },
    { id: 7, jenis: "SMP Umum", tingkatan: "SMP", nama: "Bahasa Inggris" },
    { id: 8, jenis: "SMP Umum", tingkatan: "SMP", nama: "Seni Budaya" },
    { id: 9, jenis: "SMP Umum", tingkatan: "SMP", nama: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)" },
    { id: 10, jenis: "SMP Umum", tingkatan: "SMP", nama: "Prakarya" },
    { id: 1, jenis: "IPA SMP", tingkatan: "SMP", nama: "Sistem Klasifikasi Makhluk Hidup" },
    { id: 2, jenis: "IPA SMP", tingkatan: "SMP", nama: "Mikroskop dan Sel" },
    { id: 3, jenis: "IPA SMP", tingkatan: "SMP", nama: "Jaringan Tumbuhan" },
    { id: 4, jenis: "IPA SMP", tingkatan: "SMP", nama: "Proses Fotosintesis" },
    { id: 5, jenis: "IPA SMP", tingkatan: "SMP", nama: "Sistem Peredaran Darah" },
    { id: 6, jenis: "IPA SMP", tingkatan: "SMP", nama: "Sistem Pernapasan" },
    { id: 7, jenis: "IPA SMP", tingkatan: "SMP", nama: "Sistem Pencernaan" },
    { id: 8, jenis: "IPA SMP", tingkatan: "SMP", nama: "Gaya dan Gerak" }
];

// Fungsi untuk mengisi <select> dengan data dari array
function populateSelect(selectId, data, defaultText) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.error(`Element with ID '${selectId}' not found.`);
        return;
    }

    // Kosongkan pilihan sebelumnya
    selectElement.innerHTML = `<option value=''>${defaultText}</option>`;

    // Tambahkan option berdasarkan data
    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nama;
        selectElement.appendChild(option);
    });
}


// Fungsi untuk mengisi semua <select> pada form
function populateForm() {
    // Isi dengan data untuk setiap <select> yang ada di dalam form
    populateSelect('golongan_darah', golonganDarah, defaultTexts.golongan_darah);
    populateSelect('agama', agama, defaultTexts.agama);
    populateSelect('status_pernikahan', statusPernikahan, defaultTexts.status_pernikahan);
    populateSelect('pekerjaan', pekerjaan, defaultTexts.pekerjaan);
    populateSelect('kelurahan', kelurahan, defaultTexts.kelurahan);
    populateSelect('kecamatan', kecamatan, defaultTexts.kecamatan);
    populateSelect('kota', kota, defaultTexts.kota);
    populateSelect('provinsi', provinsi, defaultTexts.provinsi);
    populateSelect('kewarganegaraan', kewarganegaraan, defaultTexts.kewarganegaraan);
    populateSelect('hubungan_keluarga', hubunganKeluarga, defaultTexts.hubungan_keluarga);
    populateSelect('pendidikan', pendidikan, defaultTexts.pendidikan);
    populateSelect('berkebutuhan_khusus', berkebutuhanKhusus, 'Pilih Berkebutuhan Khusus');
    populateSelect('tempat_tinggal', tempatTinggal, 'Pilih Tempat Tinggal');
    populateSelect('moda_transportasi', modaTransportasi, 'Pilih Moda Transportasi');
    populateSelect('alasan_layak_pip', alasanLayakPIP, 'Pilih Alasan Layak PIP');
    populateSelect('pekerjaan_ayah', pekerjaan, 'Pilih Pekerjaan Bulanan Ayah');
    populateSelect('pekerjaan_ibu', pekerjaan, 'Pilih Pekerjaan Bulanan Ibu');
    populateSelect('pekerjaan_wali', pekerjaan, 'Pilih Pekerjaan Bulanan Wali');
    populateSelect('penghasilan_ayah', penghasilanBulanan, 'Pilih Penghasilan Bulanan Ayah');
    populateSelect('penghasilan_ibu', penghasilanBulanan, 'Pilih Penghasilan Bulanan Ibu');
    populateSelect('penghasilan_wali', penghasilanBulanan, 'Pilih Penghasilan Bulanan Wali');
    populateSelect('berkebutuhan_khusus_ayah', berkebutuhanKhusus, 'Pilih Berkebutuhan Khusus Ayah');
    populateSelect('berkebutuhan_khusus_ibu', berkebutuhanKhusus, 'Pilih Berkebutuhan Khusus Ibu');
    populateSelect('jarak_tinggal_ke_sekolah', jarakTempatTinggalKeSekolah, 'Pilih Jarak Tempat Tinggal ke Sekolah');
    populateSelect('jenis_prestasi', jenisPrestasi, 'Pilih Jenis Prestasi');
    populateSelect('tingkat_prestasi', tingkatPrestasi, 'Pilih Tingkat Prestasi');
    populateSelect('jenis_beasiswa', jenisBeasiswa, 'Pilih Jenis Beasiswa');
    populateSelect('jenis_pendaftaran', jenisPendaftaran, 'Pilih Jenis Pendaftaran');
    populateSelect('keluar_karena', keluarKarena, 'Pilih Alasan Keluar');
}

// Fungsi untuk update Kota berdasarkan Provinsi yang dipilih
function updateKota(provinceId) {
    const filteredKota = kota.filter(item => item.provinceId === parseInt(provinceId));
    populateSelect('kota', filteredKota, defaultTexts.kota);
    updateKecamatan();  // Reset kecamatan & kelurahan setelah pilih provinsi
    updateKelurahan();
}

// Fungsi untuk update Kecamatan berdasarkan Kota yang dipilih
function updateKecamatan(cityId) {
    const filteredKecamatan = kecamatan.filter(item => item.cityId === parseInt(cityId));
    populateSelect('kecamatan', filteredKecamatan, defaultTexts.kecamatan);
    updateKelurahan();  // Reset kelurahan setelah pilih kecamatan
}

// Fungsi untuk update Kelurahan berdasarkan Kecamatan yang dipilih
function updateKelurahan(districtId) {
    const filteredKelurahan = kelurahan.filter(item => item.districtId === parseInt(districtId));
    populateSelect('kelurahan', filteredKelurahan, defaultTexts.kelurahan);
}

// Menunggu hingga halaman sepenuhnya dimuat sebelum mengeksekusi script
document.addEventListener("DOMContentLoaded", function () {
    populateForm();

    // Event listener untuk Provinsi
    document.getElementById('provinsi').addEventListener('change', function () {
        const provinceId = this.value;
        updateKota(provinceId);
    });

    // Event listener untuk Kota
    document.getElementById('kota').addEventListener('change', function () {
        const cityId = this.value;
        updateKecamatan(cityId);
    });

    // Event listener untuk Kecamatan
    document.getElementById('kecamatan').addEventListener('change', function () {
        const districtId = this.value;
        updateKelurahan(districtId);
    });
});
