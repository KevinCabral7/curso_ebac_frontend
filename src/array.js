class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
      this.nome = nomeDoAluno;
      this.nota = notaDoAluno;
    }
  }
  
  const alunos = [
    new Aluno("Alice", 6),
    new Aluno("Bob", 4),
    new Aluno("Carol", 7),
    new Aluno("David", 9),
    new Aluno("Eve", 5),
  ];
  
  console.log(alunos);
  
  function retornaAluno(alunos) {
    return alunos.filter(aluno => aluno.nota > 6);
  }
  
  const alunosAcimaDeSeis = retornaAluno(alunos);
  console.log(alunosAcimaDeSeis);
  