var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


function drawFace(color){
    let eye = canvas.getContext('2d')

    //circle
    eye.beginPath()
    eye.arc(200, 200, 30, 0, Math.PI * 2, false)
    eye.strokeStyle = color
    eye.lineWidth = 8
    eye.stroke()

    eye.arc(360, 200, 30, Math.PI, -Math.PI, true)
    // eye.fill()
    eye.stroke()

    let nose = canvas.getContext('2d')
    //line
    nose.beginPath()
    nose.moveTo(280, 250)
    nose.lineTo(280, 300)
    nose.stroke()

    //mouse
    let mouse = canvas.getContext('2d')
    mouse.beginPath()
    mouse.moveTo(200, 350)
    mouse.lineTo(360, 350)
    mouse.stroke()

    mouse.arc(284, 350, 80, 0, Math.PI, false)
    mouse.stroke()
}


drawFace('black');



function changeCondition(click){
    let pen = canvas.getContext('2d')
    pen.clearRect(0, 0, innerWidth, innerHeight)
    // clear the canvas
    
    let status = 'morning'
    if(click == 'night') {
        status = 'night'
    }

    drawEye(status);
}


function drawEye(status) {
    let eyelid = canvas.getContext('2d')
    if(status == 'night') {
        eyelid.beginPath()
        eyelid.arc(200, 200, 30, 0, Math.PI * 2, false)
        eyelid.strokeStyle = 'black'
        eyelid.fillStyle = 'black'
        eyelid.fill()
        eyelid.lineWidth = 8
        eyelid.stroke()

        eyelid.arc(360, 200, 30, Math.PI, -Math.PI, true)
        eyelid.stroke()
        eyelid.fill()
            // what cover my eyes --- night covers my eye but I use them to find light
        
        let nose = canvas.getContext('2d')
        //line
        nose.beginPath()
        nose.moveTo(280, 250)
        nose.lineTo(280, 300)
        nose.stroke()
       
        //mouse
        let mouse = canvas.getContext('2d')
        mouse.beginPath()
        mouse.moveTo(200, 350)
        mouse.lineTo(360, 350)
        mouse.stroke()
    } else {
        eyelid.lineWidth = 8
        eyelid.beginPath()
        eyelid.arc(200, 200, 30, 0, Math.PI * 2, false)
        
        eyelid.strokeStyle = 'black'
      //  eyelid.fillStyle = 'white'
     //   eyelid.fill()
        
        eyelid.stroke()
        eyelid.arc(360, 200, 30, Math.PI, -Math.PI, true)
        eyelid.stroke()
      //  eyelid.fill()
        let nose = canvas.getContext('2d')
        //line
        nose.beginPath()
        nose.moveTo(280, 250)
        nose.lineTo(280, 300)
        nose.stroke()

        //mouse
        let mouse = canvas.getContext('2d')
        mouse.beginPath()
        mouse.moveTo(200, 350)
        mouse.lineTo(360, 350)
        mouse.stroke()

        mouse.arc(284, 350, 80, 0, Math.PI, false)
        mouse.stroke()

        // drawEyelash('blue')

        // debugger
        // setTimeout(drawEyelash, 10000)
        // clearTimeout()
        setInterval(drawEyelash,1000)
    }
}

var nn = 0, patch = 0;

function drawEyelash(color="blue"){
    let eyelash = canvas.getContext('2d')
    // eyelash.globalCompositeOperation = 'xor';

    if (nn ++ % 2 === 0) {
        color ="white"
        eyelash.lineWidth = 12
        patch = 2
      }
      else{
        eyelash.lineWidth = 8
        patch = 0
      }
    //left eye
    eyelash.strokeStyle = color
    // eyelash.lineWidth = 10
    eyelash.beginPath()
    eyelash.moveTo(200 - 20 * Math.sqrt(2) + patch, 200 - 20 * Math.sqrt(2))
    eyelash.lineTo(200 - 35 * Math.sqrt(2) - patch, 200 - 35 * Math.sqrt(2))
    eyelash.stroke()

    eyelash.beginPath()
    eyelash.moveTo(200, 130)
    eyelash.lineTo(200, 160)
    eyelash.stroke()

    eyelash.beginPath()
    eyelash.moveTo(200 + 20 * Math.sqrt(2) - patch, 200 - 20 * Math.sqrt(2))
    eyelash.lineTo(200 + 35 * Math.sqrt(2) + patch, 200 - 35 * Math.sqrt(2))
    eyelash.stroke()
}