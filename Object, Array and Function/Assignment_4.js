const students = [
    { name: "Abdullah", isSenior: true, completedAssignment: true },
    { name: "Raafe", isSenior: true, completedAssignment: false },
    { name: "Huzaifa", isSenior: false, completedAssignment: true },
    { name: "Ahmed", isSenior: true, completedAssignment: true },
    { name: "Hassan", isSenior: false, completedAssignment: false }
];
function findSeniors(students) {
    return students.filter(student => student.isSenior && student.completedAssignment);
}
const seniorsWhoCompletedAssignments = findSeniors(students);
console.log("Senior students with completed assignments:", seniorsWhoCompletedAssignments);
function updateClassList(students) {
    for (let i = students.length - 1; i >= 0; i--) {
        if (students[i].isSenior && !students[i].completedAssignment) {
            students.splice(i, 1);
        }
    }
}
updateClassList(students);
console.log("Updated student list:", students);
export {};
