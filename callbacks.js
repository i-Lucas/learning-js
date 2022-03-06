

// callbacks

promptx = "Lucas"

const Saudacao = (nome) => console.log('olá ' + nome)

const Input = (callback) => {
    const nome = promptx
    callback(nome)
}

Input(Saudacao)

/* // usado em html
const callback_ = event => console.log("aconteceu um evento" + event.type)
window.addEventListener('click', callback_) */

const Somar = (x, y) => x + y
const Calcular = (x, y, Computar) => Computar(x, y)
const Resultado = Calcular(20, 30, Somar)
console.log(Resultado)

const arr = [1, 2, 3, 4, 5]
const newArr = arr.map(x => x + x)
console.log(newArr)
