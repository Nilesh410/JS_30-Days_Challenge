//Activity_2:- Object Method
//Task 3:-Add a method to the book object that returns a string with the book title and author and log the result and 
//calling this method
let book_details={
    title:"Mrutanjay",
    author:"Shivaji Sawant",
    year:2024
}
console.log(book_details)
book_details.details=function(){
    return (`Book Name:${this.title} and author:${this.author}`)
}
console.log(book_details)
console.log(book_details.details())

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book year property then log the updated object
console.log(book_details)
book_details.update_year=function(updated_year)
{
    this.year=updated_year
}
book_details.update_year(2021)
console.log(book_details)