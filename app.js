function holler() {
  console.log("HEY YOU");
}

const whisper = function () {
  console.log("psst...i have a secret");
};

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];

// setTimeout(whisper, 4000);

function doMath(a, b, mathFunc) {
  mathFunc(a, b);
  return mathFunc(a, b);
}

function doAllMath(a, b, mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(a, b));
  }
}
