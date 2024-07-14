function calcularIdade(){

    //Pegando o valor selecionador na caixa do ano
    var ano_nas = document.getElementById('datanas').value
    //Pegando qual sexo selecionado
    var sexo_selecionado = document.querySelector('input[name="sexo"]:checked').value;
    var data_atual = new Date()
    //Pegando o ano atual do sistema
    var ano_atual = data_atual.getFullYear()
    //fazendo a conta de qual idade a pessoa tem
    var idade = ano_atual - ano_nas

    if(sexo_selecionado == "M"){
        //Para Homens
        homens(idade)
    }else{
        mulheres(idade)
        //Para mulheres
    }

}

function homens(idade){
    
    var img = document.getElementById('img')
    var msg = document.getElementById('msg')

    if(idade >= 0 && idade <= 1){
        img.src = 'imagens/masculino/bebê masculino.png'
        msg.innerHTML = `Detectamos um bebê de ${idade} ano de idade`
    }else if(idade >= 2 && idade <= 12){
        img.src = 'imagens/masculino/criança masculino.png'
        msg.innerHTML = `Detectamos um menino de ${idade} anos de idade`
    }else if(idade > 12 && idade <= 15){
        img.src = 'imagens/masculino/pré-adolescente masculino.png'
        msg.innerHTML = `Detectamos um adolescente de ${idade} anos de idade`
    }else if(idade > 15 && idade <= 25){
        img.src = 'imagens/masculino/jovem masculino.png'
        msg.innerHTML = `Detectamos um jovem de ${idade} anos de idade`
    }else if(idade > 25 && idade <= 45){
        img.src = 'imagens/masculino/adulto masculino.png'
        msg.innerHTML = `Detectamos um homem adulto de ${idade} anos de idade`
    }else if(idade > 45 && idade <= 65){
        img.src = 'imagens/masculino/adulto meia idade masculino.png'
        msg.innerHTML = `Detectamos um homem de meia idade de ${idade} anos de idade`
    }else if(idade > 65 && idade <= 130){
        img.src = 'imagens/masculino/idoso masculino.png'
        msg.innerHTML = `Detectamos um homem idoso de ${idade} anos de idade`
    }else{
        msg.innerHTML = '<strong>Ano incorreto</strong>'
    }

}

function mulheres(idade){

    var img = document.getElementById('img')
    var msg = document.getElementById('msg')

    if(idade >= 0 && idade <= 1){
        img.src = 'imagens/feminino/Bebê feminina.png'
        msg.innerHTML = `Detectamos uma bebê de ${idade} ano de idade`
    }else if(idade >= 2 && idade <= 12){
        img.src = 'imagens/feminino/criança feminina.png'
        msg.innerHTML = `Detectamos uma menina de ${idade} anos de idade`
    }else if(idade > 12 && idade <= 15){
        img.src = 'imagens/feminino/pré-adolescente feminina.png'       
        msg.innerHTML = `Detectamos uma adolescente de ${idade} anos de idade`
    }else if(idade > 15 && idade <= 25){
        img.src = 'imagens/feminino/jovem feminina.png'
        msg.innerHTML = `Detectamos uma jovem de ${idade} anos de idade`
    }else if(idade > 25 && idade <= 45){
        img.src = 'imagens/feminino/adulta feminina.png'
        msg.innerHTML = `Detectamos uma mulher adulta de ${idade} anos de idade`
    }else if(idade > 45 && idade <= 65){
        img.src = 'imagens/feminino/adulta meia idade feminina .png'
        msg.innerHTML = `Detectamos uma mulher de meia idade de ${idade} anos de idade`
    }else if(idade > 65 && idade <= 130){
        img.src = 'imagens/feminino/idosa feminina.png'
        msg.innerHTML = `Detectamos uma mulher idosa de ${idade} anos de idade`
    }else{
        msg.innerHTML = '<strong>Ano incorreto</strong>'
    }

}