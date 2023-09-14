
var a = parseInt(prompt("Ingrese un numero"))
a = parseInt(a);


if (a < 0 || a == 0 || a>= 1000) {
    alert("Numero no valido vuelva a intentar")
    
} else {
    if (a >= 0 && a < 10) {
        resultado = a ** 2;
    } else if (a >= 10 && a < 100) {
        resultado = a * 2;
    } else if (a >= 100 && a < 1000) {
        resultado = a- 100;
    }
    alert("El resultado es "+ resultado);

}