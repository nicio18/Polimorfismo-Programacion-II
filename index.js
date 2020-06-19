const Operario = require("./Operario");
const Tecnico = require("./Tecnico");
const Licenciado= require("./Licenciado");


const operario1 = new Operario("Lucero", "Mauricio",8,10);
const tecnico1 = new Tecnico("Pizarro", "Lucas",9,15);
const licenciado1 = new Licenciado("Lopez", "Alberto",10,18);

console.log('Datos del Empleado: ',operario1.mostrarDatos(),"\n\r",'Sueldo operario =',operario1.calcularSueldo(),'; Horas Extras calculadas: ',operario1.mostrarHorasExtras(),"\n\r");

console.log('Datos del Empleado: ',tecnico1.mostrarDatos(),"\n\r",'Sueldo Tecnico =',tecnico1.calcularSueldo(), '; Horas Extras calculadas: ',tecnico1.mostrarHorasExtras(),"\n\r");

console.log('Datos del Empleado: ',licenciado1.mostrarDatos(),"\n\r",'Sueldo licenciado =',licenciado1.calcularSueldo(), '; Horas Extras calculadas: ',licenciado1.mostrarHorasExtras(),"\n\r");



