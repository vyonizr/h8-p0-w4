function pushDivisor(num) {
  var divisors = [];

  for (var i = 1; i <= num; i++) {
    if (Number.isInteger(num / i)) {
      divisors.push(i);
    }
  }

  return divisors;
}

function fpb(angka1, angka2) {
  // you can only write your code here!

  var factors = [pushDivisor(angka1), pushDivisor(angka2)];

  if (factors[0].length < factors[1].length) {
    var temp = factors[0];
    factors.shift();
    factors.push(temp);
  }

  var greatestCommonDivisor = factors[1][k];

  for (var j = 0; j < factors[0].length; j++) {
    for (var k = 0; k < factors[1].length; k++) {
      if (factors[1][k] === factors[0][j]) {
        greatestCommonDivisor = factors[1][k];
      }
    }
  }

  return greatestCommonDivisor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1