alert("Input Ukuran Persegi Panjang dan Hitunglah Luasnya");

while (true) {
    let panjang = prompt ("Masukkan panjang persegi panjang");
    let lebar = prompt ("Masukkan lebar persegi panjang");

    let luas = panjang * lebar;

    let jawaban = prompt ("Masukkan jawaban anda");

    if (jawaban == luas) {
        alert("Jawaban anda benar");
    } else {
        alert("Jawaban anda salah");
    }

    let repeat = confirm("Apakah anda ingin mengulang ?");
    if (repeat == false) {
        break;
    }
}
