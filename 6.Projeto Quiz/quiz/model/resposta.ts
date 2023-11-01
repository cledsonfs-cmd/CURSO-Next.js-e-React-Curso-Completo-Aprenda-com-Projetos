export default class RespostaModel {
    #valor: string
    #acerta: boolean
    #revelada: boolean

    constructor(valor: string, acerta: boolean, revelada = false) {
        this.#valor = valor
        this.#acerta = acerta
        this.#revelada = revelada
    }

    get valor(){
        return this.#valor
    }

    get acerta(){
        return this.#acerta
    }

    get revelada(){
        return this.#revelada
    }
}