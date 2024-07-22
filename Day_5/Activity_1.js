//Day 5:- Functions
//Activity_1:- Function Decleration 
//Task 1:- Write a function to check if a number is even or odd and log the result on console.

function even_odd(num)
{
    if(num%2===0)
        console.log(`Given number ${num} is an even number`)
    else
        console.log(`given number ${num} is an odd number`)
}
even_odd(467)

//Task 2:- Write a function to find square of the number and reuturn the result 
let input_num=4
function square(num)
{
    let result=num*num
    return result
}
let square_ip_num=square(input_num)
console.log(square_ip_num)
