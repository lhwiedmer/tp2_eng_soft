import IFormatador from './IFormatador.js';

export default class FormatadorHTML extends IFormatador {
  formatar(dados) {
    let result = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    for (let i = 0; i < dados.length; i++) {
      result += '     <li>' + dados[i]['Nome'] + '</li>\n';
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}