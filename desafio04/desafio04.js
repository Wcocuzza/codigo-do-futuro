const nomeDoAluno = prompt("Digite o nome do aluno:");

const nota01 = parseFloat(prompt("Digite o valor da primeira nota:"));
const nota02 = parseFloat(prompt("Digite o valor da segunda nota:"));
const nota03 = parseFloat(prompt("Digite o valor da terceira nota:"));
const nota04 = parseFloat(prompt("Digite o valor da quarta nota:"));

const media = (nota01 + nota02 + nota03 + nota04) / 4;

if(media < 5) {
    alert(`
        O aluno ${nomeDoAluno} foi reprovado!
        A média do aluno foi: ${media.toFixed(2)}.
    `);
} else {
    alert(`
        O aluno ${nomeDoAluno} foi aprovado!
        A média do aluno foi: ${media.toFixed(2)}.
    `);
}
