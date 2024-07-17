const campoDeFormulario = document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo)=>{
campo.addEventListener("blur",()=>verificarCampo(campo))
});

function verificarCampo(campo){
    console.log("cambio", campo.nombre);
}

