import IFormatador from './IFormatador.js';

export default class FormatadorCSV extends IFormatador {
  formatar(dados) {
    if (!Array.isArray(dados)) {
      throw new TypeError('Os dados devem ser um array de cidades.');
    }

    const linhas = dados.map(cidade => {
      const nome = String(cidade.Nome ?? '');

      return /[",\r\n]/.test(nome)
        ? `"${nome.replace(/"/g, '""')}"`
        : nome;
    });

    return ['Cidade', ...linhas].join('\n') + '\n';
  }
}

