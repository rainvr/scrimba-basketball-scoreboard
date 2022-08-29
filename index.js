let homeScore = 0
let guestScore = 0

// ----------------------------------------------------------------
// below is the attempt to create the html using arrays
// ----------------------------------------------------------------

let container = `<div>
                <h3>HOME</h3>
                <div class="back-box">
                    <p class="score" id="home-score">0</p>
                </div>
                <div class="plus-container">
                    <div class="plus-box" id="home-plus-1">
                        <p class="plus-text">+1</p>
                    </div>
                    <div class="plus-box" id="home-plus-2">
                        <p class="plus-text">+2</p>
                    </div>
                    <div class="plus-box" id="home-plus-3">
                        <p class="plus-text">+3</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>AWAY</h3>
                <div class="back-box">
                    <p class="score" id="guest-score">0</p>
                </div>
                <div class="plus-container">
                    <div class="plus-box" id="guest-plus-1">
                        <p class="plus-text">+1</p>
                    </div>
                    <div class="plus-box" id="guest-plus-2">
                        <p class="plus-text">+2</p>
                    </div>
                    <div class="plus-box" id="guest-plus-3">
                        <p class="plus-text">+3</p>
                    </div>
                </div>
            </div>`

    document.getElementById("container").innerHTML = container

// ----------------------------------------------------------------
// above is the attempt to create the html using arrays
// ----------------------------------------------------------------


const homePlus1 = document.getElementById("home-plus-1")
const homePlus2 = document.getElementById("home-plus-2")
const homePlus3 = document.getElementById("home-plus-3")
const guestPlus1 = document.getElementById("guest-plus-1")
const guestPlus2 = document.getElementById("guest-plus-2")
const guestPlus3 = document.getElementById("guest-plus-3")

homePlus1.addEventListener("click", function() {
    homeScore = homeScore + 1
    document.getElementById("home-score").textContent = homeScore
})

homePlus2.addEventListener("click", function() {
    homeScore = homeScore + 2
    document.getElementById("home-score").textContent = homeScore
})

homePlus3.addEventListener("click", function() {
    homeScore = homeScore + 3
    document.getElementById("home-score").textContent = homeScore
})

guestPlus1.addEventListener("click", function() {
    guestScore = guestScore + 1
    document.getElementById("guest-score").textContent = guestScore
})

guestPlus2.addEventListener("click", function() {
    guestScore = guestScore + 2
    document.getElementById("guest-score").textContent = guestScore
})

guestPlus3.addEventListener("click", function() {
    guestScore = guestScore + 3
    document.getElementById("guest-score").textContent = guestScore
})

