// alert("hahaha")

// bird.src = "../images/bird.png"

var canvas = document.getElementById("canvas")  //canvas id = 'canvas'
var ctx = canvas.getContext("2d")

//load images
var bird = new Image()
var bg = new Image()    //background
var fg = new Image()    //front ground
var pipeNorth = new Image()
var pipeSouth = new Image()

bird.src = 'imgs/bird.png'
bg.src = 'imgs/bg.png'
fg.src = 'imgs/fg.png'
pipeNorth.src = 'imgs/pipeNorth.png'
pipeSouth.src = 'imgs/pipeSouth.png'


// variables
var bx = 10
var by = 150

var gravity = 1.5

var score = 0


// audio
var fly = new Audio()
var scor = new Audio()

fly.src = 'sounds/fly.mp3'
scor.src = 'sounds/score.mp3'


// on key down
document.addEventListener('touchstart', moveUp)

function moveUp(){
    by -= 35;
    fly.play();     //audio
}

// pipe coordinates
// why this should define outside the function
let pipe = [];      // generate an array
pipe[0] = {
    x : canvas.width,       // pipe appears from the right
    y : - 50      // pipe from up top
}


function randomInt(a, b) {
    return Math.floor(Math.random()*(b-a)) + a
}


function draw(){

    ctx.drawImage(bg, 0, 0)

    let gap = 150;      // gap between two pipes - difficulty of the game
    
    for(let i = 0; i < pipe.length; i++) {

        
        let difficulty = 80;       //++
        if(score <= 25 ) {
            gap -= 2
        } else {
            gap = 100
            difficulty = 100
        }

        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + pipeNorth.height + gap)

        pipe[i].x --;   //move pipe from right to left
        
        
        
        // let pp = Math.floor(Math.random() * 10)
        // if (pp < 4){
        //     dy = pipe[i].y - Math.floor(Math.random() * difficulty)
        // } else {
        //     dy = pipe[i].y + Math.floor(Math.random() * difficulty)
        // }

        let dy = randomInt(pipe[i].y - difficulty, pipe[i].y + difficulty)
        if(dy < - 212) {
            dy = randomInt(-212, -212 + 2 * difficulty)
        } else if(dy > - 20) {
            dy = randomInt(-2 * difficulty, - 20)
        }

        if (pipe[i].x == 125) {
            pipe.push({
                x : canvas.width,
                y : dy
            })
            // console.log(dy)
        }


        // detect collision
        if (bx + bird.width >= pipe[i].x && bx <= pipe[i].x + pipeNorth.width && (by <= pipe[i].y + pipeNorth.height || by + bird.height >= pipe[i].y + pipeNorth.height + gap) || by + bird.height >= canvas.height - fg.height || by <= 0) {
            location.reload()       //reload the page
        }

        if(pipe[i].x === 5) {
            score ++;
            scor.play()
        }
        
    }


    // layers of drawing
    ctx.drawImage(fg, 0, canvas.height - fg.height)
    ctx.drawImage(bird, bx, by)

    by += gravity

    // text for score
    ctx.fillStyle = 'black'
    ctx.font = '20px Verdana'
    ctx.fillText('Score : '+score, 20, canvas.height - 30)

    requestAnimationFrame(draw)
}

draw()