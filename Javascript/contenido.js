var nombre = prompt("Hola. ¿Cómo te llamas?");
alert("Hola, " + nombre +".");

var edad = prompt("¿Qué edad tienes?");

switch (edad) {

	case "bien":
		alert("Bien hermosa");
		break;

	case "mal":
		alert("Oh, qué mal");
		break;

	default:
		alert("No te entiendo, sorry.");
}

alert(hola);
/*var estado = prompt("¿Cómo estás?")
if (estado = 1){
	alert("Bien hermosa.")

	if (estado = 2) {
	alert("Oh, qué mal.")
}
}

else { alert ("No te entendí")}