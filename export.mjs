

/** @param {number} r  (radius of the circle)*/
const circleArea = r => 3.14 * (r ** 2)

/** @param {number} s (lado do quadrado) */
const squareArea = s => s * s

class Book {
    
    /** @param {string} title (título do livro) */

    constructor(title) {
        this.title = title
    }

    printTitle() {
        return this.title
    }
}

export default { circleArea, squareArea, Book }