// class Producto{
//     constructor(id,nombre,precio){
//         this.id =id;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const producto1 = new Producto(1,'First Steps in English'
const divContenedor = document.querySelector('.cards')
const buscarTodosCursos = async () => {
    const cursosFetch = await fetch('cursos.json')
    const cursosJSON = await cursosFetch.json();
    console.log(cursosJSON);
    cursosJSON.forEach(curso => {
        const { id, descripcion, imagen, precio, titulo } = curso;
        divContenedor.innerHTML += `
        <div class="card text-center m-3" style="width: 18rem;">
        <img src="../images/abc.jpeg" class="card-img-top" alt="First Steps in English">
        <div class="card-body">
            <h5 class="card-title">FIRST STEPS IN ENGLISH</h5>
            <p class="card-text">ABC Courses.</p>
            <button class="btn btn-primary" onclick="agregarCarrito('First Steps In English',27999)">ADD TO CART</button>
        </div>
    </div>
    `
    });
}
buscarTodosCursos();
