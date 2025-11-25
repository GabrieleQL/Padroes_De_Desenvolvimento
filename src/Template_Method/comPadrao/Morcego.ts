import { Animal } from "./Animal";

export class Morcego extends Animal {
    protected seAlimentar(): void {
        console.log("Morcego >> Eu me alimento de frutas, insetos, néctar e pólen, pequenos vertebrados ou sangue");
    }

    protected seMover(): void {
        console.log("Morcego >> Eu Voo");
    }

    protected dormir(): void {
        console.log("Morcego >> Eu durmo de cabeça pra baixo");
    }
}
