//------------------------------MOVIMIENTO RECTILINIEO UNIFORME -------------------------------------------------
function Distancia(){
    let v1 = parseInt(document.getElementById('VelocidadF1').value);
    let t1 = parseInt(document.getElementById('TiempoF1').value);

  let Distancia = v1 * t1;

    document.getElementById('ResDis1').innerHTML =  Distancia + " mts";
}

    function Velocidad(){
        let d2 = parseInt(document.getElementById('DistanciaF2').value);
        let t2 = parseInt(document.getElementById('TiempoF2').value);
      
        let Velocidad = d2 / t2;

        document.getElementById('ResVel1').innerHTML =  Velocidad + " Km/h";

}

function Tiempo(){
    let d3 = parseInt(document.getElementById('DistanciaF3').value);
    let v3 = parseInt(document.getElementById('VelocidadF3').value);

    let Tiempo = d3 / v3;
  
    document.getElementById('ResTie1').innerHTML = Tiempo + " h";
}
