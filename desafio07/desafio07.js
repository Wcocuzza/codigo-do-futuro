import { msgMenu, msgNotas, msgVoltar } from "./messages.js"

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
    const opcaoMenu = parseInt(prompt(msgMenu))

    if (opcaoMenu == 1) {
        const nomeAluno = prompt("Digite o nome do aluno")
        const matriculaAluno = prompt("Digite a matricula do aluno")
        const aluno = new Aluno(nomeAluno, matriculaAluno)
        const notas = prompt(msgNotas).split(', ')
        notas.forEach((elemento, index, array) => array[index] = Number(elemento))

        //TODO: Validar as notas
        aluno.notas = notas
        aluno.setMedia()
        aluno.setStatus()
        sysCola.alunos.push(aluno)

        const continuarCadastro = parseInt(prompt(msgVoltar))
        if (continuarCadastro == 1) {
            continue
        }
        break

    } else if (opcaoMenu == 2) {
        console.log(sysCola.alunos);
        break

    } else break
}
