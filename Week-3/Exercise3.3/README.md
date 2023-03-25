
# Exercise 3.3
 
### What is the output of the below problem and why?

```
    function createIncrement(){
        let count = 0;
        function increment(){
            count++;
        }
        let message = `Count is ${count}`;
        function log(){
            console.log(message);
        }
        return [increment, log];
    }
    const [increment, log] = createIncrement();
    increment();
    increment();
    increment();
    log();
```

### Output
```
Count is 0
```

### Reason
- As we know javascript first create a instance for there variables first 
    and then assign a value to it. 
- So when we created the instance for createIncrement function, 
    all the variables got there initial value. Here the value of message was set 
    as "Count is 0".
- When we called log() function as the value of messsage was set to "Count is 0"
    it will always console "Count is 0" even when the value of count is anything else.
- If we want to print the exact value of count we will need to update the function as below
    ```
        function createIncrement(){
            let count = 0;
            function increment(){
                count++;
            }
            
            function log(){
                let message = `Count is ${count}`;
                console.log(message);
            }
            return [increment, log];
        }
        const [increment, log] = createIncrement();
        increment();
        increment();
        log();
        increment();
        log();
    ```
- In the above program the value of message is set when we call the function log();. 
    So the output of the program will be 
    ```
        Count is 2
        Count is 3
    ```