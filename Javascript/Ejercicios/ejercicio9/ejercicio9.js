var frase = prompt("Ingresa la frase para saber cuantas a tiene");
var contador = 0;

for (var i = 0; i < frase.lenght; i++) {

	if (frase.charAt(i)=="a") {

		contador++;
	}
}

document.write("La frase tiene "+ contador" letras a.);