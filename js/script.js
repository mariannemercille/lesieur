const btPlus=document.querySelector(' .js_plus');
const conteneur_transports = document.querySelector('.conteneur-transports');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){
    conteneur_transports.classList.toggle('conteneur-transports-invisible');
}

