const buttons = document.getElementsByClassName("button");
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
const buttonOnOff = document.getElementById('on-off')
const btnNetflix = document.getElementById("buttontNetflix")
const btnYoutube = document.getElementById("buttonYoutube")
const btnZptop = document.getElementById("zpTop")
let tvOnOf = false;

let zapping = 1

buttonOnOff.addEventListener('click', () => {
    if (tvOnOf) {
        tvOnOf = false
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("basicScreen")
        buttonOnOff.style.backgroundColor = "black"

        // todo guardar en zapping el canal donde estamoss    
    } else {
        tvOnOf = true
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("startingScreen")
        buttonOnOff.style.backgroundColor = "green"

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

btnZptop.addEventListener("click", () => {
    if (tvOnOf) {
        zapping++
        console.log(zapping);
        screen.classList.remove(screen.classList[screen.classList.lenght - 1])
        screen.classList.add("canal" + zapping)
    }
}
)

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

