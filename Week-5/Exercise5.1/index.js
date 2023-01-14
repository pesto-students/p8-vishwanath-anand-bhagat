function doTask1(){
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("doTask 1");
        }, 100);
    });
    return myPromise;
}

function doTask2() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("doTask 2");
        }, 200);
    });
    return myPromise;
}
  

function doTask3(){
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject("doTask 3");
        }, 100);
    })
    return myPromise;
}

async function execute(){

    async function executeAsync(){
        console.log('execute async await function started');
        await doTask1().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
        await doTask2().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
        await doTask3().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
    }

    await executeAsync().finally(() => {
        console.log(`execute async await function completed`);
    });


    async function * executeGenerator(){
        try{
            console.log('execute generator function started');
            yield await doTask1().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
            yield await doTask2().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
            yield await doTask3().then(function_name => console.log(`resolved in function ${function_name}`)).catch(function_name => console.log(`error in function ${function_name}`));
        }catch{
            console.log('execute generator function has error');
        }
        finally{
            console.log('execute generator function completed');
        }
    }

    const executeGeneratorObject = executeGenerator();

    await executeGeneratorObject.next();
    await executeGeneratorObject.next();
    await executeGeneratorObject.next();
    await executeGeneratorObject.throw();
}

execute();

//output
// execute async await function started
// resolved in function doTask 1
// resolved in function doTask 2
// error in function doTask 3
// execute async await function completed
// execute generator function started
// resolved in function doTask 1
// resolved in function doTask 2
// error in function doTask 3
// execute generator function has error
// execute generator function completed
