
// Question1
let n1 = 2024
function isLeapYear(n) {
    return ((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0 ))
}

console.log(isLeapYear(n1))

// ===============================


// Question2
let temp = 60
let converTo = 'fahrenheit'
function tempratureConvert(converTo, temp) {
    if ('celsius' === converTo) {
        let k = 5 * (temp - 32) / 9;
        console.log(`${temp}\u00B0F is ${k}\u00B0C`)
    }
    else {
        let k = ((9 * temp) / 5) + 32
        console.log(`${temp}\u00B0C is ${k}\u00B0F`)
    }
}
tempratureConvert(converTo, temp)

// ================================


// Question3
let n2 = 5
function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(n2))

