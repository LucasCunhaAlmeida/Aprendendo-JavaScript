function calc(){
    var txtvel = window.document.getElementById('txtvel')
    var vel = Number(txtvel.value)
    var res = window.document.getElementById('res')

    if(vel > 60){
        res.innerHTML = `<p>Você excedeu o limite de <strong>60Km/h</strong></p> <p>Multa no valor <strong>R$142,00</strong></p>`
    }else{
        res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    }
}