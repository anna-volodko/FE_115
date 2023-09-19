"use strict";

/*----------------------------DATE + 1--------------------------------*/
// 01.01.2021 - 02.01.2021
// 31.12.2021 - 01.01.2022
//28.02.2020 - 29.02.2020
//29.02.2020 - 01.03.2020 - any othe year mistake
// 30days: 4, 6, 9 , 11. other months - 31
//29.02.2021 - 01.03.2021
function calcDate() {
  var userDate = prompt("Add date");
  var dateArray = userDate.split(".");
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
/*------------------------------------0-9 NUMBER----------------------------*/


function addSign() {
  var userNumber = parseInt(prompt("Add your number from this range - 0-9"));

  if (isNaN(userNumber)) {
    return false;
  }

  switch (userNumber) {
    case 1:
      console.log("!");
      break;

    case 2:
      console.log("@");
      break;

    case 3:
      console.log("#");
      break;

    case 4:
      console.log("$");
      break;

    case 5:
      console.log("%");
      break;

    case 6:
      console.log("^_^");
      break;

    case 7:
      console.log("&");
      break;

    case 8:
      console.log("*");
      break;

    case 9:
      console.log("(");
      break;

    case 0:
      console.log(")");
      break;

    default:
      console.log("Try again with this range of numbers - 0-9");
      break;
  }
}
/*----------------------------------TEEN/ADULT/KID----------------------------*/


function checkAge() {
  var userAge = parseInt(prompt("Add your age"));

  if (isNaN(userAge) || userAge <= 0) {
    return false;
  }

  if (userAge > 0 && userAge <= 11) {
    console.log("You are a kid");
  } else if (userAge > 11 && userAge <= 17) {
    console.log("You are a teenager");
  } else if (userAge > 17 && userAge <= 59) {
    console.log("You are an adult");
  } else if (userAge >= 60) {
    console.log("Superstar!");
  }
}
/*---------------------------------RANGE OF NUMBERS - SUM---------------------------*/
//Підрахуй суму всіх чисел в заданому користувачем діапазоні.
//25, 50
//26+27+28+...48+49


function sumOfNumbers() {
  var firstNumber = parseInt(prompt("Add first number"));
  var secondNumber = parseInt(prompt("Add second number"));
  var sum = 0;

  for (var _i = firstNumber; _i <= secondNumber; _i++) {
    sum += _i;
  }

  console.log("The sum from this range of numbers is ".concat(sum));
}
/*---------------------------------RANGE OF NUMBERS - SUM---------------------------*/
//Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function findDivisor() {
  var firstNumber = parseInt(prompt("Введіть більше число"));
  var secondNumber = parseInt(prompt("Введіть менше число"));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return false;
  }

  var a = firstNumber;
  var b = secondNumber;

  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
    console.log("\u041D\u0421\u0414 - ".concat(temp));
  }
}
/*---------------------------------RANGE OF NUMBERS - SUM---------------------------*/
//Запитай у користувача число і виведи всі дільники цього числа.
// 6 - 6,4,2,1
//10 - 10,5,2,1
//a % b = 0


function divisor() {
  var firstNumber = parseInt(prompt("Введіть число"));

  if (isNaN(firstNumber)) {
    console.log("Це не число, тепер введіть число");
    return;
  }

  for (var _i2 = 0; _i2 <= firstNumber; _i2++) {
    if (firstNumber % _i2 === 0) {
      console.log(_i2);
    }
  }
}
/*---------------------------------SUM WITH DISCOUNT----------------------------------*/


function sumWithDiscount() {
  var userSum = parseInt(prompt("Яка сума вашої покупки (у гривнях?"));

  if (isNaN(userSum) || userSum <= 0) {
    console.log("Це не число, тепер введіть число");
    return;
  }

  var discount = 0;

  if (userSum < 200) {
    console.log("Ця сума не підлягає знижці.");
    return;
  } else if (userSum >= 200 && userSum < 300) {
    discount = 0.03;
  } else if (userSum >= 300 && userSum < 500) {
    discount = 0.05;
  } else {
    discount = 0.07;
  }

  var withDiscount = parseInt(userSum - userSum * discount);
  console.log("\u0421\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E - ".concat(withDiscount));
}
/*---------------------------------10 NUMBERS----------------------------------*/
//додатні
//від'ємні
//нулі
//парні
//непарні


function calcNumbers() {
  var plus = 0;
  var minus = 0;
  var zeros = 0;
  var even = 0;
  var odd = 0;

  for (var _i3 = 1; _i3 <= 10; _i3++) {
    userNumbers = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u2116".concat(_i3, ":")));
    console.log(userNumbers);

    if (isNaN(userNumbers)) {
      console.log("Це не число, тепер введіть число.");
      _i3--;
      continue;
    }

    if (userNumbers > 0) {
      plus++;
    } else if (userNumbers < 0) {
      minus++;
    } else if (userNumbers === 0) {
      zeros++;
    }

    if (userNumbers % 2 === 0 && userNumbers !== 0) {
      even++;
    } else if (userNumbers % 2 !== 0 && userNumbers !== 0) {
      odd++;
    }
  }

  console.log("\u0414\u043E\u0434\u0430\u0442\u043D\u0456 - ".concat(plus, ", \u0432\u0456\u0434'\u0454\u043C\u043D\u0456 - ").concat(minus, ", \u043D\u0443\u043B\u0456 - ").concat(zeros, ", \u043F\u0430\u0440\u043D\u0456 - ").concat(even, ", \u043D\u0435\u043F\u0430\u0440\u043D\u0456 - ").concat(odd, "."));
}
/*---------------------------------НАСТУПНИЙ ДЕНЬ ТИЖНЯ----------------------------------*/


