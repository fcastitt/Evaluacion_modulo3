$(document).ready(function () {

	



	//Inicio_Grupal_1 contacto.html
	$("#agregarMensaje").click(function () {   //Funcion que confirma para ir a una lista checklist
		var a = vacio($('#nombre'));   //Validacion si no es vacio
		var b = vacio($('#correo'));   //Validacion si no es vacio
		var c = telefono($('#telefono'));   //Validacion de telefono formato +569XXXXXXXX
		var d = vacio($('#mensaje'));   //Validacion si no es vacio
		var e = vacio($('#genero'));   //Validacion si no es vacio

		var error = a + b + c + d + e;   //Contador de errores

		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {
			return false;   //No se envia el formulario
		}
	});

	//Fin_Grupal_1

	//Inicio_Grupal_2 crearcapacitacion.html
	$("#agregarCapacitacion").click(function () {   //Funcion que confirma para ir a una lista checklist
		var a = fecha($('#fecha'));   //Validacion de fecha dd/mm/yyyy
		var b = vacio($('#hora'));   //Validacion si no es vacio
		var c = vacio($('#lugar'));   //Validacion si no es vacio
		var d = vacio($('#duracion'));   //Validacion si no es vacio
		var e = vacio($('#cliente'));   //Validacion si no es vacio

		var error = a + b + c + d + e;   //Contador de errores

		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {
			return false;   //No se envia el formulario
		}
	});
	//Fin

	//Inicio_Evaluacion_Intermedia crearusarios.html
	$("#agregarUsuario").click(function () {   //Funcion que confirma para ir a una lista checklist
		var a = vacio($('#nombres'));   //Validacion de fecha dd/mm/yyyy
		var b = vacio($('#apellidos'));   //Validacion si no es vacio
		var c = fecha($('#fechaNac'));   //Validacion si no es vacio
		var d = vacio($('#run'));   //Validacion si no es vacio
		var e = vacio($('#perfil'));   //Validacion si no es vacio

		var error = a + b + c + d + e;   //Contador de errores

		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {
			return false;   //No se envia el formulario
		}
	});

	//Fin

	//Inicio_Grupal_4 listadovisitas.html
	$(".confirmarChk").click(function () {   //Funcion que confirma para ir a una lista checklist
		confirmarChequeo();
	});
	//Fin_Grupal_4

	//Inicio_Grupal_4 responderchecklist.html
	$("#verificarChequeo").click(function () {   //Funcion que verifica una lista de checklist
		verificarCheckList();
	});
	//Fin_Grupal_4





	//Inicio_Grupal_5 crearpago.html
	$("#agregarPago").click(function () {   // Dos formas de usarlo
		//$("#agregar").click(function (){  
		//$("#formularioProducto").on("submit",function () { 

		var a = menorMayor($('#monto'), -1, 100000000);   //Validacion de numero menor y mayor

		var b = validarMes($('#mes'));   //Funcion que valida el mes

		var c = menorMayor($('#anyo'), 2009, 2051);   //Validacion de numero menor y mayor

		var d = vacio($('#rutCliente'));   //Validacion si no es vacio

		var error = a + b + c + d;   //Contador de errores

		//alert(error);

		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {
			return false;   //No se envia el formulario
		}
	});
	//Fin_Grupal_5

	//Inicio_Grupal_6 listadoasesorias.html
	$("#estilo1").click(function () {   //Estilos aplicados a la tabla con id=listadoAsesorias
		$("#listadoAsesorias").css("background-color", "yellow")
		$("#listadoAsesorias").css("borderColor", "orange")
		$("#listadoAsesorias").css("color", "brown")
	});

	$("#estilo2").click(function () {   //Estilos aplicados a la tabla con id=listadoAsesorias
		$("#listadoAsesorias").css("background-color", "aqua")
		$("#listadoAsesorias").css("borderColor", "darkcyan")
		$("#listadoAsesorias").css("color", "blue")
	});

	$("#estilo3").click(function () {   //Estilos aplicados a la tabla con id=listadoAsesorias
		$("#listadoAsesorias").css("background-color", "lightpink")
		$("#listadoAsesorias").css("borderColor", "hotpink")
		$("#listadoAsesorias").css("color", "maroon")
	});

	$(".btn_listado1").click(function () {   //Funcion para cargar las mejoras 1
		$("#contenedor").load("./ajax/listadoMejora1.txt");
	});

	$(".btn_listado2").click(function () {   //Funcion para cargar las mejoras 2
		$("#contenedor").load("./ajax/listadoMejora2.txt");
	});
	//Fin_Grupal_6

	//Inicio_Grupal_7 crearasesorias.html
	$('#motivo').keyup(function () {
		var maxChar = 250;   //Valor maximo de textarea
		var cantChar = $('#motivo').val().length;   //Tamaño del valor del textarea con id motivo
		var diff = maxChar - cantChar;   //Diferencia entre el maximo permitido y lo que introduce

		$('#contadorCaracter').text("Caracteres restantes: " + diff);   //Muestra en pantalla el valor de la diferencia

		if (diff < 1) {
			$('#motivo').attr("maxlength", "250");   //Define el atributo maximo de caracteres
		} else {
			if (diff < 10) {
				$('#contadorCaracter').css("color", "red");   //ultimos 10 caracteres se vuelve rojo
			} else {
				$('#contadorCaracter').css("color", "");
			}
		}
	});

	$("#agregarAsesoria").click(function () {   //Funcion para realizar validaciones y enviar el formulario

		var a = menorMayor($('#idAsesoria'), 0, 10000);   //Validacion de numero menor y mayor
		var b = fecha($('#idFecha'));   //Validacion de fecha dd/mm/yyyy
		var c = minMax($('#motivo'), 0, 251);      //Validacion de un minimo y maximo 
		var d = vacio($('#profesional'));   //Validacion si no es vacio
		var error = a + b + c + d;   //Contador de errores
		//alert(error);
		if (error == 0) {   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		} else {

			return false;   //No se envia el formulario
		}
	});
	//Fin_Grupal_7

	//Inicio_Grupal_12 listadovisitas.html

	var tableId = '#tablaVisita';
	var ExportButtons = document.getElementById(tableId);

	var instance = new TableExport(ExportButtons, {
		formats: ['xls', 'csv'],
		exportButtons: false
	});
	// **** jQuery **************************
	//    $(ExportButtons).tableExport({
	//        formats: ['xls'],
	//        exportButtons: false
	//    });
	// **************************************


	var CSV = instance.CONSTANTS.FORMAT.CSV;

	//                                          // "id"  // format

	var exportDataCSV = instance.getExportData()[tableId][CSV];

	// get filesize
	var bytesCSV = instance.getFileSize(exportDataCSV.data, exportDataCSV.fileExtension);

	console.log('filesize (XLS):', bytesXLS + 'B');
	console.log('filesize (CSV):', bytesCSV + 'B');

	var CSVbutton = document.getElementById('exportarCSV');
	CSVbutton.addEventListener('click', function (e) {
		//                   // data             // mime                 // name                 // extension
		instance.export2file(exportDataCSV.data, exportDataCSV.mimeType, exportDataCSV.filename, exportDataCSV.fileExtension);
	});





	$("#exportarCSV").click(function () {
		$("#tablaVisita").tableExport({
			formats: ["csv"],
			exportButtons: false,
			bootstrap: false
		});

	});

	$("#exportarEXCEL").click(function () {
		$("#tablaVisita").tableExport({
			bootstrap: false,
			exportButtons: false,
			formats: ["xls"],
		});

	});


	//Fin_Grupal_12

});


	//HTML listado de accidente//
