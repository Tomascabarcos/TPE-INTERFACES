let progresobarra = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let btn = document.querySelector("#btn");
let ocultar = document.querySelector(".container-loading");


let valorprogreso = 0;
let finvalorprogreso = 100;
let velocidadcarga = 50;

function cargarbarra(){
    let progreso = setInterval ( () => {
        valorprogreso = valorprogreso+1;
        porcentaje.textContent = `${valorprogreso}%`;
        progresobarra.style.width   = `${valorprogreso}%`;
        
        if(valorprogreso == finvalorprogreso){
            clearInterval(progreso);
            let ocultarBarra = () => {
                ocultar.classList.toggle("ocultar");
                document.body.classList.remove('overflow'); //oculto la barra de scroll durante la carga
                window.scrollTo(0,0); //para que cuando refresque la pagina te devuelva a arriba

            }
            setTimeout(ocultarBarra, 500); 
        }
    },velocidadcarga);
}
cargarbarra();





    

