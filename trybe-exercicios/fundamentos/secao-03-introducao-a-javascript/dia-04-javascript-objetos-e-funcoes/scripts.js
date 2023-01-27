// Ponto 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log(`Bem vinda, ${info.personagem}`);

info["recorrente"] = "Sim";

// Ponto2
for (const key in info) {
  console.log(key);
}

// Ponto 3
for (const key in info) {
  console.log(info[key]);
}

// Ponto 4
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const key in info) {
  if (key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + info2[key]);
  }
}

// Ponto 5
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log(`O livro favorito de Julia Pessoa se chama ${leitor.livrosFavoritos[0].titulo}`);

  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

  console.log(leitor);

leitor.livrosFavoritos[1]['key'] = [ {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
]

  console.log(leitor.livrosFavoritos[1]);

//Ponto 6

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// Ponto 7  Thread funcoes slack