// Datos de ejemplo (pueden ser reemplazados con una base de datos o servicio web)
let datos = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Carlos", edad: 22 }
];

// Función para mostrar los datos en la tabla
function mostrarDatos() {
    const tbody = document.getElementById("tbodyDatos");
    tbody.innerHTML = "";

    datos.forEach((dato, index) => {
        const fila = `<tr>
                        <td>${dato.nombre}</td>
                        <td>${dato.edad}</td>
                        <td>
                            <button type="button" onclick="editarRegistro(${index})">Editar</button>
                            <button type="button" onclick="eliminarRegistro(${index})">Eliminar</button>
                        </td>
                    </tr>`;
        tbody.innerHTML += fila;
    });
}

// Función para crear o actualizar un registro
function crearActualizarRegistro() {
    const form = document.getElementById("crudForm");
    const nombre = form.elements["nombre"].value;
    const edad = form.elements["edad"].value;

    if (nombre && edad) {
        const nuevoRegistro = { nombre, edad };

        // Verificar si se está editando un registro existente
        const indiceEdicion = form.dataset.indiceEdicion;
        if (indiceEdicion !== undefined) {
            datos[indiceEdicion] = nuevoRegistro;
            form.dataset.indiceEdicion = undefined;
        } else {
            datos.push(nuevoRegistro);
        }

        mostrarDatos();
        form.reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para editar un registro
function editarRegistro(indice) {
    const form = document.getElementById("crudForm");
    const { nombre, edad } = datos[indice];

    form.elements["nombre"].value = nombre;
    form.elements["edad"].value = edad;
    form.dataset.indiceEdicion = indice;
}

// Función para eliminar un registro
function eliminarRegistro(indice) {
    datos.splice(indice, 1);
    mostrarDatos();
}

// Mostrar los datos al cargar la página
mostrarDatos();
