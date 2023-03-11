class Node{
    constructor(data, left, right){
        this.left = left;
        this.data = data;
        this.right = right;
    }
}


const validateBinarySearcTree = (node) => {
    let nodes = [node];
    while(nodes.length > 0){
        let temp = nodes.shift(nodes);
        if((temp.left && temp.left.data >= temp.data) || (temp.right && temp.data >= temp.right.data)){
            return false;
        }
        if(temp.left){
            nodes.push(temp.left)
        }
        if(temp.right){
            nodes.push(temp.right)
        }
    }
    return true;
}

const createExample1 = () => {
    const one = new Node(1, null, null);
    const three = new Node(3, null, null);
    const head = new Node(2, one, three);
    
    return head;
}

const createExample2 = () => {
    const one = new Node(1, null, null);
    const three = new Node(3, null, null);
    const six = new Node(6, null, null);
    const four = new Node(4, three, six);
    const head = new Node(5, one, four);
    
    return head;
}
 
const example1 = createExample1();
const example2 = createExample2();
console.log(validateBinarySearcTree(example1));
console.log(validateBinarySearcTree(example2));

//output
// true
// false