async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos");

    const conexionConvertida = conexion.json();

    //console.log(conexionComvertida);
    return conexionConvertida
}

async function enviarProducto(imagen,nombre,precio){
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:imagen,
            nombre:`${nombre} nombre`,
            precio:precio
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarProductos,enviarProducto
}

//listarProductos()