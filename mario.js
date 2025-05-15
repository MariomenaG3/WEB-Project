let books = [];
let currentEditIndex = null;

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const isbn = document.getElementById('isbn').value;
    const category = document.getElementById('category').value;
    const copies = parseInt(document.getElementById('copies').value);

    if (title && author && publisher && isbn && category && copies) {
        const book = { title, author, publisher, isbn, category, copies };

        if (currentEditIndex !== null) {
            books[currentEditIndex] = book;
            currentEditIndex = null;
        } else {
            books.push(book);
        }

        clearForm();
        renderBooks();
    } else {
        alert("Please fill in all fields.");
    }
}

function renderBooks(filteredBooks = books) {
    const table = document.getElementById('bookTable');
    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
            <th>Category</th>
            <th>Copies</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    `;
    filteredBooks.forEach((book, index) => {
        table.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.publisher}</td>
                <td>${book.isbn}</td>
                <td>${book.category}</td>
                <td>${book.copies}</td>
                <td><button class="update" onclick="editBook(${index})">Edit</button></td>
                <td><button class="delete" onclick="deleteBook(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('publisher').value = book.publisher;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('category').value = book.category;
    document.getElementById('copies').value = book.copies;
    currentEditIndex = index;
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('publisher').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('category').value = '';
    document.getElementById('copies').value = '';
}
window.onload = function() {
    books = [
        { title: "Utopia", author: "Ahmed Khaled Towfik", publisher: "Dar Al-Shorouk", isbn: "9789770912345", category: "Fiction", copies: 8 },
        { title: "Palace Walk", author: "Naguib Mahfouz", publisher: "Dar Al-Maaref", isbn: "9789770923456", category: "Fiction", copies: 5 }
    ];
    renderBooks();
};