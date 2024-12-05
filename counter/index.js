const creatCounter = (n) => {
 return function() {

     return n++;
 }
}

const counter = creatCounter(10);
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
console.log(counter()); // Output: 13