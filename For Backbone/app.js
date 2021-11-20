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

let result =null
let hitPos
let currTime = null
let timerId = null
let countDownTimerId=null



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

//call startGame when start button clicked
//also remove start button after clicked
function gameStartClicked() {
    gameStart()
    //remove the start button
    var myobj = document.getElementById("startGame")
    myobj.remove()
    //create a restart button
    restartButton()
}

//initalize or reset the result and timer
//start or reset a game
function gameStart(){
    result = 0
    currTime = 60
    score.textContent = result
    timeLeft.textContent = currTime
    timerId = setInterval(randSquare, 600)
    countDownTimerId=setInterval(countDown, 1000)
}

//create a restart button 
function restartButton(){
    var btn = document.createElement("BUTTON")
    btn.innerHTML = "Restart"
    document.getElementById("class").append(btn);
}

//listen for the restart button to be click
document.getElementById("class").addEventListener("click", function(){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    gameStart()
});

// Timer countdown function
function countDown() {
    currTime--
    timeLeft.textContent = currTime
    if (currTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        //remove all
        squares.forEach(square => {
            square.removeAttribute("style")
        })
        alert("Game Over! Score: " + result)
        
    }
}

// add scores whenever professor pops up and get a hit
function wack(e){
    if(!e.isTrusted) return; //add scores 
    score++;
    this.parentNode.classList.remove('up'); //this refers to item clicked
    scoreBoard.textContent = score;
}