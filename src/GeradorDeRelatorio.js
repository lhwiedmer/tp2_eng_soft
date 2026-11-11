import IFormatador from './Formatador/IFormatador.js';
import ILeitor from './Leitor/ILeitor.js';

export default class GeradorDeRelatorio {
    constructor(leitor, formatador) {
        this.leitor = leitor;
        this.formatador = formatador;
    }

    gerar(caminho) {
        const dados = this.leitor.ler(caminho);
        return this.formatador.formatar(dados);
    }
}