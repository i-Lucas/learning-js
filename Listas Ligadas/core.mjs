// listas ordenadas
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}

// listas ordenadas
function defaultCompare(a, b) { // função que compara dois elementos
    if (a === b) {
        return Compare.EQUALS // se for igual retorna zero
    }
    // se o primeiro elemento foi maior retorna 1 se não retona -1
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

const DOES_NOT_EXIST = -1

function lesserEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

function biggerEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

//  retorna true se for igual e false se for diferente
function defaultEquals(a, b) {
    return a === b
}

function defaultToString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }
    return item.toString()
}

function swap(array, a, b) {
    /* const temp = array[a]
    array[a] = array[b]
    array[b] = temp */
    [array[a], array[b]] = [array[b], array[a]] // destructuring
}

function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a)
}

function defaultDiff(a, b) {
    return Number(a) - Number(b)
}

// exportando os dados
export default {
    Compare, lesserEquals, biggerEquals, defaultCompare, defaultEquals,
    defaultToString, swap, reverseCompare, defaultDiff
}