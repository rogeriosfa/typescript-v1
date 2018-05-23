import { IBook } from './IBook';

export class Book implements IBook {
    constructor(
        public name: string,
        public author: string,
        public pagination: number,
        public value: number
    ) { }

}