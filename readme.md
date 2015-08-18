# Mango Curry

* [lambda functions](http://stackoverflow.com/questions/16501/what-is-a-lambda-function)
* [currying in javascript](http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html)

## In a Nutshell

* instead of `add(a,b)` which can only be 2 parameters
* `add(x)` is only 1 parameter
* `add(3)(2)(4)(5)...` as much as you want, thanks to (!?)

But First...

### What is "Lambda Calculus"?

Mathematical technique where you can bind variables - which can themselves be (must be?) functions, which operate on variables as well. (?) This is cool because now you can start doing interesting things like recursion, formalizing result set spaces, expanding to other dimensions, etc. Alonzo Church and Alan Turing were the ones who proved that any finite state machine (i.e. a theoretical machine with an infinite tape and read/write head that operates using an alphabet of symbols) was mathematically equivalent to Lambda Calculus and that is the biggest deal of all of computers: anything you can do with "math" (i.e. any concept that you can translate into a formalized model) you can put on a computer. The word "lambdas" generally means an anonymous function.

### Why (when) are anonymous functions useful?
* If you are only allowed to use a function (e.g in a callback)
* If you need to access parent scope (really?) (is this unique to anonymous functions?)
* If you know it will only get used once
* If you need to abstract out the fact that there is a function involved

### What's a Closure?
* Wikipedia: "Operationally, a closure is a record storing a function together with an environment".
* Basically it means a function that has an environment of its own. Inside the environment, there is at least one bound variable.
* In the world of Finite State Machines, a closure would be a symbol that represents a function and its parameter(s), as well as symbols to represent the environment (at least one bound variable outside the function).
* TLDR; A closure is a function and some pertinent variables that are OUTside of the function.

### What's Currying Then?
* Currying refers to the process of transforming a function with multiple arity into the same function with less arity. [link](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)
* Currying transforms a single function with many parameters `f(a,b,c)` into a series of functions each with single parameter `f'(a)g'(b)h'(c)`
* [Currying vs partial application](http://stackoverflow.com/questions/218025/what-is-the-difference-between-currying-and-partial-application) Basically partial application allows for 2 or more inputs into anonymous function while a curried function will always only take 1 input.

### Are Closures and Currying Related?
* They don't have to be. You can have a closure with a non-curried function.
* However, any time you curry a function, you are probably creating a closure. [link](http://dublintech.blogspot.ca/2011/10/javascript-closures-and-currying.html) "Currying works by creating a closure that holds the original function and the arguments to curry";



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

### Original Question

Inspired by skill-testing question:

<img src="/question.PNG" />