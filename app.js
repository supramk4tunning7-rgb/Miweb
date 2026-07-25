// ==============================
// MODO OSCURO
// ==============================
const botonModo = document.getElementById("modo");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "oscuro");
        botonModo.innerHTML = "☀️";
    } else {
        localStorage.setItem("tema", "claro");
        botonModo.innerHTML = "🌙";
    }
});

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("dark");
    botonModo.innerHTML = "☀️";
}

// ==============================
// BUSCADOR
// ==============================
const buscador = document.querySelector(".busqueda input");
const tarjetas = document.querySelectorAll(".card");

if (buscador) {
    buscador.addEventListener("keyup", () => {
        let texto = buscador.value.toLowerCase();

        tarjetas.forEach(card => {
            let nombre = card.querySelector("h2").textContent.toLowerCase();
            if (nombre.includes(texto)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ==============================
// BOTÓN COMPRAR -> CHECKOUT
// ==============================
const botones = document.querySelectorAll(".comprar");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
});
