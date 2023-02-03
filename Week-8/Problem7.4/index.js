class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.length() - 1];
    }

    length(){
        return this.stack.length;
    }
}

function getClosingParenthesis(bracket){
    switch (bracket){
        case '(':
            return ')'; 
        case '[':
            return ']';
        case '{':
            return '}';
    }
    
}


function parenthesisChecker(parenthensis){
    let parenthesisStack = new Stack();

    for(let i = 0; i < parenthensis.length; i++){
        if(parenthesisStack.length() === 0){
            parenthesisStack.push(parenthensis[i]);
        }else{
            if(getClosingParenthesis(parenthesisStack.peek()) === parenthensis[i]){
                parenthesisStack.pop();
            }else{
                parenthesisStack.push(parenthensis[i]);
            }
        }
    }
    return parenthesisStack.length() === 0;
}

console.log(parenthesisChecker("()"));
console.log(parenthesisChecker("()[]{}"));
console.log(parenthesisChecker("(]"));
