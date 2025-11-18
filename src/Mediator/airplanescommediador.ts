interface Mediator{
    requestLanding(plane: Airplane2): void
}
class ControlTower implements Mediator{
    private airplanes : Airplane2[] = []

    register(plane: Airplane2){
        this.airplanes.push(plane)
    }

    requestLanding(plane: Airplane2){
        console.log(`[Tower] ${plane.id} solicitando pouso...`) 

        const someoneLanding = this.airplanes.some(
            p => p !== plane && p.isLanding()
        )
        if (someoneLanding){
            console.log(`[Tower] NEGADO: Outro avião está pousando!`)
            return
        }
        console.log(`[Tower] autorizado ${plane.id} pode pousar.`)
        plane.land()
    }
}

class Airplane2{
    private landing = false
    constructor(public id: string, private tower: Mediator) {}

    requestLanding(){
        this.tower.requestLanding(this)
    }
    land() {this.landing = true}
    isLanding() {return this.landing}
}

const tower = new ControlTower()

const p1 = new Airplane2("P1", tower)
const p2 = new Airplane2("P2", tower)
const p3 = new Airplane2("P3", tower)

tower.register(p1)
tower.register(p2)
tower.register(p3)

p1.requestLanding()
p2.requestLanding()
p3.requestLanding()