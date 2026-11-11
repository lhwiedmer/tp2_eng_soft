import ILeitor from './ILeitor.js';

export default class LeitorJSON extends ILeitor {
    parse(conteudo) {
        return JSON.parse(conteudo);
    }
}