let resultado = document.querySelector("#resultado")
const listaDeBotoes = document.querySelectorAll(".botoes__valores")
const igual = document.querySelector("#igual")
const recomecar = document.querySelector(".fileira__recomecar")
const corrige = document.querySelector("#corrige");

for(i = 0; i < listaDeBotoes.length; i++) {
    const botao = listaDeBotoes[i]

    botao.onclick = function() {
        resultado.value = resultado.value + botao.value
    }
}

igual.addEventListener("click", function() {
    resultado.value = eval(resultado.value)
})

recomecar.addEventListener("click", () => {
    const recado = ""
    resultado.value = recado
})

corrige.addEventListener("click", () => {
    resultado.value = resultado.value.slice(0, -1)
})





