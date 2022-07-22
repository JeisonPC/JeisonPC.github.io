var n1 = prompt("Escriba el primer numero");
var n2 = prompt("Escriba el segundo numero");
var n3 = prompt("Escriba el tercer numero");

if (parseInt(n1) > parseInt(n2) & parseInt(n1) > parseInt(n3)) {

	document.write("El numero 1 es el mayor.")
}

else if (parseInt(n2) > parseInt(n1) & parseInt(n2) > parseInt(n3)) {

	document.write("El numero 2 es el mayor.")
}

else{

	document.write("El numero 3 es el mayor.")
}
