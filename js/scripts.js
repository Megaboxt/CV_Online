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

/* Menu hamburguesa */
document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

/* Activar menu hambuerguesa */
document.getElementById("btn-menu").addEventListener("click", mostrar_menu);
document.getElementById("back-menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
back_menu = document.getElementById("back-menu");

function mostrar_menu() {
    
}

function ocultar_menu() {
    back_menu.style.display = "none";
}