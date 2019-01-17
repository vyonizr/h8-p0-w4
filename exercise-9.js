function checkAB(num) {
  // you can only write your code here!
  var aIndex = [];
  var bIndex = [];

  for (var i = 0; i < num.length; i++) {
    if (num[i] === "a") {
      aIndex.push(i);
    }
    else if (num[i] === "b") {
      bIndex.push(i);
    }
  }

  var abIndex = [aIndex, bIndex];
  if (abIndex[0].length < abIndex[1].length) {
    var temp = abIndex[0];
    abIndex.shift();
    abIndex.push(temp);
  }

  for (var j = 0; j < abIndex[0].length; j++) {
    for (var k = 0; k < abIndex[1].length; k++) {
      if (Math.abs(abIndex[0][j] - abIndex[1][k]) === 4) {
        return true;
      }
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false