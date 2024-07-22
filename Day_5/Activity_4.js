//Activity 4:- Function Parameters and Default values
//Task 7:- Write a function that takes two parameters and returns
//their product. Provide a default value for the second parameter
let no1=6
let no2=2
let product=(num1,num2=5)=>num1*num2

console.log(`${no1}*${no2}=${product(no1,no2)}`)

//Task 8: Write a function that takes a person's name and age and returns 
//a greeting message. Provide a default value for the age
let person_name="Nilesh Shirude"
let person_age
let message=(name,age=34)=>{
    return "Hello " +name+ " your age is "+age
}
console.log(message(person_name,person_age))