function carregar() {
    let msg = document.querySelector(`div#msg`)
    let img = document.querySelector(`img#imagem`)
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = `pictures/manha.jpg`
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = `pictures/tarde.jpg`
        document.body.style.background = '#b9846f'
    } else {
        img.src = `pictures/noite.jpg`
        document.body.style.background = '#515154'
    }
}

