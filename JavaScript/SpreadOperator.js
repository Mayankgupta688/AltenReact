var employeeData = {
  name: "Mayank",
  age: 20,
  designation: "Developers"
}

// These variable share the common Data...
var copiedData = employeeData;

var clonedData = JSON.parse(JSON.stringify(employeeData))

var data = [1, 2, 3, 4]
var otherData = [1, 2, 3, 4];

// Expect this to be true;
console.log(data == otherData)

// Expect this to be true;
console.log(copiedData == employeeData);

employeeData.name = "Anshul";

// Add salary to employeeData
var newSalaryObject = {}
newSalaryObject.salary = 1000;
newSalaryObject.name = employeeData.name;
newSalaryObject.age = employeeData.age;
newSalaryObject.designation = employeeData.designation;

var newOtherSalaryObject = {
  salary: 1000,
  name: employeeData.name,
  age: employeeData.age,
  designation: employeeData.designation
}

var otherData = {
  ...employeeData,
  salary: 2000,
  bonus: 100
}

var otherSampleData = {
  ...otherData,
  lastCompany: "ION"
}

console.log(newSalaryObject)