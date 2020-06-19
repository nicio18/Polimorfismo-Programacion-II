const Personal = require("./Personal");


class Tecnico extends Personal{
    constructor(apellido,nombre,legajo, horasExtras){
        super(apellido,nombre, legajo);        
        this.horasExtras = horasExtras;  
        this.basico = 2000;     
        this.importeHrs=18;    
        
    }
    calcularSueldo(){
        return this.basico+(this.horasExtras*this.importeHrs);
        
    }
    mostrarHorasExtras(){
        return this.horasExtras
    }
}
module.exports = Tecnico;