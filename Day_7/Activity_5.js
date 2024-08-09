//Activity_5:- Object Iteration
//Task 8:- use a for---in loop to iterate over the properties of the book object and log each property and its value.

let book_details={
    title:"Mrutanjay",
    author:"Shivaji Sawant",
    year:2024,
    book_info:()=>{
       console.log(`Title:${this.title}
                    Author:${this.author}
                    Year:${this.year}`)
    }
}
console.log(book_details)
console.log(book_details.book_info())

for (const key in book_details) {
    console.log(`${key}:${book_details[key]}`) 
    }

//Task 9: Use objet.keys and object.values methods to log all the keyw and values of the book object
console.log("Object properties are:=",Object.keys(book_details))
console.log("object property values are=",Object.values(book_details))
 
