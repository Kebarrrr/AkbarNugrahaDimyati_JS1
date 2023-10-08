// Fungsi untuk menentukan status kenaikan kelas berdasarkan nilai
function statusKenaikanKelas(nilai) {
  if (nilai >= 70) {
    return "Lulus";
  } else if (nilai >= 60) {
    return "Remedial";
  } else {
    return "Tidak Lulus";
  }
}

// Pernyataan switch case untuk menentukan nilai huruf
function nilaiHuruf(nilai) {
  switch (true) {
    case nilai >= 90:
      return "A";
    case nilai >= 80:
      return "B";
    case nilai >= 70:
      return "C";
    case nilai >= 60:
      return "D";
    default:
      return "E";
  }
}

// Nama sekolah dan judul program
var namaSekolah = "Sekolah Menengah Atas Negeri 2 Purwakarta";
var judulProgram = "Buku Rapot Kenaikan Kelas";

// Array untuk menyimpan data siswa (hanya satu data)
var dataSiswa = [
  {
    nama: "Akbar Nugraha Dimyati",
    nilaiMatematika: 95,
    nilaiBahasaInggris: 85,
    nilaiIPA: 90,
  },
];

console.log(namaSekolah);
console.log(judulProgram);
console.log("===========================");

// Loop untuk mengelola data siswa
for (var i = 0; i < dataSiswa.length; i++) {
  var siswa = dataSiswa[i];

  console.log("Nama Siswa: " + siswa.nama);
  console.log("Nilai Matematika: " + siswa.nilaiMatematika);
  console.log("Nilai Bahasa Inggris: " + siswa.nilaiBahasaInggris);
  console.log("Nilai IPA: " + siswa.nilaiIPA);
  console.log("===========================");

  // Menampilkan status kenaikan kelas
  console.log("Status Kenaikan Kelas:");
  console.log("Matematika: " + statusKenaikanKelas(siswa.nilaiMatematika));
  console.log(
    "Bahasa Inggris: " + statusKenaikanKelas(siswa.nilaiBahasaInggris)
  );
  console.log("IPA: " + statusKenaikanKelas(siswa.nilaiIPA));
  console.log("===========================");

  // Menampilkan nilai huruf
  console.log("Nilai Huruf:");
  console.log("Matematika: " + nilaiHuruf(siswa.nilaiMatematika));
  console.log("Bahasa Inggris: " + nilaiHuruf(siswa.nilaiBahasaInggris));
  console.log("IPA: " + nilaiHuruf(siswa.nilaiIPA));
  console.log("===========================");
}

// Penggunaan pernyataan while
var i = 1;
console.log("Komentar Guru:");
while (i <= dataSiswa.length) {
  console.log(
    "Komentar ke-" + i + ": Siswa " + dataSiswa[i - 1].nama + " rajin belajar."
  );
  i++;
}

// Penggunaan pernyataan do-while
var j = 1;
console.log("Komentar Orang Tua:");
do {
  console.log(
    "Komentar ke-" +
      j +
      ": Orang tua bangga dengan prestasi " +
      dataSiswa[j - 1].nama +
      "."
  );
  j++;
} while (j <= dataSiswa.length);
