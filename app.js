// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    let cuadroTextoNomAmigo = document.getElementById('amigo');
    let nombreAmigo = cuadroTextoNomAmigo.value;
    if( nombreAmigo == ''){
        alert('Por favor escribe el nombre de un amigo');
    }
    else{
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
        cuadroTextoNomAmigo.value = '';
    }
}
