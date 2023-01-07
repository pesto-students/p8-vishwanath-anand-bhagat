function add(a,b){
    return a + (b || 0);
}

function substraction(a,b){
  return a - (b || 0);
}


const memoizeAdd = memoize(add);
const memoizeSubstraction = memoize(substraction);

function memoize(reducer) {

  function add (...inputs) {

    if (memoize.cache[reducer.name] && memoize.cache[reducer.name][inputs]) {
      return memoize.cache[reducer.name][inputs];
    }
    
    var result = reducer(...inputs);
    memoize.cache[reducer.name] = memoize.cache[reducer.name] || {};
    memoize.cache[reducer.name][inputs] = result;
    return result;
  }

  return add;
}
memoize.cache = {};

  
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));

console.log(memoizeSubstraction(100,100));
console.log(memoizeSubstraction(100));
console.log(memoizeSubstraction(200,100));
console.log(memoizeSubstraction(100,100));