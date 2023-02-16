class Node{
    constructor(element, next){
        this.element = element;
        this.next = next || null;
    }
}

function detectLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
  
    return false;
};

//example 1
let node1 = new Node(1);
let node2 = new Node(3);
let node3 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node2;
console.log(detectLoop(node1));

//example 2
let nodea = new Node(1);
let nodeb = new Node(8);
let nodec = new Node(3);
let noded = new Node(4);
nodea.next = nodeb;
nodeb.next = nodec;
nodec.next = noded;
console.log(detectLoop(nodea));


//output
// true
// false