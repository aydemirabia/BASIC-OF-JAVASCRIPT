let names=['hazal','rana','yiğit','emir'];
let years=[2019,2018,2021,2008];
let mix=['rabia','aydemir',1998,null,undefined,['sinema','kitap']];
console.log(names);
console.log(names.length);
console.log(years);
console.log(typeof names); //object
console.log(mix);
console.log(names[0]);
console.log(names[3]);

//diziye eleman ekleme
years.push(1989); //diziye eklenen elemanı sona ekler
years.unshift(1990); //diziye eklenen elemanı ilk eleman olarak atar
console.log(years);

years.pop(); //dizinin son elemanını siler.
years.shift(); //dizinin ilk elemanını siler.
console.log(years);

//dizi elemanını arama
//let index=names.indexOf('yiğit'); //index sırasını verir.
let index=names.indexOf('muhammed yiğit'); //index sırasını -1 olarak döner.
console.log("index: "+index);

//sort sıralama yapar. küçükten büyüğe doğru
//reverse ters çevirir.
//concat birleştirir.
//splice metodu [splice(0,2,'rabia')] //0dan 2'ye kadar silme işlemi yapar ve rabia'yı ekler.
//filter metodu birden fazla aynı elemana sahip olan indexleri filtreler.
