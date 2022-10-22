// Question 1

// Async/Await increase the peroformance and reponsiveness of the application since bocz of handling with single threaded
// You can perform other work while waiting for the result from the long running task the CPU don't hv to switch between multiple thread
// It help us organize our code in clean and readable way
// Async is nothing more than syntactic sugar for promises.Makes makes async code look and run in synchornous fasion

// Question 2

// Yes async await function can work with promise chain
// example:-
async function fun() {
    let res = await Promise.resolve(8)
    return res
}
fun().then((res)=> console.log(res))

// Question 3
// Real world example can you our morning routine where we 
// 1)First take shower 
// 2)East breakfast
// 3)Groom Ourself
// 4)Read Newspaper
// here every task takes some time but has to be done sequenctially

// Question 4
// Answer :- 3


// Question 5
// output:-
// 1
// some error
// .then() function and will not go to catch bcoz .then() it self takes 2 function first one being 
// onFulfilled when success and second (onRejected) one run when rejected  , we usually don't give second param to .then() function
// if this second param is not given in .then() function then every reject from promise will go to catch() function 
// and if this second param is given then every reject from promise will go to this second function of .then()

// Question 6
// 3
// 2
// 1
// Go!
// async function functions can also be overridden

// Question 7
// output:- 15
// as in async await function every furthur operation will wait for evey previous to finish , await is like a stop
// it makes async function work like synchronous , so here after all values are achived then only we are consoling and adding them
// so it will work

// Question 8
// yes, its possible 
// example :- 
async function fun1() {
    console.log('fun1 called');
    let fun1Promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve('fun1 done'), 1000);
    });
    console.log(await fun1Promise);
  }
  
async function fun2() {
console.log('fun2 called');
let fun2Promise = new Promise(function (resolve, reject) {
    setTimeout(async () => {
    await fun1(); // here is the nesting of async function fun1() which is nested inside fun1
    resolve('fun2 done');
    }, 2000);
});
console.log(await fun2Promise);
}
fun2()

// Question10
// we can use Synchonous fashion when we want our code to complete one task at a time and then move to other task
// example :- reading a file , somethimes we want that after the file is being fully read then only code should move forward
// like using fs.readFileSynch() from File system(fs) module
