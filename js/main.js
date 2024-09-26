// objetos
let discos = [
    {
        id: 1,
        titulo: "Clics Modernos",
        precio: 25000,
        imagen: "/img/Clics Modernos.jpg",
    },
    {
        id: 2,
        titulo: "Como conseguir chicas",
        precio: 17000,
        imagen: "/img/Como conseguir chicas.jpg",
    },
    {
        id: 3,
        titulo: "Piano Bar",
        precio: 20000,
        imagen: "/img/Piano bar.jpg",
    },
    {
        id: 4,
        titulo: "La logica del escorpion",
        precio: 19000,
        imagen: "/img/La logica del escorpion.jpg",
    }
];

// Función para recibir los datos del cliente
function crearCliente() {
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;

    if (!nombre || !direccion || !telefono) {
        alert("Por favor, necesitamos sus datos para el pedido.");
        return;
    }

    let cliente = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono
    };

    console.log("Cliente creado:", cliente);
}
// funcion para mostrar los discos en html
function mostrarDiscos() {
    const container = document.getElementById('productosContainer');
    discos.forEach(disco => {

        const divDisco = document.createElement('div');
        divDisco.className = 'producto';

        // imagen
        const img = document.createElement('img');
        img.src = disco.imagen;
        img.alt = disco.nombre;

        // nombre del disco
        const nombre = document.createElement('p');
        nombre.textContent = disco.nombre;

        // precio del disco
        const precio = document.createElement('p');
        precio.textContent = `Precio: $${disco.precio}`;

        divDisco.appendChild(img);
        divDisco.appendChild(nombre);
        divDisco.appendChild(precio);

        // Agregar el div del disco al contenedor
        container.appendChild(divDisco);
    });
}
mostrarDiscos();