
//BMW, Mercedes, Opel, Mazda elemanlarına sahip bir dizi oluşturun.
let brands=["BMW","Mercedes","Opel","Mazda"];
console.log(brands);
/*
//Dizi kaç elemanlıdır?
console.log(brands.length);

//Dizinin ilk ve son elemanı nedir?
console.log(brands.shift());
console.log(brands[0]);
console.log(brands[3]);

//Renault değerini dizinin sonuna ekleyin.
console.log(brands.push("Renault")); //dizi elemanının sonuna ekleme yapılır.
console.log(brands);

//Toyota değerinin dizinin başına ekleyin.
console.log(brands.unshift("Toyota")); //unshift, ilk elemanı siler eklenmek istenen değeri ekler.
console.log(brands);

//Sondaki Renault değerini siliniz.
console.log(brands.pop("Renault"));
console.log(brands);

//Baştaki Toyota ifadesini siliniz.
console.log(brands.shift("Toyota"));
console.log(brands);

//Dizi elemanlarını ters çevirin
console.log(brands.reverse());

//Dizi elemanlarını alfabetik olrak sıralayın.
console.log(brands.sort());


//[1,202,88,80,-8,-33,34] ifadelerini sıralayın.
let array=[60,12,30,-9,3,0,-1];
console.log(array.sort());

//Opel değeri dizinin elemanı mıdır?
console.log(brands.indexOf('Opel')); //indexof, indeks numarasıyla olup olmadığını gösterir.
console.log(brands.indexOf("Audi")); //eğer değer dizide yer almıyorsa -1 döndürür.
console.log(brands.includes('Opel')); //bool değer döndürür.
console.log(brands.indexOf('Audi')); //bool değeri döndürür.


//var str="Ford, Dacia"; ifadesini diziye çevirin.
var str="Ford,Dacia"; 
var dizi=str.split(','); //değerleri istediğimiz kısımdan ayırarak bu parçaları yeni bir diziye ekler.
console.log(dizi);

//Oluşturulan diziden son iki elemanı siliniz.
let array2=["Ali","Murat","Güray","Cenk","Sahra"];
console.log(array2.splice(3,4));
*/
//Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
//      studentA: Furkan Uğurlu 2010;
//      studentB: İsmail Çatalbaş 2020;
//      studentC: Tarık Ömeroğlu 1996;
var studentA= ['Furkan','Uğurlu',2010];
var studentB= ['İsmail','Çatalbaş',2020];
var studentC= ['Tarık','Ömeroğlu',1996];
let students=studentA+studentB+studentC;
console.log(students.split(', ').concat());
//İkinci Yol
