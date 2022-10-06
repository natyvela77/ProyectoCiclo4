
function PorcentajeAnos() {
    let x = document.getElementById('antiguedad').value;
    document.getElementById('antiguedadnegativo').value = x*(-1);
}

function PorcentajeHabitaciones() {

    var select = document.getElementById('habitaciones').value;

    if(select===1) {
        document.getElementById('porcentajehabitacion').value=-1;
        } else if(select<4) {
        document.getElementById('porcentajehabitacion').value=0;
        } else if(select>=4) {
        document.getElementById('porcentajehabitacion').value=4;
    }
}

function PorcentajeBanos() {

    var select = document.getElementById('banos').value;

    if(select<3) {
        document.getElementById('porcentajebanos').value=0;
        } else if(select>=3) {
        document.getElementById('porcentajebanos').value=2;
        }
    }

function CalcularCiudadyEstrato() {
    const select = document.getElementById('menuestrato');
    const select2 = document.getElementById('ciudad');

    const choice = select2.value;
    const choice2 = select.value;

    if(choice === 'bogota' && choice2 === '1') {
        document.getElementById('ciudadyestrato').value=2918180;
        } else if(choice === 'bogota' && choice2 === '2') {
        document.getElementById('ciudadyestrato').value=2918180;
        } else if(choice === 'bogota' && choice2==='3') {
        document.getElementById('ciudadyestrato').value=4166666;
        } else if(choice === 'bogota' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=4166666;
        } else if(choice === 'bogota' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=6643357;
        } else if(choice === 'bogota' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=6643357;
        } else if(choice === 'medellin' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=3846150;
        } else if(choice === 'medellin' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=3846150;
        } else if(choice === 'medellin' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=3905405;
        } else if(choice === 'medellin' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=3905405;
        } else if(choice === 'medellin' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=4167000;
        } else if(choice === 'medellin' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=4167000;
        } else if(choice === 'cali' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=2905000;
        } else if(choice === 'cali' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=2905000;
        } else if(choice === 'cali' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=2983923;
        } else if(choice === 'cali' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=2983923;
        } else if(choice === 'cali' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=4000000;
        } else if(choice === 'cali' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=4000000;
        } else if(choice === 'barranquilla' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=3114754;
        } else if(choice === 'barranquilla' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=3114754;
        } else if(choice === 'barranquilla' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=3139534;
        } else if(choice === 'barranquilla' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=3139534;
        } else if(choice === 'barranquilla' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=3728813;
        } else if(choice === 'barranquilla' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=3728813;
        } else if(choice === 'cartagena' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=1622951;
        } else if(choice === 'cartagena' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=1622951;
        } else if(choice === 'cartagena' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=2485985;
        } else if(choice === 'cartagena' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=2485985;
        } else if(choice === 'cartagena' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=3650794;
        } else if(choice === 'cartagena' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=3650794;
        } else if(choice === 'armenia' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=1636364;
        } else if(choice === 'armenia' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=1636364;
        } else if(choice === 'armenia' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=2857142;
        } else if(choice === 'armenia' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=2857142;
        } else if(choice === 'armenia' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=3454344;
        } else if(choice === 'armenia' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=3454344;
        } else if(choice === 'manizales' && choice2=== '1') {
        document.getElementById('ciudadyestrato').value=2500000;
        } else if(choice === 'manizales' && choice2=== '2') {
        document.getElementById('ciudadyestrato').value=2500000;
        } else if(choice === 'manizales' && choice2=== '3') {
        document.getElementById('ciudadyestrato').value=2168000;
        } else if(choice === 'manizales' && choice2=== '4') {
        document.getElementById('ciudadyestrato').value=2168000;
        } else if(choice === 'manizales' && choice2=== '5') {
        document.getElementById('ciudadyestrato').value=3123922;
        } else if(choice === 'manizales' && choice2=== '6') {
        document.getElementById('ciudadyestrato').value=3123922;
        } else {
}
}

function CalcularCiudadyCC() {
    const select = document.getElementById('centrocomercial');
    const select2 = document.getElementById('ciudad');

    const choice = select2.value;
    const choice2 = select.value;

    if(choice === 'bogota' && choice2 === 'si') {
        document.getElementById('ciudadycc').value=23;
        } else if(choice === 'medellin' && choice2 === 'si') {
        document.getElementById('ciudadycc').value=16;
        } else if(choice === 'cali' && choice2==='si') {
        document.getElementById('ciudadycc').value=15;
        } else if(choice === 'barranquilla' && choice2=== 'si') {
        document.getElementById('ciudadycc').value=15;
        } else if(choice === 'cartagena' && choice2=== 'si') {
        document.getElementById('ciudadycc').value=14;
        } else if(choice === 'armenia' && choice2=== 'si') {
        document.getElementById('ciudadycc').value=14;
        } else if(choice === 'manizales' && choice2=== 'si') {
        document.getElementById('ciudadycc').value=10;    
        } else {
        document.getElementById('ciudadycc').value=0;
}
}

function CalcularValorTotal() {
    var a = parseInt(document.getElementById('parque').value);
    var s = parseInt(document.getElementById('ciudadycc').value);
    var y = parseInt(document.getElementById('tipovivienda').value);
    var z = parseInt(document.getElementById('antiguedadnegativo').value);
    var n = parseInt(document.getElementById('porcentajehabitacion').value);
    var m = parseInt(document.getElementById('porcentajebanos').value);
    document.getElementById('resultadoporcentajes').value = a+s+y+z+n+m;
    var x = parseInt(document.getElementById('ciudadyestrato').value);
    var z = parseInt(document.getElementById('resultadoporcentajes').value);
    document.getElementById('valormetro').value = ((x*z)/100)+x;
    var c = parseInt(document.getElementById('ingresometros').value);
    var v = parseInt(document.getElementById('valormetro').value);
    document.getElementById('valorventa').value = c*v;
    var b = parseInt(document.getElementById('valorventa').value);
    document.getElementById('valorarriendo').value = (b*58)/10000;
}
