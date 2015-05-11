$(function() {



   // prueba json
   var json = $.ajax({
    type: 'GET',
        url: 'http://disfuncionarios.org:3000/api/zone',
        dataType: 'json',
        success: function (data) {
        console.log(data);
    }
});

  // template
    $.template('municipioList', '<div><ul><li>${name}</li></ul></div>' );


    for (var i = 0; i <  json.length; i++) {
        $.tmpl('municipioList', json[i]).appendTo('#municipios');


    }
});