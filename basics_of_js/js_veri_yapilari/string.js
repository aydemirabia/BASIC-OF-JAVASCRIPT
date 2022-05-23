// String
const firstName='Rabia';
const lastName='Aydemir';
const age=23;

let val;

//string concat

val=firstName + " " + lastName;
val ='İsmail ';
val+= 'Türkmenoğlu ';
val+= age;
val="Benim adım "+firstName+" soyadım "+lastName+" "+age+" yaşındayım.";
val=val.substring(3,8);
console.log(val);
console.log(typeof val);
