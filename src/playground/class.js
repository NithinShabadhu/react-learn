console.log("class");

class Person {
    constructor(name, age = 0) {
        this.name = name,
            this.age = age
    }
    getGreeting() {
        return `Hi, I am ${this.name} !`;
    }
    getDescription() {
        return `Hi, Iam ${this.name} of ${this.age}.`
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`
           
        }
        return description;
    }
  
}
const me = new Student('Nithin Shabadhu', 23, 'CSE');
console.log(me.hasMajor());
console.log(me.getDescription())