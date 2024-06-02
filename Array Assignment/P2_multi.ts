// Multi-Dimensional Arrays and Tuples

type Student = {
    name: string;
    grades: number[];
};

let students: Student[] = [
    {
        name: "Abdul Malik",
        grades: [95, 72, 88, 79]
    },
    {
        name: "Muzamil",
        grades: [84, 79, 98, 75]
    },
    {
        name: "Raafe",
        grades: [91, 76, 73, 92]
    }
];

let calculateAvgGrade = (grades: number[]) => {
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let averageGrade = calculateAvgGrade(student.grades);
    console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
}
