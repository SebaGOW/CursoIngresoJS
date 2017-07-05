var rese=0;
function Mostrar()
{
while(rese==0)
{
    var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero)
if (numero<10 && numero>0)
{
  alert(numero);
  rese=1
}
}
}//FIN DE LA FUNCIÓN