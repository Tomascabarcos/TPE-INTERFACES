"use strict"

/*********** Header ***********/

document.addEventListener('scroll', () => {
    //cuando el scrollY es mayor al tamaño del header sticky, le agrego las clases para el gradiente y el logo
    if(window.scrollY > 103){ 
        document.querySelector('.header').classList.add('sticky');
        document.querySelector('.logo-header').classList.add('mostrar-logo');
        document.querySelector('.section1-logo').classList.add('logo-sticky');

    //cuando el scrollY es menor al tamaño del header sticky, le saco las clases para el gradiente y el logo
    }else{
        document.querySelector('.header').classList.remove('sticky');
        document.querySelector('.logo-header').classList.remove('mostrar-logo');
        document.querySelector('.section1-logo').classList.remove('logo-sticky');
    }
})

/*********** Section 1 ***********/

const gwen = document.querySelector('.section1-gwen');
const peter = document.querySelector('.section1-peter');
const miles = document.querySelector('.section1-miles');
const telaChica = document.querySelector('.telaraña-chica');
const telaGrande = document.querySelector('.telaraña-grande');
const edifIzq= document.querySelector('.edificio-izq');
const edifCen = document.querySelector('.edificio-cen');
const edifDer = document.querySelector('.edificio-der');
const logo = document.querySelector('.section1-logo');

let section1 = [gwen, peter, miles, telaChica, telaGrande, edifIzq, edifCen, edifDer, logo];

//Entrada de los elementos a la pantalla
let mostrar = () => {
    //la clase ocultar tiene opacity 0 y una posicion negativa que se remueve para que 
    //se acomoden en su posicion original
    section1.forEach((elem) => {
        elem.classList.remove('ocultar');
    });
};

//le agrego timeout para que aparezcan cuando termine la barra de carga
setTimeout(mostrar, 5500);

//Parallax
document.addEventListener("scroll", () => {
    //para achicar el logo en funcion al scroll calculo 1 - scrollY * un valor 
    //para determinar la cantidad de px que se achicara el elemento
    logo.style.transform = `scale(${1 - window.scrollY * 0.003})`;

    //para mover los elementos en funcion al scroll calculo scrollY * un valor 
    //para determinar la cantidad de px que se movera el elemento
    //cuanto mayor sea el valor, se va a mover "mas rapido"
    edifIzq.style.transform = `translate(${-window.scrollY * 0.1}px, ${window.scrollY * 0.1}px)`;
    edifDer.style.transform = `translate(${window.scrollY * 0.1}px, ${window.scrollY * 0.1}px)`;
    edifCen.style.transform = `scale(${1 + window.scrollY * 0.0005})`;
   
    gwen.style.transform = `translate(${-window.scrollY * 0.5}px ,${-window.scrollY * 0.3}px) scale(${1 + window.scrollY * 0.001})`;
    miles.style.transform = `translate(${window.scrollY * 0.2}px ,${-window.scrollY * 0.2}px) scale(${1 + window.scrollY * 0.001})`;
    peter.style.transform = `translate(${-window.scrollY * 0.2}px ,${-window.scrollY * 0.2}px) scale(${1 + window.scrollY * 0.001})`;

    telaChica.style.transform = `translate(${window.scrollY * 0.58}px, ${-window.scrollY * 0.14}px) scale(${1 + window.scrollY * 0.002})`;
    telaGrande.style.transform = `translate(${-window.scrollY * 0.55}px, ${-window.scrollY * 0.11}px) scale(${1 + window.scrollY * 0.001})`;
});

/*********** Section 2 ***********/

window.addEventListener("scroll" , () =>  {
    let animacion = document.querySelector(".section2-duende");
    
    let posDuende = animacion.getBoundingClientRect().top;
    //cuando la posicion top del duende es > 10, se activa la animacion para moverse mas lento que el scroll
    if(parseInt(posDuende) >= 10 && parseInt(posDuende) <= 200){
        animacion.style.animation = "moverDuende 5s ease-out";
    }else{
    //cuando es < -300 se devuelve al duende a su posicion original    
        if ( parseInt(posDuende) < -300) {
            animacion.style.animation = "revertirDuende 5s ease-out";
        }
    }
});

