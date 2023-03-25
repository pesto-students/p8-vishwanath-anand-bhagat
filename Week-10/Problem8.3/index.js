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


const levelOrderTraversal = (node) => {
    // let nodes = [node];
    let output = [];
    // while(nodes.length > 0){
    //     let temp = nodes.shift(nodes);
    //     let level = [];
    //     if(temp.left){
    //         nodes.push(temp.left)
    //         level.push(temp.left.data);
    //     }
    //     if(temp.right){
    //         nodes.push(temp.right)
    //         level.push(temp.right.data);
    //     }
    //     if(level.length > 0){
    //         output.push(level);
    //     }
    // }

    let h = findMaximumDepth(node);

    for(let i = 0; i < h; i++){
        let level = getLevel(node, i);
        if(level){
            output.push(level);
        }
    }

    return output;
}

const getLevel = (node, level) => {
    if(node === null){
        return false;
    }

    if(level === 0){
        return [node.data];
    }else if(level > 0){
        let left = getLevel(node.left, level - 1);
        let right = getLevel(node.right, level - 1);
        let temp = [];
        if(left){
            temp = temp.concat(left);
        }
        if(right){
            temp = temp.concat(right);
        }
        return temp;
    }

}

const createExample1 = () => {
    const seven = new Node(7, null, null);
    const fifteen = new Node(15, null, null);
    const twenty = new Node(20, fifteen, seven);
    const nine = new Node(9, null, null);
    const head = new Node(3, nine, twenty);
    return head;
}

const createExample2 = () => {
    const one = new Node(1, null, null);
    return one;
}
 
const example1 = createExample1();
const example2 = createExample2();
console.log(levelOrderTraversal(example1));
console.log(levelOrderTraversal(example2));

//output
// [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
// [ [ 1 ] ]