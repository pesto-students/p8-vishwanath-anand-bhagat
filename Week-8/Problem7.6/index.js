class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.length() - 1];
    }

    length(){
        return this.stack.length;
    }
}


class Queue {
    constructor() {
      this.s1 = new Stack();
      this.s2 = new Stack();
    }
  
    push(x) {
        this.s1.push(x);
    }
  
    pop() {
        if (!this.s2.length()) {
            while (this.s1.length()) {
                this.s2.push(this.s1.pop());
            }

            let output = this.s2.pop();

            while (this.s2.length()) {
                this.s1.push(this.s2.pop());
            }

            return output;
        }
    }

    length(){
        return this.s1.length();
    }
}


function queueImplementation(length, array){
    let q = new Queue();

    for(let i = 0; i < array.length; i++){
        if (array[i] === 1) {
            q.push(array[i + 1]);
            i++;
        } else {
            if(q.length() > 0){
                console.log(q.pop());
            }else{
                console.log(-1);
            }
        }
    }
    
    return 0;
}

queueImplementation(5, [1, 2, 1, 3, 2, 1, 4, 2]);
queueImplementation(4, [1, 2, 2, 2, 1, 4]);

