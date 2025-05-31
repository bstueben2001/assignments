const employees = []

function Employee(name, salary, jobTitle, status){
    this.name = name
    this.salary = salary
    this.jobTitle = jobTitle
    this.status = "Full Time"
    printEmployeeForm(this)
}

function printEmployeeForm(Employee){
    console.log(Employee)
}

const emp1 = new Employee("Charlie","$40,000","Barista","Part Time")
const emp2 = new Employee("Joe","$60,000","Inventory Specialist")
const emp3 = new Employee("Jaydin","$80,000","Web Developer")

employees.push(emp1, emp2, emp3)
// console.log(employees)