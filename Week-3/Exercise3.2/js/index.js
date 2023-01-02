
function add(a, c) {
    return a + this.b + c;
}

const input = {
    b: 10
}

//call
console.log("Call Addition: "+add.call(input, 5, 8)); // Output 23

//bind
const boundAdd = add.bind(input);
console.log("Bind Addition: "+boundAdd(5, 9)); // Output 24

//apply
console.log("Apply Addition: "+add.apply(input, [5, 10])); // Output 25