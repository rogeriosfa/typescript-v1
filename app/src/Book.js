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
