var Dolar = prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`)
function bot() {
    const Real = prompt(`Quantos R$ você tem na carteira? `)
    const res = document.querySelector('div#res')
    const convertido = Real / Dolar

    res.innerHTML = `Você possui R$${Real} reias, que corresponde a US$${convertido.toFixed(2)} dolares.`
}