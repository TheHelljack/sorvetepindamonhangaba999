alert('ola mundo');
 let nomeUsuario = prompt('Qual o seu nome?');
 let anterior = document.querySelector('#texto');

 while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual o seu nome?')
}

if(nomeUsuario == null){
    anterior.textContent = 'usuario';
}else{
    anterior.textContent = nomeUsuario;
}
anterior.textContent = nomeUsuario;