//this is the "Right Answer" - npm install curry
// Might be able to do it easily with underscore js?


var curry = require('curry');

var sum = function(){
    var nums = [].slice.call(arguments);
    return nums.reduce(function(a, b){ return a + b; });
};

var sum3 = curry.to(3, sum);
var sum4 = curry.to(4, sum);

console.log(sum3(1, 2)(3)); //= 6
console.log(sum4(1)(2)(3, 4)); //= 10
console.log(sum4(1)(2)(3)(4)); //= 10