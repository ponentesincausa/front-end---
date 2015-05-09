$(function() {

// ejemplo de json data
    var json = [{"id":0,"name":"Monterrey"},{"id":1,"name":"Guadalupe"},{"id":2,"name":"Apodaca"},{"id":3,"name":"San NicolÃ¡s de los Garza"},{"id":4,"name":"General Escobedo"},{"id":5,"name":"Santa Catarina"},{"id":6,"name":"JuÃ¡rez"},{"id":7,"name":"GarcÃ­a"},{"id":8,"name":"San Pedro Garza GarcÃ­a"},{"id":9,"name":"Cadereyta JimÃ©nez"},{"id":10,"name":"Santiago"},{"id":11,"name":"Salinas Victoria"},{"id":12,"name":"Nuevo LeÃ³n"}]
    //  template
    $.template('userList', '<tr>\
     <td>${id}</td>\
     <td>${name}</td>\
     </tr>'
     );

 for (var i = 0; i < json.length; i++) {
    $.tmpl('userList', json[i]).appendTo("#municipios");
 }




});