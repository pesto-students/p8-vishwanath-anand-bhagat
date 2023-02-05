class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    add(element) {
        var node = new Node(element);
 
        var current;
 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            while (current.next) {
                current = current.next;
            }
 
            current.next = node;
        }
        this.size++;
    }
 
    size_of_list() {
        return this.size;
    }
 
 
    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    head(){
        return this.head;
    }

    next(){
        return this.next;
    }
 
}

function rotateList(head, k){
    if (!head){
        return head;
    } 
    let current = head;
    let count = 1;

    while (count < k && current) {
        current = current.next;
        count++;
    }

    if (!current){
        return head;
    } 

    let kthNode = current;
    while (current.next) {
        current = current.next;
    }
    current.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;
}


function createList(length, array, shift){
    let list = new LinkedList()

    for(let i =0; i < array.length; i++){
        list.add(array[i]);
    }
    let current = rotateList(list.head, shift);
    
    while (current) {
        console.log(current.element);
        current = current.next;
    }
}

createList(5, [2,4,7,8,9], 2);
console.log(' ');
createList(5, [10,9,8,7,2], 3);
 