function pokemon(n,v,a)
{
    this.grito = "pika!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function () 
    {
        alert(this.grito);
    }
}
 
function  inicio() 
{
    alert("Esto es despues del inicio");
    var chamander = new pokemon("chamander", 100, 24)
   chamander.vida = chamander.vida - 6;
    
    nombrePokemon.innerText = chamander.nombre;
    
}

alert("Esto es antes del inicio");

