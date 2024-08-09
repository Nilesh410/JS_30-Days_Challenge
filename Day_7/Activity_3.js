//Activity 3:- Nested Object
//Task 5:- Create a nested object resepresenting a library with properties like name and books 
//(an array of book objects)and log the library object to the console.

let library={
    name:"The Great Indian Library",
    books:{
        Literature:["Mrutankjay","Radhe","Sambaji","Shivaji"],
        Sports:["Cricket","Football","Sachin Tendulkar"],
        History:["Indian History", "The Great Maratha Empire"],
        Finance:["Rich Dad and Poor Dad","Power of money"]
    }
}
console.log(library)
console.log(library.books.Finance)