/*********** Section 3 ***********/

window.addEventListener("scroll", () => {
  
    let card1 = document.querySelector(".section3-descripcion1");
    let card2 = document.querySelector(".section3-descripcion2");
    let card3 = document.querySelector(".section3-descripcion3");
    
    //obtengo la posicion top de una card para usar de referencia
    let posCard1 = card1.getBoundingClientRect().top;

    //si la posicion se encuentra dentro del rango cuando scrolleo se activa la animacion
    if (posCard1 >= 0 && posCard1 <= 760) {
            card1.style.animation = "fadeIn 2s ease"; 
            card2.style.animation = "fadeIn 4s ease";
            card3.style.animation = "fadeIn 5s ease";
            card1.classList.remove("ocultar");
            card2.classList.remove("ocultar");
            card3.classList.remove("ocultar");

    //reseteo la animacion cuando sale de la seccion        
    }else if(posCard1 >=770 || posCard1 < -330) {
        card1.classList.add("ocultar");
        card2.classList.add("ocultar");
        card3.classList.add("ocultar");
    
        card1.style.animation = ""; 
        card2.style.animation = ""; 
        card3.style.animation = ""; 
    }
});


/*********** Section 4 ***********/

let card1Section4 = document.querySelector('.section4-card1');
let card2Section4 = document.querySelector('.section4-card2');
let card3Section4 = document.querySelector('.section4-card3');

//Scroll a destiempo
document.addEventListener("scroll", () => {
    let sectionTop = document.querySelector('.section-4').getBoundingClientRect().top;

    //primero le saco la animacion de out porque sino se pisa la transformacion y no andan
    card1Section4.classList.remove('section4-cardOut');
    card2Section4.classList.remove('section4-cardOut');
    card3Section4.classList.remove('section4-cardOut');

    //le doy la velocidad de movimiento para que de el efecto que va a destiempo
    //lo calculo segun el top de la seccion
    card1Section4.style.transform = `translateY(${-sectionTop * 0.02}px)`;
    card2Section4.style.transform = `translateY(${-sectionTop * 0.04}px)`;
    card3Section4.style.transform = `translateY(${-sectionTop * 0.03}px)`;
   
});

//cambio de perspectiva en 3D

//cuando entra a la card le saco la clase con la animacion de salida y le agrego la de entrada
card1Section4.addEventListener('mouseover', () => {
    card1Section4.classList.remove('section4-cardOut');
    card1Section4.classList.add('section4-cardIn');
});

card2Section4.addEventListener('mouseover', () => {
    card2Section4.classList.remove('section4-cardOut');
    card2Section4.classList.add('section4-cardIn');
});

card3Section4.addEventListener('mouseover', () => {
    card3Section4.classList.remove('section4-cardOut');
    card3Section4.classList.add('section4-cardIn');
});

//cuando sale de la card le saco la clase con la animacion de entrada y le agrego la de salida
card1Section4.addEventListener('mouseout', () => {
    card1Section4.classList.remove('section4-cardIn');
    card1Section4.classList.add('section4-cardOut');
});

card2Section4.addEventListener('mouseout', () => {
    card2Section4.classList.remove('section4-cardIn');
    card2Section4.classList.add('section4-cardOut');
});

card3Section4.addEventListener('mouseout', () => {
    card3Section4.classList.remove('section4-cardIn');
    card3Section4.classList.add('section4-cardOut');
});


/*********** Section 6 ***********/

