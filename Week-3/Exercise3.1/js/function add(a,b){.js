function add(a,b){
    return a + (b || 0);
}


const memoizeAdd = (a, b) => {
    // Check if the result is already in the cache
    if (memoizeAdd.cache[a] && memoizeAdd.cache[a][b]) {
        console.log('returned from cache');
      return memoizeAdd.cache[a][b];
    }
  
    // Calculate the result and add it to the cache
    var result = add(a,b);
    memoizeAdd.cache[a] = memoizeAdd.cache[a] || {};
    memoizeAdd.cache[a][b] = result;
  
    return result;
  }
  
  // Create a cache to store the results of previous function calls
  memoizeAdd.cache = {};
  console.log(memoizeAdd(100,100));
  console.log(memoizeAdd(100));
  console.log(memoizeAdd(100,200));
  console.log(memoizeAdd(100,100));
