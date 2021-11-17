const squares = document.querySelectorAll('.square')
const profs = document.querySelector('.prof')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

const images = [
    '../For Graphics/Prof Pics/chen2.png',
    '../For Graphics/Prof Pics/Chuang2.png',
    '../For Graphics/Prof Pics/Langsam1.png',
    '../For Graphics/Prof Pics/Rudowsy1.png',
    '../For Graphics/Prof Pics/Raphan1.png',
];

let result = 0
let hitPos
let currTime = 60
let timerId = null

// Start off with a fresh board
// Make profesor appear on different squares
function randSquare() {
    squares.forEach(square => {
        square.removeAttribute("style")
    })

    let randPosition = squares[Math.floor(Math.random() * 15)]
    let randomNum = Math.floor(Math.random() * images.length)
    randPosition.style.backgroundImage = 'url("' + images[randomNum] + '")'
    randPosition.style.backgroundRepeat = "no-repeat";
    randPosition.style.display = "block";
    randPosition.style.marginRight = "auto";
    randPosition.style.marginLeft = "auto";
    randPosition.style.backgroundSize = "100%";
    hitPos = randPosition.id
}

// Check for a hit
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPos) {
            result++
            score.textContent = result
            hitPos = null
        }
    })
})

// It moves the professor to different squares with a constant interval
function moveProf() {
    timerId = setInterval(randSquare, 600)
}

moveProf()

// Timer countdown function
function countDown() {
    currTime--
    timeLeft.textContent = currTime

    if (currTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Score: " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
