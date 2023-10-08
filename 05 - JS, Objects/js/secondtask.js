const fraction = {
    numerator: 2,
    denominator: 3,
    showValue() {
        console.log(`Here is a fraction - ${this.numerator}/${this.denominator}`);
    },
    findGCD(a, b) {
        if(a == 0) {
            return b
        }
        return this.findGCD(b % a, a)
    },
    findLocalNumerator(n,d) {
        return n * d
    },
    addition(n,d) {
        let localDenominator = 1;
        if(this.denominator === d) {
            localDenominator = this.denominator
        } else {
            localDenominator = this.denominator * d;
            this.numerator = this.numerator * (localDenominator / this.denominator);
            this.denominator = localDenominator;

            n = n * (localDenominator / d);
            d = localDenominator;
            const addingResultNumerator = this.numerator + n;
            const gcd = this.findGCD(addingResultNumerator,d);
            console.log(`The result is ${addingResultNumerator / gcd}/${d / gcd}`);
        }
    },
    substraction(n,d) {
        let localDenominator = 1;
        if(this.denominator === d) {
            localDenominator = this.denominator
        } else {
            localDenominator = this.denominator * d;
            this.numerator = this.numerator * (localDenominator / this.denominator);
            this.denominator = localDenominator;

            n = n * (localDenominator / d);
            d = localDenominator;
            const substractionResultNumerator = this.numerator - n;
            const gcd = this.findGCD(substractionResultNumerator,d);
            console.log(`The result is ${substractionResultNumerator / gcd}/${d / gcd}`);
        }
    },
    multiplication(n,d) {
        multiplicationNumerator = this.numerator * n;
        multiplicationDenominator = this.denominator * d;
        const gcd = this.findGCD(multiplicationNumerator,multiplicationDenominator);
        console.log(`The result is ${multiplicationNumerator / gcd} / ${multiplicationDenominator / gcd}`)
    },
    division(n,d) {
        const topDivision = this.numerator * d;
        const bottomDivision = this.denominator * n;
        const gcd = this.findGCD(topDivision,bottomDivision);
        const newNumDivision = topDivision / gcd;
        const newDenomDivision = bottomDivision / gcd;
        console.log(`The result is ${newNumDivision}/${newDenomDivision}`);
    }
}














// const firstFraction = {
//     numerator: 2,
//     denominator: 4,
// }
// const secondFraction = {
//     numerator: 3,
//     denominator: 7,
// }
// const commonDenominator = firstFraction.denominator * secondFraction.denominator;
// const newFirstNumerator = firstFraction.numerator * secondFraction.denominator;
// const newSecondNumerator = secondFraction.numerator * firstFraction.denominator;
// function toCommonDenominator() {
//     console.log(`Fraction 1: ${newFirstNumerator}/${commonDenominator}. Fraction 2: ${newSecondNumerator}/${commonDenominator}.`);
// }


// function findCommonDivisor(a, b) {
//     while (b !== 0) {
//         const remainder = a % b;
//         a = b;
//         b = remainder;
//     }
//     return a;
// }
// const commonDivisor = findCommonDivisor(newFirstNumerator + newSecondNumerator, commonDenominator);
// const simpleDenominator = commonDenominator / commonDivisor;
// function fractionAddition() {
//     const numeratorSum = (newFirstNumerator + newSecondNumerator) / commonDivisor;
//     console.log(`1st fraction + 2nd fraction = ${numeratorSum}/${simpleDenominator}`);
// }


// function fractionSubtraction() {
//     const numeratorSubtraction = (newFirstNumerator - newSecondNumerator) / commonDivisor;
//     console.log(`1st fraction - 2nd fraction = ${numeratorSubtraction}/${simpleDenominator}`);
// }

// const numeratorMultiplication = firstFraction.numerator * secondFraction.numerator;
// const denominatorMultiplication = firstFraction.denominator * secondFraction.denominator;
// const commonDivisorMulti = findCommonDivisor(numeratorMultiplication,denominatorMultiplication);
// const newNumMulti = numeratorMultiplication / commonDivisorMulti;
// const newDenomMulti = denominatorMultiplication / commonDivisorMulti;
// function fractionMultiplication() {
//     console.log(`1st fraction * 2nd fraction = ${newNumMulti}/${newDenomMulti}`);
// }

// function fractionDivision(){
//     const topDivision = firstFraction.numerator * secondFraction.denominator;
//     const bottomDivision = firstFraction.denominator * secondFraction.numerator;
//     const commonDivisorDivision = findCommonDivisor(topDivision,bottomDivision);
//     const newNumDivision = topDivision / commonDivisorDivision;
//     const newDenomDivision = bottomDivision / commonDivisorDivision;
//     console.log(`1st fraction : 2nd fraction = ${newNumDivision}/${newDenomDivision}`);
// }

// function speak(f){
// 		var d=new SpeechSynthesisUtterance();
// 		var e=speechSynthesis.getVoices();
// 		d.voice=e[2];
//     d.voiceURI="native";
// 		d.volume=1;
// 		d.rate=1;
// 		d.pitch=1;
// 		d.text=f;
// 		d.lang="en-EN";
// 		speechSynthesis.speak(d)
// 	}
// 	speak("Hello my master!");