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

function mostrarAmigos() {

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nombresAmigos.length; i++) {

        let li = document.createElement("li");
        li.textContent = nombresAmigos[i]
        listaAmigos.appendChild(li);

    }

}