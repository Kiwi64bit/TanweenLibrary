function UpdateBookInformation(book) {
    if (book) {
        // Update the html with the book data
        document.title = book.title;
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = book.author;
        document.getElementById('book-cover').src = `../assets/covers/${book.cover}`;
        document.getElementById('book-description').textContent = book.description;
        document.getElementById('book-year').textContent = book.year;
    } else {
        document.getElementById('book-container').innerHTML = "<h1>Book not found!</h1>";
    }
}


function createBookPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    // Fetch book data from the json file
    fetch('../data/books.json')
        .then(Response => Response.json())
        .then(books => {
            const book = books.find(element => element.id == bookId);
            UpdateBookInformation(book);
        })
        .catch(error => console.error('Error loading book:', error));
}


document.addEventListener('DOMContentLoaded', createBookPage());
