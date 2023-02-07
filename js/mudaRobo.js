const robo = document.querySelector("#robotron")
const botaoDeCor = document.querySelector("#trocaCor")

const cores = [ 
    "img/Robotron 2000 - Azul/robotron.png",
    "img/Robotron 2000 - Branco/robotron.png",
    "img/Robotron 2000 - Preto/robotron.png",
    "img/Robotron 2000 - Rosa/robotron.png",
    "img/Robotron 2000 - Vermelho/robotron.png",
    "img/Robotron 2000 - Amarelo/robotron.png"
]

let contador = 0

botaoDeCor.addEventListener("click", () => {
    if (contador < cores.length) {
        robo.src = cores[contador]
        contador++
    } else {
        contador = 0
        robo.src = cores[contador]
        contador++
    }
})


// Função para alterar as cores com botões de seleção

// function trocaImagem(cor){
//     document.querySelector(".robo").src="./img/Robotron 2000 - " + cor + "/robotron.png";
//  }




