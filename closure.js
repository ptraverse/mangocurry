/*
// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

function foo(x) {
  var tmp = 3;

  return function (y) {
    alert(x + y + (++tmp)); // will also alert 16
  };
}

var bar = foo(2); // bar is now a closure.
bar(10);
*/


function add(x) {
	var sum = 0;
	var addRecursive = function(x, y) {
		if (typeof y === 'undefined') {
	 		if (typeof x === 'number') {
				sum = sum + x;
				return sum;
			} else if (typeof x === 'undefined') {
				return 0;
			}
		} else {
			if (typeof x === 'function') {
				return x(y);
			} else {
				console.log("#shouldntgethere");
				return 0;
			}
		}
	};

	return addRecursive(x);
}

console.log(add());
console.log(add(1));
var add1 = add(1);
console.log(add1);
console.log(add1(2));
// console.log(add1(2));
// console.log(add1(2));
// var add2 = add(2);
// console.log(add2);
// console.log(add2(2));
// console.log(add2(2));
// console.log(add2(2));
