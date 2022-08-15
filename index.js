let homeScore = document.getElementById("home-count")
let guestScore = document.getElementById("guest-count")
let homeCount = 0
let guestCount = 0

console.log(homeScore)

function add1Home(){
    homeCount +=1
    homeScore.textContent = homeCount
}

function add2Home(){
    homeCount +=2
    homeScore.textContent = homeCount
}

function add3Home(){
    homeCount +=3
    homeScore.textContent = homeCount
}

function add1Guest(){
    guestCount +=1
    guestScore.textContent = guestCount
}

function add2Guest(){
    guestCount +=2
    guestScore.textContent = guestCount
}

function add3Guest(){
    guestCount +=3
    guestScore.textContent = guestCount
}

function startOver() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}
