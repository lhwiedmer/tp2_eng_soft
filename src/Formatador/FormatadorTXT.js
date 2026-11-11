import IFormatador from './IFormatador.js';

export default class FormatadorTXT extends IFormatador {
  formatar(dados) {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < dados.length; i++) {
      result += '* ' + dados[i]['Nome'] + '\n';
    }

    return result;
  }
}