let capital = 0, cuotas = 0, interes = 0;
let coutaMes = 0, pagoMes = 0,interesMes = 0, coutaMasInteres = 0;
let interesTotal = 0, pagoTotal = 0;

let GetInput = () =>{
    capital = parseFloat(prompt("Ingresa el monto a solicitar: "));
    cuotas = parseFloat(prompt("Ingresa las cuotas a pagar: "));
    interes = parseFloat(prompt("Interes es %: "));
}
let Operations = ()=>{
    coutaMes= capital / cuotas;
    pagoMes= coutaMes.toFixed(2);
    interesMes = (capital * interes) / 100;
    coutaMasInteres = parseInt(pagoMes) + interesMes;
    //data of output
    interesTotal = interesMes * cuotas;
    pagoTotal = capital + interesTotal;
}
let SetOutput= ()=>{
    for(let i = 1; i <= cuotas; i++){
        console.log("cuotas " + i + " PagoXMes "+ pagoMes + " InteresXMes "+ interesMes );
    }
    console.log("Pago por mes: "+coutaMasInteres);
    console.log("Total a pagar: "+pagoTotal);
}
let confirmar;
let System = ()=>{
    confirmar=confirm("Estas seguro de pedir un prestamo?");
    if(confirmar == true){
        GetInput();
        Operations();
        SetOutput();
    }
    else{
        alert("Decidiste no hacer el prestamo");
    }
}
System();