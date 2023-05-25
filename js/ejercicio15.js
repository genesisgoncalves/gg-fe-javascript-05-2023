let año = prompt("ingrese un año");

if (año % 4 == 0) {
    console.log(año + " es un año bisiesto")
} else if (año % 400 == 0) {
    console.log(año + " es un año bisiesto")
} else {
    console.log(año + " no es un año bisiesto")
}