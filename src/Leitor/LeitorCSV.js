import ILeitor from './ILeitor.js';

export default class LeitorCSV extends ILeitor {
    parse(conteudo) {
        const cidades = [];
        const linhas = conteudo.split('\n');
        
        for (let i = 1; i < linhas.length; i++) {
            const linha = linhas[i].trim();
            if (!linha) continue;

            const colunas = linha.split(',');
            
            const cidade = {
                "Estado": colunas[0],
                "ID": colunas[1],
                "Nome": colunas[2]
            };
            
            cidades.push(cidade);
        }
        
        return cidades;
    }
}