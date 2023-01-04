


function getNumber(){
    return Math.floor(Math.random() * 10) + 1; //generates number between 1 to 10
}

const checkNumber = (num, wait_time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(num%5 === 0){
            reject();
        }
        resolve();
    }, wait_time);
});

function callCheckNumber(num){
    checkNumber(num, 300).then(() => {
        console.log(`${num} promise is resolved`);
    }).catch(() => {
        console.log(`${num} promise is rejected`);
    }).finally(() => {
        console.log(`${num} promise is completed`);
    });
}

callCheckNumber(getNumber());
callCheckNumber(getNumber());
callCheckNumber(getNumber());
callCheckNumber(getNumber());
callCheckNumber(getNumber());
callCheckNumber(getNumber());

//SAMPLE OUTPUT
// 10 promise is rejected
// 10 promise is completed
// 3 promise is resolved
// 3 promise is completed
// 4 promise is resolved
// 4 promise is completed
// 8 promise is resolved
// 8 promise is completed
// 8 promise is resolved
// 8 promise is completed
// 3 promise is resolved
// 3 promise is completed


