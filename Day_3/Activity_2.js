//Task 3:- Write a Program to find the largest three numbers using nested if else statements.

let given_number1=71
let given_number2=34
let given_number3=49

if(given_number1>given_number2)
{
    if(given_number1>given_number3)
    {
        console.log("1st number is largest among two")
    }
    else
    {
        console.log("3rd number is largest among them")
    }
}
else
{
    if(given_number2>given_number3)
    {
        console.log("2nd numebr is largest among all them")
    }
    else
    {
        console.log("3rd number is largest among them")
    }
}
