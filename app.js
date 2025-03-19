// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = []

function agregarAmigo() {

    let amigos = document.getElementById("amigo").value;
    console.log(amigos) 

    if (amigos == "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    nombresAmigos.push(amigos);

    document.getElementById("amigo").value = "";
    
    mostrarAmigos()
}