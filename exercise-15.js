function highestScore (students) {
  // Code di sini
  var result = {};

  for (var i = 0; i < students.length; i++) {
    result[students[i].class] = {
      name: "",
      score: 0
    };
  }

  var classList = Object.keys(result);

  for (var j = 0; j < students.length; j++) {
    for (var k = 0; k < classList.length; k++) {
      var className = classList[k];
      // checks class name
      if (className == students[j].class) {
        // compares the score
        if(result[className].score < students[j].score) {
          result[className].name = students[j].name;
          result[className].score = students[j].score;
        }
      }
    }
  }

  return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}