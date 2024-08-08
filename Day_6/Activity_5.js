//Activity_5
//Task 12:- Create a two dimensional array(matrix)and log the entire array to the console
let arr=[[1,2,3,4],[2,3,4,8]]
console.log(arr)

arr.forEach((row)=>{
    row.forEach((clm)=>{
        console.log(clm)
    })
})
let sum=0
arr.forEach((row)=>{
    row.forEach((clm)=>{
        sum=sum+clm
    })
})
console.log("matrix add=",sum)


