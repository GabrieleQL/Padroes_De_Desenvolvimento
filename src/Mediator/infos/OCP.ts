interface AirCraft {
    requisicaoPouso():boolean
}

class comercialPlane implements AirCraft{
    id: number
    cia: string
    constructor(id: number, cia: string){
        this.id = id
        this.cia = cia
    }
    requisicaoPouso(): boolean {
        return true
    }
}

class militarPlane implements AirCraft{
    requisicaoPouso(): boolean {
        return false
    }
}
 class ControlTower {
    pouseAutorizado(aircraft: AirCraft): boolean{
        return aircraft.requisicaoPouso()
    }
}

// Quando for necessário adicionar novo tipo de aeronave, apenas criar a classe, sem mexer em nenhuma outra lógica

class CargaPlane implements AirCraft{
    requisicaoPouso(): boolean {
        return false
    }
}