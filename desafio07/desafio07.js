const alunos = []

while (true) {
    opcaoMenu = parseInt(prompt(`
        ## Syscola ##
        Selecione a opção desejada:
        [1] - Cadastrar aluno
        [2] - Listar alunos cadastrados
    `))
    if (opcaoMenu == 1) {
        const nomeAluno = prompt("Digite o nome do aluno")
        const matriculaAluno = prompt("Digite a matricula(RA) do aluno")
        const notaAluno = []
        while (true) {
            let nota = parseInt(prompt(`Digite a(s) nota(s) do aluno ${nomeAluno}`))
            if (nota >= 0 && nota <= 10) {
                notaAluno.pop(nota)
            } else {
                alert("Você deve inserir notas entre 0 e 10")
            }
            continuarNotas = parseInt(prompt(`
                Deseja inserir mais notas?
                [1] - Sim
                [2] - Não
            `))
            if (continuarNotas != 1) {
                break
            }
        }
        
        let id = alunos.length + 1
        alunos.push({
            id,
            nome: nomeAluno,
            matricula: matriculaAluno,
            notas: alunos[id-1].notas.push(notaAluno),
        })
        console.log(alunos[id-1]);
        break
    }
}
