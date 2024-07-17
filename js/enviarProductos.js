import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){

    evento.preventDefault();

    const imagen = document.querySelector("data-imagen").value;
    const nombre = document.querySelector("data-nombre").value;
    const precio = document.querySelector("data-enviar").value;

    const descripcion = Math.floor(Math.random*10).toString();

   await conexionAPI.enviarProducto(imagen,nombre,precio);

   window,location.href="../pages/envio-concluido.html";
}

formulario.addEventListener("submit",evento => crearProducto(evento));