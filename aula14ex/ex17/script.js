function gerarTabuada() {
    // Pegando o valor selecionado nas caixas do tipo number
    var num = parseInt(document.getElementById('txtnum').value);

    var tab = document.getElementById('seletab')
    // Verificando se foi colocado algum valor nas caixa do número
    if (isNaN(num)) {
        alert('Escolha alguma tabuada')
    }else{
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }

}
