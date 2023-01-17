/* Scroll hacia arriba  */
addEventListener('DOMContentLoaded', ()=> {
    const boton_ir_arriba = document.querySelector('#ir-arriba-boton')
    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 10 ))
        }
    }
    const indicarScroll = () => {
        if (obtener_pixeles_inicio() > 700) {
            boton_ir_arriba.className = 'mostrar'
        } else {
            boton_ir_arriba.className = 'ocultar'
        }
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)

});