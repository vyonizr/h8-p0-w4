function cariModus(arr) {
  // you can only write your code here!
  // SORT and REMOVE duplicates----------
  for (var n = 0; n < arr.length; n++) {
    for (var o = 0 + n; o < arr.length; o++) {
      if (arr[n] > arr[o]) {
        arr[o] = arr[n] + arr[o];
        arr[n] = arr[o] - arr[n];
        arr[o] = arr[o] - arr[n];
      }
    }
  }

  var lookUp = [];
  lookUp.push(arr[0]);

  for(var i = 1; i < arr.length; i++) {
    var temp = undefined;
    for (var j = 0; j < lookUp.length; j++) {
      if(arr[i] !== lookUp[j]) {
        temp = arr[i];
      }
    }

    if (temp !== undefined) {
      lookUp.push(temp);
    }
  }
// COUNTING occurence of each number ---
  var occurenceCounter = [];

  for (var k = 0; k < lookUp.length; k++) {
    var numCounter = 0;

    for (var l = 0; l < arr.length; l++) {
      if (arr[l] === lookUp[k]) {
        numCounter++;
      }
    }

    occurenceCounter.push(numCounter);
  }

// FINDING modus ----------------------
  var modus = occurenceCounter[0];

  for (var m = 0; m < occurenceCounter.length - 1; m++) {
    if (modus < occurenceCounter[m + 1]) {
      modus = occurenceCounter[m + 1];
    }
  }

  var mostOccurenceIndex = occurenceCounter.indexOf(modus);

  if(lookUp.length === 1 || modus === 1) {
    return -1;
  }
  else {
    return lookUp[mostOccurenceIndex];
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 5, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1