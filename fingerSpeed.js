document.addEventListener("keydown", addFunction)

var sum = 0

function addFunction(){
    // var a = int(document.getElementById("num").innerHTML) + 10*Math.random()
    sum += 1
    document.getElementById("num").innerHTML = sum
    console.log(sum)
}