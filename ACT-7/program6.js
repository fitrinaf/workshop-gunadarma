function buatObjectKucing (nama, jenis, warna) {
    var kucing = {};
    kucing.nama = nama;
    kucing.jenis = jenis;
    kucing.warna = warna;
    kucing.bersuara = function () {
        return "Meow..";
    }
        return kucing;
}
var kucing1 = buatObjectKucing ("Milo", "Persia", "Putih");

console.log (kucing1.nama);
console.log(kucing1.jenis);
console.log(kucing1.warna);
console.log (kucing1.bersuara ());



