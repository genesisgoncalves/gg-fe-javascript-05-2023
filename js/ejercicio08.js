let a = prompt("ingrese el primer numero");
let b = prompt("ingrese el segundo numero");
let c = prompt("ingrese el tercer numero");
let higherValue = 0;

if (a > b && a > c) {
    higherValue = a
} else if (b > a && b > c) {
    higherValue = b
} else {
    higherValue = c
}
alert(higherValue + " es el mayor")

// let values = [a,b,c];

// values.sort((a,b)=> a >= b)
// alert(values[0] + " es el mayor numero");
