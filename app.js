// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    const cuadroTextoNombreAmigo = document.getElementById('amigo');
    const nombreAmigo = cuadroTextoNombreAmigo.value;

    if( nombreAmigo == ''){
        alert('Por favor escribe el nombre de un amigo');
    }
    else{
        cuadroTextoNombreAmigo.value = '';
        listaNombresAmigos.push(nombreAmigo);
        actualizarListaAmigos(nombreAmigo)
    }
}

function actualizarListaAmigos(nuevoAmigo){
    ulListaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
}
