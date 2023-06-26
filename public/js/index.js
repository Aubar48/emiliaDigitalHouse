//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Home"
                : "Emilia"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404 Not Found") {
    setInterval(() => {
        document.title =
            alertShow ? "404 Not Found"
                : "Emilia"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "About") {
    setInterval(() => {
        document.title =
            alertShow ? "About"
                : "Emilia"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Music") {
    setInterval(() => {
        document.title =
            alertShow ? "Music"
                : "Emilia"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Contact") {
    setInterval(() => {
        document.title =
            alertShow ? "Contact"
                : "Emilia"

        alertShow = !alertShow
    }, 1000)
}


const botonModo = document.getElementById("modo");
botonModo.addEventListener("click", cambiarModo);

// Obtener el estado del modo del almacenamiento local
if (localStorage.getItem('modo') === 'noche') {
    document.querySelector('body').classList.add('noche');
}

function cambiarModo() {
    const body = document.querySelector("body");

    body.classList.toggle("dia");
    body.classList.toggle("noche");
    if (localStorage.getItem('modo') === 'dia') {
        localStorage.setItem('modo', 'noche');
    } else {
        localStorage.setItem('modo', 'dia');

    }

}

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element-music", {
        strings: ["MUSIC //"],
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element-404", {
        strings: ["ERROR 404, PAGE NOT FOUND!"],
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element-contact", {
        strings: ["CONTACT //"],
    }).go();
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element-about", {
        strings: ["ABOUT"],
    }).go();
});
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element-about-emilia", {
        strings: ["EMILIA"],
    }).go();
});