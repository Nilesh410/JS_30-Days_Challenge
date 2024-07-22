//Activity 2:- Function Expression
//Task 3:- Write a function expression to find the maximum of two numbers and log the result on the console
let no1=23
let no2=34

let max_num=function (num1,num2)
{
    console.log(`maximum number is ${num1>num2 ? num1 : num2}`)
}

max_num(no1,no2)

//Task 4:- Write a function expression to concatenate two strings and return the result
let merge_string=function(str1,str2)
{
    return str1+str2
}

console.log(merge_string("JAVA Script","Programming"))