const printSpiral = (array) => {
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = array.length - 1;
    let colEnd = array[0].length - 1;

    let output = [];
   
    while(rowStart <= rowEnd && colStart <= colEnd){
        //to traverse right
        for(let i = colStart; i <= colEnd; i++){
            output.push(array[rowStart][i]);
        }
        rowStart++;

        //to traverse down
        for(let i = rowStart; i <= rowEnd; i++){
            output.push(array[i][colEnd]);
        }
        colEnd--;

        //to traverse right
        if(rowStart <= rowEnd){
            for(let i = colEnd; i >= colStart; i--){
                output.push(array[rowEnd][i]);
            }
            rowEnd--;
        }
       

        //to traverse up
        if(colStart <= colEnd){
            for(let i = rowStart; i >= rowEnd; i--){
                output.push(array[i][colStart]);
            }
            colStart++;
        }
        
    }
    return output;
}


console.log(printSpiral([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));

//output
//[1, 2, 3, 6, 9, 8, 7, 4, 5]

//time complexity
//O((n*m)^2) 
//where n is the length of parent array and m is the length of child array
//we are running the nested loops with a level of two thats why square.

//space complexity
//O(n*m)
//where n is the length of parent array and m is the length of child array
//its because we are storing the array into output array and its length will be depedent on length of parent and child array. 