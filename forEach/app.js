// function holler() {
//   console.log("HEY YOU");
// }

// const whisper = function () {
//   console.log("psst...i have a secret");
// };

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// const mathFuncs = [add, subtract, multiply, divide];

// // setTimeout(whisper, 4000);

// function doMath(a, b, mathFunc) {
//   mathFunc(a, b);
//   return mathFunc(a, b);
// }

// function doAllMath(a, b, mathFuncs) {
//   for (let func of mathFuncs) {
//     console.log(func(a, b));
//   }
// }

const colors = ["teal", "cyan", "peach", "purple"];

// function yell(val, i) {
//   const caps = val.toUpperCase();
//   console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell);

// const prices = [30.99, 19.99, 2.5, 99.0];

// let total = 0;
// prices.forEach(function (price) {
//   total += price;
// });
// console.log(total);
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(colors, function (color, i) {
  console.log(color.toUpperCase(), "at index of", i);
});
