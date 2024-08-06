//Activity 3:- Array Methods(Intermediate)
//Task 7:- Use the map method to careate a new array 
//where each number is doubled and log the new array

let arr=new Array(1,2,3,4,5)
let resultant_array=arr.map((ele)=>ele+ele)
console.log("input array=",arr)
console.log("dobule_array=",resultant_array)

//Task 8:- Use the filter method to create a new array with ony even numbers and log the new array
let even_array=arr.filter((ele)=>{return ele%2===0 ? ele:null})
console.log(even_array)

//Task 9:- Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum=arr.reduce((total,ele)=>{return total+ele})
console.log("sum of array ele=",sum)
