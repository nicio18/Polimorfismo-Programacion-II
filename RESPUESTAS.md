# Polimorfismo-Programacion-II

1. Explicar y ejemplificar composición y agregación

Agregación

La agregación es un tipo de asociación. Un objeto agregado consta de un conjunto de objetos que lo componen.
Una computadora es un claro ejemplo de una agregación. La computadora es un objeto que se conforma de una combinación de diversos tipos de objetos.

Composición

Es la estrecha relación entre un objeto agregado y sus componentes. El punto central de la composición es que el componente se considera como tal solo como parte del objeto compuesto. Por ejemplo: una camisa, está compuesta de cuerpo, cuello, magas, botones, y puños. Si eliminamos la camisa, el cuello será inútil


2. Explicar que es polimorfismo.

El polimorfismo especifica que un método o acción puede tener el mismo nombre en diferentes clases y cada clase ejecutara tal operación en forma distinta.

3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
 
El ejemplo que se muestra en diagrama UML, tiene la función de calcular el sueldo del personal de una empresa, realiza el cálculo teniendo un sueldo básico para cada tipo de empleado sumado a la cantidad de horas extras computadas.
La clase padre se llama Personal en la cual tiene el apellido, nombre y legajo como y como acción está mostrarDatos. De ella desprenden 3 clases hijas, las cuales son Operario, Técnico, Licenciado. En estas están los atributos horas extras computadas, básico y el valor de la hora extra.
Como acciones de las clases hijas tenemos calcularSueldo y mostrarHorasextras, la primera calcularía el sueldo y lo muestra por consola, y mostrarHorasExtras muestra la cantidad de horas computadas.
Dada la explicación anterior se denota el polimorfismo en las clases hijas, en las cuales métodos tienen el mismo nombre, pero cada una se comporta de una manera diferente.

Diagrama subido al repositorio como diagrama.jpg
4. Codificar el ejemplo del punto 3 con JavaScript.
