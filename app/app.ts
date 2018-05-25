///<reference path="src/Book.ts"/>

module App {

    var books: Array<Book> = [];

    var newBook = new Book('The Develop', 'Rogério Rodrigues', 200, 19.90);
    books.push(newBook);

    for (let index = 1; index < 10; index++) {
        var b = new Book('Produto ' + index, 'Author (' + index + ')', 20 + index, index + Math.random());
        books.push(b);
    }

    console.log(books);
    for (let i = 0; i < books.length; i++) {
        var node = document.createElement('li');
        var text = document.createTextNode(books[i].name + ' - ' + books[i].author + ' - ' + 'pg' + books[i].pagination + '  $' + books[i].value);
        node.appendChild(text);
        document
        document.getElementById('list').appendChild(node);
    }
}