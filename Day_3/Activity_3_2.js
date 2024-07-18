//Task 5: Write a program that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console

let student_score=60

switch(true)
{
    case (student_score>=90):console.log("Grade A");
                              break;
    case (student_score<90 && student_score>=80):console.log("Grade B");
                                                 break;
    case (student_score<80 && student_score>=70):console.log("Grade C");
                                                 break;
    case (student_score<70 && student_score>=60):console.log("Grade D");
                                                 break;
    default:console.log("Student Failed");
}