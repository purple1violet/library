const myLibrary = [

];

const bookContainer = document.querySelector("#bookContainer");
const title = document.querySelector('#title');
const submitBtn = document.querySelector('#submitInfo');
const addBookForm = document.querySelector('#addBookForm');
const addBookBtn = document.querySelector("#addBook")
const newBookFormContainer = document.querySelector("#newBookFormContainer");
const cancelBtn = document.querySelector("#cancel");

function Book(title, author, types, status){
    this.title = title;
    this.author = author;
    this.types = types;
    this.status = Boolean(status);
}




function def() {
    const book1 = new Book("The Alchemist", "Paulo Coelho", "Fiction", true);
    const book2 = new Book("The Life-Changing Magic of Tidying Up", "Marie Kondo", "Non-Fiction", false);
    const book3 = new Book("The Little Prince", "Antoine de Saint-Exupéry", "Fiction", false);
    const book4 = new Book("Atomic Habits", "James Clear", "Non-Fiction", true);
    myLibrary.push(book1,book2,book3,book4);
    myLibrary.forEach(displayBook);
}

def();

//step
function addBookToLibrary() {
    const newBook = getInputInfo();
    const found = myLibrary.some(el => el.title === newBook.title);
    if (!found) {
        myLibrary.push(newBook);
        displayBook(newBook);
        clearForm();
        hiddenForm();}
    else{
    alert("repeat!");
    }
}

submitBtn.onclick=addBookToLibrary;

//get input value to construct object
function getInputInfo() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const types = document.querySelector('input[name="bookType"]:checked').value;
    const readBtn = document.querySelector('#status');
    const status = (readBtn.checked === true) ? true : false;
    return new Book(title, author, types, status)
}

//display the book content in a div container
function displayBook(book) {
    const completeStyle = () => {
        bookContent.classList.add("pink-text", "brown-border")
    }
    const notYetStyle = () => {
        bookContent.classList.remove("pink-text", "brown-border")
    }
            //container
            const bookContent = document.createElement("div");
            bookContent.classList.add("bookContent");
            //del button
            const deleteBtn = document.createElement('button');
            //title
            const header = document.createElement('h1');
            header.appendChild(document.createTextNode(book.title));
            //author
            const p1 = document.createElement('p');
            p1.appendChild(document.createTextNode("by " + book.author));
            p1.classList.add("author");
            //types
            const p2 = document.createElement('p');
            p2.appendChild(document.createTextNode(book.types));
            p2.classList.add("types", book.types);
            //read button
            const readBtn = document.createElement('button');
            readBtn.appendChild(document.createTextNode(
            (book.status === true) ? "Read" : "Not Yet"));
            readBtn.classList.add("status");
            //append 
            if (book.status === true) completeStyle();
            bookContent.append(deleteBtn,header,p1,readBtn,p2);
            bookContainer.prepend(bookContent);
//delete book content + array

            
            const del = () => {
                const bookTitle = book.title;
                const i = myLibrary.findIndex(x => x.title === bookTitle);
                myLibrary.splice(i, 1);
                bookContent.remove();
                console.log(myLibrary)}
//hover style
            

            const hoverStyle = () => {
                bookContent.classList.add("changeBg")
            }
            const removeStyle = () => {
                bookContent.classList.remove("changeBg")
            }

            const complete = () => {
                if (book.status === true){
                    book.status = false;
                    readBtn.textContent = "Not Yet";
                    notYetStyle();}
                else {book.status = true;
                    readBtn.textContent  = "Read";
                    completeStyle();}
            }
//function
            bookContent.onmouseover = hoverStyle;
            bookContent.onmouseout = removeStyle;
            deleteBtn.onclick = del;
            readBtn.onclick = complete;
           
}

//reset the form
function clearForm() {
    addBookForm.reset();
}

const editQuote = document.querySelector("#editQuote");
const menuContainer = document.querySelector("#menuContainer");

function hiddenForm(){
    addBookFormContainer.classList.add("hidden");
    menuContainer.classList.remove("hidden");
}

function hiddenBtn(){
    menuContainer.classList.add("hidden");
    addBookFormContainer.classList.remove("hidden");
}

const readNum = document.querySelector("#readNum");
const notNum = document.querySelector("#notNum");








