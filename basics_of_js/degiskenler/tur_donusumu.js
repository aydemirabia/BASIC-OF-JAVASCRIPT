// TÜR DÖNÜŞÜMÜ
/*let num1='5';
let num2='10';

total=num1+num2;
console.log(typeof num1);
console.log(total); //string türünde olduğu için + işareti birleştirme yaptı.
*/

let val;

// number to string
val=String(10);
console.log(typeof val);
console.log(val);

// date to string
val=String(new Date());
console.log(typeof val);
console.log(val);

//array to string
val=String([1,2,3,4]);
console.log(typeof val);
console.log(val);

//toString
val=(10).toString();
val=(false).toString();
console.log(val.length);
val= String(true);
console.log(typeof val);


// string to number
val=Number('10');
val=Number(true);
val=Number(false);
val=Number('a');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(3));

// parseInt
val=parseInt('10');
console.log(val);
console.log(typeof val);
val=parseInt('10.5');
console.log(val);
console.log(typeof val);
val=parseFloat('10.5');
console.log(val);
console.log(typeof val);