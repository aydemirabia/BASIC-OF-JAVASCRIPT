//Şimdiki tarihin gün, ay ve yıl bilgisini yazdırınız.
var dt= new Date();
console.log(dt,"\n");
//Tarih ve saat bilgisini içeren bir Date objesi oluşturun.
console.log(dt.getDate());
console.log(dt.getHours());
console.log(dt);

//Tarih ve saat bilgisini içeren bir Date objesi oluşturun.
var dtI=new Date('3/7/2022');
console.log(dtI,"\n");

//1/1/1990 tarihinden bir gün öncesini gösteriniz.
var dtA=new Date('1/1/1990');
var _1gunOncesi=dtA.getDate();
dtA.setDate(_1gunOncesi-1);
console.log(dtA,"\n");

//İki tarih arasındaki geçen zamanı bulunuz.
var date1=new Date('5/6/1988');
var date2=new Date('12/13/1983');

var time_msaniye=date1-date2;
var time_saniye=time_msaniye/1000;
var time_dk=time_saniye/60;
var time_saat=time_dk/60;
var time_gun=time_saat/24;

console.log('milisaniye: '+time_msaniye);
console.log('saniye: '+time_saniye);
console.log('dakika: '+time_dk);
console.log('saat: '+time_saat);
console.log('gün: '+time_gun);

console.log(date1.getFullYear()-date2.getFullYear());
console.log("\n\n");

// Yaş Hesaplama 
var birthday= new Date('11/13/1998');
var yas= Date.now()-birthday.getTime();
var yasFark= new Date(yas);
console.log(yasFark.getFullYear()-1970);