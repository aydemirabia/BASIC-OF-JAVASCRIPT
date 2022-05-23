
/*
let cars=["BMW", "Mercedes", "Toyota"];
for(let i=0;i<=cars.length;i++){
    console.log(cars[i]);
}

//for-in
for(let i in cars){
    console.log('index: '+i+' value: '+cars[i]);
}
console.log(cars);

//foreach
cars.forEach(function(item)
{
    console.log(item);
});
*/

//map: Array Map fonksiyonu, kendisine parametre olarak gönderilen dizinin her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir. .
let numbers=[1,2,3,4,5,6,7,8,9,10];
let number=numbers.map(function(n){
    return n*n;
});
console.log(number);