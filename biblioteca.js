var Livro = /** @class */ (function () {
    function Livro(titulo, autor, genero, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.informacoes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", G\u00EAnero: ").concat(this.genero, ", Ano de Publica\u00E7\u00E3o: ").concat(this.anoPublicacao));
    };
    return Livro;
}());
var livro = new Livro("Nova Era", "Romulo", "Ficção Científica", 2023);
livro.informacoes();
