$(document).ready(function () {
    $('#listadofinal').DataTable({
        //searching: false,   //Desactiva el buscador
        //paging: false
         

        "pageLength": 3,   //Muestra cantidad de registros por pagina

        //"columnDefs": [
        //    { "width": "10%", "targets": 0 },
        //    { "width": "10%", "targets": 1 },
        //    { "width": "10%", "targets": 2 },
        //    { "width": "10%", "targets": 3 }
        //],

        //"lengthChange": false,  //Desactiva la capacidad del usuario para cambiar el número de registros por página
        
        "lengthMenu": [ 3, 5, 8, 10, 20 ],
         

        "language": {

            "lengthMenu":     "Mostrar _MENU_ registros",
            "search":         "Buscar registro :",

            "info": "Mostrando  _PAGE_ de _PAGES_ páginas",

            

            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "anterior"
            },
        },

        responsive: true

    });

    //Inicio_Evaluacion_Modulo_3 administrarasistentes.html
	$("#agregarAsistentes").click(function () {   //Funcion para realizar validaciones y enviar el formulario

		var a = menorMayor($('#IDasist'), 0, 10000);   //Validacion de numero menor y mayor
		var b = minMax($('#nombreasist'), 0, 100);      //Validacion de un minimo y maximo
		var c = menorMayor($('#edadasist'), 0, 150);   //Validacion de numero menor y mayor
		var d = vacio($('#mailasist'));   //Validacion si no es vacio
		var e = telefono($('#telasist'));   //Validacion de telefono formato +569XXXXXXXX

		var f = vacio($('#fechahora'));   //Validacion si no es vacio
		var g = vacio($('#clienteasist'));   //Validacion si no es vacio

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

});