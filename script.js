

let library = [];
let newBook;


class Book {
    constructor(title, author, topic, format, pages, didRead) { 
        this.title = title;
        this.author = author;
        this.topic = topic;
        this.format = format;
        this.pages = pages;
        this.didRead = didRead;
    }
    getInfo(){
      
    console.log(`Title "${this.title}". Topic "${this.topic}" Number of Pages ${this.pages} \n Who wrote it? "${this.author} Did you read it? ${this.didRead} \n Format: ${this.format}`)
    }
}
/*
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
*/
 



let book1 = new Book("Refactoring UI", "Adam Wathan & Steve Shoger", "modern design, UI","hardcopy", 218, true);
let book2 = new Book("Practical UI", "Adham Dannaway", "intuitive, UI", "hardcopy", 282, false);
let book3 = new Book("Better Web Typography for a Better Web", "Matej Latin", "web design, typography", "digital or hardcopy", 235, false);
let book4 = new Book("UI Design Systems Mastery", "Marina Budarina", "UI, design systems, fundamentals", "digital", 300, false);
let book5 = new Book("The Design Manual", "Adrian Kuleszo", "best practices,  UI, modern apps", "digital", 770, false);
let book6 = new Book("Ultimate Guide to Web Design", "Adrian Kuleszo", "web design, process, freelancers", "digital", 340, false);
book6.getInfo();


library.push(book1, book2, book3, book4, book5, book6);


    
const publicLibrary = document.getElementById('publicLibrary')
const shelf = document.createElement('div');
shelf.className = 'shelf';
publicLibrary.appendChild(shelf);



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

        bookInfo.append(bookTitle, bookAuthor, bookFormat, bookPages, bookTopic, didRead);
    

         let tags = bookTopic.textContent.split(",");
        bookTopic.innerHTML = tags.map(tag => `<span>${tag}</span>`).join(" ");

        let readTag = document.createElement('div');
        readTag.className = ('readBook-tag');


        let readCheck = document.createElement('div');
            readCheck.className = ("readCheck");
        readCheck.appendChild(readBtn);
        bookCover.appendChild(readCheck);
        let readLabel = document.createElement('p');
        readLabel.className = ('readBook-label');
        readLabel.textContent = "READ";

        readTag.appendChild(readLabel);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerText = "DELETE";
        bookCover.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function(){
        bookCover.remove();

        const index = library.indexOf(bookie);

        if (index !== -1){
        library.splice(index,1);
        }
        
    })
        

        readBtn.addEventListener('change', function(){
            if (this.checked){
                bookCover.style.backgroundColor = "#91a0ff58";
                bookCover.appendChild(readTag); 
                bookCover.appendChild(readBtn);
            } else {
                bookCover.style.backgroundColor = "#ffffff00";
                bookCover.removeChild(readTag); 
            }
        })

        if (bookie.didRead) {

                bookCover.style.backgroundColor = "#91a0ff58";
                bookCover.appendChild(readTag); 
                readTag.appendChild(readBtn);
                bookCover.appendChild(readBtn);

        }})
    };


addBookInfo();

let bookForm = document.querySelector('#bookForm');

const sidebar = document.querySelector('#sidebar');
const newBookBtn = document.querySelector('#newBook-btn');


newBookBtn.addEventListener("click", () => {
    bookForm.style.display = "flex";
    sidebar.appendChild(bookForm);
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



function removeBook(){

   

    deleteBtn.addEventListener("click", function(){
        shelf.removeChild(bookCover);
    })

}