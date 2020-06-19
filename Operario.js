const Personal = require("./Personal");

class Operario extends Personal{
    constructor(apellido,nombre, legajo,horasExtras,basico,importeHrs){
        super(apellido,nombre,legajo);
        this.horasExtras = horasExtras;
        this.basico = 1000;     
        this.importeHrs=10;
               
    }
    calcularSueldo(){
        return this.basico+(this.horasExtras*this.importeHrs);
    }
    mostrarHorasExtras(){
        return this.horasExtras;
    }
}
module.exports = Operario;