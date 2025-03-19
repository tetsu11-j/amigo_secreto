// obtener informacion
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  inputNombre.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

  amigos.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });
}

// Función para sortear un amigo y eliminarlo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  //  Eliminar el amigo del array
  amigos.splice(indiceAleatorio, 1);

  // Actualizar la lista visualmente
  actualizarLista();

  // Mostrar el resultado en pantalla
  resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎁</li>`;
}
