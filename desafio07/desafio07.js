const sysCola = {}
sysCola.alunos = []

class Aluno {
    constructor(nome, matricula) {
        this.id = 0
        this.nome = nome
        this.matricula = matricula
        this.notas = []
    }

    calculaMedia() {
        let somaNotas = 0
        this.notas.forEach(elemento => somaNotas += elemento)
        return somaNotas / this.notas.length
    }

    setMedia() {
        this.media = this.calculaMedia()
    }

    defineStatus() {
        try {
            if (this.media >= 7 && this.media <= 10) return "aprovado"
            else if (this.media >= 5 && this.media < 7) return "recuperacao"
            else return "reprovado"
        } catch {
            alert("Não foi possivel definir o 'status' - Verifique as notas.")
        }
    }

    setStatus() {
        this.status = this.defineStatus()
    }
}

while (true) {
    opcaoMenu = parseInt(prompt(`
        ########## Syscola ##########
        Selecione a opção desejada:
        [1] - Cadastrar aluno
        [2] - Listar alunos cadastrados
        [3] - Sair
    `))

    if (opcaoMenu == 1) {
        const nomeAluno = prompt("Digite o nome do aluno")
        const matriculaAluno = prompt("Digite a matricula do aluno")
        const aluno = new Aluno(nomeAluno, matriculaAluno)
        while (true) {
            const nota = parseFloat(prompt(`Digite a(s) nota(s) do aluno ${nomeAluno}`))
            if (nota < 0 && nota > 10) {
                alert("Você deve inserir notas entre 0 e 10")
                continue
            }    
            aluno.notas.push(nota)
            const continuarNotas = parseInt(prompt(`
                Deseja inserir mais notas?
                [1] - Sim
                [2] - Não
            `))
            if (continuarNotas == 1) continue
            else if (continuarNotas != 1) {
                aluno.setMedia()
                aluno.setStatus()
                break
            }
        }
        
        sysCola.alunos.push(aluno)

        const continuarCadastro = parseInt(prompt(`
            Deseja voltar ao menu inicial?
            [1] - Sim
            [2] - Não
        `))
        if (continuarCadastro == 1) {
            continue
        }
        
        break

    } else if (opcaoMenu == 2) {
        console.log(sysCola.alunos);
        break

    } else break
}
