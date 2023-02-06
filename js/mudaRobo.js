const robo = document.querySelector("#robotron")

robo.addEventListener("click", () => {
    if(robo.src="img/robotron.png") {
        robo.src="img/robotron-amarelo.png"
    }else {
        robo.src="img/robotron.png"
    }
})


// Função para alterar as cores com botões de seleção

// function trocaImagem(cor){
//     document.querySelector(".robo").src="./img/Robotron 2000 - " + cor + "/robotron.png";
//  }




