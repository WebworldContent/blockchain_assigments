// Question1
function pattern() {
    let st = ''
    let c = 0
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            c += 1
            st += c
        }
        st += "\n"
    }
    return st
}

console.log(pattern())

// =================================

// Question2

let n = 153
function isArmstrong(n) {
    let i = n
    let s = 0
    while (i > 0) {
        s = s + ((i % 10) ** 3) 
        i = Math.floor(i / 10)
    }
    return s === n 
}

console.log(isArmstrong(n))

// ==================================

// Question3
n = 145
function fact(n) {
    if (n === 1) {
        return n
    }
    return n * fact(n-1)
}
function isSpecial(n) {
    let i = n
    let s = 0
    while (i > 0) {
        s += fact(i % 10)
        i = Math.floor(i / 10)
    }
    return s === n
}
console.log(isSpecial(n))



