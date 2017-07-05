/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var lar;
var anc;
var rad;
var rec;
var circu;
var cemento;
var ncal;


function Rectangulo () 
{
lar=document.getElementById("Largo").value;
lar=parseInt(lar);
anc=document.getElementById("Ancho").value;
anc=parseInt(anc);
rec=lar*2+anc*2
rec=rec*3
alert(rec+" metros");

}
function Circulo () 
{
	rad=document.getElementById("Radio").value;
    rad=parseInt(rad);
    circu= Math.PI*rad*rad
    alert(circu+" metros");
}
function Materiales () 
{
lar=document.getElementById("Largo").value;
lar=parseInt(lar);
anc=document.getElementById("Ancho").value;
anc=parseInt(anc);
rec=lar*anc;
cemento=rec*2;
ncal=rec*3
alert("Se necesitan "+cemento+" bolsas de cemento y "+ncal+" bolsas de cal.")

}