function nextDay() {
  var dayOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
  var order = 0;

  while (order < dayOfWeek.length) {
    var day = dayOfWeek[order];
    var okayClick = confirm("".concat(day, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));

    if (okayClick) {
      order = (order + 1) % dayOfWeek.length;
    } else {
      break;
    }
  }
}
/*---------------------------------ТАБЛИЦЯ МНОЖЕННЯ----------------------------------*/
// таблиця множення для 2 3 4 5 6 7 8 9
// множимо на 1 2 3 4 5 6 7 8 9 10


function multiplyNumbers() {
  var n = 2;
  var i = 1;

  for (n = 2; n <= 9; n++) {
    for (i = 1; i <= 10; i++) {
      var multiplication = n * i;
      console.log("".concat(n, " \u043F\u043E\u043C\u043D\u043E\u0436\u0438\u0442\u0438 \u043D\u0430 ").concat(i, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 = ").concat(multiplication));
    }
  }
}
/*---------------------------------0 / -1 / 1---------------------------------*/
// 2 < 4 = -1
// 4 > 2 = 1
// 4=4 = 0


function compareNumbers() {
  var firstNumber = parseInt(prompt('Веддіть перше число'));
  var secondNumber = parseInt(prompt('Веддіть друге число'));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('Це не число, тепер введіть число');
  }

  if (firstNumber < secondNumber) {
    console.log(parseInt(-1));
  } else if (firstNumber > secondNumber) {
    console.log(parseInt(1));
  } else if (firstNumber === secondNumber) {
    console.log(parseInt(0));
  }
}
/*---------------------------------1,4,9 = 149---------------------------------*/


function connectNumbers() {
  var firstNumber = prompt('Веддіть перше число');
  var secondNumber = prompt('Веддіть друге число');
  var thirdNumber = prompt('Веддіть третє число');

  if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    console.log('Це не число, тепер введіть число');
  } else if (firstNumber < 0 || secondNumber < 0 || thirdNumber < 0) {
    console.log('Можна вводити лише додатні числа. Веддіть числа ще раз.');
  } else {
    console.log("".concat(firstNumber).concat(secondNumber).concat(thirdNumber));
  }
}
/*---------------------------------ВГАДАЙ ЧИСЛО---------------------------------*/


var minValue = 0;
var maxValue = 100;
var steps = 0;

function guessNumber(from, to) {
  var middle = parseInt((to - from) / 2 + from);
  var isSuccess = confirm("Your number is ".concat(middle, "?"));

  if (isSuccess) {
    console.log("Thanks for a game! We spent ".concat(steps, " steps."));
    return false;
  } else {
    steps++;
    var isLarger = confirm("Your number is larger than ".concat(middle, "?"));
    isLarger ? guessNumber(middle, to) : guessNumber(from, middle);
  }
}
/*---------------------------------ПАЛІНДРОМ---------------------------------*/


function checkPalindrome() {
  var number = prompt("Add 5-digit number");

  for (var _i4 = 0; _i4 < number.length; _i4++) {
    if (number[_i4] !== number[number.length - 1 - _i4]) {
      console.log('It is not a palindrome');
      return false;
    } else {
      console.log('It is palindrome');
    }
  }
}
/*---------------------------------ДОСКОНАЛЕ ЧИСЛО---------------------------------*/


function ifPurfectNumber(number) {
  var totalDivider = 0;

  for (var _i5 = 1; _i5 <= number / 2; _i5++) {
    if (number % _i5 === 0) {
      totalDivider = totalDivider + _i5; // console.log(totalDivider);
    }
  }

  return number === totalDivider;
}

function showResult() {
  var userNumber = parseInt(prompt('Введіть ваше число'));
  console.log(ifPurfectNumber(userNumber) ? 'число досконале' : 'число не досконале');
}
/*---------------------------------ДОСКОНАЛІ ЧИСЛА З ДІАПАЗОНУ---------------------------------*/


function purfectInRange() {
  var min = parseInt(prompt('Введіть мінімальне число для діапазону'));
  var max = parseInt(prompt('Введіть максимальне число для діапазону'));
  var result = '';

  for (var _i6 = min; _i6 <= max; _i6++) {
    if (ifPurfectNumber(_i6)) {
      result += _i6 + ' ';
    }
  }

  console.log("".concat(result, " - \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430"));
}
/*---------------------------------ФАКТОРІАЛ---------------------------------*/


function findFactorial() {
  var userNumber = parseInt(prompt('Введіть додатнє число'));

  if (isNaN(userNumber) || userNumber <= 0) {
    console.log('Введіть коректні дані');
    return;
  }

  var result = 1;

  for (i = 1; i <= userNumber; i++) {
    result *= i;
  }

  console.log("\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0447\u0438\u0441\u043B\u0430 ".concat(userNumber, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(result));
}
/*---------------------------------ПРЯМОКУТНИК І КВАДРАТ---------------------------------*/
//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function getSquare() {
  var width = parseInt(prompt('Введіть ширину фігури'));
  var height = parseInt(prompt('Введіть висоту фігури'));

  if (!width || !height) {
    console.log('Введіть коректні дані');
  } else if (!height || height === width) {
    var figureArea = width * width;
    console.log("\u041F\u043B\u043E\u0449\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 - ".concat(figureArea));
  } else if (isNaN(width) || isNaN(height)) {
    console.log('Введіть коректні дані');
  } else {
    var _figureArea = height * width;

    console.log("\u041F\u043B\u043E\u0449\u0430 \u0444\u0456\u0433\u0443\u0440\u0438 - ".concat(_figureArea));
  }
}