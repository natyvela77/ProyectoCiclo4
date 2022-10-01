function VerificarCiudad() {
    var ciudadIngresada = document.getElementById('ciudad').value; //STRING CIUDADNAME     
    document.getElementById('ciudadmensaje').value = document.getElementById('ciudad').value;
    }


function VerificarEstrato() {
    var estratoIngresado = document.getElementById('menuestrato').value;
    switch (estratoIngresado) {
        case "1":
            document.getElementById('estratomensaje').innerHTML="Elegiste 1"
            break;
        case "2":
            document.getElementById('estratomensaje').innerHTML="Elegiste 2"
            break;
        case "3":
            document.getElementById('estratomensaje').innerHTML="Elegiste 3"
            break;
        case "4":
            document.getElementById('estratomensaje').innerHTML="Elegiste 4"
            break;
        case "5":
            document.getElementById('estratomensaje').innerHTML="Elegiste 5"
            break;
        case "6":
            document.getElementById('estratomensaje').innerHTML="Elegiste 6"
            break;
    }
}

function PorcentajeAnos() {
    if (document.getElementById('antiguedad').value==1) {
        document.getElementById('porcentajeantiguedad').value=-1
    } else {
        if (document.getElementById('antiguedad').value<4) {
            document.getElementById('porcentajeantiguedad').value=0
        } else {
        if (document.getElementById('antiguedad').value>=4) {
            document.getElementById('porcentajeantiguedad').value=4
        }
    }
}
}

function PorcentajeTipovivienda() {
    var value = document.getElementById('tipovivienda').value;
    document.getElementById('porcentajetipovivienda').value = document.getElementById('tipovivienda').value;
    switch (value) {
        case "12":
            break;
        case "0":
            break;
    }
}

function PorcentajeHabitaciones() {
    if (document.getElementById('habitaciones').value==1) {
        document.getElementById('porcentajehabitacion').value=-1
    } else {
        if (document.getElementById('habitaciones').value<4) {
            document.getElementById('porcentajehabitacion').value=0
        } else {
        if (document.getElementById('habitaciones').value>=4) {
            document.getElementById('porcentajehabitacion').value=4
        }
    }
}
}

function PorcentajeBanos() {
    if (document.getElementById('banos').value<3) {
        document.getElementById('porcentajebanos').value=0
    } else {
        if (document.getElementById('banos').value>=3) {
            document.getElementById('porcentajebanos').value=2
        }
}
}

function CalcularMetrocuadrado() {
    if (document.getElementById('ingresometros').value=="123456") {
    document.getElementById('mensaje').innerHTML="Clave correcto"
    }
}

function SumarPorcentajes() {
    var x = parseInt(document.getElementById('ciudadmensaje').value);
    var a = parseInt(document.getElementById('parque').value);
    var s = parseInt(document.getElementById('centrocomercial').value);
    var y = parseInt(document.getElementById('tipovivienda').value);
    var z = parseInt(document.getElementById('antiguedad').value);
    var c = parseInt(document.getElementById('porcentajehabitacion').value);
    var b = parseInt(document.getElementById('porcentajebanos').value);
    document.getElementById('resultadoporcentajes').value = a+s+y+z+c+b;
}

function CalcularValorTotal() {
    var ciudadIngresada = document.getElementById('ciudad').value;
    var estratoIngresado = document.getElementById('menuestrato').value;
    // consulta en base de datos SELECT CIUDAD = ciudadIngresada AND estra
        
    var valorPorCiudadEstrato= 0;
    if (ciudadIngresada == "Bogota") {
        if (Estrato == 1) {
            valorPorCiudadEstrato= 290000000;
        }
    }
    
            
            
        var x = parseInt(document.getElementById('ciudadmensaje').value);
        var z = parseInt(document.getElementById('resultadoporcentajes').value);
        document.getElementById('valormetro').value = ((x*z)/100)+x;
        var c = parseInt(document.getElementById('ingresometros').value);
        var v = parseInt(document.getElementById('valormetro').value);
        document.getElementById('valorventa').value = c*v;
        var b = parseInt(document.getElementById('valorventa').value);
        document.getElementById('valorarriendo').value = (b*58)/10000;
        
}

function CalcularVenta() {
    var c = parseInt(document.getElementById('ingresometros').value);
    var v = parseInt(document.getElementById('valormetro').value);
    document.getElementById('valorventa').value = c*v;
    var b = parseInt(document.getElementById('valorventa').value);
    document.getElementById('valorarriendo').value = (b*58)/10000;

}

function CalcularArriendo() {
    var x = parseInt(document.getElementById('valorventa').value);
    document.getElementById('valorarriendo').value = (x*58)/10000;

}

function CalcularPrueba() {
    var x = parseInt(document.getElementById('prueba1').value);
    var z = parseInt(document.getElementById('prueba2').value);
    document.getElementById('resultadoprueba1').value = x+z
    document.getElementById('resultadoprueba2').value = x*z

}
