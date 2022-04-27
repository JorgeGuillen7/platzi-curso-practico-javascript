//Código del cuadrado
function perimetroCuadrado(lado) {
	return lado * 4;
}

const areaCuadrado = (lado) => {
	return lado ** 2;
};

function calcularPerimetroCuadrado() {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;

	let perimetro = perimetroCuadrado(value);
	let result = document.getElementById('squareResult');
	result.innerHTML = `El perímetro es de ${perimetro} cm`;
}

const calcularAreaCuadrado = () => {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;

	let area = areaCuadrado(value);
	let result = document.getElementById('squareResult');
	result.innerHTML = `El área es de ${area} cm<sup>2</sup>`;
};

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
	let inputLeftSide = document.getElementById('leftSideTriangle');
	let leftSide = Number(inputLeftSide.value);
	let inputRightSide = document.getElementById('rightSideTriangle');
	let rightSide = Number(inputRightSide.value);
	let inputBase = document.getElementById('baseTriangle');
	let base = Number(inputBase.value);

	let perimetro = perimetroTriangulo(leftSide, rightSide, base);
	let result = document.getElementById('triangleResult');
	result.innerHTML = `El perímetro es de ${perimetro} cm`;
}

function calcularAreaTriangulo() {
	let inputBase = document.getElementById('baseTriangle');
	let base = Number(inputBase.value);
	let inputHeight = document.getElementById('heightTriangle');
	let height = Number(inputHeight.value);

	let area = areaTriangulo(base, height);
	let result = document.getElementById('triangleResult');
	result.innerHTML = `El área es de ${area} cm<sup>2</sup>`;
}

//Código del círculo
function perimetroCirculo(radio) {
	return (radio + radio) * Math.PI;
}

function areaCirculo(radio) {
	return Math.PI * radio ** 2;
}

function calcularPerimetroCirculo() {
	let input = document.getElementById('inputCirculo');
	let value = Number(input.value);

	let perimetro = perimetroCirculo(value);
	let result = document.getElementById('circleResult');
	result.innerHTML = `El perímetro es de ${perimetro.toFixed(2)} cm`;
}

function calcularAreaCirculo() {
	let input = document.getElementById('inputCirculo');
	let value = input.value;

	let area = areaCirculo(value);
	let result = document.getElementById('circleResult');
	result.innerHTML = `El área es de ${area.toFixed(2)} cm<sup>2</sup>`;
}

//Triángulo isósceles
function calcularPerimetroTrianguloIsosceles() {
	let inputLeftSide = document.getElementById('leftSideTriangleIsosceles');
	let leftSide = Number(inputLeftSide.value);
	let inputRightSide = document.getElementById('rightSideTriangleIsosceles');
	let rightSide = Number(inputRightSide.value);
	let inputBase = document.getElementById('baseTriangleIsosceles');
	let base = Number(inputBase.value);

	if (leftSide === rightSide) {
		let perimetro = perimetroTriangulo(leftSide, rightSide, base);
		let result = document.getElementById('triangleIsoscelesResult');
		result.innerHTML = `El perímetro es de ${perimetro} cm`;
	} else {
		let result = document.getElementById('triangleIsoscelesResult');
		result.innerHTML =
			'❌ El lado derecho e izquierdo deben medir lo mismo';
	}
}

function calcularAreaTrianguloIsosceles() {
	let inputLeftSide = document.getElementById('leftSideTriangleIsosceles');
	let leftSide = Number(inputLeftSide.value);
	let inputRightSide = document.getElementById('rightSideTriangleIsosceles');
	let rightSide = Number(inputRightSide.value);
	let inputBase = document.getElementById('baseTriangleIsosceles');
	let base = Number(inputBase.value);

	if (leftSide === rightSide) {
		let height = Number(Math.sqrt(leftSide ** 2 - (base / 2) ** 2));
		let area = areaTriangulo(base, height);
		let result = document.getElementById('triangleIsoscelesResult');
		result.innerHTML = `El área es de ${area} cm<sup>2</sup>`;
	} else {
		let result = document.getElementById('triangleIsoscelesResult');
		result.innerHTML =
			'❌ El lado derecho e izquierdo deben medir lo mismo';
	}
}

//Código para cambiar el tipo de triangulo
function switchTriangle() {
	let triangle = document.getElementById('calculator-triangle');
	triangle.style.display = 'none';

	let triangleIsosceles = document.getElementById(
		'calculator-triangle-isosceles'
	);
	triangleIsosceles.style.display = 'grid';
}

function switchTriangleReverse() {
	let triangle = document.getElementById('calculator-triangle');
	triangle.style.display = 'grid';

	let triangleIsosceles = document.getElementById(
		'calculator-triangle-isosceles'
	);
	triangleIsosceles.style.display = 'none';
}
