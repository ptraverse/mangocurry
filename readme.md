# Mango Curry
*[lambda functions](http://stackoverflow.com/questions/16501/what-is-a-lambda-function)
*[currying in javascript](http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html)

## In a Nutshell

instead of add(a,b) which is basically only 2 parameters

`add(x)` is only 1 parameter
but currying enables you to do
`add(3)(2)(4)(5)...` as much as you want

But First...

### What is "Lambda Calculus"?

 Mathematical technique where you can bind variables - which can themselves be (must be?) functions, which operate on variables as well. (?) This is cool because now you can start doing interesting things like recursion, formalizing result set spaces, expanding to other dimensions, etc. Alonzo Church and Alan Turing were the ones who proved that any finite state machine (i.e. a theoretical machine with an infinite tape and read/write head that operates using an alphabet of symbols) was mathematically equivalent to Lambda Calculus and that is the biggest deal of all of computers: anything you can do with "math" (i.e. any concept that you can translate into a formalized model) you can put on a computer. The word "lambdas" generally means an anonymous function.

### Why (when) are anonymous functions useful?
* If you are only allowed to use a function (e.g in a callback)
* If you need to access parent scope (really?) (is this unique to anonymous functions?)
* If you know it will only get used once
* If you need to abstract out the fact that there is a function involved

### What's a closure?
* As far as I can tell, its related to an anonymous function, in that you call it with the sense of creating an "environment" where the lambda will be created so you can figure out what the result should be. Wikipedia: "Operationally, a closure is a record storing a function together with an environment".

### What's Currying Then?
* Currying refers to the process of transforming a function with multiple arity into the same function with less arity. [link](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)
* Currying and closures are related; if a closure is a record storing a function and an environment, then currying is turning a function with a list of parameters, into a function and its environment, i.e. you split the list of parameters into some variables used as parameters to the curried function, and the rest being defined at the same time/before the curried function (which is probably an anonymous curried function?) making up the "environment".



#### Python

	def adder(x):
	    return lambda y: x + y
	add5 = adder(5)
	add5(1)
	6


### Javascript

	var adder = function (x) {
	    return function (y) {
	        return x + y;
	    };
	};
	add5 = adder(5);
	add5(1) == 6


### Bonus Question!!

In javascript example above, max arguments is still only 2 (?). In JS write an adder that can take infinitely many arguments. See answer in `bonus.js`.

