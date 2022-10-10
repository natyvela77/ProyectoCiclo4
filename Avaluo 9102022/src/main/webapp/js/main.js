$(document).ready(function () {

    $("#form-register").submit(function (event) {

        event.preventDefault();
        registrarBienes();
    });

});

function registrarBienes() {

    let idpropiedad = $("input-idpropiedad").val;
    let username = $("#input-username").val();
    let area = $("input-area").val;
    let ciudad = $("#input-ciudad").val();
    let estrato = $("input-estrato").val();
    let antiguedad = $("input-antiguedad").val();
    let tipovivienda = $("input-tipovivienda").val();
    let habitaciones = $("input-habitaciones").val();
    let banos = $("input-banos").val();
    let centrocomercial = $("input-cc").val();
    let parque = $("input-parque").val();
    let valorarriendo = $("input-valorarriendo").val();
    let valorventa = $("input-valorventa").val();
    let valormetro = $("input-valormetro").val();

        $.ajax({
            type: "GET",
            dataType: "html",
            url: "./ServletBienesRegister",
            data: $.param({
                idpropiedad: idpropiedad,
                username: username,
                area: area,
                ciudad: ciudad,
                estrato: estrato,
                antiguedad: antiguedad,
                tipovivienda: tipovivienda,
                habitaciones: habitaciones,
                banos: banos,
                centrocomercial: centrocomercial,
                parque: parque,
                valorarriendo: valorarriendo,
                valorventa: valorventa,
                valormetro: valormetro
            }),
            success: function (bienes) {
                let parsedResult = JSON.parse(bienes);

                if (parsedResult !== false) {
                    $("#register-error").addClass("d-none");
                    let idpropiedad = parsedResult['idpropiedad'];
                    document.location.href = "home.html?idpropiedad=" + idpropiedad;
                } else {
                    $("#register-error").removeClass("d-none");
                    $("#register-error").html("Error en el registro del bien");
                }
            }
        });
}
