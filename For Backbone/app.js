// app.js adds square, prof pics, time, score on the screens, and link picutre files to the game.

const squares = document.querySelectorAll('.square')
const profs = document.querySelector('.prof')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

const images = [
    '../For Graphics/Prof Pics/Chen200.png',
    '../For Graphics/Prof Pics/Chuang200.png',
    '../For Graphics/Prof Pics/Langsam1.png',
    '../For Graphics/Prof Pics/Rudowsy200.png',
    '../For Graphics/Prof Pics/Raphan1.png',
];

//sound effect when pro got hit
const sounds = ['../For Graphics/Music Assets/hit_impact_sound_one.mp3',
                '../For Graphics/Music Assets/hit_impact_sound_two.mp3']
//sound effect when pro got hit
var s = document.createElement("audio")

//music src
const music = ['../For Graphics/Music Assets/Peculiar.mp3',
            '../For Graphics/Music Assets/Pink Elephant.mp3']
var myAudio = document.createElement("audio")
myAudio.volume = 0.6
var c=0

let result =null
let hitPos
let currTime = null
let timerId = null
let countDownTimerId=null
let lastMole = null
let timeR = null

// Start off with a fresh board
// Make profesor appear on different squares
function randSquare() {

    const time = Math.floor(Math.random()*(1000-300)+300)

    let randPosition = Math.floor(Math.random() * squares.length)
    //avoid same location
    while (randPosition===lastMole){
        randPosition = Math.floor(Math.random() * squares.length)
    }
    let mole = squares[randPosition]
    lastMole = randPosition;
   
    let randomNum = Math.floor(Math.random() * images.length)
    mole.style.backgroundImage = 'url("' + images[randomNum] + '")'
    mole.style.backgroundRepeat = "no-repeat";
    mole.style.display = "block";
    mole.style.marginRight = "auto";
    mole.style.marginLeft = "auto";
    mole.style.backgroundSize = "100%";
    hitPos = mole.id
    
    //random dispear time
    timeR = setTimeout(()=> {
        mole.removeAttribute("style")
    },time)
}

// Check for a hit
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPos && square.hasAttribute('style')) {
            s.src = sounds[Math.floor(Math.random()*2)]
            s.play()
            square.removeAttribute("style")
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
    timerId=setInterval(randSquare, 1000)
    countDownTimerId=setInterval(countDown, 1000)

    //play music
    myAudio.pause()
    myAudio.src = music[c];
    myAudio.play()
    c=1
    myAudio.addEventListener('ended', ()=>{
        myAudio.pause()
        myAudio.src = music[c];
        myAudio.load()
        myAudio.play()
        c=0
    })

}


//create a restart button 
function restartButton(){
    var btn = document.createElement("BUTTON")
    btn.setAttribute('id','restartButton')
    document.getElementById("class").append(btn);
}

//listen for the restart button to be click
document.getElementById("class").addEventListener("click", function(){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    clearTimeout(timeR)
    squares.forEach(square => {
        square.removeAttribute("style")
    })
    gameStart()
});

// Timer countdown function
function countDown() {
    currTime--
    timeLeft.textContent = currTime
    if (currTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        clearTimeout(timeR)
        //remove all
        squares.forEach(square => {
            square.removeAttribute("style")
        })
        alert("Game Over! Score: " + result)
        myAudio.pause()
    }
}

// add scores whenever professor pops up and get a hit
function wack(e){
    if(!e.isTrusted) return; //add scores 
    score++;
    this.parentNode.classList.remove('up'); //this refers to item clicked
    scoreBoard.textContent = score;
}

//when submit button clicked
function submit(){
    location.href = "leaderboard.html"
}
