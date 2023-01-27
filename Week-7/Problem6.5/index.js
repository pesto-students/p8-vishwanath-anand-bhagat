const checkIfPairExists = (numbers, expected_diff) => {
    for(var i = 0; i < numbers.length -1; i++){
        for(var j = 1; j < numbers.length; j++){
            if(i === j){
                continue;
            }
            if(numbers[j] - numbers[i] === expected_diff){
                return 1;
            }
        }
    }
    return 0;
}

console.log(checkIfPairExists([5, 10, 3, 2, 50, 80], 78));
console.log(checkIfPairExists([-10, 20], 30));
console.log(checkIfPairExists([-1, 20], 30));

//Output
//1
//1
//0

//time complexity
//O(n^2) 
//we are running the for loop twice, and the loop depends on the lenth of numbers array

//space complexity
//constant
//its because we are only using constant variables in the function(index variables i and j) and there length is not dependend on the numbers array length