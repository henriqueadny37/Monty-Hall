export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #framecolor: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, framecolor = false, aberta = false){ 
        this.#numero = numero
        this.#temPresente = temPresente
        this.#framecolor = framecolor
        this.#aberta = aberta
    }

    
    get numero(){
        return this.#numero
    }

    get temPresente(){
        return this.#temPresente
    }

    get framecolor(){
        return this.#framecolor
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }

    desselecionar(){
        const framecolor =  false
        return new PortaModel(this.numero, this.temPresente, framecolor, this.aberta)
    }

    alterarSelecao(){
        const framecolor = !this.framecolor
        return new PortaModel(this.numero, this.temPresente, framecolor, this.aberta)
    }
    abrir(){
        const aberta =  true
        return new PortaModel(this.numero, this.temPresente, this.framecolor, aberta)
    }
}