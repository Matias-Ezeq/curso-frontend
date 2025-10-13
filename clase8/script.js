

//verificar si un numero es positivo o negativo
function positivoONegativo(numero) {
    if (numero > 0) {
        console.log("Positivo");
    }
    else if (numero < 0) {
        console.log("negativo");
    }
    else {
        console.log("cero");
    }
}















//separar día de semana con fin de semana
function diaDeSemana(dia) {
    if(dia.toLowerCase() == "lunes"
        || dia.toLowerCase() == "martes" 
        || dia.toLowerCase() == "miercoles" 
        || dia.toLowerCase() == "jueves" 
        || dia.toLowerCase() == "viernes") {
        console.log("dia de semana");
    }
    else {
        console.log("fin de semana");
    }
}













//descuento por finde semana si es mayor o estudiante

function tieneDescuento(edad,esEstudiante) {
    return edad >= 18 || esEstudiante
}