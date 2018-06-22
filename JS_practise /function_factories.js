
// program 1
const math = (x) => {
  const multiply = (y,z) => {
    return z* y * x;
  }
  return multiply;
}

let mathematical = math(3);
let result = mathematical(6,2);
console.log(result);

//program 2

const math2 = (a) => {
  // return (b,c) => b * c * a; yo direct lekhna sakincha
  return (b,c) => {
    return b * c * a;
  }

}
let mathematical1 = math2(3);
let result1 = mathematical1(6,2);
console.log(result1);

// program 3
// also we can shorten function factories like this too
const math3 = a => (b,c) => b * c * a ;
let mathematical3 = math3(3);
let result2 = mathematical3(6,2);
console.log(result2);