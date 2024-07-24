let arr_func1=(no)=>no*no;

let arr_func2=(no1)=>{
    console.log("square of no=",no1)
};

function higher_order1(cbf1,cbf2,num)
{
      let result=cbf1(num);
      
      cbf2(result)
      //console.log(`squre of ${num}=${cbf2(result)}`)
     // console.log("square of num=",cbf2(result))
}

higher_order1(arr_func1,arr_func2,3)