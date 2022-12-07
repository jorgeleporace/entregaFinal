let total = 0;
const divContenedor = document.querySelector('.cards')
const inicializarTotal = async () => {
    let carrito = JSON.parse(localStorage.getItem('carrito'))
    this.total = 0;
    carrito.forEach(curso => {
        const { id, descripcion, imagen, precio, titulo } = curso;
        this.total += curso.precio;
        divContenedor.innerHTML += `
        <div class="card text-center m-3 bg-info text-white" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <h6 class="card-title">Total: $${precio}</h6>
            </div>
        </div>`
    });

    document.getElementById("totalAbonar").innerHTML = "Total a Abonar = $" + this.total;
}

inicializarTotal();
