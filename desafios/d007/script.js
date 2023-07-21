var Dolar = prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`)
function bot() {
    var Real = prompt(`Quantos R$ você tem na carteira? `)
    var res = document.querySelector('div#res')
    var convertido = Real / Dolar

    res.innerHTML = `Você possui R$${Real} reias, que corresponde a US$${convertido.toFixed(2)} dolares.`
}