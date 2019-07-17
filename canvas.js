// console.log("js canvas - work")

var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.log(canvas)

var c = canvas.getContext('2d')
c.fillStyle = "white"
c.fillRect(10, 10, 100, 200)

// line
c.beginPath()
c.moveTo(50,300)
c.lineTo(300,100)
c.strokeStyle = "blue"
c.stroke()

// arc / circle
c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'green'
c.stroke()

for (let i = 0; i < 30; i++) {
    let y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(360 + 60 * i, y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'green'
    c.stroke()
}


c.beginPath()
c.arc(300, 300, 20, 0, Math.PI * 2, false)
c.strokeStyle = 'white'
c.lineWidth = 10 
c.stroke()

function changeColor(){
//    document.body.style.background = 'black'
   // alert('white')
 //  c.clearRect(0, 0, innerWidth, innerHeight)
 //?????
   document.getElementById('myCanvas').style.color = 'blue'
}