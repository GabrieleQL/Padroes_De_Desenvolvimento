export class Morcego {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public apresentar(): void {
        console.log(`Olá, eu sou o morcego ${this.nome}`);
        console.log("Morcego >> Eu me alimento de frutas, insetos, néctar e pólen, pequenos vertebrados ou sangue");
        console.log("Morcego >> Eu Voo");
        console.log("Morcego >> Eu durmo de cabeça pra baixo");
    }
}