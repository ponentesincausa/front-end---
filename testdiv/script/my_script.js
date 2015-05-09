$("button").click( function() {
 $.getJSON( "lista.json", function(obj) {
  $.each(obj, function(key, value) {
         $("ul").append("<li>"+value.name+"</li>");
  });
 });
});