let val;
let person={
    firstName:'Yiğit',
    lastName: 'Özdemir',
    age: 1,
    hobbies: 'eat',
    address: {
        city: "İstanbul",
        country: "Türkiye"
    }
};
val= person.firstName;
val=person.lastName;
val=person['firstName'];
val=person.age;
val=person.hobbies;
val=person.address.city;
console.log(val);
console.log(typeof person);