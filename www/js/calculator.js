function calcularcopos() {
    var comprimento = document.getElementById('comprimento').value;
    var espacamento = document.getElementById('espacamento').value;
    var linhas = document.getElementById('linhas').value;
    

    var coposporlinha = comprimento * 100 / espacamento;
    var total = coposporlinha * linhas
    if(total < 0  || coposporlinha < 0  ){
        document.getElementById("resultado").innerHTML = 'O valor é inválido!'
    }else{
    document.getElementById("resultado").innerHTML = 'A quantidade de copos por linha é <span style="font-weight: bold;">'+coposporlinha+'</span> e a quantidade de copos total é <span style="font-weight: bold;">'+total+'</span>'
    }
   
}
