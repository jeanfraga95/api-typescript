
export default class Usuario {
    id: number;
    nome: string;
    idade: number;
    cadastrado: boolean;



    private static nextId: number = 1;
    constructor(id: number, nome: string, idade: number, cadastrado: boolean) {
        this.id = Usuario.nextId++;
        this.nome = nome;
        this.idade = idade;
        this.cadastrado = cadastrado;
    }
}

