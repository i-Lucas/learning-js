// creating an array
let numbers = [1, 2, 3, 4, 5, 6]

// creating an array using constructor
let fruts = new Array('mango', 'grape', 'strawberry', 'apple')

// creating an empty array
let empty = new Array(5) // [ <10 empty items> ]

// creating a 'sparse' array
let sparse = [1, , , , 5] // [ 1, <3 empty items>, 5 ]

// resetting the size of an array
let resetting = [1, 2, 3, 4, 5]
resetting.length = 3 // resetting = [ 1, 2, 3 ]

// geting the aray size ( 6 )
let length = numbers.length // 6

// acessing an array item
let first = numbers[0]
let last = numbers[numbers.length -1]

// iterate an array
numbers.forEach((item, index) => console.log(`item ${item}, index ${index}`))

// add an item in the end of array
numbers.push('7') // [ 1, 2, 3, 4, 5, 6, 7 ]

// remove an item in the final of array
numbers.pop() // [ 1, 2, 3, 4, 5, 6 ]

// remove item from beginning
numbers.shift() // [ 2, 3, 4, 5, 6 ]

// add in the beginning
numbers.unshift(0, 1) // [ 0, 1, 2, 3, 4, 5, 6 ]

// find the index of an item
numbers.indexOf(item = 3) // index 3

// remove item by index (index pos / amount to remove )
numbers.splice(index = 3, amount = 1) // [ 0, 1, 2, 4, 5, 6 ]

// remove more than one item
let removed = numbers.splice(index = 3, amount = 3) // numbers = [ 0, 1, 2 ] removed = [ 4, 5, 6 ]

// copying one array
let copy = numbers.slice() // copy = [ 0, 1, 2 ]

// filling an array
empty.fill("1") // [ '1', '1', '1', '1', '1' ]

// filling from index 3
empty.fill("2", 3) // [ '1', '1', '1', '2', '2' ]

// filling from index 1 to index 4
empty.fill("a", 1, 4) // [ '1', 'a', 'a', 'a', '2' ]

// sorting an array by the first digit
let disordered = [3, 9, 10, 4, 7, 1]
disordered.sort() // [ 1, 10, 3, 4, 7, 9 ]

// using a function to sort the array from smallest to largest
disordered.sort((a, b) => a - b) // [ 1, 3, 4, 7, 9, 10 ]

// using includes to check if an element exists in the array
console.log(disordered.includes(99)) // false

// using join to separate array
console.log(disordered.join('-')) // 1-3-4-7-9-10

// converting an array to string
console.log(disordered.toString()) // 1,3,4,7,9,10

// creating an array with objects
let array_objects = [ { a: 2, b: 2 }, { a: 1, b: 2 }, { a: 5, b: 2 }, { a: 1, b: 2 }, { a: 10, b: 2 } ]
// 						element 0       element 1       element 2       element 3       element 4

// using the filter to returns elements whose 'a' property is greater than 2
let filtered = array_objects.filter(element => element.a > 2) // [ { a: 5, b: 2 }, { a: 10, b: 2 } ]

// using the forEach to iterating through the array
let foreach = array_objects.forEach(element => console.log( `a: ${element.a} b: ${element.b}`))

// using map to return a new array with 'a' properties incremented
let map = array_objects.map(element => element.a + 1 ) // [ 3, 2, 6, 2, 11 ]

// using reduce to sum all 'a' elements
let reduce = array_objects.reduce((accumulator, current) => accumulator = accumulator + current.a, 0) // 19

// using the find to returns on finding the first element that satisfies the condition
let find = array_objects.find(element => element.a == 10) // { a: 10, b: 2 }

let search = [3, 6, 9, 13, 15]
let multipleOF13 = (element) => element % 13 === 0

console.log(search.find(multipleOF13)) // return 13 (single element multiple of 13)

// using the findIndex
console.log(search.findIndex(multipleOF13)) // return 3 ( index of element 13 )
console.log(search.indexOf(multipleOF13)) // indexOf does not work with functions

// using the @iterator object
let iterator_array = [1, 2, 3]
let iterator_ = iterator_array[Symbol.iterator]()

console.log(iterator_.next().value) // print the first element (1)
console.log(iterator_.next().value) // print the second element (2)
console.log(iterator_.next().value) // print the first element (3)
console.log(iterator_.next().value) // (undefined) because there is no such element in the array

// a very easy way to iterate an array
for (const n of array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) {
    console.log(n)
}

/*
    two-dimensional and multidimensional array (array of arrays)   

    two-dimensional array representation      three dimensional array representation

            [0] [1] [2] [3] [4]                         [0] [1] [2] [3] [4]

    [0]     10  20  30  40  50                  [0]     10  20  30  40  50    
    [1]     50  40  30  20  10                  [1]     50  40  30  20  10
                                                [2]     40  20  10  30  50
*/

// creating
let two_dimensional = []
let three_dimensional = []

// filling
two_dimensional[0] = [10, 20, 30, 40, 50]
two_dimensional[1] = [50, 40, 30, 20, 10]

three_dimensional[0] = [10, 20, 30, 40, 50]
three_dimensional[1] = [50, 40, 30, 20, 10]
three_dimensional[2] = [40, 20, 10, 30, 50]

console_clean()

// iterating two-dimensional
two_dimensional.forEach(element => {
    element.forEach(element => {
        console.log(element)
    })
})

console_clean()

// iterating three-dimensional
three_dimensional.forEach(element => {
    element.forEach(element => {
        console.log(element)
    })
})

console_clean()
print(two_dimensional)

console_clean()
print(three_dimensional)

// other way to iterate
function print(matrix) {
    // traversed as rows of matrix
    for (let x = 0; x < matrix.length; x++) { 
        // goes through the columns
        for (let y = 0; y < matrix[x].length; y++) { 
            console.log(`[${x}]: ${matrix[x][y]}`)
        }
    }
}

function console_clean () { console.log('\n\n\n\n') } 