$(document).ready(function() {
    $("#FormularioAccidentes").validate({
      rules: {
        Id : {
          required: true,
          min: 1,
          max: 1000,
          number: true
        },
     
       FechaAccidente: {
        required: true,
        
       },
       HoraAccidente: {
        required: true,
        
       },
        LugarAccidente: {
          required: true,
          minlength: 1,
          maxlength: 150,
          number: false
          
        },
        OrigenAccidente: {
          required: true,
          minlength: 1,
          maxlength: 100,
          number: false
  
        },
        Cliente: {
          required: true,
          minlength: 1,
          maxlength: 100
        },
        Consecuencia: {
          required: false,
          number: false
  }
}


    });
  });

  