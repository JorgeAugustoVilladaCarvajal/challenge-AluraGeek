import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,precio,imagen){
    const producto = document.createElement("li");
    lista.className = "li";
    lista.innerHTML = ` <img src="${imagen}" alt="Foto de Stormtrooper">
                                <p>${nombre}</p>
                                <h6 class="${precio}">$ 60,00 🗑️</h6>`;

    return lista;

}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)))
}

listarProductos()