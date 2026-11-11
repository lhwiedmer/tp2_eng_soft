import fs from 'fs';

export default class ILeitor {
  constructor() {
    if (new.target === ILeitor) {
      throw new Error(
          'ILeitor é uma classe abstrata e não pode ser instanciada diretamente.');
    }
  }

  ler(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    return this.parse(conteudo);
  }

  parse(conteudo) {
    throw new Error('O método parse() deve ser implementado pelas subclasses.');
  }
}