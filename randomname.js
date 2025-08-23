let obj1 = {
0 : "Crazy",
1 : "Amazing",
2 : "Fire"
};
let obj2 = {
0:"Garments" ,
1: "Foods" ,
2: "Engine"
};
let obj3 = {
0:"Bros" ,
1: "Hub",
2:"Limited"
};
let first = Math.floor(Math.random()*3);
let second = Math.floor(Math.random()*3);
let third = Math.floor(Math.random()*3);
console.log(obj1[first],obj2[second],obj3[third]);