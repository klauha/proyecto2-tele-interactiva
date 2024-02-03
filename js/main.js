const buttons = document.getElementsByClassName("button");
let arrayButtons = Array.from(buttons)
let screen = document.getElementById("screen")
const buttonOnOff = document.getElementById('on-off')
const btnNetflix = document.getElementById("buttontNetflix")
let tvOnOf = false;

let zapping = 2

buttonOnOff.addEventListener('click', () => {
    if (tvOnOf) {
        tvOnOf = false 
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("basicScreen")
        buttonOnOff.style.backgroundColor = "black"
    } else {
        tvOnOf = true
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("canal2")
        buttonOnOff.style.backgroundColor = "green"
    }
})

btnNetflix.addEventListener('click', ()=> {
    if (tvOnOf) {
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("netflix")
    }
})

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