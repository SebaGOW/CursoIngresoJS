var va1;
var va2;
var resu;
function Mostrar()
{
    va1=prompt("Ingrese el primer valor");
    va1=parseInt(va1);
    va2=prompt("Ingrese el segundo valor");
    va2=parseInt(va2);
if(va1==va2)
{
resu=va1*va2
document.write(resu);
}
else if (va1>va2)
{
resu=va1-va2
document.write(resu);
}
else
{
    resu=va1+va2;
    document.write(resu);
}
}
