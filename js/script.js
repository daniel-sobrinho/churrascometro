let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if(adultos <= 0 || adultos == ""){
        alert("Pelo menos um adulto deve participar do churrasco");
        inputAdultos.focus();
        return;
    }

    if(criancas < 0){
        alert("Este valor não pode ser menor que zero");
        inputCriancas.focus();
        return;
    }

    if(duracao == ""){
        alert("Você deve informar a duração do evento");
        inputDuracao.focus();
        return;
    }else if(duracao <= 0){
        alert("A duração do evento não pode ser menor que uma hora");
        inputDuracao.focus();
        return;
    }
    
    let quantTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);

    let quantTotalCerveja = cervejaPorPessoa(duracao) * adultos;

    let quantTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 * criancas);

    resultado.innerHTML  = `<p> <img src="./icons/meat.png" alt="Pedaço de Carne"> ${quantTotalCarne/1000} kg de carne</p>`;
    resultado.innerHTML += `<p> <img src="./icons/soda.png" alt="Lata de Cerveja"> ${Math.ceil(quantTotalCerveja/355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p> <img src="./icons/softdrinks.png" alt="Refrigerantes"> ${Math.ceil(quantTotalBebidas / 2000)} garrafas (2L) de Bebidas</p>`;
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1000;
    }else{
        return 1500;
    }
}

