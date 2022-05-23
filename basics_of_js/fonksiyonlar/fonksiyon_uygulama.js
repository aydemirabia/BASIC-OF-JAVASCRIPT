//DEMO: ATM'den Para Çekmek

var hesapA={
    ad: 'Rabia AYDEMİR',
    hesapNo: "212216",
    bakiye: 3000,
    ekHesap: 2000
}
var hesapB={
    ad: 'Muhammet Nuri AYDEMİR',
    hesapNo: "999888",
    bakiye: 500000,
    ekHesap: 4500
}
function paraCekme(hesap,miktar){
    console.log("Merhaba "+hesap.ad);
    if(miktar>hesap.bakiye){
        console.log("Yetersiz Bakiye");
    }
    else{
        console.log("Hesabınızdan "+miktar+" TL çekildi. Kalan bakiyeniz "+(hesap.bakiye-miktar)+" TL'dir.");
}
}
paraCekme(hesapA,20896);
paraCekme(hesapB,458000);