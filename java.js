const myLibrary = [];

const bookContainer = document.querySelector("#bookContainer");
const title = document.querySelector('#title');
const submitBtn = document.querySelector('#submitInfo');
const addBookForm = document.querySelector('#addBookForm');
const addBookBtn = document.querySelector("#addBook")
const newBookFormContainer = document.querySelector("#newBookFormContainer");
const cancelBtn = document.querySelector("#cancel");

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = Boolean(status);
}

Book.prototype.read = function() {
    this.status = true;
  };

function def() {
    const book1 = new Book("Apple", "Orange", 168, true)
    myLibrary.push(book1);
    let index = myLibrary.indexOf(book1);
    displayBook(index);
}

def();

//add to array, clear form content
function addBookToLibrary() {
    const newBook = getInputInfo();
    myLibrary.push(newBook);
    let index = myLibrary.indexOf(newBook);
    displayBook(index);
    clearForm();
    hiddenForm();
}

//get input value
function getInputInfo() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = true;
    return new Book(title, author, pages, status)
}

//show the book content in div
function displayBook(index) {
            const bookContent = document.createElement("div");
            bookContent.classList.add("bookContent");
            bookContent.setAttribute('id',`bookContent${index}`);
            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode("Delete"));
            const header = document.createElement('h1');
            header.appendChild(document.createTextNode(myLibrary[index].title));
            header.setAttribute('id',`header${index}`);
            const p1 = document.createElement('p');
            p1.appendChild(document.createTextNode("author:" + myLibrary[index].author));
            const p2 = document.createElement('p');
            p1.appendChild(document.createTextNode("pages:" + myLibrary[index].pages + "pages"));
            const readBtn = document.createElement('button');
            readBtn.appendChild(document.createTextNode("Read"));
            bookContent.append(deleteBtn,header,p1,p2,readBtn);
            bookContainer.prepend(bookContent);
//delete book content + array
            const del = () => {
                const bookTitle = document.querySelector(`#header${index}`);
                const i = myLibrary.findIndex(x => x.title === bookTitle.textContent);
                myLibrary.splice(i, 1);
                bookContent.remove();
                console.log(myLibrary)}
//hover style
            const hoverStyle = () => {
                bookContent.classList.add("pink-text", "brown-border")
            }
            const removeStyle = () => {
                bookContent.classList.remove("pink-text", "brown-border")
            }
//function
            bookContent.onmouseover = hoverStyle;
            bookContent.onmouseout = removeStyle;
            deleteBtn.onclick = del;
           
}

//add book button
function clearForm() {
    addBookForm.reset();
}

function hiddenForm(){
    addBookFormContainer.classList.add("hidden");
    addBookBtn.classList.remove("hidden");
}

function hiddenBtn(){
    addBookBtn.classList.add("hidden");
    addBookFormContainer.classList.remove("hidden");
}


addBookBtn.onclick = hiddenBtn;






