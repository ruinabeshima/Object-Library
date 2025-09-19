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
function AddBookToLibrary(title, author, pages, readOrNot){
  newBook = new Book(title, author, pages, readOrNot)
  myLibrary.push(newBook)
}

// Loop through array and display book objects
function BookDisplay(){
  const BookDisplayDelete = document.querySelectorAll(".book-container")
  BookDisplayDelete.forEach(element => element.remove())

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

    // Add delete button 
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.id = "delete-book"
    newDiv.appendChild(deleteButton)
  }
}

function ShowModal(){
  createNewBook.addEventListener("click", function(){
    modal.style.display = "flex"
    libraryContainer.style.display = "none"
    createNewBook.style.display = "none"
    pageTitle.style.display = "none"

    CloseModal()
    CreateNewBook()
  })
}

function CloseModal(){
  modalClose.addEventListener("click", function(){
    modal.style.display = "none"
    libraryContainer.style.display = "grid"
    createNewBook.style.display = "block"
    pageTitle.style.display = "block"
  })

  bookSubmit.addEventListener("click", function(){
    modal.style.display = "none"
    libraryContainer.style.display = "grid"
    createNewBook.style.display = "block"
    pageTitle.style.display = "block"
  })
}

function CreateNewBook(){
  bookSubmit.addEventListener("click", function(){
    title = newBookTitle.value 
    author = newBookAuthor.value 
    pages = newBookPages.value
    readOrNot = newBookReadOrNot.checked
    AddBookToLibrary(title, author, pages, readOrNot)
    console.log(myLibrary)
    BookDisplay()
    event.preventDefault()
    CloseModal()
  })
}

//main
const libraryContainer = document.getElementById("library-container")
const createNewBook = document.getElementById("new-book")
const modal = document.getElementById("modal")
const modalClose = document.getElementById("modal-close")
const pageTitle = document.getElementById("page-title")

const newBookTitle = document.getElementById("new-book-title")
const newBookAuthor = document.getElementById("new-book-author")
const newBookPages = document.getElementById("new-book-pages")
const newBookReadOrNot = document.getElementById("new-book-read-or-not")
const bookSubmit = document.getElementById("form-submit")


AddBookToLibrary("A", "B", "C", true)
AddBookToLibrary("E", "F", "G", false)
AddBookToLibrary("I", "J", "K", true)
BookDisplay()
ShowModal()

