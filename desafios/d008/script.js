function botao() {
    var prod = prompt(`Qual é o produto que você está comprando? `)
    var preço = Number(prompt(`Qual é o preço de ${prod}?`))
    var res = document.querySelector(`div#res`)
    var desc = 10/100
    var dpreço = preço * desc
    var preçof = preço - dpreço

    res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2> <p>O Preço original era R$${preço}. <br> Você acaba de ganhar R$${dpreço.toFixed(2)} de desconto (-10%) <br> No fim, você vai pagar R$${preçof.toFixed(2)} no produto ${prod} </p>`
}