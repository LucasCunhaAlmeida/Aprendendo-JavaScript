function descobrir(){
    var txtnac = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')

    if((txtnac.value == 'Brasil') || (txtnac.value == "brasil")){
        res.innerHTML = `<p>Você é  Brasileiro!!!</p>`
    }else{
        res.innerHTML = `<p>Você é estrangeiro</p>`
    }
}