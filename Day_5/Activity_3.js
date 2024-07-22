//Activity 3:- Arrow Function 
//Task 5:- Write an arrow function to calculate the sum of two numbers and return the result
let no1=34
let no2=23

let add =(num1,num2)=> num1+num2;

console.log(`${no1} + ${no2}=${add(no1,no2)}`)

//Task 6:- Write an arrow function to check if a string contains a specific character and return a boolean value
let given_string="Nilesh"

let specific_char="i"
let char_present=(str,ch)=>{
       if(str.includes(ch)) //use of include method to check char is present or not 
       //use of index of to find out that char is present at which index
        return true
       else
        return false
}
console.log(`In ${given_string} string the ${specific_char} char is present ${char_present(given_string,specific_char)}`)