function fibonacci(num){
    var result = 0; 
    var first = 0;
    var second = 1;
    console.log("The Fibonacci Series is:");
    for(var i = 0; i < num; i++){
        if(i <= 1){
            result=i;
        }else{
            result = first + second;
            first = second;
            second = result;
        }
        console.log(result);
    }
}

fibonacci(7);
//OUTPUT
// 0
// 1
// 1
// 2
// 3
// 5
// 8