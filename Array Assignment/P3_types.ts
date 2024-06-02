// Array with Types and Indexing

type Employee = {
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    salary: number
}

let employees: Employee[] = [
    {
        name: "Abdullah",
        hoursWorked: 14,
        hourlyRate: 23,
        salary: 1500
    },
    {
        name: "Muzamil",
        hoursWorked: 35,
        hourlyRate: 45,
        salary: 3000
    },
    {
        name: "Ahmed",
        hoursWorked: 12,
        hourlyRate: 35,
        salary: 1900
    }
];

let calculateSalary = (employee: Employee) => {
    let salary: number = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        salary *= 1.10;
    }

    employee.salary = salary;
}

for (let i = 0; i < employees.length; i++) {
    calculateSalary(employees[i]);
    console.log(`Name: ${employees[i].name}, Salary: $${employees[i].salary.toFixed(2)}`);
}

