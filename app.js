// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresAmigos = [];
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');

function agregarAmigo(){
    const cuadroTextoNombreAmigo = document.getElementById('amigo');
    const nombreAmigo = cuadroTextoNombreAmigo.value;

    if( nombreAmigo == ''){
        alert('Por favor, inserte un nombre de un amigo.');
    }
    else{
        actualizarListaAmigos(nombreAmigo);
        cuadroTextoNombreAmigo.value = '';
        cuadroTextoNombreAmigo.focus();
    }
}

function actualizarListaAmigos(nombreAmigo){
    //ulListaAmigos.innerHTML = "";
    //for(i=0; i < listaNombresAmigos.length;i++){
    ulListaAmigos.innerHTML += `<li  class="itemListaAmigo"><img class="icoAmigoItem" src="assets/amigoSecreto.jpeg" alt="IconoAmigoSecreto">${nombreAmigo}</li>`;
    listaNombresAmigos.push(nombreAmigo);
    //}
}

function limpiarLista(){
    ulListaAmigos.innerHTML = '';
    listaNombresAmigos.length = 0;
}

function sortearAmigo(){
    ulResultado.innerHTML = "";
    ulResultado.innerHTML = `El amigo sorteado es:<br /> ${listaNombresAmigos[Math.floor(Math.random()*listaNombresAmigos.length)]}`;

}