window.addEventListener("scroll" , () => {
   
    //dependiendo lo que se haya scrolleado, muestro una descripcion y oculto la anterior
    if(window.scrollY < 4100){
        document.querySelector(".section6-descripcion2").classList.remove("mostrarDescripcion");

        document.querySelector(".section6-descripcion1").classList.add("mostrarDescripcion");
    }
    else if(window.scrollY > 4100 && window.scrollY < 4500){
        document.querySelector(".section6-descripcion1").classList.remove("mostrarDescripcion");
        document.querySelector(".section6-descripcion3").classList.remove("mostrarDescripcion");


        document.querySelector(".section6-descripcion2").classList.add("mostrarDescripcion");
    }
    else if(window.scrollY > 4500 && window.scrollY < 4950){
        document.querySelector(".section6-descripcion2").classList.remove("mostrarDescripcion");
        document.querySelector(".section6-descripcion4").classList.remove("mostrarDescripcion");

        document.querySelector(".section6-descripcion3").classList.add("mostrarDescripcion");
    }
    else if(window.scrollY > 4950){
        document.querySelector(".section6-descripcion3").classList.remove("mostrarDescripcion");
        
        document.querySelector(".section6-descripcion4").classList.add("mostrarDescripcion");
    }

    // cambio la imagen para matchear con la descripcion
    if (window.scrollY < 4100) {
        document.querySelector("#section-cards").classList.add("section6-card1");
        document.querySelector("#section-cards").classList.remove("section6-card2");
    } else if (window.scrollY < 4500) {
        document.querySelector("#section-cards").classList.remove("section6-card3");
        document.querySelector("#section-cards").classList.add("section6-card2");
    } else if (window.scrollY < 4950) {
        document.querySelector("#section-cards").classList.remove("section6-card4", "section6-card2");
        document.querySelector("#section-cards").classList.add("section6-card3");
    } else {
        //Y si paso de los 4950 agrego la ultima card
        document.querySelector("#section-cards").classList.add("section6-card4");
    }
});

/*********** Section 8 ***********/

let gwenSection8 = document.querySelector(".section8-gwen");
let peterSection8 = document.querySelector(".section8-peter");
let milesSection8 = document.querySelector(".section8-miles");


let fondo = document.querySelector('.fondo-personaje');

//cuando el mouse entra en algun personaje, le agrego el fondo, lo agrando y achico los otros personajes
gwenSection8.addEventListener('mouseover', () => {
    fondo.classList.add('fondo-gwen');
    gwenSection8.classList.remove("achicar");
    gwenSection8.classList.add("agrandar");

    peterSection8.classList.add("achicar");
    milesSection8.classList.add("achicar");
});

gwenSection8.addEventListener('mouseout', () => {
    fondo.classList.remove('fondo-gwen');
    gwenSection8.classList.remove("achicar");
    gwenSection8.classList.remove("agrandar");

    peterSection8.classList.remove("achicar");
    milesSection8.classList.remove("achicar");
});


peterSection8.addEventListener('mouseover', () => {
    fondo.classList.add('fondo-peter');
    peterSection8.classList.remove("achicar")
    peterSection8.classList.add("agrandar");

    gwenSection8.classList.add("achicar");
    milesSection8.classList.add("achicar");
});

peterSection8.addEventListener('mouseout', () => {
    fondo.classList.remove('fondo-peter');
    peterSection8.classList.remove("achicar");
    peterSection8.classList.remove("agrandar");

    gwenSection8.classList.remove("achicar");
    milesSection8.classList.remove("achicar");

});

milesSection8.addEventListener('mouseover', () => {
    fondo.classList.add('fondo-miles');
    milesSection8.classList.add("agrandar");
    milesSection8.classList.remove("achicar");

    peterSection8.classList.add("achicar");
    gwenSection8.classList.add("achicar");
});

milesSection8.addEventListener('mouseout', () => {
    fondo.classList.remove('fondo-miles');
    milesSection8.classList.remove("agrandar");
    milesSection8.classList.remove("achicar");

    peterSection8.classList.remove("achicar");
    gwenSection8.classList.remove("achicar");
});