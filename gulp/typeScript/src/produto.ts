export interface Vendavel { //exportada para ser usada em outros arquivos
    nome: string
    preco: number
}

export class Carro implements Vendavel {
    nome: string
    preco: number
}
