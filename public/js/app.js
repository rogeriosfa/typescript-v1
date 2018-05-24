///<reference path="IBook.ts"/>
var App;
(function (App) {
    var Book = /** @class */ (function () {
        function Book(name, author, pagination, value) {
            this.name = name;
            this.author = author;
            this.pagination = pagination;
            this.value = value;
        }
        return Book;
    }());
    App.Book = Book;
})(App || (App = {}));
///<reference path="src/Book.ts"/>
var App;
(function (App) {
    var books = [];
    var newBook = new App.Book('The Develop', 'Rogério Rodrigues', 200, 19.90);
    books.push(newBook);
    for (var index = 1; index < 10; index++) {
        var b = new App.Book('Produto ' + index, 'Author ' + index, 20 + index, index + Math.random());
        books.push(b);
    }
    console.log(books);
    for (var i = 0; i < books.length; i++) {
        var node = document.createElement('li');
        var text = document.createTextNode(books[i].name + ' - ' + books[i].author + ' - ' + '$' + books[i].value);
        node.appendChild(text);
        document;
        document.getElementById('list').appendChild(node);
    }
})(App || (App = {}));
