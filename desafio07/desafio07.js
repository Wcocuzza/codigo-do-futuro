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
    const id = alunos.length + 1

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
            id,
            nome: nomeAluno,
            matricula: matriculaAluno,
            notas: notaAluno,
            media: 0,
            status: "",
        })

        const calculaMedia = (alunos, id) => {
            let totalNotas = 0
            console.log(alunos[id-1].notas.length);
            for (let i = 0; i < alunos[id-1].notas.length; i++) {
                totalNotas += alunos[id-1].notas[i]
            }
            const media = totalNotas / alunos[id-1].notas.length
            return parseFloat(media.toFixed(2))
        }

        if (alunos[id-1].media == 0) {
            alunos[id-1].media = calculaMedia(alunos, id)
        }
        if (alunos[id-1].media >= 7) {
            alunos[id-1].status = "aprovado"
        }else if (alunos[id-1].media >= 5 && alunos[id-1].media < 7){
            alunos[id-1].status = "recuperacao"
        }else {
            alunos[id-1].status = "reprovado"
        }
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
        console.log(alunos);
        break

    } else break
}
