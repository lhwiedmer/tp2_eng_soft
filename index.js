
import GeradorDeRelatorio from './src/GeradorDeRelatorio.js';
import LeitorJSON from './src/Leitor/LeitorJSON.js';
import LeitorCSV from './src/Leitor/LeitorCSV.js';
import FormatadorHTML from './src/Formatador/FormatadorHTML.js';
import FormatadorTXT from './src/Formatador/FormatadorTXT.js';
import FormatadorCSV from './src/Formatador/FormatadorCSV.js';

const [,, filename, format] = process.argv;

let leitor;
let formatador;

if (filename?.endsWith('.json')) {
  leitor = new LeitorJSON();
} else if (filename?.endsWith('.csv')) {
  leitor = new LeitorCSV();
}

if (format === 'html') {
  formatador = new FormatadorHTML();
} else if (format === 'txt') {
  formatador = new FormatadorTXT();
} else if (format === 'csv') {
  formatador = new FormatadorCSV();
}

if (!leitor || !formatador) {
  console.error('Arquivo ou formato inválido.');
  process.exit(1);
}

const gerador = new GeradorDeRelatorio(leitor, formatador);
console.log(gerador.gerar(filename));
