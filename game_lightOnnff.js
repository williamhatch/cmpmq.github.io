document.body.style.background = "grey" 

var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


function drawFace(color){
    let eye = canvas.getContext('2d')

    //circle
    eye.beginPath()
    eye.arc(200, 200, 30, 0, Math.PI * 2, false)
    eye.strokeStyle = color
  //  debugger
    // eye.fillStyle = color
    // eye.fill()
    eye.lineWidth = 8
    eye.stroke()

    eye.arc(360, 200, 30, Math.PI, -Math.PI, true)
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



function changecolor(color){
    let mouse = canvas.getContext('2d')
    document.body.style.background = color
    mouse.clearRect(0, 0, innerWidth, innerHeight)
    // document.body.style.background = document.getElementById(id).innerHTML
    
    let complement = 'white'
    if(color == 'white') {
        complement = 'black'
    }

  //  alert('warn')

  //  debugger
    document.getElementById('gameName').style.color = complement
    drawFace(complement);
}
/*    function changecolorselect(){
    var x =$("#color").val()
    document.body.style.background = x
}       */