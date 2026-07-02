const tituloPrincipal = document.getElementById('buger-town-tittle');

tituloPrincipal.addEventListener('click', function() {
    console.log("Someone click on BURGER TOWN!");
});

const elementosArroz = document.querySelectorAll('.arroz');
const tituloFoto = document.getElementById('titulo-foto');

elementosArroz.forEach(elemento => {
    elemento.addEventListener('click', function(){
       
        tituloFoto.classList.add('texto-rojo');
    });
});