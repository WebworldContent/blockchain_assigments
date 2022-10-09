// Question1
function truncateString(s) {
    if (s.length > 4) {
        return `${s.slice(0,4)}...`
    }
}
console.log(truncateString('icecreame'))

// Question2

function removeSpaces(s) {
    return s.replace(/\s+/g, '')
}
console.log(removeSpaces(' Hello  world '))


// Question3

function replace2words(s) {
    find = s.search(/\s+/g)
    if (find !== -1) {
        return `${s.slice(find)} ${s.slice(0,find)}`
    }
}

console.log(replace2words('Hello world'))

// Question4

function replaceAs(s) {
    return s.replace(/[A-a]+/g,'x')
}
console.log(replaceAs('Appla'))

// Question5
// we can use split() method to convert string into array
console.log('Helloword'.split(''))

// Question6
// we can use indexOf() method to check specific text in string of words
// if not found it will throw -1
console.log('hello world how are you'.indexOf("are"))

// Question7
// we can break string into new line with \n
console.log("Hello World!\nThis is my string")

// Question8
function checkFirstChar(s) {
   return s[0] === s[0].toLowerCase()
}
console.log(checkFirstChar('Orange'))

// Question10

function processString(s) {
    // a)
    console.log(s.toUpperCase())
    // b)
    console.log(s[0].toUpperCase())
    // c)
    console.log(s.toLowerCase())

    // d)
    let slen = s.length
    console.log(`${s.slice(slen)} ${s.slice(0,slen)}`)

    // f)
    let strArray = s.split('')
    let revArray = strArray.reverse()
    console.log(revArray.join(''))
}
processString('hello world')
