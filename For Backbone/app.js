const squares = document.querySelectorAll('.square')
const profs = document.querySelector('.prof')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPos
let currTime = 60
let timerId = null

// Start off with a fresh board
// Make profesor appear on different squares
function randSquare() {
    squares.forEach(square => {
        square.classList.remove('prof')
    })

    let randPosition = squares[Math.floor(Math.random() * 15)]
    randPosition.classList.add('prof')
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