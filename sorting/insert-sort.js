// Insert sort itu bekerja seperti sesaat kita mengurutkan uang
// Semisal ada uang dengan pecahan 2000, 50000, 20000, 2000, 10000
// Lalu kita ingin mengurutkannya dari yang terkecil
// Maka kita biasanya meletakan urutan yang pertama(yakni 2000) di tangan kiri
// Kemudian di tangan kanan sisanya
// Lalu kita mengurutkannya dengan cara
// Kita lihat pecahan uang berikutnya, 50000
// Apakah 50000 lebih kecil dari 2000? Tidak
// Letakkan 50000 di atas 2000
// Kita melihat  pecahan uang berikutnya, 20000
// Apakah 20000 lebih kecil dari 50000? Iya
// Letakkan 20000 di bawah 50000
// Lalu periksa apakah 20000 lebih kecil dari 2000? Tidak
// Maka 20000 diletakkan diatas 2000
// Begitu seterusnya
// Mungkin akan menjadi seperti ini
//
// Judul : InsertSort
//
// Deklarasi :
//  arr = [2000, 50000, 20000, 2000, 10000]
// Algoritma :
//
// for i = 2; i < <jumlah element yang ada di dalam arr>; i++
//    Deklarasi :
//    integer: nilaiSaatIni = arr[i]
//    // j adalah posisi atau index dari element sebelum nilaiSaatIni
//    integer: j = i - 1
//    while i > 0 <dan> arr[j] > nilaiSaatIni
//        // j + 1 berarti posisi saat ini
//        // Kita pindahkan posisi sebelum ke posisi saat ini [2000, 50000, ...] jadi [50000, 50000]
//        arr[j + 1] = arr[j]
//        // j - 1 mundur ke elemen sebelumnya lagi
//        j = j - 1
//
//    // Masukkan nilai saat ini ke dalam array saat ini
//    // Nilai saat ini adalah nilai terkecil di antara urutan
//    arr[j+1] = nilaiSaatIni

let arr = [2000, 50000, 20000, 10000]


for (let i = 1; i < arr.length; i++) {
  let nilaiTerkini = arr[i]
  let j = i - 1
  while (i >= 0 && arr[j] > nilaiTerkini) {
    arr[j + 1] = arr[j]
    j = j - 1
  }
  arr[j + 1] = nilaiTerkini
}


console.log(arr)
