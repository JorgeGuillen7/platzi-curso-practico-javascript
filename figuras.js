//Código del cuadrado
function perimetroCuadrado(lado) {
	return lado * 4;
}

function areaCuadrado(lado) {
	return lado ** 2;
}

function calcularPerimetroCuadrado() {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;

	let perimetro = perimetroCuadrado(value);
	alert(perimetro);
}

function calcularAreaCuadrado() {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;

	let area = areaCuadrado(value);
	alert(area);
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
	return (base * altura) / 2;
}

//Código del círculo
function perimetroCirculo(radio) {
	return (radio + radio) * Math.PI;
}

function areaCirculo(radio) {
	return Math.PI * radio ** 2;
}
