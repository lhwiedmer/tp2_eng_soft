export default class IFormatador {
  constructor() {
    if (new.target === IFormatador) {
      throw new Error(
          'IFormatador é uma classe abstrata e não pode ser instanciada diretamente.');
    }
  }

  formatar(dados) {
    throw new Error('Método formatar() deve ser implementado');
  }
}