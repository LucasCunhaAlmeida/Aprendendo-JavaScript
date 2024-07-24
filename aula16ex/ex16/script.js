var numeros = []

function adicionar(){
    
    let num = pegarNum();
    
    if(num === undefined){ // Verificando se é um número definido
        return
    }
    
    numeros.push(num) // Colocando esse número no array automaticamente no final
    let reg = document.getElementById('registros')

    let item = document.createElement('option')// Criando o elemento option
    // Mostrando com o option criado dentro do select que foi adicionado um número
    item.innerText = `Valor ${num} adicionado` 
    reg.appendChild(item)// item como filho de reg
}

function pegarNum(){

    let num = parseInt(window.document.getElementById('num').value)

    if(isNaN(num)){
        alert('Digite um número primeiro')
    }else if(num < 1 || num > 100){
        alert('Somente números entre 1 e 100')
    }else{
        return parseInt(num)
    }
   
}

function finalizar(){

    if(numeros.length === 0){
        alert("Primeiro adicione algum valor para finalizar")
        return
    }

    numeros.sort() // Ordenando o vetor

    let resultadoDiv = document.getElementById('resultado')
    resultadoDiv.innerHTML = '' // Limpar qualquer mensagem anterior
    let relatorio = document.createElement('p')
    relatorio.innerText = `Ao todo, temos ${numeros.length} números cadastrados
                           Maior valor informado foi o ${numeros[numeros.length - 1]}
                           Menor valor informado foi o ${numeros[0]}
                           A soma de todos os números foi ${somarVet()}
                           A media foi ${mediaVet()}`
    resultadoDiv.appendChild(relatorio)

}

function somarVet(){

    let soma = 0

    for(let cont in numeros){
        soma+= numeros[cont]
    }

    return soma

}

function mediaVet(){
    let soma = somarVet()

    return soma / (numeros.length)
}