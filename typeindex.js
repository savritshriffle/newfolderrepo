"use strict";
// let names:string="ABC";
// let age:number=100;
// console.log(age)
// console.log(names)
const k = {
    contact: 10000,
    education: "BBB",
    i: {
        id: 10,
        name: "aa"
    },
    m: {
        num: 20,
        s: "bb"
    },
    n: {
        num: 30,
        s: "cc",
        o: {
            age: 100,
            price: 1000
        },
    }
};
console.log(k.contact);
console.log(k.education);
console.log(k.i);
console.log(k.m);
console.log(k.n);
console.log(k.n.o);
//  console.log(k.n.o.age)
//  console.log(k.n.o.price)
