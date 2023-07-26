function botao() {
    var antpreço = Number(prompt(`Qual era o preço anterior do produto?`))
    var atupreço = Number(prompt(`Qual é o preço atual do produto?`))
    var res = document.querySelector('div#res')
    var preco = atupreço - antpreço
    var vari = ((antpreço / atupreço)*100)

    

    if (antpreço > atupreço) {

        var preco = atupreço - antpreço
        var vari = (((antpreço / atupreço)-1)*100)

        res.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava ${antpreço} e agora custa ${atupreço} <br> Hoje o produto está mais caro. <br> O preço subiu ${preco} em relação ao preço anterior. <br> Uma variação de ${vari}% pra cima.</p>`
    } else {

        var preco = antpreço - atupreço
        var vari = (((antpreço / atupreço)-1)*100)

        res.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava ${antpreço} e agora custa ${atupreço} <br> Hoje o produto está mais barato. <br> O preço caiu ${preco} em relação ao preço anterior. <br> Uma variação de ${vari}% pra baixo.</p>`
    }
}