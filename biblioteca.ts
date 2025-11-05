class Livro {
  titulo: string;
  autor: string;
  genero: string;
  anoPublicacao: number;

  constructor(
    titulo: string,
    autor: string,
    genero: string,
    anoPublicacao: number
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.anoPublicacao = anoPublicacao;
  }

  informacoes() {
    console.log(
      `Título: ${this.titulo}, Autor: ${this.autor}, Gênero: ${this.genero}, Ano de Publicação: ${this.anoPublicacao}`
    );
  }
}

let livro = new Livro("Nova Era", "Romulo", "Ficção Científica", 2023);

livro.informacoes();
