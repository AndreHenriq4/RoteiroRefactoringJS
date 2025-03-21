const { readFileSync } = require('fs');

/*function gerarFaturaHTML(fatura, pecas) {
  let faturaHTML = `<html>\n`;
  faturaHTML += `<p>Fatura ${fatura.cliente}</p>\n`;
  faturaHTML += `<ul>\n`;
  for (let apre of fatura.apresentacoes) {
    faturaHTML += `<li>${getPeca(pecas, apre).nome}: ${formatarMoeda(this.calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos)</li>\n`;
  }
  faturaHTML += `</ul>\n`;
  faturaHTML += `<p>Valor total: ${formatarMoeda(this.calcularTotalFatura(pecas, fatura.apresentacoes))}</p>\n`;
  faturaHTML += `<p>Créditos acumulados: ${this.calcularTotalCredito(pecas, fatura.apresentacoes)}</p>\n`;
  faturaHTML += `</html>`;
  return faturaHTML;
}
*/
var Repositorio = require('./repositorio.js');
var ServicoCalculoFatura = require('./servico.js');
var gerarFaturaStr = require('./apresentacao.js');

const faturas = JSON.parse(readFileSync('./faturas.json'));

const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
//const faturaHTML = gerarFaturaHTML(faturas, pecas);


console.log(faturaStr);
//console.log(faturaHTML);
