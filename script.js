

function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        foto.innerHTML = '<img src="Manhã.png">'
        document.body.style.background = '#6ebff8'
    } else if (hora >= 12 && hora <= 18) {
        foto.innerHTML = '<img src="Tarde.png">' 
        document.body.style.background = '#c3c5c6'
    } else {
        foto.innerHTML = '<img src="Noite.png">'
        document.body.style.background = '#423457'
    }
}
