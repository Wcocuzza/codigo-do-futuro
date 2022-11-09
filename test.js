const alunos = []

while (true) {
    const nomeAluno = "Wallace"
    const matriculaAluno = "1234"
    const notaAluno = []
    // TODO: Resolver o pop do array
    let nota = 2
    if (nota >= 0 && nota <= 10) {
        notaAluno.pop(nota)
        console.log(nota);
    } else {
        console.log("Você deve inserir notas entre 0 e 10")
    }
    
    let id = alunos.length + 1
    console.log(notaAluno);
    alunos.push({
        id,
        nome: nomeAluno,
        matricula: matriculaAluno,
        notas: [],
    })
    alunos[id-1].notas.push(...notaAluno)
    console.log(alunos[id-1]);
    break
}
