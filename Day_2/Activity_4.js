//Activity 4:- Logical Operator

let arr=new Array(23,12,21,45,32)
console.log(`Array elements are:- ${arr}`)

//Task 11:- Logical And Operator
arr.forEach(ele => {
    if(ele>25 && (ele%5==0))
    {
        console.log(ele)
    }
});
//Task 12:- Logical Or  Operator
arr.forEach(ele => {
    if(ele>25 || (ele%5==0))
    {
        console.log(ele)
    }
});

//Task 13:- Logical Not  Operator
arr.forEach(ele => {
    if(!(ele%3===0))
    {
        console.log(ele)
    }
});