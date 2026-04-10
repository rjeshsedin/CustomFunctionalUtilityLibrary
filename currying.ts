function sum(num) {
  let total = num || 0;

  function inner(next) {
    if (next === undefined) {
      return total;
    }

    total += next;
    return inner;
  }

  return inner;
}

console.log(sum(1)(2)(3)());      
console.log(sum(2)(4)(5)(10)());  