$(document).ready(function () { 


//Inicio Menu Principal
 
var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

    menuBtn.click(function() {

        if(menu.hasClass('show')){

            menu.removeClass('show');
        }else{

            menu.addClass('show');
        }

    });
//Fin menu

});