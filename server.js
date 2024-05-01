// let animals = ["Cow", "Hi"];
// console.log(animals);
// animals.push("Hello");
// console.log(animals);
// let x = (...animals);
// console.log(x)

// function my (){
//     let a = 1;
//     console.log(a);
// }
// console.log(a);

// var creates a function scoped variable , i.e it can be accessed anywhere inside the function.
// function a(){
//     if(true){
//         var cnt = 10;
//         console.log(cnt);
//     }
//     console.log(cnt)
// }
// a();

// // let creates a blocked scoped variable , i.e it cannot be accessed anywhere inside the function.
// function b(){
//     if(true){
//         let cnt2 = 10;
//         console.log(cnt2);
//     }
//     console.log(cnt2) // error dega
// }
// console.log(cnt2)
// b();

// loops
// for-of loop
// -
// let arr = [1,2,3];
// for(let val in arr){
//     console.log(arr[val])
// }


// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// const add = function(a,b){
//     console.log(a+b);
// }


// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// callback function
// function callMe() {
//     console.log('I am callback function');
// }

// passing function as an argument
// greet('Peter', callMe);


// console.log("Hello")
// setTimeout(() => {
//     console.log("Delayed for 3 second.");
//   }, "3000");
// console.log("Hi")  


// console.log(x)
// var x = 10;


var str = "Mai hu don";
var naya = str.split(" ").map(function(word){
    return word.split("").reverse().join("");
})
naya.join("");
console.log(naya);