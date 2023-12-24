let formulario = document.querySelector(".formu");
let btnCal = document.getElementById("btnCalculate");
let btnRes = document.getElementById("btnReset");
// console.log(btnCal.hasAttribute("Id"));
// console.log(btnCal.hasAttribute("class"))
// console.log(btnCal)
// btnCal.setAttribute("class","boton");
// btnCal.removeAttribute("class");

let montoSolicitar, coutas, interes;

let getInput= ()=>{
 
    montoSolicitar = formulario.children[1].getAttribute("value");
    coutas = formulario.children[3].getAttribute("value");
    interes = formulario.children[5].getAttribute("value");
    console.log(formulario.children[1].getAttribute("value"));
    console.log(formulario.children[3].getAttribute("value"));
    console.log(formulario.children[5].getAttribute("value"));
    console.log(btnCal.hasAttribute("id"));
}

let cuotasMes = 0, interesMes = 0, pagoMes = 0, pagoTotal =0 ;
let operation= () =>{
    cuotasMes = parseFloat(montoSolicitar) / parseInt(coutas);
    interesMes = (parseFloat(montoSolicitar) * parseFloat(interes)) / 100;
    pagoMes = parseInt(cuotasMes) + parseInt(interesMes);
    pagoTotal = (parseInt(interesMes) * parseInt(coutas)) + parseFloat(montoSolicitar);
}
// operation();
let inputMes, inputTotal;
let setOutput = (m,p) =>{
    inputMes = formulario.children[7].setAttribute("value", m);
    inputTotal = formulario.children[9].setAttribute("value", p);
}
function clean(){
    montoSolicitar.setAttribute("value", "");
    coutas.removetAttribute("value","");
    interes.setAttribute("value","");
    inputMes.setAttribute("value","");
    inputTotal.setAttribute("value","");
}

btnCal.addEventListener("click",() =>{
    getInput();
});
btnRes.addEventListener("click",clean)