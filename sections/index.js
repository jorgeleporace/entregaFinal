let carrito = [];
let total = 0;
const divContenedor = document.querySelector('.cards')

const buscarTodosCursos = async () => {
    const cursosFetch = await fetch('cursos.json')
    const cursosJSON = await cursosFetch.json();
    console.log(cursosJSON);
    cursosJSON.forEach(curso => {
        const { id, descripcion, imagen, precio, titulo } = curso;
        divContenedor.innerHTML += `
        <div class="card text-center m-3" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="First Steps in English">
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descripcion}</p>
            <button class="btn btn-primary" onclick="agregarCarrito(${id})">ADD TO CART</button>
        </div>
    </div>
    `
    });
}

buscarTodosCursos();

const inicializarTotal = async () => {
    let carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    this.total = 0;
    if (carritoStorage) {
        carritoStorage.forEach(curso => {
            this.total += curso.precio;
            carrito.push(curso);
        });
    }

    document.getElementById("totalAbonar").innerHTML = "Total a Abonar = $" + this.total;
}

inicializarTotal();


const agregarCarrito = async (id) => {
    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
        const c = JSON.parse(carritoStorage);
        if (c.some(curso => curso.id == id)) {
            alert("El curso ya se encuentra en el carrito de compras");
            return;
        }
    }

    const cursosFetch = await fetch('cursos.json')
    const cursosJSON = await cursosFetch.json();
    const curso = cursosJSON.find(curso => curso.id === id);
    carrito.push(curso);
    total += curso.precio;

    document.getElementById("totalAbonar").innerHTML = "Total a Abonar = $" + total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function pagar() {
    window.location.href = "http://127.0.0.1:5500/sections/abonar.html";
}

function inicializar() {
    let carrito = JSON.parse(localStorage.getItem('carrito'))
    this.total = 0;
    carrito.forEach(element => {
        this.total += element.precio;
    });
    document.getElementById("totalAbonar").innerHTML = "Total a Abonar = $" + this.total;
}
