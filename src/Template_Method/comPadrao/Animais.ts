export abstract class Animal {
    protected nome: string;

    constructor(nome: string = "") {
        this.nome = nome;
    }

    public apresentar(): void {
        console.log(`Olá, eu sou o ${this.constructor.name} chamado ${this.nome}`);
        this.seAlimentar();
        this.seMover();
        this.dormir();
    }

    protected abstract seAlimentar(): void;
    protected abstract seMover(): void;
    protected abstract dormir(): void;
}
