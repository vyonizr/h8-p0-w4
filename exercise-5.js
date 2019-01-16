function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var result = "";

  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (alphabet[j] === kata[i]) {
        result += alphabet[(j + 1) % 26];
      }
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu