import { Animal } from "./Animal";

export class Golfinho extends Animal {
    protected seAlimentar(): void {
        console.log("Golfinho >> Eu me alimento de peixes e lulas");
    }

    protected seMover(): void {
        console.log("Golfinho >> Eu nado");
    }

    protected dormir(): void {
        console.log("Golfinho >> Eu durmo na água");
    }
}
