
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}



function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    let spanNombreMascotaJugador = document.getElementById('NombreMascotaJugador')

    if (inputHipodoge.checked) {
        spanNombreMascotaJugador.innerHTML = 'HIPODOGE'
    } else if (inputCapipepo.checked) {
        spanNombreMascotaJugador.innerHTML = 'CAPIPEPO'
    } else if (inputRatigueya.checked) {
        spanNombreMascotaJugador.innerHTML = 'RATIGUEYA'
        
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo{

    let numeroAleatorio = aleatorio(1,3)
    let spanNombreMascotaEnemigo = document.getElementById('NombreMascotaEnemigo')


    if (numeroAleatorio == 1){
    spanNombreMascotaEnemigo = spanNombreMascotaEnemigo.innerHTML='CAPIPEPO'
        
    }  
    if else (numeroAleatorio == 2){
    spanNombreMascotaEnemigo = spanNombreMascotaEnemigo.innerHTML='RATIGUEYA'
    }
    else{
    spanNombreMascotaEnemigo = spanNombreMascotaEnemigo.innerHTML='HIPODOGE'
    }

}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min +1 )- min)
}

window.addEventListener('load', iniciarJuego)
