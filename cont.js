const botons = document.querySelectorAll('.objetivos');



for (let x = 0; x<botons.length; x++){
console.log(x);
botons[y].onclick = function(){
    for (let y = 0; y< botons.length; y++)
    botons[x].classList.add('ativo')
}
//botons[x].classList.remove('ativo');
}