// Book Class : Represents a Book
class Book
{
    constructor(title, author, isbn, date) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.date = date;
    }
}

// Store Class : Handle Local Storage
class Storage
{
    static GetBooks()
    {
        let bookList;
        if(localStorage.getItem('book-keeper') === null) {
            bookList = [];
        }
        else {
            const value = localStorage.getItem('book-keeper');
            bookList = JSON.parse(value);
        }

        return bookList;
    }

    static AddBook(book)
    {
        let bookList = Storage.GetBooks();
        bookList.push(book);

        const value = JSON.stringify(bookList);
        localStorage.setItem('book-keeper', value);
    }

    static DeleteBook(isbn)
    {
        let bookList = Storage.GetBooks();
        const filterList = bookList.filter((book) => {
            return book.isbn !== isbn;
        });

        if(filterList.length === 0) {
            localStorage.removeItem('book-keeper');
        }
        else localStorage.setItem('book-keeper', JSON.stringify(filterList));
    }
}

// UI Class : Handle UI Class
class UI
{
    static DisplayBooks() {
        
        const bookList = Storage.GetBooks();
        
        const tableList = document.getElementById('book-list');
        tableList.innerHTML = '';

        bookList.forEach((book) => {
            UI.AddBook(book);
        });
    }

    static AddBook(book) {

        const tableList = document.getElementById('book-list');
        
        const bookElement = document.createElement('tr');
        bookElement.innerHTML = `
            <td class="center-text">${book.date}</td>
            <td class="center-text">${book.title}</td>
            <td class="center-text">${book.author}</td>
            <td class="row-isbn center-text">${book.isbn}</td>
            <td class="center-text"><a href="#" class="btn btn-danger btn-sm delete display-square">X</a></td>
        `;

        tableList.appendChild(bookElement);
    }

    static DeleteBook(targetBook)
    {
        if(targetBook.classList.contains('delete')) {
            
            const row  = targetBook.parentElement.parentElement;
            const isbn = row.getElementsByClassName('row-isbn')[0]['innerText'];

            row.remove();
            Storage.DeleteBook(isbn);
            UI.ShowAlert("Book Removed", "success");
        }
    }

    static ShowAlert(message, className)
    {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const forms = document.getElementById('book-form');

        container.insertBefore(div, forms);
        
        // Make Asynchronous Timeout
        new Promise(function(resolve) {
            setTimeout(resolve, 2000);
        }).then(() => {
            div.remove();
        });
    }

    static ClearFields() {

        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event : Display Books
document.addEventListener('DOMContentLoaded', function() {
    UI.DisplayBooks();
});

// Event : Add a Book
document.getElementById('addbook').addEventListener('click', event => {

    // Prevent Default Submit
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate Book Fields
    if(title === '' || author === '' || isbn === '') {
        UI.ShowAlert("Missing Fields", "danger");
    }
    else {
        const date = new Date();
        const book = new Book(title, author, isbn, `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        
        UI.ClearFields();
        UI.AddBook(book);
        Storage.AddBook(book);

        UI.ShowAlert("Book Successfully Added", "success");
    }
});

// Event : Remove a Book
document.getElementById('book-list').addEventListener('click', event => {
    UI.DeleteBook(event.target);
});