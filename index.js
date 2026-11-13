
import GeradorDeRelatorio from './src/GeradorDeRelatorio.js';

import LeitorJSON from './src/Leitor/LeitorJSON.js';
import LeitorCSV from './src/Leitor/LeitorCSV.js';

import FormatadorHTML from './src/Formatador/FormatadorHTML.js';
import FormatadorTXT from './src/Formatador/FormatadorTXT.js';
import FormatadorCSV from './src/Formatador/FormatadorCSV.js';


const [,, arquivo, formato] = process.argv;

const leitores = {
  json: LeitorJSON,
  csv: LeitorCSV
};

const formatadores = {
  html: FormatadorHTML,
  txt: FormatadorTXT,
  csv: FormatadorCSV
};

const extensao = arquivo?.split('.').pop()?.toLowerCase();

const Leitor = leitores[extensao];
const Formatador = formatadores[formato?.toLowerCase()];

if (!Leitor || !Formatador) {
  console.error('Erro: arquivo ou formato inválido.');
  console.error('Uso: node index.js <arquivo> <html|txt|csv>');
  process.exit(1);
}

try {
  const gerador = new GeradorDeRelatorio(
    new Leitor(),
    new Formatador()
  );

  console.log(gerador.gerar(arquivo));

} catch (erro) {
  if (erro.code === 'ENOENT') {
    console.error(`Erro: arquivo não encontrado: ${arquivo}`);
  } else {
    console.error(`Erro ao gerar relatório: ${erro.message}`);
  }

  process.exitCode = 1;
}
