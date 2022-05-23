//DEMO: Sayı Tahmin Oyunu
/*1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri 
ile buldurmaya çalışın.
        ***kullanıcının kaç kerede bileceğini belirtin.
 */

var hak=5;
var tahmin;
var sayi=Math.floor((Math.random()*10)+1);
console.log(sayi);
while(hak>0){
    hak--;
    tahmin=Number(prompt("Sayı Giriniz :")+sayi);

    if(sayi==tahmin){
        console.log("Tebrikler");
        break;
    }
    else if(sayi>tahmin){
        console.log("Aşağı");
    }
    else{
        console.log("Yukarı");
    }
    if(hak==0){
        console.log("Hakkınız bitti.");
    }
}
