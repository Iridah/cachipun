let jugador;
let pc;
var ciclo;


function aleatoria(){
    return Math.floor(Math.random()*3)
    // Como comentario, la funcion que encontre yo, y me estaria dando los mismos resultados es math.ceil(math.random()*3)
}

jugador = prompt("Elije: 1 - Piedra / 2 - Papel / 3 - Tijera")
pc = aleatoria();
alert('Tu elejiste: '+ eleccion(jugador))
alert('La CPU eligio: '+ eleccion(pc))

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