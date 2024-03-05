alert('ola mundo');
 let nomeUsuario = prompt('Qual o seu nome?');
 let anterior = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual o seu nome?')
}

anterior.textContent = nomeUsuario;