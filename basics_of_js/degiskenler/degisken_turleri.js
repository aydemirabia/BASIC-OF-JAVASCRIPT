// DEĞİŞKENLER
/*PART-1

var age;
console.log(age);
age=20;
console.log(age);

var fullname='Rabia Aydemir';
console.log(fullname);

fullname='Rabia AYDEMİR';
console.log(fullname);

// var, let, const: js değişken türleri
// var ve let aynıdır.
// const sabit türdür.

let city='İstanbul';
console.log(city);

const email='abcd@gmail.com';
console.log(email);

email='efgh@gmail.com' //typeError verir. Çünkü const sabitleyicisinde emaili bir kez tanımladık.
console.log(email);
*/

//PART-2

//PRIMITIVE TYPES
    //string
    let firstName='Çınar';
    console.log(typeof firstName);
    //number
    //ondalıklı sayılar da number kapsamındadır.
    let age=35;
    console.log(typeof age);

    let money=110.4;
    console.log(typeof money);

    // boolean
    let isActive=false;
    console.log(typeof isActive);

    //null
    //null veri tipi object'tir.
    let job=null;
    console.log(job);
    console.log(typeof job);
    
    //undefined
    let car;
    console.log(typeof car);

//REFERENCE TYPES
    // array(dizi)
    let names=['Ali','Veli','Ahmet'];

    // object
    let address={
        city:'İstanbul',
        country:'Türkiye'
    }

    // fonksiyon(function)
    var calculateAge=function(){
        return 0;
    }
    console.log(typeof address);
    console.log(typeof calculateAge);

