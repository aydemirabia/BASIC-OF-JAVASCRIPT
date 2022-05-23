/*
20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım 
süreleri aşağıda verilmiştir. Bu bilgilere göre servis uyarısı
veriniz.
        1. Bakım: 1 yıl
        2. Bakım: 2 yıl
        3. Bakım: 3 Yıl

var trafigeGecis=new Date('10/01/2022');
trafigeGecis.setHours(0,0,0,0);
var trafigekiSure=Date.now()-trafigeGecis.getTime();
var trafiktekiGun=Math.floor(trafigekiSure/(1000*60*60*24));

if(trafiktekiGun<=365){
    console.log("1. servis bakım süreniz gelmiştir.");
}
else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
    console.log("2. servis bakım süreniz gelmiştir.");
}
else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log("3. servis bakım süreniz gelmiştir.");
}
else{
    console.log('Kayıt bulunamadı.');
}
console.log("Trafikteki Gün sayısı: ",trafiktekiGun);

*/

var result=prompt("Burada kim var?");
console.log(result);