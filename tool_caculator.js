function numberIn(putin){
    document.getElementById("input").value += putin
}

function caculate(){
    document.getElementById("input").value = eval(document.getElementById("input").value)
}

function clearIn(){
    document.getElementById("input").value = ""
}

function deletetail(){
    let scribo = document.getElementById("input").value
    if(scribo){
        document.getElementById("input").value = scribo.substring(0, scribo.length - 1)
    }
}