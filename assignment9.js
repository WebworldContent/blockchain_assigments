// Question 1
/* a)  Yes , the inner function is closure as it binds its lexical scope vaiable and can use it even in future after being returned from the outer function bcoz after outerFunction returns InnerFunction , OuterFunction time is over(i.e:- remove from the execution stack) the InnerFunction still holds its variable in lexical scope and can access it again
// b) will print 100 
*/

// Question 2
/*
closure is when function that is binds to its lexical environment or scope.
And bcoz of this the function can access the variable outside its scope bcoz its lexically bound
closure come into play with functions.
where as Scope is the area of access of a perticular thing means its boundry we can say
Scope comes into picture with variables in javascript 
example :- let has block scope , var has functional scope and const also has block scope

*/


// Question 3
/*
Lexical scope is ability of function to access the variable of its parent.
In closure an inner function can use variable of outer function.
We can call it as child function being lexically bound to its Parent
If we consider a function defined in global scope then it will be lexicall bound to its parent window object and can access vaiable of global
*/

// Question 4
// it will be 3 time 3