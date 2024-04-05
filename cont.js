const botons = document.querySelectorAll('.objetivos');



for (let x = 0; x<botons.length; x++){
console.log(x);
botons[x].onclick = function(){
    botons[x].classList.add('ativo')
}
}