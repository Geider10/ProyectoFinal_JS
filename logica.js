let capital = parseFloat(prompt("Enter capital"));
let coutas = parseFloat(prompt("Enter coutas"));
let interes = parseFloat(prompt("Interes:"));

let coutaMes= capital / coutas;
let pagoMes= coutaMes.toFixed(2);
let interesMes = (capital * interes) / 100;
let coutaMasInteres = parseInt(pagoMes) + interesMes;

let interesTotal = interesMes * coutas;
let resumenTotal = capital + interesTotal;

for(let i = 0; i <= coutas; i++){
    console.log("coutas " + i + " PagoXMes "+ pagoMes + " InteresXMes "+ interesMes + " CoutaFinal "  + coutaMasInteres);
    // console.log("<br>");
}
console.log("Factura Total " + resumenTotal);