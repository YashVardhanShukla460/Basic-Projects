let x = prompt("Enter first number");
x = Number(x);
let y = prompt("Enter second number");
y = Number(y);
let z = prompt("Enter the operation u want to perform");
// const x=9;
// const y=10;
// const z = "+";
if(Math.random()>0.1){
if(z =="+"){
    console.log(x+y);
}
if(z =="-"){
    console.log(x-y);
}
if(z =="*"){
    console.log(x*y);
}
if(z =="/"){
    console.log(x/y);
}}
else{
    if(z =="+"){
    console.log(x-y);
}
if(z =="-"){
    console.log(x/y);
}
if(z =="*"){
    console.log(x+y);
}
if(z =="/"){
    console.log(x**y);
}
}