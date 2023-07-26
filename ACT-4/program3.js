let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 0;

let genap  = [];
let ganjil = [];

document.write("<h3>Pemisahan Bilangan Ganjil dan Genap </h3>");
document.write("<p>Diketahui array: " + arr.toString() + "</p>");

while(x < arr.length) {
    if (arr[x] % 2 == 0){
        genap.push(arr[x]);
    } else {
        ganjil.push(arr[x]);
    }
    x++;
}
document.write("<br><p>Hasil pemisahan </p>");
document.write("<p>Genap : " + genap.toString() + "</p>");
document.write("<p>Ganjil : " + ganjil.toString() + "</p>");






