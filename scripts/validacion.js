

//Inicio_Grupal_4 listadovisitas.html

function confirmarChequeo() {   //Funcion que confirma para ir a una lista checklist

	var mensaje = confirm("¿Desea validar y modificar los chequeos de esta visita?");

	if (mensaje) {
		window.location.href = "./responderchecklist.html";   //se redirecciona a la url si el usuario acepto la confirmacion
	} else {
		alert("Se mantiene en Listado de visitas");   //se muestra si el usuario denegó la confirmacion
	}
}
//Fin_Grupal_4

//Inicio_Grupal_4 responderchecklist.html

function verificarCheckList() {   //Funcion que verifica una lista de checklist

	var checkboxes = document.getElementById("formCheck").checkbox;   //Se seleccionan los checkbox del formulario formCheck
	var contador = 0;   //Contador para continuar la operación

	document.getElementById("contenedor").innerHTML = ""   //Se pone vacio el contenedor para que no muestre datos antes ejecutados


	for (let x = 0; x < checkboxes.length; x++) {   //For para recorrer los checkbox del formulario formCheck
		if (checkboxes[x].checked) {    //Validacion si los checkbox estan selecccionados
			contador = contador + 1;
		}
	}

	if (contador == 0) {   //Condicion si no se seleccionan checkbox
		alert("No has seleccionado ninguna casilla \n(No se puede continuar la operacion)");
	} else {

		const ul = document.createElement("ul")   //Se crea la etiqueta "ul" de la lista desordenada

		for (let x = 0; x < checkboxes.length; x++) {   //For para recorrer los checkbox del formulario formCheck
			if (checkboxes[x].checked) {    //Validacion si los checkbox estan selecccionados
				const li = document.createElement("li");   //Se crea la etiqueta "li" para crear una lista <li>
				li.appendChild(document.createTextNode(checkboxes[x].value))   //se agrega el contenido del checkbox - value a la lista y se cierra </li>
				ul.appendChild(li)   //se cierra </ul> agregando el contenido de la lista adentro
				document.getElementById("contenedor").appendChild(ul)   //se selecciona el DIV y se agrega "ul" para mostrarlo dentro de DIV
			}//end_if
		}//end_for   
	}  //end_else 
}
//Fin_Grupal_4

//Inicio_Grupal_5 crearpago.html
function bodyCrearPago(){   //Funcion que se carga con la pagina

	//Crear codigos html para crear un listado de numero con option
	var select = document.getElementById("anyo");
    for(var i = 2010; i<=2050; i++){
        var op = document.createElement("option");
        op.text = i;   //Se agrega el texto de option 
        op.value = i;   //Se agrega el atributo value
        select.add(op)
    }

	//Obtiene la fecha del momento actual
	var fecha = new Date();   
	document.getElementById("inputFechaActual").value = fecha.toLocaleDateString();
}

function validarMes(idValor) {   //Funcion que valida el mes

	var letras = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

	if (letras.indexOf(idValor.val()) > -1) {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores
	}
}
//Fin_Grupal_5


//********Para todo*********

function vacio(idValor) {   //Validacion si no es vacio

	if (idValor.val() != "") {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores
	}
}

function menorMayor(idValor, menor, mayor) {   //Validacion de numero menor y mayor - RegEx /[.,]/ decimal con "," o "."  

	if (idValor.val() > menor && idValor.val() < mayor && !(/[.,]/.test(idValor.val())) == true) {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores
	}
}

function minMax(idValor, min, max) {   //Validacion de caracteres con un minimo y maximo

	if (idValor.val().length > min && idValor.val().length < max) {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores 
	}
}

function estiloValidar(idValor, valor) {   //Seleccion de color de fondo,borde y estilo para formularios

	switch (valor) {
		case 0:   //Por defecto vuelve a normal - True  (Limpiar)
			idValor.css({ "backgroundColor": '' });
			idValor.css({ "borderColor": '', "border-style": '' });
			break;
		default:   //Fondo amarillo, borde rojo y estilo punteado - False
			idValor.css({ "backgroundColor": 'yellow' });
			idValor.css({ "borderColor": 'red', "border-style": 'dashed' });
	}
}

function fecha(idValor) {

	var regularEx = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/;   //Expresion regullar para  dd/mm/yyyy

	if ((regularEx.test(idValor.val())) == true) {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores
	}
}

function telefono(idValor){   //Funcion para validar telefono de tipo +569XXXXXXXX
	
	var regularEx = /^\+569\d{8}$/ ;

	if ((regularEx.test(idValor.val())) == true) {
		estiloValidar(idValor, 0);   //Funcion para el estilo del css - True
		return 0;
	} else {
		estiloValidar(idValor, 1);   //Funcion para el estilo del css - False
		return 1;   //Contador de errores
	}

}