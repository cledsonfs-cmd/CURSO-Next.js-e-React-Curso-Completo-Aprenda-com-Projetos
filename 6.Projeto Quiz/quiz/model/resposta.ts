export default class RespostaModel {
    #valor: string
    #acerta: boolean
    #revelada: boolean

    constructor(valor: string, acerta: boolean, revelada = false) {
        this.#valor = valor
        this.#acerta = acerta
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true)
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get acerta() {
        return this.#acerta
    }

    get revelada() {
        return this.#revelada
    }

    revelar(){
        return new RespostaModel(this.#valor, this.#acerta, true)
    }

    paraObjeto() {
        return {
            valor: this.#valor,
            acerta: this.#acerta,
            revelada: this.#revelada,
        }
    }
}