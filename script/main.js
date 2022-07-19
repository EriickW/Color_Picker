const body = document.querySelector("body")
const color = body.querySelector(".color")
const botao = body.querySelector("button")




function mudarCor(){
    let valueColor = color.value
    body.style.backgroundColor = valueColor

}

botao.addEventListener("click", mudarCor)





