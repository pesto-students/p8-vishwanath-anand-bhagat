const checkIfPairExists = (numbers, expected_diff) => {
    let temp = new Set();
    for(var i = 0; i < numbers.length; i++){
        temp.add(numbers[i]);
        if(temp.has(numbers[i] - expected_diff)){
            return 1;
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
//O(n) 
// where n is the length of numbers array
//we are running the for loop twice, and the loop depends on the lenth of numbers array

//space complexity
//O(n)
// where n is the length of numbers array
// as we are using set and it will have the length of n in the worst condition.