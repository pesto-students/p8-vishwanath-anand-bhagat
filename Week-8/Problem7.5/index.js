function nextGreaterElement(length, nums){
    for(let i = 0; i < length; i++){
        let flag = false;
        for(let j = i + 1; j < length; j++){
            if(nums[i] < nums[j]){
                flag = true;
                console.log(nums[j]);
                break;
            }
        }
        if(!flag){
            console.log(-1);
        }
    }
    
    return 0;
}

nextGreaterElement(4,[1, 3, 2, 4]);

