class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age){
        super(name, age);
    }

    teach(subject){
        console.log(`${this.name} is now teaching ${subject}`);
    }
}

const teacher1 = new Teacher("Adam", 45);
teacher1.teach("Inheritance");

const teacher2 = new Teacher("Anand",25);
teacher1.teach("Laravel");


//Output
// Adam is now teaching Inheritance
// Anand is now teaching Laravel

