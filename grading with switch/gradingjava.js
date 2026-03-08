// this grading using switch
let score = 60;
 if ( score <0 || score > 100){
    grade = "invalid score";
 } else {
    let grade = Math.floor(score / 10);
    switch (grade) {
        case 10:
        case 9:{
            console.log( " Grade: A");
            break;
        }
        case 8:{
            console.log("Grade = B")
        };
            break;
        case 7:{
            console.log("Grade = C")
        };
            break;
        case 6:{
            console.log("Grade = D")
        };
            break;
        default:
            console.log("Grade = F")
    }
 }

// A is 90 or grater
// B is 80 or numbers lesser than 90
// C is 70 or numbers lesser than 80
// D is 60 or numbers lesser than 70
// F is 59 or numbers lesser than 59