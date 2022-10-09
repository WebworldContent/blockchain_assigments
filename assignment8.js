// Question 1
// No , bcoz javascript set contains unique values

// Question 2
// a)
let s = new Set()
// b)
s.add(1)
s.add(2)
s.add(3)
console.log(s)
// c)
s.delete(2)
console.log(s)

// Question 3
let st = new Set()
for (let i = 0 ; i < 4; i++) {
    let rand = Math.ceil(Math.random() * 10)
    st.add(rand)
}
console.log(st)
console.log(st.has(8))

