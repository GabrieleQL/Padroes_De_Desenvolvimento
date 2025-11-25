class ControlTower{
    pousoAutorizado(type: string): boolean{
        if (type === "comercial"){
            return true
        }
        if (type === "militar"){
            return false
        }
        return false
    }
}

// Se surgir um novo avião 
// if (type === "carga") 
// Teria que modificar a classe