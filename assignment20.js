// Question1
// answer :-  it will console log "Error1" then "Success 4"


// Question2
const time = (timeout, data) => new Promise((resolve => setTimeout(() => resolve(data), timeout)))

time(3000, 'hello world').then((res)=> console.log(res)).catch((err)=>console.error(err))

// Question3
// output:- 
// 2
// 4
// undefined  (here undefined is of finally callback of promise is run when promise is fullfiled or reject , it prints undefined bcoz finally callback do not receive parameter) 
// 8 


// Question 4
//output:- 
// start
// middle
// end
// 1
// success


// Question 5
const delay = (time) => new Promise((resolve => setTimeout(resolve, time)))
delay(1000).then((res)=> console.log(res)).catch((err)=>console.error(err))

// Question 6
// output :- SUCCESS!

// Question 7
// output:- it will be handled error as "Error: The Fails!" since it is thrown by Error object


// Question 8
// output:-
// start
// end
// resolve
// setTimeout
// since promise has priority over setTimeout


// Question 10
// output:- 
// start
// end
// 1
// 2
