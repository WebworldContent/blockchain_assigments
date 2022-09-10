// Question1
let s1 = 5
let s2 = 7
let s3 = 9
function checkTriangleType(s1,s2,s3) {
    if (s1 > 0 && s2 > 0 && s3 > 0) {
        if (s1 === s2 && s2 === s3) {
            return 'equilateral'
        }
        if (s1 === s2 || s2 === s3 || s3 === s1) {
            return 'isosceles'
        }
        return 'scalene'
    }
    return 'not a triangle'
}
console.log(checkTriangleType(s1,s2,s3))
// =========================================

// Question2
function studentScore(marks) {
    switch (marks) {
        case (90 <= marks && marks <= 100):
            console.log('S grade')
            break;
        case (80 <= marks && marks < 90):
            console.log('A grade')
            break;
        case (70 <= marks && marks < 80):
            console.log('B grade')
            break;
        case (60 <= marks && marks < 70):
            console.log('C grade')
            break;
        case (50 <= marks && marks < 60):
            console.log('D grade')
            break;
        case (40 <= marks && marks < 50):
            console.log('E grade')
            break;
        case (0 <= marks && marks < 40):
            console.log('Student has failed')
            break;
        default:
            console.log('Invalid marks')
            break;
    }
}
let marks = 54
studentScore(marks)
// =======================================

// Question3
function fun() {
    let s = 0
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            s += i
        }
    }
    return s
}
console.log(fun())

// ========================================

// Question4
function main(a,b) {
    for(let i = a; i < b; i++) {
        if (isPrime(i)) {
            console.log(fact(i))
        }
    }
}

function fact(n) {
    if (n === 1) {
        return n
    }
    return n * fact(n-1)
}

function isPrime(n) {
    if (n === 2) { return true}
    if (n > 2) {
        for(let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
            return true
        }
    }
    else {
        return false
    }
}

main(1,10)

// ======================================

