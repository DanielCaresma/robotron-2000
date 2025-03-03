const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.dataset.controle
        const contador = parseInt(evento.target.parentNode.querySelector("[data-contador]").value)

        if (contador === 0 && operacao === "-") {
            
        } else {
            manipulaDados(operacao, evento.target.parentNode)
            atualizaEstatistica(operacao, evento.target.dataset.peca)
        }
    })
})

function manipulaDados (operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) > 0 ?  parseInt(peca.value) - 1 : 0 
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica (operacao, peca) {

    estatisticas.forEach( (elemento) => {
        if (operacao === "-" ) {
            elemento.textContent = parseInt(elemento.textContent) - (pecas[peca][elemento.dataset.estatistica])
        } else if (operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

