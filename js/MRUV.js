function Aceleracion(){
    let Vf1 = parseInt(document.getElementById('VelocidadFinalF1').value);
    let Vi1 = parseInt(document.getElementById('VelocidadInicialF1').value);
    let T1 = parseInt(document.getElementById('tiempoF1').value);

  let Aceleracion = (Vf1 - Vi1)/T1;

    document.getElementById('ResAce1').innerHTML =  Aceleracion + " m/s²";
}

function Distancia2(){
    let Vi2 = parseInt(document.getElementById('VelocidadInicialF2').value);
    let a2 = parseInt(document.getElementById('AceleracionF2').value);
    let T2 = parseInt(document.getElementById('tiempoF2').value);

  let Distancia2 = (Vi2 * T2) + (((a2*T2)^2)/2);


    document.getElementById('ResDisMRUV').innerHTML =  Distancia2 + " mts";
}

function VelocidadFinal(){
    let Vi3 = parseInt(document.getElementById('VelocidadInicialF3').value);
    let a3 = parseInt(document.getElementById('AceleracionF3').value);
    let T3 = parseInt(document.getElementById('tiempoF3').value);

  let VelocidadFinal = Vi3 + (a3*T3);

    document.getElementById('ResVfMRUV').innerHTML =  VelocidadFinal + " m/s";
}