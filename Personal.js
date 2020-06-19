class Personal {
    constructor(apellido, nombre, legajo){
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo=legajo;
    }
    mostrarDatos(){
        return `{Apelido:${this.apellido}, Nombre: ${this.nombre}, legajo: ${this.legajo}}`;
    }
    

}
module.exports = Personal;