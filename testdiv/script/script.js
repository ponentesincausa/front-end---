$(function() {


   // prueba json
   // var json = [{"id":0,"name":"juanman"},{"id":0,"name":"juann"}]

  // template
    $.template('municipioList', '<div><ul><li>${name}</li></ul></div>' );


    for (var i = 0; i <  json.length; i++) {
        $.tmpl('municipioList', json[i]).appendTo('#municipios');


    }
});