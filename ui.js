//validar lista de inputs
const inputs = document.querySelectorAll(".formu .user");
const readingnputs = document.querySelectorAll(".formu .back");
const expresion = /^\d+$/;
const estadoInput = {
    capital : false,
    cuotas: false,
    interes: false
}
//convertir inputs de tipo lectura
readingnputs.forEach((r)=>{
    r.setAttribute("readonly","true")
})
const validarCampo = (input,campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove("borderMal");
        document.getElementById(campo).classList.add("borderBien");
        document.querySelector(`#grupo${campo} p`).classList.add("textOff");
        estadoInput[campo] = true;
    }
    else{
        document.getElementById(campo).classList.remove("borderBien");
        document.getElementById(campo).classList.add("borderMal");
        document.querySelector(`#grupo${campo} p`).classList.remove("textOff");
        estadoInput[campo] = false;
    }
}
const validarFormulario = (e)=>{
    switch(e.target.name){
        case "capital":
            validarCampo(e.target,"capital");
        break;
        case "cuotas":
            validarCampo(e.target,"cuotas");      
        break;
        case "interes":
            validarCampo(e.target,"interes");      
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
})
//operations
const formulario = document.querySelector(".formu");
const btnCal = document.getElementById("btnCalculate");
const btnRes = document.getElementById("btnReset");

let capital,cuotas,interes;
const getInput=()=>{
    capital = parseInt(document.getElementById("capital").value);
    cuotas = parseInt(document.getElementById("cuotas").value);
    interes = parseInt(document.getElementById("interes").value);
}
let cuotasMes = 0, interesMes = 0, pagoMes = 0, pagoTotal =0 ;
let operation= () =>{
    cuotasMes = capital / cuotas;
    interesMes = (capital * interes)/100;
    pagoMes = cuotasMes+ interesMes;
    pagoTotal = (interesMes * cuotas) + capital;
    console.log("La couta al mes es: "+cuotasMes);
    console.log("El interes al mes es: "+interesMes);
    console.log("El interes + cuotas a pagar es: "+pagoMes);
    console.log("El pago total es: "+pagoTotal);
}
// setear data
let inputMes, inputTotal;
let setOutput = () =>{
    inputMes = document.getElementById("pagoMes");
    inputTotal = document.getElementById("pagoTotal");
    inputMes.value = pagoMes.toFixed(2);
    inputTotal.value = pagoTotal;
}
let diagramaFlujo = ()=>{
    getInput();
    operation();
    setOutput();
}
btnCal.addEventListener("click",()=>{
    if(estadoInput.capital && estadoInput.cuotas && estadoInput.interes){
        document.getElementById("forBien").classList.remove("textOff");
        setTimeout(()=>{
            document.getElementById("forBien").classList.add("textOff");
        },5000)
        diagramaFlujo();
    }
    else{
        document.getElementById("forMal").classList.remove("textOff"); 
        setTimeout(() => {
            document.getElementById("forMal").classList.add("textOff");
        }, 5000);
    }
});
btnRes.addEventListener("click", (e)=>{
    inputs.forEach((i)=>{
        i.classList.remove("borderBien");
        i.classList.remove("borderMal");
        let textError=document.querySelectorAll(".formu p");
        textError.forEach((e)=>{
            e.classList.add("textOff")
        })
    })
    estadoInput.capital = false;
    estadoInput.cuotas = false;
    estadoInput.cuotas = false;
    
    e.preventDefault();
    formulario.reset();
});
