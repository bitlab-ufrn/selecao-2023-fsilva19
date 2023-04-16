var Filter = require('bad-words');
var filter = new Filter();

const formulario = document.getElementById('formulario');
const censurado = document.getElementById('mudar');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var mudar = formulario.querySelector('#texto').value;
    
    filter.addWords('putaria','porno','pornô','rola','pica','boquete','buceta','priquito','prikito','porra','caralho','carai','karai','pornografia');
    if(filter.isProfane(mudar)){
        censurado.innerText= 'ATENÇÃO!\nO texto contém palavras obscenas';
    }
});
