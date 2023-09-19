/*----------------------------DATE + 1--------------------------------*/
// 01.01.2021 - 02.01.2021
// 31.12.2021 - 01.01.2022
//28.02.2020 - 29.02.2020
//29.02.2020 - 01.03.2020 - any othe year mistake
// 30days: 4, 6, 9 , 11. other months - 31
//29.02.2021 - 01.03.2021

function calcDate() {
  const userDate = prompt("Add date");
  const dateArray = userDate.split(".");
  console.log(dateArray);
  const day = +dateArray[0];
  const month = +dateArray[1];
  const year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  let nextDay = day + 1;
  let nextMonth = month;
  let nextYear = year;
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
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
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

  const addZero = (n) => (n < 10 ? `0${n}` : n);
  console.log(
    `Next date - ${addZero(nextDay)}.${addZero(nextMonth)}.${nextYear}`
  );
}
/*------------------------------------0-9 NUMBER----------------------------*/
function addSign() {
  const userNumber = parseInt(prompt("Add your number from this range - 0-9"));
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
  const userAge = parseInt(prompt("Add your age"));
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
  const firstNumber = parseInt(prompt("Add first number"));
  const secondNumber = parseInt(prompt("Add second number"));
  let sum = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }
  console.log(`The sum from this range of numbers is ${sum}`);
}
/*---------------------------------RANGE OF NUMBERS - SUM---------------------------*/
//Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function findDivisor() {
  let firstNumber = parseInt(prompt("Введіть більше число"));
  let secondNumber = parseInt(prompt("Введіть менше число"));
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return false;
  }
  let a = firstNumber;
  let b = secondNumber;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    console.log(`НСД - ${temp}`);
  }
}
/*---------------------------------RANGE OF NUMBERS - SUM---------------------------*/
//Запитай у користувача число і виведи всі дільники цього числа.
// 6 - 6,4,2,1
//10 - 10,5,2,1
//a % b = 0
function divisor() {
  const firstNumber = parseInt(prompt("Введіть число"));
  if (isNaN(firstNumber)) {
    console.log("Це не число, тепер введіть число");
    return;
  }
  for (let i = 0; i <= firstNumber; i++) {
    if (firstNumber % i === 0) {
      console.log(i);
    }
  }
}
/*---------------------------------SUM WITH DISCOUNT----------------------------------*/
function sumWithDiscount() {
  const userSum = parseInt(prompt("Яка сума вашої покупки (у гривнях?"));
  if (isNaN(userSum) || userSum <= 0) {
    console.log("Це не число, тепер введіть число");
    return;
  }
  let discount = 0;
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
  let withDiscount = parseInt(userSum - userSum * discount);
  console.log(`Сума зі знижкою - ${withDiscount}`);
}
/*---------------------------------10 NUMBERS----------------------------------*/
//додатні
//від'ємні
//нулі
//парні
//непарні
function calcNumbers() {
  let plus = 0;
  let minus = 0;
  let zeros = 0;
  let even = 0;
  let odd = 0;

  for (let i = 1; i <= 10; i++) {
    userNumbers = parseInt(prompt(`Введіть число №${i}:`));
    console.log(userNumbers);
    if (isNaN(userNumbers)) {
      console.log("Це не число, тепер введіть число.");
      i--;
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

  console.log(
    `Додатні - ${plus}, від'ємні - ${minus}, нулі - ${zeros}, парні - ${even}, непарні - ${odd}.`
  );
}
/*---------------------------------НАСТУПНИЙ ДЕНЬ ТИЖНЯ----------------------------------*/
function nextDay() {
  let dayOfWeek = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];
  let order = 0;
  while (order < dayOfWeek.length) {
    let day = dayOfWeek[order];
    let okayClick = confirm(`${day}. Хочеш побачити наступний день?`);

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
    let n = 2;
    let i = 1;
    for (n = 2; n <= 9; n++) {
    for (i = 1; i <= 10; i++) {
        let multiplication = n*i;
        console.log(`${n} помножити на ${i} дорівнює = ${multiplication}`);
    }
    }
}
/*---------------------------------0 / -1 / 1---------------------------------*/
// 2 < 4 = -1
// 4 > 2 = 1
// 4=4 = 0
function compareNumbers() {
    const firstNumber = parseInt(prompt('Веддіть перше число'));
    const secondNumber = parseInt(prompt('Веддіть друге число'));
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
    const firstNumber = prompt('Веддіть перше число');
    const secondNumber = prompt('Веддіть друге число');
    const thirdNumber = prompt('Веддіть третє число');
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        console.log('Це не число, тепер введіть число');
    } else if (firstNumber < 0 || secondNumber < 0 || thirdNumber < 0) {
        console.log('Можна вводити лише додатні числа. Веддіть числа ще раз.');
    } else {
        console.log(`${firstNumber}${secondNumber}${thirdNumber}`);
    }
}
/*---------------------------------ВГАДАЙ ЧИСЛО---------------------------------*/
const minValue = 0;
const maxValue = 100;
let steps = 0;
function guessNumber(from, to) {
  const middle = parseInt(((to - from) / 2) + from);
  const isSuccess = confirm(`Your number is ${middle}?`);

  if(isSuccess) {
    console.log(`Thanks for a game! We spent ${steps} steps.`);
    return false;
  } else {
    steps++;
    const isLarger = confirm(`Your number is larger than ${middle}?`);
    isLarger ? guessNumber(middle, to) : guessNumber(from, middle);
  }
}

/*---------------------------------ПАЛІНДРОМ---------------------------------*/
function checkPalindrome() {
  const number = prompt(`Add 5-digit number`);
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - 1 - i]) {
      console.log('It is not a palindrome');
      return false;
    } else {
      console.log('It is palindrome');
    }
  }
}
/*---------------------------------ДОСКОНАЛЕ ЧИСЛО---------------------------------*/
function ifPurfectNumber(number) {
  let totalDivider = 0;
  for (let i=1; i <= number/2; i++) {
    if (number%i===0) {
      totalDivider = totalDivider + i;
      // console.log(totalDivider);
    }
  }
  return number === totalDivider;
}
function showResult() {
  let userNumber = parseInt(prompt('Введіть ваше число'));
  console.log(ifPurfectNumber(userNumber) ? 'число досконале' : 'число не досконале');
}
/*---------------------------------ДОСКОНАЛІ ЧИСЛА З ДІАПАЗОНУ---------------------------------*/
function purfectInRange() {
  let min = parseInt(prompt('Введіть мінімальне число для діапазону'));
  let max = parseInt(prompt('Введіть максимальне число для діапазону'));
  let result = '';
  for (let i = min; i <=max; i++) {
    if(ifPurfectNumber(i)) {
      result+=i + ' ';
    }
  } console.log(`${result} - досконалі числа`);
}
/*---------------------------------ФАКТОРІАЛ---------------------------------*/
function findFactorial() {
  const userNumber = parseInt(prompt('Введіть додатнє число'));
  if (isNaN(userNumber) || userNumber <= 0) {
    console.log('Введіть коректні дані');
    return;
  }
  let result = 1;
  for (i=1; i <= userNumber; i++) {
    result *= i;
  }
  console.log(`Факторіал числа ${userNumber} дорівнює ${result}`);
}
/*---------------------------------ПРЯМОКУТНИК І КВАДРАТ---------------------------------*/
//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function getSquare() {
  const width = parseInt(prompt('Введіть ширину фігури'));
  const height = parseInt(prompt('Введіть висоту фігури'));
  if (!width || !height) {
    console.log('Введіть коректні дані');
  } else if (!height || height === width) {
    const figureArea = width * width;
    console.log(`Площа квадрата - ${figureArea}`);
  } else if (isNaN(width) || isNaN(height)) {
    console.log('Введіть коректні дані');
  } else {
    const figureArea = height * width;
    console.log(`Площа фігури - ${figureArea}`);
  }
}