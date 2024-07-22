//Activity 5:- Higher Order Function 
//Task 9:- Write a higher order function that takes a function 
// and a number, and calls the function that many times

let arr_func=()=>{
    return ("call back function")
}

function higher_order_func (arr_func1,num)
{
    for(let i=1;i<=num;i++)
    {
        console.log(`${arr_func1()} executed ${i} time`)
    }
}
higher_order_func(arr_func,5)