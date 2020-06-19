const Personal = require("./Personal");

class Licenciado extends Personal{
    constructor(apellido,nombre, legajo,horasExtras,basico,importeHrs){
        super(apellido,nombre,legajo);
        this.horasExtras = horasExtras;
        this.basico = 3000;     
        this.importeHrs=25;
               
    }
    calcularSueldo(){
        return this.basico+(this.horasExtras*this.importeHrs);
    }
    mostrarHorasExtras(){
        return this.horasExtras;
    }
}
module.exports = Licenciado;