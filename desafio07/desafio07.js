const alunos = []

while (true) {
    opcaoMenu = parseInt(prompt(`
        ########## Syscola ##########
        Selecione a opção desejada:
        [1] - Cadastrar aluno
        [2] - Listar alunos cadastrados
        [3] - Sair
    `))
    const notaAluno = []
    if (opcaoMenu == 1) {
        const nomeAluno = prompt("Digite o nome do aluno")
        const matriculaAluno = prompt("Digite a matricula(RA) do aluno")
        while (true) {
            const nota = parseInt(prompt(`Digite a(s) nota(s) do aluno ${nomeAluno}`))
            if (nota >= 0 && nota <= 10) {
                notaAluno.push(nota)
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
        
        alunos.push({
            id: alunos.length + 1,
            nome: nomeAluno,
            matricula: matriculaAluno,
            notas: notaAluno,
        })
        continuarCadastro = parseInt(prompt(`
            Deseja voltar ao menu inicial?
            [1] - Sim
            [2] - Não
        `))
        if (continuarCadastro == 1) {
            continue
        }
        break

    } else if (opcaoMenu == 2) {
        console.log(alunos)
        break
        
    } else break
}
