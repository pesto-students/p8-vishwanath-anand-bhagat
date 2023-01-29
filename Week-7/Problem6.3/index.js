const sort = (array) => {
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;
    for(var i =0; i < array.length; i++){
        if(array[i] === 0){
            zeroCount++;
        }
        if(array[i] === 1){
            oneCount++;
        }
        if(array[i] === 2){
            twoCount++;
        }
    }

    for(var i = 0; i < zeroCount; i++){
        array[i] = 0;
    }

    for(var i = zeroCount; i < zeroCount  + oneCount; i++){
        array[i] = 1;
    }

    for(var i = zeroCount + oneCount; i < twoCount + zeroCount + oneCount; i++){
        array[i] = 2;
    }
    return array;
}

console.log(sort([0,2,1,2,0]));
console.log(sort([0,2,0]));

//Output
// [ 0, 0, 1, 2, 2 ]
// [ 0, 0, 2 ]

//Time Complexity
//O(n) 
//where n is the length of array
//as the loop is not nested and its running single time at a time

//Space Complexity
//O(1)
//as we are using variables which doest not depends on the length of array.