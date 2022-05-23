var text="The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

var sentence=" http://sadikturan.com/ Modern Javascript Kursu Sıfırdan İleri Seviye ";
//Cümle kaç karakterlidir?
/*console.log("Karakter Sayısı: "+sentence.length);
//Kaç kelimeden oluşuyor? 
//split fonksiyonu kullanılır.
console.log(sentence.trim().split(' ').length);
//Tüm cümleyi küçük harfe çevir
console.log(sentence.toLowerCase());
//Cümle başındaki ve sonundaki boşlukları siliniz.
//trim() fonksiyonu kullanılır.
console.log(sentence.trim());
//'-' karakterini siliniz.
console.log(text.replace('-',''));*/
//url'nin içinden str kısmını çıkartın.
var str='http://';
console.log(sentence.substr(str.length));
console.log(sentence.slice(str.length));
//url hangi protokol'u kullanmaktadır?
console.log(sentence.startsWith('wwww'));
console.log(sentence.startsWith('https'));
console.log(sentence.startsWith("http"));
//url .com'u içeriyor mu?
console.log(sentence.indexOf('.com'));