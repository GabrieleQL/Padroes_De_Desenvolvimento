class AirportSystem{
    private airplanes: string[] = []
    private weather: string = "limpo"
    private logs: string[] = []

    registerAirplane(plane: string){
        this.airplanes.push(plane)
        this.logs.push(`Avião ${plane} registrado.`)
    }

    updateWeather(condition: string) {
        this.weather = condition
        this.logs.push(`Clima atualizado para ${condition}`)
    }

    authorizeLanding(plane: string): boolean{
        if (this.weather !== "limpo"){
            this.logs.push(`Pouso negado para ${plane}, clima ruim.`)
            return false
        }
        this.logs.push(`Pouso autorizado para ${plane}, clima limpo.`)
        return true
    }

    calculateFuelConsuption(distance: number): number{
        return distance * 0.75
    }

    generateReport(): string{
        return this.logs.join("\n")
    }

    shutDownSystem(){
        console.log("Sistema de Aeroporto desligado")
    }
}