// Array to store book objects 
const myLibrary = [] 

// Object constructor for books 
function Book(title, author, pages, readOrNot){
  this.title = title 
  this.author = author 
  this.pages = pages 
  this.readOrNot = readOrNot

  //Unique ID
  this.id = crypto.randomUUID()
}

