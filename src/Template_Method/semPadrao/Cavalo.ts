export class Cavalo {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public meChamo(): void {
        console.log(`Olá, eu sou o cavalo ${this.nome}`);
    }

    public seAlimentar(): void {
        console.log("Cavalo >> Eu me alimento de capim, feno e silagem");
    }

    public seMover(): void {
        console.log("Cavalo >> Eu Troteio");
    }

    public dormir(): void {
        console.log("Cavalo >> Eu durmo em pé");
    } 
}