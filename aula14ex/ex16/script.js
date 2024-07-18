function contagem(){

    //Pegando o valor selecionador na caixas do tipo number
    var inicio = parseInt(document.getElementById('txtinicio').value)
    var fim = parseInt(document.getElementById('txtfim').value)
    var passo = parseInt(document.getElementById('txtpasso').value)
    var msg = document.getElementById('msg')

    //alert(`Inicio = ${inicio} Fim = ${fim} Passo = ${passo}`)

    var flag;
    // Verificando se foi colocado algum valor nas caixas inicio ou fim
    if(isNaN(inicio) || isNaN(fim)) {
        msg.innerHTML = 'Impossivel Contar'
        flag = 'nao'
    } else if(isNaN(passo) || passo == 0) {
        alert("O passo não foi preenchido corretamente! Consideramos como 1")
        passo = 1
    }

    // Fazendo a contagem
    if(flag != 'nao') {
        if(fim > inicio) {
            // Limpando a mensagem antes de iniciar a contagem
            msg.innerHTML = 'Contando: ';

            for(var cont = inicio; cont <= fim; cont += passo) {
                if(cont < fim){
                    //Para adicionar os emojis e a contagem
                    msg.innerHTML += `${cont} &#x1F449;`;
                }else{
                    //Para adicionar os emojis e a contagem
                    msg.innerHTML += `${cont} &#x1F3C1;`;
                }
            }

        } else if (fim < inicio){ 
            // Limpando a mensagem antes de iniciar a contagem
            msg.innerHTML = 'Contando: ';
            //Colocando o emoji
            msg.innerHTML += ` &#x1F449;`
            for(var cont = inicio; cont >= fim; cont -= passo) {
                if(cont > fim){
                    //Para adicionar os emojis e a contagem
                    msg.innerHTML += `${cont} &#x1F449;`;
                }else{
                    //Para adicionar os emojis e a contagem
                    msg.innerHTML += `${cont} &#x1F3C1;`;
                }
            }
        }
    }

}