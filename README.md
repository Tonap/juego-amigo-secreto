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
