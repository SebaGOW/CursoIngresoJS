function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
while(contador<5)
{
	contador= contador+1;
	num=prompt("Ingrese un numero");
	num=parseInt(num)
	while(isNaN(num))
	{
		num=prompt("Ingrese el numero correctamente");
		num=parseInt(num)
	}
	console.log(num);
	acumulador=acumulador+num
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN