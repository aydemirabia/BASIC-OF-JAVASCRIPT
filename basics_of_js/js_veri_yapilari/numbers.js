var num= 10.5689789654;
val= num.toPrecision(4); //toplamda yazdığımız basamakta sayı getirir.
console.log(val);
val= num.toFixed(3); //noktadan sonra-ondalıklı kısmı- yazdığımız sayı kadar basamak döndürür.
console.log(val); 

//sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
var min= 50;
var max= 100;
console.log(Math.floor(min+Math.random()*(max-min)));