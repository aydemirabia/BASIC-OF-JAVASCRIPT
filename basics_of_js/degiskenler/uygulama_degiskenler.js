/*Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.
-Müşteri Ad-Soyad
-Müşteri TC No
-Müşteri Sipariş Toplam
-Müşteri Cinsiyet
-Müşteri Adres Bilgileri
-Müşteri Hobiler
*/

var  m_ad, m_soyad, m_tc, m_sprstotal, m_cinsiyet, m_adres, m_hobi;
m_ad='Rabia';
m_soyad='AYDEMİR';
m_tc=53602160212;
m_sprstotal=205.6;
m_cinsiyet='K';
m_adres='Hürriyet Caddesi, Pendik/İSTANBUL 34903';
/* object
m_adres={
    sehir:"İstanbul",
    ilce: 'Pendik-34903'
}
*/
// array
m_hobi=['Programlama Dili öğrenmek',' Yabancı Dil öğrenmek',' Seyahat etmek'];
console.log("Ad: "+m_ad+"\nSoyad: "+m_soyad+"\nTC: "+m_tc+"\nSipariş Toplam: "+m_sprstotal+
"\nCinsiyet: "+m_cinsiyet+"\nAdres: "+m_adres+"\nHobi: "+m_hobi);

console.log("\nUygulama-2");
// Aşağıdaki siparişlerin toplamını yazınız.
var order1='100.1';
var order2='150.11';
var totalorder=order1+order2;
console.log(totalorder);

var order3=Number('100.02');
var order4=Number('150.98');
var totalorders=order3+order4;
console.log(totalorders);

var order5=parseFloat('369.785');
var order6=parseInt('78');
var totalorderlar=order5+order6;
console.log(totalorderlar);

// Aşağıda verilen doğum yılına göre yaş hesaplayınız.
var yearOfBirth=1983;
console.log(new Date().getFullYear()-yearOfBirth);

// Aşağıdaki string ifadenin karakter sayısını bulunuz.
var course='Modern Javascript Kursu';
console.log(course.length);