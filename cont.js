const botons = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo')


for (let x = 0; x<botons.length; x++){
console.log(x);
botons[x].onclick = function(){
    for (let y = 0; y< botons.length; y++){
    botons[y].classList.remove('ativo');
    textos[y].classList.remove('ativa');
}
botons[x].classList.add('ativo')
textos[x].classList.add('ativa');

//botons[x].classList.remove('ativo');
}
}

const contadores = document.querySelectorAll('.contador');
