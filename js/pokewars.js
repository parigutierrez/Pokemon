
function Pokemon(nombre,color,ataque){
  this.nombre = nombre;
  this.color = color;
  this.vida = 100;
  this.ataque = ataque;
}
var pokemons = [];
function crearPokemon(){
  var nombre = document.getElementById('nombre');
  var color= document.getElementById('color');
  var ataque= document.getElementById('ataque');

  var poke = new Pokemon(nombre.value,
                            color.value,
                            parseInt(ataque.value))

pokemons.push(poke);
console.log(pokemons);
document.getElementById('nombre').value="";
document.getElementById('color').value="";
document.getElementById('ataque').value="";
mostrarPokemon();
}

function mostrarPokemon(){
  var select1 = document.getElementById('select1');
  var select2 = document.getElementById('select2');

    var elemento = document.createElement("option");
    elemento.innerText = pokemons[pokemons.length - 1].nombre;
    select1.appendChild(elemento);

  //pokemons.forEach(function(poke){
    var elemento = document.createElement("option");
    elemento.innerText = pokemons[pokemons.length - 1].nombre;;
    select2.appendChild(elemento);
  //})
}

function pelear(){
    var pokeSelect = document.getElementById("select1").selectedIndex;
    //console.log(pokeSelect);
    var pokeSelect2 = document.getElementById("select2").selectedIndex;
    if (pokeSelect==pokeSelect2){
      alert("Un Pokemon no puede pelear contra si mismo, Elige otro contrincante");
    }
    else {
      alert("Que empiece la pelea");
      //pokemon.vida = pokemon.vida - adversario.ataque;
    }
}
