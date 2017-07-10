function Mostrar()
{

	var Minimo;
	var Maximo;
	var rta=0
	var respuesta='si';
	var num;
	var prime=0
	while(rta!=respuesta)
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		while(isNaN(num))
		{
			num=prompt("Ingrese el numero correctamente");
			num=parseInt(num);
		}
		if(prime==0)
		{
			Maximo=num;
			Minimo=num;
			prime=1;
		}
		if(num>Maximo)
		{
			Maximo=num;
		}
		else if(num<Minimo)
		{
			Minimo=num;
		}
		rta=prompt("¿Desea terminar?");
		rta=rta.toLowerCase()

	}
document.getElementById("maximo").value=Maximo;
document.getElementById("minimo").value=Minimo;



}//FIN DE LA FUNCIÓN