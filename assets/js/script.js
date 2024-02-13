let jugador;
let pc;
var ciclo;
var i;


function aleatoria(){
    return Math.floor(Math.random()*3)
    // Como comentario, la funcion que encontre yo, y me estaria dando los mismos resultados es math.ceil(math.random()*3)
}

//ingreso de variable de juegos
ciclo = prompt("Hola! Cuantas veces quieres jugar? Indicame con numeros por favor.")

///for (i=0;ciclo === i;i++)


//script de cachipun funcional
jugador = prompt("Elije: 1 - Piedra / 2 - Papel / 3 - Tijera")
pc = aleatoria();
alert('Tu elejiste: '+ eleccion(jugador))
alert('La CPU eligio: '+ eleccion(pc))
//script que informa resultado
if(jugador == pc){
    alert("Es un empate!")
}else if (jugador ==1 && pc ==3){
    alert("Ganaste! Piedra aplasta a Tijera")
}else if (jugador ==2 && pc ==1){
    alert("Ganaste! Papel envuelva a Piedra")
}else if (jugador ==3 && pc ==2){
    alert("Ganaste! Tijera corta a Papel")
}else if (jugador ==1 && pc ==2){
    alert("Perdiste! Papel envuelva a Piedra")
}else if (jugador ==2 && pc ==3){
    alert("Perdiste! Tijera corta a Papel")
}else {
    alert("Perdiste! Piedra aplasta a Tijera")
}
//script que informa eleccion
function eleccion(jugada){
    var resultado = ''
    if (jugada == 1){
        resultado = "PIEDRA ✊"
    } else if(jugada == 2){
        resultado = "PAPEL ✋"
    } else if(jugada == 3){
        resultado = "TIJERA ✌"
    } else{
        resultado = "Ups, numero equivocado 🤷‍♀️"
    }
    return resultado
}