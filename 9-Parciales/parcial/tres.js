var ancho;
var largo;
var perim;
function Mostrar()
{
ancho=document.getElementById("ancho").value;
largo=document.getElementById("alrgo").value;
perim=(largo*2+ancho*2)*3;
alert("Se necesitan: "+perim+" metros.");
}
