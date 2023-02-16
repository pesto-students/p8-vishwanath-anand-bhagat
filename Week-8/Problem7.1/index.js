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
 
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
 
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
 
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
 
            // return the remove element
            return curr.element;
        }
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

function reverseList(curr){
    let prev = null;
    let next = null;
    while (curr) {
        next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next;
    }
    curr = prev;
    return curr;
}


function createList(array){
    let list = new LinkedList()

    for(let i =0; i < array.length; i++){
        list.add(array[i]);
    }
    let current = reverseList(list.head);
    
    while (current) {
        console.log(current.element);
        current = current.next;
    }
}

createList([1,2,3,4,5,6]);
console.log(' ');
createList([10,9,8,7,2]);
 