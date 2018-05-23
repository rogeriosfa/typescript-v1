"use strict";
exports.__esModule = true;
var Book_1 = require("./src/Book");
var App;
(function (App) {
    var books = [];
    var newBook = new Book_1.Book('The Develop', 'Rogério Rodrigues', 200, 19.90);
    books.push(newBook);
    console.log(books);
})(App || (App = {}));
