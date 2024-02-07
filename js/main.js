const buttons = document.getElementsByClassName("button");
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
const buttonOnOff = document.getElementById('on-off')
const btnNetflix = document.getElementById("buttontNetflix")
const btnYoutube = document.getElementById("buttonYoutube")
const btnUp = document.getElementById("up")
const down = document.getElementById("down")
let tvOnOf = false;
let zapping = 1
const info = document.getElementById("info")
const infoChannel= document.getElementById("channelInfo")


buttonOnOff.addEventListener('click', () => {
    if (tvOnOf) {
        tvOnOf = false
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("basicScreen")
        screen.classList.remove
        buttonOnOff.style.backgroundColor = "black"     
        date.innerText= ""
        infoChannel.innerText= ""

        // guardar en zapping el canal donde estamoss    
    } else {
        tvOnOf = true
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("startingScreen")
        buttonOnOff.style.backgroundColor = "#cecece"
        const fechaHoraString = getDate()
        document.getElementById("date").innerText = fechaHoraString;
        // cambia la pantalla inicia despues de 3 segundos
        setTimeout(function () {
            screen.classList.remove("startingScreen")
            screen.classList.add("canal1")
        }, 3000) 
        infoChannel.innerText=zapping
    }
})

btnNetflix.addEventListener('click', () => {
    if (tvOnOf) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("netflix")
    }
})

btnYoutube.addEventListener('click', () => {
    if (tvOnOf) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("youtube")
    }


})

btnUp.addEventListener("click", () => {
    if (tvOnOf) {
        zapping++
        if (zapping > 9) {
        zapping = 1    
    }
        console.log(screen.classList.length - 1);
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal" + zapping)
        infoChannel.innerText=zapping
    }
}
)

down.addEventListener("click", (event) => {
if (tvOnOf) {
    zapping--
    
    if (zapping < 1) {
        zapping = 9    
    }
    
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("canal" + zapping)
    infoChannel.innerText=zapping
    
}
}
)


arrayButtons.map(
    item => {
        item.addEventListener("click", (evento) => {

            if (tvOnOf) {

                screen.classList.remove(screen.classList[screen.classList.length - 1])
                screen.classList.add("canal" + evento.target.id.slice(-1))
                
                zapping = evento.target.id.slice(-1)
                infoChannel.innerText=zapping
                console.log(zapping);


            }
        })
    }
)

function getDate() {
    var fechaHora = new Date();
    var opciones = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', };
    var fechaHoraString = fechaHora.toLocaleString('es-ES', opciones);
    const fechaHoraSinComa = fechaHoraString.replace(",", " ")
    return fechaHoraSinComa;
}



