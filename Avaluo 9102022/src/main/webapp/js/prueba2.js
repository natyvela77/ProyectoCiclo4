
function EstablecerEstrato() {

    document.getElementById('input-ciudad').value = document.getElementById('ciudad').value;
    document.getElementById('input-estrato2').value = document.getElementById('menuestrato').value;

    const select = document.getElementById('tipovivienda');
    const choice = select.value;

    if (choice === '12') {
        document.getElementById('input-tipoinmueble').value = 1;
    } else if (choice === '0') {
        document.getElementById('input-tipoinmueble').value = 0;
    }

}

function EstablecerParque() {

    const select2 = document.getElementById('parque');
    const choice2 = select2.value;

    if (choice2 === '10') {
        document.getElementById('input-parque').value = 1;
    } else if (choice2 === '0') {
        document.getElementById('input-parque').value = 0;
    }
}

function EstablecerCC() {

    const select2 = document.getElementById('centrocomercial');
    const choice2 = select2.value;

    if (choice2 === 'si') {
        document.getElementById('input-centrocomercial').value = 1;
    } else if (choice2 === 'no') {
        document.getElementById('input-centrocomercial').value = 0;
    }
}


