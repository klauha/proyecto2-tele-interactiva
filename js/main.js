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





buttonOnOff.addEventListener('click', () => {
    if (tvOnOf) {
        tvOnOf = false
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("basicScreen")
        screen.classList.remove
        buttonOnOff.style.backgroundColor = "black"
        document.getElementById("date").style.color = "black";

        // todo guardar en zapping el canal donde estamoss    
    } else {
        tvOnOf = true
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("startingScreen")
        buttonOnOff.style.backgroundColor = "#cecece"
        const fechaHoraString = getDate()
        document.getElementById("date").innerText = fechaHoraString;
        setInterval(() => {
        }, 1000);

        setTimeout(() => {
            document.getElementById('info').remove()
        }, 5000);


        // cambia la imagen despues de un tiempo
        setTimeout(function () {
            screen.classList.remove("startingScreen")
            screen.classList.add("canal1")
        }, 3000)

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
        screen.classList.remove(screen.classList[screen.classList.lenght - 1])
        screen.classList.add("youtube")
    }


})

btnUp.addEventListener("click", () => {
    if (tvOnOf) {
        zapping++
        console.log(zapping);
        screen.classList.remove(screen.classList[screen.classList.lenght - 1])
        screen.classList.add("canal" + zapping)
    }
}
)

// down.addEventListener("click", () => {
// if (tvOnOf) {
//     zapping--
//     screen.classList.remove(screen.classList[screen.classList.lenght - 1])
//     screen.classList.add("canal" - zapping)
// }
// }
// )





const switchTv = () => {
    // if (tvOnOf) {
    //     tvOnOf = false
    //     screen.classList.remove(screen.classList[screen.classList.length - 1])
    //     screen.classList.add("basicScreen")
    //     buttonOnOff.style.backgroundColor = "black"
    // } else {
    //     tvOnOf = true
    //     screen.classList.remove(screen.classList[screen.classList.length - 1])
    //     screen.classList.add("canal2")
    //     buttonOnOff.style.backgroundColor = "green"
    // }
}

arrayButtons.map(
    item => {
        item.addEventListener("click", (evento) => {

            if (tvOnOf) {

                screen.classList.remove(screen.classList[screen.classList.length - 1])
                screen.classList.add("canal" + evento.target.id.slice(-1))



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



