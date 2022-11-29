let carrito = []; 
let total = 0;
function agregarCarrito(nombreCurso,precio) {
    let curso = new Curso (precio,nombreCurso);
    carrito.push(curso);
    total += precio
    document.getElementById("totalAbonar").innerHTML="Total a Abonar = $"+total;
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

function pagar(){
    window.location.href="http://127.0.0.1:5500/sections/abonar.html";
}
function inicializar(){
    let carrito = JSON.parse(localStorage.getItem('carrito'))
    this.total = 0;
    carrito.forEach(element => {
        this.total += element.precio;

    });
    document.getElementById("totalAbonar").innerHTML="Total a Abonar = $"+this.total;
}
