/*
1Validador de Contraseña Segura
    Crea un programa que verifique si una contraseña es segura. Debe tener:
    * Al menos 8 caracteres
    * Contener al menos una mayúscula
    * Contener al menos un número
    Mostrar: "Contraseña segura" o "Contraseña insegura"
*/

function validarContraseña(contraseña){
    if (contraseña.length >= 8 && algunaMayuscula(contraseña) && algunNumero(contraseña)){
        console.log("Contraseña segura");
    }
    else console.log("Contraseña insegura");
}

function algunaMayuscula(contraseña){
    let resultado = false;
    for (let i = 0; i < contraseña.length; i++) {
        resultado = resultado || /[A-Z]/.test(contraseña[i])
    }
    return resultado
}

function algunNumero(contraseña){
    return /\d/.test(contraseña); //solución para verificar si contiene algun numero segun stackOverflow
}

/*
2. Calculadora de Descuento en Pizza
    Un local de pizzas tiene un precio base de $8500 por unidad.
    Si se compran 2 pizzas, se aplica un descuento del 10%.
    En el caso de comprar 3 o más pizzas, el descuento es del 15%.
    A esto se le deben sumar los extras opcionales (como queso extra o salsa extra), cada uno con un valor de $500.
    Además, el cliente puede tener un cupón de descuento adicional del 17% o del 11%, según corresponda.
    
    Mostrar: Precio final a pagar con todas sus variantes
*/

function precioPizzas(cantidad, extras,cupon){
    let precioBase = 8500;
    let descuento = 0;
    if (cantidad == 2){
        descuento = precioBase * 0.1;
    }
    if (cantidad >= 3) {
        descuento = precioBase * 0.15;
    }
    let precioExtras = 500 * extras.length;
    let descuentoCupon = precioBase * (cupon/100);
    let total = precioBase * cantidad - (descuento + descuentoCupon) + precioExtras;

    return total
}

/*
3 Juego: Piedra, Papel o Tijera
    Crea un juego donde:
    La computadora elige aleatoriamente (piedra, papel o tijera)
    El programa determina quién gana
    Usa: Math.random(), if/else
*/

function piedraPapelOTijera() {
    var chance = Math.random();
    if (chance <= 0.3){
        return "piedra";
    }
    else if (chance >= 0.3 && chance <= 0.6) {
        return "papel";
    }
    else {
        return "tijeras";
    }
}

function jugarPPT(eleccion) {
    var eleccionPC = piedraPapelOTijera();
    if (eleccion != "piedra" && eleccion != "papel" && eleccion != "tijeras") {
        return "elección inválida";
    }
    else if (eleccion == eleccionPC) {
        return "Empate";
    }
    else if (eleccion == "piedra" && eleccionPC == "papel" || eleccion == "papel" && eleccionPC == "tijeras" || eleccion == "tijeras" && eleccionPC == "piedra") {
        return ("perdiste, " + eleccionPC + " le gana a " + eleccion);
    }
    else return ("ganaste! " + eleccion + " le gana a " + eleccionPC) + "!";
}

/*
    4. Adivina el Número Secreto
        Número secreto: entre 1 y 50 (generado aleatoriamente)
        El usuario ingresa números hasta adivinar
        (Pistas: "Más alto", "Más bajo", o "¡Caliente!" si está a 5 números o menos)
        Usa: Math.abs(), comparaciones
*/

//ejemplo sacado de MDN 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function numeroSecreto() {
    let numero = getRandomInt(50) + 1;
    let intento = prompt("elije un numero entre 1 y 50:");

    while (intento != prompt) {
        estaCerca(intento, numero);
        if (intento < numero) {
            intento = prompt("Mas alto:");
        }
        else if (intento > numero) {
            intento = prompt("Mas bajo:");
        }
        else { return "Ganaste!"}
    }
}

function estaCerca(intento, numero) {
    if (Math.abs(numero - intento) <= 5){
        console.log("Caliente!");
    }
}

/*
    6. Calculadora de IMC (Índice de Masa Corporal)
    Calcula el IMC con la fórmula: peso / (altura * altura)
    Luego clasifica según si es hombre o mujer
*/

function calcularIMC(altura, peso) {
    let IMC = peso / (altura*altura);

    if (IMC < 18.5) {
        return "peso inferior al normal";
    }
    else if (IMC >= 18.5 && IMC < 25) {
        return "peso normal";
    }
    else if (IMC >= 25 && IMC < 30) {
        return "peso mayor al normal";
    }
    else {
        return "obesidad";
    }

}


/*
    7. Calculadora de Interés Simple
    calcular el interés de una compra secando la tasa el capital y el tiempo de adquisición del objeto
*/

function calcularInteres(tasa, capital, tiempo) {
    return capital + (capital * tasa/100)*tiempo;
}