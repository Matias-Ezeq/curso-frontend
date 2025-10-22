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