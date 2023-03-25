class Node{
    constructor(data, left, right){
        this.left = left;
        this.data = data;
        this.right = right;
    }
}



const findMaximumDepth = (node) => {
    if(node === null){
        return 0;
    }

    let leftDepth = findMaximumDepth(node.left);
    let rightDepth = findMaximumDepth(node.right);

    if(leftDepth > rightDepth){
        return leftDepth + 1;
    }
    return rightDepth + 1;
}

const createExample1 = () => {
    const seven = new Node(7, null, null);
    const fifteen = new Node(15, null, null);
    const twenty = new Node(20, fifteen, seven);
    const nine = new Node(9, null, null);
    const head = new Node(3, nine, twenty);
 
    return head;
}
 
const example1 = createExample1();
console.log(findMaximumDepth(example1));

//output
//3