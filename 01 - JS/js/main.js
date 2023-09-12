/*------------------------------NAME--------------------------------*/
function checkName() {
    const username = prompt('What is your name?');
    if (username && username.length <= 3 || username == null) {
       console.log(`This name is too short!`);
       checkName();
    } else {
        console.log(`Hello, ${username}!`)
    }
}
/*------------------------------AGE--------------------------------*/
function checkAge() {
    const userBirthday = parseInt(prompt('Please, add the year of your birth'));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (!isNaN(userBirthday)) {
        if (currentYear < userBirthday) {
            console.log('Oops! This year in not valid. Please, try again');
            checkAge();
        } else {
            const userAge = currentYear - userBirthday;
            console.log(`You are ${userAge} years old!`);
        }
    } else {
        console.log('Oops! This year in not valid. Please, try again');
        checkAge();
    }
}
/*-----------------------------PERIMETER--------------------------------*/
function countPerimeter() {   
    const sideLength = parseInt(prompt('What is the length of a side of a square?'));    
        if (!isNaN(sideLength)) {
            if (sideLength <= 0) {
                console.log('Oops! This value should be bigger than 1');
            } else {
                const squarePerimeter = sideLength*4;
                console.log(`The perimeter of this square is ${squarePerimeter}!`);
            }
        } else {
            console.log('Please, enter valid number (from 1 to infinity)');
            countPerimeter();
        }
}
/*-----------------------------CIRCLE--------------------------------*/
function countCircle() {    
    const circleDiameter = parseInt(prompt('What is the diameter of the circle?'));   
    
    if (!isNaN(circleDiameter)) {
        if (circleDiameter <= 0) {
            console.log('Oops! This value should be bigger than 1');
        } else {
            const circleRadius = circleDiameter/2;
            const pi = Math.PI;
            const circleSquare = parseInt(pi * Math.pow(circleRadius, 2));
            console.log(`The area of this circle is ${circleSquare}!`);
        }
    } else {
        console.log('Please, enter valid number (from 1 to infinity)');
    }
}
/*-----------------------------SPEED--------------------------------*/
function countSpeed() {
    const distance = parseInt(prompt('What is the distance between location A and location B in kilometers?'));
    if (isNaN(distance) || distance <= 0) {
        console.log('Not valid distance (in km).');
    } else {
        console.log(`The distance - ${distance} kilometers`);
    }

    const time = parseInt(prompt('How many hours do you have to get to your destination?'));
    if (isNaN(time) || time <= 0) {
        console.log('Not valid time (in hours).');
    } else {
        console.log(`Time (in hours) - ${time}`);
    }

    if ((isNaN(distance) || distance <= 0) || (isNaN(time) || time <= 0)) {
        console.log('Please, try again and enter valid data.');
    } else {
    const speed = parseInt(distance/time);
    console.log(`The speed of your transport should be - ${speed} km/hour`);
    }   
}
/*-----------------------------CURRENCY--------------------------------*/
function currencyConvert() {
    const usd = prompt('Enter the quantity of USD you need to convert into EUR');
    if (!isNaN(usd)) {
        if (usd <= 0) {
            console.log('Oops! This value should be bigger than 1');
        } else {
            const eur = usd * 0.9136;
            console.log(`${eur} €`);
        } 
    } else {
        console.log('Please, enter valid number (from 1 to infinity)');
    }
}    
/*-----------------------------820MB--------------------------------*/
function filesQuantity() {
const userGb = parseInt(prompt('How much memory is on your flash drive (in GB)?'));

if (!isNaN(userGb)) {
    if (userGb <= 0) {
        console.log('Oops! This value should be bigger than 0');
    } else {
        const userMb = userGb * 1000;
        const filesAmmount = parseInt(userMb / 820);
        console.log(`You can save up to ${filesAmmount} 820MB-files`);
    }
} else {
    console.log('Please, enter valid number (from 1 to infinity)');
}
}
/*-----------------------------CHOCKOLATE BARS--------------------------------*/
function chockoQuantity() {
    const userMoney = parseInt(prompt('How much money do you have (in UAH)?'));
    if (isNaN(userMoney) || userMoney <= 0) {
        console.log('Not valid ammount. Try again');
        chockoQuantity();
    } else {
        console.log(`Your money - ${userMoney} UAH`);
    }
    const chocko = parseInt(prompt('What is the price of one chocko-bar (in UAH)?'));
    if (isNaN(chocko) || chocko <= 0) {
        console.log('This quantity is not valid');
    } else {
        console.log(`Here is the price for one chocko-bar ${chocko} UAH`);
    }

    
}
/*-----------------------------DEPOSIT 5%--------------------------------*/
function countIncome() {
    const userUah = parseInt(prompt('How much money would you like to invest (in UAH)?'));
    
    if (!isNaN(userUah)) {
        if (userUah <= 100) {
            console.log('Oops! The minimum amount is 100 UAH.');
        } else {
            const userIncome = parseInt(userUah * 0.05 * (2/12));
            console.log(`Your income is - ${userIncome} UAH!`);
        }
    } else {
        console.log('This should be a number (100 is minimum).');
    } 
}
/*-----------------------------123 - 321--------------------------------*/
function reversedNumber() {
const yourNumber = parseInt(prompt('Please, enter your 3-digit number'));
if (isNaN(yourNumber) || yourNumber.length < 3) {
    console.log('This data is not valid. Enter 3-digit number');
} else {
    const firstDigit = parseInt(yourNumber / 100);
    const secondDigit = parseInt(yourNumber % 100 / 10);
    const thirdDigit = (yourNumber % 10);
    console.log(`New reversed number - ${thirdDigit}${secondDigit}${firstDigit}`);
}   
}