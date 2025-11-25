class Airplane{
    constructor(public id: string, public AirplanesInArea: Airplane[]){}

    RequestLanding(){
        console.log(`[${this.id}] solicitando pouso`)

        for (const plane of this.AirplanesInArea){
            if (plane != this && plane.isLanding()){
                console.log(`[${this.id}] esperando ${plane.id} pousar...`)
            return

            }
                
        }
        console.log(`[${this.id}] pouso autorizado!`)
        this.landing = true
    }
    private landing = false
    isLanding() {return this.landing}
}
const a1 = new Airplane("A1", [])
const a2 = new Airplane("A2", [])
const a3 = new Airplane("A3", [])

a1.AirplanesInArea = [a1, a2, a3];
a2.AirplanesInArea = [a1, a2, a3];
a3.AirplanesInArea = [a1, a2, a3]

a1.RequestLanding()
a2.RequestLanding()
a3.RequestLanding()
