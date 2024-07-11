function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 5 && hora < 12){
        //Dia
        img.src = 'imagens/manha-fotor-20240711202658.png'
        document.body.style.background = '#FFF7BE'
    }else if(hora >= 12 && hora < 18){
        //Tarde
        img.src = 'imagens/tarde-fotor-20240711203423.png'
        document.body.style.background = '#F2EA7E'
    }else{
        //Noite
        img.src = 'imagens/noite-fotor-20240711203456.png'
        document.body.style.background = '#A488BF'
    }
}

