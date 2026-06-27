

const library = [];

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


function addBookInfo(){


    for(let i=0;i < library.length;i++){

        let bookCover = document.createElement('div');
        bookCover.className = 'bookCover';

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

    
        
        shelf.appendChild(bookCover);
        bookCover.appendChild(bookInfo);

        

        bookTitle.textContent=library[i].title;
        bookAuthor.textContent=library[i].author;
        bookTopic.textContent=library[i].topic;
        bookFormat.textContent=library[i].format;
        bookPages.textContent=library[i].pages;
        bookInfo.append(bookTitle, bookAuthor, bookTopic, bookFormat, bookPages, didRead);

    let readTag = document.createElement('div');
    readTag.className = ('readBook-label');


    if (library[i].didRead === true ) {
            
                bookCover.style.backgroundColor = "#fb91ff6d";
                //bookCover.appendChild(readTag);
                

                
        }

}
}


addBookInfo();

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener("click", () => {
    
    
    let newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('topic').value,
        document.getElementById('format').value,
        document.getElementById('pages').value,
        document.getElementById('didRead').value
    

    )});
library.push(newBook);

//const newBook = document.querySelector('.getNewBook')
/*
function addBookToLibrary(){
   const inputBook = new Book(
    this.name = function(){
        return prompt("new book alert?")
    }
   )
    
    library.push(inputBook)
    
   

}
    */
let bookForm = document.querySelector('#bookForm');


const addNewBook = document.querySelector('#newBook-btn');
addNewBook.addEventListener("click", () => {
    bookForm.style.display = "flex";
    shelf.appendChild(bookForm);
    
    
})
