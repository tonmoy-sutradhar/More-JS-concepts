// single threaded -->>> scequencially jai , ek tar por ekta

function one() {
  console.log("a");
  two();
  console.log("c");
}
function two() {
  console.log("b");
}
one();
