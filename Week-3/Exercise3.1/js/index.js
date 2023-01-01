function add(a,b){
    return a + (b || 0);
}


const memoizeAdd = memoize(add);

function memoize(reducer) {

  function add (...inputs) {

    if (memoize.cache[inputs]) {
      return memoize.cache[inputs];
    }
    
    var result = reducer(...inputs);
    memoize.cache[inputs] = result;
    return result;
  }

  return add;
}
memoize.cache = {};

  
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));
