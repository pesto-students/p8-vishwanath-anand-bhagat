const getMaximumProfit = (prices) => {
    let max_profit = 0;
    let min_price = prices[0];

    for(var i = 1; i < prices.length; i++){
        if(min_price > prices[i]){
            min_price = prices[i];
        }else{
            max_profit = Math.max(max_profit, prices[i] - min_price);
        }
    }
    return max_profit;
}


console.log(getMaximumProfit([7,1,5,3,6,4]));
console.log(getMaximumProfit([7,6,4,3,1]));
console.log(getMaximumProfit([2,4,1]));


//output
//5
//0
//2

//time complexity
//O(n) 
//we are running the for loop only once, and the loop depends on the lenth of prices array

//space complexity
//constant
//its because we are only using constant variables in the function(max_profit and min_price) and there length is not dependend on the prices array length


