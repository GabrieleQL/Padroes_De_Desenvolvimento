import { Animal } from "./Animal";

export class Cavalo extends Animal {
    protected seAlimentar(): void {
        console.log("Cavalo >> Eu me alimento de capim, feno e silagem");
    }

    protected seMover(): void {
        console.log("Cavalo >> Eu Troteio");
    }

    protected dormir(): void {
        console.log("Cavalo >> Eu durmo em pé");
    }
}
