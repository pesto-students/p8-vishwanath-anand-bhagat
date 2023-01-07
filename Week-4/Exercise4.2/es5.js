const Person = function() {};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}

const Teacher = function() {};
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);


const teacher1 = new Teacher();
teacher1.initialize("Adam", 45);
teacher1.teach("Inheritance");


const teacher2 = new Teacher();
teacher1.initialize("Anand", 25);
teacher1.teach("Laravel");

//Output
// Adam is now teaching Inheritance
// Anand is now teaching Laravel

