function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var factors = [];

  for (var i = 1; i <= angka; i++) {
    if (Number.isInteger(angka / i)) {
      factors.push(i);
    }
  }

  var digits = [];
  for  (var j = 0; j < factors.length; j++) {
    digits.push((String(factors[j]) + String(factors[factors.length - 1 - j])).length);
  }

  var minimumDigit = digits[0];

  for (var k = 1; k < digits.length; k++) {
    if (minimumDigit > digits[k]) {
      minimumDigit = digits[k];
    }
  }

  return minimumDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2