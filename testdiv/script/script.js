$(function() {



   // prueba json
   var json = $.ajax({
       url: 'lista.json',
       dataType: 'json',
       type: 'get',
       cache: false,
       success: function(data){
           $(data.muncipios).each(function(index, value){

               console.log(value.name)

           })





       }
   });

  // template
    $.template('municipioList', '<div><li>${name}</li></ul></div>' );


    for (var i = 0; i <  json.length; i++) {
        $.tmpl('municipioList', json[i]).appendTo('#muni');


    }
});