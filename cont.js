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
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date('2040-08-07T00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor (tempoFinal/1000);
let minutos = Math.floor (segundos/60);
let horas = Math.floor (minutos/60);
let dias = Math.floor (horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

contadores [0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos " ;


