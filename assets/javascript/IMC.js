

function CalculaIMC() {


    
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    var IMC = 0;
    var IMC = peso / (altura * altura);
    
    IMC = IMC.toFixed(2);

    

    ExibeIMC(IMC);
    validaIMC(peso, altura);
    
    removeImcTabela() ///Trabalhando nessa função
    resultadoTabela(IMC);
    
}

function ExibeIMC(IMC){

   

    var ExibirIMC = document.getElementById('IMC');
    ExibirIMC.innerHTML = 'Seu IMC: ' +IMC;

    //Limpa os inputs
    document.getElementById('peso').value='';
    document.getElementById('altura').value='';

    

}

function resultadoTabela(IMC) {

    

    if(IMC < 18.5){
        var selecionado = document.getElementById('abaixo18');
        selecionado.classList.add("faixaPeso");
        
    }

    if(IMC >= 18.5 && IMC < 25){
        var selecionado = document.getElementById('abaixo24');
        selecionado.classList.add("faixaPeso");
    }

    if(IMC >= 25 && IMC < 30){
        var selecionado = document.getElementById('abaixo29');
        selecionado.classList.add("faixaPeso");
    }

    if(IMC >= 30 && IMC < 35){
        var selecionado = document.getElementById('abaixo34');
        selecionado.classList.add("faixaPeso");
    }

    if(IMC >= 35 && IMC < 40){
        var selecionado = document.getElementById('abaixo39');
        selecionado.classList.add("faixaPeso");
    }

    if(IMC >= 40){
        var selecionado = document.getElementById('acima40');
        selecionado.classList.add("faixaPeso");
    }
}

function removeImcTabela(){

    var tabela = document.querySelector('tbody');

    for(var i = 0; i < tabela.children.length; i++){
        if(tabela.children[i].classList.contains('faixaPeso') == true){
            tabela.children[i].classList.remove("faixaPeso");
        }
    }
}

function validaIMC(peso, altura){
    if(altura <= 0 || altura > 10){
        alert("altura invalida");
    }

    if(peso <= 0 || peso >= 999){
        alert("peso invalido");
    }
}