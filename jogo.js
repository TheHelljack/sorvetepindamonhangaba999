let numeroSecreto = 87;
consolw.log(numeroSecreto);
let chute = '';

while(chute == '') {
    chute = prompt('escolha um numero de 0 a 100');

}

if( numeroSecreto == chute) {
    alert('boa molekee ');
    console.log('parabens, acertou!')
}else {
    alert('errou marimo');
    console.log('infelizmente errou')
}
