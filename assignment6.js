// Question1

class Rectangle {
    constructor(length, breath) {
        this.length = length
        this.breath = breath
    }
    
    getArea() {
        return this.length * this.breath
    }
}

class Square extends Rectangle {
   
    constructor(side) {
        super(side, side)
    }
}

const square = new Square(4)
console.log(square.getArea())

// =======================================

// Question2

function find_largest(ar, kth_largest) {
    const sortedAr = ar.sort((a, b) => {
        return a - b;
    })
    return sortedAr[ar.length - kth_largest]
}

let ar = [3,45,6,7,23,5,7,8]
console.log(find_largest(ar, 3))

// =======================================

// Question3

function computeDash(n) {
    let st = ''
    let f = 0
    while (n > 0) {
        let k = n % 10
        if (k % 2 == 0) {
            f += 1
        } else {
            f = 0
        }
        if (f === 2) {
            st = k + '-' + st
            f = 0
        } else {
            st = k + st
        }
        n = Math.floor(n / 10)
    }
    if (f == 1) {   // this condition is for condition where zero (0) comes as first digit
        st = '0-' + st
    }
    return st
}
let n = 02546489097886
console.log(computeDash(n))










