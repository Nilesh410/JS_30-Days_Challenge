//Activity 2 Array Basic Methods
//Task 3:- Use the push method to add a new number to end of the array and log the updated array

let arr=new Array(1,2,3,4,5)
console.log("Before push the array elements=")
console.log(arr)
arr.push("NSS")
console.log("After push array elements are=")
console.log(arr)


//Task 4: Use the pop method to remove last element from the array and log the updated array
let remove_ele=arr.pop()
console.log("remove_ele=",remove_ele)
console.log(arr)
let remove_first=arr.shift()
console.log("remove_ele=",remove_first)
console.log(arr)
arr.unshift("PICT")
console.log("After the unshift we can add ele at first")
console.log(arr)
