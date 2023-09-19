"use strict";

/*------------------------------NAME--------------------------------*/
function checkName() {
  var username = prompt('What is your name?');

  if (username && username.length <= 3 || username == null) {
    console.log("This name is too short!");
    checkName();
  } else {
    console.log("Hello, ".concat(username, "!"));
  }
}
/*------------------------------AGE--------------------------------*/


function checkAge() {
  var userBirthday = parseInt(prompt('Please, add the year of your birth'));
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  if (!isNaN(userBirthday)) {
    if (currentYear < userBirthday) {
      console.log('Oops! This year in not valid. Please, try again');
      checkAge();
    } else {
      var userAge = currentYear - userBirthday;
      console.log("You are ".concat(userAge, " years old!"));
    }
  } else {
    console.log('Oops! This year in not valid. Please, try again');
    checkAge();
  }
}
/*-----------------------------PERIMETER--------------------------------*/


function countPerimeter() {
  var sideLength = parseInt(prompt('What is the length of a side of a square?'));

  if (!isNaN(sideLength)) {
    if (sideLength <= 0) {
      console.log('Oops! This value should be bigger than 1');
    } else {
      var squarePerimeter = sideLength * 4;
      console.log("The perimeter of this square is ".concat(squarePerimeter, "!"));
    }
  } else {
    console.log('Please, enter valid number (from 1 to infinity)');
    countPerimeter();
  }
}
/*-----------------------------CIRCLE--------------------------------*/


function countCircle() {
  var circleDiameter = parseInt(prompt('What is the diameter of the circle?'));

  if (!isNaN(circleDiameter)) {
    if (circleDiameter <= 0) {
      console.log('Oops! This value should be bigger than 1');
    } else {
      var circleRadius = circleDiameter / 2;
      var pi = Math.PI;
      var circleSquare = parseInt(pi * Math.pow(circleRadius, 2));
      console.log("The area of this circle is ".concat(circleSquare, "!"));
    }
  } else {
    console.log('Please, enter valid number (from 1 to infinity)');
  }
}
/*-----------------------------SPEED--------------------------------*/


function countSpeed() {
  var distance = parseInt(prompt('What is the distance between location A and location B in kilometers?'));

  if (isNaN(distance) || distance <= 0) {
    console.log('Not valid distance (in km).');
  } else {
    console.log("The distance - ".concat(distance, " kilometers"));
  }

  var time = parseInt(prompt('How many hours do you have to get to your destination?'));

  if (isNaN(time) || time <= 0) {
    console.log('Not valid time (in hours).');
  } else {
    console.log("Time (in hours) - ".concat(time));
  }

  if (isNaN(distance) || distance <= 0 || isNaN(time) || time <= 0) {
    console.log('Please, try again and enter valid data.');
  } else {
    var speed = parseInt(distance / time);
    console.log("The speed of your transport should be - ".concat(speed, " km/hour"));
  }
}
/*-----------------------------CURRENCY--------------------------------*/


function currencyConvert() {
  var usd = prompt('Enter the quantity of USD you need to convert into EUR');

  if (!isNaN(usd)) {
    if (usd <= 0) {
      console.log('Oops! This value should be bigger than 1');
    } else {
      var eur = usd * 0.9136;
      console.log("".concat(eur, " \u20AC"));
    }
  } else {
    console.log('Please, enter valid number (from 1 to infinity)');
  }
}
/*-----------------------------820MB--------------------------------*/


function filesQuantity() {
  var userGb = parseInt(prompt('How much memory is on your flash drive (in GB)?'));

  if (!isNaN(userGb)) {
    if (userGb <= 0) {
      console.log('Oops! This value should be bigger than 0');
    } else {
      var userMb = userGb * 1000;
      var filesAmmount = parseInt(userMb / 820);
      console.log("You can save up to ".concat(filesAmmount, " 820MB-files"));
    }
  } else {
    console.log('Please, enter valid number (from 1 to infinity)');
  }
}
/*-----------------------------CHOCKOLATE BARS--------------------------------*/


function chockoQuantity() {
  var userMoney = parseInt(prompt('How much money do you have (in UAH)?'));

  if (isNaN(userMoney) || userMoney <= 0) {
    console.log('Not valid ammount. Try again');
    chockoQuantity();
  } else {
    console.log("Your money - ".concat(userMoney, " UAH"));
  }

  var chocko = parseInt(prompt('What is the price of one chocko-bar (in UAH)?'));

  if (isNaN(chocko) || chocko <= 0) {
    console.log('This quantity is not valid');
  } else {
    console.log("Here is the price for one chocko-bar ".concat(chocko, " UAH"));
  }
}
/*-----------------------------DEPOSIT 5%--------------------------------*/


function countIncome() {
  var userUah = parseInt(prompt('How much money would you like to invest (in UAH)?'));

  if (!isNaN(userUah)) {
    if (userUah <= 100) {
      console.log('Oops! The minimum amount is 100 UAH.');
    } else {
      var userIncome = parseInt(userUah * 0.05 * (2 / 12));
      console.log("Your income is - ".concat(userIncome, " UAH!"));
    }
  } else {
    console.log('This should be a number (100 is minimum).');
  }
}
/*-----------------------------123 - 321--------------------------------*/


function reversedNumber() {
  var yourNumber = parseInt(prompt('Please, enter your 3-digit number'));

  if (isNaN(yourNumber) || yourNumber.length < 3) {
    console.log('This data is not valid. Enter 3-digit number');
  } else {
    var firstDigit = parseInt(yourNumber / 100);
    var secondDigit = parseInt(yourNumber % 100 / 10);
    var thirdDigit = yourNumber % 10;
    console.log("New reversed number - ".concat(thirdDigit).concat(secondDigit).concat(firstDigit));
  }
}
/*----------------------------DATE + 1--------------------------------*/
// 01.01.2021 - 02.01.2021
// 31.12.2021 - 01.01.2022
//28.02.2020 - 29.02.2020 
//29.02.2020 - 01.03.2020 - any othe year mistake
// 30days: 4, 6, 9 , 11. other months - 31
//29.02.2021 - 01.03.2021


function calcDate() {
  var userDate = prompt('Add date');
  var dateArray = userDate.split('.');
  console.log(dateArray);
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day >= 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;
  }

  if (nextMonth > 12) {
    nextMonth = 1;
    nextDay = 1;
    nextYear++;
  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  console.log("Next date - ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(nextYear));
}