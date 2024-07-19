//Activity 3:- Do while loop
//Task 5:- Write a program to print numbers from 1 to 5 using do ...while loop
let i=1
do
{
   console.log(i)
   i++
}while(i<=5)

//Task 6:- Find out the factorial number using do while loop
let number_to_fact=5;
let fact=number_to_fact;
do
{ 
    
    fact=fact*(number_to_fact-1);
    number_to_fact--;
    
}while(number_to_fact>1)
console.log(fact)