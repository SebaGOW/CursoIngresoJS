var contador=1;
var dia
var diam;
var diame
function Mostrar()
{
while(contador<=24)
{
    dia=prompt("Ingrese el importe del dia: "+contador);
    dia=parseInt(dia);
    while(dia<=0||isNaN(dia))
    {
    dia=prompt("Ingrese el importe del dia: "+contador);
    dia=parseInt(dia);
    }
    if (contador==1)
    {
        diam=dia;
        diame=dia;
    }
    else if (dia>diam)
    {
        diam=dia;
    }
    else if (dia<diame)
    {
        diame=dia
    }
    contador++
}
alert("El mayor importe fue de: "+diam+" y el menor importe fue de: "+diame);
}
