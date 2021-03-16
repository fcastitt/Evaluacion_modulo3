
   //Inicio_Evaluacion_Modulo_3 listadodeaccidente.html
	$("#listadodeaccidente").click(function () {   //Funcion para realizar validaciones y enviar el formulario

		var a = menorMayor($('#IDacci'), 0, 10000);   //Validacion de numero menor y mayor
    var b = vacio($('#FechaAccidente'));   //Validacion si no es vacio
    var c = vacio($('#HoraAccidente'));   //Validacion si no es vacio
		var d = minMax($('#LugarAccidente'), 0, 150);      //Validacion de un minimo y maximo
		var e = minMax($('#OrigenAccidente'), 0, 100);      //Validacion de un minimo y maximo
    var f = minMax($('#Consecuencia'), 0, 100);      //Validacion de un minimo y maximo
    var g = vacio($('#Cliente'));   //Validacion si no es vacio

		var error = a + b + c + d + e + f + g;   //Contador de errores
		//alert(error);
		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {

			return false;   //No se envia el formulario
		}
	});

	//Fin

