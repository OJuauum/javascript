function carregar() {
    let msg = document.querySelector(`div#msg`)
    let img = document.querySelector(`img#imagem`)
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = `pictures/manha.jpg`
    } else if (hora >= 12 && hora < 18) {
        img.src = `pictures/tarde.jpg`
    } else {
        img.src = `pictures/noite.jpg`
    }
}

