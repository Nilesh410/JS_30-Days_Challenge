//Activity 5:- Combining Conditions
//Task 7:- Write a program to check if a year is leap year using multiple condition(divisible by 4 and not 100
//unless also divisible by 400) and log the result to be the console

let given_year=2024

if(given_year % 100 === 0 ? given_year % 400 === 0 : given_year % 4 === 0)
{
    console.log(`Given input year ${given_year} is leap year`)
}
else
    console.log(`Given input year ${given_year} is not a leap year`)
