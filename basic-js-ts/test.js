// ------------------1--------------------
const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(12));


// -------------------2--------------------
const shift = (array, direc, num) => {
  //left
  if (direc == 'left') {
    let res1 = array.slice(num, array.length);
    let res2 = array.slice(0, num);
    Array.prototype.push.apply(res1, res2)
    return res1;
  }
  //right
  if (direc == 'right') {
    let res1 = array.slice(0, num - 1);
    let res2 = array.slice(num - 1, array.length);
    Array.prototype.push.apply(res2, res1)
    return res2;
  }
}
// console.log(shift([1, 2, 3, 4, 5], 'right', 3));
// console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));


// -------------------3--------------------
const secondMax = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 0) {
    throw 'Error!';
  }
  let set = new Set(array);
  let array2 = Array.from(set);
  return array2.sort((a, b) => b - a)[1];
}
// console.log(secondMax([9, 2, 21, 21]));
// console.log(secondMax([4123]));
// console.log(secondMax([2, 3, 4, 5]));
// console.log(secondMax([]));


// -------------------4--------------------
const fizzBuzz = (num) => {
  return (num % 3 == 0 && num % 5 == 0 ? 'FizzBuzz' :
    num % 3 == 0 ? 'Fizz' : num % 5 == 0 ? 'Buzz' : ''
  );
}
// console.log(fizzBuzz(21));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(45));
// console.log(fizzBuzz(0));
// console.log(fizzBuzz(1));
// console.log(fizzBuzz(-30));


