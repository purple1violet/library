const myLibrary = [];
//constructor
class Book{
    constructor (title, author, types, status){
        this.title = title;
        this.author = author;
        this.types = types;
        this.status = Boolean(status)
    };

    displayBook() {
        const bookContainer = document.querySelector("#bookContainer");
        //read btn style
        const completeStyle = () => {
           bookContent.classList.add("pink-text", "brown-border")
        }
        const notYetStyle = () => {
            bookContent.classList.remove("pink-text", "brown-border")
        }
        //create book container
        const bookContent = document.createElement("div");
        bookContent.classList.add("bookContent");
        //del button
        const deleteBtn = document.createElement('button');
        //title
        const header = document.createElement('h1');
        header.appendChild(document.createTextNode(this.title));
        //author
        const p1 = document.createElement('p');
        p1.appendChild(document.createTextNode("by " + this.author));
        p1.classList.add("author");
        //types
        const p2 = document.createElement('p');
        p2.appendChild(document.createTextNode(this.types));
        p2.classList.add("types", this.types);
        //read button
        const readBtn = document.createElement('button');
        readBtn.appendChild(document.createTextNode(
        (this.status === true) ? "Read" : "Not Yet"));
        readBtn.classList.add("status");
        //append 
        if (this.status === true) completeStyle();
        bookContent.append(deleteBtn,header,p1,readBtn,p2);
        bookContainer.prepend(bookContent);
        //delete btn function [delete book content + array]
        const del = () => {
            const bookTitle = this.title;
            const i = myLibrary.findIndex(x => x.title === bookTitle);
            myLibrary.splice(i, 1);
            bookContent.remove();
            console.log(myLibrary);
        }
        //read btn function [change btn content]
        const complete = () => {
            if (this.status === true){
                this.status = false;
                readBtn.textContent = "Not Yet";
                notYetStyle();}
            else {this.status = true;
                readBtn.textContent  = "Read";
                completeStyle();}
            }
        //btn click + function
        deleteBtn.onclick = del;
        readBtn.onclick = complete;
    }
}

//step of add a new book
const addBookAction = ( function (){
    //get info from the form
    function getInputInfo() {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const types = document.querySelector('input[name="bookType"]:checked').value;
        const readBtn = document.querySelector('#status');
        const status = (readBtn.checked === true) ? true : false;
        return new Book(title, author, types, status)
    }  

    function addBookToLibrary() {
        const addBookForm = document.querySelector('#addBookForm');
        const newBook = getInputInfo();
        //check repeat book
        const found = myLibrary.some(el => el.title === newBook.title);
        if (!found) {
            myLibrary.push(newBook);
            newBook.displayBook();
            addBookForm.reset();
            hiddenAction.hiddenForm();
            console.log(myLibrary);}
        else{
        alert("It is a repeat book!");
        }
    }
    return {getInputInfo, addBookToLibrary};
    })();

//menu hidden function
const hiddenAction = ( function (){

    const menuContainer = document.querySelector("#menuContainer");
    const editQuoteForm = document.querySelector("#editQuoteForm");

    function hiddenForm(){
        addBookFormContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
    }

    function hiddenBtn(){
        menuContainer.classList.add("hidden");
        addBookFormContainer.classList.remove("hidden");
    }

    function hiddenQuoteForm(){
        editQuoteFormContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
    }

    function hiddenQuoteBtn(){
        menuContainer.classList.add("hidden");
        editQuoteFormContainer.classList.remove("hidden");
    }

    function changeQuote() {
        const quotewords = document.querySelector("#quotewords");
        const bookName = document.querySelector("#bookName");
        const bookAuthor = document.querySelector("#bookAuthor");
        const quoteContent = document.querySelector("#quoteContent");
        const writer = document.querySelector("#writer");
        quoteContent.textContent = quotewords.value;
        writer.textContent = `${bookAuthor.value}, ${bookName.value}`;
        editQuoteForm.reset();
        hiddenQuoteForm()
    }
    return {hiddenForm, hiddenBtn, hiddenQuoteForm, hiddenQuoteBtn, changeQuote};
})();