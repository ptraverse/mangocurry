(function recursion(iteration){
    if (iteration > 0) {
      console.log(iteration);
      recursion(--iteration);
    } else {
      console.log('done');
    }
})(20);

console.log('recursion defined? ' + (typeof recursion === 'function'));