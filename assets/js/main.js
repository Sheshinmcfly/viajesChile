
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