class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        console.log(this.name);
    }

    getAge() {
        console.log(this.age)
    }

    showData() {
        this.getAge();
    }
}

Employee.prototype.randomValue = 20;  
debugger;
var emp = new Employee("Mayank Gupta", 30);

console.log(emp.name);

var empTwo = new Employee("Anshul Gupta", 35)
console.log(empTwo.name)

emp.showData();
empTwo.showData()

Employee.prototype.showData = () => {
    console.log("Sample")
}