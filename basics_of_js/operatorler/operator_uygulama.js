/*
1- Can ve Ada'nın boy(m) ve kilogram bilgilerini alın.
2- Alınan bilgilere göre kilogram indekslerini hesaplayın.
**Formül: kg/(boy**boy)
3- Hesaplanan indeks bilgisine göre karşılatırma yapınız.
4- Aşağıdaki tabloya göre Can ve Ada'nın hangi gruba girdiğini bulunuz: 
    0 - 18,4  : Zayıf
    18,5 - 24,9   : Normal
    25,0 - 29,9 :Fazla Kilolu
    30,0 - 34,9 : Şişman (OBEZ)

*/

const kgAda=62;
const kgCan=88;
const boyAda=1.56;
const boyCan=1.72;

Ada=kgAda/(boyAda*boyAda);
Can=kgCan/(boyCan*boyCan);
console.log(Ada);
console.log(Can);

let vkiAda= Ada>Can;
console.log("Ada'nın vücut kütle indeksi Can'ınkinden fazladır.\n"+vkiAda);
let vkiCan= Ada<Can;
console.log("Can'ın vücut kütle indeksi Ada'nınkinden fazladır.\n"+vkiCan);

let AdaZayif= Ada>0 && Ada<=18.4;
let AdaNormal= Ada>=18.5 && Ada<=24.9;
let AdaFazlaKilolu= Ada>=25 &&Ada<=29.9;
let AdaSisman= Ada>30 && Ada<=34.9;
console.log("\n\nADA GRUP:");
console.log(AdaFazlaKilolu);
console.log(AdaNormal);
console.log(AdaSisman);
console.log(AdaZayif);

let CanZayif= Can>0 && Can<=18.4;
let CanNormal= Can>=18.5 && Can<=24.9;
let CanFazlaKilolu= Can>=25 &&Can<=29.9;
let CanSisman= Can>30 && Can<=34.9;
console.log("\n\nCAN GRUP:");
console.log(CanFazlaKilolu);
console.log(CanNormal);
console.log(CanSisman);
console.log(CanZayif);