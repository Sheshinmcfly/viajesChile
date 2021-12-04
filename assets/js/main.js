
/* Animación smooth scroll */
$(document).ready(function () {

    $('a').click(function () {

        var seccion = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(seccion).offset().top
            },
            800
        )
    })
})

/* Mostrar u ocultar formulario */
$(document).ready(function () {

    $("#Contacto button").click(function () {
        $(".tf").show();
    });

    $(".tf .btn").click(function () {
        $(".tf").hide();
    });
})
