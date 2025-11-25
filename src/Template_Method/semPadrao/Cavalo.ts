export class Cavalo {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public apresentar(): void {
        console.log(`Olá, eu sou o cavalo ${this.nome}`);
        console.log("Cavalo >> Eu me alimento de capim, feno e silagem");
        console.log("Cavalo >> Eu Troteio");
        console.log("Cavalo >> Eu durmo em pé");
    }
}