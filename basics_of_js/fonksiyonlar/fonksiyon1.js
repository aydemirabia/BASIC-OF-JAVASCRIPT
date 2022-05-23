//Functions

function yasHesapla(dogumYili){
    return 2022 - dogumYili;
}
let ageRana = yasHesapla(2018);
let ageEmir= yasHesapla(2013);
let ageYiğit=yasHesapla(2021);

console.log(ageRana);
console.log(ageEmir);
console.log(ageYiğit);

function EmeklilikYasi(dogumYili,isim){
    let yas=yasHesapla(dogumYili);
    let emeklilik= 65- yas;

    if(emeklilik>0){
        console.log(isim+" emekli olmana "+emeklilik+" yıl kaldı.");
    }
    else{
        console.log("Emeklisiniz.");
    }
}
EmeklilikYasi(2018,"Rana");
EmeklilikYasi(2013, "Emir");
EmeklilikYasi(2021, "Yiğit");