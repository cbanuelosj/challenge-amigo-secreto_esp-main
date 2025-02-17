// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    const cuadroTextoNombreAmigo = document.getElementById('amigo');
    const nombreAmigo = cuadroTextoNombreAmigo.value;

    if( nombreAmigo == ''){
        alert('Por favor, inserte un nombre de un amigo.');
    }
    else{
        listaNombresAmigos.push(nombreAmigo);
        actualizarListaAmigos();
        cuadroTextoNombreAmigo.value = '';
        cuadroTextoNombreAmigo.focus();
    }
}

function actualizarListaAmigos(){
    ulListaAmigos.innerHTML = "";
    for(i=0; i < listaNombresAmigos.length;i++){
        ulListaAmigos.innerHTML += `<li>${listaNombresAmigos[i]}</li>`;
    }
}
