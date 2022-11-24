let carrito = []; 
let total = 0;
function agregarCarrito(nombreCurso,precio) {
    let curso = new Curso (precio,nombreCurso);
    carrito.push(curso);
    total += precio
    document.getElementById("totalAbonar").innerHTML="Total a Abonar = $"+total;
    localStorage.setItem('carrito',JSON.stringify(carrito));
}