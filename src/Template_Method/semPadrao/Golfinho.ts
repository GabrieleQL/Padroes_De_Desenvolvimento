export class Golfinho {
    private nome: string;

    constructor(nome: string = ""){
        this.nome = nome;
    }

    public apresentar(): void {
        console.log(`Olá, eu sou o golfinho ${this.nome}`);
        console.log("Golfinho >> Eu me alimento de peixes e lulas");
        console.log("Golfinho >> Eu nado");
        console.log("Golfinho >> Eu durmo na água");
    }
}