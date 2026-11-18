import GeradorDeRelatorio from './src/GeradorDeRelatorio.js';

import LeitorJSON from './src/Leitor/LeitorJSON.js';
import LeitorCSV from './src/Leitor/LeitorCSV.js';

import FormatadorHTML from './src/Formatador/FormatadorHTML.js';
import FormatadorTXT from './src/Formatador/FormatadorTXT.js';
import FormatadorCSV from './src/Formatador/FormatadorCSV.js';


const argumentos = process.argv.slice(2);

const mensagemDeUso = [
  'Uso: node index.js <formato> <arquivo>',
  '  formato: html, txt ou csv',
  '  arquivo: caminho para um arquivo .json ou .csv',
  '',
  'Exemplo: node index.js html dados.json'
].join('\n');

const pedidoDeAjuda = ['-h', '-help', 'help', '--help'];

if (argumentos.length === 1 && pedidoDeAjuda.includes(argumentos[0].toLowerCase())) {
  console.log(mensagemDeUso);
  process.exit(0);
}

const [formato, arquivo] = argumentos;

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

if (argumentos.length !== 2 || !Leitor || !Formatador) {
  console.error('Erro: comando inválido.');
  console.error('');
  console.error(mensagemDeUso);
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
