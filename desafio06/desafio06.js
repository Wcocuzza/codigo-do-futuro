numeroInicial = parseInt(prompt("Digite o número inicial:"))
numeroFinal = parseInt(prompt("Digite o número final:"))

while (numeroInicial <= numeroFinal) {
    if (numeroInicial % 2 == 0) {
        console.log(numeroInicial)
    }
    numeroInicial++
}
