// DATE & TIMES
let d=new Date();
console.log(d);
console.log(typeof d); //object
let birthDay= new Date(1998,11,13);
//Set Fonksiyonları
//Tarih bilgilerini değiştirir.
/*
d.setFullYear(2028);
d.setMonth(6);
d.setDate(12);
d.setMinutes(34);
d.setSeconds(47);
d.setHours(13);
*/
// Get Fonksiyonları
console.log(d.getDate()); //ayın kaçıncı gününde olduğumuzu gösterir.
console.log(d.getDay());  //haftanın gün sırasını verir. örn perş günü 4.sırada
console.log(d.getFullYear()); //bulunduğumuz yılın bilgisini verir.
console.log(d.getMonth()); //kaçıncı ayda olduğumuzu gösterir.
console.log(d.getHours()); //saatin kaç olduğunu gösterir.
console.log(d.getMinutes()); //bulunduğumuz dakikayı gösterir.
console.log(d.getSeconds()); //bulunduğumuz saniyeyi gösterir.

console.log(d.getFullYear()-birthDay.getFullYear());
console.log(d.getMonth()-birthDay.getMonth());
console.log(d.getDay()-birthDay.getDay());