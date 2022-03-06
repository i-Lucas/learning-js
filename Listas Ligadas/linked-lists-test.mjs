const printList = (list) => console.log(list.toString())

function linkedListTest(list) {

    console.clear()

    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)

    console.log(list.indexOf(11)) // undefined pois o elemento 11 não existe na lista
    list.remove(10) // remove o elemento 10

    printList(list) // 20 - 30 - 40 - 50 -> ok
    console.log(list.size()) // 4 -> ok
    console.log(list.isEmpty()) // false -> ok

    console.log(list.indexOf(40)) // 2 -> ok

    list.insert(99, 4)
    printList(list) // 20 - 30 - 40 - 50 - 99 -> ok

    list.removeAt(3)
    printList(list) // 20 - 30 - 40 - 99 -> ok

    console.log(list.getElementAt(3)) // Node { element: 99, next: undefined } -> ok

    list.clear()
    console.log(list.isEmpty()) // true -> ok
}

function DoublyLinkedListTest(list) {

    console.clear()

    list.insert(50, 0)
    list.insert(40, 0)
    list.insert(30, 0)
    list.insert(20, 0)
    list.insert(10, 0)

    printList(list) //  10 - 20 - 30 - 40 - 50 -> ok
    //  0    1    2    3    4

    list.removeAt(3)
    printList(list) // 10 - 20 - 30 - 50 -> ok

    list.removeAt(0)
    printList(list) // 20 - 30 - 50 -> ok

    list.removeAt(2)
    printList(list) // 20 - 30 -> ok

    console.log(list.isEmpty()) // false -> ok
    console.log(list.size()) // 2 -> ok
    list.clear()
    console.log(list.isEmpty()) // true -> ok
}

function CircularLinkedListTest(list) {

    console.clear()

    list.insert(10, 0)
    list.insert(9, 1)
    list.insert(8, 2)
    list.insert(7, 3)
    list.insert(80, 2)
    list.insert(99, 1)

    list.removeAt(4)
    list.removeAt(4)
    list.removeAt(0)

    list.insert(0, 0)
    list.insert(1, 0)
    list.insert(77, 0)

    console.log(list.getElementAt(5))
    printList(list)
}

function SortedLinkedListTest(sorted) {
    sorted.insert(10, 0)
    sorted.insert(5, 0)
    sorted.insert(3, 0)
    sorted.insert(2, 0)
    sorted.insert(0, 0)
    sorted.insert(1, 0)
    sorted.insert(9, 0)
    sorted.insert(6, 0)

    console.log(sorted.indexOf(10)) // 10 -> ok
    console.log(sorted.getHead()) // 6 -> ok
    sorted.remove(2) // -> ok
    printList(sorted)
}


// exportando os dados
export default {
    linkedListTest, DoublyLinkedListTest, CircularLinkedListTest, SortedLinkedListTest, printList
}