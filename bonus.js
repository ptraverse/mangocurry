 var adder = function (x) {
    return function (y) {
        return x + y;
    };
};
console.log('adder defined? ' + (typeof adder === 'function'));
var result = adder(2)(4);
console.log('adder(2)(4) = ' + result);
console.log('adder(2)(4) = ' + adder(2)(4));
console.log('adder() = ' + adder());
console.log('');
var add5 = adder(5);
console.log(add5(1));
console.log('add5(1) = ' + add5(1));
console.log('');

/* Output */
// adder defined? true
// adder(2)(4) = 6
// adder(2)(4) = 6
// adder() = function (y) {
//         return x + y;
//     }

// 6
// add5(1) = 6


console.log('--------------------');

/* Can't do infinite parameters */
/* console.log('adder(1)(2)(3)(4) = ' + adder(1)(2)(3)(4)); */
// console.log('adder(1)(2)(3)(4) = ' + adder(1)(2)(3)(4));
//                                                 ^
// TypeError: number is not a function

/* How would you do infinite parameters? */
// Break it down; you need 1 "register"; and 1 "operation" (addition)

//This is still wrong!!
var addLots = function(x) {
	var sum = 0;
	if (typeof x === 'undefined') {
		return sum;
	} else {
		sum += x;
		if (typeof y === 'function') {
			return y(sum);
		} else {
			return function(y) {
				return sum;
			};
		}
	}
};
console.log('addLots() = ' + addLots());
console.log('typeof addLots() = ' + typeof addLots());
console.log('addLots(1) = ' + addLots(1));
console.log('typeof addLots(1) = ' + typeof addLots(1));
console.log('addLots(1)(2) = ' + addLots(1)(2));
console.log('addLots(1)(2)(3)(4) = ' + addLots(1)(2)(3)(4));