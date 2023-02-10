const robo = document.getElementById("robo")

robo.src = JSON.parse(localStorage.getItem("robo")) || "./img/Robotron 2000 - Azul/robotron.png"


function trocaImagem(cor){
    let endereço = "./img/Robotron 2000 - " + cor + "/robotron.png"

    robo.src= endereço;

    localStorage.setItem("robo", JSON.stringify(endereço))
}

