import IFormatador from './IFormatador.js';

export default class FormatadorCSV extends IFormatador {
  formatar(dados) {
    if (!Array.isArray(dados)) {
      throw new TypeError('Os dados devem ser um array de cidades.');
    }

    const campos = ['Estado', 'ID', 'Nome'];

    const linhas = dados.map(cidade => {
      return campos.map(campo => {
        const valor = String(cidade[campo] ?? '');

        return /[",\r\n]/.test(valor)
          ? `"${valor.replace(/"/g, '""')}"`
          : valor;
      }).join(',');
    });

    return [campos.join(','), ...linhas].join('\n') + '\n';
  }
}

