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

// Stores book objects in array
function addBookToLibrary(title, author, pages, readOrNot){
  newBook = new Book(title, author, pages, readOrNot)
  myLibrary.push(newBook)
}

// Loop through array and display book objects
function BookDisplay(){
  for (let book of myLibrary){
    const newDiv = document.createElement("div")
    newDiv.classList.add("book-container")
    libraryContainer.appendChild(newDiv)

    // Add title
    const bookTitle = document.createElement("p")
    bookTitle.textContent = book.title
    bookTitle.classList.add("book-title")
    newDiv.appendChild(bookTitle)

    // Add author 
    const bookAuthor = document.createElement("p")
    bookAuthor.textContent = book.author 
    bookAuthor.classList.add("book-author")
    newDiv.appendChild(bookAuthor)

    // Add pages 
    const bookPages = document.createElement("p")
    bookPages.textContent = book.pages
    bookPages.classList.add("book-pages")
    newDiv.appendChild(bookPages)

    // Add readOrNot
    const bookReadOrNot = document.createElement("p")
    bookReadOrNot.classList.add("book-read-or-not")
    if (book.readOrNot === true){
      bookReadOrNot.textContent = "READ"
    } else if (book.readOrNot === false){
      bookReadOrNot.textContent = "NOT READ"
    }
    newDiv.appendChild(bookReadOrNot)
  }
}

//main
libraryContainer = document.getElementById("library-container")
createNewBook = document.getElementById("new-book")

addBookToLibrary("A", "B", "C", true)
addBookToLibrary("E", "F", "G", false)
addBookToLibrary("I", "J", "K", true)
BookDisplay()