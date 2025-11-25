export class Morcego {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public meChamo(): void {
        console.log(`Olá, eu sou o golfinho ${this.nome}`);
    }

    public seAlimentar(): void {
        console.log("Morcego >> Eu me alimento de frutas, insetos, néctar e pólen, pequenos vertebrados ou sangue");
    }

    public seMover(): void {
        console.log("Morcego >> Eu Voo");
    }

    public dormir(): void {
        console.log("Morcego >> Eu durmo de cabeça pra baixo");
    }
}