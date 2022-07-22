
	
	let pregunta = document.getElementById('preguntafinal');
	let puntaje = document.getElementById('puntaje');

	let opcion1 = document.getElementById('opcion1');
	let opcion2 = document.getElementById('opcion2');
	let opcion3 = document.getElementById('opcion3');
	let opcion4 = document.getElementById('opcion4');

	let idPreg = 0;
	let respSeleccionada;
	let puntosTotales = 0;
	let preguntasTotales = 0;

	let puntos = document.getElementsByClassName("puntito");
	let barraTiempo = document.getElementById("barraTiempo");
	let anchoBarraTiempo = document.getElementById("bgTiempo").offsetWidth;
	let tiempoMaximo = 10;
	let segundos = 0;
	let TEMPORIZADOR; //Se encarga de llamar el temporizador cada un segundo

	//Click en primer opcion
		opcion1.addEventListener("click", asd=> {

			respSeleccionada = arrayPreguntas[idPreg].opcionuno;
			funAnalizar(respSeleccionada);

		});

	//Click en segunda opcion
		opcion2.addEventListener("click", asd=> {

			respSeleccionada = arrayPreguntas[idPreg].opciondos;
			funAnalizar(respSeleccionada);

		});

	//Click en tercera opcion
		opcion3.addEventListener("click", asd=> {

			respSeleccionada = arrayPreguntas[idPreg].opciontres;
			funAnalizar(respSeleccionada);
		});

	//Click en cuarta opcion
		opcion4.addEventListener("click", asd=> {

			respSeleccionada = arrayPreguntas[idPreg].opcioncuatro;
			funAnalizar(respSeleccionada);

		});


	//Reemplaza preguntas y opciones por el contenido del array.
	function iterarJuego() {


			pregunta.innerText = arrayPreguntas[idPreg].preg;
	
			opcion1.innerText = arrayPreguntas[idPreg].opcionuno;
			opcion2.innerText = arrayPreguntas[idPreg].opciondos;
			opcion3.innerText = arrayPreguntas[idPreg].opciontres;
			opcion4.innerText = arrayPreguntas[idPreg].opcioncuatro;;
			
	}

	TEMPORIZADOR = setInterval(tiempoRestante, 1000); //Invoca tiempoRestante() cada 1s

	function tiempoRestante() {

		if ( segundos <= tiempoMaximo ){
			
			barraTiempo.style.width = (anchoBarraTiempo / tiempoMaximo ) * (tiempoMaximo - segundos) + "px"; //Secciona el ancho en partes iguales por cada segundo y las multiplica cada segundo por un num mas chico hasta el 0.
			segundos++;
		}

		else {
			segundos = 0;
		}
	}

	//Comprueba si la opcion clickeada es la resp correcta.
	function funAnalizar(){

		/*console.log(respSeleccionada);
		console.log(arrayPreguntas[idPreg].error);*/

		if (respSeleccionada == arrayPreguntas[idPreg].error) {

			console.log("correcto");
			respCorrecta(respSeleccionada);

		}

		else if (respSeleccionada != arrayPreguntas[idPreg].error) {

			console.log("incorrecto");
			respIncorrecta(respSeleccionada);
		}

	}

	//Suma puntos por resp correcta, cambia color de bolita a verde
	function respCorrecta(){

			puntos[preguntasTotales].id = "punt0Correcto";
			puntosTotales++;
			preguntasTotales++;
			puntaje.innerText = puntosTotales + "/" + preguntasTotales;
			idPreg++;
			segundos = 0;

			tiempoRestante();
			iterarJuego(idPreg);
		
	}

	//No suma puntos por resp incorrecta, cambia color de bolita a rojo
	function respIncorrecta(){

			puntos[preguntasTotales].id = "punt0Incorrecto";
			preguntasTotales++;
			puntaje.innerText = puntosTotales + "/" + preguntasTotales;
			idPreg++;
			segundos = 0;
			
			tiempoRestante();
			iterarJuego	(idPreg); 

	}

	//Preguntas y respuestas
	arrayPreguntas = [ {

			idPreg : 0,
			preg : "Que significa AI en Japonés?",

				 opcionuno: 'amor',  
				 opciondos: 'carcel', 
				 opciontres: 'pizza',   
				 opcioncuatro: 'caja', 
				 error:'amor'		
				


			} , {

			idPreg: 1,
			preg: "Cual es el hiragana 'ME' ?",

				 opcionuno: 'ぬ',  
				 opciondos: 'ね', 
				 opciontres: 'ぐ',   
				 opcioncuatro: 'め', 	
				 error:'め'	

			} , { 

			idPreg: 2,
			preg: "En hiragana: DESAYUNO , ALMUERZO , CENA ?",

				 opcionuno: 'ぬ',  
				 opciondos: 'ね', 
				 opciontres: 'ぐ',   
				 opcioncuatro: 'め', 	
				 error:'め'

			} , {

			idPreg: 3,
			preg: "Como se dice madre y padre ?",

				 opcionuno: 'chichi hana',  
				 opciondos: 'hana mitsu', 
				 opciontres: 'kirei chichi',   
				 opcioncuatro: 'undo chichi', 	
				 error:'kirei chichi'
			} , {

			idPreg: 4,
			preg: "Que significa きれい ?",

				 opcionuno: 'rey y reina',  
				 opciondos: 'lindo y linda', 
				 opciontres: 'hermoso y hermosa',   
				 opcioncuatro: 'salvaje y saldro', 	
				 error:'lindo y linda'
			}
	]




	iterarJuego(); 