// this is a grade calculator using if else

let score = 40;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
}  else if (score >= 60) {
    grade = "C";
} else if (score >= 45) {
    grade = "D";
} else  {
    grade = "F";
}
console.log(grade);