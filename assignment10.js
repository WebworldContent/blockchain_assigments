// Question1
/*
No they are not same , 
Higher order functions are functions that takes other functions and parameter or could return a function
example:- forEach loop , map , filter are higher order functions that takes functions we can say them callbacks function
 where as Callbacks are function that are = passed to other functions as parameters
callbacks function comes into play in asynchonous functionality of javascript
bcoz they are called after task is done
Javascript main feature , asynchonous functionality handling is reason of this callback functions
Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed
*/

// Question 2
// Yes Filter is higher order function , bcoz it takes function as argument

// Question 3
let arr = [2,3,4,5,6,7]
function filterOut(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}

const isEven = (data) => data % 2 == 0  // isEven is passed as callback in filterOut higher oder function
console.log(filterOut(arr, isEven))

// Question 4
/* 
As per code given it will throw error that I is not defined here fn(arr[I])
but if we change it to small (i) in fn(arr[i]);
then it will print :-
Hello John
Hello Tina
Hello Kale
Hello Max
*/
