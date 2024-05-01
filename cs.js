// 1. Function to check whether we have an array or an object.
function checkArray(elem){
    return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));

// 2. empty an array

let a = [1,2,3];
console.log(a);
a.length = 0;
console.log(a);

// 3. How to check whether a number is an integer or not ?
let b = 12;
console.log(typeof(b)); // will print number , not an integer.

function checkInt(elem){
    if(elem % 1 == 0){
        console.log('an integer')
    }
    else{
        console.log('not an integer')
    }
}
checkInt(69.69);