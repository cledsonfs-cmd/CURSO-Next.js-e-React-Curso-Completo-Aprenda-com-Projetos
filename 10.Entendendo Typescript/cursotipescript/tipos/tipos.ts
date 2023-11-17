//string
let nome: string = 'João'
console.log(nome)

//numbers
let idade:number = 27
console.log(idade)

//boolean
let possuiHobbies:boolean = true
console.log(possuiHobbies)

//tipos dinmicos
let minhaIdade
minhaIdade = 27
console.log(minhaIdade)
minhaIdade='tenho 27'
console.log(minhaIdade)

//array
let hobbies:any = ['cozinhar', 'praticar sport']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)

//tuplas
let endereco: [string, number,string] = ['Av 123', 99,'casa ']
console.log(endereco)

endereco = ['Av 123', 99,'teste']

//enums
enum Cor{
    cinza,
    verde = 100,
    azul 
}

let minhaCor = Cor.azul
console.log(minhaCor)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)