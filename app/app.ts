import { Book } from './src/Book';

module App {

    var books: Array<Book> = [];

    var newBook = new Book('The Develop', 'Rogério Rodrigues', 200, 19.90);
    books.push(newBook);

    console.log(books);

}