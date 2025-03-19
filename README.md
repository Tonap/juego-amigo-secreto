<h1>¡Bienvenido al juego del amigo secreto!</h1>

<p>
  Para usar este juego, primero entra en el siguiente link, en donde podrás reproducir el código y los recursos completos para jugar!
  Para usarlo, debes de agregar los nombres de tus mejores amigos, y el programa sorteará entre ellos a alguno... siendo este seleccionado para ser el secreto. Entérate de quien es aquel que está guardado entre tantos.
</p>

<h2>Procesos y lógica de juego-amigo-secreto:</h2>

<h3>let nombresAmigos = []</h3>
/*Empezamos generando nuestra lista principal o Array*/

<h4>function agregarAmigo() {</h4>

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

/*Posteriormente, con esta función le damos funcionalidad al botón agregar:*/

let amigos = document.getElementById("amigo").value;

*/Obtiene el valor ingresado en el campo de entrada con el id="amigo" y lo almacena en la variable amigos.*/

console.log(amigos)

*/Muestra el contenido de la variable amigos en la consola del navegador para fines de depuración.*/

if (amigos == "") { ... }

*/Comprueba si el campo está vacío. Si lo está, muestra una alerta pidiendo al usuario que ingrese un nombre y detiene la ejecución de la función con return.*/

nombresAmigos.push(amigos);

/*Agrega el nombre ingresado al final del arreglo nombresAmigos.*/

document.getElementById("amigo").value = "";

/*Limpia el campo de entrada después de que el nombre ha sido añadido.*/

mostrarAmigos();

/*Llama a la función mostrarAmigos() para actualizar la lista visual en la interfaz.*/

<h5>function mostrarAmigos() {</h5>

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nombresAmigos.length; i++) {

        let li = document.createElement("li");
        li.textContent = nombresAmigos[i]
        listaAmigos.appendChild(li);

    }

}

/*Con esta función registramos cada nombre en la lista de origen y la mostramos:*/

function mostrarAmigos()
const listaAmigos = document.getElementById("listaAmigos");

/*Obtiene el elemento HTML con el id="listaAmigos" donde se mostrará la lista de amigos.*/

listaAmigos.innerHTML = "";

/*Vacía el contenido actual de la lista para evitar duplicaciones al volver a renderizarla.*/

for (let i = 0; i < nombresAmigos.length; i++) { ... }

/*Recorre el arreglo nombresAmigos para acceder a cada nombre almacenado.*/

let li = document.createElement("li");

/*Crea un nuevo elemento li (elemento de lista).*/

li.textContent = nombresAmigos[i];

/*Asigna el contenido del nombre actual del arreglo a este elemento li.*/

listaAmigos.appendChild(li);

/*Agrega el elemento li recién creado a la lista no ordenada (ul) en la interfaz.*/

<h6>function sortearAmigo() {</h6>

    if(nombresAmigos.length === 0) {

        alert("no hay amigos para ser sorteados");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSorteado = nombresAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
} 

/*Con esta función vamos a encargarnos de la elección aleatoria del sorteo en el juego*/

function sortearAmigo() {
if (nombresAmigos.length === 0) { 
    alert("no hay amigos para ser sorteados");
    return;
  }
 }

/*Comprueba si el arreglo nombresAmigos está vacío. Si no hay nombres para sortear, muestra una alerta y detiene la ejecución con return.*/

const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

/*Genera un número aleatorio entero entre 0 y el tamaño del arreglo nombresAmigos menos uno. Este número representa un índice válido del arreglo.*/

const amigoSorteado = nombresAmigos[indiceAleatorio];

/*Usa el índice aleatorio generado para obtener un nombre del arreglo nombresAmigos.*/

document.getElementById("resultado").innerHTML = \Amigo sorteado: ${amigoSorteado}\;

/*Actualiza el contenido del elemento con id="resultado" en la interfaz para mostrar el nombre del amigo sorteado.*/

