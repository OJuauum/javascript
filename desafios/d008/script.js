function botao() {
    const prod = prompt(`Qual é o produto que você está comprando? `)
    const preço = Number(prompt(`Qual é o preço de ${prod}?`))
    const res = document.querySelector(`div#res`)
    const desc = 10 / 100
    const dpreço = preço * desc
    const preçof = preço - dpreço

    res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2> <p>O Preço original era R$${preço}. <br> Você acaba de ganhar R$${dpreço.toFixed(2)} de desconto (-10%) <br> No fim, você vai pagar R$${preçof.toFixed(2)} no produto ${prod} </p>`
}