// estruturas de controle ( if, else e switch )
// laços ( while, do while e for )



// condicionais


let n = 1
if (n === 1) {
    console.log('n = 1')
    // executa pois n é = 1
}

let x = 0

if (x === 1) {
    console.log('x = 1')
} else {
    console.log('x != 1')
}

// estrutura if else if

let mes = 5
if (mes === 1) {
    console.log('janeiro')
} else if (mes === 2) {
    console.log('fevereiro')
} else if (mes === 3) {
    console.log('março')
} else {
    console.log('mes não é janeiro, nem fevereiro nem março')
}

// switch

let h = 5

switch (h) {
    case 1:
        console.log('h = 1')
        break
    case 2:
        console.log('h = 2')
        break
    case 3:
        console.log('h = 3')
        break
    default:
        console.log('h não é 1, nem 2, nem 3')
}


// operador ternário

let f = 10
const resultado = f === 10 ? true : false
console.log(resultado)

// ou 

console.log(f === 10 ? 'verdadeiro' : false)



// laços


for (let i = 0; i < 10; i++) {
    console.log('i: ' + i) // 0 ... 9
}

let v = 0
while (v < 10) {
    console.log('v: ', v) // 0 ... 9
    v++
}

let b = 0
do {
    console.log('b:  ' + b) // 0 ... 9
    b++
} while (b < 10)

