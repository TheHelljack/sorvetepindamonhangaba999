const botons = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo')


for (let x = 0; x<botons.length; x++){
console.log(x);
botons[x].onclick = function(){
    for (let y = 0; y< botons.length; y++){
    botons[y].classList.remove('ativo');
}botons[x].classList.add('ativo')
//botons[x].classList.remove('ativo');
}
}