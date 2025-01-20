let body = document.querySelector('body')

function generateColor(){
    let randomColor = '#'
    for(let i = 1;i < 7; i++){
        randomColor += Math.floor(Math.random()*10)
    }
    return randomColor
}
let intervalId;
function changeColor(){
    body.style.backgroundColor = generateColor()
}

function startShuffle(){
    intervalId = setInterval(changeColor,1000)
}    

function endShuffle(){
    clearInterval(intervalId)
}