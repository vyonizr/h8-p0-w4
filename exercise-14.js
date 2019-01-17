function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  var fare = 2000;
  var result = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    var jumlahRute = 0;

    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        jumlahRute += j;
      }
      else if (arrPenumpang[i][2] === rute[j]) {
        jumlahRute -= j;
      }
    }

    var passengerData = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: fare * Math.abs(jumlahRute)
    };

    result.push(passengerData);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]