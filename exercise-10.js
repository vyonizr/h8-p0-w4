function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    console.log("\"\"");
  }
  for ( var i = 0; i < arr.length; i++) {
    console.log(i + 1 + ". " + arr[i][0] + " " + arr[i][1] + ":")

    var superhero = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: new Date().getFullYear() - arr[i][3]
    }

    if (Number.isNaN(superhero.age)) {
      superhero.age = "Invalid Birth Year";
    }
    console.log(superhero);
  }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""