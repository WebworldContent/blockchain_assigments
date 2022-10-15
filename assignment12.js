// Question1
const input = { 
 id : [67, 48, 23],
 name_ : ['harsh', 'sam', 'devo'],
 salary : [240000, 323444, 100000],
}
const mp = new Map()
for (let i in input) {
    mp.set(i, input[i])
}
// a)
console.log(mp.get('id'))
// b)
console.log(mp.size)
// c)
mp.get('id').forEach((data, indx)=> {
    console.log(`${data} : ${mp.get('name_')[indx]}`)
})
// d)
const total = mp.get('salary').reduce((a,b)=> a+b)
const totalEmp = mp.get('id').length
console.log(total/totalEmp)
// =======================================================
// Question 2
// a)
const studentsData = {
    id: [1,2,3],
    name: ['Aamir', 'Enrique', 'Hitesh'],
    scores: [90, 53, 98]
}
const studmap = new Map()
for (let i in studentsData) {
    studmap.set(i, studentsData[i])
}
// b)
console.log(studmap.get('name'))
// c)
console.log(studmap.delete('scores'))
// d)
for (let [key,val] of studmap) {
    console.log(val)
    console.log(key, val)
    console.log(key, val, studmap)
}

// ===========================================================

// Question3

const userInput = [1,2,3,4,5]
const usermap = new Map()
const newarray = new Map()

usermap.set('original', userInput)
console.log(`Original array => ${usermap.get('original')}`)
newarray.set('newarray', usermap.get('original').map((data)=> data*data))
console.log(`Newarray => ${newarray.get('newarray')}`)
console.log(newarray.get('newarray'))

