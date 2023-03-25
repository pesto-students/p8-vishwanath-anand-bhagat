function isVowel(char){
    return "aeiou".includes(char);
}


function vowelCount(str){
    const vowelMap = new Map();
    str = str.toLowerCase();
    for(let char of str){
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) + 1);
            }else{
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("this is a random text to check the count of vowels."));


