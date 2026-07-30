let carInformation = {
    name : "BMW",
    model : 2026,
    carCollections : ["RANGE ROVER","AUDI","BMW","LAMBORGINEY"],
    firstOwnerInfo : {
        name : "Mical",
        Age : 55,
        Address : "Newyork"
    },
}

// console.log(carInformation);
// console.log(`firstOwnerInfo ${carInformation.firstOwnerInfo.Address}`);


// this is non-primative:
let x = 25;
let y = x;

x = 65;

console.log(`this is non-primative : ${x}`);
console.log(`this is non-primative : ${y}`);



let userInfo = {name : "Mical Johnson", Age : 55,};
userInfo.name = "Mica";
userInfo.Age = 60;

console.log(userInfo);