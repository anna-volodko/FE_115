"use strict";

var firstFraction = {
  numerator: 2,
  denominator: 4
};
var secondFraction = {
  numerator: 3,
  denominator: 7
};
var commonDenominator = firstFraction.denominator * secondFraction.denominator;
var newFirstNumerator = firstFraction.numerator * secondFraction.denominator;
var newSecondNumerator = secondFraction.numerator * firstFraction.denominator;

function toCommonDenominator() {
  console.log("Fraction 1: ".concat(newFirstNumerator, "/").concat(commonDenominator, ". Fraction 2: ").concat(newSecondNumerator, "/").concat(commonDenominator, "."));
}

function findCommonDivisor(a, b) {
  while (b !== 0) {
    var remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

var commonDivisor = findCommonDivisor(newFirstNumerator + newSecondNumerator, commonDenominator);
var simpleDenominator = commonDenominator / commonDivisor;

function fractionAddition() {
  var numeratorSum = (newFirstNumerator + newSecondNumerator) / commonDivisor;
  console.log("1st fraction + 2nd fraction = ".concat(numeratorSum, "/").concat(simpleDenominator));
}

function fractionSubtraction() {
  var numeratorSubtraction = (newFirstNumerator - newSecondNumerator) / commonDivisor;
  console.log("1st fraction - 2nd fraction = ".concat(numeratorSubtraction, "/").concat(simpleDenominator));
}

var numeratorMultiplication = firstFraction.numerator * secondFraction.numerator;
var denominatorMultiplication = firstFraction.denominator * secondFraction.denominator;
var commonDivisorMulti = findCommonDivisor(numeratorMultiplication, denominatorMultiplication);
var newNumMulti = numeratorMultiplication / commonDivisorMulti;
var newDenomMulti = denominatorMultiplication / commonDivisorMulti;

function fractionMultiplication() {
  console.log("1st fraction * 2nd fraction = ".concat(newNumMulti, "/").concat(newDenomMulti));
}

function fractionDivision() {
  var topDivision = firstFraction.numerator * secondFraction.denominator;
  var bottomDivision = firstFraction.denominator * secondFraction.numerator;
  var commonDivisorDivision = findCommonDivisor(topDivision, bottomDivision);
  var newNumDivision = topDivision / commonDivisorDivision;
  var newDenomDivision = bottomDivision / commonDivisorDivision;
  console.log("1st fraction : 2nd fraction = ".concat(newNumDivision, "/").concat(newDenomDivision));
}