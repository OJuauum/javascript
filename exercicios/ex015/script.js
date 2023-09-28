function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector(`input#txtano`)
    let res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        let fsex = document.getElementsByTagName (`radsex`)
        let idade = ano - Number(fano.value) 
        let genero = ``
        if (fsex[0].checked) {
            genero = `Homem`
        } else if (fsex[1].checked) {
            genero = `Mulher`
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}