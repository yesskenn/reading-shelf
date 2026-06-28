

let library = [];
let newBook;


function Book(title, author, topic, format, pages, didRead) {


    if (!new.target){
        throw Error("You must use the new operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.topic = topic;
    this.format = format;
    this.pages = pages;
    this.didRead = didRead;
    
}

 


Book.prototype.getInfo = function(){
      
    console.log(`Title "${this.title}". Topic "${this.topic}" Number of Pages ${this.pages} \n Who wrote it? "${this.author} Did you read it? ${this.didRead} \n Format: ${this.format}`)
}
const book1 = new Book("Refactoring UI", "Adam Wathan & Steve Shoger", "modern user interface design","hardcopy", 218, true);
const book2 = new Book("Practical UI", "Adham Dannaway", "designing intuitive interfaces", "hardcopy", 282, false);
const book3 = new Book("Better Web Typography for a Better Web", "Matej Latin", "improving web design typography", "digital or hardcopy", 235, false);
const book4 = new Book("UI Design Systems Mastery", "Marina Budarina", "UI design systems fundamentals", "digital", 300, false);
const book5 = new Book("The Design Manual", "Adrian Kuleszo", "best practices and UI skills for modern app design", "digital", 770, false);
const book6 = new Book("Ultimate Guide to Web Design", "Adrian Kuleszo", "web design process for freelancers", "digital", 340, false);


library.push(book1, book2, book3, book4, book5, book6);


    
const publicLibrary = document.getElementById('publicLibrary')
const shelf = document.createElement('div');
shelf.className = 'shelf';
publicLibrary.appendChild(shelf);

function createNewBook(){}
function addBookInfo(){
shelf.innerHTML = "";
    //for(let i=0;i < library.length;i++){
    library.forEach(bookie => {

        bookie.id = crypto.randomUUID();
       

        let bookCover = document.createElement('div');
        bookCover.className = 'bookCover';
        bookCover.dataset.id = bookie.id;


        let bookInfo = document.createElement('div');
        bookInfo.className = "bookInfo";   
        
        let bookTitle = document.createElement('h2');
        bookTitle.className = 'bookTitle';

        let bookAuthor = document.createElement('p');
        bookAuthor.className = 'bookAuthor';

        let bookTopic = document.createElement('p');
        bookTopic.className = 'bookTopic';

        let bookFormat = document.createElement('p');
        bookFormat.className = 'bookFormat';

        let bookPages = document.createElement('p');
        bookPages.className = 'bookPages';

        let didRead = document.createElement('p');
        didRead.className = 'didRead';

        let readBtn = document.createElement('input');
        readBtn.type = "checkbox";
        readBtn.className = "readBtn";
        
        shelf.appendChild(bookCover);
        bookCover.appendChild(bookInfo);
        

        bookTitle.textContent = bookie.title;
        bookAuthor.textContent = bookie.author;
        bookTopic.textContent = bookie.topic;
        bookFormat.textContent = bookie.format;
        bookPages.textContent = bookie.pages;

        bookInfo.append(bookTitle, bookAuthor, bookTopic, bookFormat, bookPages, didRead, readBtn);
    
        let readTag = document.createElement('div');
        readTag.className = ('readBook-label');
        readTag.innerText = "READ";
        

        readBtn.addEventListener('change', function(){
            if (this.checked){
                bookCover.style.backgroundColor = "#fb91ff6d";
                bookCover.appendChild(readTag); 
                bookCover.appendChild(readBtn);
            } else {
                bookCover.style.backgroundColor = "#fff";
                bookCover.removeChild(readTag); 
                readTag.appendChild(readBtn);
            }
        })

        if (bookie.didRead) {

                bookCover.style.backgroundColor = "#fb91ff6d";
                bookCover.appendChild(readTag); 
                readTag.appendChild(readBtn);
                bookCover.appendChild(readBtn);

        }})
    };


addBookInfo();

let bookForm = document.querySelector('#bookForm');


const newBookBtn = document.querySelector('#newBook-btn');


newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "flex";
    shelf.appendChild(bookForm);
    document.getElementById('frm').reset();
    
    
})
const submitBtn = document.querySelector('#submit-btn');
//const form = document.getElementById('frm');

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
   
      newBook = new Book(
        this.title = document.getElementById('title').value,
        this.author = document.getElementById('author').value,
        this.topic = document.getElementById('topic').value,
        this.format = document.getElementById('format').value,
        this.pages = document.getElementById('pages').value,
        this.pages = document.getElementById('didRead').checked

    )
    library.push(newBook);
    addBookInfo(newBook);
    
   
    // document.getElementById('didRead').checked

})



