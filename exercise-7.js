function urutkanAbjad(str) {
  // you can only write your code here!
  var strArray = [];

  for (var i = str.length - 1; i >= 0; i--) {
      strArray.push(str[i]);
  }
  return strArray.sort().join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'