// ==============================
// MODO OSCURO
// ==============================

const botonModo = document.getElementById("modo");

botonModo.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","oscuro");
        botonModo.innerHTML="☀️";
    }else{
        localStorage.setItem("tema","claro");
        botonModo.innerHTML="🌙";
    }

});

if(localStorage.getItem("tema")=="oscuro"){
    document.body.classList.add("dark");
    botonModo.innerHTML="☀️";
}

// ==============================
// BUSCADOR
// ==============================

const buscador = document.querySelector(".busqueda input");
const tarjetas = document.querySelectorAll(".card");

buscador.addEventListener("keyup",()=>{

    let texto = buscador.value.toLowerCase();

    tarjetas.forEach(card=>{

        let nombre = card.querySelector("h2").textContent.toLowerCase();

        if(nombre.includes(texto)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

// ==============================
// CARRUSEL AUTOMÁTICO
// ==============================

const slider = document.querySelector(".slides");

let posicion = 0;

setInterval(()=>{

    posicion += 920;

    if(posicion >= slider.scrollWidth-slider.clientWidth){

        posicion = 0;

    }

    slider.scrollTo({
        left:posicion,
        behavior:"smooth"
    });

},4000);

// ==============================
// BOTÓN COMPRAR
// ==============================

const botones = document.querySelectorAll(".comprar");

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        window.location.href="checkout.html";

    });

});

// ==============================
// ANIMACIÓN AL ENTRAR
// ==============================

const observer = new IntersectionObserver((items)=>{

items.forEach(item=>{

if(item.isIntersecting){

item.target.style.opacity="1";
item.target.style.transform="translateY(0px)";

}

});

});

tarjetas.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s";

observer.observe(card);

});

// ==============================
// EFECTO BOTÓN
// ==============================

botones.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0px 10px 25px rgba(15,157,88,.4)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

});