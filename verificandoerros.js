// @ts-check

/** @param {string} nome (definindo o parâmetro nome como string obrigatoriamente) */
const Apresentar = nome => 'Olá ' + nome

// console.log(Apresentar(1)) - retorna um erro pois não estamos passando uma string como parâmetro

/** @param {boolean} value*/
const Verificar = value => value ? true : false

// console.log(Verificar(1)) - retorna um erro pois não estamos passando um booleano como parâmetro

class Pessoa {

    /** @param {string} nome @param {number} idade @param {boolean} empregado */

    constructor(nome, idade, empregado) {
        this.nome = nome
        this.idade = idade
        this.empregado = empregado
    }

    VerificarNome() {
        return Apresentar(this.nome)
    }

    VerficarIdade() {
        if (this.idade >= 18) {
            return this.nome + ' é maior de idade'
        }
    }

    VerificarEmpregado() {
        return Verificar(this.empregado) ? `${this.nome} está empregado` : `${this.nome} está desempregado`
    }

}

const lucas = new Pessoa('Lucas', 25, true)

console.log(lucas.VerificarNome())
console.log(lucas.VerficarIdade())
console.log(lucas.VerificarEmpregado())

const laura = new Pessoa('Laura', 55, false)

console.log(laura.VerificarNome())
console.log(laura.VerficarIdade())
console.log(laura.VerificarEmpregado())

class Carro {

    /** @param {string} modelo @param {number} ano @param {string} motor @param {string} combustivel */
    constructor(modelo, ano, motor, combustivel) {
        this.modelo = modelo
        this.ano = ano
        this.motor = motor
        this.combustivel = combustivel
    }

    Verificacao() {
        this.VerficarModelo()
        this.VerificarAno()
        this.VerificarMotor()
        this.VerificarCombustivel()
    }

    VerficarModelo() {
        return console.log('o modelo do veículo é ' + this.modelo)
    }

    VerificarAno() {
        return console.log('o ano do veículo é ' + this.ano)
    }

    VerificarMotor() {
        return this.motor == '6 cilindros' ? console.log('6 cilindros') : console.log('4 cilindros')
    }

    VerificarCombustivel() {
        return this.combustivel == 'gasolina' ? console.log('gasolina') : console.log('àlcool')
    }
}

const Opala = new Carro('Diplomata', 1992, '6 cilindros', 'alcool')
Opala.Verificacao()

class PintarCarro extends Carro {
    /**
     * @param {string} modelo @param {number} ano @param {string} motor @param {string} combustivel
       @param {string} cor
     */
    constructor(modelo, ano, motor, combustivel, cor) {
        super(modelo, ano, motor, combustivel)
        this.cor = cor
    }

    VerificarCor() {
        return console.log('a cor do carro é ' + this.cor)
    }

    Verificar() {
        this.Verificacao()
        this.VerificarCor()
    }
}

const Gol = new PintarCarro('Gol', 1994, '4 cilindros', 'gasolina', 'vermelho')
Gol.Verificar()

/** @type {string | boolean}  */
let stringORbool;
stringORbool = 'true'

/** @type {{ a: string, b: number }} */
const objeto = {
    a: 'lucas',
    b: 25
}
