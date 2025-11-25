interface Mediator{
    requisicaoPouso(plane: Airplane2): void
    requisicaoVoo(plane: Airplane2): void
}
class ControlTower implements Mediator{
    private airplanes : Airplane2[] = []

    registro(plane: Airplane2){
        this.airplanes.push(plane)
    }

    requisicaoPouso(plane: Airplane2){
        console.log(`[Tower] ${plane.id} solicitando pouso...`) 

        const algumPousando = this.airplanes.some(
            p => p !== plane && p.estaPousando()
        )
        if (algumPousando){
            console.log(`[Tower] NEGADO: Outro avião está pousando!`)
            return
        }
        console.log(`[Tower] autorizado ${plane.id} pode pousar.`)
        plane.pouso()
    }

    requisicaoVoo(plane: Airplane2): void {
        console.log(`[Tower] ${plane.id} solicitando voo...`)

        const algumDecolando = this.airplanes.some(
            p => p !== plane && p.estaDecolando()
        )
        if (algumDecolando){
            console.log(`[Tower] NEGADO: Outro avião está decolando!`)
            return
        }
        console.log(`[Tower] autorizado ${plane.id} pode decolar.`)
        plane.decolagem()
    }
}

class Airplane2{
    private pousando = false
    private decolando = false
    constructor(public id: string, private tower: Mediator) {}

    requisicaoPouso(){
        this.tower.requisicaoPouso(this)
    }
    requisicaoVoo(){
        this.tower.requisicaoVoo(this)
    }
    pouso() {this.pousando = true}
    decolagem() {this.decolando = true}
    estaPousando() {return this.pousando}
    estaDecolando() {return this.pousando}
}

const tower = new ControlTower()

const p1 = new Airplane2("P1", tower)
const p2 = new Airplane2("P2", tower)
const p3 = new Airplane2("P3", tower)

tower.registro(p1)
tower.registro(p2)
tower.registro(p3)

p1.requisicaoPouso()
p2.requisicaoPouso()
p3.requisicaoPouso()

p1.requisicaoVoo()
p2.requisicaoVoo()
p3.requisicaoVoo()

