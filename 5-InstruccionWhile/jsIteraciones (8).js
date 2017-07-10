function Mostrar()
{	var positivo=0;
	var negativo=1;
	var rta=0;
	var respuesta='si';
while(rta!=respuesta)
{
	num=prompt("Ingrese un numero");
	num=parseInt(num)
	while(isNaN(num))
	{
		num=prompt("Ingrese el numero correctamente");
		num=parseInt(num);
	}
	if(num>=0)
	{
		positivo=positivo+num
	}
	else
	{
		negativo=negativo*num
	}
	rta=prompt("¿Desea terminar?");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN