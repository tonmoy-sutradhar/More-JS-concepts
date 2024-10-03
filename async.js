console.log(1);
console.log(2);
// console.log(3);
// doSomething();
setTimeout(() => {
  doSomething();
}, 5000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}
