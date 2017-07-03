function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num
	num=Math.floor(Math.random()*(10-1)+1)
	if(num>=9)
	{
		alert("Excelente")
	}
else if(num<9 && num>4)
{
	alert("Aprobo")
}
else
{
	alert("Vamos, la proxima se puede")
}
}//FIN DE LA FUNCIÓN