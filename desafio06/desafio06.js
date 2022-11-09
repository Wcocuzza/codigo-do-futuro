let numeroInicial = parseInt(prompt("Digite o número inicial:"))
let numeroFinal = parseInt(prompt("Digite o número final:"))

while (numeroInicial <= numeroFinal) {
    if (numeroInicial % 2 == 0) {
        console.log(numeroInicial)
    }
    numeroInicial++
}
