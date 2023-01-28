const getMaxSum = (array) => {
    let max = null;
    let pointer_max = array[0];

    for(var i = 1; i < array.length; i++){
        pointer_max = Math.max(pointer_max + array[i], array[i]);
        max = Math.max(max, pointer_max);
    }
    return max;
}


console.log(getMaxSum([1, 2, 3, 4, -10]));
console.log(getMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


//output
//10
//6

//time complexity
//O(n) 
//where n is the length of array
//we are running the for loop only once, and the loop depends on the lenth of prices array

//space complexity
//O(1)
//its because we are only using constant variables in the function(max and pointer_max) and there length is not dependend on the array length