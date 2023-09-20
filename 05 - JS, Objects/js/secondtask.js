const firstFraction = {
    numerator: 2,
    denominator: 4,
}
const secondFraction = {
    numerator: 3,
    denominator: 7,
}
const commonDenominator = firstFraction.denominator * secondFraction.denominator;
const newFirstNumerator = firstFraction.numerator * secondFraction.denominator;
const newSecondNumerator = secondFraction.numerator * firstFraction.denominator;
function toCommonDenominator() {
    console.log(`Fraction 1: ${newFirstNumerator}/${commonDenominator}. Fraction 2: ${newSecondNumerator}/${commonDenominator}.`);
}


function findCommonDivisor(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
const commonDivisor = findCommonDivisor(newFirstNumerator + newSecondNumerator, commonDenominator);
const simpleDenominator = commonDenominator / commonDivisor;
function fractionAddition() {
    const numeratorSum = (newFirstNumerator + newSecondNumerator) / commonDivisor;
    console.log(`1st fraction + 2nd fraction = ${numeratorSum}/${simpleDenominator}`);
}


function fractionSubtraction() {
    const numeratorSubtraction = (newFirstNumerator - newSecondNumerator) / commonDivisor;
    console.log(`1st fraction - 2nd fraction = ${numeratorSubtraction}/${simpleDenominator}`);
}

const numeratorMultiplication = firstFraction.numerator * secondFraction.numerator;
const denominatorMultiplication = firstFraction.denominator * secondFraction.denominator;
const commonDivisorMulti = findCommonDivisor(numeratorMultiplication,denominatorMultiplication);
const newNumMulti = numeratorMultiplication / commonDivisorMulti;
const newDenomMulti = denominatorMultiplication / commonDivisorMulti;
function fractionMultiplication() {
    console.log(`1st fraction * 2nd fraction = ${newNumMulti}/${newDenomMulti}`);
}

function fractionDivision(){
    const topDivision = firstFraction.numerator * secondFraction.denominator;
    const bottomDivision = firstFraction.denominator * secondFraction.numerator;
    const commonDivisorDivision = findCommonDivisor(topDivision,bottomDivision);
    const newNumDivision = topDivision / commonDivisorDivision;
    const newDenomDivision = bottomDivision / commonDivisorDivision;
    console.log(`1st fraction : 2nd fraction = ${newNumDivision}/${newDenomDivision}`);
}
