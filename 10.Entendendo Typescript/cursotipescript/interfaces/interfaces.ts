interface Humano{
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
    saudar2?(sobrenome: string): void
}

function saudarComOla(pessoa:Humano){
    console.log('olá', pessoa.nome)
}

function mudarNome(pessoa:Humano){
    pessoa. nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Jopão',
    idade: 27,
    saudar(sobrenome: 'pacheco'){
        console.log(sobrenome)
    }
}

saudarComOla(pessoa)

mudarNome(pessoa)

saudarComOla(pessoa)
pessoa.saudar('hahah')

//Usando Classes
class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string): void {
        console.log(this.nome +' '+sobrenome )
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

//Interface função
interface FuncaoCalculo{
    (a:number, b:number):number
}

let potencia: FuncaoCalculo
potencia = function(base:number, exp:number):number{
    return Array(exp).fill(base).reduce((t,a) => t*a) 
}

console.log(potencia(3,10))