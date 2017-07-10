function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var rta=0;
while(rta!=respuesta)
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
	rta=prompt("¿Desea terminar?");
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN