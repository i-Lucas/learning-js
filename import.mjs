
// @ts-check

import pkg from './export.mjs';
const { circleArea, squareArea, Book } = pkg;

console.log(circleArea(2))
console.log(squareArea(4))

const myBook = new Book('Livro')
console.log(myBook.printTitle())

