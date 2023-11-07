console.log("comienza");


/*Menús desplegables*/

//todos los botones
let botones = document.querySelectorAll(".btn-menu");
//todos los menus
let submenues = document.querySelectorAll(".menu");


botones.forEach((boton, pos) => {

    boton.addEventListener("click", () => {

        submenues.forEach((submenu, subPos) => {

            if(subPos === pos){
                submenu.classList.toggle('show');
            }else{
                submenu.classList.remove('show');
            }
        })
    })
})


/*Carruseles*/

let btnatras= document.querySelectorAll(".atras");
let btnadelante = document.querySelectorAll(".adelante");
let carruseles = document.querySelectorAll(".cards");
let carruselw = document.querySelector(".carrusel");

btnatras.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        carruseles.forEach((carrusel, iCarr) => {

            if(iCarr === i) {
                clickizquierda(carrusel);
                carrusel.classList.toggle('activarIzq');
                carrusel.addEventListener('animationend', () => {
                    carrusel.classList.remove('activarIzq');
                });
            }
        });
    }); 
});

btnadelante.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        carruseles.forEach((carrusel, iCarr) => {

            if(iCarr === i) {
                clickderecha(carrusel);
                carrusel.classList.toggle('activarDer');
                carrusel.addEventListener('animationend', () => {
                    carrusel.classList.remove('activarDer');
                });
            }
        });
    });  
});

function  clickizquierda(carrusel){

    let contador = Number(carrusel.style.getPropertyValue("--i"));
    //1024 resolucion
    if(carruselw.clientWidth <1010){
        contador = contador + 450;
        if(contador > 0)return;
        carrusel.style.setProperty("--i", contador);

    }    
    //1440 resolucion
    if(carruselw.clientWidth > 1024){
        contador = contador + 250;
        if(contador > 0)return;
        carrusel.style.setProperty("--i", contador);
    }
      
}   

function clickderecha(carrusel){
      
    let contador = Number(carrusel.style.getPropertyValue("--i"));
    
    //1024 resolucion
       if(carruselw.clientWidth < 1010){
            contador -= 450;
            if(contador < -(carruselw.clientWidth*1.2))return;
            console.log(carruselw.clientWidth*1.2);
            carrusel.style.setProperty("--i", contador);
       }
    //1440 resolucion
       if(carruselw.clientWidth > 1024){
            contador -= 250;
            if(contador < -(carruselw.clientWidth-750))return;
            console.log(-(carruselw.clientWidth)+750);
            carrusel.style.setProperty("--i", contador);  
        }   
}


/*verificacion de formularios*/

let btnsForm = document.querySelectorAll(".btn-formulario");

btnsForm.forEach((boton, i) => {
    boton.addEventListener('click', () => {
        document.querySelector(".exito").classList.toggle("tilde");
        window.location.href = "home.html"; 
    });
});






