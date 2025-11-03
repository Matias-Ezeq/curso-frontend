const variable = {
    nombre : "juan",
    edad : "35",
    ciudad : "Argentina",
    saludar : function() {
        document.writeln("hola me llamo Juan<br>");
    },
    datos : ["dato1","dato2"]
}

variable.edad = 40;

console.log(variable);
variable.saludar();
document.writeln(variable.nombre + ", " + variable.edad + " años.<br>Ciudadano de " + variable.ciudad);


function Persona (nombre = "Juan", edad = "30", ciudad = "Argentina") {
    this.nombre = nombre,
    this.edad = edad,
    this.ciudad = ciudad,
    this.saludar = function saludar(){
        document.writeln("hola, soy " + this.nombre);
    }

}