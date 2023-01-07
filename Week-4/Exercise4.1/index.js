
class MyPromise {
    constructor(executor) {
        this.successCallbacks = [];
        this.errorCallbacks = [];
        this.finallyCallbacks = [];
    
        executor((error, message) => {
            if (error) {
                this.errorCallbacks.forEach(cb => cb(message));
            } else {
                this.successCallbacks.forEach(cb => cb(message));
            }
            this.finallyCallbacks.forEach(cb => cb());
        });
    }
  
    then(successCb) {
        this.successCallbacks.push(successCb);
        return this;
    }
  
    catch(errorCb) {
        this.errorCallbacks.push(errorCb);
        return this;
    }
  
    finally(finallyCb) {
        this.finallyCallbacks.push(finallyCb);
        return this;
    }
}

function getNumber(executor, wait_time){
    let num = Math.floor(Math.random() * 10) + 1; //generates number between 1 to 10

    setTimeout(() => {
        if(num%5 === 0){
            return executor(true, `Promise is rejected for number ${num}`);
        }
        return executor(false, `Promise is resolved for number ${num}`);
    }, wait_time);
}

const promise = new MyPromise((executor) => getNumber(executor, 100));

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log(`Promise is completed`);
});


//SAMPLE OUTPUT
// Promise is resolved for number 4
// Promise is completed
// Promise is rejected for number 10
// Promise is completed


