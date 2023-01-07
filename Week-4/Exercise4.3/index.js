const fibonacci = (num) => ({
    [Symbol.iterator]: () => {
        let first = 0;
        let second = 0;
        let i = 0;

        return {
            next: () => {
                if(i++ <= num){
                    [first, second] = [second, (first + second) || 1]; // this line means first = second. and second = (old value of first) + second;
                    return { value: first, done: false}
                }else{
                    return { done: true}
                }
            }
        }
    }
});

for(let result of fibonacci(6)){
    console.log(result);
}

//OUTPUT
// 0
// 1
// 1
// 2
// 3
// 5
// 8