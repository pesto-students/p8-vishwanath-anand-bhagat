const sum = (numbers, target) => {
    let closest = numbers[0] + numbers[1] + numbers[2];
    for(var i = 0; i < numbers.length; i++){
        for(var j = i + 1; j < numbers.length; j++){
            for(var k = j + 1; k < numbers.length; k++){
                if(Math.abs(numbers[i] + numbers[j] + numbers[k] - target) < Math.abs(closest - target)){
                    closest = numbers[i] + numbers[j] + numbers[k];
                }
            }
        }
    }
    return closest;
}

console.log(sum([-1, 2, 1, -4], 2));
console.log(sum([0,0,0], 1));


//Output
//2
//0

//time complexity
//O(n^3) 
// where n is the length of numbers array
//we are running the for loop thrice, and the loop depends on the lenth of numbers array

//space complexity
//O(1)
//its because we are only using constant variables in the function(index variables i,j,k and closest) and there length is not dependend on the numbers array length