export class Golfinho {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public meChamo(): void {
        console.log(`Olá, eu sou o golfinho ${this.nome}`);
    }

    public seAlimentar(): void {
        console.log("Golfinho >> Eu me alimento de peixes e lulas");
    }

    public seMover(): void {
        console.log("Golfinho >> Eu nado");
    }

    public dormir(): void {
        console.log("Golfinho >> Eu durmo na água");
    }
}