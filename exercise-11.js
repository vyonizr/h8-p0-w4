function shoppingTime(memberId, money) {
  // you can only write your code here!
  /*
  Sepatu brand Stacattu seharga 1500000
  Baju brand Zoro seharga 500000
  Baju brand H&N seharga 250000
  Sweater brand Uniklooh seharga 175000
  Casing Handphone seharga 50000
  */
  if (memberId === "" || memberId === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  var catalogues = [
    ["Sepatu Stacattu", 1500000],
    ["Baju Zoro", 500000],
    ["Baju H&N", 250000],
    ["Sweater Uniklooh", 175000],
    ["Casing Handphone", 50000]
  ]

  var cheapestItem = catalogues[0][1];

  for (var i = 0; i < catalogues.length; i++) {
    if (cheapestItem > catalogues[i][1]) {
      cheapestItem = catalogues[i][1]
    }
  }

  if (money < cheapestItem) {
    return "Mohon maaf, uang tidak cukup";
  }

  var remainingMoney = money;
  var saleDetails = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: remainingMoney
  }

  for (var j = 0; j < catalogues.length; j++) {
    if (remainingMoney >= catalogues[j][1]) {
      saleDetails.listPurchased.push(catalogues[j][0]);
      saleDetails.changeMoney -= catalogues[j][1];
    }
  }

  return saleDetails;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja