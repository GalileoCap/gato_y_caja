//****************************************
//S: Sumar n menores valores de un array

function suma_menores(a, cant=2){
	r= 0;
	for (var i= 0; i<cant; i++){
		x= a[0]; //A: Elijo arbitrariamente el primero, total si es el menor igual va a pasar
		sacar= 0; //A: Por lo de arriba, por si es el menor
		for (var t in a){
			este= a[t];
			if (este < x){
				x= este;
				sacar= t;
			}
		}
		a.splice(sacar, 1);
		r+= x;
	}

	return r;
}

caso_ejemplo_1= [2, 5, 42, 98, 77];
console.log("Caso ejemplo 1:", suma_menores(caso_ejemplo_1), "esperado: 7");

caso_ejemplo_2= [10, 343445353, 3453445, 3453545353453];
console.log("Caso ejemplo 2:", suma_menores(caso_ejemplo_2), "esperado: 3453455");

caso_iguales= [128, 12, 3, 96, 3];
console.log("Caso iguales:", suma_menores(caso_iguales), "esperado: 6");

caso_muchos= [8, 9, 12, 199, 213];
console.log("Caso sumar tres:", suma_menores(caso_muchos, 3), "esperando: 29");
