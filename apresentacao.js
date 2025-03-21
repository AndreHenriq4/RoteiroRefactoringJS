const { formatarMoeda } = require('./util');

function gerarFaturaStr(fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;

    for (let apre of fatura.apresentacoes) {
        // mais uma linha da fatura
        faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCredito(fatura.apresentacoes)} \n`;
    return faturaStr;
}

module.exports = gerarFaturaStr;